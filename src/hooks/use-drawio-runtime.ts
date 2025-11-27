import { useEffect, type MutableRefObject } from "react";
import {
  registerDrawio,
  unregisterDrawio,
  type DrawioHandle,
} from "@/services/drawio-runtime";
import type { DrawioXmlValue } from "@/features/providers/provide-apps/provide-drawio/drawio-shared";
import { useMemoizedFn } from "@/hooks/use-memoized-fn";

const DRAWIO_ORIGIN = "https://embed.diagrams.net";

interface UseDrawioRuntimeParams {
  xmlRef: MutableRefObject<DrawioXmlValue | null>;
  iframeRef: MutableRefObject<HTMLIFrameElement | null>;
  onChange: (xml: DrawioXmlValue) => void;
}

export function useDrawioRuntime({
  xmlRef,
  iframeRef,
  onChange,
}: UseDrawioRuntimeParams) {
  const memoizedOnChange = useMemoizedFn(onChange);

  useEffect(() => {
    const handle: DrawioHandle = {
      getXml() {
        return xmlRef.current;
      },
      updateXml(xml: string) {
        const iframe = iframeRef.current;
        if (!iframe) return;

        xmlRef.current = xml;
        
        iframe.contentWindow?.postMessage(
          JSON.stringify({ action: "load", xml }),
          DRAWIO_ORIGIN
        );
      },
      getIframe() {
        return iframeRef.current;
      },
    };

    registerDrawio(handle);
    return () => unregisterDrawio(handle);
  }, [memoizedOnChange, xmlRef, iframeRef]);
}

