import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

const LazyGlobalChatPanelInner = React.lazy(async () => {
  const mod = await import("./global-chat-panel");
  return { default: mod.GlobalChatPanel };
});

export const GlobalChatPanelLazy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
          {t("globalChat.loading") || "Loading AI assistant..."}
        </div>
      }
    >
      <LazyGlobalChatPanelInner />
    </Suspense>
  );
};

