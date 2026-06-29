import * as THREE from 'three';

export interface LoadedTextures {
  color: THREE.Texture;
  normal: THREE.Texture;
  roughness: THREE.Texture;
  metalness: THREE.Texture;
}

function makeChecker(c: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = c;
  ctx.fillRect(0, 0, 64, 64);
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, 64, 64);
  ctx.strokeRect(16, 16, 32, 32);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 1);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

const FALLBACK: LoadedTextures = {
  color: makeChecker('#8899aa'),
  normal: makeChecker('#808080'),
  roughness: makeChecker('#808080'),
  metalness: makeChecker('#000000'),
};

async function loadTex(url: string, cs: THREE.ColorSpace = THREE.SRGBColorSpace): Promise<THREE.Texture> {
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(i);
    i.onerror = () => reject(new Error(`Failed: ${url}`));
    i.src = url;
  });
  const tex = new THREE.Texture(img);
  tex.colorSpace = cs;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 1);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

async function make(name: string): Promise<LoadedTextures> {
  const [color, normal, roughness, metalness] = await Promise.all([
    loadTex(`/textures/${name}_color.jpg`, THREE.SRGBColorSpace),
    loadTex(`/textures/${name}_normal.jpg`, THREE.LinearSRGBColorSpace),
    loadTex(`/textures/${name}_rough.jpg`, THREE.LinearSRGBColorSpace),
    loadTex(`/textures/${name}_metal.jpg`, THREE.LinearSRGBColorSpace),
  ]);
  return { color, normal, roughness, metalness };
}

let _loaded = false;
let _tankTex: LoadedTextures | null = null;
let _capsuleTex: LoadedTextures | null = null;
let _engineTex: LoadedTextures | null = null;
let _goldTex: LoadedTextures | null = null;
let _fabricTex: LoadedTextures | null = null;

let _loadingPromise: Promise<void> | null = null;

export function loadAllTextures(): Promise<void> {
  if (_loadingPromise) return _loadingPromise;
  _loadingPromise = (async () => {
    try {
      [_tankTex, _capsuleTex, _engineTex, _goldTex, _fabricTex] = await Promise.all([
        make('metal013'),
        make('plates'),
        make('metal009'),
        make('metal021'),
        (async () => {
          const [color, normal, roughness] = await Promise.all([
            loadTex('/textures/fabric_color.jpg', THREE.SRGBColorSpace),
            loadTex('/textures/fabric_normal.jpg', THREE.LinearSRGBColorSpace),
            loadTex('/textures/fabric_rough.jpg', THREE.LinearSRGBColorSpace),
          ]);
          return { color, normal, roughness, metalness: roughness };
        })(),
      ]);
      _loaded = true;
    } catch (e) {
      console.error('Texture loading failed, using fallback', e);
    }
  })();
  return _loadingPromise;
}

export function getTankTex(): LoadedTextures { return _tankTex ?? FALLBACK; }
export function getCapsuleTex(): LoadedTextures { return _capsuleTex ?? FALLBACK; }
export function getEngineTex(): LoadedTextures { return _engineTex ?? FALLBACK; }
export function getGoldTex(): LoadedTextures { return _goldTex ?? FALLBACK; }
export function getFabricTex(): LoadedTextures { return _fabricTex ?? FALLBACK; }
