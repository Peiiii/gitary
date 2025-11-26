import {
  ExcalidrawSaveStatus,
  type ExcalidrawSceneValue,
  type StoredFileData,
} from "@/components/excalidraw-shared";
import { useProvideExcalidrawAIContexts } from "@/hooks/use-provide-excalidraw-ai-contexts";
import { useMemoizedFn } from "@/hooks/use-memoized-fn";
import { Uri } from "@/toolkit/vscode/uri";
import {
  FC,
  Suspense,
  lazy,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { BehaviorSubject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, skip } from "rxjs/operators";
import xbook from "xbook/index";


function buildSceneSnapshot(value: ExcalidrawSceneValue | null): string {
  return JSON.stringify({
    elements: value?.elements,
    files: value?.files,
  });
}

export const useStoragedScene = (uri: string) => {
  const [scene, setScene] = useState<ExcalidrawSceneValue | null>(null);
  const [loading, setLoading] = useState(false);
  const loadData = useMemoizedFn(
    async (): Promise<StoredFileData | null> => {
      try {
        const data = await xbook.fs.readFile(Uri.parse(uri));
        const parsed = JSON.parse(new TextDecoder().decode(data)) as
          | StoredFileData
          | null
          | undefined;
        if (!parsed || typeof parsed !== "object") {
          return null;
        }
        console.log("loadData", { parsed });
        return normalizeValueForStorage(parsed);
      } catch {
        console.error("loadData error");
        // New files or read errors behave as empty scene
        return null;
      }
    },
  );
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      const data = await loadData();
      if (cancelled) return;
      setScene(data);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [uri, loadData]);
  return { scene, loading };
};

export const normalizeValueForStorage = (value: ExcalidrawSceneValue): ExcalidrawSceneValue => {
  return {
    elements: value.elements,
    files: value.files,
    appState: value.appState ? {
      zoom: value.appState.zoom
    } : undefined,
  };
};

const LazyExcalidrawAICanvas = lazy(async () => {
  const mod = await import("@/components/excalidraw-ai-canvas");
  return { default: mod.ExcalidrawAICanvas };
});

export const AppExcalidraw: FC<{
  uri: string;
}> = ({ uri }) => {
  const { t } = useTranslation();
  const [saveStatus, setSaveStatus] = useState<ExcalidrawSaveStatus>(ExcalidrawSaveStatus.IDLE);
  const scene$ = useMemo(
    () => new BehaviorSubject<ExcalidrawSceneValue | null>(null),
    [],
  );
  const { scene: initialScene, loading: initialSceneLoading } = useStoragedScene(uri);

  useEffect(() => {
    if (initialScene && !initialSceneLoading) {
      scene$.next(initialScene);
    }
  }, [initialScene, initialSceneLoading, scene$]);


  const saveData = useMemoizedFn(async (value: ExcalidrawSceneValue) => {
    const normalized = normalizeValueForStorage(value);
    await xbook.fs.writeFile(
      Uri.parse(uri),
      new TextEncoder().encode(JSON.stringify(normalized)),
      { create: true, overwrite: true },
    );
  });


  useEffect(() => {
    const sub = scene$
      .pipe(
        filter(
          (v): v is ExcalidrawSceneValue =>
            v !== null && v.elements !== undefined,
        ),
        debounceTime(1000),
        distinctUntilChanged(
          (a: ExcalidrawSceneValue, b: ExcalidrawSceneValue) =>
            buildSceneSnapshot(a) === buildSceneSnapshot(b),
        ),
        skip(1),
      )
      .subscribe(async (value: ExcalidrawSceneValue) => {
        try {
          setSaveStatus(ExcalidrawSaveStatus.SAVING);
          await saveData(value);
          setSaveStatus(ExcalidrawSaveStatus.SAVED);
        } catch (error) {
          console.error("Auto save excalidraw data failed:", error);
          setSaveStatus(ExcalidrawSaveStatus.ERROR);
        }
      });

    return () => {
      sub.unsubscribe();
    };
  }, [scene$, saveData]);

  const handleSceneChange = useMemoizedFn((next: ExcalidrawSceneValue) => {
    scene$.next(next);
    if (buildSceneSnapshot(next) !== buildSceneSnapshot(scene$.getValue())) {
      setSaveStatus(ExcalidrawSaveStatus.DIRTY);
    }
  });

  const handleManualSave = useMemoizedFn(async () => {
    const current = scene$.getValue();
    if (!current) return;
    try {
      setSaveStatus(ExcalidrawSaveStatus.SAVING);
      await saveData(current);
      setSaveStatus(ExcalidrawSaveStatus.SAVED);
    } catch (error) {
      console.error("Manual save excalidraw data failed:", error);
      setSaveStatus(ExcalidrawSaveStatus.ERROR);
    }
  });

  // Cmd/Ctrl+S 手动保存
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        (event.key === "s" || event.key === "S")
      ) {
        event.preventDefault();
        void handleManualSave();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleManualSave]);

  useProvideExcalidrawAIContexts(scene$);

  if (!uri) {
    return <div>{t("excalidraw.uriRequired")}</div>;
  }

  if (initialSceneLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
        {t("excalidraw.loading")}
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
          {t("excalidraw.loading")}
        </div>
      }
    >
      <LazyExcalidrawAICanvas
        key={uri}
        initialValue={initialScene}
        onChange={handleSceneChange}
        showSaveStatus
        saveStatus={saveStatus}
        onSaveClick={handleManualSave}
      />
    </Suspense>
  );
};
