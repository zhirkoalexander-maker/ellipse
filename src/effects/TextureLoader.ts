import * as THREE from 'three';

export interface LoadedTextures {
  color: THREE.Texture;
  normal: THREE.Texture;
  roughness: THREE.Texture;
  metalness: THREE.Texture;
}

export interface DetailTextures {
  metalScratchesNormal: THREE.Texture;
  panelLinesNormal: THREE.Texture;
  rivetNormal: THREE.Texture;
  carbonFiberNormal: THREE.Texture;
  thermalProtectionNormal: THREE.Texture;
  fabricWeaveNormal: THREE.Texture;
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

let _detailTex: DetailTextures | null = null;
let _detailLoadingPromise: Promise<void> | null = null;
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

async function loadDetailTextures(): Promise<DetailTextures> {
  const [
    metalScratchesNormal,
    panelLinesNormal,
    rivetNormal,
    carbonFiberNormal,
    thermalProtectionNormal,
    fabricWeaveNormal,
  ] = await Promise.all([
    loadTex('/textures/detail_metal_scratches_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_panel_lines_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_rivet_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_carbon_fiber_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_thermal_protection_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_fabric_weave_normal.jpg', THREE.LinearSRGBColorSpace),
  ]);

  for (const tex of [
    metalScratchesNormal,
    panelLinesNormal,
    rivetNormal,
    carbonFiberNormal,
    thermalProtectionNormal,
    fabricWeaveNormal,
  ]) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(16, 16);
    tex.anisotropy = 8;
  }

  return {
    metalScratchesNormal,
    panelLinesNormal,
    rivetNormal,
    carbonFiberNormal,
    thermalProtectionNormal,
    fabricWeaveNormal,
  };
}

export async function loadDetailTexturesOnce(): Promise<DetailTextures> {
  if (_detailTex) return _detailTex;
  if (_detailLoadingPromise) return _detailLoadingPromise.then(() => _detailTex!);

  _detailLoadingPromise = (async () => {
    try {
      _detailTex = await loadDetailTextures();
    } catch (e) {
      console.error('Detail texture loading failed, generating procedural fallback', e);
      _detailTex = generateProceduralDetailTextures();
    }
  })();

  await _detailLoadingPromise;
  return _detailTex!;
}

function generateProceduralDetailTextures(): DetailTextures {
  const makeNormal = (drawFn: (ctx: CanvasRenderingContext2D) => void): THREE.Texture => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    drawFn(ctx);
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(16, 16);
    tex.anisotropy = 8;
    tex.colorSpace = THREE.LinearSRGBColorSpace;
    return tex;
  };

  const rng = () => Math.random();

  return {
    metalScratchesNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 2000; i++) {
        const x = rng() * 512, y = rng() * 512;
        const len = 2 + rng() * 8;
        const angle = rng() * Math.PI * 2;
        ctx.strokeStyle = `rgba(255,255,255,${0.05 + rng() * 0.1})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
        ctx.stroke();
      }
    }),
    panelLinesNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1.5;
      for (let y = 0; y < 512; y += 64) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke();
      }
      for (let x = 0; x < 512; x += 128) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke();
      }
    }),
    rivetNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      ctx.fillStyle = 'rgba(200,200,255,0.8)';
      for (let y = 32; y < 512; y += 64) {
        for (let x = 32; x < 512; x += 64) {
          ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
        }
      }
    }),
    carbonFiberNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = 'rgba(100,100,150,0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 512; i += 4) {
        const offset = (i % 8) * 2;
        ctx.beginPath(); ctx.moveTo(i + offset, 0); ctx.lineTo(i + offset + 512, 512); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(i - offset, 512); ctx.lineTo(i - offset + 512, 0); ctx.stroke();
      }
    }),
    thermalProtectionNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 5000; i++) {
        const x = rng() * 512, y = rng() * 512;
        const r = 1 + rng() * 3;
        const h = 128 + rng() * 80;
        ctx.fillStyle = `rgb(${h},${h},${h + 50})`;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
    }),
    fabricWeaveNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = 'rgba(180,180,220,0.4)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 512; i += 8) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
      }
    }),
  };
}

export function getDetailTextures(): DetailTextures {
  if (!_detailTex) {
    return generateProceduralDetailTextures();
  }
  return _detailTex;
}
