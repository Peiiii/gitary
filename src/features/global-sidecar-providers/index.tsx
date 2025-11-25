import { createPlugin } from "xbook/common/createPlugin";
import { GlobalSidecarProvider } from "xbook/global-sidecar/global-sidecar-provider";
import { registerGlobalSidecarPane } from "xbook/global-sidecar/sidecar-pane-registry";
import { GlobalChatPanel } from "./panes/global-chat-panel";
import { AIAssistantIcon, ExcalidrawAIIcon } from "@/components/icons/ai-assistant-icon";
import { ExcalidrawPaneBridge } from "./panes/excalidraw-pane-bridge";

// Feature flag: 暂时关闭 Excalidraw AI 的入口
const ENABLE_EXCALIDRAW_AI = false;

let panesInitialized = false;

const ensurePanes = () => {
  if (panesInitialized) return;
  registerGlobalSidecarPane({
    id: "global-chat",
    title: "AI Assistant",
    description: "跨页面问答与命令",
    icon: AIAssistantIcon,
    order: 1,
    component: GlobalChatPanel,
  });
  if (ENABLE_EXCALIDRAW_AI) {
    registerGlobalSidecarPane({
      id: "excalidraw-agent",
      title: "Excalidraw AI",
      description: "生成图表并写回画布",
      icon: ExcalidrawAIIcon,
      order: 2,
      component: ExcalidrawPaneBridge,
    });
  }
  panesInitialized = true;
};

export { useGlobalSidecar } from "xbook/global-sidecar/global-sidecar-context";
export { registerGlobalSidecarPane } from "xbook/global-sidecar/sidecar-pane-registry";

export const featureGlobalSidecar = createPlugin({
  initilize(xbook) {
    ensurePanes();
    xbook.workbenchService.addReactEntry({
      id: "global-sidecar",
      WrapperComponent: GlobalSidecarProvider,
    });
  },
});
