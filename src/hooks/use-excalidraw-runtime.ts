import { useEffect, type MutableRefObject } from "react";
import type {
  ExcalidrawImperativeAPI,
  ExcalidrawInitialDataState,
} from "@excalidraw/excalidraw/types";
import {
  registerExcalidraw,
  unregisterExcalidraw,
  type ExcalidrawHandle,
} from "@/services/excalidraw-runtime";
import type { ExcalidrawSceneValue } from "@/components/excalidraw-shared";
import { useMemoizedFn } from "@/hooks/use-memoized-fn";

type ExcalidrawElement = NonNullable<
  ExcalidrawInitialDataState["elements"]
>[number];

interface UseExcalidrawRuntimeParams {
  sceneRef: MutableRefObject<ExcalidrawSceneValue>;
  excalidrawRef: MutableRefObject<ExcalidrawImperativeAPI | null>;
  onChange: (next: ExcalidrawSceneValue) => void;
}

// Bridge between the global Excalidraw runtime and the imperative API of
// the currently mounted canvas. This keeps the component lightweight and
// allows tools to read/update the scene via `getCurrentExcalidrawHandle()`.
export function useExcalidrawRuntime({
  sceneRef,
  excalidrawRef,
  onChange,
}: UseExcalidrawRuntimeParams) {
  const memoizedOnChange = useMemoizedFn(onChange);

  useEffect(() => {
    const handle: ExcalidrawHandle = {
      getScene() {
        return {
          elements: sceneRef.current.elements ?? [],
          appState: null,
          files: sceneRef.current.files,
        };
      },
      updateScene(partial) {
        if (!excalidrawRef.current) return;

        const prev = sceneRef.current;
        const next: ExcalidrawSceneValue = {
          elements:
            (partial.elements as typeof prev.elements | undefined) ??
            prev.elements ??
            [],
          files:
            (partial.files as typeof prev.files | undefined) ??
            prev.files,
        };

        excalidrawRef.current.updateScene({
          elements: (next.elements ?? []) as ExcalidrawElement[],
        });

        sceneRef.current = next;
        memoizedOnChange(next);
      },
    };

    registerExcalidraw(handle);
    return () => unregisterExcalidraw(handle);
  }, [memoizedOnChange, sceneRef, excalidrawRef]);
}
