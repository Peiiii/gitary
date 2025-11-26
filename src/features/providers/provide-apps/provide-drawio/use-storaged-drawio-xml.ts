import { useMemoizedFn } from "@/hooks/use-memoized-fn";
import { Uri } from "@/toolkit/vscode/uri";
import { useEffect, useState } from "react";
import xbook from "xbook/index";
import { DEFAULT_DRAWIO_XML, type DrawioXmlValue } from "./drawio-shared";

export const useStoragedDrawioXml = (uri: string) => {
  const [xml, setXml] = useState<DrawioXmlValue | null>(null);
  const [loading, setLoading] = useState(false);
  const loadData = useMemoizedFn(
    async (): Promise<DrawioXmlValue | null> => {
      try {
        const data = await xbook.fs.readFile(Uri.parse(uri));
        const text = new TextDecoder().decode(data);
        return text || DEFAULT_DRAWIO_XML;
      } catch {
        return DEFAULT_DRAWIO_XML;
      }
    },
  );
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      const data = await loadData();
      if (cancelled) return;
      setXml(data);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [uri, loadData]);
  return { xml, loading };
};

