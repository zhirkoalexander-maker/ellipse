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
  // Light grey-white base (like real rocket tanks)
  colorCtx.fillStyle = '#e8e8e4';
  colorCtx.fillRect(0, 0, W, H);

  // Subtle vertical gradient for lighting effect
  const grad = colorCtx.createLinearGradient(0, 0, 0, H);
  if (grad) {
    grad.addColorStop(0, 'rgba(0,0,0,0.03)');
    grad.addColorStop(0.3, 'rgba(0,0,0,0)');
    grad.addColorStop(0.7, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.04)');
    colorCtx.fillStyle = grad;
    colorCtx.fillRect(0, 0, W, H);
  }

  // Horizontal weld seams
  const panelCount = isSmall ? 4 : isLarge ? 12 : 8;
  const panelH = H / panelCount;
  for (let y = panelH; y < H; y += panelH) {
    // Seam shadow
    colorCtx.strokeStyle = 'rgba(0,0,0,0.08)';
    colorCtx.lineWidth = 2;
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();

    // Weld bead highlight
    colorCtx.strokeStyle = 'rgba(255,255,255,0.15)';
    colorCtx.lineWidth = 1.5;
    colorCtx.beginPath();
    colorCtx.moveTo(0, y - 1.5);
    colorCtx.lineTo(W, y - 1.5);
    colorCtx.stroke();
  }

  // Vertical stringers
  const stringerCount = isSmall ? 8 : isLarge ? 24 : 14;
  colorCtx.strokeStyle = 'rgba(80,80,90,0.04)';
  colorCtx.lineWidth = 1.5;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }

  // Rivets along weld seams
  colorCtx.fillStyle = '#c0c0ba';
  for (let y = panelH; y < H; y += panelH) {
    for (let x = 30; x < W - 30; x += 60) {
      colorCtx.beginPath();
      colorCtx.arc(x, y, 4, 0, Math.PI * 2);
      colorCtx.fill();
      colorCtx.strokeStyle = '#a0a09a';
      colorCtx.lineWidth = 0.5;
      colorCtx.stroke();
    }
  }

  // US flag pattern on larger tanks
  if (isLarge) {
    const flagX = W * 0.08, flagY = H * 0.15;
    const flagW = W * 0.12, flagH = H * 0.08;
    // Blue field
    colorCtx.fillStyle = '#002868';
    colorCtx.fillRect(flagX, flagY, flagW * 0.4, flagH);
    // Red stripes
    for (let i = 0; i < 7; i++) {
      colorCtx.fillStyle = i % 2 === 0 ? '#BF0A30' : '#ffffff';
      colorCtx.fillRect(flagX + flagW * 0.4, flagY + (i / 7) * flagH, flagW * 0.6, flagH / 7);
    }
    // White stars (simplified as dots)
    colorCtx.fillStyle = '#ffffff';
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 3; col++) {
        colorCtx.beginPath();
        colorCtx.arc(flagX + (col + 0.5) * (flagW * 0.4 / 3), flagY + (row + 0.5) * (flagH / 5), 2, 0, Math.PI * 2);
        colorCtx.fill();
      }
    }
  }

  // "USA" text on tanks
  colorCtx.fillStyle = 'rgba(30,40,80,0.12)';
  colorCtx.font = `bold ${H * 0.06}px monospace`;
  colorCtx.textAlign = 'center';
  colorCtx.fillText('USA', W / 2, H * 0.25);

  // Insulation foam patches (SpaceX Falcon 9 style)
  const foamCount = isSmall ? 3 : isLarge ? 12 : 6;
  for (let i = 0; i < foamCount; i++) {
    const x = rng() * W * 0.8 + W * 0.1;
    const y = rng() * H * 0.7 + H * 0.15;
    const w = 60 + rng() * 200;
    const h = 50 + rng() * 140;

    // Orange-brown foam base with variation
    const fr = 180 + rng() * 40;
    const fg = 140 + rng() * 30;
    const fb = 80 + rng() * 30;
    colorCtx.fillStyle = `rgb(${fr}, ${fg}, ${fb})`;
    colorCtx.globalAlpha = 0.6 + rng() * 0.3;
    colorCtx.fillRect(x, y, w, h);

    // Foam texture dots/strokes
    colorCtx.fillStyle = `rgb(${fr - 20}, ${fg - 15}, ${fb - 10})`;
    for (let d = 0; d < 15; d++) {
      colorCtx.beginPath();
      colorCtx.arc(x + rng() * w, y + rng() * h, 2 + rng() * 6, 0, Math.PI * 2);
      colorCtx.fill();
    }

    // Frost/ice patches on foam (white semi-transparent)
    colorCtx.fillStyle = 'rgba(200, 220, 240, 0.15)';
    for (let d = 0; d < 5; d++) {
      colorCtx.beginPath();
      colorCtx.arc(x + rng() * w, y + rng() * h, 5 + rng() * 15, 0, Math.PI * 2);
      colorCtx.fill();
    }
    colorCtx.globalAlpha = 1;
  }

  // Top/bottom domes (slightly darker)
  colorCtx.fillStyle = '#606068';
  colorCtx.fillRect(0, 0, W, H * 0.012);
  colorCtx.fillRect(0, H * 0.988, W, H * 0.012);

  // Vertical seam (welded joint along the side)
  colorCtx.strokeStyle = 'rgba(80,80,90,0.3)';
  colorCtx.lineWidth = 3;
  colorCtx.beginPath();
  colorCtx.moveTo(W * 0.5, 0);
  colorCtx.lineTo(W * 0.5, H);
  colorCtx.stroke();

  // Subtle dirt/grime streaks
  colorCtx.strokeStyle = 'rgba(60,50,40,0.03)';
  colorCtx.lineWidth = 1;
  for (let i = 0; i < 30; i++) {
    const sx = rng() * W;
    const sy = rng() * H;
    colorCtx.beginPath();
    colorCtx.moveTo(sx, sy);
    colorCtx.lineTo(sx + (rng() - 0.5) * 20, sy + rng() * H * 0.3);
    colorCtx.stroke();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Panel seam ridges
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 8;
  for (let y = panelH; y < H; y += panelH) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // Stringers
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 3;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }

  // Rivets
  normalCtx.fillStyle = '#c8c8c8';
  for (let y = panelH; y < H; y += panelH) {
    for (let x = 30; x < W - 30; x += 60) {
      normalCtx.beginPath();
      normalCtx.arc(x, y, 5, 0, Math.PI * 2);
      normalCtx.fill();
    }
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#909090';
  roughCtx.fillRect(0, 0, W, H);

  // Seams rougher
  roughCtx.strokeStyle = '#c0c0c0';
  roughCtx.lineWidth = 10;
  for (let y = panelH; y < H; y += panelH) {
    roughCtx.beginPath();
    roughCtx.moveTo(0, y);
    roughCtx.lineTo(W, y);
    roughCtx.stroke();
  }

  // Foam areas very rough
  for (let i = 0; i < foamCount; i++) {
    const x = rng() * W * 0.8 + W * 0.1;
    const y = rng() * H * 0.7 + H * 0.15;
    const w = 60 + rng() * 200;
    const h = 50 + rng() * 140;
    roughCtx.fillStyle = '#e0e0e0';
    roughCtx.fillRect(x, y, w, h);
  }

  // Domes smoother
  roughCtx.fillStyle = '#505050';
  roughCtx.fillRect(0, 0, W, H * 0.012);
  roughCtx.fillRect(0, H * 0.988, W, H * 0.012);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#050505';
  metalCtx.fillRect(0, 0, W, H);

  // Domes slightly metallic (bare metal)
  metalCtx.fillStyle = '#c0c0c0';
  metalCtx.fillRect(0, 0, W, H * 0.012);
  metalCtx.fillRect(0, H * 0.988, W, H * 0.012);

  // Vertical seam metallic
  metalCtx.fillStyle = '#606060';
  metalCtx.fillRect(W * 0.49, 0, W * 0.02, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 12;
  for (let y = panelH; y < H; y += panelH) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#b0b0b0';
  aoCtx.lineWidth = 6;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    aoCtx.beginPath();
    aoCtx.moveTo(x, 0);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.010);

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

  // Heat shield (dark ablative) with better detail
  colorCtx.fillStyle = '#2a2a2e';
  colorCtx.fillRect(0, H * 0.78, W, H * 0.22);

  // Tiled pattern (Shuttle-style tiles)
  colorCtx.strokeStyle = 'rgba(40,40,45,0.5)';
  colorCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 32) {
    colorCtx.beginPath(); colorCtx.moveTo(x, H * 0.78); colorCtx.lineTo(x, H); colorCtx.stroke();
  }
  for (let y = H * 0.78; y < H; y += 32) {
    colorCtx.beginPath(); colorCtx.moveTo(0, y); colorCtx.lineTo(W, y); colorCtx.stroke();
  }

  // Ablative texture dots with color variation
  for (let i = 0; i < 2000; i++) {
    const x = rng() * W;
    const y = H * 0.78 + rng() * H * 0.22;
    const r = 1 + rng() * 3;
    const b = 25 + rng() * 50;
    const warmth = rng() * 15;
    colorCtx.fillStyle = `rgb(${b + warmth},${b},${b - warmth})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Reentry char streaks with more variation
  for (let i = 0; i < 60; i++) {
    const sx = rng() * W;
    const sy = H * 0.78 + rng() * H * 0.15;
    const len = 30 + rng() * 150;
    const drift = (rng() - 0.5) * 50;
    colorCtx.strokeStyle = `rgba(20,15,10,${0.2 + rng() * 0.3})`;
    colorCtx.lineWidth = 1 + rng() * 3;
    colorCtx.beginPath();
    colorCtx.moveTo(sx, sy);
    colorCtx.lineTo(sx + drift, sy + len);
    colorCtx.stroke();

    // Glowing streak edge
    colorCtx.strokeStyle = `rgba(60,40,20,${0.05 + rng() * 0.1})`;
    colorCtx.lineWidth = 3 + rng() * 5;
    colorCtx.beginPath();
    colorCtx.moveTo(sx - drift * 0.1, sy + len * 0.2);
    colorCtx.lineTo(sx + drift, sy + len);
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
  // Upper engine body - dark inconel/steel
  colorCtx.fillStyle = '#3a3a40';
  colorCtx.fillRect(0, 0, W, H * 0.30);

  // Subtle brushed metal texture on body
  for (let i = 0; i < 150; i++) {
    const x = rng() * W;
    const y = rng() * H * 0.30;
    const len = 5 + rng() * 25;
    colorCtx.strokeStyle = `rgba(255,255,255,${0.02 + rng() * 0.03})`;
    colorCtx.lineWidth = 0.5;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x, y + len);
    colorCtx.stroke();
  }

  // Mid flange (bolted connection)
  colorCtx.fillStyle = '#4a4a50';
  colorCtx.fillRect(0, H * 0.30, W, H * 0.05);

  // Bolt pattern on flange
  colorCtx.fillStyle = '#2a2a2e';
  for (let x = 20; x < W; x += 30) {
    colorCtx.beginPath();
    colorCtx.arc(x, H * 0.325, 4, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#5a5a60';
    colorCtx.lineWidth = 0.5;
    colorCtx.stroke();
  }

  // Nozzle - copper alloy with regenerative cooling channels
  for (let py = H * 0.35; py < H * 0.92; py++) {
    const t = (py - H * 0.35) / (H * 0.57);
    const r = Math.round(180 + 60 * (1 - t));
    const g = Math.round(100 + 30 * (1 - t));
    const b = Math.round(40 + 15 * (1 - t));
    colorCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // Cooling channel ridges (vertical lines)
  colorCtx.strokeStyle = 'rgba(100,60,25,0.3)';
  colorCtx.lineWidth = 1;
  for (let x = 6; x < W; x += 12) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, H * 0.35);
    colorCtx.lineTo(x, H * 0.92);
    colorCtx.stroke();
  }

  // Soot/carbon buildup
  const sootGrad = colorCtx.createLinearGradient(0, H * 0.80, 0, H);
  if (sootGrad) {
    sootGrad.addColorStop(0, 'rgba(0,0,0,0)');
    sootGrad.addColorStop(0.4, 'rgba(0,0,0,0.2)');
    sootGrad.addColorStop(0.8, 'rgba(0,0,0,0.5)');
    sootGrad.addColorStop(1, 'rgba(0,0,0,0.7)');
    colorCtx.fillStyle = sootGrad;
    colorCtx.fillRect(0, H * 0.80, W, H * 0.20);
  }

  // Nozzle exit rim - lighter metal
  colorCtx.fillStyle = '#6a6a70';
  colorCtx.fillRect(0, H * 0.92, W, H * 0.03);
  colorCtx.fillStyle = '#8a8a90';
  colorCtx.fillRect(0, H * 0.95, W, H * 0.02);

  // Fuel/oxidizer inlet pipes on upper body
  colorCtx.fillStyle = '#2a2a30';
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const px = W * 0.5 + Math.cos(a) * W * 0.38;
    const py = H * 0.15 + Math.sin(a) * H * 0.04;
    colorCtx.beginPath();
    colorCtx.arc(px, py, W * 0.04, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#5a5a60';
    colorCtx.lineWidth = 1;
    colorCtx.stroke();
  }

  // Gimbal mounting ring
  colorCtx.strokeStyle = '#6a6a70';
  colorCtx.lineWidth = 3;
  colorCtx.beginPath();
  colorCtx.arc(W / 2, H * 0.12, W * 0.3, 0, Math.PI * 2);
  colorCtx.stroke();

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Brushed texture on body
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 3) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H * 0.30);
    normalCtx.stroke();
  }

  // Flange bolts
  normalCtx.fillStyle = '#c0c0c0';
  for (let x = 20; x < W; x += 30) {
    normalCtx.beginPath();
    normalCtx.arc(x, H * 0.325, 4, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // Cooling channels (more prominent)
  normalCtx.strokeStyle = '#606060';
  normalCtx.lineWidth = 2;
  for (let x = 6; x < W; x += 12) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, H * 0.35);
    normalCtx.lineTo(x, H * 0.92);
    normalCtx.stroke();
  }

  // Seams
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 5;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.30);
  normalCtx.lineTo(W, H * 0.30);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.92);
  normalCtx.lineTo(W, H * 0.92);
  normalCtx.stroke();

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#404040'; // Smooth polished body
  roughCtx.fillRect(0, 0, W, H * 0.30);

  roughCtx.fillStyle = '#606060'; // Flange
  roughCtx.fillRect(0, H * 0.30, W, H * 0.05);

  roughCtx.fillStyle = '#707070'; // Copper nozzle
  roughCtx.fillRect(0, H * 0.35, W, H * 0.57);

  roughCtx.fillStyle = '#c0c0c0'; // Soot area very rough
  roughCtx.fillRect(0, H * 0.80, W, H * 0.20);

  roughCtx.fillStyle = '#303030'; // Exit rim smoother
  roughCtx.fillRect(0, H * 0.92, W, H * 0.08);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#e0e0e0'; // All metallic
  metalCtx.fillRect(0, 0, W, H);

  // Less metallic where soot covers
  metalCtx.fillStyle = '#606060';
  metalCtx.fillRect(0, H * 0.80, W, H * 0.20);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  // Flange shadow
  aoCtx.strokeStyle = '#606060';
  aoCtx.lineWidth = 10;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.30);
  aoCtx.lineTo(W, H * 0.30);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.35);
  aoCtx.lineTo(W, H * 0.35);
  aoCtx.stroke();

  // Cooling channels shadows
  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 3;
  for (let x = 6; x < W; x += 12) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, H * 0.35);
    aoCtx.lineTo(x, H * 0.92);
    aoCtx.stroke();
  }

  // Exit rim shadow
  aoCtx.strokeStyle = '#707070';
  aoCtx.lineWidth = 8;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.92);
  aoCtx.lineTo(W, H * 0.92);
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
  // Multi-layer gold/mylar foil: richer, more reflective
  // Base: warm golden gradient with subtle vertical variation
  const goldGrad = colorCtx.createLinearGradient(0, 0, 0, H);
  if (goldGrad) {
    goldGrad.addColorStop(0, '#b8862e');
    goldGrad.addColorStop(0.08, '#dba44a');
    goldGrad.addColorStop(0.15, '#e8b858');
    goldGrad.addColorStop(0.22, '#cf9a3e');
    goldGrad.addColorStop(0.3, '#b0802e');
    goldGrad.addColorStop(0.38, '#d8a84a');
    goldGrad.addColorStop(0.45, '#eac05e');
    goldGrad.addColorStop(0.52, '#c89838');
    goldGrad.addColorStop(0.6, '#b0802e');
    goldGrad.addColorStop(0.68, '#d8a84a');
    goldGrad.addColorStop(0.75, '#e8b858');
    goldGrad.addColorStop(0.85, '#c89838');
    goldGrad.addColorStop(1, '#b8862e');
    colorCtx.fillStyle = goldGrad;
    colorCtx.fillRect(0, 0, W, H);
  }

  // Large foil panel divisions (simulating blanket patches)
  for (let i = 0; i < 12; i++) {
    const x = 50 + rng() * (W - 100);
    const y = 50 + rng() * (H - 100);
    const pw = 80 + rng() * 300;
    const ph = 80 + rng() * 300;
    // Seam border
    colorCtx.strokeStyle = `rgba(80,55,15,${0.15 + rng() * 0.15})`;
    colorCtx.lineWidth = 1 + rng() * 2;
    colorCtx.strokeRect(x, y, pw, ph);
    // Slight color shift inside each patch
    const shift = (rng() - 0.5) * 0.06;
    colorCtx.fillStyle = `rgba(200,160,60,${shift > 0 ? shift : 0})`;
    colorCtx.fillRect(x + 2, y + 2, pw - 4, ph - 4);
  }

  // Complex crinkles: multiple generations
  // Generation 1: large rolling creases
  colorCtx.strokeStyle = 'rgba(70,50,15,0.12)';
  colorCtx.lineWidth = 3 + rng() * 4;
  for (let i = 0; i < 60; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 40 + rng() * 150;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    const cx1 = x + Math.cos(angle + 0.3) * len * 0.5;
    const cy1 = y + Math.sin(angle + 0.3) * len * 0.5;
    colorCtx.quadraticCurveTo(cx1, cy1, x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    colorCtx.stroke();
  }

  // Generation 2: medium folding creases
  colorCtx.strokeStyle = 'rgba(60,40,10,0.18)';
  colorCtx.lineWidth = 1.5;
  for (let i = 0; i < 120; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 15 + rng() * 60;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    colorCtx.stroke();
  }

  // Generation 3: tiny sharp creases (bright edges for specular)
  colorCtx.strokeStyle = 'rgba(255,230,160,0.15)';
  colorCtx.lineWidth = 0.5;
  for (let i = 0; i < 250; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 3 + rng() * 25;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    colorCtx.stroke();
  }

  // Dark crease shadows
  colorCtx.strokeStyle = 'rgba(30,20,5,0.1)';
  colorCtx.lineWidth = 0.5;
  for (let i = 0; i < 200; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 4 + rng() * 30;
    colorCtx.beginPath();
    colorCtx.moveTo(x + 1, y + 1);
    colorCtx.lineTo(x + Math.cos(angle) * len + 1, y + Math.sin(angle) * len + 1);
    colorCtx.stroke();
  }

  // Oxidation / dirt spots (more varied colors)
  for (let i = 0; i < 120; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 18;
    const t = rng();
    if (t < 0.33) {
      // Brown oxidation
      colorCtx.fillStyle = `rgba(80,50,20,${0.08 + rng() * 0.15})`;
    } else if (t < 0.66) {
      // Dark spot
      colorCtx.fillStyle = `rgba(30,25,15,${0.06 + rng() * 0.12})`;
    } else {
      // Green-ish tarnish (rare)
      colorCtx.fillStyle = `rgba(60,80,40,${0.04 + rng() * 0.08})`;
    }
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Bright specular hotspots (foil flash)
  for (let i = 0; i < 50; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 1 + rng() * 8;
    const bright = 240 + Math.floor(rng() * 15);
    colorCtx.fillStyle = `rgba(${bright}, ${bright - 20}, ${bright - 80}, ${0.15 + rng() * 0.2})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
    // Glow spread
    colorCtx.fillStyle = `rgba(255,240,180,${0.03 + rng() * 0.05})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r * 3, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Horizontal banding from rolling
  colorCtx.strokeStyle = 'rgba(160,120,40,0.12)';
  colorCtx.lineWidth = 1;
  for (let y = 0; y < H; y += 15 + rng() * 25) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    for (let x = 0; x < W; x += 10) {
      colorCtx.lineTo(x + rng() * 5, y + (rng() - 0.5) * 3);
    }
    colorCtx.stroke();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Large rolling creases (bright/dark edges)
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 2;
  for (let i = 0; i < 120; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 20 + rng() * 100;
    normalCtx.beginPath();
    normalCtx.moveTo(x, y);
    const cx1 = x + Math.cos(angle + 0.2) * len * 0.4;
    const cy1 = y + Math.sin(angle + 0.2) * len * 0.4;
    normalCtx.quadraticCurveTo(cx1, cy1, x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    normalCtx.stroke();
  }

  // Sharp medium creases
  normalCtx.strokeStyle = '#c0c0c0';
  normalCtx.lineWidth = 1;
  for (let i = 0; i < 300; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 5 + rng() * 40;
    normalCtx.beginPath();
    normalCtx.moveTo(x, y);
    normalCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    normalCtx.stroke();
  }

  // Oxidation pits
  normalCtx.fillStyle = '#606060';
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 16;
    normalCtx.beginPath();
    normalCtx.arc(x, y, r, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#606060';
  roughCtx.fillRect(0, 0, W, H);

  // Foil is generally smooth (dark = smooth), creases are slightly rough
  roughCtx.fillStyle = '#909090';
  for (let i = 0; i < 400; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const w = 5 + rng() * 50;
    const h = 3 + rng() * 20;
    roughCtx.fillRect(x, y, w, h);
  }

  // Oxidation spots are rough
  roughCtx.fillStyle = '#c0c0c0';
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 16;
    roughCtx.beginPath();
    roughCtx.arc(x, y, r, 0, Math.PI * 2);
    roughCtx.fill();
  }

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#f0f0f0';
  metalCtx.fillRect(0, 0, W, H);

  // Oxidation spots lower metalness
  metalCtx.fillStyle = '#303030';
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 16;
    metalCtx.beginPath();
    metalCtx.arc(x, y, r, 0, Math.PI * 2);
    metalCtx.fill();
  }

  // Seam edges are less metallic
  metalCtx.strokeStyle = '#808080';
  metalCtx.lineWidth = 2;
  for (let i = 0; i < 12; i++) {
    const x = 50 + rng() * (W - 100);
    const y = 50 + rng() * (H - 100);
    const pw = 80 + rng() * 300;
    const ph = 80 + rng() * 300;
    metalCtx.strokeRect(x, y, pw, ph);
  }

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  // Deep creases shadow
  aoCtx.strokeStyle = '#606060';
  aoCtx.lineWidth = 3;
  for (let i = 0; i < 400; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 5 + rng() * 50;
    aoCtx.beginPath();
    aoCtx.moveTo(x, y);
    aoCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    aoCtx.stroke();
  }

  // Crinkle valley shadows
  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 2;
  for (let i = 0; i < 200; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 10 + rng() * 80;
    aoCtx.beginPath();
    aoCtx.moveTo(x, y);
    const cx1 = x + Math.cos(angle + 0.3) * len * 0.5;
    const cy1 = y + Math.sin(angle + 0.3) * len * 0.5;
    aoCtx.quadraticCurveTo(cx1, cy1, x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    aoCtx.stroke();
  }

  // Oxidation patch shadows
  aoCtx.fillStyle = '#888888';
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 3 + rng() * 18;
    aoCtx.beginPath();
    aoCtx.arc(x, y, r, 0, Math.PI * 2);
    aoCtx.fill();
  }

  addFilmGrain(colorCtx, W, H, 0.02);

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

// ---------------------------------------------------------------------------
// Procedural planet textures for gas giants (fallback when .jpg is missing)
// ---------------------------------------------------------------------------

interface PlanetBand {
  y: number;   // 0-1 vertical position
  width: number;
  color: string;
  turbulence: number;
}

function bandedGasGiantTexture(
  W: number, H: number, bands: PlanetBand[],
  turbFreq: number, turbAmp: number, seed: number,
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const rng = seededRandomFast(seed);
  const imgData = ctx.createImageData(W, H);

  for (let py = 0; py < H; py++) {
    const v = py / H;
    let baseR = 0, baseG = 0, baseB = 0, weightTotal = 0;
    for (const b of bands) {
      const dist = Math.abs(v - b.y) / b.width;
      if (dist < 1) {
        const w = 1 - dist * dist;
        const c = parseHexColor(b.color);
        baseR += c[0] * w; baseG += c[1] * w; baseB += c[2] * w;
        weightTotal += w;
      }
    }
    if (weightTotal > 0) {
      baseR /= weightTotal; baseG /= weightTotal; baseB /= weightTotal;
    }

    for (let px = 0; px < W; px++) {
      const u = px / W;
      const turb = Math.sin(u * turbFreq + v * turbFreq * 0.5 + seed) * turbAmp
                + Math.sin(u * turbFreq * 2.3 + v * turbFreq * 0.7 + seed * 2) * turbAmp * 0.5;

      let r = baseR, g = baseG, b = baseB;

      const tv = turb * 30;
      r += tv; g += tv * 0.7; b += tv * 0.3;

      const n = (rng() - 0.5) * 8;

      const idx = (py * W + px) * 4;
      imgData.data[idx]     = clampByte(r + n);
      imgData.data[idx + 1] = clampByte(g + n);
      imgData.data[idx + 2] = clampByte(b + n);
      imgData.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function parseHexColor(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function clampByte(v: number): number {
  return Math.min(255, Math.max(0, Math.round(v)));
}

export function generateJupiterTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const bands: PlanetBand[] = [
    { y: 0.0, width: 0.08, color: '#5a4a3a', turbulence: 0.3 },
    { y: 0.05, width: 0.06, color: '#6a4c36', turbulence: 0.3 },
    { y: 0.1, width: 0.04, color: '#8a6a48', turbulence: 0.4 },
    { y: 0.18, width: 0.06, color: '#c4a46a', turbulence: 0.5 },
    { y: 0.24, width: 0.04, color: '#d4b880', turbulence: 0.5 },
    { y: 0.3, width: 0.05, color: '#8a6a3a', turbulence: 0.6 },
    { y: 0.38, width: 0.04, color: '#e4d0a0', turbulence: 0.7 },
    { y: 0.42, width: 0.03, color: '#f0e0b8', turbulence: 0.8 },
    { y: 0.46, width: 0.03, color: '#e8d4a8', turbulence: 0.7 },
    { y: 0.5, width: 0.03, color: '#dcc89c', turbulence: 0.7 },
    { y: 0.54, width: 0.03, color: '#e4d0a0', turbulence: 0.8 },
    { y: 0.58, width: 0.03, color: '#f0e0b8', turbulence: 0.7 },
    { y: 0.62, width: 0.04, color: '#e4d0a0', turbulence: 0.6 },
    { y: 0.7, width: 0.05, color: '#8a6a3a', turbulence: 0.6 },
    { y: 0.76, width: 0.04, color: '#c4a46a', turbulence: 0.5 },
    { y: 0.82, width: 0.06, color: '#d4b880', turbulence: 0.5 },
    { y: 0.9, width: 0.04, color: '#7a5a3a', turbulence: 0.4 },
    { y: 0.94, width: 0.06, color: '#6a4c36', turbulence: 0.3 },
    { y: 1.0, width: 0.08, color: '#5a4a3a', turbulence: 0.3 },
  ];

  const tex = bandedGasGiantTexture(W, H, bands, 40, 0.015, 777);

  // Add Great Red Spot
  const canvas = tex.image as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const gx = 0.33 * W, gy = 0.56 * H;
  const gr = 40 + seededRandomFast(888)() * 10;
  const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
  grad.addColorStop(0, '#c04830');
  grad.addColorStop(0.3, '#b04028');
  grad.addColorStop(0.6, '#a05030');
  grad.addColorStop(0.8, '#8a4830');
  grad.addColorStop(1, 'rgba(120,60,40,0)');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.fill();

  // Oval BA (smaller storm)
  const ox = 0.55 * W, oy = 0.48 * H;
  const or = 15 + seededRandomFast(889)() * 5;
  const grad2 = ctx.createRadialGradient(ox, oy, 0, ox, oy, or);
  grad2.addColorStop(0, '#d06040');
  grad2.addColorStop(0.5, '#b05038');
  grad2.addColorStop(1, 'rgba(120,60,40,0)');
  ctx.fillStyle = grad2;
  ctx.beginPath(); ctx.arc(ox, oy, or, 0, Math.PI * 2); ctx.fill();

  tex.needsUpdate = true;
  return tex;
}

export function generateSaturnTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const bands: PlanetBand[] = [
    { y: 0.0, width: 0.08, color: '#a09070', turbulence: 0.2 },
    { y: 0.06, width: 0.06, color: '#b8a888', turbulence: 0.2 },
    { y: 0.12, width: 0.05, color: '#a89878', turbulence: 0.3 },
    { y: 0.18, width: 0.06, color: '#c8b898', turbulence: 0.3 },
    { y: 0.25, width: 0.05, color: '#b8a888', turbulence: 0.4 },
    { y: 0.32, width: 0.05, color: '#d4c8a8', turbulence: 0.4 },
    { y: 0.38, width: 0.04, color: '#c0b090', turbulence: 0.5 },
    { y: 0.42, width: 0.03, color: '#e8dcc0', turbulence: 0.5 },
    { y: 0.46, width: 0.03, color: '#d4c8a8', turbulence: 0.5 },
    { y: 0.5, width: 0.03, color: '#f0e4d0', turbulence: 0.5 },
    { y: 0.54, width: 0.03, color: '#d4c8a8', turbulence: 0.5 },
    { y: 0.58, width: 0.04, color: '#e8dcc0', turbulence: 0.5 },
    { y: 0.64, width: 0.05, color: '#c0b090', turbulence: 0.4 },
    { y: 0.7, width: 0.05, color: '#b8a888', turbulence: 0.4 },
    { y: 0.76, width: 0.06, color: '#a89878', turbulence: 0.3 },
    { y: 0.85, width: 0.05, color: '#b8a888', turbulence: 0.2 },
    { y: 0.92, width: 0.08, color: '#a09070', turbulence: 0.2 },
  ];
  return bandedGasGiantTexture(W, H, bands, 30, 0.01, 333);
}

export function generateUranusTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const rng = seededRandomFast(222);
  const imgData = ctx.createImageData(W, H);

  for (let py = 0; py < H; py++) {
    const v = py / H;
    const bandPattern = Math.sin(v * 12) * 0.3 + Math.sin(v * 24) * 0.15 + Math.sin(v * 6) * 0.4;
    const bright = 0.6 + bandPattern * 0.1;

    for (let px = 0; px < W; px++) {
      const u = px / W;
      const lonVar = Math.sin(u * 8 + v * 4) * 0.03;
      const n = (rng() - 0.5) * 0.04;

      const r = (0.48 + bright * 0.12 + lonVar + n) * 255;
      const g = (0.70 + bright * 0.18 + lonVar * 0.5 + n) * 255;
      const b = (0.75 + bright * 0.20 + n) * 255;

      const idx = (py * W + px) * 4;
      imgData.data[idx]     = clampByte(r);
      imgData.data[idx + 1] = clampByte(g);
      imgData.data[idx + 2] = clampByte(b);
      imgData.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function generateNeptuneTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const rng = seededRandomFast(444);
  const imgData = ctx.createImageData(W, H);

  for (let py = 0; py < H; py++) {
    const v = py / H;
    const bandPattern = Math.sin(v * 14) * 0.5 + Math.sin(v * 28) * 0.2 + Math.sin(v * 7) * 0.3;
    const bright = 0.5 + bandPattern * 0.08;

    for (let px = 0; px < W; px++) {
      const u = px / W;
      const lonVar = Math.sin(u * 10 + v * 5) * 0.04;
      const n = (rng() - 0.5) * 0.03;

      const r = (0.18 + bright * 0.08 + lonVar + n) * 255;
      const g = (0.25 + bright * 0.12 + lonVar * 0.7 + n) * 255;
      const b = (0.70 + bright * 0.20 + n) * 255;

      const idx = (py * W + px) * 4;
      imgData.data[idx]     = clampByte(r);
      imgData.data[idx + 1] = clampByte(g);
      imgData.data[idx + 2] = clampByte(b);
      imgData.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // Add Great Dark Spot
  const gx = 0.30 * W, gy = 0.65 * H;
  const gr = 30;
  const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
  grad.addColorStop(0, '#0a0a2a');
  grad.addColorStop(0.3, '#101040');
  grad.addColorStop(0.6, '#1a2050');
  grad.addColorStop(1, 'rgba(30,40,80,0)');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.fill();

  // Bright companion cloud
  const cx = 0.30 * W + 35, cy = 0.65 * H - 15;
  const cr = 15;
  const grad2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
  grad2.addColorStop(0, 'rgba(200,220,255,0.4)');
  grad2.addColorStop(0.5, 'rgba(180,200,240,0.2)');
  grad2.addColorStop(1, 'rgba(180,200,240,0)');
  ctx.fillStyle = grad2;
  ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fill();

  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
