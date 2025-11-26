import { type DrawioXmlValue, DEFAULT_DRAWIO_XML } from "./drawio-shared";
import { useMemoizedFn } from "@/hooks/use-memoized-fn";
import { FC, useEffect, useRef } from "react";

interface DrawioEditorProps {
  initialXml: DrawioXmlValue | null;
  onChange: (xml: DrawioXmlValue) => void;
  onSave?: (xml: DrawioXmlValue) => void;
}

const DRAWIO_ORIGIN = "https://embed.diagrams.net";
const DRAWIO_BASE_URL = `${DRAWIO_ORIGIN}/?embed=1&ui=atlas&spin=1&proto=json&saveAndExit=0`;

export const DrawioEditor: FC<DrawioEditorProps> = ({
  initialXml,
  onChange,
  onSave,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const initialXmlRef = useRef<DrawioXmlValue | null>(
    initialXml || DEFAULT_DRAWIO_XML
  );

  useEffect(() => {
    if (initialXml && !initialXmlRef.current) {
      initialXmlRef.current = initialXml;
    }
  }, [initialXml]);

  const memoizedOnChange = useMemoizedFn(onChange);
  const memoizedOnSave = useMemoizedFn(onSave || (() => {}));

  const handleMessage = useMemoizedFn((event: MessageEvent) => {
    if (event.origin !== DRAWIO_ORIGIN) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    if (event.data === "ready") {
      if (initialXmlRef.current) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ action: "load", xml: initialXmlRef.current }),
          DRAWIO_ORIGIN
        );
      }
    } else if (typeof event.data === "string") {
      try {
        const data = JSON.parse(event.data);
        if (data.event === "change") {
          if (data.xml) {
            memoizedOnChange(data.xml);
          }
        } else if (data.event === "save") {
          if (data.xml) {
            memoizedOnSave(data.xml);
          }
        } else if (data.event === "init") {
          if (initialXmlRef.current) {
            iframe.contentWindow?.postMessage(
              JSON.stringify({ action: "load", xml: initialXmlRef.current }),
              DRAWIO_ORIGIN
            );
          }
        }
      } catch (error) {
        console.error("Failed to parse draw.io message:", error);
      }
    }
  });

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  const drawioUrl = initialXmlRef.current
    ? `${DRAWIO_BASE_URL}&xml=${encodeURIComponent(initialXmlRef.current)}`
    : DRAWIO_BASE_URL;

  return (
    <iframe
      ref={iframeRef}
      src={drawioUrl}
      className="w-full h-full border-0"
      title="Draw.io Editor"
    />
  );
};

