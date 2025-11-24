import { useState } from "react";
import { ChevronRight, ChevronDown, Loader2 } from "lucide-react";
import type { UIMessage } from "@agent-labs/agent-chat";

interface ToolInvocationListProps {
  message: UIMessage;
}

/**
 * Renders tool invocation parts for a single assistant message.
 * - Keeps the raw structure from AgentChat (toolInvocation).
 * - Limits height with scroll so large args/results不会撑爆布局。
 */
export const ToolInvocationList = ({ message }: ToolInvocationListProps) => {
  const parts = message.parts || [];
  const toolParts = parts.filter((part) => part.type === "tool-invocation") as {
    type: "tool-invocation";
    toolInvocation: {
      toolCallId: string;
      toolName: string;
      status: string;
      args: unknown;
      result?: unknown;
      error?: string;
    };
  }[];

  if (!toolParts.length) return null;

  return (
    <div className="mt-2 space-y-2">
      {toolParts.map((part, idx) => {
        return (
          <ToolInvocationItem key={idx} invocation={part.toolInvocation} />
        );
      })}
    </div>
  );
};

interface ToolInvocationItemProps {
  invocation: {
    toolCallId: string;
    toolName: string;
    status: string;
    args: unknown;
    result?: unknown;
    error?: string;
  };
}

const ToolInvocationItem = ({ invocation }: ToolInvocationItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const isPending =
    invocation.status === "call" || invocation.status === "partial-call";
  const isError = invocation.status === "error";

  const argsPreview =
    typeof invocation.args === "string"
      ? invocation.args
      : JSON.stringify(invocation.args, null, 2);

  const hasResult =
    invocation.result !== undefined ||
    (invocation.error && invocation.error.length > 0);

  const resultText =
    invocation.error && invocation.error.length
      ? `error: ${invocation.error}`
      : invocation.result !== undefined
      ? typeof invocation.result === "string"
        ? invocation.result
        : JSON.stringify(invocation.result, null, 2)
      : undefined;

  return (
    <div className="rounded-md border border-dashed border-border/60 bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1 font-semibold text-[11px] uppercase tracking-wide">
          <span>
            Tool: {invocation.toolName}{" "}
            <span className="ml-1 text-[10px] font-normal opacity-70">
              ({invocation.status})
            </span>
          </span>
          {isPending && (
            <Loader2 className="h-3 w-3 text-amber-500 animate-spin" />
          )}
          {isError && (
            <span className="ml-1 text-[11px] text-red-500">错误</span>
          )}
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-muted-foreground hover:text-foreground px-1 py-0.5 rounded-sm"
          aria-label={expanded ? "收起工具详情" : "展开工具详情"}
        >
          {expanded ? (
            <ChevronDown className="h-3.5 w-3.5" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      {expanded && (
        <div className="space-y-1 mt-1">
          <div className="text-[11px] font-mono opacity-80">
            <span className="font-semibold">args:</span>{" "}
            <span className="break-all whitespace-pre-wrap">
              {argsPreview}
            </span>
          </div>
          {hasResult && resultText && (
            <div className="text-[11px] font-mono opacity-80 max-h-40 overflow-y-auto overflow-x-auto pr-1">
              <span className="font-semibold">result:</span>{" "}
              <span className="break-all whitespace-pre-wrap">
                {resultText}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
