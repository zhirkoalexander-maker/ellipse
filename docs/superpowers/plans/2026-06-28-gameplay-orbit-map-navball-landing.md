# Gameplay: Orbit, Map, Navball, Landing — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add patched-conics orbital mechanics, full-screen zoomable orbit map, navball orientation indicator, and multi-body landing system.

**Architecture:** Six tasks: (1) SOI switching replaces all-bodies gravity, (2) orbit prediction utility computes trajectory points, (3) map is rewritten as full-screen canvas with zoom/pan, (4) navball renders as a 2D canvas in the HUD, (5) landing checks tilt + speed per body, (6) trajectory line is drawn on the map.

**Tech Stack:** Three.js vectors, Canvas 2D, Keplerian orbital mechanics.

## Global Constraints

- All 71 existing tests must pass after each task
- `tsc --noEmit` must pass after each task
- No new external dependencies
- Follow existing patterns: Body interface, FlightScene architecture

---

### Task 1: SOI Switching — Patched Conics Gravity

**Files:**
- Create: `src/physics/SoiResolver.ts`
- Modify: `src/scenes/FlightScene.ts` — gravity section (~lines 300-315)
- Create: `tests/physics/soi-resolver.test.ts`

**Interfaces:**
- Consumes: `System.bodies`, `FlightState.position`, `constants.ts G`
- Produces: `getReferenceBody(pos, system): Body` — the body whose gravity dominates

- [ ] **Step 1: Write the failing test**

Create `tests/physics/soi-resolver.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { getReferenceBody } from '../../src/physics/SoiResolver';
import { System } from '../../src/physics/System';
import { Body } from '../../src/physics/Body';

describe('SoiResolver', () => {
  it('picks Earth when close to Earth, away from Sun', () => {
    const sys = new System();
    const sun = new Body('sun', 2e26, [0, 0, 0], [0, 0, 0]);
    const earth = new Body('earth', 7e24, [1e8, 0, 0], [0, 0, 11550]);
    (earth as any).radius = 6.371e6;
    sys.add(sun);
    sys.add(earth);

    const ref = getReferenceBody([1e8, 6.37e6 + 50000, 0], sys);
    expect(ref.name).toBe('earth');
  });

  it('picks Sun when far from all planets', () => {
    const sys = new System();
    const sun = new Body('sun', 2e26, [0, 0, 0], [0, 0, 0]);
    const earth = new Body('earth', 7e24, [1e8, 0, 0], [0, 0, 11550]);
    (earth as any).radius = 6.371e6;
    sys.add(sun);
    sys.add(earth);

    const ref = getReferenceBody([3e8, 0, 3e8], sys);
    expect(ref.name).toBe('sun');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/physics/soi-resolver.test.ts`
Expected: FAIL — `getReferenceBody` is not exported

- [ ] **Step 3: Create `src/physics/SoiResolver.ts`**

```ts
import type { Body } from './Body';
import type { System } from './System';
import { G } from '../config/constants';

export function getReferenceBody(position: [number, number, number], system: System): Body {
  const sun = system.bodyByName('sun')!;
  let bestBody: Body = sun;
  let bestGrav = 0;

  for (const body of system.bodies) {
    if (body.name === 'sun') continue;
    const dx = body.position[0] - position[0];
    const dy = body.position[1] - position[1];
    const dz = body.position[2] - position[2];
    const r2 = dx * dx + dy * dy + dz * dz;
    const r = Math.sqrt(r2);

    const dxS = body.position[0] - sun.position[0];
    const dyS = body.position[1] - sun.position[1];
    const dzS = body.position[2] - sun.position[2];
    const distToSun = Math.sqrt(dxS * dxS + dyS * dyS + dzS * dzS);
    const soi = distToSun * Math.pow(body.mass / sun.mass, 0.4);

    if (r < soi) {
      const grav = (G * body.mass) / r2;
      if (grav > bestGrav) { bestGrav = grav; bestBody = body; }
    }
  }

  return bestBody;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/physics/soi-resolver.test.ts`
Expected: PASS

- [ ] **Step 5: Modify FlightScene gravity section**

In `src/scenes/FlightScene.ts`, import `getReferenceBody`:

```ts
import { getReferenceBody } from '../physics/SoiResolver';
```

Replace the gravity loop (currently iterates all bodies and sums forces) with SOI-based gravity:

Current code (~lines 301-315):
```ts
      let fx = 0, fy = 0, fz = 0;
      for (const body of this.system.bodies) {
        if (body.mass <= 0) continue;
        const dx = body.position[0] - this.state.position[0];
        const dy = body.position[1] - this.state.position[1];
        const dz = body.position[2] - this.state.position[2];
        const r2 = dx*dx + dy*dy + dz*dz;
        const r = Math.sqrt(r2);
        if (r < 1) continue;
        const f = (G * body.mass) / r2;
        fx += f * dx / r;
        fy += f * dy / r;
        fz += f * dz / r;
        if (r < nearestDist) { nearestDist = r; nearestBody = body; }
      }
      this.state.velocity[0] += fx * _dt;
      this.state.velocity[1] += fy * _dt;
      this.state.velocity[2] += fz * _dt;
```

Replace with:
```ts
      const refBody = getReferenceBody(this.state.position, this.system);
      const dx = refBody.position[0] - this.state.position[0];
      const dy = refBody.position[1] - this.state.position[1];
      const dz = refBody.position[2] - this.state.position[2];
      const r2 = dx*dx + dy*dy + dz*dz;
      const r = Math.sqrt(r2);
      if (r > 1 && r2 > 0) {
        const f = (G * refBody.mass) / r2;
        this.state.velocity[0] += f * dx / r * _dt;
        this.state.velocity[1] += f * dy / r * _dt;
        this.state.velocity[2] += f * dz / r * _dt;
      }
      nearestDist = r;
      nearestBody = refBody;
```

- [ ] **Step 6: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: 72+ tests pass, typecheck clean

- [ ] **Step 7: Commit**

```bash
git add src/physics/SoiResolver.ts src/scenes/FlightScene.ts tests/physics/soi-resolver.test.ts
git commit -m "feat: SOI switching — patched conics gravity (one body per position)"
```

---

### Task 2: Orbit Prediction Utility

**Files:**
- Create: `src/physics/OrbitPredictor.ts`
- Create: `tests/physics/orbit-predictor.test.ts`

**Interfaces:**
- Consumes: `G` constant, rocket state relative to reference body
- Produces: `predictOrbit(pos, vel, bodyMass, soiRadius, steps: number): OrbitPrediction` — array of 2D points + apoapsis/periapsis data

- [ ] **Step 1: Write the failing test**

Create `tests/physics/orbit-predictor.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { predictOrbit } from '../../src/physics/OrbitPredictor';

describe('OrbitPredictor', () => {
  it('returns trajectory points for a circular-ish orbit', () => {
    const mu = 6.6743e-11 * 7e24; // G * M_earth
    const r = 6.371e6 + 200000; // 200 km orbit
    const vCirc = Math.sqrt(mu / r); // ~7790 m/s
    const result = predictOrbit(
      [r, 0, 0], [0, 0, vCirc], 7e24, 1e10, 360
    );
    expect(result.points.length).toBeGreaterThan(0);
    expect(result.eccentricity).toBeLessThan(1);
    expect(result.apoapsis).toBeGreaterThan(0);
    expect(result.periapsis).toBeGreaterThan(0);
  });

  it('detects hyperbolic trajectory', () => {
    const mu = 6.6743e-11 * 7e24;
    const r = 6.371e6 + 200000;
    const vEsc = Math.sqrt(2 * mu / r) * 1.5;
    const result = predictOrbit(
      [r, 0, 0], [0, 0, vEsc], 7e24, 1e10, 360
    );
    expect(result.eccentricity).toBeGreaterThanOrEqual(1);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/physics/orbit-predictor.test.ts`
Expected: FAIL

- [ ] **Step 3: Create `src/physics/OrbitPredictor.ts`**

```ts
import { G } from '../config/constants';

export interface OrbitPrediction {
  points: [number, number][];
  eccentricity: number;
  apoapsis: number;
  periapsis: number;
  bound: boolean;
}

export function predictOrbit(
  pos: [number, number, number],
  vel: [number, number, number],
  bodyMass: number,
  soiRadius: number,
  steps: number
): OrbitPrediction {
  const mu = G * bodyMass;
  const r = Math.sqrt(pos[0] * pos[0] + pos[1] * pos[1] + pos[2] * pos[2]);
  const v2 = vel[0] * vel[0] + vel[1] * vel[1] + vel[2] * vel[2];

  const specificEnergy = v2 / 2 - mu / r;
  const a = -mu / (2 * specificEnergy);

  const hx = pos[1] * vel[2] - pos[2] * vel[1];
  const hy = pos[2] * vel[0] - pos[0] * vel[2];
  const hz = pos[0] * vel[1] - pos[1] * vel[0];

  const evx = (vel[1] * hz - vel[2] * hy) / mu - pos[0] / r;
  const evy = (vel[2] * hx - vel[0] * hz) / mu - pos[1] / r;
  const evz = (vel[0] * hy - vel[1] * hx) / mu - pos[2] / r;
  const e = Math.sqrt(evx * evx + evy * evy + evz * evz);

  const bound = e < 1;
  const apoapsis = bound ? a * (1 + e) : Infinity;
  const periapsis = a * (1 - e);

  const h = Math.sqrt(hx * hx + hy * hy + hz * hz);
  const n = Math.sqrt(hx * hx + hy * hy); // node line in XY plane (for 2D map)

  const ex = evx / e || 0;
  const ey = evy / e || 0;
  const ez = evz / e || 0;

  // P = e unit vector (toward periapsis)
  const p = [ex, ey, ez] as [number, number, number];
  // Q = perpendicular in orbital plane
  const q: [number, number, number] = [
    (hy * ez - hz * ey) / h,
    (hz * ex - hx * ez) / h,
    (hx * ey - hy * ex) / h,
  ];

  const pts: [number, number][] = [];
  const thetaMax = bound ? Math.PI * 2 : Math.acos(-1 / e) * 0.99;
  for (let i = 0; i <= steps; i++) {
    const theta = -thetaMax + (2 * thetaMax * i) / steps;
    const rr = (a * (1 - e * e)) / (1 + e * Math.cos(theta));
    if (isNaN(rr) || !isFinite(rr)) continue;
    const x = rr * (Math.cos(theta) * p[0] + Math.sin(theta) * q[0]);
    const z = rr * (Math.cos(theta) * p[2] + Math.sin(theta) * q[2]);
    // Only add points within SOI
    const dist = Math.sqrt(x * x + z * z);
    if (dist > soiRadius) break;
    pts.push([x, z]);
  }

  return { points: pts, eccentricity: e, apoapsis, periapsis, bound };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/physics/orbit-predictor.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/physics/OrbitPredictor.ts tests/physics/orbit-predictor.test.ts
git commit -m "feat: orbit predictor — compute trajectory points from state vectors"
```

---

### Task 3: Map Full-Screen Rewrite

**Files:**
- Modify: `src/scenes/FlightScene.ts` — replace M-map section (~lines 139-206)

**Interfaces:**
- Consumes: FlightState, System (existing)
- Produces: full-screen canvas map with zoom/pan controls

- [ ] **Step 1: Replace the entire M-map block**

In `FlightScene.ts` constructor, replace lines 139-206 (from `let mapActive = false;` through the keydown listener for 'm') with:

```ts
    let mapActive = false;
    let mapZoom = 1.0;
    let mapPanX = 0;
    let mapPanY = 0;
    let mapDragStart: { x: number; y: number } | null = null;

    const mapEl = document.createElement('div');
    mapEl.style.cssText = 'position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.92);display:none;';
    const mapCanvas = document.createElement('canvas');
    mapCanvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
    mapEl.appendChild(mapCanvas);
    document.body.appendChild(mapEl);

    mapCanvas.addEventListener('wheel', (e) => {
      mapZoom *= e.deltaY > 0 ? 0.9 : 1.1;
      mapZoom = Math.max(0.2, Math.min(5, mapZoom));
    });
    mapCanvas.addEventListener('mousedown', (e) => {
      mapDragStart = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => { mapDragStart = null; });
    window.addEventListener('mousemove', (e) => {
      if (!mapDragStart) return;
      mapPanX += (e.clientX - mapDragStart.x);
      mapPanY += (e.clientY - mapDragStart.y);
      mapDragStart = { x: e.clientX, y: e.clientY };
    });

    // Touch support
    mapCanvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) mapDragStart = { x: e.touches[0]!.clientX, y: e.touches[0]!.clientY };
    });
    mapCanvas.addEventListener('touchmove', (e) => {
      if (!mapDragStart || e.touches.length !== 1) return;
      mapPanX += (e.touches[0]!.clientX - mapDragStart.x);
      mapPanY += (e.touches[0]!.clientY - mapDragStart.y);
      mapDragStart = { x: e.touches[0]!.clientX, y: e.touches[0]!.clientY };
    });

    const drawMap = () => {
      if (!mapActive) return;
      const dpr = window.devicePixelRatio || 1;
      const w = mapCanvas.clientWidth;
      const h = mapCanvas.clientHeight;
      mapCanvas.width = w * dpr;
      mapCanvas.height = h * dpr;
      const ctx = mapCanvas.getContext('2d')!;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = '#060814'; ctx.fillRect(0, 0, w, h);

      const cx = w / 2 + mapPanX;
      const cy = h / 2 + mapPanY;

      let maxRelD = 1e8;
      for (const b of this.system.bodies) {
        const dx = b.position[0] - this.state.position[0];
        const dz = b.position[2] - this.state.position[2];
        const d = Math.sqrt(dx * dx + dz * dz);
        if (d > maxRelD) maxRelD = d;
      }
      const s = Math.min(w, h) * 0.4 / maxRelD * mapZoom;

      const colors: Record<string, string> = { sun: '#ffdd44', earth: '#4fc3f7', moon: '#888', venus: '#e8a84c', mars: '#d4733a', mercury: '#aaa' };
      const sizes: Record<string, number> = { sun: 10, earth: 6, moon: 2, venus: 3, mars: 3, mercury: 3 };

      for (const b of this.system.bodies) {
        const bx = cx + (b.position[0] - this.state.position[0]) * s;
        const by = cy - (b.position[2] - this.state.position[2]) * s;
        ctx.beginPath();
        ctx.arc(bx, by, sizes[b.name] || 3, 0, Math.PI * 2);
        ctx.fillStyle = colors[b.name] || '#888';
        ctx.fill();
        ctx.font = '10px sans-serif';
        ctx.fillStyle = '#F4F5F2';
        ctx.fillText(b.name.toUpperCase(), bx + 10, by + 4);
      }

      // Rocket at center
      ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#EACD9E'; ctx.fill();

      ctx.fillStyle = 'rgba(244,245,242,0.3)';
      ctx.font = '9px sans-serif';
      ctx.fillText(`${(maxRelD / 1000).toFixed(0)} km | Zoom: ${mapZoom.toFixed(1)}x`, 10, h - 10);

      requestAnimationFrame(drawMap);
    };

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'm' || e.key === 'Tab') {
        mapActive = !mapActive;
        mapEl.style.display = mapActive ? 'block' : 'none';
        if (mapActive) requestAnimationFrame(drawMap);
        e.preventDefault();
      }
    });
```

- [ ] **Step 2: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all pass

- [ ] **Step 3: Commit**

```bash
git add src/scenes/FlightScene.ts
git commit -m "feat: full-screen map with zoom (mouse wheel) and pan (drag)"
```

---

### Task 4: Navball — 2D Canvas Orientation Indicator

**Files:**
- Modify: `src/flight/HUD.ts` — add navball canvas

**Interfaces:**
- Consumes: `FlightState`, reference body (from FlightScene)
- Produces: navball canvas rendered in HUD, updates each frame

- [ ] **Step 1: Add navball canvas to HUD**

In `HUD.ts`, add fields after existing private fields:

```ts
  private navballCanvas!: HTMLCanvasElement;
  private navballCtx!: CanvasRenderingContext2D;
```

In the `mount()` method, after the existing HTML, append navball:

```ts
    const navballDiv = document.createElement('div');
    navballDiv.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:100;';
    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 160;
    canvas.style.width = '160px';
    canvas.style.height = '160px';
    canvas.style.borderRadius = '80px';
    canvas.style.opacity = '0.8';
    navballDiv.appendChild(canvas);
    parent.appendChild(navballDiv);
    this.navballCanvas = canvas;
    this.navballCtx = canvas.getContext('2d')!;
```

- [ ] **Step 2: Add `setNavballData()` method to HUD**

```ts
  setNavballData(
    rocketDir: [number, number, number],
    velocityDir: [number, number, number],
    upDir: [number, number, number]
  ): void {
    const ctx = this.navballCtx;
    const cw = 160, ch = 160, cx = 80, cy = 80, R = 75;
    const dpr = window.devicePixelRatio || 1;
    this.navballCanvas.width = cw * dpr;
    this.navballCanvas.height = ch * dpr;
    this.navballCanvas.style.width = cw + 'px';
    this.navballCanvas.style.height = ch + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Background
    ctx.clearRect(0, 0, cw, ch);
    ctx.beginPath(); ctx.arc(cx, cy, R + 2, 0, Math.PI * 2);
    ctx.fillStyle = '#0a0a1a'; ctx.fill();

    // Horizon — split top (sky) / bottom (ground)
    const dotUp = upDir[0] * rocketDir[0] + upDir[1] * rocketDir[1] + upDir[2] * rocketDir[2];
    const horizonY = dotUp * R;

    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    // Sky half
    ctx.fillStyle = '#2244aa';
    ctx.fillRect(cx - R, cy - R - horizonY, R * 2, R + horizonY);
    // Ground half
    ctx.fillStyle = '#885522';
    ctx.fillRect(cx - R, cy - horizonY, R * 2, R + horizonY);
    // Horizon line
    ctx.beginPath();
    ctx.moveTo(cx - R, cy - horizonY);
    ctx.lineTo(cx + R, cy - horizonY);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Prograde marker (green circle)
    const projPrograde = (v: [number, number, number]) => {
      const dx = v[0] * rocketDir[0] + v[1] * rocketDir[1] + v[2] * rocketDir[2];
      // Simplified: just project velocity onto navball
      const pvx = velocityDir[0] - rocketDir[0] * (velocityDir[0] * rocketDir[0] + velocityDir[1] * rocketDir[1] + velocityDir[2] * rocketDir[2]);
      const pvy = velocityDir[1] - rocketDir[1] * (velocityDir[0] * rocketDir[0] + velocityDir[1] * rocketDir[1] + velocityDir[2] * rocketDir[2]);
      const nx = pvx * rocketDir[0] + pvy * rocketDir[2]; // simplified 2D projection
      const ny = pvx * rocketDir[1] + pvy * rocketDir[1];
      const nm = Math.sqrt(nx * nx + ny * ny) || 1;
      return { x: cx + (nx / nm) * R * 0.8, y: cy - (ny / nm) * R * 0.8 };
    };
    const { x, y } = projPrograde(rocketDir);
    ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#44FF44'; ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 2; ctx.stroke();

    // Heading dot (center)
    ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#FFAA44'; ctx.fill();

    ctx.restore();

    // Border
    ctx.beginPath(); ctx.arc(cx, cy, R + 1, 0, Math.PI * 2);
    ctx.strokeStyle = '#334466'; ctx.lineWidth = 2;
    ctx.stroke();
  }
```

- [ ] **Step 3: Call `setNavballData()` from FlightScene**

In `FlightScene.update()`, after HUD update (~line 483), add:

```ts
    // Navball data
    const rocketUp: [number, number, number] = [0, 1, 0];
    const thrustEuler = new THREE.Euler(this.rocketRotation.x, this.rocketRotation.y, this.rocketRotation.z, 'YXZ');
    const rocketFwd = new THREE.Vector3(0, 1, 0).applyEuler(thrustEuler);
    const velocityNorm = Math.sqrt(
      this.state.velocity[0] ** 2 + this.state.velocity[1] ** 2 + this.state.velocity[2] ** 2
    );
    const velDir: [number, number, number] = velocityNorm > 0.01
      ? [this.state.velocity[0] / velocityNorm, this.state.velocity[1] / velocityNorm, this.state.velocity[2] / velocityNorm]
      : [0, 1, 0];
    const refBody = getReferenceBody(this.state.position, this.system);
    const upX = this.state.position[0] - refBody.position[0];
    const upY = this.state.position[1] - refBody.position[1];
    const upZ = this.state.position[2] - refBody.position[2];
    const upNorm = Math.sqrt(upX * upX + upY * upY + upZ * upZ) || 1;
    this.hud.setNavballData(
      [rocketFwd.x, rocketFwd.y, rocketFwd.z],
      velDir,
      [upX / upNorm, upY / upNorm, upZ / upNorm]
    );
```

- [ ] **Step 4: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all pass

- [ ] **Step 5: Commit**

```bash
git add src/flight/HUD.ts src/scenes/FlightScene.ts
git commit -m "feat: navball — 2D canvas with horizon, prograde, heading"
```

---

### Task 5: Landing System — Tilt + Multi-Body

**Files:**
- Modify: `src/scenes/FlightScene.ts` — collision/landing section (~lines 354-376)

**Interfaces:**
- Consumes: `nearestBody`, `nearestDist`, `state.velocity`, `rocketGroup.rotation`
- Produces: landing with tilt check, achievements per body

- [ ] **Step 1: Update landing logic**

In `FlightScene.ts`, replace the ground collision section. Find lines ~354-376 (the section checking `vertSpeed < -15` for crash, `vertSpeed < 0` for landing).

Replace with:
```ts
      // Ground collision with tilt check
      if (nearestBody && (nearestBody as any).radius && nearestDist < (nearestBody as any).radius + 0.5 && isFinite(nearestDist)) {
        const bodyR = (nearestBody as any).radius;
        const dx = this.state.position[0] - nearestBody.position[0];
        const dy = this.state.position[1] - nearestBody.position[1];
        const dz = this.state.position[2] - nearestBody.position[2];
        const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (d > 0.001 && isFinite(d)) {
          const vertSpeed = (this.state.velocity[0] * dx + this.state.velocity[1] * dy + this.state.velocity[2] * dz) / d;
          // Tilt: angle between rocket up [0,1,0] and radial out from body
          const upDotBody = (0 * dx + 1 * dy + 0 * dz) / d;
          const tiltDeg = Math.acos(Math.abs(upDotBody)) * 180 / Math.PI;

          if (isFinite(vertSpeed) && vertSpeed < -10) {
            this.achievements.unlock('crash');
            toast.show('CRASH! Too fast!');
            this.state.velocity = [0, 0, 0];
            this.state.position = [nearestBody.position[0] + dx / d * bodyR, nearestBody.position[1] + dy / d * bodyR, nearestBody.position[2] + dz / d * bodyR];
          } else if (tiltDeg > 20) {
            this.achievements.unlock('crash');
            toast.show('CRASH! Tipped over!');
            this.state.velocity = [0, 0, 0];
            this.state.position = [nearestBody.position[0] + dx / d * bodyR, nearestBody.position[1] + dy / d * bodyR, nearestBody.position[2] + dz / d * bodyR];
          } else if (isFinite(vertSpeed) && vertSpeed < 0) {
            this.state.position = [nearestBody.position[0] + dx / d * (bodyR + 0.5), nearestBody.position[1] + dy / d * (bodyR + 0.5), nearestBody.position[2] + dz / d * (bodyR + 0.5)];
            this.state.velocity = [0, 0, 0];
            this.grounded = true;
            const bodyName = nearestBody.name;
            toast.show(`Landed on ${bodyName}.`);
            if (bodyName === 'earth') this.achievements.unlock('land_earth');
            else if (bodyName === 'moon') this.achievements.unlock('land_moon');
            else if (bodyName === 'mars') this.achievements.unlock('land_mars');
            else if (bodyName === 'venus') this.achievements.unlock('land_venus');
            else if (bodyName === 'mercury') this.achievements.unlock('land_mercury');
          }
        }
      }
```

- [ ] **Step 2: Add landing achievements**

In `Achievements.ts`, add entry for `land_moon`, `land_mars`, `land_venus`, `land_mercury` — extend the existing achievement definitions if needed. If `Achievements.unlock()` is permissive (accepts any string), no changes needed.

- [ ] **Step 3: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all pass

- [ ] **Step 4: Commit**

```bash
git add src/scenes/FlightScene.ts
git commit -m "feat: landing — tilt check + multi-body support"
```

---

### Task 6: Map Trajectory Drawing

**Files:**
- Modify: `src/scenes/FlightScene.ts` — add trajectory drawing to `drawMap()`

**Interfaces:**
- Consumes: `predictOrbit()` from Task 2, `getReferenceBody()` from Task 1, map canvas context from Task 3
- Produces: blue/yellow trajectory line on map with Ap/Pe markers

- [ ] **Step 1: Add trajectory rendering to map**

In the `drawMap()` function inside FlightScene constructor (from Task 3), after drawing the rocket icon and before the legend, add:

```ts
      // Orbit trajectory prediction
      const refBody = getReferenceBody(this.state.position, this.system);
      if (refBody && refBody.mass > 0) {
        const relPos: [number, number, number] = [
          this.state.position[0] - refBody.position[0],
          this.state.position[1] - refBody.position[1],
          this.state.position[2] - refBody.position[2],
        ];
        const prediction = predictOrbit(
          relPos,
          this.state.velocity,
          refBody.mass,
          1e11,
          360
        );

        if (prediction.points.length > 1) {
          ctx.beginPath();
          ctx.strokeStyle = prediction.bound ? '#4488CC' : '#DDAA44';
          ctx.lineWidth = 1.5;
          ctx.setLineDash(prediction.bound ? [] : [4, 4]);
          const firstX = cx + prediction.points[0]![0] * s;
          const firstY = cy - prediction.points[0]![1] * s;
          ctx.moveTo(firstX, firstY);
          for (let i = 1; i < prediction.points.length; i++) {
            const px = cx + prediction.points[i]![0] * s;
            const py = cy - prediction.points[i]![1] * s;
            ctx.lineTo(px, py);
          }
          ctx.stroke();
          ctx.setLineDash([]);

          if (prediction.bound) {
            // Ap marker
            const apX = cx + prediction.apoapsis * s;
            const apY = cy;
            ctx.fillStyle = '#DDAA44';
            ctx.font = 'bold 10px sans-serif';
            ctx.fillText('Ap', apX + 5, apY);
            // Pe marker
            const peX = cx + prediction.periapsis * s;
            const peY = cy;
            ctx.fillStyle = '#DDAA44';
            ctx.fillText('Pe', peX + 5, peY + 12);
          }
        }
      }
```

- [ ] **Step 2: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all pass

- [ ] **Step 3: Commit**

```bash
git add src/scenes/FlightScene.ts
git commit -m "feat: map trajectory — predicted orbit line with Ap/Pe markers"
```

---

## Full Test Suite

```bash
npx vitest run && npx tsc --noEmit
```

Expected: 73+ tests pass, typecheck clean.
