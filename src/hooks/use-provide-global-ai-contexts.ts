import { aiContextManager } from "@/core/managers/ai-context.manager";
import type { AgentContext } from "@/core/stores/ai-context.store";
import { useBehaviorSubjectFromState } from "@/hooks/use-behavior-subject-from-state";
import { useSubscribeObservable } from "@/hooks/use-subscribe-observable";
import { isEqual } from "lodash-es";
import { nanoid } from "nanoid";
import { useEffect, useRef } from "react";
import { distinctUntilChanged } from "rxjs";

export function useProvideGlobalAIContexts(contexts: AgentContext[]) {
  const contexts$ = useBehaviorSubjectFromState(contexts);
  const lastContextIdsRef = useRef<string[]>([]);

  useSubscribeObservable(
    () =>
      contexts$.pipe(
        distinctUntilChanged((a, b) => isEqual(a, b)),
      ),
    (_contexts) => {
      if (lastContextIdsRef.current.length > 0) {
        aiContextManager.removeContexts(lastContextIdsRef.current);
      }
      const contextsWithIds = _contexts.map((ctx) => ({
        ...ctx,
        id: nanoid(),
      }));
      aiContextManager.addContexts(contextsWithIds);
      lastContextIdsRef.current = contextsWithIds.map((ctx) => ctx.id);
    },
  );

  // Clean up contexts when the provider unmounts.
  useEffect(() => {
    return () => {
      if (lastContextIdsRef.current.length > 0) {
        aiContextManager.removeContexts(lastContextIdsRef.current);
        lastContextIdsRef.current = [];
      }
    };
  }, []);
}
