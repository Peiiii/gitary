import { AgentContextWithId, useAIContextStore } from "@/core/stores/ai-context.store";
import type { Context as AgentContext } from "@agent-labs/agent-chat";

export class AIContextManager {

  addContexts = (contexts: AgentContextWithId[]) => {
    useAIContextStore.getState().addContexts(contexts);
  };

  removeContexts = (ids: string[]) => {
    useAIContextStore.getState().removeContexts(ids);
  };

  getAllContexts = (): AgentContext[] => {
    return useAIContextStore.getState().getAllContexts();
  };

  clearAllContexts = () => {
    useAIContextStore.getState().clearAllContexts();
  };
}

export const aiContextManager = new AIContextManager();
