import { useCallback, useState, type MutableRefObject } from "react";
import { useTranslation } from "react-i18next";
import type {
  ExcalidrawImperativeAPI,
  ExcalidrawInitialDataState,
} from "@excalidraw/excalidraw/types";
import { useToast } from "@/hooks/use-toast";
import { useGlobalSidecar } from "@/features/global-sidecar-providers";
import { excalidrawAIService } from "@/services/ai/excalidraw-ai.service";
import type { ExcalidrawSceneValue } from "@/components/excalidraw-shared";

type ExcalidrawElement = NonNullable<
  ExcalidrawInitialDataState["elements"]
>[number];

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface UseExcalidrawAIParams {
  sceneRef: MutableRefObject<ExcalidrawSceneValue>;
  excalidrawRef: MutableRefObject<ExcalidrawImperativeAPI | null>;
  onChange: (next: ExcalidrawSceneValue) => void;
}

export function useExcalidrawAI({
  sceneRef,
  excalidrawRef,
  onChange,
}: UseExcalidrawAIParams) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { openPane } = useGlobalSidecar();
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const handleAIGenerate = useCallback(
    async (prompt: string) => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "user",
        content: prompt,
        timestamp: Date.now(),
      };

      setChatHistory((prev) => [...prev, userMessage]);

      const assistantMessageId = (Date.now() + 1).toString();
      const assistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        timestamp: Date.now() + 1,
      };

      setChatHistory((prev) => [...prev, assistantMessage]);

      try {
        const elements = await excalidrawAIService.generateDiagram(prompt);

        if (excalidrawRef.current) {
          const currentElements = sceneRef.current.elements ?? [];
          const newElements = [...currentElements, ...elements];

          excalidrawRef.current.updateScene({
            elements: newElements as ExcalidrawElement[],
          });

          const next: ExcalidrawSceneValue = {
            elements: newElements,
            files: sceneRef.current.files,
          };
          sceneRef.current = next;
          onChange(next);
        }

        setChatHistory((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: t("excalidraw.diagramGenerated") }
              : msg,
          ),
        );

        toast({
          title: t("excalidraw.generateSuccess"),
          description: t("excalidraw.diagramAdded"),
        });
      } catch (error) {
        console.error("Error generating diagram:", error);
        setChatHistory((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  content:
                    error instanceof Error
                      ? error.message
                      : t("excalidraw.generateError"),
                }
              : msg,
          ),
        );

        toast({
          title: t("excalidraw.generateFailed"),
          description:
            error instanceof Error
              ? error.message
              : t("excalidraw.generateError"),
          variant: "destructive",
        });
      }
    },
    [onChange, toast, excalidrawRef, sceneRef, t],
  );

  const openExcalidrawAssistant = useCallback(() => {
    openPane("excalidraw-agent", {
      chatHistory,
      onGenerate: handleAIGenerate,
    });
  }, [chatHistory, handleAIGenerate, openPane]);

  return {
    chatHistory,
    handleAIGenerate,
    openExcalidrawAssistant,
  };
}
