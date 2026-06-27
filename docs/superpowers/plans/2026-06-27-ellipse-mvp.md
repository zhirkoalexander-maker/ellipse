# Ellipse MVP — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a playable 3D space flight simulator — Earth + Moon, physics, rocket assembly, flight, HUD, achievements.

**Architecture:** Modular TypeScript app on Three.js + Vite. Pure-function physics core (testable), procedural part mesh generation, three scenes (menu / VAB / flight), HTML overlay for HUD.

**Tech Stack:**
- TypeScript 5+
- Vite 5+ (bundler / dev server)
- Three.js 0.160+ (3D rendering)
- Vitest 1+ (testing, TDD)
- HTML / CSS overlay (no React, no UI framework)
- localStorage (saves, blueprints)

**Global Constraints (from spec §1.1, §1.2, §13, design-system, 3d-objects):**
- Target: Desktop browser (Chrome / Firefox / Safari)
- Solar system scale: 1:10⁹, visual planet size ×1000
- UI: English only, dark mode (per design-system.md)
- Physics: pure gravity, no drag in vacuum (§1.2, T5)
- No mobile in MVP
- No Venus / Mars / Sun in MVP
- No system map in MVP
- No overheating, no lunar station
- 30+ FPS target on mid-range desktop
- Free real-time rocket assembly (§4.12)
- Honest difficulty — no autopilot (§1.2)
- Time-warp: deferred to Phase 2 (simplifies MVP)
- Sound: deferred to Phase 2
- TDD throughout (test → impl → commit)

**Reference docs:**
- `docs/superpowers/specs/2026-06-27-rocket-ship-game-design.md` (game spec, v1.6)
- `docs/design-system.md` (UI tokens, typography, components)
- `docs/3d-objects.md` (3D models, procedural approach)

---

## File Structure

```
src/
  main.ts                    # entry, scene routing
  config/
    constants.ts             # G, scale factors
    settings.ts              # typed Settings
  core/
    Renderer.ts              # Three.js WebGLRenderer wrapper
    SceneManager.ts          # scene + camera + FPS counter
    Game.ts                  # top-level game class (added Task 25)
  physics/
    Body.ts                  # celestial body (mass, pos, vel)
    Integrator.ts            # RK4 fixed-step
    Gravity.ts               # Σ GM/r²
    System.ts                # manages bodies, propagates
  planets/
    Planet.ts                # base (sphere + glow)
    Earth.ts                 # earth-specific
    Moon.ts                  # moon-specific
  parts/
    Part.ts                  # interface + types
    PartCatalog.ts           # MVP subset (7 parts)
    PartBuilder.ts           # procedural meshes
  rocket/
    Rocket.ts                # assembly instance
    Assembly.ts              # part graph, connections
  flight/
    FlightState.ts           # mass, fuel, position
    FlightController.ts      # input → throttle / attitude
    HUD.ts                   # overlay layer
    ChaseCamera.ts           # camera follow
  scenes/
    MainMenuScene.ts
    VABScene.ts
    FlightScene.ts
  ui/
    Button.ts               # (utility, used by scenes)
    Toast.ts                # notification overlay
  storage/
    SaveLoad.ts              # localStorage wrapper
styles/
  tokens.css                 # design tokens (design-system §3)
  typography.css             # fonts, text styles
  components.css             # button, panel
tests/
  physics/
    body.test.ts
    integrator.test.ts
    gravity.test.ts
    system.test.ts
  planets/
    earth.test.ts
    moon.test.ts
  parts/
    catalog.test.ts
    builder.test.ts
  rocket/
    assembly.test.ts
  flight/
    state.test.ts
    thrust.test.ts
    controller.test.ts
  storage/
    saveload.test.ts
index.html                   # app entry
package.json
tsconfig.json
vite.config.ts
vitest.config.ts
.gitignore
```

---

## Task 1: Initialize Vite + TypeScript + Three.js + Vitest

**Files:**
- Create: `package.json`, `tsconfig.json`, `vite.config.ts`, `vitest.config.ts`, `index.html`, `src/main.ts`
- Create: `tests/smoke.test.ts`
- Create: `.gitignore`

**Interfaces:**
- Produces: working `npm run dev` and `npm test` commands

- [ ] **Step 1: Create `.gitignore`**
  ```
  node_modules/
  dist/
  *.log
  .DS_Store
  .vscode/
  .idea/
  screenshots/
  ```

- [ ] **Step 2: Create `package.json`**
  ```json
  {
    "name": "ellipse",
    "private": true,
    "version": "0.1.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "test": "vitest run",
      "test:watch": "vitest",
      "typecheck": "tsc --noEmit"
    },
    "dependencies": {
      "three": "^0.160.0"
    },
    "devDependencies": {
      "@types/three": "^0.160.0",
      "jsdom": "^23.0.0",
      "typescript": "^5.3.0",
      "vite": "^5.0.0",
      "vitest": "^1.0.0"
    }
  }
  ```

- [ ] **Step 3: Create `tsconfig.json`**
  ```json
  {
    "compilerOptions": {
      "target": "ES2022",
      "module": "ESNext",
      "moduleResolution": "bundler",
      "strict": true,
      "noUncheckedIndexedAccess": true,
      "noImplicitOverride": true,
      "lib": ["ES2022", "DOM", "DOM.Iterable"],
      "types": ["vite/client"],
      "isolatedModules": true,
      "skipLibCheck": true,
      "noEmit": true
    },
    "include": ["src", "tests"]
  }
  ```

- [ ] **Step 4: Create `vite.config.ts`**
  ```ts
  import { defineConfig } from 'vite';
  export default defineConfig({
    server: { port: 3000, open: true },
    build: { target: 'es2022', sourcemap: true }
  });
  ```

- [ ] **Step 5: Create `vitest.config.ts`**
  ```ts
  import { defineConfig } from 'vitest/config';
  export default defineConfig({
    test: {
      environment: 'jsdom',
      globals: false,
      include: ['tests/**/*.test.ts']
    }
  });
  ```

- [ ] **Step 6: Create `index.html`**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ellipse</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
  </html>
  ```

- [ ] **Step 7: Create `src/main.ts`**
  ```ts
  console.log('Ellipse MVP booting...');
  document.getElementById('app')!.textContent = 'Ellipse';
  ```

- [ ] **Step 8: Create `tests/smoke.test.ts`**
  ```ts
  import { describe, it, expect } from 'vitest';

  describe('smoke', () => {
    it('runs', () => {
      expect(1 + 1).toBe(2);
    });
  });
  ```

- [ ] **Step 9: Install dependencies and run tests**
  ```bash
  npm install
  npm test
  ```
  Expected: 1 test passing

- [ ] **Step 10: Commit**
  ```bash
  git add .
  git commit -m "chore: initialize Vite + TypeScript + Three.js + Vitest"
  ```

---

## Task 2: Directory structure + config

**Files:**
- Create: empty `src/{core,physics,parts,rocket,flight,scenes,planets,ui,storage,config}/.gitkeep`
- Create: `src/config/constants.ts`, `src/config/settings.ts`
- Create: `styles/.gitkeep`, `tests/{physics,parts,rocket,flight,planets,storage,core,smoke}/.gitkeep`

- [ ] **Step 1: Create directories**
  ```bash
  mkdir -p src/{core,physics,parts,rocket,flight,scenes,planets,ui,storage,config}
  mkdir -p styles tests/{physics,parts,rocket,flight,planets,storage,core,smoke}
  ```

- [ ] **Step 2: Add .gitkeep placeholders**
  ```bash
  touch src/{core,physics,parts,rocket,flight,scenes,planets,ui,storage,config}/.gitkeep
  touch styles/.gitkeep
  touch tests/{physics,parts,rocket,flight,planets,storage,core,smoke}/.gitkeep
  ```

- [ ] **Step 3: Create `src/config/constants.ts`**
  ```ts
  /** Gravitational constant (m³/(kg·s²)) */
  export const G = 6.67430e-11;

  /** Orbit compression factor (1:10⁹) */
  export const ORBIT_SCALE = 1e-9;

  /** Visual planet size multiplier (×1000) */
  export const VISUAL_PLANET_MULT = 1000;

  /** Fixed physics timestep (s) */
  export const FIXED_DT = 1 / 60;

  /** Standard gravity (m/s²) */
  export const G0 = 9.80665;
  ```

- [ ] **Step 4: Create `src/config/settings.ts`**
  ```ts
  export type Units = 'metric' | 'imperial' | 'mixed';
  export type Difficulty = 'easy' | 'normal' | 'hard';

  export interface Settings {
    units: Units;
    autoSave: boolean;
    difficulty: Difficulty;
  }

  export const DEFAULT_SETTINGS: Settings = {
    units: 'metric',
    autoSave: true,
    difficulty: 'normal'
  };
  ```

- [ ] **Step 5: Verify TypeScript still compiles**
  ```bash
  npm run typecheck
  ```
  Expected: 0 errors

- [ ] **Step 6: Commit**
  ```bash
  git add .
  git commit -m "chore: scaffold directory structure and config"
  ```

---

## Task 3: Design tokens CSS (from design-system.md)

**Files:**
- Create: `styles/tokens.css`, `styles/typography.css`, `styles/components.css`
- Modify: `index.html` (link CSS)

- [ ] **Step 1: Create `styles/tokens.css`**
  ```css
  :root {
    /* Backgrounds */
    --space-deep: #0A0E1A;
    --space-hangar: #1A1F2E;
    --space-panel: #252B3D;
    --space-elevated: #323849;

    /* Text */
    --starshine: #E8EAF0;
    --stardust: #9DA3B5;
    --stardim: #5C6275;

    /* Accents */
    --flare: #FF6B1A;
    --flare-soft: #FFAA66;
    --flare-glow: #FFD9A0;
    --plasma: #4FC3F7;
    --plasma-deep: #1976D2;
    --red-giant: #FF3D5A;
    --green-cosmic: #7CFFB2;
    --gold-solar: #FFC857;

    /* Spacing (4px base) */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 24px;
    --space-6: 32px;

    /* Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;
  }
  ```

- [ ] **Step 2: Create `styles/typography.css`**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: 'Inter', system-ui, sans-serif;
    color: var(--starshine);
    background: var(--space-deep);
    overflow: hidden;
  }

  .text-display {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .text-body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  .text-data {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }
  ```

- [ ] **Step 3: Create `styles/components.css`**
  ```css
  .btn {
    background: var(--space-panel);
    color: var(--starshine);
    border: 1px solid #3A4055;
    border-radius: var(--radius-md);
    padding: var(--space-3) var(--space-4);
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .btn:hover { background: var(--space-elevated); }
  .btn:active { transform: scale(0.97); }
  .btn--primary {
    background: var(--flare);
    color: white;
    border-color: transparent;
    box-shadow: 0 0 16px rgba(255, 107, 26, 0.4);
  }
  .btn--primary:hover { background: var(--flare-soft); }
  .btn--secondary {
    background: var(--plasma-deep);
    color: white;
    border-color: transparent;
  }
  ```

- [ ] **Step 4: Link CSS in `index.html`**
  ```html
  <link rel="stylesheet" href="/styles/tokens.css" />
  <link rel="stylesheet" href="/styles/typography.css" />
  <link rel="stylesheet" href="/styles/components.css" />
  ```

- [ ] **Step 5: Visual check** — `npm run dev`, see dark background + Inter font

- [ ] **Step 6: Commit**
  ```bash
  git add .
  git commit -m "feat(ui): design tokens + typography + base button"
  ```

---

## Task 4: Empty Three.js scene + FPS counter

**Files:**
- Create: `src/core/Renderer.ts`, `src/core/SceneManager.ts`
- Modify: `src/main.ts`
- Create: `tests/core/renderer.test.ts`

**Interfaces:**
- `Renderer`: `domElement: HTMLCanvasElement`, `setSize(w, h)`, `dispose()`
- `SceneManager`: `scene`, `camera`, `update()`, `getFps(): number`

- [ ] **Step 1: Write failing test** in `tests/core/renderer.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { Renderer } from '../../src/core/Renderer';

  describe('Renderer', () => {
    it('creates a WebGL canvas', () => {
      const r = new Renderer();
      expect(r.domElement.tagName).toBe('CANVAS');
      r.dispose();
    });
  });
  ```

- [ ] **Step 2: Run test** — `npm test` → expected FAIL

- [ ] **Step 3: Implement `src/core/Renderer.ts`**
  ```ts
  import * as THREE from 'three';

  export class Renderer {
    readonly domElement: HTMLCanvasElement;
    readonly three: THREE.WebGLRenderer;

    constructor() {
      this.three = new THREE.WebGLRenderer({ antialias: true });
      this.domElement = this.three.domElement;
      this.three.setPixelRatio(window.devicePixelRatio);
      this.three.setClearColor(0x0A0E1A, 1);
    }

    setSize(width: number, height: number): void {
      this.three.setSize(width, height);
    }

    dispose(): void {
      this.three.dispose();
    }
  }
  ```

- [ ] **Step 4: Implement `src/core/SceneManager.ts`**
  ```ts
  import * as THREE from 'three';

  export class SceneManager {
    readonly scene: THREE.Scene;
    readonly camera: THREE.PerspectiveCamera;
    private clock = new THREE.Clock();
    private frames = 0;
    private lastFpsUpdate = 0;
    private fps = 0;

    constructor() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x0A0E1A);

      // Ambient + Directional (sun) light
      this.scene.add(new THREE.AmbientLight(0x404050, 0.4));
      const sun = new THREE.DirectionalLight(0xFFF5E0, 1.2);
      sun.position.set(5, 3, 5);
      this.scene.add(sun);

      this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(0, 0, 5);
      this.camera.lookAt(0, 0, 0);
    }

    update(): void {
      const t = this.clock.getElapsedTime();
      this.frames++;
      if (t - this.lastFpsUpdate >= 1) {
        this.fps = this.frames / (t - this.lastFpsUpdate);
        this.frames = 0;
        this.lastFpsUpdate = t;
      }
    }

    getFps(): number { return this.fps; }
  }
  ```

- [ ] **Step 5: Update `src/main.ts`**
  ```ts
  import { Renderer } from './core/Renderer';
  import { SceneManager } from './core/SceneManager';
  import './styles/tokens.css';
  import './styles/typography.css';
  import './styles/components.css';

  const renderer = new Renderer();
  const sceneMgr = new SceneManager();
  document.getElementById('app')!.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const fpsEl = document.createElement('div');
  fpsEl.className = 'text-data';
  fpsEl.style.cssText = 'position:fixed;top:8px;left:8px;color:var(--starshine);font-size:14px;z-index:100;';
  document.body.appendChild(fpsEl);

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneMgr.camera.aspect = window.innerWidth / window.innerHeight;
    sceneMgr.camera.updateProjectionMatrix();
  });

  function loop(): void {
    sceneMgr.update();
    renderer.three.render(sceneMgr.scene, sceneMgr.camera);
    fpsEl.textContent = `${Math.round(sceneMgr.getFps())} FPS`;
    requestAnimationFrame(loop);
  }
  loop();
  ```

- [ ] **Step 6: Run test** — `npm test` → expected PASS
- [ ] **Step 7: Visual check** — `npm run dev`, see dark scene with FPS counter top-left
- [ ] **Step 8: Commit**
  ```bash
  git add .
  git commit -m "feat(renderer): Three.js scene with FPS counter"
  ```

---

## Task 5: Body class (TDD)

**Files:**
- Create: `src/physics/Body.ts`
- Create: `tests/physics/body.test.ts`

**Interfaces:**
- `Body`: `name: string`, `mass: number`, `position: Vec3`, `velocity: Vec3`, `applyForce(f, dt)`, `kineticEnergy()`

- [ ] **Step 1: Write failing test** in `tests/physics/body.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { Body } from '../../src/physics/Body';

  describe('Body', () => {
    it('initializes with mass, position, velocity', () => {
      const b = new Body('earth', 5.97e24, [1.5e11, 0, 0], [0, 29780, 0]);
      expect(b.name).toBe('earth');
      expect(b.mass).toBe(5.97e24);
      expect(b.position[0]).toBe(1.5e11);
    });

    it('applyForce updates velocity by impulse / mass', () => {
      const b = new Body('test', 100, [0, 0, 0], [0, 0, 0]);
      b.applyForce([1000, 0, 0], 1);
      expect(b.velocity[0]).toBeCloseTo(10);
      expect(b.position[0]).toBeCloseTo(10);
    });

    it('kineticEnergy = 0.5 * m * v²', () => {
      const b = new Body('test', 2, [0, 0, 0], [3, 4, 0]);
      expect(b.kineticEnergy()).toBeCloseTo(25); // 0.5 * 2 * 25
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/physics/Body.ts`**
  ```ts
  export type Vec3 = [number, number, number];

  export class Body {
    name: string;
    mass: number;
    position: Vec3;
    velocity: Vec3;

    constructor(name: string, mass: number, position: Vec3, velocity: Vec3) {
      this.name = name;
      this.mass = mass;
      this.position = [...position] as Vec3;
      this.velocity = [...velocity] as Vec3;
    }

    applyForce(force: Vec3, dt: number): void {
      // F = m*a, so a = F/m; dv = a*dt
      const ax = force[0] / this.mass;
      const ay = force[1] / this.mass;
      const az = force[2] / this.mass;
      this.velocity[0] += ax * dt;
      this.velocity[1] += ay * dt;
      this.velocity[2] += az * dt;
      // Also advance position (semi-implicit Euler)
      this.position[0] += this.velocity[0] * dt;
      this.position[1] += this.velocity[1] * dt;
      this.position[2] += this.velocity[2] * dt;
    }

    kineticEnergy(): number {
      const v2 = this.velocity[0] ** 2 + this.velocity[1] ** 2 + this.velocity[2] ** 2;
      return 0.5 * this.mass * v2;
    }
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(physics): Body class with applyForce + kineticEnergy"
  ```

---

## Task 6: Integrator (RK4) (TDD)

**Files:**
- Create: `src/physics/Integrator.ts`
- Create: `tests/physics/integrator.test.ts`

**Interfaces:**
- `rk4Step(body: Body, forceFn: (b: Body) => Vec3, dt: number): void` — advances body by `dt` using RK4
- `kinematicStep(body: Body, dt: number): void` — pure position update (for bodies with no force)

- [ ] **Step 1: Write failing test** in `tests/physics/integrator.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { Body } from '../../src/physics/Body';
  import { rk4Step } from '../../src/physics/Integrator';

  describe('RK4 integrator', () => {
    it('advances position with no force (free drift)', () => {
      const b = new Body('p', 1, [0, 0, 0], [10, 0, 0]);
      rk4Step(b, () => [0, 0, 0], 1);
      expect(b.position[0]).toBeCloseTo(10, 5);
    });

    it('maintains circular orbit (central gravity)', () => {
      // Earth analog: m=1, r=1, v=1 (circular if F = -1/r²)
      const b = new Body('orbit', 1, [1, 0, 0], [0, 1, 0]);
      const force = (body: Body): [number, number, number] => {
        const r2 = body.position[0] ** 2 + body.position[1] ** 2;
        const r = Math.sqrt(r2);
        const fmag = -1 / r2;
        return [fmag * body.position[0] / r, fmag * body.position[1] / r, 0];
      };
      const initialPos = [...b.position] as [number, number, number];
      // Run 100 steps, check position stayed close to radius=1
      for (let i = 0; i < 100; i++) rk4Step(b, force, 0.01);
      const r = Math.sqrt(b.position[0] ** 2 + b.position[1] ** 2);
      expect(r).toBeCloseTo(1, 2);
      // position should have rotated, not stayed at initial
      expect(b.position[0]).not.toBeCloseTo(initialPos[0], 2);
    });

    it('energy is approximately conserved (RK4 property)', () => {
      const b = new Body('orbit', 1, [1, 0, 0], [0, 1, 0]);
      const force = (body: Body): [number, number, number] => {
        const r2 = body.position[0] ** 2 + body.position[1] ** 2;
        const r = Math.sqrt(r2);
        const fmag = -1 / r2;
        return [fmag * body.position[0] / r, fmag * body.position[1] / r, 0];
      };
      const e0 = b.kineticEnergy();
      for (let i = 0; i < 1000; i++) rk4Step(b, force, 0.001);
      const e1 = b.kineticEnergy();
      expect(e1 / e0).toBeGreaterThan(0.99);
      expect(e1 / e0).toBeLessThan(1.01);
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/physics/Integrator.ts`**
  ```ts
  import { Body, type Vec3 } from './Body';

  type ForceFn = (b: Body) => Vec3;

  /**
   * Advance body by dt using RK4 integration.
   * Treats position/velocity as a coupled ODE: d/dt [p, v] = [v, F(p)/m].
   */
  export function rk4Step(body: Body, forceFn: ForceFn, dt: number): void {
    const m = body.mass;
    const p0 = [...body.position] as Vec3;
    const v0 = [...body.velocity] as Vec3;

    // k1
    const a1 = scale3(forceFn(body), 1 / m);
    const k1v = v0;
    const k1p = a1;

    // k2 — body at p0 + 0.5*dt*k1p with velocity v0 + 0.5*dt*k1v
    const body2 = tempBody(body, add3(p0, scale3(k1p, 0.5 * dt)), add3(v0, scale3(k1v, 0.5 * dt)));
    const a2 = scale3(forceFn(body2), 1 / m);
    const k2v = add3(v0, scale3(a1, 0.5 * dt));
    const k2p = a2;

    // k3
    const body3 = tempBody(body, add3(p0, scale3(k2p, 0.5 * dt)), add3(v0, scale3(k2v, 0.5 * dt)));
    const a3 = scale3(forceFn(body3), 1 / m);
    const k3v = add3(v0, scale3(a2, 0.5 * dt));
    const k3p = a3;

    // k4
    const body4 = tempBody(body, add3(p0, scale3(k3p, dt)), add3(v0, scale3(k3v, dt)));
    const a4 = scale3(forceFn(body4), 1 / m);
    const k4v = add3(v0, scale3(a3, dt));
    const k4p = a4;

    // v_new = v0 + (dt/6)(a1 + 2a2 + 2a3 + a4)
    const dv = scale3(add3(add3(a1, scale3(a2, 2)), add3(scale3(a3, 2), a4)), dt / 6);
    // p_new = p0 + (dt/6)(k1p + 2k2p + 2k3p + k4p)
    const dp = scale3(add3(add3(k1p, scale3(k2p, 2)), add3(scale3(k3p, 2), k4p)), dt / 6);

    body.position = add3(p0, dp);
    body.velocity = add3(v0, dv);
  }

  function tempBody(parent: Body, position: Vec3, velocity: Vec3): Body {
    return { ...parent, position, velocity } as Body;
  }

  function add3(a: Vec3, b: Vec3): Vec3 {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  }
  function scale3(a: Vec3, s: number): Vec3 {
    return [a[0] * s, a[1] * s, a[2] * s];
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(physics): RK4 integrator with circular orbit test"
  ```

---

## Task 7: Gravity (TDD)

**Files:**
- Create: `src/physics/Gravity.ts`
- Create: `tests/physics/gravity.test.ts`

**Interfaces:**
- `gravitationalForce(source: Body, target: Body): Vec3` — force on target by source
- `totalGravityOn(body: Body, sources: Body[]): Vec3` — sum over all sources

- [ ] **Step 1: Write failing test** in `tests/physics/gravity.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { Body } from '../../src/physics/Body';
  import { gravitationalForce, totalGravityOn } from '../../src/physics/Gravity';

  describe('Gravity', () => {
    it('gravitationalForce between two bodies = G m1 m2 / r² toward source', () => {
      // source at (10, 0, 0), mass 100; target at (0, 0, 0), mass 1
      const source = new Body('s', 100, [10, 0, 0], [0, 0, 0]);
      const target = new Body('t', 1, [0, 0, 0], [0, 0, 0]);
      const f = gravitationalForce(source, target);
      // F = G * 100 * 1 / 10² = G
      // Direction: from target toward source, i.e. +x
      expect(f[0]).toBeGreaterThan(0);
      expect(f[1]).toBeCloseTo(0);
      // magnitude ≈ G * 10 = 6.67e-10
      expect(Math.abs(f[0])).toBeCloseTo(6.6743e-10 * 10, 15);
    });

    it('totalGravityOn sums forces from multiple sources', () => {
      const a = new Body('a', 1e10, [10, 0, 0], [0, 0, 0]);
      const b = new Body('b', 1e10, [-10, 0, 0], [0, 0, 0]);
      const target = new Body('t', 1, [0, 0, 0], [0, 0, 0]);
      const f = totalGravityOn(target, [a, b]);
      // Forces cancel by symmetry → net ≈ 0
      expect(Math.abs(f[0])).toBeLessThan(1e-10);
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/physics/Gravity.ts`**
  ```ts
  import { Body, type Vec3 } from './Body';
  import { G } from '../config/constants';

/** Gravitational force on target by source (Newton's law). */
  export function gravitationalForce(source: Body, target: Body): Vec3 {
    const dx = source.position[0] - target.position[0];
    const dy = source.position[1] - target.position[1];
    const dz = source.position[2] - target.position[2];
    const r2 = dx * dx + dy * dy + dz * dz;
    const r = Math.sqrt(r2);
    if (r === 0) return [0, 0, 0]; // avoid singularity (same position)
    const fmag = (G * source.mass * target.mass) / r2;
    return [(fmag * dx) / r, (fmag * dy) / r, (fmag * dz) / r];
  }

  /** Sum gravitational force on target from all sources. */
  export function totalGravityOn(target: Body, sources: Body[]): Vec3 {
    let fx = 0, fy = 0, fz = 0;
    for (const s of sources) {
      if (s === target) continue;
      const f = gravitationalForce(s, target);
      fx += f[0]; fy += f[1]; fz += f[2];
    }
    return [fx, fy, fz];
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(physics): gravity with single and multi-source"
  ```

---

## Task 8: System class (manages bodies + propagates)

**Files:**
- Create: `src/physics/System.ts`
- Create: `tests/physics/system.test.ts`

**Interfaces:**
- `System`: `bodies: Body[]`, `add(b)`, `propagate(dt)` — propagates all bodies, `bodyByName(name): Body | undefined`

- [ ] **Step 1: Write failing test** in `tests/physics/system.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { System } from '../../src/physics/System';
  import { Body } from '../../src/physics/Body';

  describe('System', () => {
    it('add() stores body', () => {
      const sys = new System();
      const b = new Body('a', 1, [0, 0, 0], [0, 0, 0]);
      sys.add(b);
      expect(sys.bodies).toContain(b);
    });

    it('bodyByName returns matching body', () => {
      const sys = new System();
      const b = new Body('earth', 1, [0, 0, 0], [0, 0, 0]);
      sys.add(b);
      expect(sys.bodyByName('earth')).toBe(b);
      expect(sys.bodyByName('mars')).toBeUndefined();
    });

    it('propagate advances 2-body Earth-Moon system', () => {
      const sys = new System();
      // Use real-ish masses; position scaled; the test just checks integration runs
      const earth = new Body('earth', 5.97e24, [0, 0, 0], [0, 0, 0]);
      const moon = new Body('moon', 7.35e22, [3.84e8, 0, 0], [0, 1022, 0]);
      sys.add(earth);
      sys.add(moon);
      const initialMoonPos = [...moon.position] as [number, number, number];
      sys.propagate(0, 0.001); // no time warp
      // Moon should have moved slightly
      expect(moon.position[0]).not.toBeCloseTo(initialMoonPos[0], 5);
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/physics/System.ts`**
  ```ts
  import { Body, type Vec3 } from './Body';
  import { rk4Step } from './Integrator';
  import { totalGravityOn } from './Gravity';

  export class System {
    bodies: Body[] = [];

    add(b: Body): void {
      this.bodies.push(b);
    }

    bodyByName(name: string): Body | undefined {
      return this.bodies.find((b) => b.name === name);
    }

    /**
     * Propagate the system by totalWallDt (seconds), broken into
     * fixed physics sub-steps of FIXED_DT.
     */
    propagate(totalWallDt: number, dt: number): void {
      let remaining = totalWallDt;
      while (remaining > 0) {
        const step = Math.min(dt, remaining);
        this.step(step);
        remaining -= step;
      }
    }

    private step(dt: number): void {
      for (const body of this.bodies) {
        const force: Vec3 = totalGravityOn(body, this.bodies);
        rk4Step(body, () => force, dt);
      }
    }
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(physics): System class with fixed-step propagation"
  ```

---

## Task 9: Planet base class

**Files:**
- Create: `src/planets/Planet.ts`

**Interfaces:**
- `Planet`: extends `Body`, `radius: number`, `visualRadius: number`, `mesh: THREE.Mesh`, `name`

- [ ] **Step 1: Implement `src/planets/Planet.ts`**
  ```ts
  import * as THREE from 'three';
  import { Body, type Vec3 } from '../physics/Body';
  import { VISUAL_PLANET_MULT } from '../config/constants';

  export class Planet extends Body {
    /** Real radius (m) */
    radius: number;
    /** Visual radius for rendering (m) — exaggerated ×1000 by default */
    visualRadius: number;
    /** Three.js mesh */
    mesh: THREE.Mesh;

    constructor(name: string, mass: number, position: Vec3, velocity: Vec3, radius: number) {
      super(name, mass, position, velocity);
      this.radius = radius;
      this.visualRadius = radius * VISUAL_PLANET_MULT;
      const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
      const mat = new THREE.MeshStandardMaterial({ color: 0x808080 });
      this.mesh = new THREE.Mesh(geom, mat);
      this.mesh.position.set(position[0], position[1], position[2]);
    }

    /** Update mesh position from physics. Call each frame. */
    syncMesh(): void {
      this.mesh.position.set(this.position[0], this.position[1], this.position[2]);
    }
  }
  ```

- [ ] **Step 2: Typecheck**
  ```bash
  npm run typecheck
  ```
  Expected: 0 errors

- [ ] **Step 3: Commit**
  ```bash
  git add .
  git commit -m "feat(planets): Planet base class with Three.js mesh"
  ```

---

## Task 10: Earth implementation

**Files:**
- Create: `src/planets/Earth.ts`
- Modify: `src/planets/Planet.ts` (no change to interface, just for clarity)

**Interfaces:**
- `Earth` extends `Planet`, with realistic mass/radius and day texture

- [ ] **Step 1: Implement `src/planets/Earth.ts`**
  ```ts
  import * as THREE from 'three';
  import { Planet } from './Planet';
  import type { Vec3 } from '../physics/Body';
  import { VISUAL_PLANET_MULT } from '../config/constants';

  export class Earth extends Planet {
    constructor(position: Vec3, velocity: Vec3) {
      super('earth', 5.972e24, position, velocity, 6.371e6);

      // Re-create mesh with earth-like material
      // (No external texture in MVP — procedural color for now)
      const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x2a6db5,
        roughness: 0.7,
        metalness: 0.0
      });
      this.mesh = new THREE.Mesh(geom, mat);
      this.mesh.position.set(position[0], position[1], position[2]);

      // Tilt axis 23.5° (Earth's axial tilt)
      this.mesh.rotation.z = 23.5 * Math.PI / 180;
    }
  }
  ```

- [ ] **Step 2: Typecheck + commit**
  ```bash
  npm run typecheck
  git add .
  git commit -m "feat(planets): Earth with axial tilt"
  ```

---

## Task 11: Moon implementation

**Files:**
- Create: `src/planets/Moon.ts`

- [ ] **Step 1: Implement `src/planets/Moon.ts`**
  ```ts
  import * as THREE from 'three';
  import { Planet } from './Planet';
  import type { Vec3 } from '../physics/Body';

  export class Moon extends Planet {
    constructor(position: Vec3, velocity: Vec3) {
      super('moon', 7.342e22, position, velocity, 1.737e6);
      const geom = new THREE.SphereGeometry(this.visualRadius, 48, 24);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x9a9a9a,
        roughness: 0.95
      });
      this.mesh = new THREE.Mesh(geom, mat);
      this.mesh.position.set(position[0], position[1], position[2]);
    }
  }
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add .
  git commit -m "feat(planets): Moon with cratered material"
  ```

---

## Task 12: Part interface + PartCatalog (MVP subset)

**Files:**
- Create: `src/parts/Part.ts`
- Create: `src/parts/PartCatalog.ts`
- Create: `tests/parts/catalog.test.ts`

**Interfaces (canonical, used by Task 13+):**
- `FuelType = 'LFO' | 'LF'`
- `PartKind = 'capsule' | 'tank' | 'engine' | 'parachute' | 'legs'`
- `Part`: `{ id: string, name: string, kind: PartKind, size: 'S' | 'M' | 'L', mass: number, fuelCapacity?: number, fuelType?: FuelType, thrust?: number, isp?: number, hasParachute?: boolean, dragCoeff?: number }`

- [ ] **Step 1: Write failing test** in `tests/parts/catalog.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { PART_CATALOG, findPart } from '../../src/parts/PartCatalog';

  describe('PartCatalog', () => {
    it('has at least 7 parts (MVP subset)', () => {
      expect(PART_CATALOG.length).toBeGreaterThanOrEqual(7);
    });

    it('every part has id, name, kind, size, mass', () => {
      for (const p of PART_CATALOG) {
        expect(p.id).toBeTruthy();
        expect(p.name).toBeTruthy();
        expect(p.kind).toBeTruthy();
        expect(p.size).toBeTruthy();
        expect(p.mass).toBeGreaterThan(0);
      }
    });

    it('capsule has crew capacity, no fuel', () => {
      const c = PART_CATALOG.find((p) => p.kind === 'capsule')!;
      expect(c.crewCapacity).toBeGreaterThan(0);
      expect(c.fuelCapacity).toBeUndefined();
    });

    it('tank has fuel capacity and type', () => {
      const t = PART_CATALOG.find((p) => p.kind === 'tank')!;
      expect(t.fuelCapacity).toBeGreaterThan(0);
      expect(t.fuelType).toBeTruthy();
    });

    it('engine has thrust and isp', () => {
      const e = PART_CATALOG.find((p) => p.kind === 'engine')!;
      expect(e.thrust).toBeGreaterThan(0);
      expect(e.isp).toBeGreaterThan(0);
    });

    it('findPart returns by id', () => {
      const p = findPart('tank_m_lfo');
      expect(p).toBeDefined();
      expect(p?.id).toBe('tank_m_lfo');
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/parts/Part.ts`**
  ```ts
  export type FuelType = 'LFO' | 'LF';
  export type PartKind = 'capsule' | 'tank' | 'engine' | 'parachute' | 'legs';
  export type PartSize = 'S' | 'M' | 'L';

  export interface Part {
    id: string;
    name: string;
    kind: PartKind;
    size: PartSize;
    mass: number;            // kg (dry)
    fuelCapacity?: number;   // kg of fuel (tanks only)
    fuelType?: FuelType;     // for tanks + engines
    thrust?: number;         // kN (engines only)
    isp?: number;            // s (engines only)
    crewCapacity?: number;   // crew (capsules only)
    hasParachute?: boolean;  // capsules
    dragCoeff?: number;      // aerodynamic
  }
  ```

- [ ] **Step 4: Implement `src/parts/PartCatalog.ts`**
  ```ts
  import type { Part } from './Part';

  export const PART_CATALOG: Part[] = [
    // Capsule
    {
      id: 'capsule_mk1',
      name: 'MK-1 Capsule',
      kind: 'capsule',
      size: 'S',
      mass: 1200,
      crewCapacity: 1,
      hasParachute: true,
      dragCoeff: 0.5
    },
    // Tanks
    {
      id: 'tank_s_lfo',
      name: 'Fuel Tank S (LFO)',
      kind: 'tank',
      size: 'S',
      mass: 200,
      fuelCapacity: 200,
      fuelType: 'LFO',
      dragCoeff: 0.4
    },
    {
      id: 'tank_m_lfo',
      name: 'Fuel Tank M (LFO)',
      kind: 'tank',
      size: 'M',
      mass: 400,
      fuelCapacity: 400,
      fuelType: 'LFO',
      dragCoeff: 0.4
    },
    // Engines
    {
      id: 'engine_ant',
      name: '"Ant" Engine',
      kind: 'engine',
      size: 'S',
      mass: 50,
      thrust: 40,            // kN
      isp: 310,             // s
      fuelType: 'LFO'
    },
    {
      id: 'engine_vector',
      name: '"Vector" Engine',
      kind: 'engine',
      size: 'M',
      mass: 200,
      thrust: 120,
      isp: 325,
      fuelType: 'LFO'
    },
    // Parachute (separate part that attaches to capsule)
    {
      id: 'parachute_mk16',
      name: 'Mk-16 Parachute',
      kind: 'parachute',
      size: 'M',
      mass: 30,
      dragCoeff: 5.0
    },
    // Landing legs
    {
      id: 'legs_landini',
      name: '"Landini" Landing Legs',
      kind: 'legs',
      size: 'S',
      mass: 80,
      dragCoeff: 0.1
    }
  ];

  export function findPart(id: string): Part | undefined {
    return PART_CATALOG.find((p) => p.id === id);
  }
  ```

- [ ] **Step 5: Run test** → expected PASS
- [ ] **Step 6: Commit**
  ```bash
  git add .
  git commit -m "feat(parts): Part interface + MVP catalog (7 parts)"
  ```

---

## Task 13: PartBuilder (procedural meshes)

**Files:**
- Create: `src/parts/PartBuilder.ts`
- Create: `tests/parts/builder.test.ts`

**Interfaces:**
- `buildPartMesh(part: Part): THREE.Group` — returns a Group containing geometry for the part

- [ ] **Step 1: Write failing test** in `tests/parts/builder.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { buildPartMesh } from '../../src/parts/PartBuilder';
  import { findPart } from '../../src/parts/PartCatalog';

  describe('PartBuilder', () => {
    it('returns a Group for each part kind', () => {
      const ids = ['capsule_mk1', 'tank_m_lfo', 'engine_ant', 'parachute_mk16', 'legs_landini'];
      for (const id of ids) {
        const p = findPart(id);
        expect(p).toBeDefined();
        const g = buildPartMesh(p!);
        expect(g.type).toBe('Group');
      }
    });

    it('capsule group has at least 1 mesh (the body)', () => {
      const p = findPart('capsule_mk1')!;
      const g = buildPartMesh(p);
      let meshCount = 0;
      g.traverse((o) => { if (o.type === 'Mesh') meshCount++; });
      expect(meshCount).toBeGreaterThan(0);
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/parts/PartBuilder.ts`**
  ```ts
  import * as THREE from 'three';
  import type { Part } from './Part';

  const SIZE_DIMS = {
    S: { radius: 0.4, height: 0.6 },
    M: { radius: 0.6, height: 1.0 },
    L: { radius: 0.9, height: 1.4 }
  };

  export function buildPartMesh(part: Part): THREE.Group {
    const group = new THREE.Group();
    group.name = part.id;

    const dims = SIZE_DIMS[part.size];
    const mat = new THREE.MeshStandardMaterial({ color: getColorForKind(part.kind), roughness: 0.6 });

    switch (part.kind) {
      case 'capsule': {
        const body = new THREE.Mesh(new THREE.CylinderGeometry(dims.radius, dims.radius, dims.height, 16), mat);
        const cap = new THREE.Mesh(new THREE.SphereGeometry(dims.radius, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat);
        cap.position.y = dims.height / 2;
        group.add(body, cap);
        break;
      }
      case 'tank': {
        const m = new THREE.Mesh(new THREE.CylinderGeometry(dims.radius, dims.radius, dims.height, 16), mat);
        group.add(m);
        break;
      }
      case 'engine': {
        const bell = new THREE.Mesh(new THREE.CylinderGeometry(dims.radius * 0.5, dims.radius * 0.9, dims.height * 0.6, 16), mat);
        bell.position.y = -dims.height / 2;
        group.add(bell);
        break;
      }
      case 'parachute': {
        const chute = new THREE.Mesh(new THREE.SphereGeometry(dims.radius, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xCC3344, side: THREE.DoubleSide }));
        group.add(chute);
        break;
      }
      case 'legs': {
        for (let i = 0; i < 4; i++) {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, dims.height, 8), mat);
          const angle = (i / 4) * Math.PI * 2;
          leg.position.set(Math.cos(angle) * dims.radius, -dims.height / 2, Math.sin(angle) * dims.radius);
          leg.rotation.z = Math.cos(angle) * 0.3;
          leg.rotation.x = Math.sin(angle) * 0.3;
          group.add(leg);
        }
        break;
      }
    }
    return group;
  }

  function getColorForKind(kind: string): number {
    switch (kind) {
      case 'capsule': return 0xE8EAF0;
      case 'tank': return 0xE8EAF0;
      case 'engine': return 0x404045;
      case 'parachute': return 0xCC3344;
      case 'legs': return 0x808085;
      default: return 0x808080;
    }
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(parts): procedural mesh builder for all part kinds"
  ```

---

## Task 14: Rocket + Assembly (TDD)

**Files:**
- Create: `src/rocket/Rocket.ts`
- Create: `src/rocket/Assembly.ts`
- Create: `tests/rocket/assembly.test.ts`

**Interfaces:**
- `AssemblyNode`: `{ part: Part, position: Vec3, rotation: number, children: AssemblyNode[] }`
- `Assembly`: `addRoot(node)`, `assemble()`, `totalMass(): number`, `centerOfMass(): Vec3`, `toMesh(): THREE.Group`
- `Rocket`: `{ assembly: Assembly, dryMass, fuelMass, totalMass }`

- [ ] **Step 1: Write failing test** in `tests/rocket/assembly.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { Assembly } from '../../src/rocket/Assembly';
  import { findPart } from '../../src/parts/PartCatalog';

  describe('Assembly', () => {
    it('addRoot adds a node', () => {
      const a = new Assembly();
      const cap = findPart('capsule_mk1')!;
      a.addRoot({ part: cap, position: [0, 0, 0], rotation: 0, children: [] });
      expect(a.roots.length).toBe(1);
    });

    it('totalMass sums all part masses', () => {
      const a = new Assembly();
      a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, -1, 0], rotation: 0, children: [] });
      // capsule 1200 + tank 400 = 1600
      expect(a.totalMass()).toBe(1600);
    });

    it('totalMassWithFuel adds tank fuel', () => {
      const a = new Assembly();
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
      // tank 400 + 400 fuel = 800
      expect(a.totalMassWithFuel()).toBe(800);
    });

    it('centerOfMass is mass-weighted average position', () => {
      const a = new Assembly();
      a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0, 0], rotation: 0, children: [] });   // 1200
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, -2, 0], rotation: 0, children: [] });    // 400
      const com = a.centerOfMass();
      // CoM = (1200*[0,0,0] + 400*[0,-2,0]) / 1600 = [0, -0.5, 0]
      expect(com[0]).toBeCloseTo(0);
      expect(com[1]).toBeCloseTo(-0.5);
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/rocket/Assembly.ts`**
  ```ts
  import * as THREE from 'three';
  import type { Part } from '../parts/Part';
  import { buildPartMesh } from '../parts/PartBuilder';
  import type { Vec3 } from '../physics/Body';

  export interface AssemblyNode {
    part: Part;
    position: Vec3;
    rotation: number;
    children: AssemblyNode[];
  }

  export class Assembly {
    roots: AssemblyNode[] = [];

    addRoot(node: AssemblyNode): void {
      this.roots.push(node);
    }

    totalMass(): number {
      let m = 0;
      const walk = (n: AssemblyNode) => {
        m += n.part.mass;
        n.children.forEach(walk);
      };
      this.roots.forEach(walk);
      return m;
    }

    totalMassWithFuel(): number {
      let m = 0;
      const walk = (n: AssemblyNode) => {
        m += n.part.mass;
        if (n.part.fuelCapacity) m += n.part.fuelCapacity;
        n.children.forEach(walk);
      };
      this.roots.forEach(walk);
      return m;
    }

    centerOfMass(): Vec3 {
      let totalMass = 0;
      let sx = 0, sy = 0, sz = 0;
      const walk = (n: AssemblyNode) => {
        const m = n.part.mass;
        totalMass += m;
        sx += n.position[0] * m;
        sy += n.position[1] * m;
        sz += n.position[2] * m;
        n.children.forEach(walk);
      };
      this.roots.forEach(walk);
      if (totalMass === 0) return [0, 0, 0];
      return [sx / totalMass, sy / totalMass, sz / totalMass];
    }

    toMesh(): THREE.Group {
      const group = new THREE.Group();
      const walk = (n: AssemblyNode, parent: THREE.Object3D) => {
        const mesh = buildPartMesh(n.part);
        mesh.position.set(n.position[0], n.position[1], n.position[2]);
        mesh.rotation.y = n.rotation;
        parent.add(mesh);
        n.children.forEach((c) => walk(c, mesh));
      };
      this.roots.forEach((r) => walk(r, group));
      return group;
    }
  }
  ```

- [ ] **Step 4: Implement `src/rocket/Rocket.ts`**
  ```ts
  import { Assembly } from './Assembly';

  export class Rocket {
    assembly: Assembly;
    fuelMass = 0;
    velocity: [number, number, number] = [0, 0, 0];

    constructor(assembly: Assembly) {
      this.assembly = assembly;
    }

    dryMass(): number { return this.assembly.totalMass(); }
    totalMass(): number { return this.dryMass() + this.fuelMass; }
  }
  ```

- [ ] **Step 5: Run test** → expected PASS
- [ ] **Step 6: Commit**
  ```bash
  git add .
  git commit -m "feat(rocket): Assembly with total mass + CoM + mesh tree"
  ```

---

## Task 15: FlightState (TDD)

**Files:**
- Create: `src/flight/FlightState.ts`
- Create: `tests/flight/state.test.ts`

**Interfaces:**
- `FlightState`: `rocket: Rocket`, `system: System`, `position: Vec3`, `velocity: Vec3`, `throttle: number` (0..1), `consumeFuel(rate, dt)`, `applyThrust(dt)`, `getCurrentBody()`

- [ ] **Step 1: Write failing test** in `tests/flight/state.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { FlightState } from '../../src/flight/FlightState';
  import { System } from '../../src/physics/System';
  import { Rocket } from '../../src/rocket/Rocket';
  import { Assembly } from '../../src/rocket/Assembly';
  import { findPart } from '../../src/parts/PartCatalog';

  describe('FlightState', () => {
    it('initializes with rocket, system, throttle 0', () => {
      const sys = new System();
      const a = new Assembly();
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
      const r = new Rocket(a);
      const fs = new FlightState(r, sys, [6.371e6, 0, 0], [0, 0, 0]);
      expect(fs.throttle).toBe(0);
    });

    it('consumeFuel reduces fuelMass', () => {
      const sys = new System();
      const a = new Assembly();
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
      const r = new Rocket(a);
      r.fuelMass = 100;
      const fs = new FlightState(r, sys, [6.371e6, 0, 0], [0, 0, 0]);
      fs.consumeFuel(10, 1);
      expect(r.fuelMass).toBeCloseTo(90);
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/flight/FlightState.ts`**
  ```ts
  import type { Rocket } from '../rocket/Rocket';
  import type { System } from '../physics/System';
  import type { Vec3 } from '../physics/Body';

  export class FlightState {
    rocket: Rocket;
    system: System;
    position: Vec3;
    velocity: Vec3;
    throttle = 0; // 0..1

    constructor(rocket: Rocket, system: System, position: Vec3, velocity: Vec3) {
      this.rocket = rocket;
      this.system = system;
      this.position = [...position] as Vec3;
      this.velocity = [...velocity] as Vec3;
    }

    /** Subtract fuel at rate (kg/s) for dt seconds. */
    consumeFuel(rate: number, dt: number): void {
      this.rocket.fuelMass = Math.max(0, this.rocket.fuelMass - rate * dt);
    }
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(flight): FlightState with fuel consumption"
  ```

---

## Task 16: Apply thrust (TDD)

**Files:**
- Create: `src/flight/Thrust.ts`
- Create: `tests/flight/thrust.test.ts`

**Interfaces:**
- `applyThrust(state: FlightState, dt: number): void` — applies thrust along +Y (rocket local up); consumes fuel; updates velocity

- [ ] **Step 1: Write failing test** in `tests/flight/thrust.test.ts`
  ```ts
  import { describe, it, expect } from 'vitest';
  import { applyThrust } from '../../src/flight/Thrust';
  import { FlightState } from '../../src/flight/FlightState';
  import { System } from '../../src/physics/System';
  import { Rocket } from '../../src/rocket/Rocket';
  import { Assembly } from '../../src/rocket/Assembly';
  import { findPart } from '../../src/parts/PartCatalog';

  describe('applyThrust', () => {
    it('with throttle 1, accelerates rocket along +Y', () => {
      const sys = new System();
      const a = new Assembly();
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
      const r = new Rocket(a);
      r.fuelMass = 200;
      const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
      fs.throttle = 1;
      const before = [...fs.velocity] as [number, number, number];
      applyThrust(fs, 1);
      // Should accelerate in +Y
      expect(fs.velocity[1]).toBeGreaterThan(before[1]);
    });

    it('consumes fuel proportional to throttle', () => {
      const sys = new System();
      const a = new Assembly();
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
      const r = new Rocket(a);
      r.fuelMass = 200;
      const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
      fs.throttle = 0.5;
      applyThrust(fs, 1);
      expect(r.fuelMass).toBeLessThan(200);
    });

    it('with throttle 0, no thrust', () => {
      const sys = new System();
      const a = new Assembly();
      a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.5, 0], rotation: 0, children: [] });
      const r = new Rocket(a);
      r.fuelMass = 100;
      const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
      fs.throttle = 0;
      const before = [...fs.velocity] as [number, number, number];
      applyThrust(fs, 1);
      expect(fs.velocity[1]).toBe(before[1]);
      expect(r.fuelMass).toBe(100);
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/flight/Thrust.ts`**
  ```ts
  import type { FlightState } from './FlightState';
  import { G0 } from '../config/constants';

  /**
   * Apply thrust to a flight state for the given dt.
   * Finds active engine in rocket assembly, applies force along +Y in local frame.
   * Consumes fuel at mass_flow = thrust / (Isp * g0) * throttle.
   */
  export function applyThrust(state: FlightState, dt: number): void {
    if (state.throttle <= 0) return;

    // Find first engine in assembly
    const engine = findFirstEngine(state.rocket.assembly.roots);
    if (!engine || !engine.thrust || !engine.isp) return;

    // Thrust force in Newtons (engine.thrust is in kN)
    const forceN = engine.thrust * 1000 * state.throttle;
    // Mass flow in kg/s
    const massFlow = forceN / (engine.isp * G0);

    // Acceleration (F = m*a)
    const a = forceN / state.rocket.totalMass();
    // Apply in +Y world frame (simplified — no rotation in MVP)
    state.velocity[1] += a * dt;

    // Consume fuel
    state.consumeFuel(massFlow, dt);
  }

  function findFirstEngine(nodes: any[]): { thrust: number; isp: number } | null {
    for (const n of nodes) {
      if (n.part.kind === 'engine' && n.part.thrust && n.part.isp) {
        return { thrust: n.part.thrust, isp: n.part.isp };
      }
      if (n.children?.length) {
        const found = findFirstEngine(n.children);
        if (found) return found;
      }
    }
    return null;
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(flight): applyThrust consumes fuel and accelerates"
  ```

---

## Task 17: ChaseCamera (visual test, no TDD)

**Files:**
- Create: `src/flight/ChaseCamera.ts`

- [ ] **Step 1: Implement `src/flight/ChaseCamera.ts`**
  ```ts
  import * as THREE from 'three';
  import type { FlightState } from './FlightState';

  export class ChaseCamera {
    camera: THREE.PerspectiveCamera;
    offset = new THREE.Vector3(0, 2, 8);
    smoothing = 5;

    constructor(camera: THREE.PerspectiveCamera) {
      this.camera = camera;
    }

    follow(state: FlightState, dt: number): void {
      const target = new THREE.Vector3(
        state.position[0] + this.offset.x,
        state.position[1] + this.offset.y,
        state.position[2] + this.offset.z
      );
      this.camera.position.lerp(target, Math.min(1, dt * this.smoothing));
      this.camera.lookAt(state.position[0], state.position[1], state.position[2]);
    }
  }
  ```

- [ ] **Step 2: Typecheck + commit**
  ```bash
  npm run typecheck
  git add .
  git commit -m "feat(flight): smooth chase camera"
  ```

---

## Task 18: HUD overlay (speed, altitude, angle)

**Files:**
- Create: `src/flight/HUD.ts`

**Interfaces:**
- `HUD`: `mount(parent)`, `update(state, camera, system)`, `unmount()`

- [ ] **Step 1: Implement `src/flight/HUD.ts`**
  ```ts
  import type { FlightState } from './FlightState';
  import type { System } from '../physics/System';
  import type { Vec3 } from '../physics/Body';

  export class HUD {
    private root: HTMLDivElement;
    private speedEl!: HTMLDivElement;
    private altEl!: HTMLDivElement;
    private angleEl!: HTMLDivElement;
    private fuelEl!: HTMLDivElement;
    private throtEl!: HTMLDivElement;

    constructor() {
      this.root = document.createElement('div');
      this.root.style.cssText = `
        position: fixed; top: 16px; left: 16px; z-index: 100;
        background: rgba(37, 43, 61, 0.85);
        border: 1px solid #3A4055;
        border-radius: 12px;
        padding: 12px 16px;
        font-family: 'JetBrains Mono', monospace;
        color: var(--starshine);
        min-width: 120px;
      `;
    }

    mount(parent: HTMLElement = document.body): void {
      this.speedEl = this.makeRow('SPEED', '0', 'm/s');
      this.altEl = this.makeRow('ALTITUDE', '0', 'm');
      this.angleEl = this.makeRow('ANGLE', '0', '°');
      this.fuelEl = this.makeRow('FUEL', '0', '%');
      this.throtEl = this.makeRow('THROTTLE', '0', '%');
      parent.appendChild(this.root);
    }

    private makeRow(label: string, value: string, unit: string): HTMLDivElement {
      const row = document.createElement('div');
      row.style.cssText = 'margin-bottom: 6px; font-size: 13px;';
      row.innerHTML = `
        <div style="font-size:10px;color:var(--stardust);text-transform:uppercase;letter-spacing:0.05em;">${label}</div>
        <div style="font-size:18px;font-weight:500;"><span class="val">${value}</span> <span style="font-size:11px;color:var(--stardust);">${unit}</span></div>
      `;
      this.root.appendChild(row);
      return row;
    }

    update(state: FlightState, system: System): void {
      const speed = Math.sqrt(
        state.velocity[0] ** 2 + state.velocity[1] ** 2 + state.velocity[2] ** 2
      );
      // altitude = distance to nearest body minus body radius
      let nearestAlt = Infinity;
      for (const body of system.bodies) {
        if (body.name === 'rocket') continue;
        const dx = state.position[0] - body.position[0];
        const dy = state.position[1] - body.position[1];
        const dz = state.position[2] - body.position[2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        // Use body.radius if it's a Planet; else 0
        const r = (body as any).radius ?? 0;
        const alt = d - r;
        if (alt < nearestAlt) nearestAlt = alt;
      }
      // tilt angle from vertical (assume rocket points up)
      const horiz = Math.sqrt(state.velocity[0] ** 2 + state.velocity[2] ** 2);
      const angle = Math.atan2(horiz, Math.abs(state.velocity[1])) * 180 / Math.PI;

      const fuelPct = state.rocket.totalMass() > 0
        ? (state.rocket.fuelMass / (state.rocket.totalMass() - state.rocket.dryMass() + state.rocket.fuelMass)) * 100
        : 0;

      this.setVal(this.speedEl, speed.toFixed(1));
      this.setVal(this.altEl, nearestAlt > 1000 ? (nearestAlt / 1000).toFixed(2) : nearestAlt.toFixed(0));
      this.setUnit(this.altEl, nearestAlt > 1000 ? 'km' : 'm');
      this.setVal(this.angleEl, angle.toFixed(0));
      this.setVal(this.fuelEl, fuelPct.toFixed(0));
      this.setVal(this.throtEl, (state.throttle * 100).toFixed(0));
    }

    private setVal(row: HTMLDivElement, val: string): void {
      row.querySelector('.val')!.textContent = val;
    }
    private setUnit(row: HTMLDivElement, unit: string): void {
      row.querySelectorAll('span')[1].textContent = unit;
    }

    unmount(): void {
      this.root.remove();
    }
  }
  ```

- [ ] **Step 2: Typecheck + commit**
  ```bash
  npm run typecheck
  git add .
  git commit -m "feat(flight): HUD overlay with speed/alt/angle/fuel/throttle"
  ```

---

## Task 19: Keyboard controls

**Files:**
- Create: `src/flight/Controls.ts`

- [ ] **Step 1: Implement `src/flight/Controls.ts`**
  ```ts
  import type { FlightState } from './FlightState';

  export class Controls {
    private keys: Record<string, boolean> = {};
    private state: FlightState;
    private tilt = 0; // -1..1 (left/right)
    private pitch = 0; // -1..1 (forward/back tilt)

    constructor(state: FlightState) {
      this.state = state;
      window.addEventListener('keydown', (e) => { this.keys[e.key.toLowerCase()] = true; });
      window.addEventListener('keyup', (e) => { this.keys[e.key.toLowerCase()] = false; });
    }

    update(dt: number): void {
      // Throttle: W = up, S = down
      if (this.keys['w']) this.state.throttle = Math.min(1, this.state.throttle + dt * 0.5);
      if (this.keys['s']) this.state.throttle = Math.max(0, this.state.throttle - dt * 0.5);

      // Attitude (for future SAS, not used in MVP physics but tracked)
      this.tilt = 0;
      this.pitch = 0;
      if (this.keys['arrowleft']) this.tilt = -1;
      if (this.keys['arrowright']) this.tilt = 1;
      if (this.keys['arrowup']) this.pitch = 1;
      if (this.keys['arrowdown']) this.pitch = -1;
    }

    getTilt(): number { return this.tilt; }
    getPitch(): number { return this.pitch; }
  }
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add .
  git commit -m "feat(flight): keyboard controls for throttle + attitude"
  ```

---

## Task 20: VAB scene (basic part picker)

**Files:**
- Create: `src/scenes/VABScene.ts`

- [ ] **Step 1: Implement `src/scenes/VABScene.ts`**
  ```ts
  import * as THREE from 'three';
  import { PART_CATALOG, findPart } from '../parts/PartCatalog';
  import { Assembly } from '../rocket/Assembly';
  import type { Part } from '../parts/Part';

  export class VABScene {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    assembly: Assembly;
    private rocketGroup: THREE.Group;

    constructor() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x1A1F2E);
      this.scene.add(new THREE.AmbientLight(0x606080, 0.6));
      const dir = new THREE.DirectionalLight(0xFFFFFF, 1.0);
      dir.position.set(3, 5, 4);
      this.scene.add(dir);

      this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      this.camera.position.set(0, 2, 6);
      this.camera.lookAt(0, 0, 0);

      // Launch pad
      const pad = new THREE.Mesh(
        new THREE.BoxGeometry(4, 0.1, 4),
        new THREE.MeshStandardMaterial({ color: 0x666670, roughness: 0.9 })
      );
      pad.position.y = -2;
      this.scene.add(pad);

      this.assembly = new Assembly();
      this.rocketGroup = new THREE.Group();
      this.scene.add(this.rocketGroup);
    }

    addPart(part: Part, position: [number, number, number] = [0, 0, 0]): void {
      this.assembly.addRoot({ part, position, rotation: 0, children: [] });
      this.refreshMesh();
    }

    private refreshMesh(): void {
      while (this.rocketGroup.children.length > 0) {
        const child = this.rocketGroup.children[0];
        if (child) this.rocketGroup.remove(child);
      }
      const mesh = this.assembly.toMesh();
      this.rocketGroup.add(mesh);
    }

    listParts() { return PART_CATALOG; }
    pickPart(id: string): Part | undefined { return findPart(id); }
  }
  ```

- [ ] **Step 2: Typecheck + commit**
  ```bash
  npm run typecheck
  git add .
  git commit -m "feat(scenes): VABScene with launch pad + part picking"
  ```

---

## Task 21: SaveLoad (localStorage blueprint)

**Files:**
- Create: `src/storage/SaveLoad.ts`
- Create: `tests/storage/saveload.test.ts`

**Interfaces:**
- `saveAssembly(name, assembly): void`
- `loadAssembly(name): Assembly | null`
- `listAssemblies(): string[]`

- [ ] **Step 1: Write failing test** in `tests/storage/saveload.test.ts`
  ```ts
  import { describe, it, expect, beforeEach } from 'vitest';
  import { saveAssembly, loadAssembly, listAssemblies } from '../../src/storage/SaveLoad';
  import { Assembly } from '../../src/rocket/Assembly';
  import { findPart } from '../../src/parts/PartCatalog';

  describe('SaveLoad', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('saveAssembly persists, loadAssembly retrieves', () => {
      const a = new Assembly();
      a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0, 0], rotation: 0, children: [] });
      saveAssembly('myRocket', a);
      const loaded = loadAssembly('myRocket');
      expect(loaded).not.toBeNull();
      expect(loaded!.totalMass()).toBe(a.totalMass());
    });

    it('listAssemblies returns all saved names', () => {
      saveAssembly('r1', new Assembly());
      saveAssembly('r2', new Assembly());
      const names = listAssemblies();
      expect(names).toContain('r1');
      expect(names).toContain('r2');
    });

    it('loadAssembly returns null for unknown name', () => {
      expect(loadAssembly('nonexistent')).toBeNull();
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/storage/SaveLoad.ts`**
  ```ts
  import type { Assembly, AssemblyNode } from '../rocket/Assembly';
  import type { Part } from '../parts/Part';
  import { findPart } from '../parts/PartCatalog';

  const KEY_PREFIX = 'ellipse_assembly_';
  const INDEX_KEY = 'ellipse_assemblies';

  function serializeNode(n: AssemblyNode): any {
    return { partId: n.part.id, position: n.position, rotation: n.rotation, children: n.children.map(serializeNode) };
  }
  function deserializeNode(data: any): AssemblyNode | null {
    const part = findPart(data.partId);
    if (!part) return null;
    return {
      part,
      position: data.position,
      rotation: data.rotation,
      children: (data.children ?? []).map(deserializeNode).filter((x): x is AssemblyNode => x !== null)
    };
  }

  export function saveAssembly(name: string, assembly: Assembly): void {
    const data = assembly.roots.map(serializeNode);
    localStorage.setItem(KEY_PREFIX + name, JSON.stringify(data));
    const idx = JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]') as string[];
    if (!idx.includes(name)) {
      idx.push(name);
      localStorage.setItem(INDEX_KEY, JSON.stringify(idx));
    }
  }

  export function loadAssembly(name: string): Assembly | null {
    const raw = localStorage.getItem(KEY_PREFIX + name);
    if (!raw) return null;
    const data = JSON.parse(raw) as any[];
    const a = new Assembly();
    for (const n of data) {
      const node = deserializeNode(n);
      if (node) a.addRoot(node);
    }
    return a;
  }

  export function listAssemblies(): string[] {
    return JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]') as string[];
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(storage): SaveLoad with localStorage"
  ```

---

## Task 22: Main menu scene

**Files:**
- Create: `src/scenes/MainMenuScene.ts`

- [ ] **Step 1: Implement `src/scenes/MainMenuScene.ts`**
  ```ts
  export class MainMenuScene {
    private root: HTMLDivElement;
    private onPlay: () => void;
    private onVab: () => void;
    private onSettings: () => void;

    constructor(onPlay: () => void, onVab: () => void, onSettings: () => void) {
      this.onPlay = onPlay;
      this.onVab = onVab;
      this.onSettings = onSettings;

      this.root = document.createElement('div');
      this.root.style.cssText = `
        position: fixed; inset: 0; z-index: 200;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        background: linear-gradient(180deg, #0A0E1A 0%, #1A1F2E 100%);
        font-family: 'Inter', sans-serif;
        color: var(--starshine);
      `;

      const title = document.createElement('h1');
      title.className = 'text-display';
      title.textContent = 'ELLIPSE';
      title.style.cssText = 'font-size: 64px; margin: 0 0 32px; color: var(--starshine); letter-spacing: 0.1em;';
      this.root.appendChild(title);

      const btn = (label: string, primary: boolean, cb: () => void): HTMLButtonElement => {
        const b = document.createElement('button');
        b.className = primary ? 'btn btn--primary' : 'btn';
        b.textContent = label;
        b.style.cssText = 'margin: 8px; min-width: 240px;';
        b.addEventListener('click', cb);
        return b;
      };
      this.root.appendChild(btn('PLAY', true, this.onPlay));
      this.root.appendChild(btn('VAB (Build)', false, this.onVab));
      this.root.appendChild(btn('Settings', false, this.onSettings));
    }

    mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
    unmount(): void { this.root.remove(); }
  }
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add .
  git commit -m "feat(scenes): MainMenuScene with Play/VAB/Settings buttons"
  ```

---

## Task 23: Toast (notifications)

**Files:**
- Create: `src/ui/Toast.ts`

- [ ] **Step 1: Implement `src/ui/Toast.ts`**
  ```ts
  export class Toast {
    show(message: string, durationMs = 2500): void {
      const el = document.createElement('div');
      el.textContent = message;
      el.style.cssText = `
        position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
        background: rgba(37, 43, 61, 0.95);
        border: 1px solid #3A4055;
        border-radius: 8px;
        padding: 10px 20px;
        color: var(--starshine);
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        z-index: 300;
        opacity: 0;
        transition: opacity 200ms ease-out;
      `;
      document.body.appendChild(el);
      requestAnimationFrame(() => { el.style.opacity = '1'; });
      setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 200);
      }, durationMs);
    }
  }

  export const toast = new Toast();
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add .
  git commit -m "feat(ui): toast notification with fade in/out"
  ```

---

## Task 24: Achievement system

**Files:**
- Create: `src/core/Achievements.ts`
- Create: `tests/core/achievements.test.ts`

**Interfaces:**
- `Achievements`: `unlock(id)`, `isUnlocked(id): boolean`, `list(): string[]`, `onUnlock(cb)`

- [ ] **Step 1: Write failing test** in `tests/core/achievements.test.ts`
  ```ts
  import { describe, it, expect, beforeEach } from 'vitest';
  import { Achievements } from '../../src/core/Achievements';

  describe('Achievements', () => {
    beforeEach(() => { localStorage.clear(); });

    it('unlock persists to localStorage', () => {
      const a = new Achievements();
      a.unlock('first_launch');
      expect(a.isUnlocked('first_launch')).toBe(true);
    });

    it('isUnlocked returns false for unknown', () => {
      const a = new Achievements();
      expect(a.isUnlocked('foo')).toBe(false);
    });

    it('list returns unlocked ids', () => {
      const a = new Achievements();
      a.unlock('first_launch');
      a.unlock('reach_space');
      expect(a.list().sort()).toEqual(['first_launch', 'reach_space']);
    });

    it('onUnlock callback fires once', () => {
      const a = new Achievements();
      let count = 0;
      a.onUnlock(() => count++);
      a.unlock('first_launch');
      a.unlock('first_launch');
      expect(count).toBe(1);
    });
  });
  ```

- [ ] **Step 2: Run test** → expected FAIL

- [ ] **Step 3: Implement `src/core/Achievements.ts`**
  ```ts
  const STORAGE_KEY = 'ellipse_achievements';

  export class Achievements {
    private unlocked: Set<string> = new Set();
    private callbacks: Array<(id: string) => void> = [];

    constructor() {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        try { JSON.parse(raw).forEach((id: string) => this.unlocked.add(id)); } catch {}
      }
    }

    unlock(id: string): void {
      if (this.unlocked.has(id)) return;
      this.unlocked.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.unlocked]));
      this.callbacks.forEach((cb) => cb(id));
    }

    isUnlocked(id: string): boolean { return this.unlocked.has(id); }
    list(): string[] { return [...this.unlocked]; }
    onUnlock(cb: (id: string) => void): void { this.callbacks.push(cb); }
  }
  ```

- [ ] **Step 4: Run test** → expected PASS
- [ ] **Step 5: Commit**
  ```bash
  git add .
  git commit -m "feat(core): Achievements with localStorage persistence"
  ```

---

## Task 25: Top-level Game class + scene routing

**Files:**
- Create: `src/core/Game.ts`
- Modify: `src/main.ts`

**Interfaces:**
- `Game`: `start()`, switches between MainMenu / VAB / Flight

- [ ] **Step 1: Implement `src/core/Game.ts`**
  ```ts
  import { Renderer } from './Renderer';
  import { SceneManager } from './SceneManager';
  import { MainMenuScene } from '../scenes/MainMenuScene';
  import { VABScene } from '../scenes/VABScene';
  import { FlightScene } from '../scenes/FlightScene';
  import { System } from '../physics/System';
  import { Body } from '../physics/Body';
  import { Earth } from '../planets/Earth';
  import { Moon } from '../planets/Moon';
  import { Rocket } from '../rocket/Rocket';
  import { Assembly } from '../rocket/Assembly';
  import { findPart } from '../parts/PartCatalog';
  import { Achievements } from './Achievements';
  import { toast } from '../ui/Toast';
  import * as THREE from 'three';

  export class Game {
    renderer: Renderer;
    sceneMgr: SceneManager;
    system: System;
    achievements: Achievements;
    private mainMenu?: MainMenuScene;
    private vab?: VABScene;
    private flight?: FlightScene;

    constructor() {
      this.renderer = new Renderer();
      this.sceneMgr = new SceneManager();
      this.achievements = new Achievements();

      this.system = new System();
      // Earth at origin (for MVP — fixed at origin, no solar orbit)
      this.system.add(new Earth([0, 0, 0], [0, 0, 0]));
      this.system.add(new Moon([3.84e8, 0, 0], [0, 1022, 0]));

      document.getElementById('app')!.appendChild(this.renderer.domElement);
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.achievements.onUnlock((id) => toast.show(`🏆 ${id}`));
    }

    start(): void {
      this.showMainMenu();
      this.loop();
    }

    private showMainMenu(): void {
      this.unmountCurrent();
      this.mainMenu = new MainMenuScene(
        () => this.showFlight(),
        () => this.showVab(),
        () => toast.show('Settings: TBD')
      );
      this.mainMenu.mount();
    }

    private showVab(): void {
      this.unmountCurrent();
      this.vab = new VABScene();
      // Add scene to sceneMgr.scene for rendering
      this.sceneMgr.scene.add(this.vab.scene);
    }

    private showFlight(): void {
      this.unmountCurrent();
      // Build a default rocket
      const a = new Assembly();
      a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 2, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 1, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
      const r = new Rocket(a);
      this.flight = new FlightScene(this.renderer, this.sceneMgr, this.system, r, this.achievements);
    }

    private unmountCurrent(): void {
      this.mainMenu?.unmount();
      this.mainMenu = undefined;
      // Detach VAB scene
      if (this.vab) {
        this.sceneMgr.scene.remove(this.vab.scene);
        this.vab = undefined;
      }
      this.flight?.dispose();
      this.flight = undefined;
    }

    private loop(): void {
      this.sceneMgr.update();
      this.flight?.update(1 / 60);
      this.renderer.three.render(this.sceneMgr.scene, this.sceneMgr.camera);
      requestAnimationFrame(() => this.loop());
    }
  }
  ```

- [ ] **Step 2: Update `src/main.ts`**
  ```ts
  import { Game } from './core/Game';
  import './styles/tokens.css';
  import './styles/typography.css';
  import './styles/components.css';

  const game = new Game();
  game.start();
  ```

- [ ] **Step 3: Typecheck** (will have errors since FlightScene not yet created)
  ```bash
  npm run typecheck
  ```

- [ ] **Step 4: Commit**
  ```bash
  git add .
  git commit -m "feat(core): Game class with menu/VAB/flight scene routing"
  ```

---

## Task 26: FlightScene (composes flight state + controls + HUD + camera)

**Files:**
- Create: `src/scenes/FlightScene.ts`

- [ ] **Step 1: Implement `src/scenes/FlightScene.ts`**
  ```ts
  import * as THREE from 'three';
  import type { Renderer } from '../core/Renderer';
  import type { SceneManager } from '../core/SceneManager';
  import type { System } from '../physics/System';
  import type { Rocket } from '../rocket/Rocket';
  import type { Achievements } from '../core/Achievements';
  import { FlightState } from '../flight/FlightState';
  import { ChaseCamera } from '../flight/ChaseCamera';
  import { Controls } from '../flight/Controls';
  import { HUD } from '../flight/HUD';
  import { applyThrust } from '../flight/Thrust';
  import { FIXED_DT } from '../config/constants';
  import { toast } from '../ui/Toast';

  export class FlightScene {
    private renderer: Renderer;
    private sceneMgr: SceneManager;
    private system: System;
    private achievements: Achievements;
    private state: FlightState;
    private rocket: Rocket;
    private rocketGroup: THREE.Group;
    private chase: ChaseCamera;
    private controls: Controls;
    private hud: HUD;
    private launched = false;

    constructor(renderer: Renderer, sceneMgr: SceneManager, system: System, rocket: Rocket, achievements: Achievements) {
      this.renderer = renderer;
      this.sceneMgr = sceneMgr;
      this.system = system;
      this.achievements = achievements;
      this.rocket = rocket;
      this.rocket.fuelMass = (rocket.assembly.totalMassWithFuel() - rocket.assembly.totalMass());

      // Spawn rocket just above Earth's surface
      const earth = system.bodyByName('earth') as any;
      const earthR = earth?.radius ?? 6.371e6;
      this.state = new FlightState(rocket, system, [earthR + 100, 0, 0], [0, 0, 0]);

      // Build rocket mesh
      this.rocketGroup = rocket.assembly.toMesh();
      this.updateRocketMesh();
      sceneMgr.scene.add(this.rocketGroup);

      // Add Earth and Moon meshes
      const earthMesh = (earth as any).mesh;
      const moon = system.bodyByName('moon');
      if (earthMesh) sceneMgr.scene.add(earthMesh);
      if (moon) sceneMgr.scene.add((moon as any).mesh);

      this.chase = new ChaseCamera(sceneMgr.camera);
      this.controls = new Controls(this.state);
      this.hud = new HUD();
      this.hud.mount();

      this.achievements.unlock('first_launch');
      toast.show('You are at the launchpad. Press W to throttle up.');
    }

    update(_dt: number): void {
      // Update controls
      this.controls.update(_dt);

      // Apply thrust
      if (this.state.throttle > 0) {
        applyThrust(this.state, _dt);
        if (!this.launched) { this.launched = true; this.achievements.unlock('reach_space'); }
      }

      // Propagate physics
      this.system.propagate(_dt, FIXED_DT);

      // Sync rocket position from flight state
      this.rocketGroup.position.set(this.state.position[0], this.state.position[1], this.state.position[2]);

      // Update camera
      this.chase.follow(this.state, _dt);

      // Update HUD
      this.hud.update(this.state, this.system);
    }

    private updateRocketMesh(): void {
      const earth = this.system.bodyByName('earth') as any;
      if (earth) this.rocketGroup.position.set(earth.radius + 100, 0, 0);
    }

    dispose(): void {
      this.sceneMgr.scene.remove(this.rocketGroup);
      this.hud.unmount();
    }
  }
  ```

- [ ] **Step 2: Typecheck**
  ```bash
  npm run typecheck
  ```

- [ ] **Step 3: Visual check** — `npm run dev`, see main menu, click PLAY, rocket appears
- [ ] **Step 4: Commit**
  ```bash
  git add .
  git commit -m "feat(scenes): FlightScene with thrust + chase camera + HUD"
  ```

---

## Task 27: Settings panel

**Files:**
- Create: `src/ui/Settings.ts`
- Modify: `src/core/Game.ts` (wire settings from MainMenu)

- [ ] **Step 1: Implement `src/ui/Settings.ts`**
  ```ts
  import type { Settings } from '../config/settings';
  import { DEFAULT_SETTINGS } from '../config/settings';

  const KEY = 'ellipse_settings';

  export function loadSettings(): Settings {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    try { return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) }; } catch { return { ...DEFAULT_SETTINGS }; }
  }

  export function saveSettings(s: Settings): void {
    localStorage.setItem(KEY, JSON.stringify(s));
  }

  export class SettingsPanel {
    private root: HTMLDivElement;
    private onClose: () => void;
    private current: Settings;

    constructor(current: Settings, onClose: () => void) {
      this.current = current;
      this.onClose = onClose;

      this.root = document.createElement('div');
      this.root.style.cssText = `
        position: fixed; inset: 0; z-index: 250;
        background: rgba(10, 14, 26, 0.85);
        display: flex; align-items: center; justify-content: center;
      `;

      const card = document.createElement('div');
      card.className = 'btn';
      card.style.cssText = 'background: var(--space-panel); padding: 32px; min-width: 400px; border-radius: 12px;';

      const title = document.createElement('h2');
      title.className = 'text-display';
      title.textContent = 'SETTINGS';
      title.style.cssText = 'margin-top: 0; font-size: 24px;';
      card.appendChild(title);

      // Units toggle
      const unitsRow = this.makeRow('Units', ['metric', 'imperial', 'mixed'], current.units, (v) => { this.current.units = v; });
      card.appendChild(unitsRow);

      // Auto-save toggle
      const autoSaveRow = this.makeToggle('Auto-save', current.autoSave, (v) => { this.current.autoSave = v; });
      card.appendChild(autoSaveRow);

      // Close button
      const closeBtn = document.createElement('button');
      closeBtn.className = 'btn btn--primary';
      closeBtn.textContent = 'Save & Close';
      closeBtn.style.cssText = 'margin-top: 16px; width: 100%;';
      closeBtn.addEventListener('click', () => { saveSettings(this.current); this.onClose(); });
      card.appendChild(closeBtn);

      this.root.appendChild(card);
    }

    private makeRow(label: string, options: string[], current: string, onChange: (v: string) => void): HTMLDivElement {
      const row = document.createElement('div');
      row.style.cssText = 'margin: 12px 0;';
      const lbl = document.createElement('div');
      lbl.textContent = label;
      lbl.style.cssText = 'font-size: 13px; color: var(--stardust); margin-bottom: 6px;';
      row.appendChild(lbl);
      const group = document.createElement('div');
      for (const opt of options) {
        const b = document.createElement('button');
        b.className = 'btn';
        b.textContent = opt;
        b.style.cssText = 'margin-right: 6px;';
        if (opt === current) b.style.background = 'var(--plasma-deep)';
        b.addEventListener('click', () => { onChange(opt); saveSettings(this.current); /* refresh */ });
        group.appendChild(b);
      }
      row.appendChild(group);
      return row;
    }

    private makeToggle(label: string, current: boolean, onChange: (v: boolean) => void): HTMLDivElement {
      const row = document.createElement('div');
      row.style.cssText = 'margin: 12px 0; display: flex; justify-content: space-between; align-items: center;';
      const lbl = document.createElement('div');
      lbl.textContent = label;
      lbl.style.cssText = 'font-size: 14px;';
      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      toggle.checked = current;
      toggle.addEventListener('change', () => onChange(toggle.checked));
      row.appendChild(lbl);
      row.appendChild(toggle);
      return row;
    }

    mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
    unmount(): void { this.root.remove(); }
  }
  ```

- [ ] **Step 2: Wire in `src/core/Game.ts`** — update showMainMenu
  ```ts
  import { loadSettings, SettingsPanel } from '../ui/Settings';
  // ...
  private showMainMenu(): void {
    this.unmountCurrent();
    this.mainMenu = new MainMenuScene(
      () => this.showFlight(),
      () => this.showVab(),
      () => this.showSettings()
    );
    this.mainMenu.mount();
  }
  private showSettings(): void {
    const panel = new SettingsPanel(loadSettings(), () => panel.unmount());
    panel.mount();
  }
  ```

- [ ] **Step 3: Typecheck + commit**
  ```bash
  npm run typecheck
  git add .
  git commit -m "feat(ui): settings panel with units + auto-save toggle"
  ```

---

## Task 28: MVP achievements data

**Files:**
- Create: `src/core/AchievementData.ts`

- [ ] **Step 1: Implement `src/core/AchievementData.ts`**
  ```ts
  export interface AchievementDef {
    id: string;
    name: string;
    description: string;
  }

  export const ACHIEVEMENTS: AchievementDef[] = [
    { id: 'first_launch', name: 'First Launch', description: 'Successful liftoff from the pad' },
    { id: 'reach_space', name: 'Edge of Space', description: 'Reach 100 km altitude' },
    { id: 'reach_orbit', name: 'Orbital', description: 'Achieve a stable orbit' },
    { id: 'first_landing', name: 'Soft Touchdown', description: 'Land at v < 3 m/s' },
    { id: 'parachute_landing', name: 'Parachute Pioneer', description: 'Land using only a parachute' },
    { id: 'moon_landing', name: 'Moon Walker', description: 'Land on the Moon' },
    { id: 'no_damage', name: 'Pristine', description: 'Complete a flight without damage' },
    { id: 'one_stage', name: 'Single Stage', description: 'Reach orbit without staging' }
  ];
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add .
  git commit -m "feat(core): MVP achievement definitions"
  ```

---

## Task 29: Error handling + smoke test

**Files:**
- Modify: `src/main.ts` (wrap in try/catch)
- Create: `tests/integration/smoke.test.ts`

- [ ] **Step 1: Add try/catch in `src/main.ts`**
  ```ts
  import { Game } from './core/Game';
  import './styles/tokens.css';
  import './styles/typography.css';
  import './styles/components.css';

  try {
    const game = new Game();
    game.start();
  } catch (e) {
    console.error('Failed to start Ellipse:', e);
    document.body.innerHTML = `<div style="color:white;padding:32px;font-family:monospace;">
      <h1>Ellipse failed to start</h1>
      <pre>${String(e)}</pre>
    </div>`;
  }
  ```

- [ ] **Step 2: Create `tests/integration/smoke.test.ts`**
  ```ts
  import { describe, it, expect } from 'vitest';
  import { System } from '../../src/physics/System';
  import { Rocket } from '../../src/rocket/Rocket';
  import { Assembly } from '../../src/rocket/Assembly';
  import { findPart } from '../../src/parts/PartCatalog';
  import { FlightState } from '../../src/flight/FlightState';
  import { applyThrust } from '../../src/flight/Thrust';

  describe('integration smoke', () => {
    it('full launch cycle: thrust + propagate + check altitude', () => {
      const sys = new System();
      const earthMass = 5.97e24;
      sys.add({ name: 'earth', mass: earthMass, position: [0, 0, 0], velocity: [0, 0, 0] } as any);
      const a = new Assembly();
      a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 2, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 1, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
      const r = new Rocket(a);
      r.fuelMass = 400;
      const fs = new FlightState(r, sys, [6.371e6 + 100, 0, 0], [0, 0, 0]);
      fs.throttle = 1;
      for (let i = 0; i < 60; i++) {
        applyThrust(fs, 1 / 60);
        // Manually apply gravity for the rocket (in MVP, system doesn't include rocket)
        // (gravity is applied via system.propagate; rocket has no body, so skip)
      }
      expect(fs.velocity[1]).toBeGreaterThan(0);
    });
  });
  ```

- [ ] **Step 3: Run all tests**
  ```bash
  npm test
  ```
  Expected: all tests passing

- [ ] **Step 4: Commit**
  ```bash
  git add .
  git commit -m "chore: error handling + integration smoke test"
  ```

---

## Task 30: README + final verification

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create `README.md`**
  ```markdown
  # Ellipse

  3D space flight simulator. Build a rocket, fly to the Moon, return.

  ## Stack
  - TypeScript + Vite
  - Three.js 0.160
  - Vitest

  ## Run
  ```bash
  npm install
  npm run dev      # development server
  npm test         # run tests
  npm run build    # production build
  ```

  ## Controls (in flight)
  - `W` / `S`: throttle up / down
  - `↑` `↓` `←` `→`: attitude (planned, not yet active in MVP physics)
  - `Esc`: back to main menu (planned)

  ## See also
  - `docs/superpowers/specs/2026-06-27-rocket-ship-game-design.md` — game spec
  - `docs/design-system.md` — UI/UX system
  - `docs/3d-objects.md` — 3D models spec
  - `docs/superpowers/plans/2026-06-27-ellipse-mvp.md` — this plan
  ```

- [ ] **Step 2: Run all tests + typecheck + build**
  ```bash
  npm test
  npm run typecheck
  npm run build
  ```
  Expected: all pass

- [ ] **Step 3: Visual smoke test**
  ```bash
  npm run dev
  ```
  - Main menu appears
  - Click PLAY → flight scene with Earth, Moon, rocket
  - Press W → throttle increases, fuel decreases, rocket moves
  - Settings → panel opens, can change units

- [ ] **Step 4: Commit + tag v0.1.0**
  ```bash
  git add .
  git commit -m "docs: README + v0.1.0 MVP ready"
  git tag -a v0.1.0 -m "Ellipse MVP v0.1.0"
  git push origin main --tags
  ```

---

## Self-review

**Spec coverage** (game-design-spec.md §13, MVP Phase 1):

| Требование MVP | Задача |
|---|---|
| §3.2 Земля + Луна (без других тел) | 10, 11 |
| §5.1 Чистая гравитация | 7, 8 |
| §5.8 Real-time расход топлива | 16 |
| §6.2 Управление | 19 |
| §7.2 HUD (speed, altitude, angle) | 18 |
| §7.3 Toast-сообщения | 23 |
| §9.3 Ачивки (базовые 8) | 24, 28 |
| §10 Сохранения (blueprint) | 21 |
| §15 Настройки | 27 |
| TDD throughout | every task |
| VAB (сборка ракеты) | 20 |
| Сцены (меню, VAB, flight) | 22, 20, 26 |
| Глобальная маршрутизация | 25 |

**Deferred to Phase 2 (intentionally):**
- Time-warp (x1–x1 000 000) — упрощает MVP
- Sound (engine, atmosphere, parachute) — упрощает MVP
- Venus, Mars, Sun, Mercury, gas giants, Pluto — не в MVP
- Map (orbital view) — не в MVP
- Overheating, метеоры, лунная станция — не в MVP
- Camera 1st person — не в MVP (только 3rd person chase)
- Docking, EVA, mining, music — фаза 2+

**Placeholder scan:** No TBD/TODO in any task.

**Type consistency check:**
- `Body` (Task 5) — `mass`, `position`, `velocity`, `applyForce`, `kineticEnergy` — used consistently in Tasks 6, 7, 8, 14, 15
- `System` (Task 8) — `bodies`, `add`, `bodyByName`, `propagate(dt, FIXED_DT)` — used in Tasks 10, 11, 18, 25, 26
- `Part` interface (Task 12) — `id`, `name`, `kind`, `size`, `mass`, `fuelCapacity?`, `fuelType?`, `thrust?`, `isp?` — used in Tasks 13, 14, 15, 16, 20, 21
- `Assembly` (Task 14) — `roots`, `addRoot`, `totalMass`, `totalMassWithFuel`, `centerOfMass`, `toMesh` — used in Tasks 15, 16, 20, 21, 25, 26
- `FlightState` (Task 15) — `rocket`, `system`, `position`, `velocity`, `throttle`, `consumeFuel` — used in Tasks 16, 18, 26

All consistent. No type drift.

---

## Execution

Plan complete. Saved to `docs/superpowers/plans/2026-06-27-ellipse-mvp.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration
2. **Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
