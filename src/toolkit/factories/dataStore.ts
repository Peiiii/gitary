import { createAtom } from "@/toolkit/factories/atom";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { ReplaySubject } from "rxjs";
import { createStore, type StoreApi } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";

export type PersistConfig = {
  name: string;
  type: "LocalStorage";
  transforms?: any[];
};
type DataStoreAction<T> = {
  type: string;
  payload?: T;
};
export interface DataChange<T = any> {
  id: string;
  type: "add" | "delete" | "update";
  value?: Partial<T>;
}

type DataLayerObserver<T> = (action: DataStoreAction<T>) => void;
export const createDataStore = <T extends { [k: string]: any }>({
  name = "dataLayer",
  initialState,
  primaryKey = "id",
  persistConfig,
}: {
  name?: string;
  initialState: T[];
  primaryKey?: string;
  persistConfig?: PersistConfig;
}) => {
  const loadEvent$ = new ReplaySubject(1);
  const atom = createAtom<{
    events: {
      load: [];
    };
  }>();

  type StoreState = {
    data: T[];
    rehydrated: boolean;
    init: (items: T[]) => void;
    upsert: (record: any) => void;
    reduce: (fn: (data: T[]) => T[]) => void;
    update: (record: any) => void;
    clear: () => void;
    add: (record: T) => void;
    delete: (id: string) => void;
  };

  const createState = (set: any, get: any): StoreState => ({
    data: initialState,
    rehydrated: !persistConfig,
    init: (items) => {
      set({ data: items || initialState });
    },
    upsert: (record) => {
      set((state) => {
        const data = state.data.slice();
        const pValue = (record as any)[primaryKey];
        const index = data.findIndex(
          (item) => (item as any)[primaryKey] === pValue
        );
        if (index >= 0) {
          data[index] = { ...data[index], ...record };
        } else {
          data.push(record);
        }
        return { data };
      });
    },
    reduce: (fn) => {
      set((state) => ({ data: fn(state.data) }));
    },
    update: (record) => {
      set((state) => {
        const data = state.data.slice();
        const pValue = (record as any)[primaryKey];
        const index = data.findIndex(
          (item) => (item as any)[primaryKey] === pValue
        );
        if (index >= 0) {
          data[index] = { ...data[index], ...record };
        }
        return { data };
      });
    },
    clear: () => {
      set({ data: [] });
    },
    add: (record) => {
      set((state) => ({ data: [...state.data, record] }));
    },
    delete: (id) => {
      set((state) => ({
        data: state.data.filter(
          (record) => (record as any)[primaryKey] !== id
        ),
      }));
    },
  });

  let store: StoreApi<StoreState>;

  if (persistConfig && persistConfig.type === "LocalStorage") {
    let apiRef: StoreApi<StoreState> | undefined;
    const persisted = persist<StoreState, [], [], StoreState>(
      (set, get, api) => {
        apiRef = api;
        return createState(set, get);
      },
      {
        name: persistConfig.name,
        storage: createJSONStorage<StoreState>(() => window.localStorage),
        // We don't currently use transforms; if needed, we can map them via
        // `serialize`/`deserialize` in the future.
        onRehydrateStorage: () => {
          return () => {
            if (apiRef) {
              apiRef.setState({ rehydrated: true }, false);
            }
            atom.emit("load");
            loadEvent$.next(true);
          };
        },
      }
    );
    store = createStore<StoreState>()(persisted);
  } else {
    store = createStore<StoreState>()(createState);
    // Non-persisted stores are considered loaded immediately
    atom.emit("load");
    loadEvent$.next(true);
  }

  function useSelectedState(store, selector) {
    const [selectedState, setSelectedState] = useState(
      selector(store.getState())
    );

    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        const newSelectedState = selector(store.getState());
        if (newSelectedState !== selectedState) {
          setSelectedState(newSelectedState);
        }
      });
      return () => unsubscribe();
    }, [store, selector, selectedState]);
    return selectedState;
  }

  const useData = () => {
    return useSelectedState(store, (state) => {
      return state.data as T[];
    }) as T[];
  };
  const useRecord = (id: string) => {
    return useSelectedState(store, (state) => {
      return (state.data as T[]).find((item) => item[primaryKey] === id);
    }) as T | undefined;
  };
  const useInternalSelector = (selector) => {
    return useSelectedState(store, (state) => selector(state.data));
  };
  let observers: DataLayerObserver<any>[] = [];

  const notifyObservers = (action: DataStoreAction<any>) => {
    for (const observer of observers) {
      observer(action);
    }
  };
  const addObserver = (observer: DataLayerObserver<any>) => {
    observers.push(observer);
    return () => removeObserver(observer);
  };

  const removeObserver = (observer: DataLayerObserver<any>) => {
    observers = observers.filter((o) => o !== observer);
  };
  const getActions = () => {
    return {
      init: (items: T[]) => {
        store.getState().init(items);
        notifyObservers({ type: `${name}/init`, payload: items as any });
      },
      upsert: (record: any) => {
        store.getState().upsert(record);
        notifyObservers({ type: `${name}/upsert`, payload: record });
      },
      reduce: (fn: (data: T[]) => T[]) => {
        store.getState().reduce(fn);
        notifyObservers({ type: `${name}/reduce`, payload: fn as any });
      },
      update: (record: any) => {
        store.getState().update(record);
        notifyObservers({ type: `${name}/update`, payload: record as any });
      },
      clear: () => {
        store.getState().clear();
        notifyObservers({ type: `${name}/clear` });
      },
      add: (record: T) => {
        store.getState().add(record);
        notifyObservers({ type: `${name}/add`, payload: record });
      },
      delete: (id: string) => {
        store.getState().delete(id);
        notifyObservers({ type: `${name}/delete`, payload: id as any });
      },
    };
  };
  const applyChanges = (changes: DataChange<T>[]) => {
    const actions = getActions();
    changes.forEach((change) => {
      switch (change.type) {
        case "add":
          if (change.value) actions.add(change.value as T);
          break;
        case "delete":
          actions.delete(change.id);
          break;
        case "update":
          if (change.value) actions.update(change.value as Partial<T>);
          break;
      }
    });
  };
  const getData = () => {
    return store.getState().data;
  };
  const getRecord = (id) => {
    return store
      .getState()
      .data.find((record) => (record as any)[primaryKey] === id);
  };
  return {
    // Backwards compatible shape: an object that looks like a Redux store
    // for existing callers that only rely on `getState`/`subscribe`.
    reduxStore: {
      getState: () => ({ [name]: { data: store.getState().data } }),
      subscribe: (listener: () => void) => store.subscribe(listener),
    },
    useSelector: useInternalSelector,
    useData: useData,
    useRecord,
    applyChanges,
    getActions,
    getData,
    getRecord,
    id: nanoid(),
    addObserver,
    removeObserver,
    on: atom.on,
    waitUtilLoaded: (callback: () => void) => {
      const sub = loadEvent$.subscribe(callback);
      return () => sub.unsubscribe();
    },
  };
};

export type DataStore<T extends Record<string, any>> = ReturnType<
  typeof createDataStore<T>
>;
