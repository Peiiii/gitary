import { getCurrentDrawioHandle } from "@/services/drawio-runtime";
import { t } from "@/i18n/utils";

export function ensureDrawioAvailable() {
  const handle = getCurrentDrawioHandle();
  if (!handle) {
    throw new Error(t("drawio.tools.noCanvas"));
  }
  const xml = handle.getXml();
  return { handle, xml };
}

