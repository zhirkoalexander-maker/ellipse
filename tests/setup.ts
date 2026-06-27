// Minimal WebGL shim for jsdom so THREE.WebGLRenderer can initialize in tests.
// The test only checks domElement.tagName === 'CANVAS' and calls dispose();
// no actual rendering happens, so a no-op Proxy is sufficient.
const WEBGL_TYPES = new Set(['webgl', 'webgl2', 'experimental-webgl']);

const handler: ProxyHandler<object> = {
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

HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, type: string) {
  if (WEBGL_TYPES.has(type)) {
    return new Proxy({ canvas: this }, handler);
  }
  return null;
} as typeof HTMLCanvasElement.prototype.getContext;
