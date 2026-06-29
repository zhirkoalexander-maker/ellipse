# Visuals: Procedural Stars, Atmosphere Glow & Sky Gradient — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder white-dot star field with a procedural shader skybox (colored bands + nebula + twinkling stars), fix atmosphere glow so it follows Earth, and add a sky-to-space gradient during flight.

**Architecture:** Three independent changes: (1) rewrite `Stars.ts` as a ShaderMaterial skybox sphere with procedural fragment shader, (2) attach atmosphere glow as a child of Earth's mesh, (3) interpolate scene background color by altitude in `FlightScene.update()`.

**Tech Stack:** Three.js `ShaderMaterial`, custom GLSL fragment shader, value noise, UV grid-hash star sampling.

## Global Constraints

- All 57 existing tests must pass after each task
- `tsc --noEmit` must pass after each task
- No new external dependencies
- No textures/assets — all procedural
- Stars must follow camera (as currently done in `SceneManager.update()`)

---

### Task 1: Procedural Shader Skybox

**Files:**
- Modify: `src/effects/Stars.ts` — full rewrite
- Modify: `tests/effects/stars.test.ts` — update for new type
- No changes to `src/core/SceneManager.ts` — already calls `stars.getMesh()` and tracks camera

**Interfaces:**
- Consumes: nothing — standalone class
- Produces: `Stars.getMesh(): THREE.Mesh` (was `THREE.Points`)

- [ ] **Step 1: Write the failing test**

Update `tests/effects/stars.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { Stars } from '../../src/effects/Stars';

describe('Stars', () => {
  it('creates a Mesh with ShaderMaterial', () => {
    const stars = new Stars();
    const mesh = stars.getMesh();
    expect(mesh.type).toBe('Mesh');
    expect((mesh.material as THREE.ShaderMaterial).type).toBe('ShaderMaterial');
    expect(mesh.geometry.attributes.position!.count).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/effects/stars.test.ts`
Expected: FAIL — old Stars returns Points, test expects Mesh

- [ ] **Step 3: Rewrite `src/effects/Stars.ts`**

Replace the entire file with a procedural shader skybox:

```ts
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;

varying vec2 vUv;
varying vec3 vPos;

// --- hash / noise helpers ---
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float hash3(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash3(i);
  float b = hash3(i + vec3(1,0,0));
  float c = hash3(i + vec3(0,1,0));
  float d = hash3(i + vec3(1,1,0));
  float e = hash3(i + vec3(0,0,1));
  float f_ = hash3(i + vec3(1,0,1));
  float g = hash3(i + vec3(0,1,1));
  float h = hash3(i + vec3(1,1,1));
  float u1 = mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  float u2 = mix(mix(e, f_, f.x), mix(g, h, f.x), f.y);
  return mix(u1, u2, f.z);
}

// --- star rendering via UV grid ---
float stars(vec2 uv, float time) {
  float res = 60.0;
  vec2 grid = floor(uv * res);
  vec2 offset = fract(uv * res);
  float seed = hash21(grid);
  vec2 starPos = vec2(
    hash(vec2(grid.x + 0.1, grid.y + 0.2)),
    hash(vec2(grid.x + 0.3, grid.y + 0.4))
  );
  float brightness = hash(vec2(grid.x + 5.7, grid.y + 9.3));
  float size = 0.02 + brightness * 0.04;
  float twinkle = 0.85 + 0.15 * sin(time * (1.5 + seed * 3.0) + seed * 6.28);
  vec2 d = offset - starPos;
  float dist = length(d);
  float star = smoothstep(size, 0.0, dist);
  // Color variance
  float colorSeed = hash(vec2(grid.x * 1.7, grid.y * 2.3));
  return star * brightness * twinkle * (0.7 + 0.3 * colorSeed);
}

void main() {
  // Normalize direction from center of sphere
  vec3 dir = normalize(vPos);

  // Base gradient — dark navy to purple to black
  float height = dir.y * 0.5 + 0.5;
  vec3 col1 = vec3(0.02, 0.03, 0.08); // #060814
  vec3 col2 = vec3(0.10, 0.04, 0.18); // deep purple
  vec3 col3 = vec3(0.05, 0.08, 0.20); // dark blue
  vec3 bg = mix(col1, col2, smoothstep(0.0, 0.5, height));
  bg = mix(bg, col3, smoothstep(0.5, 1.0, height));

  // Colored bands — horizontal stripes like Ellipse
  float bands = sin(vUv.y * 8.0 + uTime * 0.02) * 0.5 + 0.5;
  bands *= sin(vUv.y * 3.0 + 1.2) * 0.5 + 0.5;
  vec3 bandColor = vec3(0.15, 0.05, 0.25);
  float bandAlpha = bands * 0.08;
  bg = mix(bg, bandColor, bandAlpha);

  // Nebula patches — 3D noise
  vec3 noiseCoord = dir * 2.5 + uTime * 0.005;
  float n1 = noise3(noiseCoord);
  float n2 = noise3(noiseCoord * 1.8 + 10.0);
  float nebula = n1 * 0.6 + n2 * 0.4;
  vec3 nebulaColor1 = vec3(0.15, 0.05, 0.30); // purple
  vec3 nebulaColor2 = vec3(0.05, 0.10, 0.35); // blue
  vec3 nebulaColor3 = vec3(0.30, 0.05, 0.20); // magenta
  vec3 nebulaBlend = mix(nebulaColor1, nebulaColor2, smoothstep(0.0, 1.0, n1));
  nebulaBlend = mix(nebulaBlend, nebulaColor3, smoothstep(0.0, 1.0, n2));
  bg = mix(bg, nebulaBlend, nebula * 0.25);

  // Stars
  float star = stars(vUv, uTime);
  vec3 starColor = vec3(1.0, 0.95, 0.85); // warm white base
  // Some blue-ish stars
  if (hash(vec2(vUv.x * 13.0, vUv.y * 7.0)) > 0.85) {
    starColor = vec3(0.8, 0.85, 1.0);
  }
  // Some yellow stars
  if (hash(vec2(vUv.x * 3.0, vUv.y * 11.0)) > 0.95) {
    starColor = vec3(1.0, 0.9, 0.6);
  }
  vec3 finalColor = bg + starColor * star * 2.0;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export class Stars {
  private mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.SphereGeometry(1000, 48, 32);
    geometry.scale(-1, 1, 1); // render from inside

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      side: THREE.BackSide,
      depthWrite: false,
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }

  update(dt: number): void {
    (this.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value += dt;
  }

  getMesh(): THREE.Mesh {
    return this.mesh;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/effects/stars.test.ts`
Expected: PASS

- [ ] **Step 5: Update `SceneManager.ts` to call `stars.update(dt)`**

The `SceneManager.update()` method currently only tracks camera position. Add a call to the new `update()` method:

Edit `src/core/SceneManager.ts`:

```ts
// In update(), after the FPS tracking lines:
this.stars.update?.(dt);  // update star shader time uniform
```

And add `dt: number` parameter to the update method — check signature usage first.

Actually, looking at the current `SceneManager.update()`:

```ts
update(): void {
  const t = this.clock.getElapsedTime();
  this.frames++;
  if (t - this.lastFpsUpdate >= 1) {
    this.fps = this.frames / (t - this.lastFpsUpdate);
    this.frames = 0;
    this.lastFpsUpdate = t;
  }
  this.stars.position.copy(this.camera.position);
}
```

We need to pass dt. Check where `sceneMgr.update()` is called and update the signature.

Let me also change this to pass `dt`:

Find caller first — `src/core/Game.ts`:

Then update to pass delta time:

```ts
// SceneManager
update(dt: number): void {
  const t = this.clock.getElapsedTime();
  // ... FPS code
  this.stars.position.copy(this.camera.position);
  (this.stars as any).update?.(dt);
}
```

But `dt` is a `number` parameter now. Need to update `Game.ts` caller:

```ts
// Game.ts updates loop calls sceneMgr.update(dt)
```

And Stars is currently typed as `THREE.Points` (line 11: `private stars: THREE.Points`). Change to `THREE.Mesh`:

```ts
private stars: THREE.Mesh;
```

Update the `SceneManager.ts` code:

1. Change `stars` field type from `THREE.Points` to `THREE.Mesh`
2. Add `dt` parameter to `update(dt: number): void`
3. Call `(this.stars as any).update?.(dt)` after `this.stars.position.copy(this.camera.position)`

- [ ] **Step 6: Update `Game.ts` to pass dt to `sceneMgr.update()`**

Check `src/core/Game.ts`:

```ts
this.sceneMgr.update();
```

Change to:

```ts
this.sceneMgr.update(dt);
```

- [ ] **Step 7: Run all tests and typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all passes

- [ ] **Step 8: Visual check**

Open `http://localhost:3000/` and verify the main menu / flight scene shows colored banded stars with nebula instead of white dots.

- [ ] **Step 9: Commit**

```bash
git add src/effects/Stars.ts tests/effects/stars.test.ts src/core/SceneManager.ts src/core/Game.ts
git commit -m "feat: procedural shader skybox with colored bands, nebula, and twinkling stars"
```

---

### Task 2: Fix Atmosphere Glow Following Earth

**Files:**
- Modify: `src/planets/Earth.ts` — add glow as child of mesh, remove `getGlow()`
- Modify: `src/scenes/FlightScene.ts` — remove separate glow addition

**Interfaces:**
- Consumes: `AtmosphereGlow` class (unchanged API)
- Produces: Earth's mesh includes glow automatically via Three.js hierarchy

- [ ] **Step 1: Modify `Earth.ts` to attach glow as child**

Current code creates glow and exposes via `getGlow()`. Change to attach to `this.mesh`:

```ts
// In Earth constructor, after creating the mesh:
this.atmosphereGlow = new AtmosphereGlow(this.visualRadius);
this.mesh.add(this.atmosphereGlow.getMesh());
```

Remove the `getGlow()` method entirely.

- [ ] **Step 2: Update `FlightScene.ts` to remove separate glow add**

Line 67: `if (pbody.getGlow) sceneMgr.scene.add(pbody.getGlow());`

This line is inside a loop `for (const body of system.bodies)`. Remove this line — the glow is now a child of Earth's mesh and will be added when `sceneMgr.scene.add(pbody.mesh)` is called (line 66).

- [ ] **Step 3: Run all tests and typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all passes

- [ ] **Step 4: Visual check**

Open `http://localhost:3000/` and fly the rocket. The blue atmospheric glow should follow Earth as it orbits (previously it stayed at the origin).

- [ ] **Step 5: Commit**

```bash
git add src/planets/Earth.ts src/scenes/FlightScene.ts
git commit -m "fix: attach atmosphere glow as child of Earth mesh so it follows orbit"
```

---

### Task 3: Sky Gradient During Flight

**Files:**
- Modify: `src/scenes/FlightScene.ts` — add background color interpolation

**Interfaces:**
- Consumes: `nearestBody`, `nearestDist` (already computed in FlightScene.update)
- Produces: smooth sky-to-space color transition in scene background

- [ ] **Step 1: Write the failing test**

Create `tests/flight/sky-gradient.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';

describe('Sky Gradient', () => {
  it('lerps colors correctly', () => {
    const color = new THREE.Color();
    color.lerpColors(
      new THREE.Color(0x87CEEB),
      new THREE.Color(0x060814),
      0
    );
    expect(color.getHex()).toBe(0x87CEEB);

    color.lerpColors(
      new THREE.Color(0x87CEEB),
      new THREE.Color(0x060814),
      1
    );
    expect(color.getHex()).toBe(0x060814);

    // At 50km (t=0.5), should be mid-blue
    color.lerpColors(
      new THREE.Color(0x87CEEB),
      new THREE.Color(0x060814),
      0.5
    );
    const hex = color.getHex();
    // Should be between the two
    expect(hex).not.toBe(0x87CEEB);
    expect(hex).not.toBe(0x060814);
  });
});
```

- [ ] **Step 2: Run test to verify it passes**

Run: `npx vitest run tests/flight/sky-gradient.test.ts`
Expected: PASS (this is a pure Three.js test, no implementation needed)

- [ ] **Step 3: Add sky gradient to `FlightScene.update()`**

In `FlightScene.update()`, after computing `nearestBody` and `nearestDist` (around line 300-315), add:

```ts
// Sky gradient — blue at sea level, black in space
if (nearestBody && (nearestBody as any).radius && nearestDist < 1e8) {
  const bodyR = (nearestBody as any).radius;
  const alt = Math.max(0, nearestDist - bodyR);
  const t = Math.min(1, alt / 100000);
  this.sceneMgr.scene.background = new THREE.Color().lerpColors(
    new THREE.Color(0x87CEEB),
    new THREE.Color(0x060814),
    t
  );
} else {
  this.sceneMgr.scene.background = new THREE.Color(0x060814);
}
```

Place this right before or after the drag/physics section (around line 384), ensuring `nearestBody` and `nearestDist` are already computed.

- [ ] **Step 4: Run all tests and typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all passes

- [ ] **Step 5: Visual check**

Open `http://localhost:3000/` and fly the rocket:
- At launch pad: sky should be blue behind the rocket
- As rocket ascends: gradual fade to black by 100km
- In deep space: black background

- [ ] **Step 6: Commit**

```bash
git add src/scenes/FlightScene.ts tests/flight/sky-gradient.test.ts
git commit -m "feat: sky-to-space gradient based on altitude"
```

---

## Full Test Suite

After all tasks, run:

```bash
npx vitest run && npx tsc --noEmit
```

Expected: all 57+ tests pass, typecheck clean.
