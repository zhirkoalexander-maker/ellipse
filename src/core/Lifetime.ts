/** Resources belonging to one screen. Disposing a screen stops its input and animation callbacks. */
export class Lifetime {
  private controller = new AbortController();
  private timers = new Set<ReturnType<typeof setTimeout>>();
  private frames = new Set<number>();
  private elements = new Set<HTMLElement>();
  disposed = false;

  listen<K extends keyof WindowEventMap>(target: Window, name: K, fn: (event: WindowEventMap[K]) => void, options?: AddEventListenerOptions): void;
  listen<K extends keyof DocumentEventMap>(target: Document, name: K, fn: (event: DocumentEventMap[K]) => void, options?: AddEventListenerOptions): void;
  listen<K extends keyof HTMLElementEventMap>(target: HTMLElement, name: K, fn: (event: HTMLElementEventMap[K]) => void, options?: AddEventListenerOptions): void;
  listen(target: EventTarget, name: string, fn: any, options: AddEventListenerOptions = {}): void {
    target.addEventListener(name, fn, { ...options, signal: this.controller.signal });
  }
  append(element: HTMLElement): void {
    this.elements.add(element);
    document.body.appendChild(element);
  }
  timeout(fn: () => void, ms: number): void {
    if (this.disposed) return;
    const id = setTimeout(() => { this.timers.delete(id); if (!this.disposed) fn(); }, ms);
    this.timers.add(id);
  }
  frame(fn: FrameRequestCallback): void {
    if (this.disposed) return;
    const id = requestAnimationFrame(t => { this.frames.delete(id); if (!this.disposed) fn(t); });
    this.frames.add(id);
  }
  dispose(): void {
    this.disposed = true;
    this.controller.abort();
    this.timers.forEach(clearTimeout);
    this.frames.forEach(cancelAnimationFrame);
    this.elements.forEach(el => el.remove());
    this.timers.clear(); this.frames.clear(); this.elements.clear();
  }
}
