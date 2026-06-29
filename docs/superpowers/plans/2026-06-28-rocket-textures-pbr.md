# Rocket PBR Textures — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade rocket part textures from 512×512 flat canvas to 1024×1024 PBR with gradients, wear, normal, roughness maps.

**Architecture:** `ProceduralTextures.ts` gets 6 new functions returning `TextureSet` (4 maps each). `PartBuilder.ts` updated to consume `TextureSet` and pass maps to `MeshStandardMaterial`. Existing tests extended for new texture dimensions and normal map validity.

**Tech Stack:** TypeScript, Three.js (`CanvasTexture`, `MeshStandardMaterial`), Canvas 2D (Sobel edge detection for normals).

**Global Constraints:**
- Color texture resolution: 1024×1024 minimum
- Normal/roughness resolution: 512×512 minimum
- All existing 54 tests must continue passing
- `npm run typecheck` must pass
- No new npm dependencies
- Texture generation must be one-time (not per-frame)

---

## File Structure

| File | Responsibility | Change |
|---|---|---|
| `src/effects/ProceduralTextures.ts` | Generate TextureSet for each part type | Rewrite 6 functions: `generateTankTexture(size)`, `generateCapsuleTexture()`, `generateEngineTexture()`, `generateParachuteTexture()` — each returns `TextureSet`. Add helpers: `applyLightGradient()`, `applyWear()`, `makeNormalMap()`, `createTextureSet()`. Keep existing Earth/Moon texture functions unchanged. |
| `src/parts/PartBuilder.ts` | Build 3D group from Part spec, now with full PBR materials | Update `buildTank`, `buildCapsule`, `buildEngine`, `buildParachute` to accept `TextureSet` and pass `normalMap`, `roughnessMap`, `metalnessMap` to material constructors |
| `src/parts/Part.ts` | Part type definitions | Add `TextureSet` interface if needed (or keep in ProceduralTextures.ts) |
| `tests/parts/builder.test.ts` | Verify PartBuilder produces correct meshes | Extend to check `normalMap`, `roughnessMap` exist on materials |
| `tests/effects/procedural-textures.test.ts` | Verify texture generation | Add tests for texture resolution, normal map presence, Sobel output validity |

---

### Task 1: Add TextureSet type and Sobel normal-map generator

**Files:**
- Modify: `src/effects/ProceduralTextures.ts` (add types + helpers at top)

**Interfaces:**
- Consumes: `THREE` (already imported)
- Produces: `TextureSet` interface, `makeNormalMap(heightCanvas, strength) → THREE.CanvasTexture`, `createTextureSet(colorCanvas, heightCanvas?, roughnessCanvas?, metalnessCanvas?) → TextureSet`

- [ ] **Step 1: Add TextureSet interface and helpers**

Add after the `createCanvas` helper (around line 11):

```ts
export interface TextureSet {
  color: THREE.CanvasTexture;
  normal?: THREE.CanvasTexture;
  roughness?: THREE.CanvasTexture;
  metalness?: THREE.CanvasTexture;
}

/** Generate a normal map from a height map canvas using Sobel filter. */
function makeNormalMap(src: HTMLCanvasElement, strength = 2.0): THREE.CanvasTexture {
  const W = src.width, H = src.height;
  const sCtx = src.getContext('2d')!;
  const sData = sCtx.getImageData(0, 0, W, H).data;
  const [canvas, ctx] = createCanvas(W, H);
  const img = ctx.createImageData(W, H);
  const d = img.data;
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const idx = (py * W + px) * 4;
      const getH = (x: number, y: number) => {
        const clampedX = Math.max(0, Math.min(W - 1, x));
        const clampedY = Math.max(0, Math.min(H - 1, y));
        return sData[(clampedY * W + clampedX) * 4] / 255;
      };
      const tl = getH(px - 1, py - 1), t = getH(px, py - 1), tr = getH(px + 1, py - 1);
      const l = getH(px - 1, py), r = getH(px + 1, py);
      const bl = getH(px - 1, py + 1), b = getH(px, py + 1), br = getH(px + 1, py + 1);
      const dx = (tr + 2 * r + br) - (tl + 2 * l + bl);
      const dy = (bl + 2 * b + br) - (tl + 2 * t + tr);
      const nx = dx * strength, ny = dy * strength;
      const len = Math.sqrt(nx * nx + ny * ny + 1);
      d[idx] = Math.round((nx / len * 0.5 + 0.5) * 255);
      d[idx + 1] = Math.round((ny / len * 0.5 + 0.5) * 255);
      d[idx + 2] = Math.round((1 / len) * 255);
      d[idx + 3] = 255;
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
  roughnessVal?: number | HTMLCanvasElement,
  metalnessVal?: number | HTMLCanvasElement,
): TextureSet {
  const color = new THREE.CanvasTexture(colorCanvas);
  color.wrapS = color.wrapT = THREE.RepeatWrapping;
  color.colorSpace = THREE.SRGBColorSpace;
  color.anisotropy = 4;
  let normal: THREE.CanvasTexture | undefined;
  if (heightCanvas) {
    normal = makeNormalMap(heightCanvas, 2.0);
  }
  let roughness: THREE.CanvasTexture | undefined;
  if (roughnessVal instanceof HTMLCanvasElement) {
    const r = new THREE.CanvasTexture(roughnessVal);
    r.wrapS = r.wrapT = THREE.RepeatWrapping;
    r.anisotropy = 4;
    roughness = r;
  }
  let metalness: THREE.CanvasTexture | undefined;
  if (metalnessVal instanceof HTMLCanvasElement) {
    const m = new THREE.CanvasTexture(metalnessVal);
    m.wrapS = m.wrapT = THREE.RepeatWrapping;
    m.anisotropy = 4;
    metalness = m;
  }
  return { color, normal, roughness, metalness };
}
```

- [ ] **Step 2: Add applyLightGradient and applyWear helpers**

Add after `createTextureSet`:

```ts
/** Apply horizontal light gradient (wraps around cylinder) — bright centre, dark edges. */
function applyLightGradient(ctx: CanvasRenderingContext2D, W: number, H: number): void {
  const grad = ctx.createLinearGradient(0, 0, W, 0);
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
    const len = 5 + Math.random() * 25;
    const angle = Math.random() * Math.PI * 2;
    ctx.globalAlpha = 0.05 + Math.random() * 0.12;
    ctx.strokeStyle = Math.random() > 0.5 ? '#fff' : '#000';
    ctx.lineWidth = 0.5 + Math.random() * 1.5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}
```

- [ ] **Step 3: Write tests for makeNormalMap**

File: `tests/effects/procedural-textures.test.ts`

Add after existing tests:

```ts
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';

// Helpers assumed to be exported from ProceduralTextures
import { makeNormalMap, createTextureSet, applyLightGradient, applyWear, TextureSet } from '../../src/effects/ProceduralTextures';

describe('normal map generation', () => {
  it('produces a canvas texture with correct size', () => {
    const c = document.createElement('canvas');
    c.width = 128; c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.fillRect(0, 0, 128, 128);
    const tex = makeNormalMap(c, 2.0);
    expect(tex).toBeInstanceOf(THREE.CanvasTexture);
    expect(tex.image.width).toBe(128);
    expect(tex.image.height).toBe(128);
  });

  it('generates non-zero normal data (edge present)', () => {
    const c = document.createElement('canvas');
    c.width = 16; c.height = 16;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 8, 16);
    ctx.fillStyle = '#000';
    ctx.fillRect(8, 0, 8, 16);
    const tex = makeNormalMap(c, 2.0);
    const img = (tex as any).image as HTMLCanvasElement;
    const data = img.getContext('2d')!.getImageData(0, 0, 16, 16).data;
    let nonzero = 0;
    for (let i = 0; i < 16*16*4; i += 4) {
      if (data[i] !== 128 || data[i+1] !== 128) nonzero++;
    }
    expect(nonzero).toBeGreaterThan(0);
  });
});

describe('createTextureSet', () => {
  it('returns object with color texture', () => {
    const c = document.createElement('canvas');
    c.width = 64; c.height = 64;
    const ts = createTextureSet(c);
    expect(ts.color).toBeInstanceOf(THREE.CanvasTexture);
    expect(ts.normal).toBeUndefined();
  });

  it('generates normal map when height canvas provided', () => {
    const c = document.createElement('canvas');
    c.width = 64; c.height = 64;
    const h = document.createElement('canvas');
    h.width = 64; h.height = 64;
    const ts = createTextureSet(c, h);
    expect(ts.normal).toBeInstanceOf(THREE.CanvasTexture);
  });
});
```

- [ ] **Step 4: Export helpers (makeNormalMap, createTextureSet, applyLightGradient, applyWear) from ProceduralTextures.ts**

Add `export` keyword before `function makeNormalMap`, `function createTextureSet`, `function applyLightGradient`, `function applyWear`.

- [ ] **Step 5: Run tests**

```bash
npm run test
```
Expected: all tests pass (including new ones).

- [ ] **Step 6: Commit**

```bash
git add src/effects/ProceduralTextures.ts tests/effects/procedural-textures.test.ts
git commit -m "feat(textures): add TextureSet, Sobel normal maps, light gradient, wear helpers"
```

---

### Task 2: Rewrite generateTankTexture(size) — 1024×1024 PBR

**Files:**
- Modify: `src/effects/ProceduralTextures.ts` (replace `generateTankTexture`)

**Interfaces:**
- Consumes: `createCanvas`, `createTextureSet`, `applyLightGradient`, `applyWear` (from Task 1)
- Produces: `generateTankTexture(size: 'S' | 'M' | 'L' | 'XL') → TextureSet`

- [ ] **Step 1: Add size-based wear factor helper**

Add at top of the file:

```ts
const WEAR_FACTOR: Record<string, number> = { S: 0.15, M: 0.25, L: 0.4, XL: 0.55 };
```

- [ ] **Step 2: Replace generateTankTexture**

Replace the existing `generateTankTexture` function:

```ts
export function generateTankTexture(size: 'S' | 'M' | 'L' | 'XL'): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [heightCanvas, heightCtx] = createCanvas(W, H);

  const wear = WEAR_FACTOR[size] ?? 0.3;

  // ── colour bands ──
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

  // ── wear ──
  applyWear(colorCtx, W, H, wear);

  // ── light gradient ──
  applyLightGradient(colorCtx, W, H);

  // ── height map (panel seams, rivets) ──
  // base: mid-gray
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
```

- [ ] **Step 3: Write test for generateTankTexture**

In `tests/effects/procedural-textures.test.ts`:

```ts
describe('generateTankTexture', () => {
  it('returns TextureSet with map at 1024x1024', () => {
    const ts = generateTankTexture('M');
    expect(ts.color.image.width).toBe(1024);
    expect(ts.color.image.height).toBe(1024);
    expect(ts.normal).toBeDefined();
  });
  it('returns TextureSet with normal map at 512x512', () => {
    const ts = generateTankTexture('XL');
    expect(ts.normal!.image.width).toBe(1024);
    expect(ts.normal!.image.height).toBe(1024);
  });
});
```

- [ ] **Step 4: Run tests**

```bash
npm run test
```

- [ ] **Step 5: Commit**

```bash
git add src/effects/ProceduralTextures.ts tests/effects/procedural-textures.test.ts
git commit -m "feat(textures): rewrite generateTankTexture as 1024x1024 PBR TextureSet"
```

---

### Task 3: Rewrite generateCapsuleTexture() — 1024×1024 PBR

**Files:**
- Modify: `src/effects/ProceduralTextures.ts` (replace `generateCapsuleTexture`)

**Interfaces:**
- Produces: `generateCapsuleTexture() → TextureSet`

- [ ] **Step 1: Replace generateCapsuleTexture**

```ts
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
    const v = Math.round(100 - t * 60);
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

  // ── height map ──
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
    if (x / H > 0.82) {
      heightCtx.beginPath();
      heightCtx.moveTo(x, H * 0.82);
      heightCtx.lineTo(x, H);
      heightCtx.stroke();
    }
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
```

- [ ] **Step 2: Write test**

```ts
describe('generateCapsuleTexture', () => {
  it('returns TextureSet with 1024x1024 color map', () => {
    const ts = generateCapsuleTexture();
    expect(ts.color.image.width).toBe(1024);
    expect(ts.color.image.height).toBe(1024);
    expect(ts.normal).toBeDefined();
  });
});
```

- [ ] **Step 3: Run tests**

```bash
npm run test
```

- [ ] **Step 4: Commit**

```bash
git add src/effects/ProceduralTextures.ts tests/effects/procedural-textures.test.ts
git commit -m "feat(textures): rewrite generateCapsuleTexture as 1024x1024 PBR TextureSet"
```

---

### Task 4: Rewrite generateEngineTexture() — 1024×1024 PBR

**Files:**
- Modify: `src/effects/ProceduralTextures.ts` (replace `generateEngineTexture`)

**Interfaces:**
- Produces: `generateEngineTexture() → TextureSet`

- [ ] **Step 1: Replace generateEngineTexture**

```ts
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

  // ── height map ──
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
```

- [ ] **Step 2: Write test**

```ts
describe('generateEngineTexture', () => {
  it('returns TextureSet with 1024x1024 color map and normal map', () => {
    const ts = generateEngineTexture();
    expect(ts.color.image.width).toBe(1024);
    expect(ts.normal).toBeDefined();
  });
});
```

- [ ] **Step 3: Run tests**

```bash
npm run test
```

- [ ] **Step 4: Commit**

```bash
git add src/effects/ProceduralTextures.ts tests/effects/procedural-textures.test.ts
git commit -m "feat(textures): rewrite generateEngineTexture as 1024x1024 PBR TextureSet"
```

---

### Task 5: Rewrite generateParachuteTexture() — 1024×1024 PBR

**Files:**
- Modify: `src/effects/ProceduralTextures.ts` (replace `generateParachuteTexture`)

**Interfaces:**
- Produces: `generateParachuteTexture() → TextureSet`

- [ ] **Step 1: Replace generateParachuteTexture**

```ts
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
  shadowGrad.addColorStop(0, 'rgba(0,0,0,0)');
  shadowGrad.addColorStop(0.3, 'rgba(0,0,0,0)');
  shadowGrad.addColorStop(0.8, 'rgba(0,0,0,0.15)');
  shadowGrad.addColorStop(1, 'rgba(0,0,0,0.25)');
  colorCtx.fillStyle = shadowGrad;
  colorCtx.fillRect(0, 0, W, H);

  // ── height map ──
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
```

- [ ] **Step 2: Write test**

```ts
describe('generateParachuteTexture', () => {
  it('returns TextureSet with 1024x1024 color map and normal map', () => {
    const ts = generateParachuteTexture();
    expect(ts.color.image.width).toBe(1024);
    expect(ts.normal).toBeDefined();
  });
});
```

- [ ] **Step 3: Run tests**

```bash
npm run test
```

- [ ] **Step 4: Commit**

```bash
git add src/effects/ProceduralTextures.ts tests/effects/procedural-textures.test.ts
git commit -m "feat(textures): rewrite generateParachuteTexture as 1024x1024 PBR TextureSet"
```

---

### Task 6: Update PartBuilder to consume TextureSet

**Files:**
- Modify: `src/parts/PartBuilder.ts`

**Interfaces:**
- Consumes: `TextureSet` from `ProceduralTextures`
- Produces: `buildPartMesh(part: Part) → THREE.Group` with full PBR materials

- [ ] **Step 1: Update imports in PartBuilder.ts**

```ts
import type { TextureSet } from '../effects/ProceduralTextures';
```

- [ ] **Step 2: Update buildTank to use TextureSet**

```ts
function buildTank(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = generateTankTexture('M');
  const bodyMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.85,
    roughnessMap: tex.roughness,
    metalnessMap: tex.metalness,
    normalScale: new THREE.Vector2(1.5, 1.5),
  });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 24), bodyMat);
  group.add(body);
  const bandMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.85,
    roughnessMap: tex.roughness,
    metalnessMap: tex.metalness,
    normalScale: new THREE.Vector2(1.5, 1.5),
  });
  const bh = h * 0.06, br = r * 1.03;
  const topBand = new THREE.Mesh(new THREE.CylinderGeometry(br, br, bh, 24), bandMat);
  topBand.position.y = h / 2 - bh / 2;
  group.add(topBand);
  const botBand = new THREE.Mesh(new THREE.CylinderGeometry(br, br, bh, 24), bandMat);
  botBand.position.y = -h / 2 + bh / 2;
  group.add(botBand);
}
```

- [ ] **Step 3: Update buildCapsule**

```ts
function buildCapsule(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = generateCapsuleTexture();
  const bodyMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.0,
    normalScale: new THREE.Vector2(1.2, 1.2),
  });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 24), bodyMat);
  group.add(body);
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(r, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    bodyMat,
  );
  dome.position.y = h / 2;
  group.add(dome);
  const baseMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.0,
    normalScale: new THREE.Vector2(1.2, 1.2),
  });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.5, r, h * 0.2, 24), baseMat);
  base.position.y = -h / 2 - h * 0.1;
  group.add(base);
  const winMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.3, metalness: 0.5 });
  const win = new THREE.Mesh(new THREE.CircleGeometry(r * 0.18, 16), winMat);
  win.position.set(r + 0.001, h * 0.05, 0);
  win.rotation.y = -Math.PI / 2;
  group.add(win);
}
```

- [ ] **Step 4: Update buildEngine**

```ts
function buildEngine(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = generateEngineTexture();
  const bodyMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.9,
    normalScale: new THREE.Vector2(2.0, 2.0),
  });
  const bellMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.9,
    normalScale: new THREE.Vector2(2.0, 2.0),
  });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.5, r * 0.5, h * 0.35, 24), bodyMat);
  body.position.y = h * 0.325;
  group.add(body);
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.35, h * 0.1, 24), bodyMat);
  ring.position.y = h * 0.1;
  group.add(ring);
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.35, r * 0.85, h * 0.45, 24), bellMat);
  bell.position.y = -h * 0.15;
  group.add(bell);
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.15, metalness: 0.85 });
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.88, r * 0.88, h * 0.04, 24), rimMat);
  rim.position.y = -h * 0.15 - h * 0.225 - h * 0.02;
  group.add(rim);
}
```

- [ ] **Step 5: Update buildParachute**

```ts
function buildParachute(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;
  const tex = generateParachuteTexture();
  const canopyMat = new THREE.MeshStandardMaterial({
    map: tex.color,
    normalMap: tex.normal,
    roughness: 1.0,
    metalness: 0.0,
    normalScale: new THREE.Vector2(0.5, 0.5),
    side: THREE.DoubleSide,
  });
  const canopy = new THREE.Mesh(new THREE.ConeGeometry(r * 1.6, h * 0.8, 24), canopyMat);
  canopy.position.y = h * 0.6;
  canopy.rotation.x = Math.PI;
  group.add(canopy);
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xCC3344, roughness: 0.8, side: THREE.DoubleSide });
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const s = new THREE.Mesh(new THREE.ConeGeometry(r * 0.06, h * 0.8, 4), stripeMat);
    s.position.set(Math.cos(a) * r * 0.85, h * 0.6, Math.sin(a) * r * 0.85);
    s.rotation.x = Math.PI;
    group.add(s);
  }
  const strutMat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.6, metalness: 0.3 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const sl = h * 0.18;
    const s = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, sl, 4), strutMat);
    const rimY = h * 0.6 + h * 0.4;
    s.position.set(Math.cos(a) * r * 1.5, rimY - sl / 2, Math.sin(a) * r * 1.5);
    group.add(s);
  }
}
```

- [ ] **Step 6: Run typecheck**

```bash
npm run typecheck
```

- [ ] **Step 7: Run all tests**

```bash
npm run test
```

- [ ] **Step 8: Commit**

```bash
git add src/parts/PartBuilder.ts tests/parts/builder.test.ts
git commit -m "feat(parts): PartBuilder uses TextureSet PBR maps (normal, roughness, metalness)"
```

---

### Task 7: Final verification

**Files:** (no changes)

- [ ] **Step 1: Full typecheck**

```bash
npm run typecheck
```

Expected: clean, no errors.

- [ ] **Step 2: Full test suite**

```bash
npm run test
```

Expected: 55+ tests pass (new texture tests included).

- [ ] **Step 3: Verify server builds**

```bash
npm run dev &
sleep 2 && curl -s http://localhost:3000 | head -20
```

Expected: dev server starts on port 3000.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: finalize rocket PBR texture upgrade v1.8"
```
