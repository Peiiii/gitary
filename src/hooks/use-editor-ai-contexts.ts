import { useEffect, useMemo, useState } from "react";
import { spaceHelper } from "@/helpers/space.helper";
import { aiContextService } from "@/services/ai/context-service";
import { layoutService } from "xbook/services";
import { AgentContext } from "@/core/stores/ai-context.store";

export function useEditorAIContexts(): AgentContext[] {
  const [currentSpaceId, setCurrentSpaceId] = useState<string | null>(null);
  const [currentFileContext, setCurrentFileContext] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const updateContext = async () => {
      try {
        const pageCtx = await aiContextService.getCurrentPageContext();
        const uri = pageCtx?.uri;

        if (cancelled) return;

        if (uri) {
          const spaceId = spaceHelper.getSpaceIdFromUri(uri);
          setCurrentSpaceId(spaceId);

          const editorContext = await aiContextService.getEditorContext();
          if (editorContext && !cancelled) {
            const formattedContext = aiContextService.formatContextForPrompt({
              editor: editorContext,
              timestamp: Date.now(),
            });
            setCurrentFileContext(formattedContext);
          } else if (!cancelled) {
            setCurrentFileContext(null);
          }
        } else {
          if (!cancelled) {
            setCurrentSpaceId(null);
            setCurrentFileContext(null);
          }
        }
      } catch {
        if (!cancelled) {
          setCurrentSpaceId(null);
          setCurrentFileContext(null);
        }
      }
    };

    updateContext();

    const pageBox = layoutService.pageBox;
    const subscription = pageBox.currentPage$?.subscribe(() => {
      if (!cancelled) {
        updateContext();
      }
    });

    return () => {
      cancelled = true;
      subscription?.unsubscribe();
    };
  }, []);

  const contexts = useMemo<AgentContext[]>(() => {
    const ctx: AgentContext[] = [];

    if (currentSpaceId) {
      ctx.push({
        description: "current_space_id",
        value: currentSpaceId,
      });
    }

    if (currentFileContext) {
      ctx.push({
        description: "current_file_context",
        value: currentFileContext,
      });
    }

    return ctx;
  }, [currentSpaceId, currentFileContext]);

  return contexts;
}

