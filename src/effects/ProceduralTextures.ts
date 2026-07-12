import * as THREE from 'three';

// ── helpers ────────────────────────────────────────────────────────────────

function createCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  return [canvas, ctx];
}

/** Simple seeded random (mulberry32) */
function seededRandom(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** equirectangular UV → normalised lat/lon in [-1, 1] */
function uvToLatLon(u: number, v: number): [number, number] {
  const lon = u * 2 * Math.PI - Math.PI;   // -π … π
  const lat = v * Math.PI - Math.PI / 2;     // -π/2 … π/2
  return [lat, lon];
}

// ── continent shapes (lat, lon in radians) ────────────────────────────────

interface Continent {
  lat: number;
  lon: number;
  radiusLat: number;
  radiusLon: number;
  color: string;
}

const CONTINENTS: Continent[] = [
  // North America
  { lat: 0.7, lon: -1.8, radiusLat: 0.5, radiusLon: 0.8, color: '#4a7c3f' },
  // South America
  { lat: -0.4, lon: -1.3, radiusLat: 0.6, radiusLon: 0.35, color: '#5a8c4a' },
  // Europe
  { lat: 0.85, lon: 0.4, radiusLat: 0.25, radiusLon: 0.3, color: '#6a9c5a' },
  // Africa
  { lat: 0.1, lon: 0.6, radiusLat: 0.55, radiusLon: 0.4, color: '#8a7c3f' },
  // Asia (large)
  { lat: 0.7, lon: 1.6, radiusLat: 0.55, radiusLon: 1.0, color: '#6a8c4a' },
  // Australia
  { lat: -0.6, lon: 2.4, radiusLat: 0.25, radiusLon: 0.3, color: '#9a8c5a' },
  // Greenland
  { lat: 1.1, lon: -0.9, radiusLat: 0.2, radiusLon: 0.2, color: '#8aac7a' },
];

// ── TextureSet types ─────────────────────────────────────────────────────

export interface TextureSet {
  color: THREE.CanvasTexture;
  normal?: THREE.CanvasTexture;
  roughness?: THREE.CanvasTexture;
  metalness?: THREE.CanvasTexture;
  // New PBR maps
  ao?: THREE.CanvasTexture;
  emissive?: THREE.CanvasTexture;
}

/** Generate a normal map from a height map canvas using Sobel filter. */
function makeNormalMap(src: HTMLCanvasElement, strength = 2.0): THREE.CanvasTexture {
  const W = src.width, H = src.height;
  const sCtx = src.getContext('2d')!;
  const sImg = sCtx.getImageData(0, 0, W, H);
  const sData: Uint8ClampedArray = sImg.data;
  const [canvas, ctx] = createCanvas(W, H);
  const img = ctx.createImageData(W, H);
  const d = img.data;
  const idx2 = (x: number, y: number) => (Math.max(0, Math.min(H - 1, y)) * W + Math.max(0, Math.min(W - 1, x))) * 4;
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const tl = sData[idx2(px - 1, py - 1)]! / 255;
      const t  = sData[idx2(px,     py - 1)]! / 255;
      const tr = sData[idx2(px + 1, py - 1)]! / 255;
      const l  = sData[idx2(px - 1, py)]!     / 255;
      const r  = sData[idx2(px + 1, py)]!     / 255;
      const bl = sData[idx2(px - 1, py + 1)]! / 255;
      const b  = sData[idx2(px,     py + 1)]! / 255;
      const br = sData[idx2(px + 1, py + 1)]! / 255;
      const dx = (tr + 2 * r + br) - (tl + 2 * l + bl);
      const dy = (bl + 2 * b + br) - (tl + 2 * t + tr);
      const nx = dx * strength, ny = dy * strength;
      const len = Math.sqrt(nx * nx + ny * ny + 1);
      const i = (py * W + px) * 4;
      d[i]!     = Math.round((nx / len * 0.5 + 0.5) * 255);
      d[i + 1]! = Math.round((ny / len * 0.5 + 0.5) * 255);
      d[i + 2]! = Math.round((1 / len) * 255);
      d[i + 3]! = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

function createFullTextureSet(
  colorCanvas: HTMLCanvasElement,
  normalCanvas?: HTMLCanvasElement,
  roughnessCanvas?: HTMLCanvasElement,
  metalnessCanvas?: HTMLCanvasElement,
  aoCanvas?: HTMLCanvasElement,
): TextureSet {
  const color = new THREE.CanvasTexture(colorCanvas);
  color.wrapS = color.wrapT = THREE.RepeatWrapping;
  color.colorSpace = THREE.SRGBColorSpace;
  color.anisotropy = 4;

  let normal: THREE.CanvasTexture | undefined;
  if (normalCanvas) {
    normal = makeNormalMap(normalCanvas, 2.0);
  }

  let roughness: THREE.CanvasTexture | undefined;
  if (roughnessCanvas) {
    roughness = new THREE.CanvasTexture(roughnessCanvas);
    roughness.wrapS = roughness.wrapT = THREE.RepeatWrapping;
    roughness.anisotropy = 4;
  }

  let metalness: THREE.CanvasTexture | undefined;
  if (metalnessCanvas) {
    metalness = new THREE.CanvasTexture(metalnessCanvas);
    metalness.wrapS = metalness.wrapT = THREE.RepeatWrapping;
    metalness.anisotropy = 4;
  }

  let ao: THREE.CanvasTexture | undefined;
  if (aoCanvas) {
    ao = new THREE.CanvasTexture(aoCanvas);
    ao.wrapS = ao.wrapT = THREE.RepeatWrapping;
    ao.anisotropy = 4;
  }

  return { color, normal, roughness, metalness, ao };
}

function seededRandomFast(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

function drawNoise(ctx: CanvasRenderingContext2D, W: number, H: number, scale: number, seed: number, min = 0, max = 255) {
  const rng = seededRandomFast(seed);
  const img = ctx.createImageData(W, H);
  const data = img.data;
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const idx = (py * W + px) * 4;
      const v = min + rng() * (max - min);
      data[idx] = data[idx + 1] = data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

function addFilmGrain(ctx: CanvasRenderingContext2D, W: number, H: number, amount = 0.02) {
  const img = ctx.getImageData(0, 0, W, H);
  const data = img.data!;
  for (let i = 0; i < data.length; i += 4) {
    const grain = (Math.random() - 0.5) * 2 * amount * 255;
    data[i]! = Math.min(255, Math.max(0, data[i]! + grain));
    data[i + 1]! = Math.min(255, Math.max(0, data[i + 1]! + grain));
    data[i + 2]! = Math.min(255, Math.max(0, data[i + 2]! + grain));
  }
  ctx.putImageData(img, 0, 0);
}

// ── public API ────────────────────────────────────────────────────────────

export function generateEarthTexture(): THREE.CanvasTexture {
  const W = 512, H = 256;
  const [canvas, ctx] = createCanvas(W, H);

  // 1. deep ocean
  ctx.fillStyle = '#1a3d6b';
  ctx.fillRect(0, 0, W, H);

  // 2. draw continents as ellipses
  for (const c of CONTINENTS) {
    ctx.fillStyle = c.color;
    ctx.beginPath();
    // map lat [0.85 … -1.1] → v [0 … 1]
    const cx = (c.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - c.lat) / Math.PI * H;
    const rx = c.radiusLon / (2 * Math.PI) * W;
    const ry = c.radiusLat / Math.PI * H;
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();

    // add some variation dots
    const rng = seededRandom(c.lat * 1000 + c.lon * 100);
    for (let i = 0; i < 40; i++) {
      const dx = (rng() - 0.5) * rx * 1.5;
      const dy = (rng() - 0.5) * ry * 1.5;
      const px = cx + dx;
      const py = cy + dy;
      const dist = ((dx / rx) ** 2 + (dy / ry) ** 2);
      if (dist < 1) {
        ctx.fillStyle = rng() > 0.5 ? '#3a6c2f' : '#7aac5a';
        ctx.beginPath();
        ctx.arc(px, py, 2 + rng() * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // 3. polar caps
  // north
  ctx.fillStyle = '#d0e8f0';
  ctx.fillRect(0, 0, W, H * 0.06);
  // south
  ctx.fillRect(0, H * 0.94, W, H * 0.06);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function generateEarthBumpMap(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const [canvas, ctx] = createCanvas(W, H);
  const imageData = ctx.createImageData(W, H);
  const data = imageData.data;

  // build continent mask so we can blend
  const continentMask = new Float32Array(W * H);

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const u = px / W;
      const v = py / H;
      const [lat, lon] = uvToLatLon(u, v);
      let mask = 0;
      for (const c of CONTINENTS) {
        const dlat = (lat - c.lat) / c.radiusLat;
        const dlon = (lon - c.lon) / c.radiusLon;
        if (dlat * dlat + dlon * dlon < 1) {
          mask = 1;
          break;
        }
      }
      // polar caps
      if (v < 0.07 || v > 0.93) mask = 0.5;
      continentMask[py * W + px] = mask;
    }
  }

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const idx = (py * W + px) * 4;
      const mask = continentMask[py * W + px] ?? 0;
      const noise = (Math.random() * 0.15 + 0.85);
      const elevation = (mask * 0.5 + 0.1 * noise) * 255;
      const v = Math.min(255, Math.max(0, Math.round(elevation)));
      data[idx] = v;
      data[idx + 1] = v;
      data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

export function generateMoonTexture(): THREE.CanvasTexture {
  const W = 512, H = 256;
  const [canvas, ctx] = createCanvas(W, H);

  // base gray
  ctx.fillStyle = '#9a9a9a';
  ctx.fillRect(0, 0, W, H);

  const rng = seededRandom(42);

  // craters
  for (let i = 0; i < 120; i++) {
    const cx = rng() * W;
    const cy = rng() * H;
    const radius = 3 + rng() * 20;
    const brightness = rng() * 40;
    const base = 0x9a - brightness;
    const color = `rgb(${base}, ${base}, ${base})`;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    // crater rim
    ctx.strokeStyle = `rgb(${base + 30}, ${base + 30}, ${base + 30})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // highlands (lighter patches)
  for (let i = 0; i < 30; i++) {
    const cx = rng() * W;
    const cy = rng() * H;
    const radius = 10 + rng() * 30;
    const brightness = 50 + rng() * 40;
    ctx.fillStyle = `rgb(${0x9a + brightness}, ${0x9a + brightness}, ${0x9a + brightness})`;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function generateMoonBumpMap(): THREE.CanvasTexture {
  const W = 512, H = 256;
  const [canvas, ctx] = createCanvas(W, H);
  const imageData = ctx.createImageData(W, H);
  const data = imageData.data;

  const rng = seededRandom(99);

  // crater positions
  const craters: [number, number, number][] = [];
  for (let i = 0; i < 120; i++) {
    craters.push([rng() * W, rng() * H, 3 + rng() * 20]);
  }

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const noise = rng() * 20;
      let val = 100 + noise; // base

      for (const [cx, cy, r] of craters) {
        const dx = px - cx;
        const dy = py - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < r) {
          // inside crater: darker
          const inner = (dist / r);
          val = 40 + inner * 60;
        } else if (dist < r * 1.15) {
          // rim: lighter
          const rim = (dist - r) / (r * 0.15);
          val = 180 + (1 - rim) * 50;
        }
      }

      const v = Math.min(255, Math.max(0, Math.round(val)));
      const idx = (py * W + px) * 4;
      data[idx] = v;
      data[idx + 1] = v;
      data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// ── Rocket part textures ─────────────────────────────────────────────────

export function generateTankTexture(size: 'S' | 'M' | 'L' | 'XL' = 'M'): TextureSet {
  const W = 2048, H = 2048;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(size.charCodeAt(0) * 1000 + 42);

  const isSmall = size === 'S';
  const isLarge = size === 'L' || size === 'XL';

  // === COLOR MAP ===
  // Light grey base (like real rocket tanks)
  colorCtx.fillStyle = '#ecece8';
  colorCtx.fillRect(0, 0, W, H);

  // Subtle vertical gradient
  const grad = colorCtx.createLinearGradient(0, 0, 0, H);
  if (grad) {
    grad.addColorStop(0, 'rgba(0,0,0,0.04)');
    grad.addColorStop(0.5, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.03)');
    colorCtx.fillStyle = grad;
    colorCtx.fillRect(0, 0, W, H);
  }

  // Horizontal weld seams
  const panelCount = isSmall ? 6 : isLarge ? 16 : 10;
  const panelH = H / panelCount;
  colorCtx.strokeStyle = '#d0d0ca';
  colorCtx.lineWidth = 3;
  for (let y = panelH; y < H; y += panelH) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
    // Weld bead
    colorCtx.strokeStyle = 'rgba(255,255,255,0.12)';
    colorCtx.lineWidth = 1.5;
    colorCtx.beginPath();
    colorCtx.moveTo(0, y - 1.5);
    colorCtx.lineTo(W, y - 1.5);
    colorCtx.stroke();
    colorCtx.strokeStyle = '#d0d0ca';
    colorCtx.lineWidth = 3;
  }

  // Vertical stringers
  const stringerCount = isSmall ? 12 : isLarge ? 28 : 18;
  colorCtx.strokeStyle = 'rgba(90,90,100,0.06)';
  colorCtx.lineWidth = 2;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }

  // Rivets along weld seams
  colorCtx.fillStyle = '#c8c8c2';
  for (let y = panelH; y < H; y += panelH) {
    for (let x = 40; x < W - 40; x += 80) {
      colorCtx.beginPath();
      colorCtx.arc(x, y, 5, 0, Math.PI * 2);
      colorCtx.fill();
      colorCtx.strokeStyle = '#b0b0aa';
      colorCtx.lineWidth = 1;
      colorCtx.stroke();
    }
  }

  // Insulation foam patches (SpaceX Falcon 9 style — orange/brown)
  const foamCount = isSmall ? 4 : isLarge ? 14 : 8;
  for (let i = 0; i < foamCount; i++) {
    const x = rng() * W * 0.85 + W * 0.075;
    const y = rng() * H * 0.75 + H * 0.1;
    const w = 50 + rng() * 180;
    const h = 40 + rng() * 120;
    // Orange-brown foam base
    colorCtx.fillStyle = `rgb(${200 + rng() * 30}, ${160 + rng() * 20}, ${100 + rng() * 20})`;
    colorCtx.globalAlpha = 0.7 + rng() * 0.25;
    colorCtx.fillRect(x, y, w, h);
    // Foam texture dots
    colorCtx.fillStyle = `rgb(${180 + rng() * 20}, ${140 + rng() * 20}, ${80 + rng() * 20})`;
    for (let d = 0; d < 20; d++) {
      colorCtx.beginPath();
      colorCtx.arc(x + rng() * w, y + rng() * h, 2 + rng() * 5, 0, Math.PI * 2);
      colorCtx.fill();
    }
    colorCtx.globalAlpha = 1;
  }

  // Top/bottom domes
  colorCtx.fillStyle = '#6a6a70';
  colorCtx.fillRect(0, 0, W, H * 0.015);
  colorCtx.fillRect(0, H * 0.985, W, H * 0.015);

  // Vertical seam
  colorCtx.strokeStyle = 'rgba(90,90,100,0.35)';
  colorCtx.lineWidth = 4;
  colorCtx.beginPath();
  colorCtx.moveTo(W * 0.5, 0);
  colorCtx.lineTo(W * 0.5, H);
  colorCtx.stroke();

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Panel seam ridges
  normalCtx.strokeStyle = '#b8b8b8';
  normalCtx.lineWidth = 10;
  for (let y = panelH; y < H; y += panelH) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // Stringers
  normalCtx.strokeStyle = '#989898';
  normalCtx.lineWidth = 4;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }

  // Rivets
  normalCtx.fillStyle = '#d0d0d0';
  for (let y = panelH; y < H; y += panelH) {
    for (let x = 40; x < W - 40; x += 80) {
      normalCtx.beginPath();
      normalCtx.arc(x, y, 6, 0, Math.PI * 2);
      normalCtx.fill();
    }
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#a0a0a0';
  roughCtx.fillRect(0, 0, W, H);

  // Seams rougher
  roughCtx.strokeStyle = '#d0d0d0';
  roughCtx.lineWidth = 12;
  for (let y = panelH; y < H; y += panelH) {
    roughCtx.beginPath();
    roughCtx.moveTo(0, y);
    roughCtx.lineTo(W, y);
    roughCtx.stroke();
  }

  // Foam areas very rough
  for (let i = 0; i < foamCount; i++) {
    const x = rng() * W * 0.85 + W * 0.075;
    const y = rng() * H * 0.75 + H * 0.1;
    const w = 50 + rng() * 180;
    const h = 40 + rng() * 120;
    roughCtx.fillStyle = '#e0e0e0';
    roughCtx.fillRect(x, y, w, h);
  }

  // Domes smoother
  roughCtx.fillStyle = '#606060';
  roughCtx.fillRect(0, 0, W, H * 0.015);
  roughCtx.fillRect(0, H * 0.985, W, H * 0.015);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#080808';
  metalCtx.fillRect(0, 0, W, H);

  metalCtx.fillStyle = '#d0d0d0';
  metalCtx.fillRect(0, 0, W, H * 0.015);
  metalCtx.fillRect(0, H * 0.985, W, H * 0.015);
  metalCtx.fillStyle = '#707070';
  metalCtx.fillRect(W * 0.49, 0, W * 0.02, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 14;
  for (let y = panelH; y < H; y += panelH) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#b0b0b0';
  aoCtx.lineWidth = 8;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    aoCtx.beginPath();
    aoCtx.moveTo(x, 0);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.012);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateCapsuleTexture(): TextureSet {
  const W = 2048, H = 2048;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(12345);

  // === COLOR MAP ===
  // White capsule body (Apollo/Dragon style)
  colorCtx.fillStyle = '#f5f5ee';
  colorCtx.fillRect(0, 0, W, H * 0.78);

  // Subtle vertical gradient
  const bodyGrad = colorCtx.createLinearGradient(0, 0, 0, H * 0.78);
  if (bodyGrad) {
    bodyGrad.addColorStop(0, 'rgba(20,20,25,0.05)');
    bodyGrad.addColorStop(0.5, 'rgba(0,0,0,0)');
    bodyGrad.addColorStop(1, 'rgba(20,20,25,0.03)');
    colorCtx.fillStyle = bodyGrad;
    colorCtx.fillRect(0, 0, W, H * 0.78);
  }

  // Panel seam lines on body
  colorCtx.strokeStyle = 'rgba(180,180,180,0.15)';
  colorCtx.lineWidth = 2;
  for (let y = H * 0.08; y < H * 0.75; y += H * 0.07) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // Heat shield (dark ablative)
  colorCtx.fillStyle = '#2a2a2e';
  colorCtx.fillRect(0, H * 0.78, W, H * 0.22);

  // Ablative texture dots
  for (let i = 0; i < 1500; i++) {
    const x = rng() * W;
    const y = H * 0.78 + rng() * H * 0.22;
    const r = 1 + rng() * 4;
    const b = 25 + rng() * 45;
    colorCtx.fillStyle = `rgb(${b},${b},${b + 3})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Reentry char streaks
  colorCtx.strokeStyle = 'rgba(10,10,12,0.35)';
  colorCtx.lineWidth = 1 + rng() * 2;
  for (let i = 0; i < 50; i++) {
    const x = rng() * W;
    const y = H * 0.78 + rng() * H * 0.18;
    const len = 30 + rng() * 120;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x + (rng() - 0.5) * 40, y + len);
    colorCtx.stroke();
  }

  // Separation ring
  colorCtx.fillStyle = '#5a5a60';
  colorCtx.fillRect(0, H * 0.77, W, H * 0.015);
  colorCtx.fillStyle = '#8a8a90';
  colorCtx.fillRect(0, H * 0.775, W, H * 0.005);

  // NASA-style stripes
  colorCtx.fillStyle = '#003366';
  colorCtx.fillRect(0, H * 0.20, W, H * 0.035);
  colorCtx.fillStyle = '#b31b1b';
  colorCtx.fillRect(0, H * 0.245, W, H * 0.025);
  colorCtx.fillStyle = 'rgba(255,255,255,0.25)';
  colorCtx.fillRect(0, H * 0.27, W, H * 0.003);

  // Command module windows (2 windows)
  const windPositions: [number, number][] = [[W * 0.28, H * 0.12], [W * 0.55, H * 0.14]];
  for (const [wx, wy] of windPositions) {
    colorCtx.fillStyle = '#0a0a15';
    colorCtx.beginPath();
    colorCtx.ellipse(wx, wy, W * 0.04, H * 0.03, 0, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#9a9a9e';
    colorCtx.lineWidth = 5;
    colorCtx.beginPath();
    colorCtx.ellipse(wx, wy, W * 0.045, H * 0.035, 0, 0, Math.PI * 2);
    colorCtx.stroke();
    colorCtx.strokeStyle = '#5a5a5e';
    colorCtx.lineWidth = 2;
    colorCtx.beginPath();
    colorCtx.ellipse(wx, wy, W * 0.05, H * 0.04, 0, 0, Math.PI * 2);
    colorCtx.stroke();
  }

  // RCS ports
  colorCtx.fillStyle = '#3a3a3e';
  for (let q = 0; q < 4; q++) {
    const a = (q / 4) * Math.PI * 2;
    const x = W * 0.5 + Math.cos(a) * W * 0.38;
    const y = H * 0.35 + Math.sin(a) * H * 0.05;
    colorCtx.beginPath();
    colorCtx.arc(x, y, 14, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#5a5a5e';
    colorCtx.lineWidth = 2;
    colorCtx.stroke();
  }

  // Parachute cover
  colorCtx.fillStyle = '#e0e0d8';
  colorCtx.fillRect(0, 0, W, H * 0.04);
  colorCtx.strokeStyle = '#a0a0a0';
  colorCtx.lineWidth = 2;
  colorCtx.beginPath();
  colorCtx.moveTo(0, H * 0.04);
  colorCtx.lineTo(W, H * 0.04);
  colorCtx.stroke();

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  normalCtx.strokeStyle = '#a8a8a8';
  normalCtx.lineWidth = 5;
  for (let y = H * 0.08; y < H * 0.75; y += H * 0.07) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  normalCtx.strokeStyle = '#585858';
  normalCtx.lineWidth = 3;
  for (let x = 0; x < W; x += 48) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, H * 0.78);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }
  for (let y = H * 0.8; y < H; y += 48) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  normalCtx.strokeStyle = '#c0c0c0';
  normalCtx.lineWidth = 8;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.775);
  normalCtx.lineTo(W, H * 0.775);
  normalCtx.stroke();

  for (const [wx, wy] of windPositions) {
    normalCtx.strokeStyle = '#d0d0d0';
    normalCtx.lineWidth = 10;
    normalCtx.beginPath();
    normalCtx.ellipse(wx, wy, W * 0.05, H * 0.04, 0, 0, Math.PI * 2);
    normalCtx.stroke();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#808080';
  roughCtx.fillRect(0, 0, W, H * 0.78);

  roughCtx.fillStyle = '#e0e0e0';
  roughCtx.fillRect(0, H * 0.78, W, H * 0.22);

  roughCtx.fillStyle = '#484848';
  roughCtx.fillRect(0, H * 0.77, W, H * 0.015);

  for (const [wx, wy] of windPositions) {
    roughCtx.fillStyle = '#181818';
    roughCtx.beginPath();
    roughCtx.ellipse(wx, wy, W * 0.045, H * 0.035, 0, 0, Math.PI * 2);
    roughCtx.fill();
  }

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#080808';
  metalCtx.fillRect(0, 0, W, H);

  metalCtx.fillStyle = '#d0d0d0';
  metalCtx.fillRect(0, H * 0.77, W, H * 0.015);
  metalCtx.fillRect(0, 0, W, H * 0.04);

  for (const [wx, wy] of windPositions) {
    metalCtx.fillStyle = '#b0b0b0';
    metalCtx.beginPath();
    metalCtx.ellipse(wx, wy, W * 0.05, H * 0.04, 0, 0, Math.PI * 2);
    metalCtx.fill();
  }

  for (let q = 0; q < 4; q++) {
    const a = (q / 4) * Math.PI * 2;
    const x = W * 0.5 + Math.cos(a) * W * 0.38;
    const y = H * 0.35 + Math.sin(a) * H * 0.05;
    metalCtx.beginPath();
    metalCtx.arc(x, y, 16, 0, Math.PI * 2);
    metalCtx.fill();
  }

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 10;
  for (let y = H * 0.08; y < H * 0.75; y += H * 0.07) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#606060';
  aoCtx.lineWidth = 6;
  for (let x = 0; x < W; x += 48) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, H * 0.78);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }
  for (let y = H * 0.8; y < H; y += 48) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#909090';
  aoCtx.lineWidth = 12;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.775);
  aoCtx.lineTo(W, H * 0.775);
  aoCtx.stroke();

  for (const [wx, wy] of windPositions) {
    aoCtx.strokeStyle = '#707070';
    aoCtx.lineWidth = 14;
    aoCtx.beginPath();
    aoCtx.ellipse(wx, wy, W * 0.05, H * 0.04, 0, 0, Math.PI * 2);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.018);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateEngineTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(54321);

  // === COLOR MAP ===
  // Upper engine body - Inconel/stainless steel
  colorCtx.fillStyle = '#3a3a40';
  colorCtx.fillRect(0, 0, W, H * 0.35);

  // Subtle brushed metal texture on body
  for (let i = 0; i < 200; i++) {
    const x = rng() * W;
    const y = rng() * H * 0.35;
    const len = 5 + rng() * 30;
    colorCtx.strokeStyle = `rgba(255,255,255,${0.02 + rng() * 0.03})`;
    colorCtx.lineWidth = 0.5;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x, y + len);
    colorCtx.stroke();
  }

  // Mid flange (bolted connection)
  colorCtx.fillStyle = '#4a4a50';
  colorCtx.fillRect(0, H * 0.35, W, H * 0.06);

  // Bolt holes on flange
  colorCtx.fillStyle = '#2a2a2e';
  for (let x = 16; x < W; x += 32) {
    colorCtx.beginPath();
    colorCtx.arc(x, H * 0.38, 5, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#5a5a60';
    colorCtx.lineWidth = 1;
    colorCtx.stroke();
  }

  // Nozzle - copper alloy (regenerative cooling channels visible)
  // Gradient from copper to dark copper
  for (let py = H * 0.41; py < H * 0.95; py++) {
    const t = (py - H * 0.41) / (H * 0.54);
    // Copper color shifting to darker oxidized copper
    const r = Math.round(180 + 40 * (1 - t));
    const g = Math.round(100 + 20 * (1 - t));
    const b = Math.round(40 + 10 * (1 - t));
    colorCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // Cooling channel ridges (vertical lines)
  colorCtx.strokeStyle = 'rgba(120,70,30,0.4)';
  colorCtx.lineWidth = 1;
  for (let x = 8; x < W; x += 16) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, H * 0.41);
    colorCtx.lineTo(x, H * 0.95);
    colorCtx.stroke();
  }

  // Soot/carbon buildup near exit (darker)
  const sootGrad = colorCtx.createLinearGradient(0, H * 0.85, 0, H);
  if (sootGrad) {
    sootGrad.addColorStop(0, 'rgba(0,0,0,0)');
    sootGrad.addColorStop(0.5, 'rgba(0,0,0,0.3)');
    sootGrad.addColorStop(1, 'rgba(0,0,0,0.6)');
    colorCtx.fillStyle = sootGrad;
    colorCtx.fillRect(0, H * 0.85, W, H * 0.15);
  }

  // Nozzle exit rim - Inconel (high temp alloy)
  colorCtx.fillStyle = '#5a5a60';
  colorCtx.fillRect(0, H * 0.95, W, H * 0.025);
  colorCtx.fillStyle = '#7a7a80';
  colorCtx.fillRect(0, H * 0.975, W, H * 0.025);

  // Gimbal mounting points (4 lugs)
  colorCtx.fillStyle = '#4a4a50';
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const x = W * 0.5 + Math.cos(angle) * W * 0.42;
    const y = H * 0.25 + Math.sin(angle) * H * 0.05;
    colorCtx.fillRect(x - 15, y - 15, 30, 30);
    colorCtx.strokeStyle = '#6a6a70';
    colorCtx.lineWidth = 2;
    colorCtx.strokeRect(x - 15, y - 15, 30, 30);
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Body brushed texture
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 4) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H * 0.35);
    normalCtx.stroke();
  }

  // Flange bolts
  normalCtx.fillStyle = '#c0c0c0';
  for (let x = 16; x < W; x += 32) {
    normalCtx.beginPath();
    normalCtx.arc(x, H * 0.38, 5, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // Cooling channels
  normalCtx.strokeStyle = '#606060';
  normalCtx.lineWidth = 3;
  for (let x = 8; x < W; x += 16) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, H * 0.41);
    normalCtx.lineTo(x, H * 0.95);
    normalCtx.stroke();
  }

  // Nozzle seams
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 6;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.41);
  normalCtx.lineTo(W, H * 0.41);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.95);
  normalCtx.lineTo(W, H * 0.95);
  normalCtx.stroke();

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#505050'; // Polished metal body
  roughCtx.fillRect(0, 0, W, H * 0.35);

  roughCtx.fillStyle = '#606060'; // Flange
  roughCtx.fillRect(0, H * 0.35, W, H * 0.06);

  roughCtx.fillStyle = '#808080'; // Copper nozzle - somewhat rough
  roughCtx.fillRect(0, H * 0.41, W, H * 0.54);

  roughCtx.fillStyle = '#b0b0b0'; // Soot - very rough
  roughCtx.fillRect(0, H * 0.85, W, H * 0.15);

  roughCtx.fillStyle = '#404040'; // Inconel rim - smoother
  roughCtx.fillRect(0, H * 0.95, W, H * 0.05);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#e0e0e0'; // All metallic
  metalCtx.fillRect(0, 0, W, H);

  // Slightly less metallic where soot covers
  metalCtx.fillStyle = '#808080';
  metalCtx.fillRect(0, H * 0.85, W, H * 0.15);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  // Flange shadow
  aoCtx.strokeStyle = '#606060';
  aoCtx.lineWidth = 12;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.35);
  aoCtx.lineTo(W, H * 0.35);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.41);
  aoCtx.lineTo(W, H * 0.41);
  aoCtx.stroke();

  // Cooling channel shadows
  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 4;
  for (let x = 8; x < W; x += 16) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, H * 0.41);
    aoCtx.lineTo(x, H * 0.95);
    aoCtx.stroke();
  }

  // Nozzle exit rim
  aoCtx.strokeStyle = '#707070';
  aoCtx.lineWidth = 10;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.95);
  aoCtx.lineTo(W, H * 0.95);
  aoCtx.stroke();

  addFilmGrain(colorCtx, W, H, 0.01);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateParachuteTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(98765);

  // === COLOR MAP ===
  // White nylon fabric with slight warmth
  colorCtx.fillStyle = '#fafaf5';
  colorCtx.fillRect(0, 0, W, H);

  // Subtle fabric texture variation
  for (let i = 0; i < 5000; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 1 + rng() * 2;
    const brightness = 245 + rng() * 10;
    colorCtx.fillStyle = `rgb(${brightness},${brightness},${brightness - 2})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Radial gore seams (parachute panels)
  colorCtx.strokeStyle = 'rgba(180,180,190,0.4)';
  colorCtx.lineWidth = 2;
  const goreCount = 12;
  for (let i = 0; i < goreCount; i++) {
    const angle = (i / goreCount) * Math.PI * 2;
    colorCtx.beginPath();
    colorCtx.moveTo(W / 2, H / 2);
    colorCtx.lineTo(
      W / 2 + Math.cos(angle) * W * 0.7,
      H / 2 + Math.sin(angle) * H * 0.7
    );
    colorCtx.stroke();
  }

  // Horizontal ring seams (reefing lines)
  colorCtx.strokeStyle = 'rgba(160,160,170,0.3)';
  colorCtx.lineWidth = 1;
  colorCtx.setLineDash([8, 16]);
  for (let r = 50; r < Math.min(W, H) * 0.45; r += 60) {
    colorCtx.beginPath();
    colorCtx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
    colorCtx.stroke();
  }
  colorCtx.setLineDash([]);

  // Center vent (if applicable)
  colorCtx.fillStyle = '#e8e8e0';
  colorCtx.beginPath();
  colorCtx.arc(W / 2, H / 2, 15, 0, Math.PI * 2);
  colorCtx.fill();
  colorCtx.strokeStyle = '#c0c0b8';
  colorCtx.lineWidth = 2;
  colorCtx.stroke();

  // Reinforcement tapes (cross pattern)
  colorCtx.strokeStyle = 'rgba(200,200,210,0.5)';
  colorCtx.lineWidth = 4;
  colorCtx.beginPath();
  colorCtx.moveTo(W / 2 - 30, 0);
  colorCtx.lineTo(W / 2 - 30, H);
  colorCtx.stroke();
  colorCtx.beginPath();
  colorCtx.moveTo(W / 2 + 30, 0);
  colorCtx.lineTo(W / 2 + 30, H);
  colorCtx.stroke();
  colorCtx.beginPath();
  colorCtx.moveTo(0, H / 2 - 30);
  colorCtx.lineTo(W, H / 2 - 30);
  colorCtx.stroke();
  colorCtx.beginPath();
  colorCtx.moveTo(0, H / 2 + 30);
  colorCtx.lineTo(W, H / 2 + 30);
  colorCtx.stroke();

  // Suspension line attachment points (around edge)
  colorCtx.fillStyle = '#d0d0c8';
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const x = W / 2 + Math.cos(angle) * W * 0.45;
    const y = H / 2 + Math.sin(angle) * H * 0.45;
    colorCtx.beginPath();
    colorCtx.arc(x, y, 8, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Fabric weave pattern
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 1;
  for (let i = 0; i < W; i += 6) {
    normalCtx.beginPath(); normalCtx.moveTo(i, 0); normalCtx.lineTo(i, H); normalCtx.stroke();
    normalCtx.beginPath(); normalCtx.moveTo(0, i); normalCtx.lineTo(W, i); normalCtx.stroke();
  }

  // Gore seams
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 3;
  for (let i = 0; i < goreCount; i++) {
    const angle = (i / goreCount) * Math.PI * 2;
    normalCtx.beginPath();
    normalCtx.moveTo(W / 2, H / 2);
    normalCtx.lineTo(
      W / 2 + Math.cos(angle) * W * 0.7,
      H / 2 + Math.sin(angle) * H * 0.7
    );
    normalCtx.stroke();
  }

  // Ring seams
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 2;
  normalCtx.setLineDash([10, 20]);
  for (let r = 50; r < Math.min(W, H) * 0.45; r += 60) {
    normalCtx.beginPath();
    normalCtx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
    normalCtx.stroke();
  }
  normalCtx.setLineDash([]);

  // Reinforcement tapes
  normalCtx.strokeStyle = '#c0c0c0';
  normalCtx.lineWidth = 6;
  normalCtx.beginPath();
  normalCtx.moveTo(W / 2 - 30, 0);
  normalCtx.lineTo(W / 2 - 30, H);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(W / 2 + 30, 0);
  normalCtx.lineTo(W / 2 + 30, H);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H / 2 - 30);
  normalCtx.lineTo(W, H / 2 - 30);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H / 2 + 30);
  normalCtx.lineTo(W, H / 2 + 30);
  normalCtx.stroke();

  // === ROUGHNESS MAP ===
  // Fabric is quite rough
  roughCtx.fillStyle = '#d0d0d0';
  roughCtx.fillRect(0, 0, W, H);

  // Seams slightly smoother (thread)
  roughCtx.strokeStyle = '#b0b0b0';
  roughCtx.lineWidth = 4;
  for (let i = 0; i < goreCount; i++) {
    const angle = (i / goreCount) * Math.PI * 2;
    roughCtx.beginPath();
    roughCtx.moveTo(W / 2, H / 2);
    roughCtx.lineTo(
      W / 2 + Math.cos(angle) * W * 0.7,
      H / 2 + Math.sin(angle) * H * 0.7
    );
    roughCtx.stroke();
  }

  // Center vent smooth
  roughCtx.fillStyle = '#808080';
  roughCtx.beginPath();
  roughCtx.arc(W / 2, H / 2, 20, 0, Math.PI * 2);
  roughCtx.fill();

  // Reinforcement tapes
  roughCtx.fillStyle = '#a0a0a0';
  roughCtx.fillRect(W / 2 - 32, 0, 4, H);
  roughCtx.fillRect(W / 2 + 28, 0, 4, H);
  roughCtx.fillRect(0, H / 2 - 32, W, 4);
  roughCtx.fillRect(0, H / 2 + 28, W, 4);

  // === METALNESS MAP ===
  // Fabric is non-metallic
  metalCtx.fillStyle = '#000000';
  metalCtx.fillRect(0, 0, W, H);

  // Metal D-rings at attachment points
  metalCtx.fillStyle = '#e0e0e0';
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const x = W / 2 + Math.cos(angle) * W * 0.45;
    const y = H / 2 + Math.sin(angle) * H * 0.45;
    metalCtx.beginPath();
    metalCtx.arc(x, y, 10, 0, Math.PI * 2);
    metalCtx.fill();
  }

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  // Seam shadows
  aoCtx.strokeStyle = '#a0a0a0';
  aoCtx.lineWidth = 8;
  for (let i = 0; i < goreCount; i++) {
    const angle = (i / goreCount) * Math.PI * 2;
    aoCtx.beginPath();
    aoCtx.moveTo(W / 2, H / 2);
    aoCtx.lineTo(
      W / 2 + Math.cos(angle) * W * 0.7,
      H / 2 + Math.sin(angle) * H * 0.7
    );
    aoCtx.stroke();
  }

  // Ring shadows
  aoCtx.strokeStyle = '#b0b0b0';
  aoCtx.lineWidth = 4;
  aoCtx.setLineDash([10, 20]);
  for (let r = 50; r < Math.min(W, H) * 0.45; r += 60) {
    aoCtx.beginPath();
    aoCtx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
    aoCtx.stroke();
  }
  aoCtx.setLineDash([])

  // Tape shadows
  aoCtx.strokeStyle = '#909090';
  aoCtx.lineWidth = 10;
  aoCtx.beginPath();
  aoCtx.moveTo(W / 2 - 30, 0);
  aoCtx.lineTo(W / 2 - 30, H);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(W / 2 + 30, 0);
  aoCtx.lineTo(W / 2 + 30, H);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H / 2 - 30);
  aoCtx.lineTo(W, H / 2 - 30);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H / 2 + 30);
  aoCtx.lineTo(W, H / 2 + 30);
  aoCtx.stroke();

  addFilmGrain(colorCtx, W, H, 0.025);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateLegsTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(11111);

  // === COLOR MAP ===
  // Dark olive/military green or grey landing legs
  colorCtx.fillStyle = '#3a3d30';
  colorCtx.fillRect(0, 0, W, H);

  // Brushed metal texture on struts
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const len = 10 + rng() * 50;
    colorCtx.strokeStyle = `rgba(255,255,255,${0.02 + rng() * 0.03})`;
    colorCtx.lineWidth = 0.5;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x, y + len);
    colorCtx.stroke();
  }

  // Hydraulic cylinder bands (chrome/silver)
  colorCtx.fillStyle = '#8a8a8e';
  for (let y = 50; y < H; y += 200) {
    colorCtx.fillRect(0, y, W, 15);
    colorCtx.fillStyle = '#6a6a6e';
    colorCtx.fillRect(0, y + 15, W, 2);
    colorCtx.fillStyle = '#8a8a8e';
  }

  // Foot pads - darker with texture
  colorCtx.fillStyle = '#2a2d22';
  colorCtx.fillRect(0, H * 0.85, W, H * 0.15);

  // Foot pad texture (honeycomb or grid)
  colorCtx.strokeStyle = '#4a4d42';
  colorCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 32) {
    colorCtx.beginPath(); colorCtx.moveTo(x, H * 0.85); colorCtx.lineTo(x, H); colorCtx.stroke();
  }
  for (let y = H * 0.85; y < H; y += 32) {
    colorCtx.beginPath(); colorCtx.moveTo(0, y); colorCtx.lineTo(W, y); colorCtx.stroke();
  }

  // Warning stripes on foot (yellow/black)
  colorCtx.fillStyle = '#222';
  for (let x = 0; x < W; x += 40) {
    colorCtx.fillRect(x, H * 0.85, 20, H * 0.15);
  }
  colorCtx.fillStyle = '#ffcc00';
  for (let x = 20; x < W; x += 40) {
    colorCtx.fillRect(x, H * 0.85, 20, H * 0.15);
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Strut ridges
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 2;
  for (let x = 0; x < W; x += 64) {
    normalCtx.beginPath(); normalCtx.moveTo(x, 0); normalCtx.lineTo(x, H * 0.85); normalCtx.stroke();
  }

  // Hydraulic bands
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 6;
  for (let y = 50; y < H; y += 200) {
    normalCtx.beginPath(); normalCtx.moveTo(0, y); normalCtx.lineTo(W, y); normalCtx.stroke();
  }

  // Foot pad grid
  normalCtx.strokeStyle = '#606060';
  normalCtx.lineWidth = 3;
  for (let x = 0; x < W; x += 32) {
    normalCtx.beginPath(); normalCtx.moveTo(x, H * 0.85); normalCtx.lineTo(x, H); normalCtx.stroke();
  }
  for (let y = H * 0.85; y < H; y += 32) {
    normalCtx.beginPath(); normalCtx.moveTo(0, y); normalCtx.lineTo(W, y); normalCtx.stroke();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#707070'; // Painted metal
  roughCtx.fillRect(0, 0, W, H * 0.85);

  roughCtx.fillStyle = '#909090'; // Hydraulic bands - smoother
  for (let y = 50; y < H; y += 200) {
    roughCtx.fillRect(0, y, W, 17);
  }

  roughCtx.fillStyle = '#b0b0b0'; // Foot pads - rougher
  roughCtx.fillRect(0, H * 0.85, W, H * 0.15);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#303030'; // Painted = low metal
  metalCtx.fillRect(0, 0, W, H);

  // Hydraulic chrome parts
  metalCtx.fillStyle = '#e0e0e0';
  for (let y = 50; y < H; y += 200) {
    metalCtx.fillRect(0, y, W, 17);
  }

  // Foot pad metal brackets
  metalCtx.fillStyle = '#a0a0a0';
  metalCtx.fillRect(0, H * 0.85, W, H * 0.15);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 8;
  for (let x = 0; x < W; x += 64) {
    aoCtx.beginPath(); aoCtx.moveTo(x, 0); aoCtx.lineTo(x, H * 0.85); aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#909090';
  aoCtx.lineWidth = 10;
  for (let y = 50; y < H; y += 200) {
    aoCtx.beginPath(); aoCtx.moveTo(0, y); aoCtx.lineTo(W, y); aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.02);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateDecouplerTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(22222);

  // === COLOR MAP ===
  // Dark gunmetal grey
  colorCtx.fillStyle = '#4a4a4e';
  colorCtx.fillRect(0, 0, W, H);

  // Subtle brushed texture
  for (let i = 0; i < 150; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const len = 5 + rng() * 30;
    colorCtx.strokeStyle = `rgba(255,255,255,${0.02 + rng() * 0.03})`;
    colorCtx.lineWidth = 0.5;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x, y + len);
    colorCtx.stroke();
  }

  // Separation ring (brighter metal)
  colorCtx.fillStyle = '#7a7a7e';
  colorCtx.fillRect(0, H * 0.35, W, H * 0.30);

  // Bolt pattern on ring
  colorCtx.fillStyle = '#3a3a3e';
  for (let x = 24; x < W; x += 48) {
    colorCtx.beginPath();
    colorCtx.arc(x, H * 0.5, 6, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#6a6a6e';
    colorCtx.lineWidth = 1;
    colorCtx.stroke();
  }

  // Pyro charge indicators (small red/yellow dots)
  colorCtx.fillStyle = '#cc3300';
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const x = W * 0.5 + Math.cos(angle) * W * 0.35;
    const y = H * 0.5 + Math.sin(angle) * H * 0.35;
    colorCtx.beginPath();
    colorCtx.arc(x, y, 8, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Top and bottom flanges
  colorCtx.fillStyle = '#5a5a5e';
  colorCtx.fillRect(0, 0, W, H * 0.08);
  colorCtx.fillRect(0, H * 0.92, W, H * 0.08);

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Separation ring ridge
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 10;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.35);
  normalCtx.lineTo(W, H * 0.35);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.65);
  normalCtx.lineTo(W, H * 0.65);
  normalCtx.stroke();

  // Bolts
  normalCtx.fillStyle = '#c0c0c0';
  for (let x = 24; x < W; x += 48) {
    normalCtx.beginPath();
    normalCtx.arc(x, H * 0.5, 6, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // Flanges
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 8;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.08);
  normalCtx.lineTo(W, H * 0.08);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.92);
  normalCtx.lineTo(W, H * 0.92);
  normalCtx.stroke();

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#606060'; // Machined metal
  roughCtx.fillRect(0, 0, W, H);

  // Separation ring - smoother (precision ground)
  roughCtx.fillStyle = '#404040';
  roughCtx.fillRect(0, H * 0.35, W, H * 0.30);

  // Flanges
  roughCtx.fillStyle = '#505050';
  roughCtx.fillRect(0, 0, W, H * 0.08);
  roughCtx.fillRect(0, H * 0.92, W, H * 0.08);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#d0d0d0'; // All metal
  metalCtx.fillRect(0, 0, W, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#707070';
  aoCtx.lineWidth = 12;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.35);
  aoCtx.lineTo(W, H * 0.35);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.65);
  aoCtx.lineTo(W, H * 0.65);
  aoCtx.stroke();

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 10;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.08);
  aoCtx.lineTo(W, H * 0.08);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.92);
  aoCtx.lineTo(W, H * 0.92);
  aoCtx.stroke();

  addFilmGrain(colorCtx, W, H, 0.015);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateHeatshieldTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(33333);

  // === COLOR MAP ===
  // Dark ablative material (PICA/XIRCA/Shuttle tile style)
  colorCtx.fillStyle = '#1a1a1c';
  colorCtx.fillRect(0, 0, W, H);

  // Ablative texture - charred carbon phenolics
  for (let i = 0; i < 3000; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 1 + rng() * 4;
    const brightness = 20 + rng() * 50;
    const hueShift = rng() * 20 - 10;
    colorCtx.fillStyle = `rgb(${brightness + hueShift},${brightness},${brightness - hueShift})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Charring streaks (reentry plasma flow)
  colorCtx.strokeStyle = 'rgba(40,20,10,0.3)';
  colorCtx.lineWidth = 1 + rng() * 2;
  for (let i = 0; i < 80; i++) {
    const x = rng() * W;
    const y = rng() * H * 0.3;
    const len = 50 + rng() * 200;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x + (rng() - 0.5) * 40, y + len);
    colorCtx.stroke();
  }

  // Tile gap pattern (if tiled heatshield like Shuttle)
  colorCtx.strokeStyle = '#0a0a0c';
  colorCtx.lineWidth = 2;
  for (let x = 0; x < W; x += 64) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }
  for (let y = 0; y < H; y += 64) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Ablative surface roughness
  for (let i = 0; i < 500; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 5;
    normalCtx.fillStyle = `rgb(${128 + rng() * 30},${128 + rng() * 30},${128 + rng() * 30})`;
    normalCtx.beginPath();
    normalCtx.arc(x, y, r, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // Tile gaps
  normalCtx.strokeStyle = '#404040';
  normalCtx.lineWidth = 6;
  for (let x = 0; x < W; x += 64) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }
  for (let y = 0; y < H; y += 64) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // === ROUGHNESS MAP ===
  // Ablative = extremely rough
  roughCtx.fillStyle = '#f0f0f0';
  roughCtx.fillRect(0, 0, W, H);

  // Tile gaps even rougher
  roughCtx.fillStyle = '#ffffff';
  roughCtx.strokeStyle = '#ffffff';
  roughCtx.lineWidth = 8;
  for (let x = 0; x < W; x += 64) {
    roughCtx.beginPath();
    roughCtx.moveTo(x, 0);
    roughCtx.lineTo(x, H);
    roughCtx.stroke();
  }
  for (let y = 0; y < H; y += 64) {
    roughCtx.beginPath();
    roughCtx.moveTo(0, y);
    roughCtx.lineTo(W, y);
    roughCtx.stroke();
  }

  // === METALNESS MAP ===
  // Ablative is non-metallic
  metalCtx.fillStyle = '#000000';
  metalCtx.fillRect(0, 0, W, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#303030';
  aoCtx.lineWidth = 10;
  for (let x = 0; x < W; x += 64) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, 0);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }
  for (let y = 0; y < H; y += 64) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.03);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateGoldTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(44444);

  // === COLOR MAP ===
  // Gold/mylar foil — uneven, creased, oxidized
  const goldGrad = colorCtx.createLinearGradient(0, 0, 0, H);
  if (goldGrad) {
    goldGrad.addColorStop(0, '#c49a38');
    goldGrad.addColorStop(0.15, '#daad4a');
    goldGrad.addColorStop(0.3, '#b8842a');
    goldGrad.addColorStop(0.5, '#d4a843');
    goldGrad.addColorStop(0.65, '#c49030');
    goldGrad.addColorStop(0.8, '#d8b050');
    goldGrad.addColorStop(1, '#c49a38');
    colorCtx.fillStyle = goldGrad;
    colorCtx.fillRect(0, 0, W, H);
  }

  // Foil crinkle patches (light and dark creases)
  for (let i = 0; i < 400; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const w = 5 + rng() * 60;
    const h = 3 + rng() * 30;
    const bright = rng() > 0.5;
    if (bright) {
      colorCtx.fillStyle = `rgba(255,225,150,${0.05 + rng() * 0.1})`;
    } else {
      colorCtx.fillStyle = `rgba(80,60,20,${0.04 + rng() * 0.08})`;
    }
    colorCtx.fillRect(x, y, w, h);
  }

  // Sharp crease lines
  colorCtx.strokeStyle = 'rgba(60,40,10,0.3)';
  colorCtx.lineWidth = 0.5;
  for (let i = 0; i < 150; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 5 + rng() * 40;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    colorCtx.stroke();
  }

  // Oxidation / dirt spots
  for (let i = 0; i < 80; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 3 + rng() * 20;
    const b = 60 + rng() * 60;
    const g = 50 + rng() * 40;
    colorCtx.fillStyle = `rgba(${b + 30}, ${g}, ${b / 2}, ${0.1 + rng() * 0.2})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Bright specular highlights (foil hotspots)
  for (let i = 0; i < 30; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 15;
    colorCtx.fillStyle = `rgba(255,240,200,${0.1 + rng() * 0.15})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Horizontal banding (from handling/rolling)
  colorCtx.strokeStyle = 'rgba(160,120,40,0.2)';
  colorCtx.lineWidth = 1 + rng() * 2;
  for (let y = 0; y < H; y += 20 + rng() * 30) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Deep crinkle ridges
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 1 + rng() * 2;
  for (let i = 0; i < 500; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 3 + rng() * 40;
    normalCtx.beginPath();
    normalCtx.moveTo(x, y);
    normalCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    normalCtx.stroke();
  }

  // Oxidation pits
  normalCtx.fillStyle = '#606060';
  for (let i = 0; i < 80; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 3 + rng() * 20;
    normalCtx.beginPath();
    normalCtx.arc(x, y, r, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#808080';
  roughCtx.fillRect(0, 0, W, H);

  // Crinkles are rougher
  roughCtx.fillStyle = '#b0b0b0';
  for (let i = 0; i < 300; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const w = 5 + rng() * 60;
    const h = 3 + rng() * 30;
    roughCtx.fillRect(x, y, w, h);
  }

  // Oxidation is rough
  roughCtx.fillStyle = '#d0d0d0';
  for (let i = 0; i < 80; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 3 + rng() * 20;
    roughCtx.beginPath();
    roughCtx.arc(x, y, r, 0, Math.PI * 2);
    roughCtx.fill();
  }

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#f0f0f0';
  metalCtx.fillRect(0, 0, W, H);

  // Oxidation spots lower metalness
  metalCtx.fillStyle = '#404040';
  for (let i = 0; i < 80; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 3 + rng() * 20;
    metalCtx.beginPath();
    metalCtx.arc(x, y, r, 0, Math.PI * 2);
    metalCtx.fill();
  }

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  // Deep creases shadow
  aoCtx.strokeStyle = '#707070';
  aoCtx.lineWidth = 3;
  for (let i = 0; i < 300; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 5 + rng() * 40;
    aoCtx.beginPath();
    aoCtx.moveTo(x, y);
    aoCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    aoCtx.stroke();
  }

  // Oxidation patch shadows
  aoCtx.fillStyle = '#808080';
  for (let i = 0; i < 80; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 5 + rng() * 22;
    aoCtx.beginPath();
    aoCtx.arc(x, y, r, 0, Math.PI * 2);
    aoCtx.fill();
  }

  addFilmGrain(colorCtx, W, H, 0.025);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateFabricTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(55555);

  // === COLOR MAP ===
  // White/off-white nylon/polyester fabric
  colorCtx.fillStyle = '#f5f5f0';
  colorCtx.fillRect(0, 0, W, H);

  // Warp/weft threads
  colorCtx.strokeStyle = 'rgba(200,200,190,0.15)';
  colorCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 4) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }
  colorCtx.strokeStyle = 'rgba(200,200,190,0.1)';
  for (let y = 0; y < H; y += 4) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // Panel seams (every 8th thread thicker)
  colorCtx.strokeStyle = 'rgba(160,160,150,0.3)';
  colorCtx.lineWidth = 2;
  for (let x = 0; x < W; x += 32) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // Stitching lines (dashed)
  colorCtx.strokeStyle = 'rgba(120,120,110,0.4)';
  colorCtx.lineWidth = 1;
  colorCtx.setLineDash([8, 16]);
  for (let x = 16; x < W; x += 64) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }
  for (let y = 16; y < H; y += 64) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }
  colorCtx.setLineDash([]);

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Weave pattern
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 8) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }
  for (let y = 0; y < H; y += 8) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // Panel seams
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 4;
  for (let x = 0; x < W; x += 32) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#c0c0c0'; // Fabric is rough
  roughCtx.fillRect(0, 0, W, H);

  // Seams slightly different
  roughCtx.fillStyle = '#e0e0e0';
  roughCtx.strokeStyle = '#e0e0e0';
  roughCtx.lineWidth = 6;
  for (let x = 0; x < W; x += 32) {
    roughCtx.beginPath();
    roughCtx.moveTo(x, 0);
    roughCtx.lineTo(x, H);
    roughCtx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    roughCtx.beginPath();
    roughCtx.moveTo(0, y);
    roughCtx.lineTo(W, y);
    roughCtx.stroke();
  }

  // === METALNESS MAP ===
  // Fabric is non-metallic
  metalCtx.fillStyle = '#000000';
  metalCtx.fillRect(0, 0, W, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#a0a0a0';
  aoCtx.lineWidth = 6;
  for (let x = 0; x < W; x += 32) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, 0);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.02);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}
