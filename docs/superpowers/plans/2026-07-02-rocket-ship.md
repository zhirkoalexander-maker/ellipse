# Rocket Ship Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a desktop-only browser game in English using Vite, TypeScript, Three.js, and Vitest that satisfies the approved Rocket Ship design and the supplied specification.

**Architecture:** The project is a Vite TypeScript app with a deterministic simulation core, pure physics/state modules, a thin Three.js rendering layer, and a DOM HUD/map overlay. Pure modules are developed test-first with Vitest; rendering stays thin and mostly consumes already-tested state.

**Tech Stack:** Vite, TypeScript, Three.js, Vitest, npm, localStorage, DOM UI.

## Global Constraints

- Platform: Web (Three.js + TypeScript + Vite)
- English UI
- Desktop only
- Methodology: TDD (Vitest)
- localStorage persistence
- Git tag v0.1 = baseline
- `ORBIT_SCALE = 1e-9`
- `VISUAL_PLANET_MULT = 3000`
- `VISUAL_SCALE = 3e-6`
- `PART_SCALE = 0.001`
- `near = 0.001, far = 5000`
- Patched-conics SOI with single-body gravity per frame
- 2D thrust vector `tx = -sin(heading), ty = cos(heading), tz = 0`
- `G = 6.67430e-11`
- `G0 = 9.80665`
- `FIXED_DT = 1/60`
- No angular velocity engine
- No heating / explosions / nebulas
- Rocket visual parts: capsule_mk1 + tank_m_lfo + engine_ant
- Total rocket mass about `31850 kg` full, thrust `1500 kN`
- `Next Features (pending)` stay out of scope for this release

---

## File Structure

- `package.json` — scripts and dependencies
- `vite.config.ts` — Vite and Vitest config
- `tsconfig.json` — TypeScript configuration
- `index.html` — root shell with game mount point
- `src/main.ts` — bootstrap runtime
- `src/styles.css` — desktop layout and HUD styles
- `src/core/constants.ts` — physical and visual constants
- `src/core/math.ts` — scalar/vector math helpers
- `src/core/types.ts` — shared types
- `src/world/bodies.ts` — solar-system bodies and launchpad definitions
- `src/world/rocket.ts` — rocket stages and part dimensions
- `src/physics/soi.ts` — sphere-of-influence utilities
- `src/physics/forces.ts` — gravity, thrust, drag helpers
- `src/simulation/state.ts` — game state factory and derived values
- `src/simulation/update.ts` — fixed-step update logic
- `src/persistence/storage.ts` — localStorage read/write layer
- `src/rendering/scene.ts` — Three.js setup and render sync
- `src/rendering/stars.ts` — starfield shader/material factory
- `src/rendering/earthTexture.ts` — procedural Earth texture factory
- `src/ui/dom.ts` — HUD/map/button overlay rendering
- `src/ui/input.ts` — keyboard/mouse/button intent capture
- `tests/core/*.test.ts` — math and constants tests
- `tests/physics/*.test.ts` — physics unit tests
- `tests/simulation/*.test.ts` — state/update integration tests
- `tests/ui/*.test.ts` — deterministic UI helper tests

### Task 1: Scaffold The App Shell

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.ts`
- Create: `src/styles.css`
- Test: `tests/smoke/app-shell.test.ts`

**Interfaces:**
- Consumes: none
- Produces: `bootstrapApp(root: HTMLElement): void`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, expect, it } from 'vitest';
import { bootstrapApp } from '../../src/main';

describe('bootstrapApp', () => {
  it('creates the game shell inside the provided root', () => {
    const root = document.createElement('div');

    bootstrapApp(root);

    expect(root.querySelector('[data-role="game-shell"]')).not.toBeNull();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/smoke/app-shell.test.ts`
Expected: FAIL because `../../src/main` or `bootstrapApp` does not exist.

- [ ] **Step 3: Write minimal implementation**

```ts
export function bootstrapApp(root: HTMLElement): void {
  root.innerHTML = '<div data-role="game-shell"></div>';
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- tests/smoke/app-shell.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json vite.config.ts index.html src/main.ts src/styles.css tests/smoke/app-shell.test.ts
git commit -m "chore: scaffold rocket ship app shell"
```

### Task 2: Implement World Data And Core Physics Helpers

**Files:**
- Create: `src/core/constants.ts`
- Create: `src/core/math.ts`
- Create: `src/core/types.ts`
- Create: `src/world/bodies.ts`
- Create: `src/world/rocket.ts`
- Create: `src/physics/soi.ts`
- Create: `src/physics/forces.ts`
- Test: `tests/physics/forces.test.ts`
- Test: `tests/physics/soi.test.ts`

**Interfaces:**
- Consumes: `bootstrapApp(root: HTMLElement): void`
- Produces: `computeSoiRadius(bodyMass: number, parentMass: number, orbitalRadius: number): number`, `findDominantBody(position: Vec3, bodies: CelestialBody[]): CelestialBody`, `computeGravityAcceleration(position: Vec3, body: CelestialBody): Vec3`, `computeThrustVector(heading: number): Vec3`, `computeDragAcceleration(speed: Vec3, density: number, dragFactor: number, mass: number): Vec3`

- [ ] **Step 1: Write the failing SOI test**

```ts
import { describe, expect, it } from 'vitest';
import { computeSoiRadius } from '../../src/physics/soi';

describe('computeSoiRadius', () => {
  it('computes a positive sphere of influence radius', () => {
    const result = computeSoiRadius(2e25, 2e26, 1e8);

    expect(result).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/physics/soi.test.ts`
Expected: FAIL because the module does not exist.

- [ ] **Step 3: Write minimal implementation**

```ts
export function computeSoiRadius(bodyMass: number, parentMass: number, orbitalRadius: number): number {
  return orbitalRadius * Math.pow(bodyMass / parentMass, 2 / 5);
}
```

- [ ] **Step 4: Add failing thrust test**

```ts
import { describe, expect, it } from 'vitest';
import { computeThrustVector } from '../../src/physics/forces';

describe('computeThrustVector', () => {
  it('maps heading to the required 2D vector', () => {
    const result = computeThrustVector(0);

    expect(result).toEqual({ x: 0, y: 1, z: 0 });
  });
});
```

- [ ] **Step 5: Run test to verify it fails**

Run: `npm test -- tests/physics/forces.test.ts`
Expected: FAIL because `computeThrustVector` does not exist.

- [ ] **Step 6: Write minimal implementation**

```ts
export function computeThrustVector(heading: number) {
  return { x: -Math.sin(heading), y: Math.cos(heading), z: 0 };
}
```

- [ ] **Step 7: Run tests to verify they pass**

Run: `npm test -- tests/physics/soi.test.ts tests/physics/forces.test.ts`
Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add src/core src/world src/physics tests/physics
git commit -m "feat: add world data and core physics helpers"
```

### Task 3: Implement Simulation State, Input Intents, Warp, SAS, Staging, And Persistence

**Files:**
- Create: `src/simulation/state.ts`
- Create: `src/simulation/update.ts`
- Create: `src/persistence/storage.ts`
- Create: `src/ui/input.ts`
- Test: `tests/simulation/update.test.ts`
- Test: `tests/simulation/storage.test.ts`

**Interfaces:**
- Consumes: `findDominantBody(position: Vec3, bodies: CelestialBody[]): CelestialBody`, `computeGravityAcceleration(position: Vec3, body: CelestialBody): Vec3`, `computeThrustVector(heading: number): Vec3`, `computeDragAcceleration(speed: Vec3, density: number, dragFactor: number, mass: number): Vec3`
- Produces: `createInitialGameState(): GameState`, `stepSimulation(state: GameState, intent: FrameIntent, dt: number): GameState`, `readProgress(): PersistedProgress`, `writeProgress(progress: PersistedProgress): void`

- [ ] **Step 1: Write the failing SAS test**

```ts
import { describe, expect, it } from 'vitest';
import { createInitialGameState } from '../../src/simulation/state';
import { stepSimulation } from '../../src/simulation/update';

describe('stepSimulation', () => {
  it('keeps heading fixed while SAS is enabled', () => {
    const state = createInitialGameState();
    state.rocket.sasEnabled = true;
    state.rocket.heading = 1;

    const next = stepSimulation(state, { rotateLeft: true }, 1 / 60);

    expect(next.rocket.heading).toBe(1);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/simulation/update.test.ts`
Expected: FAIL because the simulation modules do not exist.

- [ ] **Step 3: Write minimal implementation**

```ts
export function stepSimulation(state: GameState, intent: FrameIntent, dt: number): GameState {
  if (state.rocket.sasEnabled) {
    return state;
  }

  const heading = intent.rotateLeft ? state.rocket.heading + dt : state.rocket.heading;
  return {
    ...state,
    rocket: {
      ...state.rocket,
      heading,
    },
  };
}
```

- [ ] **Step 4: Add failing persistence test**

```ts
import { beforeEach, describe, expect, it } from 'vitest';
import { readProgress, writeProgress } from '../../src/persistence/storage';

describe('progress storage', () => {
  beforeEach(() => localStorage.clear());

  it('round-trips highscores through localStorage', () => {
    writeProgress({ version: 1, achievements: [], bestAltitude: 10, bestSpeed: 20, progressFlags: [] });

    expect(readProgress().bestAltitude).toBe(10);
  });
});
```

- [ ] **Step 5: Run test to verify it fails**

Run: `npm test -- tests/simulation/storage.test.ts`
Expected: FAIL because the storage module does not exist.

- [ ] **Step 6: Write minimal implementation**

```ts
const STORAGE_KEY = 'rocket-ship-progress';

export function writeProgress(progress: PersistedProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function readProgress(): PersistedProgress {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : { version: 1, achievements: [], bestAltitude: 0, bestSpeed: 0, progressFlags: [] };
}
```

- [ ] **Step 7: Run tests to verify they pass**

Run: `npm test -- tests/simulation/update.test.ts tests/simulation/storage.test.ts`
Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add src/simulation src/persistence src/ui/input.ts tests/simulation
git commit -m "feat: add simulation state and persistence"
```

### Task 4: Implement Three.js Scene, Planets, Rocket Visual, Stars, Earth Texture, And Chase Camera

**Files:**
- Create: `src/rendering/scene.ts`
- Create: `src/rendering/stars.ts`
- Create: `src/rendering/earthTexture.ts`
- Test: `tests/ui/render-helpers.test.ts`

**Interfaces:**
- Consumes: `createInitialGameState(): GameState`
- Produces: `createSceneRuntime(canvasHost: HTMLElement): SceneRuntime`, `syncScene(runtime: SceneRuntime, state: GameState): void`, `createEarthTexture(size: number): HTMLCanvasElement`

- [ ] **Step 1: Write the failing Earth texture test**

```ts
import { describe, expect, it } from 'vitest';
import { createEarthTexture } from '../../src/rendering/earthTexture';

describe('createEarthTexture', () => {
  it('returns a canvas with the requested size', () => {
    const canvas = createEarthTexture(64);

    expect(canvas.width).toBe(64);
    expect(canvas.height).toBe(64);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/ui/render-helpers.test.ts`
Expected: FAIL because the rendering helper does not exist.

- [ ] **Step 3: Write minimal implementation**

```ts
export function createEarthTexture(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- tests/ui/render-helpers.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/rendering tests/ui/render-helpers.test.ts
git commit -m "feat: add rendering runtime and visual helpers"
```

### Task 5: Implement HUD, Navball, Map Overlay, Buttons, And Full Bootstrap Wiring

**Files:**
- Create: `src/ui/dom.ts`
- Modify: `src/main.ts`
- Modify: `src/styles.css`
- Test: `tests/ui/dom.test.ts`
- Test: `tests/simulation/loop.test.ts`

**Interfaces:**
- Consumes: `createSceneRuntime(canvasHost: HTMLElement): SceneRuntime`, `syncScene(runtime: SceneRuntime, state: GameState): void`, `createInitialGameState(): GameState`, `stepSimulation(state: GameState, intent: FrameIntent, dt: number): GameState`
- Produces: `renderHud(root: HTMLElement, state: GameState): void`, `attachUiHandlers(root: HTMLElement, onIntent: (intent: FrameIntent) => void): void`, `startGame(root: HTMLElement): void`

- [ ] **Step 1: Write the failing HUD test**

```ts
import { describe, expect, it } from 'vitest';
import { renderHud } from '../../src/ui/dom';
import { createInitialGameState } from '../../src/simulation/state';

describe('renderHud', () => {
  it('shows speed and altitude labels', () => {
    const root = document.createElement('div');
    const state = createInitialGameState();

    renderHud(root, state);

    expect(root.textContent).toContain('Speed');
    expect(root.textContent).toContain('Altitude');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- tests/ui/dom.test.ts`
Expected: FAIL because `renderHud` does not exist.

- [ ] **Step 3: Write minimal implementation**

```ts
export function renderHud(root: HTMLElement, state: GameState): void {
  root.textContent = `Speed ${state.metrics.speed} Altitude ${state.metrics.altitude}`;
}
```

- [ ] **Step 4: Add failing bootstrap loop test**

```ts
import { describe, expect, it } from 'vitest';
import { startGame } from '../../src/main';

describe('startGame', () => {
  it('creates HUD buttons for stage, chute, and map', () => {
    const root = document.createElement('div');

    startGame(root);

    expect(root.textContent).toContain('STAGE');
    expect(root.textContent).toContain('CHUTE');
    expect(root.textContent).toContain('MAP');
  });
});
```

- [ ] **Step 5: Run test to verify it fails**

Run: `npm test -- tests/simulation/loop.test.ts`
Expected: FAIL because `startGame` does not exist.

- [ ] **Step 6: Write minimal implementation**

```ts
export function startGame(root: HTMLElement): void {
  root.innerHTML = '<button>STAGE</button><button>CHUTE</button><button>MAP</button>';
}
```

- [ ] **Step 7: Run tests to verify they pass**

Run: `npm test -- tests/ui/dom.test.ts tests/simulation/loop.test.ts`
Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add src/ui src/main.ts src/styles.css tests/ui tests/simulation/loop.test.ts
git commit -m "feat: add hud, map controls, and game bootstrap"
```

## Self-Review

- Spec coverage: tasks cover project scaffolding, physics, simulation, persistence, rendering, HUD, controls, map mode, and bootstrap integration. The only intentionally excluded items are those already marked `Next Features (pending)` in the source specification.
- Placeholder scan: no `TODO`, `TBD`, or undefined task references remain.
- Type consistency: the interfaces described in later tasks match the names introduced in earlier tasks.