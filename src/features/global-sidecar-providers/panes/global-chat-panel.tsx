import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, ArrowUp, Copy, Check } from "lucide-react";
import { cn } from "@/toolkit/utils/shadcn-utils";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import { useColorMode } from "@chakra-ui/react";
import { AIAssistantIcon } from "@/components/icons/ai-assistant-icon";
import { useStickyAutoScroll } from "@/hooks/use-sticky-autoscroll";
import { agent } from "@/services/ai/ai-agent-runner";
import { GLOBAL_AGENT_TOOLS } from "../tools";
import { ToolInvocationList } from "../components/tool-invocation-list";
import {
  useAgentChat,
  useParseTools,
  type Tool as AgentTool,
  type UIMessage,
} from "@agent-labs/agent-chat";

const CopyButton = ({ content, isGenerating }: { content: string; isGenerating?: boolean }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  if (isGenerating) {
    return null;
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 text-muted-foreground/60 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
      title={t("globalChat.copyContent")}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
};

export const GlobalChatPanel = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { colorMode } = useColorMode();
  const { containerRef, notifyNewItem, scrollToBottom } = useStickyAutoScroll();

  // Global tools for the assistant; defined in a separate module for maintainability.
  const agentTools: AgentTool[] = useMemo(
    () => GLOBAL_AGENT_TOOLS as AgentTool[],
    []
  );
  const { toolDefs, toolExecutors } = useParseTools(agentTools);

  const {
    messages: uiMessages,
    isAgentResponding,
    sendMessage,
  } = useAgentChat({
    agent,
    toolDefs,
    toolExecutors,
    contexts: [],
    initialMessages: [],
  });

  const extractTextFromUIMessage = (message: UIMessage): string => {
    const parts = message.parts || [];
    return parts
      .filter((part) => part.type === "text")
      .map((part: any) => part.text as string)
      .join("\n\n");
  };

  const messages = uiMessages;
  const lastAssistantId = useMemo(() => {
    const reversed = [...uiMessages].reverse();
    const last = reversed.find((m) => m.role === "assistant");
    return last?.id;
  }, [uiMessages]);

  useEffect(() => {
    notifyNewItem();
  }, [messages, notifyNewItem]);


  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const target = e.target;
    target.style.height = '40px';
    const newHeight = Math.min(Math.max(target.scrollHeight, 40), 200);
    target.style.height = `${newHeight}px`;
  };

  const handleSend = async () => {
    if (!input.trim() || isAgentResponding) return;
    const prompt = input.trim();
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = '40px';
    }
    try {
      await sendMessage(prompt);
    } catch (error) {
      console.error("Global AI assistant error:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
      scrollToBottom();
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">
      <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth" ref={containerRef}>
        <div className="max-w-3xl mx-auto w-full">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 animate-in fade-in duration-500">
              <div className="w-16 h-16 mb-6">
                <AIAssistantIcon className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                {t("globalChat.welcomeTitle") || "How can I help you today?"}
              </h3>
              <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                {t("globalChat.welcomeDesc") || "I'm your global AI assistant. Whether it's code problems, creative writing, or everyday chat, I'm happy to help."}
              </p>
            </div>
          )}
          <div className="py-4 space-y-6">
            {messages
              .filter((msg) => msg.role === "user" || msg.role === "assistant")
              .map((msg) => {
                const contentText = extractTextFromUIMessage(msg);
                const hasContent = contentText.trim().length > 0;
                const isAssistant = msg.role === "assistant";
                const hasTools =
                  (msg.parts || []).some(
                    (part) => (part as any).type === "tool-invocation"
                  );
                const isLastAssistant =
                  isAssistant && msg.id === lastAssistantId;
                const showTyping =
                  isLastAssistant &&
                  isAgentResponding &&
                  !hasContent &&
                  !hasTools;

                return (
                  <div
                    key={msg.id}
                    className="w-full group animate-in slide-in-from-bottom-2 duration-300"
                  >
                    {isAssistant ? (
                      <div className="flex flex-col gap-1.5">
                        <div className="px-4 group/content relative">
                          {showTyping ? (
                            <div className="flex items-center gap-2 text-muted-foreground h-7">
                              <span className="w-1.5 h-1.5 bg-violet-500/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                              <span className="w-1.5 h-1.5 bg-violet-500/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                              <span className="w-1.5 h-1.5 bg-violet-500/40 rounded-full animate-bounce" />
                            </div>
                          ) : hasContent ? (
                            <>
                              <MarkdownRenderer
                                content={contentText}
                                isDark={colorMode === "dark"}
                              />
                              <div className="mt-2 opacity-0 group-hover/content:opacity-100 transition-opacity">
                                <CopyButton
                                  content={contentText}
                                  isGenerating={isAgentResponding && isLastAssistant}
                                />
                              </div>
                            </>
                          ) : null}

                          <ToolInvocationList message={msg} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1.5 items-end">
                        <div className="px-4 w-full flex justify-end">
                          <div className="bg-secondary/80 text-secondary-foreground px-4 py-2.5 rounded-[20px] rounded-tr-md shadow-sm max-w-full inline-block border border-border/5">
                            <div className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">
                              {contentText}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      
      <div className="flex-shrink-0 border-t border-border bg-background z-10">
        <div className="max-w-3xl mx-auto w-full p-4">
          <div className="relative flex items-end gap-2 rounded-[26px] bg-background border border-border p-2">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder={t("globalChat.placeholder") || "输入消息..."}
              className="flex-1 resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-3 py-2.5 text-[15px] placeholder:text-muted-foreground/50 overflow-y-auto"
              style={{ height: '40px', minHeight: '40px', maxHeight: '200px' }}
              rows={1}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isAgentResponding}
              size="icon"
              className={cn(
                "h-8 w-8 rounded-full transition-all duration-200 flex-shrink-0 mb-0.5 mr-0.5",
                !input.trim()
                  ? "bg-muted text-muted-foreground hover:bg-muted/80" 
                  : "bg-gradient-to-br from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-sm"
              )}
            >
              {isAgentResponding ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowUp className="h-5 w-5" />
              )}
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground/40 text-center mt-2 font-medium tracking-wide uppercase">
            {t("globalChat.disclaimer") || "AI can make mistakes. Check important info."}
          </p>
        </div>
      </div>
    </div>
  );
};
