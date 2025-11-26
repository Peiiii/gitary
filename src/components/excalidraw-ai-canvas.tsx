import { ExcalidrawAIIcon } from "@/components/icons/ai-assistant-icon";
import {
  AppState,
  BinaryFiles,
  ExcalidrawElement,
  ExcalidrawSaveStatus,
  ExcalidrawSceneValue,
} from "@/components/excalidraw-shared";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useExcalidrawAI } from "@/hooks/use-excalidraw-ai";
import { useExcalidrawRuntime } from "@/hooks/use-excalidraw-runtime";
import { useMemoizedFn } from "@/hooks/use-memoized-fn";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types";
import {
  AlertCircle,
  CheckCircle2,
  CircleDot,
  Loader2,
  Save,
} from "lucide-react";
import { useCallback, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

// Feature flag: 暂时隐藏 Excalidraw AI 入口
const ENABLE_EXCALIDRAW_AI = false;

interface ExcalidrawAICanvasProps {
  initialValue: ExcalidrawSceneValue | null;
  onChange: (next: ExcalidrawSceneValue) => void;

  // 仅用于展示保存状态，由上层控制。
  saveStatus?: ExcalidrawSaveStatus;
  onSaveClick?: () => void;
  showSaveStatus?: boolean;
}


export function normalizeSceneValue(
  value: ExcalidrawSceneValue | null | undefined,
): ExcalidrawSceneValue {
  return {
    elements: value?.elements ?? [],
    files: value?.files,
    appState: value?.appState,
  };
}

export function buildSceneSnapshot(scene: ExcalidrawSceneValue): string {
  return JSON.stringify({
    elements: scene.elements ?? [],
    files: scene.files ?? undefined,
  });
}

export function ExcalidrawAICanvas({
  initialValue,
  onChange,
  saveStatus,
  onSaveClick,
  showSaveStatus,
}: ExcalidrawAICanvasProps) {
  const { t } = useTranslation();

  const normalizedInitialValue = useMemo(() => normalizeSceneValue(initialValue), [initialValue]);

  const excalidrawRef = useRef<ExcalidrawImperativeAPI | null>(null);
  // 当前场景，仅用于 runtime 工具调用；源数据由外部 value 控制。
  const sceneRef = useRef<ExcalidrawSceneValue>(normalizedInitialValue);
  const memoizedOnChange = useMemoizedFn(onChange);

  const { openExcalidrawAssistant } = useExcalidrawAI({
    sceneRef,
    excalidrawRef,
    onChange: memoizedOnChange,
  });

  // 将当前 Excalidraw 场景暴露给 runtime，便于工具读取/更新。
  useExcalidrawRuntime({
    sceneRef,
    excalidrawRef,
    onChange: memoizedOnChange,
  });

  const handleExcalidrawChange = useCallback(
    (
      elements: readonly ExcalidrawElement[],
      appState: AppState,
      files: BinaryFiles,
    ) => {
      const next: ExcalidrawSceneValue = {
        elements: elements as ExcalidrawElement[],
        files,
        appState,
      };
      sceneRef.current = next;
      memoizedOnChange(next);
    },
    [memoizedOnChange],
  );

  const renderSaveStatusIcon = () => {
    if (saveStatus === ExcalidrawSaveStatus.SAVING) {
      return <Loader2 className="h-4 w-4 animate-spin" />;
    }
    if (saveStatus === ExcalidrawSaveStatus.DIRTY) {
      return <CircleDot className="h-4 w-4" />;
    }
    if (saveStatus === ExcalidrawSaveStatus.ERROR) {
      return <AlertCircle className="h-4 w-4 text-destructive" />;
    }
    return <CheckCircle2 className="h-4 w-4 text-green-600" />;
  };

  const renderSaveStatusTooltip = () => {
    if (saveStatus === ExcalidrawSaveStatus.SAVING) {
      return t("excalidraw.saving");
    }
    if (saveStatus === ExcalidrawSaveStatus.DIRTY) {
      return t("excalidraw.edited");
    }
    if (saveStatus === ExcalidrawSaveStatus.ERROR) {
      return t("excalidraw.saveError");
    }
    return t("excalidraw.saved");
  };

  return (
    <div className="h-full w-full flex flex-col bg-background overflow-hidden">
      <div className="flex-1 relative flex min-h-0 overflow-hidden">
        <div className="flex-1 relative min-w-0 overflow-hidden">
          <div className="absolute inset-0">
            {showSaveStatus && (
              <TooltipProvider>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/80 border border-border/60 text-muted-foreground">
                        {renderSaveStatusIcon()}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      {renderSaveStatusTooltip()}
                    </TooltipContent>
                  </Tooltip>
                  {onSaveClick && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-background/80 border border-border/60 hover:bg-background"
                          onClick={onSaveClick}
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {t("excalidraw.saveNow")}
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </TooltipProvider>
            )}

            <Excalidraw
              initialData={{
                ...normalizedInitialValue,
                scrollToContent: true,
              }}
              excalidrawAPI={(api) => {
                excalidrawRef.current = api;
              }}
              onChange={handleExcalidrawChange}
              aiEnabled={false}
            />
          </div>
          {ENABLE_EXCALIDRAW_AI && (
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <Button
                onClick={openExcalidrawAssistant}
                size="icon"
                className="h-11 w-11 rounded-full bg-background/90 backdrop-blur-sm border border-border/40 text-foreground hover:bg-background shadow-lg"
                title={t("excalidraw.aiAssistant")}
              >
                <ExcalidrawAIIcon className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
