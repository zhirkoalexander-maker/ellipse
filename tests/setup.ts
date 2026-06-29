// Minimal WebGL shim for jsdom so THREE.WebGLRenderer can initialize in tests.
const WEBGL_TYPES = new Set(['webgl', 'webgl2', 'experimental-webgl']);

const webglHandler: ProxyHandler<object> = {
  get(_target, prop) {
    if (prop === 'canvas') return _target;
    if (prop === 'drawingBufferWidth' || prop === 'drawingBufferHeight') return 0;
    if (prop === 'getExtension') return () => null;
    if (prop === 'getParameter') return () => 'WebGL 1.0';
    if (prop === 'getShaderPrecisionFormat') return () => ({ precision: 0, rangeMin: 0, rangeMax: 0 });
    if (prop === 'getShaderParameter' || prop === 'getProgramParameter') return () => true;
    if (prop === 'getShaderInfoLog' || prop === 'getProgramInfoLog' || prop === 'getError') return () => '';
    if (prop === 'getUniformLocation') return () => ({});
    if (prop === 'getAttribLocation') return () => 0;
    if (
      prop === 'createBuffer' ||
      prop === 'createShader' ||
      prop === 'createProgram' ||
      prop === 'createTexture' ||
      prop === 'createVertexArray' ||
      prop === 'createFramebuffer' ||
      prop === 'createRenderbuffer'
    ) {
      return () => ({ __webglStub: true });
    }
    if (
      prop === 'getSupportedExtensions' ||
      prop === 'getContextAttributes' ||
      prop === 'getProgramInfoLog' ||
      prop === 'getShaderInfoLog'
    ) {
      return () => [];
    }
    return () => undefined;
  },
  set() {
    return true;
  },
};

// Minimal 2D canvas context shim for procedural texture generation tests.
function create2DShim(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const state: Record<string, unknown> = {
    fillStyle: '#000000',
    strokeStyle: '#000000',
    lineWidth: 1,
    globalAlpha: 1,
    imageData: new Map<string, ImageData>(),
  };
  const handler: ProxyHandler<Record<string, unknown>> = {
    get(target, prop: string) {
      if (prop === 'canvas') return canvas;
      if (prop in target) return target[prop];
      if (prop === 'fillRect' || prop === 'clearRect' || prop === 'beginPath' || prop === 'closePath' ||
          prop === 'fill' || prop === 'stroke' || prop === 'moveTo' || prop === 'lineTo' ||
          prop === 'arc' || prop === 'ellipse' || prop === 'save' || prop === 'restore' ||
          prop === 'putImageData' || prop === 'scale' || prop === 'rotate' || prop === 'translate') {
        return () => undefined;
      }
      if (prop === 'createImageData') {
        return (w: number, h: number) => {
          const data = new Uint8ClampedArray(w * h * 4);
          return { width: w, height: h, data } as ImageData;
        };
      }
      if (prop === 'getImageData') {
        return (_x: number, _y: number, w: number, h: number) => {
          const data = new Uint8ClampedArray(w * h * 4);
          return { width: w, height: h, data } as ImageData;
        };
      }
      return () => undefined;
    },
    set(target, prop: string, value) {
      target[prop] = value;
      return true;
    },
  };
  return new Proxy(state, handler) as unknown as CanvasRenderingContext2D;
}

HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, type: string) {
  if (WEBGL_TYPES.has(type)) {
    return new Proxy({ canvas: this }, webglHandler);
  }
  if (type === '2d') {
    return create2DShim(this);
  }
  return null;
} as typeof HTMLCanvasElement.prototype.getContext;

// In-memory localStorage shim for jsdom
if (typeof (globalThis as any).window !== 'undefined' && !(globalThis as any).window.localStorage) {
  const store = new Map<string, string>();
  const ls = {
    getItem(k: string): string | null { return store.has(k) ? store.get(k)! : null; },
    setItem(k: string, v: string): void { store.set(k, String(v)); },
    removeItem(k: string): void { store.delete(k); },
    clear(): void { store.clear(); },
    key(i: number): string | null { return Array.from(store.keys())[i] ?? null; },
    get length(): number { return store.size; }
  };
  (globalThis as any).window.localStorage = ls;
  (globalThis as any).localStorage = ls;
}