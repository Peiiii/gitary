import type { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types";

// Reusable Excalidraw-related types and enums that do not pull in the
// heavy @excalidraw/excalidraw runtime. This keeps most modules light
// while allowing the actual canvas implementation to be lazy‑loaded.

export type ExcalidrawElement = NonNullable<
  ExcalidrawInitialDataState["elements"]
>[number];

export type BinaryFiles = NonNullable<ExcalidrawInitialDataState["files"]>;

export type AppState = NonNullable<ExcalidrawInitialDataState["appState"]>;

export type ExcalidrawSceneValue = {
  elements?: ExcalidrawElement[];
  files?: BinaryFiles;
  appState?: AppState;
};

// 兼容旧命名，供上层文件读写存储使用。
export type StoredFileData = ExcalidrawSceneValue;

export enum ExcalidrawSaveStatus {
  IDLE = "idle",
  DIRTY = "dirty",
  SAVING = "saving",
  SAVED = "saved",
  ERROR = "error",
}

