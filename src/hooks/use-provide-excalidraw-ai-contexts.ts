import type { AgentContext } from "@/core/stores/ai-context.store";
import { useProvideGlobalAIContexts } from "@/hooks/use-provide-global-ai-contexts";
import { useEffect, useState } from "react";
import type { BehaviorSubject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map } from "rxjs/operators";
import type { ExcalidrawSceneValue } from "@/components/excalidraw-shared";

export function useProvideExcalidrawAIContexts(
  scene$: BehaviorSubject<ExcalidrawSceneValue | null>
) {
  const [aiContexts, setAIContexts] = useState<AgentContext[]>([]);

  useEffect(() => {
    const sub = scene$
      .pipe(
        filter(
          (v): v is ExcalidrawSceneValue =>
            v !== null && Array.isArray(v.elements),
        ),
        debounceTime(500),
        map((scene) => {
          const elements = (scene.elements ?? []) as Array<{
            isDeleted?: boolean;
          }>;
          const activeElements = elements.filter(
            (el) => !el || typeof el !== "object" ? false : !el.isDeleted,
          );

          if (!activeElements.length) {
            return [] as AgentContext[];
          }

          return [
            {
              description: "current_excalidraw_elements",
              value: JSON.stringify(activeElements),
            },
          ] as AgentContext[];
        }),
        distinctUntilChanged(
          (a, b) => JSON.stringify(a) === JSON.stringify(b),
        ),
      )
      .subscribe((contexts) => {
        setAIContexts(contexts);
      });

    return () => {
      sub.unsubscribe();
    };
  }, [scene$]);

  useProvideGlobalAIContexts(aiContexts);
}

