import {
  DrawioSaveStatus,
  type DrawioXmlValue,
} from "./drawio-shared";
import { useStoragedDrawioXml } from "./use-storaged-drawio-xml";
import { useMemoizedFn } from "@/hooks/use-memoized-fn";
import { Uri } from "@/toolkit/vscode/uri";
import { FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { BehaviorSubject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, skip } from "rxjs/operators";
import xbook from "xbook/index";
import { DrawioCanvas } from "./drawio-canvas";

function buildXmlSnapshot(xml: DrawioXmlValue | null): string {
  return xml ?? "";
}

export const AppDrawio: FC<{
  uri: string;
}> = ({ uri }) => {
  const { t } = useTranslation();
  const [saveStatus, setSaveStatus] = useState<DrawioSaveStatus>(DrawioSaveStatus.IDLE);
  const xml$ = useMemo(
    () => new BehaviorSubject<DrawioXmlValue | null>(null),
    [],
  );
  const { xml: initialXml, loading: initialXmlLoading } = useStoragedDrawioXml(uri);

  useEffect(() => {
    if (initialXml && !initialXmlLoading) {
      xml$.next(initialXml);
    }
  }, [initialXml, initialXmlLoading, xml$]);

  const saveData = useMemoizedFn(async (xml: DrawioXmlValue) => {
    await xbook.fs.writeFile(
      Uri.parse(uri),
      new TextEncoder().encode(xml),
      { create: true, overwrite: true },
    );
  });

  useEffect(() => {
    const sub = xml$
      .pipe(
        filter(
          (v): v is DrawioXmlValue =>
            v !== null && v !== "",
        ),
        debounceTime(1000),
        distinctUntilChanged(
          (a: DrawioXmlValue, b: DrawioXmlValue) =>
            buildXmlSnapshot(a) === buildXmlSnapshot(b),
        ),
        skip(1),
      )
      .subscribe(async (value: DrawioXmlValue) => {
        try {
          setSaveStatus(DrawioSaveStatus.SAVING);
          await saveData(value);
          setSaveStatus(DrawioSaveStatus.SAVED);
        } catch (error) {
          console.error("Auto save drawio data failed:", error);
          setSaveStatus(DrawioSaveStatus.ERROR);
        }
      });

    return () => {
      sub.unsubscribe();
    };
  }, [xml$, saveData]);

  const handleXmlChange = useMemoizedFn((next: DrawioXmlValue) => {
    xml$.next(next);
    if (buildXmlSnapshot(next) !== buildXmlSnapshot(xml$.getValue())) {
      setSaveStatus(DrawioSaveStatus.DIRTY);
    }
  });

  const handleSave = useMemoizedFn(async (xml: DrawioXmlValue) => {
    try {
      setSaveStatus(DrawioSaveStatus.SAVING);
      await saveData(xml);
      setSaveStatus(DrawioSaveStatus.SAVED);
    } catch (error) {
      console.error("Save drawio data failed:", error);
      setSaveStatus(DrawioSaveStatus.ERROR);
    }
  });

  if (!uri) {
    return <div>{t("drawio.uriRequired")}</div>;
  }

  if (initialXmlLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
        {t("drawio.loading")}
      </div>
    );
  }

  return (
    <DrawioCanvas
      xml={initialXml}
      onChange={handleXmlChange}
      onSave={handleSave}
      saveStatus={saveStatus}
    />
  );
};

