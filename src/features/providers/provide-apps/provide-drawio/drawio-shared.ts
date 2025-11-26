export type DrawioXmlValue = string;

export enum DrawioSaveStatus {
  IDLE = "idle",
  DIRTY = "dirty",
  SAVING = "saving",
  SAVED = "saved",
  ERROR = "error",
}

export const DEFAULT_DRAWIO_XML = '<mxfile><diagram></diagram></mxfile>';

