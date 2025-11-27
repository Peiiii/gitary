export interface DrawioHandle {
  getXml(): string | null;
  updateXml(xml: string): void;
  getIframe(): HTMLIFrameElement | null;
}

class DrawioRuntime {
  private currentHandle: DrawioHandle | null = null;

  register(handle: DrawioHandle): void {
    this.currentHandle = handle;
  }

  unregister(handle: DrawioHandle): void {
    if (this.currentHandle === handle) {
      this.currentHandle = null;
    }
  }

  getCurrentHandle(): DrawioHandle | null {
    return this.currentHandle;
  }
}

const runtime = new DrawioRuntime();

export function registerDrawio(handle: DrawioHandle): void {
  runtime.register(handle);
}

export function unregisterDrawio(handle: DrawioHandle): void {
  runtime.unregister(handle);
}

export function getCurrentDrawioHandle(): DrawioHandle | null {
  return runtime.getCurrentHandle();
}

