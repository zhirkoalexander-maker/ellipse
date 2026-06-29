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
export function makeNormalMap(src: HTMLCanvasElement, strength = 3.0): THREE.CanvasTexture {
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
    normal = makeNormalMap(heightCanvas, 3.0);
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
  grad.addColorStop(0, 'rgba(0,0,0,0.45)');
  grad.addColorStop(0.2, 'rgba(0,0,0,0.10)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.35)');
  grad.addColorStop(0.8, 'rgba(0,0,0,0.10)');
  grad.addColorStop(1, 'rgba(0,0,0,0.45)');
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

export function generateTankTexture(size: 'S' | 'M' | 'L' | 'XL' = 'M'): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [heightCanvas, heightCtx] = createCanvas(W, H);

  const colors: Record<string, { body: string; strip: string }> = {
    S: { body: '#e8e8ec', strip: '#888890' },
    M: { body: '#f0f0f4', strip: '#909098' },
    L: { body: '#d8d8e0', strip: '#787880' },
    XL: { body: '#c8c8d0', strip: '#686870' },
  };
  const c = colors[size]!;

  // clean body colour
  colorCtx.fillStyle = c.body;
  colorCtx.fillRect(0, 0, W, H);

  // top and bottom metallic caps
  colorCtx.fillStyle = '#707080';
  colorCtx.fillRect(0, 0, W, H * 0.02);
  colorCtx.fillRect(0, H * 0.98, W, H * 0.02);

  // horizontal seam lines
  colorCtx.strokeStyle = c.strip;
  colorCtx.lineWidth = 3;
  const seams = [0.02, 0.15, 0.17, 0.50, 0.52, 0.78, 0.80, 0.98];
  for (const s of seams) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, s * H);
    colorCtx.lineTo(W, s * H);
    colorCtx.stroke();
  }

  // gold band at bottom
  colorCtx.fillStyle = '#c88840';
  colorCtx.fillRect(0, H * 0.80, W, H * 0.02);

  // vertical seam
  colorCtx.strokeStyle = '#808088';
  colorCtx.lineWidth = 2;
  colorCtx.beginPath();
  colorCtx.moveTo(W * 0.5, 0);
  colorCtx.lineTo(W * 0.5, H);
  colorCtx.stroke();

  // height map
  heightCtx.fillStyle = '#808080';
  heightCtx.fillRect(0, 0, W, H);

  // seam lines
  heightCtx.strokeStyle = '#c0c0c0';
  heightCtx.lineWidth = 6;
  for (const s of seams) {
    heightCtx.beginPath();
    heightCtx.moveTo(0, s * H);
    heightCtx.lineTo(W, s * H);
    heightCtx.stroke();
  }

  // vertical seam
  heightCtx.strokeStyle = '#404040';
  heightCtx.lineWidth = 3;
  heightCtx.beginPath();
  heightCtx.moveTo(W * 0.5, 0);
  heightCtx.lineTo(W * 0.5, H);
  heightCtx.stroke();

  // rivets
  heightCtx.fillStyle = '#d0d0d0';
  for (let y = 20; y < H; y += 48) {
    for (let x = 16; x < W; x += 40) {
      heightCtx.beginPath();
      heightCtx.arc(x, y, 2, 0, Math.PI * 2);
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

  // dark heat shield
  colorCtx.fillStyle = '#3a3a40';
  colorCtx.fillRect(0, H * 0.82, W, H * 0.18);

  // seam
  colorCtx.fillStyle = '#808088';
  colorCtx.fillRect(0, H * 0.81, W, H * 0.01);

  // blue stripe
  colorCtx.fillStyle = '#2a3a8a';
  colorCtx.fillRect(0, H * 0.24, W, H * 0.03);

  // red stripe
  colorCtx.fillStyle = '#cc2244';
  colorCtx.fillRect(0, H * 0.28, W, H * 0.025);

  // window
  colorCtx.fillStyle = '#1a1a2e';
  colorCtx.beginPath();
  colorCtx.arc(W * 0.3, H * 0.10, 22, 0, Math.PI * 2);
  colorCtx.fill();
  colorCtx.strokeStyle = '#b0b0b8';
  colorCtx.lineWidth = 4;
  colorCtx.beginPath();
  colorCtx.arc(W * 0.3, H * 0.10, 26, 0, Math.PI * 2);
  colorCtx.stroke();

  // height map
  heightCtx.fillStyle = '#808080';
  heightCtx.fillRect(0, 0, W, H);

  // seam lines
  heightCtx.strokeStyle = '#c0c0c0';
  heightCtx.lineWidth = 5;
  for (const y of [0.03, 0.24, 0.305, 0.81, 0.82]) {
    heightCtx.beginPath();
    heightCtx.moveTo(0, y * H);
    heightCtx.lineTo(W, y * H);
    heightCtx.stroke();
  }

  // heat shield grid
  heightCtx.strokeStyle = '#909090';
  heightCtx.lineWidth = 3;
  for (let x = 0; x < W; x += 24) {
    heightCtx.beginPath(); heightCtx.moveTo(x, H * 0.82); heightCtx.lineTo(x, H); heightCtx.stroke();
  }
  for (let y = H * 0.84; y < H; y += 24) {
    heightCtx.beginPath(); heightCtx.moveTo(0, y); heightCtx.lineTo(W, y); heightCtx.stroke();
  }

  // window frame
  heightCtx.strokeStyle = '#e0e0e0';
  heightCtx.lineWidth = 8;
  heightCtx.beginPath(); heightCtx.arc(W * 0.3, H * 0.10, 26, 0, Math.PI * 2); heightCtx.stroke();
  heightCtx.strokeStyle = '#505050';
  heightCtx.lineWidth = 3;
  heightCtx.beginPath(); heightCtx.arc(W * 0.3, H * 0.10, 20, 0, Math.PI * 2); heightCtx.stroke();

  return createTextureSet(colorCanvas, heightCanvas);
}

export function generateEngineTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [heightCanvas, heightCtx] = createCanvas(W, H);

  // metallic body
  colorCtx.fillStyle = '#404048';
  colorCtx.fillRect(0, 0, W, H * 0.40);

  // mid ring
  colorCtx.fillStyle = '#505058';
  colorCtx.fillRect(0, H * 0.40, W, H * 0.06);

  // copper nozzle
  for (let py = H * 0.46; py < H; py++) {
    const t = (py - H * 0.46) / (H * 0.54);
    const r = Math.round(140 + 60 * t);
    const g = Math.round(90 + 40 * t);
    const b = Math.round(50 + 10 * t);
    colorCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // nozzle rim
  colorCtx.fillStyle = '#c8a870';
  colorCtx.fillRect(0, H * 0.96, W, H * 0.02);
  colorCtx.fillStyle = '#685030';
  colorCtx.fillRect(0, H * 0.98, W, H * 0.02);

  // bolts
  for (let x = 12; x < W; x += 32) {
    colorCtx.fillStyle = '#606060';
    colorCtx.beginPath(); colorCtx.arc(x, H * 0.40, 4, 0, Math.PI * 2); colorCtx.fill();
  }

  // height map
  heightCtx.fillStyle = '#808080';
  heightCtx.fillRect(0, 0, W, H);

  // cooling channels
  heightCtx.strokeStyle = '#404040';
  heightCtx.lineWidth = 4;
  for (let x = 6; x < W; x += 14) {
    heightCtx.beginPath();
    heightCtx.moveTo(x, H * 0.46);
    heightCtx.lineTo(x, H * 0.96);
    heightCtx.stroke();
  }

  // seam lines
  heightCtx.strokeStyle = '#c0c0c0';
  heightCtx.lineWidth = 5;
  for (const y of [H * 0.40, H * 0.46, H * 0.96]) {
    heightCtx.beginPath();
    heightCtx.moveTo(0, y);
    heightCtx.lineTo(W, y);
    heightCtx.stroke();
  }

  // bolts
  heightCtx.fillStyle = '#d0d0d0';
  for (let x = 12; x < W; x += 32) {
    heightCtx.beginPath();
    heightCtx.arc(x, H * 0.40, 4, 0, Math.PI * 2);
    heightCtx.fill();
  }

  return createTextureSet(colorCanvas, heightCanvas);
}

export function generateParachuteTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [heightCanvas, heightCtx] = createCanvas(W, H);

  // white/off-white alternating panels
  for (let py = 0; py < H; py++) {
    const band = Math.floor(py / 32) % 2 === 0;
    const v = band ? 240 : 225;
    colorCtx.fillStyle = `rgb(${v}, ${v + 2}, ${v + 5})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // stitching lines
  colorCtx.strokeStyle = '#c0c0c8';
  colorCtx.lineWidth = 2;
  for (let y = 0; y < H; y += 32) {
    colorCtx.setLineDash([4, 8]);
    colorCtx.beginPath(); colorCtx.moveTo(0, y); colorCtx.lineTo(W, y); colorCtx.stroke();
    colorCtx.setLineDash([]);
  }
  for (let x = 0; x < W; x += 32) {
    colorCtx.setLineDash([4, 8]);
    colorCtx.beginPath(); colorCtx.moveTo(x, 0); colorCtx.lineTo(x, H); colorCtx.stroke();
    colorCtx.setLineDash([]);
  }

  // center cross reinforcement
  colorCtx.strokeStyle = '#a0a0aa';
  colorCtx.lineWidth = 3;
  colorCtx.beginPath(); colorCtx.moveTo(W / 2 - 20, 0); colorCtx.lineTo(W / 2 - 20, H); colorCtx.stroke();
  colorCtx.beginPath(); colorCtx.moveTo(W / 2 + 20, 0); colorCtx.lineTo(W / 2 + 20, H); colorCtx.stroke();

  // height map
  heightCtx.fillStyle = '#808080';
  heightCtx.fillRect(0, 0, W, H);

  // fabric weave
  heightCtx.strokeStyle = '#909090';
  heightCtx.lineWidth = 1;
  for (let i = 0; i < W; i += 8) {
    heightCtx.beginPath(); heightCtx.moveTo(i, 0); heightCtx.lineTo(i, H); heightCtx.stroke();
    heightCtx.beginPath(); heightCtx.moveTo(0, i); heightCtx.lineTo(W, i); heightCtx.stroke();
  }

  // seam stitching for normal map
  heightCtx.strokeStyle = '#c0c0c0';
  heightCtx.lineWidth = 3;
  heightCtx.setLineDash([6, 8]);
  for (let y = 0; y < H; y += 32) {
    heightCtx.beginPath(); heightCtx.moveTo(0, y); heightCtx.lineTo(W, y); heightCtx.stroke();
  }
  for (let x = 0; x < W; x += 32) {
    heightCtx.beginPath(); heightCtx.moveTo(x, 0); heightCtx.lineTo(x, H); heightCtx.stroke();
  }
  heightCtx.setLineDash([]);

  // center cross for normal map
  heightCtx.fillStyle = '#b0b0b0';
  heightCtx.fillRect(W / 2 - 22, 0, 4, H);
  heightCtx.fillRect(W / 2 + 18, 0, 4, H);

  return createTextureSet(colorCanvas, heightCanvas);
}
