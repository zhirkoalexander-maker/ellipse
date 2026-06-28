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
}

/** Generate a normal map from a height map canvas using Sobel filter. */
export function makeNormalMap(src: HTMLCanvasElement, strength = 2.0): THREE.CanvasTexture {
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

function createTextureSet(
  colorCanvas: HTMLCanvasElement,
  heightCanvas?: HTMLCanvasElement,
): TextureSet {
  const color = new THREE.CanvasTexture(colorCanvas);
  color.wrapS = color.wrapT = THREE.RepeatWrapping;
  color.colorSpace = THREE.SRGBColorSpace;
  color.anisotropy = 4;
  let normal: THREE.CanvasTexture | undefined;
  if (heightCanvas) {
    normal = makeNormalMap(heightCanvas, 2.0);
  }
  return { color, normal };
}

/** Apply horizontal light gradient (bright centre, dark edges) for cylinder 3D illusion. */
function applyLightGradient(ctx: CanvasRenderingContext2D, W: number, H: number): void {
  const grad = ctx.createLinearGradient(0, 0, W, 0);
  if (!grad) {
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(0, 0, W, H);
    return;
  }
  grad.addColorStop(0, 'rgba(0,0,0,0.25)');
  grad.addColorStop(0.15, 'rgba(0,0,0,0.05)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.20)');
  grad.addColorStop(0.85, 'rgba(0,0,0,0.05)');
  grad.addColorStop(1, 'rgba(0,0,0,0.25)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
}

/** Apply random wear lines (scratches, scuffs) to a canvas. */
function applyWear(ctx: CanvasRenderingContext2D, W: number, H: number, density = 0.3): void {
  const count = Math.floor(W * H * density * 0.0001);
  for (let i = 0; i < count; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const angle = Math.random() * Math.PI * 2;
    ctx.globalAlpha = 0.05 + Math.random() * 0.12;
    ctx.strokeStyle = Math.random() > 0.5 ? '#fff' : '#000';
    ctx.lineWidth = 0.5 + Math.random() * 1.5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * (5 + Math.random() * 25), y + Math.sin(angle) * (5 + Math.random() * 25));
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
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
  const W = 512, H = 256;
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

const WEAR_FACTOR: Record<string, number> = { S: 0.15, M: 0.25, L: 0.4, XL: 0.55 };

export function generateTankTexture(size: 'S' | 'M' | 'L' | 'XL' = 'M'): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [heightCanvas, heightCtx] = createCanvas(W, H);

  const wear = WEAR_FACTOR[size] ?? 0.3;

  // colour bands
  const bands = [
    { y0: 0, y1: 0.15, color: '#d0d0d8' },
    { y0: 0.15, y1: 0.17, color: '#888890' },
    { y0: 0.17, y1: 0.50, color: '#e8e8f0' },
    { y0: 0.50, y1: 0.52, color: '#888890' },
    { y0: 0.52, y1: 0.78, color: '#d0d0d8' },
    { y0: 0.78, y1: 0.80, color: '#888890' },
    { y0: 0.80, y1: 0.88, color: '#c88840' },
    { y0: 0.88, y1: 0.90, color: '#886020' },
    { y0: 0.90, y1: 1.00, color: '#e8e8f0' },
  ];
  for (const b of bands) {
    colorCtx.fillStyle = b.color;
    colorCtx.fillRect(0, b.y0 * H, W, (b.y1 - b.y0) * H);
  }

  // wear
  applyWear(colorCtx, W, H, wear);

  // light gradient
  applyLightGradient(colorCtx, W, H);

  // height map
  heightCtx.fillStyle = '#808080';
  heightCtx.fillRect(0, 0, W, H);

  // seam lines (raised)
  heightCtx.strokeStyle = '#c0c0c0';
  heightCtx.lineWidth = 6;
  for (const b of bands) {
    heightCtx.beginPath();
    heightCtx.moveTo(0, b.y0 * H);
    heightCtx.lineTo(W, b.y0 * H);
    heightCtx.stroke();
  }

  // vertical seam (sunken)
  heightCtx.strokeStyle = '#404040';
  heightCtx.lineWidth = 3;
  heightCtx.beginPath();
  heightCtx.moveTo(W * 0.5, 0);
  heightCtx.lineTo(W * 0.5, H);
  heightCtx.stroke();

  // rivets (raised dots)
  heightCtx.fillStyle = '#d0d0d0';
  for (let y = 32; y < H; y += 64) {
    for (let x = 24; x < W; x += 48) {
      heightCtx.beginPath();
      heightCtx.arc(x, y, 4, 0, Math.PI * 2);
      heightCtx.fill();
    }
  }

  return createTextureSet(colorCanvas, heightCanvas);
}

export function generateCapsuleTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [heightCanvas, heightCtx] = createCanvas(W, H);

  // white body
  colorCtx.fillStyle = '#f0f0f4';
  colorCtx.fillRect(0, 0, W, H * 0.82);

  // heat shield gradient (dark to brown)
  for (let py = H * 0.82; py < H; py++) {
    const t = (py - H * 0.82) / (H * 0.18);
    const r = Math.round(100 + t * 40);
    const g = Math.round(90 - t * 30);
    const b = Math.round(80 - t * 30);
    colorCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // soot at the heat shield seam
  for (let py = H * 0.81; py < H * 0.85; py++) {
    const t = (py - H * 0.81) / (H * 0.04);
    const alpha = t < 0.5 ? t * 0.4 : (1 - t) * 0.4;
    colorCtx.fillStyle = `rgba(0,0,0,${alpha})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // stripes
  colorCtx.fillStyle = '#2a3a8a';
  colorCtx.fillRect(0, H * 0.25, W, H * 0.025);
  colorCtx.fillStyle = '#cc2244';
  colorCtx.fillRect(0, H * 0.28, W, H * 0.025);

  // wear
  applyWear(colorCtx, W, H, 0.2);

  // light gradient
  applyLightGradient(colorCtx, W, H);

  // height map
  heightCtx.fillStyle = '#808080';
  heightCtx.fillRect(0, 0, W, H);

  // panel line between body and heat shield
  heightCtx.strokeStyle = '#c0c0c0';
  heightCtx.lineWidth = 6;
  heightCtx.beginPath();
  heightCtx.moveTo(0, H * 0.82);
  heightCtx.lineTo(W, H * 0.82);
  heightCtx.stroke();

  // heat shield grid (cross-hatch)
  heightCtx.strokeStyle = '#a0a0a0';
  heightCtx.lineWidth = 3;
  for (let x = 0; x < W; x += 24) {
    heightCtx.beginPath();
    heightCtx.moveTo(x, H * 0.82);
    heightCtx.lineTo(x, H);
    heightCtx.stroke();
  }
  for (let y = H * 0.84; y < H; y += 24) {
    heightCtx.beginPath();
    heightCtx.moveTo(0, y);
    heightCtx.lineTo(W, y);
    heightCtx.stroke();
  }

  // rivets at seam
  heightCtx.fillStyle = '#c0c0c0';
  for (let x = 16; x < W; x += 32) {
    heightCtx.beginPath();
    heightCtx.arc(x, H * 0.82 + 6, 4, 0, Math.PI * 2);
    heightCtx.fill();
  }

  // window frame (raised ring)
  heightCtx.strokeStyle = '#cccccc';
  heightCtx.lineWidth = 8;
  heightCtx.beginPath();
  heightCtx.arc(W * 0.3, H * 0.12, 30, 0, Math.PI * 2);
  heightCtx.stroke();
  heightCtx.strokeStyle = '#606060';
  heightCtx.lineWidth = 3;
  heightCtx.beginPath();
  heightCtx.arc(W * 0.3, H * 0.12, 24, 0, Math.PI * 2);
  heightCtx.stroke();

  return createTextureSet(colorCanvas, heightCanvas);
}

export function generateEngineTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [heightCanvas, heightCtx] = createCanvas(W, H);

  // dark metallic top
  colorCtx.fillStyle = '#383838';
  colorCtx.fillRect(0, 0, W, H * 0.35);

  // mid section
  colorCtx.fillStyle = '#484848';
  colorCtx.fillRect(0, H * 0.35, W, H * 0.10);

  // copper/gold nozzle bell with heat gradient
  for (let py = H * 0.45; py < H; py++) {
    const t = (py - H * 0.45) / (H * 0.55);
    const r = Math.round(140 + 60 * t);
    const g = Math.round(90 + 40 * Math.max(0, 1 - t * 1.5));
    const b = Math.round(50 + 10 * t);
    colorCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // soot around nozzle rim
  for (let py = H * 0.94; py < H; py++) {
    const t = (py - H * 0.94) / (H * 0.06);
    colorCtx.fillStyle = `rgba(0,0,0,${t * 0.5})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // light gradient
  applyLightGradient(colorCtx, W, H);

  // height map
  heightCtx.fillStyle = '#808080';
  heightCtx.fillRect(0, 0, W, H);

  // cooling channels on nozzle bell (vertical lines)
  heightCtx.strokeStyle = '#404040';
  heightCtx.lineWidth = 3;
  for (let x = 4; x < W; x += 10) {
    heightCtx.beginPath();
    heightCtx.moveTo(x, H * 0.45);
    heightCtx.lineTo(x, H * 0.96);
    heightCtx.stroke();
  }

  // horizontal detail lines (raised)
  heightCtx.strokeStyle = '#c0c0c0';
  heightCtx.lineWidth = 5;
  const detailY = [H * 0.35, H * 0.45, H * 0.96];
  for (const y of detailY) {
    heightCtx.beginPath();
    heightCtx.moveTo(0, y);
    heightCtx.lineTo(W, y);
    heightCtx.stroke();
  }

  // nozzle rim (raised ring)
  heightCtx.fillStyle = '#d0d0d0';
  heightCtx.fillRect(0, H * 0.96, W, H * 0.02);

  // bolts
  heightCtx.fillStyle = '#c0c0c0';
  for (let x = 14; x < W; x += 32) {
    heightCtx.beginPath();
    heightCtx.arc(x, H * 0.40, 5, 0, Math.PI * 2);
    heightCtx.fill();
  }

  return createTextureSet(colorCanvas, heightCanvas);
}

export function generateParachuteTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [heightCanvas, heightCtx] = createCanvas(W, H);

  // alternating white/off-white panels
  for (let py = 0; py < H; py++) {
    const band = Math.floor(py / 32) % 2 === 0;
    const v = band ? 240 : 225;
    colorCtx.fillStyle = `rgb(${v}, ${v + 2}, ${v + 5})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // red stripe
  colorCtx.fillStyle = '#cc3344';
  colorCtx.fillRect(0, H * 0.3, W, H * 0.03);
  colorCtx.fillRect(0, H * 0.7, W, H * 0.03);

  // shadow on one side
  const shadowGrad = colorCtx.createLinearGradient(0, 0, W, 0);
  if (shadowGrad) {
    shadowGrad.addColorStop(0, 'rgba(0,0,0,0)');
    shadowGrad.addColorStop(0.3, 'rgba(0,0,0,0)');
    shadowGrad.addColorStop(0.8, 'rgba(0,0,0,0.15)');
    shadowGrad.addColorStop(1, 'rgba(0,0,0,0.25)');
    colorCtx.fillStyle = shadowGrad;
  } else {
    colorCtx.fillStyle = 'rgba(0,0,0,0.1)';
  }
  colorCtx.fillRect(0, 0, W, H);

  // height map
  heightCtx.fillStyle = '#808080';
  heightCtx.fillRect(0, 0, W, H);

  // weave pattern (fine grid)
  heightCtx.strokeStyle = '#909090';
  heightCtx.lineWidth = 1;
  for (let y = 0; y < H; y += 8) {
    heightCtx.beginPath();
    heightCtx.moveTo(0, y);
    heightCtx.lineTo(W, y);
    heightCtx.stroke();
  }
  for (let x = 0; x < W; x += 8) {
    heightCtx.beginPath();
    heightCtx.moveTo(x, 0);
    heightCtx.lineTo(x, H);
    heightCtx.stroke();
  }

  // main stitching (dashed raised lines)
  heightCtx.strokeStyle = '#c0c0c0';
  heightCtx.lineWidth = 3;
  heightCtx.setLineDash([6, 10]);
  for (let y = 0; y < H; y += 32) {
    heightCtx.beginPath();
    heightCtx.moveTo(0, y);
    heightCtx.lineTo(W, y);
    heightCtx.stroke();
  }
  for (let x = 0; x < W; x += 32) {
    heightCtx.beginPath();
    heightCtx.moveTo(x, 0);
    heightCtx.lineTo(x, H);
    heightCtx.stroke();
  }
  heightCtx.setLineDash([]);

  // centre cross reinforcements
  heightCtx.strokeStyle = '#b0b0b0';
  heightCtx.lineWidth = 5;
  heightCtx.beginPath();
  heightCtx.moveTo(W / 2 - 24, 0);
  heightCtx.lineTo(W / 2 - 24, H);
  heightCtx.stroke();
  heightCtx.beginPath();
  heightCtx.moveTo(W / 2 + 24, 0);
  heightCtx.lineTo(W / 2 + 24, H);
  heightCtx.stroke();

  return createTextureSet(colorCanvas, heightCanvas);
}
