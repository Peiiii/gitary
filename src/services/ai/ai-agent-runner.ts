import { Observable, type Unsubscribable } from "rxjs";
import {
  type AgentEvent,
  type Context as AgentContext,
  type IAgent,
  type RunAgentInput,
  type Tool as AgentTool,
  ToolInvocationStatus,
  type UIMessage,
} from "@agent-labs/agent-chat";
import {
  convertOpenAIChunksToAgentEventObservable,
  type OpenAIChatChunk,
} from "@agent-labs/agent-toolkit";
import { aiGateway, type AIMessage } from "./gateway";
import type { AIRole, AIToolDefinition } from "./types";

/**
 * Bridge between @agent-labs/agent-chat's IAgent interface and our existing
 * aiGateway + agent-toolkit pipeline.
 *
 * - AgentChatController / useAgentChat 管理 UIMessage & 工具调用。
 * - 这里负责把 UIMessage + ToolDefinition + Context 转成 AIGatewayRequest，
 *   再用 agent-toolkit 把 OpenAI chunk 流转换为 AgentEvent 流。
 */
class AIGatewayAgent implements IAgent {
  run(input: RunAgentInput) {
    const messageId =
      input.runId || input.threadId || `agent-${Date.now().toString(36)}`;

    const aiMessages = truncateMessagesByChars(
      buildAIMessagesFromUI(input.messages, input.context)
    );
    const toolDefs = buildToolDefs(input.tools);

    return new Observable<AgentEvent>((subscriber) => {
      let innerSub: Unsubscribable | null = null;

      aiGateway
        .chatStreamChunks({
          messages: aiMessages,
          tools: toolDefs,
        })
        .then((stream: AsyncIterable<OpenAIChatChunk>) => {
          const raw$ = convertOpenAIChunksToAgentEventObservable(
            stream,
            {
              messageId,
              threadId: input.threadId,
            } as any
          ) as unknown as Observable<AgentEvent>;

          innerSub = raw$.subscribe({
            next: (evt) => subscriber.next(evt),
            error: (err) => subscriber.error(err),
            complete: () => subscriber.complete(),
          });
        })
        .catch((err) => {
          subscriber.next({
            type: "RUN_ERROR",
            error: err instanceof Error ? err.message : String(err),
            threadId: input.threadId,
          } as AgentEvent);
          subscriber.error(err);
        });

      return () => {
        innerSub?.unsubscribe();
      };
    });
  }

  // 当前仅依赖 RxJS 取消订阅来停止 UI 更新。
  // 如需真正中断网络请求，可以在 aiGateway / Provider 层补充 abort 能力，并在这里调用。
  abortRun(): void {
    // no-op
  }
}

function buildAIMessagesFromUI(
  uiMessages: UIMessage[],
  contexts?: AgentContext[]
): AIMessage[] {
  const msgs: AIMessage[] = [];

  // Base system prompt for the in-app assistant.
  const baseSystemPrompt =
    "你是一个项目内的 AI 助手。你可以查看当前页面信息，并在需要时调用可用的工具来辅助用户操作。";
  msgs.push({ role: "system", content: baseSystemPrompt });

  if (contexts && contexts.length) {
    const ctxText = contexts
      .map((c) => `${c.description}:\n${c.value}`)
      .join("\n\n");
    msgs.push({ role: "system", content: ctxText });
  }

  for (const msg of uiMessages) {
    const segments: string[] = [];
    for (const part of msg.parts) {
      if (part.type === "text") {
        segments.push(part.text);
      } else if (part.type === "tool-invocation") {
        const inv = part.toolInvocation;
        if (
          inv.status === ToolInvocationStatus.RESULT &&
          inv.result !== undefined
        ) {
          const resultText =
            typeof inv.result === "string"
              ? inv.result
              : JSON.stringify(inv.result);
          segments.push(`工具 ${inv.toolName} 的结果：${resultText}`);
        }
      }
    }

    const content = segments.join("\n\n").trim();
    if (!content) continue;

    let role: AIRole;
    switch (msg.role) {
      case "system":
      case "user":
      case "assistant":
        role = msg.role;
        break;
      default:
        role = "user";
    }

    msgs.push({ role, content });
  }

  return msgs;
}

// Rough character-level trimming to avoid sending overly large prompts.
// This is a safeguard on top of provider-side limits; it keeps the most
// recent non-system messages while always preserving system prompts.
const MAX_TOTAL_CONTENT_CHARS = 30_000;
const MAX_PER_MESSAGE_CHARS = 10_000;

function truncateMessagesByChars(
  messages: AIMessage[],
  maxTotalChars: number = MAX_TOTAL_CONTENT_CHARS
): AIMessage[] {
  if (!messages.length) return messages;

  const systemMessages = messages.filter((m) => m.role === "system");
  const otherMessages = messages.filter((m) => m.role !== "system");

  const clampContent = (content: string, limit: number): string =>
    content.length > limit ? content.slice(0, limit) : content;

  let remaining = maxTotalChars;
  const result: AIMessage[] = [];

  const pushWithClamp = (msg: AIMessage): void => {
    if (remaining <= 0) return;
    const original = msg.content ?? "";
    if (!original) return;

    let content = clampContent(original, MAX_PER_MESSAGE_CHARS);
    if (content.length > remaining) {
      // Keep the tail part when we are close to the limit; the latest
      // portion of a long message is usually more relevant.
      content = content.slice(content.length - remaining);
    }

    if (!content.length) return;
    remaining -= content.length;
    result.push({ ...msg, content });
  };

  // 1) Preserve all system messages (in order), clamped per message.
  for (const msg of systemMessages) {
    pushWithClamp(msg);
    if (remaining <= 0) {
      return result;
    }
  }

  // 2) Add non-system messages from most recent backwards.
  const preserved: AIMessage[] = [];
  for (let i = otherMessages.length - 1; i >= 0 && remaining > 0; i--) {
    const msg = otherMessages[i];
    const original = msg.content ?? "";
    if (!original) continue;

    let content = clampContent(original, MAX_PER_MESSAGE_CHARS);
    if (content.length > remaining) {
      content = content.slice(content.length - remaining);
    }
    if (!content.length) continue;

    remaining -= content.length;
    preserved.push({ ...msg, content });
  }

  // Messages were collected from latest to oldest; restore chronological order.
  preserved.reverse();
  result.push(...preserved);
  return result;
}

function buildToolDefs(
  tools?: AgentTool[]
): AIToolDefinition[] | undefined {
  if (!tools || tools.length === 0) return undefined;
  return tools.map((tool) => ({
    type: "function" as const,
    function: {
      name: tool.name,
      description: tool.description,
      parameters: tool.parameters as any,
    },
  }));
}

export const agent = new AIGatewayAgent();
