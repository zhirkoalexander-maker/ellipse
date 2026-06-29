# Controls, Staging & Fuel — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework flight controls to 3-axis angular velocity with damping, add decoupler staging, and implement per-tank fuel tracking.

**Architecture:** Five tasks: (1) rewrite `Controls.ts` with 3-axis input, (2) add angular velocity + yaw to `FlightScene`, (3) add decoupler part, (4) per-tank fuel tracking in `Rocket`, (5) spacebar staging logic in `FlightScene`.

**Tech Stack:** Three.js Euler angles, per-tank fuel array, assembly tree pruning.

## Global Constraints

- All 58 existing tests must pass after each task
- `tsc --noEmit` must pass after each task
- Follow existing patterns: `Part` interface, `AssemblyNode` tree, `FlightScene` architecture
- No new external dependencies

---

### Task 1: Controls Rewrite — 3-Axis + Staging

**Files:**
- Modify: `src/flight/Controls.ts` — full rewrite
- Create: `tests/flight/controls.test.ts`

**Interfaces:**
- Consumes: nothing — standalone class
- Produces:
  - `Controls.getPitch(): number` — Arrow Up (+1) / Down (-1)
  - `Controls.getYaw(): number` — Arrow Left (+1) / Right (-1)
  - `Controls.getRoll(): number` — A (+1) / D (-1)
  - `Controls.getStageRequested(): boolean` — Space (true once per press, edge-triggered)
  - `Controls.update(dt: number): void` — throttle W/S + edge detection

- [ ] **Step 1: Write the failing test**

Create `tests/flight/controls.test.ts`:

```ts
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Controls } from '../../src/flight/Controls';
import { FlightState } from '../../src/flight/FlightState';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { System } from '../../src/physics/System';

function makeState() {
  const assembly = new Assembly();
  const rocket = new Rocket(assembly);
  const system = new System();
  return new FlightState(rocket, system, [0, 0, 0], [0, 0, 0]);
}

function emitKey(key: string, type: 'keydown' | 'keyup') {
  window.dispatchEvent(new KeyboardEvent(type, { key }));
}

describe('Controls', () => {
  let controls: Controls;

  beforeEach(() => {
    controls = new Controls(makeState());
  });

  describe('pitch', () => {
    it('returns 0 when no keys', () => {
      expect(controls.getPitch()).toBe(0);
    });

    it('returns 1 for arrow up', () => {
      emitKey('arrowup', 'keydown');
      expect(controls.getPitch()).toBe(1);
    });

    it('returns -1 for arrow down', () => {
      emitKey('arrowdown', 'keydown');
      expect(controls.getPitch()).toBe(-1);
    });
  });

  describe('yaw', () => {
    it('returns 1 for arrow left', () => {
      emitKey('arrowleft', 'keydown');
      expect(controls.getYaw()).toBe(1);
    });

    it('returns -1 for arrow right', () => {
      emitKey('arrowright', 'keydown');
      expect(controls.getYaw()).toBe(-1);
    });
  });

  describe('roll', () => {
    it('returns 1 for A', () => {
      emitKey('a', 'keydown');
      expect(controls.getRoll()).toBe(1);
    });

    it('returns -1 for D', () => {
      emitKey('d', 'keydown');
      expect(controls.getRoll()).toBe(-1);
    });
  });

  describe('throttle', () => {
    it('increases with W', () => {
      emitKey('w', 'keydown');
      controls.update(0.1);
      expect(controls.state.throttle).toBeGreaterThan(0);
    });
  });

  describe('staging', () => {
    it('returns true on first space press', () => {
      emitKey(' ', 'keydown');
      expect(controls.getStageRequested()).toBe(true);
    });

    it('returns false after consumed', () => {
      emitKey(' ', 'keydown');
      controls.getStageRequested(); // consume
      expect(controls.getStageRequested()).toBe(false);
    });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/flight/controls.test.ts`
Expected: multiple FAILs — `getYaw()`, `getRoll()`, `getStageRequested()` don't exist

- [ ] **Step 3: Rewrite `src/flight/Controls.ts`**

```ts
import type { FlightState } from './FlightState';

export class Controls {
  private keys: Set<string> = new Set();
  private stagePressed = false;
  readonly state: FlightState;

  constructor(state: FlightState) {
    this.state = state;
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key.toLowerCase());
      if (e.key === ' ') this.stagePressed = true;
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.key.toLowerCase());
    });
  }

  update(dt: number): void {
    if (this.keys.has('w')) this.state.throttle = Math.min(1, this.state.throttle + dt * 0.5);
    if (this.keys.has('s')) this.state.throttle = Math.max(0, this.state.throttle - dt * 0.5);
  }

  getPitch(): number {
    let v = 0;
    if (this.keys.has('arrowup')) v = 1;
    if (this.keys.has('arrowdown')) v = -1;
    return v;
  }

  getYaw(): number {
    let v = 0;
    if (this.keys.has('arrowleft')) v = 1;
    if (this.keys.has('arrowright')) v = -1;
    return v;
  }

  getRoll(): number {
    let v = 0;
    if (this.keys.has('a')) v = 1;
    if (this.keys.has('d')) v = -1;
    return v;
  }

  getStageRequested(): boolean {
    const was = this.stagePressed;
    this.stagePressed = false;
    return was;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/flight/controls.test.ts`
Expected: all PASS

- [ ] **Step 5: Commit**

```bash
git add src/flight/Controls.ts tests/flight/controls.test.ts
git commit -m "feat: rewrite controls — 3-axis (pitch/yaw/roll) + staging spacebar"
```

---

### Task 2: Angular Velocity + 3-Axis Rotation in FlightScene

**Files:**
- Modify: `src/scenes/FlightScene.ts` — replace rotation + thrust direction logic

**Interfaces:**
- Consumes: `Controls.getPitch()`, `getYaw()`, `getRoll()`, `getStageRequested()` (from Task 1)
- Produces: smooth 3-axis angular velocity with damping, correct thrust vector via `THREE.Euler`

- [ ] **Step 1: Add angular velocity fields**

In `FlightScene`, add after existing `private rocketRotation` field (line 33):

```ts
private angularVel = { x: 0, y: 0, z: 0 };
```

- [ ] **Step 2: Replace rotation and thrust direction logic**

In `FlightScene.update()`, find lines ~257-277 (rotation + thrust calculation) and replace:

Old code:
```ts
    // Apply rotation from controls (always at base speed)
    const rotSpeed = 3.0;
    if (this.controls.getPitch() !== 0) {
      this.rocketRotation.x += this.controls.getPitch() * rotSpeed * baseDt;
    }
    if (this.controls.getTilt() !== 0) {
      this.rocketRotation.z += this.controls.getTilt() * rotSpeed * baseDt;
    }
    this.rocketGroup.rotation.set(this.rocketRotation.x, 0, this.rocketRotation.z);

    // Calculate thrust direction from rotation
    const cosPitch = Math.cos(this.rocketRotation.x);
    const sinPitch = Math.sin(this.rocketRotation.x);
    const cosRoll = Math.cos(this.rocketRotation.z);
    const sinRoll = Math.sin(this.rocketRotation.z);
    let tx = 0, ty = 1, tz = 0;
    const rx1 = tx * cosRoll - ty * sinRoll;
    const ry1 = tx * sinRoll + ty * cosRoll;
    tx = rx1; ty = ry1;
    const ry2 = ty * cosPitch - tz * sinPitch;
    const rz2 = ty * sinPitch + tz * cosPitch;
    ty = ry2; tz = rz2;
```

New code:
```ts
    // Angular velocity from controls — 3-axis with strong damping
    const angularAccel = 8.0;
    const angularDamp = 12.0;
    this.angularVel.x += this.controls.getPitch() * angularAccel * baseDt;
    this.angularVel.y += this.controls.getYaw() * angularAccel * baseDt;
    this.angularVel.z += this.controls.getRoll() * angularAccel * baseDt;

    const dampFactor = Math.exp(-angularDamp * baseDt);
    this.angularVel.x *= dampFactor;
    this.angularVel.y *= dampFactor;
    this.angularVel.z *= dampFactor;

    // If input is zero and vel is tiny, clamp to zero to prevent drift
    if (this.controls.getPitch() === 0 && Math.abs(this.angularVel.x) < 0.01) this.angularVel.x = 0;
    if (this.controls.getYaw() === 0 && Math.abs(this.angularVel.y) < 0.01) this.angularVel.y = 0;
    if (this.controls.getRoll() === 0 && Math.abs(this.angularVel.z) < 0.01) this.angularVel.z = 0;

    this.rocketRotation.x += this.angularVel.x * baseDt;
    this.rocketRotation.y += this.angularVel.y * baseDt;
    this.rocketRotation.z += this.angularVel.z * baseDt;

    this.rocketGroup.rotation.set(this.rocketRotation.x, this.rocketRotation.y, this.rocketRotation.z);

    // Compute thrust direction from all 3 Euler angles
    const euler = new THREE.Euler(this.rocketRotation.x, this.rocketRotation.y, this.rocketRotation.z, 'YXZ');
    const thrustVec = new THREE.Vector3(0, 1, 0).applyEuler(euler);
    const tx = thrustVec.x;
    const ty = thrustVec.y;
    const tz = thrustVec.z;
```

- [ ] **Step 3: Remove any remaining references to `getTilt()`**

The old Controls has `getTilt()` — it's removed in Task 1. Make sure FlightScene no longer references it. (Already replaced above, just verify.)

- [ ] **Step 4: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all 58+ tests pass, typecheck clean

- [ ] **Step 5: Commit**

```bash
git add src/scenes/FlightScene.ts
git commit -m "feat: angular velocity with damping for 3-axis rotation (pitch/yaw/roll)"
```

---

### Task 3: Decoupler Part

**Files:**
- Modify: `src/parts/Part.ts` — add 'decoupler' kind
- Modify: `src/parts/PartCatalog.ts` — add decoupler part
- Modify: `src/parts/PartBuilder.ts` — add `buildDecoupler()`

**Interfaces:**
- Consumes: `Part` interface, `PART_CATALOG` array, `buildPartMesh()` switch
- Produces: `decoupler_1` part in catalog, decoupler mesh in builder

- [ ] **Step 1: Add 'decoupler' to PartKind**

In `src/parts/Part.ts`, line 2:

Change:
```ts
export type PartKind = 'capsule' | 'tank' | 'engine' | 'parachute' | 'legs';
```
To:
```ts
export type PartKind = 'capsule' | 'tank' | 'engine' | 'parachute' | 'legs' | 'decoupler';
```

- [ ] **Step 2: Add decoupler to catalog**

In `src/parts/PartCatalog.ts`, add after the last part (before the closing `];`):

```ts
  // Decoupler
  {
    id: 'decoupler_1',
    name: 'TD-1 Decoupler',
    kind: 'decoupler',
    size: 'M',
    mass: 100,
    dragCoeff: 0.3
  }
```

- [ ] **Step 3: Add decoupler case to `buildPartMesh()`**

In `src/parts/PartBuilder.ts`, after the `buildLegs` function (line 256), add:

```ts
function buildDecoupler(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  // Thin ring
  const ringMat = mat(MID_GREY, 0.3, 0.6);
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.05, r * 0.92, h * 0.12, 8), ringMat);
  group.add(ring);

  // Outer band
  const bandMat = mat(GOLD, 0.25, 0.75);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.08, r * 1.08, h * 0.04, 8), bandMat);
  band.position.y = h * 0.06;
  group.add(band);

  // Bottom ring
  const bottomMat = mat(MID_GREY, 0.3, 0.6);
  const bottom = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.92, r * 0.92, h * 0.04, 8), bottomMat);
  bottom.position.y = -h * 0.06;
  group.add(bottom);
}
```

And in the `switch` statement in `buildPartMesh()` (line 30), add:

```ts
    case 'decoupler': buildDecoupler(g, d); break;
```

- [ ] **Step 4: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all pass

- [ ] **Step 5: Commit**

```bash
git add src/parts/Part.ts src/parts/PartCatalog.ts src/parts/PartBuilder.ts
git commit -m "feat: add decoupler part (TD-1)"
```

---

### Task 4: Per-Tank Fuel Tracking

**Files:**
- Modify: `src/rocket/Rocket.ts` — replace single `fuelMass` with `fuelTanks` array
- Modify: `src/flight/FlightState.ts` — update `consumeFuel()`
- Modify: `src/scenes/FlightScene.ts` — line 46 fuel init

**Interfaces:**
- Consumes: `AssemblyNode` tree, `Part.fuelCapacity`
- Produces: `Rocket.fuelTanks`, `Rocket.consumeFuel(rate, dt)`, `Rocket.totalFuelMass()`

- [ ] **Step 1: Write failing test**

Create `tests/rocket/fuel.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';
import { PART_SCALE } from '../../src/config/constants';

describe('Rocket fuel', () => {
  it('tracks fuel per tank', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.01, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    expect(r.totalFuelMass()).toBe(60000);
    expect(r.fuelTanks.length).toBe(2);
  });

  it('drains from lowest tank first', () => {
    const p = PART_SCALE;
    const a = new Assembly();
    const upper = { part: findPart('tank_m_lfo')!, position: [0, 1.6 * p, 0], rotation: 0, children: [] as any[] };
    const lower = { part: findPart('tank_m_lfo')!, position: [0, 0.8 * p, 0], rotation: 0, children: [] as any[] };
    a.addRoot(upper);
    a.addRoot(lower);
    const r = new Rocket(a);
    // Lower tank is roots[1], upper is roots[0]. Fuel collects bottom-first.
    const consumed = r.consumeFuel(100, 10); // 1000 kg total
    expect(consumed).toBe(1000);
    expect(r.fuelTanks[1]!.remaining).toBe(29000); // lower lost fuel
    expect(r.fuelTanks[0]!.remaining).toBe(30000); // upper untouched
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/rocket/fuel.test.ts`
Expected: FAIL — `fuelTanks` and `consumeFuel` don't exist on Rocket

- [ ] **Step 3: Rewrite `Rocket.ts`**

Replace `src/rocket/Rocket.ts`:

```ts
import { Assembly, type AssemblyNode } from './Assembly';

export interface FuelTank {
  node: AssemblyNode;
  remaining: number;
  capacity: number;
}

export class Rocket {
  assembly: Assembly;
  fuelTanks: FuelTank[];

  constructor(assembly: Assembly) {
    this.assembly = assembly;
    this.fuelTanks = [];
    collectTanks(assembly.roots, this.fuelTanks);
  }

  dryMass(): number { return this.assembly.totalMass(); }

  totalFuelMass(): number {
    return this.fuelTanks.reduce((s, t) => s + t.remaining, 0);
  }

  totalMass(): number { return this.dryMass() + this.totalFuelMass(); }

  consumeFuel(rate: number, dt: number): number {
    let consumed = 0;
    // Drain from lowest tank first (last in depth-first order)
    for (let i = this.fuelTanks.length - 1; i >= 0; i--) {
      const tank = this.fuelTanks[i]!;
      if (tank.remaining <= 0) continue;
      const want = rate * dt - consumed;
      if (want <= 0) break;
      const take = Math.min(tank.remaining, want);
      tank.remaining -= take;
      consumed += take;
    }
    return consumed;
  }
}

function collectTanks(nodes: AssemblyNode[], out: FuelTank[]) {
  for (const n of nodes) {
    if (n.part.fuelCapacity) {
      out.push({ node: n, remaining: n.part.fuelCapacity, capacity: n.part.fuelCapacity });
    }
    collectTanks(n.children, out);
  }
}
```

- [ ] **Step 4: Update `FlightState.consumeFuel()`**

In `src/flight/FlightState.ts`, replace `consumeFuel`:

```ts
  consumeFuel(rate: number, dt: number): void {
    this.rocket.consumeFuel(rate, dt);
  }
```

(Removes the old `this.rocket.fuelMass` direct manipulation.)

- [ ] **Step 5: Update `FlightScene` fuel init**

In `FlightScene.ts` line 46, change:

```ts
    this.rocket.fuelMass = (rocket.assembly.totalMassWithFuel() - rocket.assembly.totalMass());
```

To:

```ts
    // fuelTanks already initialized in Rocket constructor from assembly
```

Remove the line entirely — `Rocket` constructor now handles fuel init.

- [ ] **Step 6: Check for any remaining `fuelMass` references**

Run: `npx vitest run`
If any test references `rocket.fuelMass`, fix. The property no longer exists — replace with `rocket.totalFuelMass()`.

- [ ] **Step 7: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all 59+ tests pass, typecheck clean

- [ ] **Step 8: Commit**

```bash
git add src/rocket/Rocket.ts src/flight/FlightState.ts src/scenes/FlightScene.ts tests/rocket/fuel.test.ts
git commit -m "feat: per-tank fuel tracking — drain bottom-up, support staging"
```

---

### Task 5: Staging Logic

**Files:**
- Modify: `src/scenes/FlightScene.ts` — spacebar staging handler
- Modify: `src/rocket/Rocket.ts` — `removeStage()` method

**Interfaces:**
- Consumes: `Controls.getStageRequested()`, `AssemblyNode` tree, `Rocket.fuelTanks`, `Rocket.rocketGroup`
- Produces: `Rocket.removeStage(decouplerNode)`, decoupled meshes removed from scene, mass recalculated

- [ ] **Step 1: Add `removeStage()` to `Rocket.ts`**

After the `consumeFuel` method in `Rocket`, add:

```ts
  removeStage(decouplerNode: AssemblyNode): void {
    // Remove all descendants of the decoupler from fuelTanks
    const idsToRemove = new Set<AssemblyNode>();
    collectDescendants(decouplerNode, idsToRemove);
    idsToRemove.add(decouplerNode); // also remove decoupler from fuel (it has no fuel anyway)
    this.fuelTanks = this.fuelTanks.filter(t => !idsToRemove.has(t.node));

    // Clear decoupler's children from the assembly tree
    decouplerNode.children = [];
  }
```

And after the `collectTanks` function, add:

```ts
function collectDescendants(node: AssemblyNode, out: Set<AssemblyNode>) {
  for (const c of node.children) {
    out.add(c);
    collectDescendants(c, out);
  }
}
```

- [ ] **Step 2: Add staging to `FlightScene.update()`**

In `FlightScene.ts`, after the controls update line (~254 `this.controls.update(baseDt);`), add:

```ts
    // Staging
    if (this.controls.getStageRequested()) {
      this.performStage();
    }
```

And add a new private method `performStage()` to `FlightScene`:

```ts
  private performStage(): void {
    const decoupler = this.findLowestDecoupler(this.rocket.assembly.roots);
    if (!decoupler) {
      toast.show('No decouplers to stage.');
      return;
    }

    // Remove decoupled meshes from rocket group
    const decouplerMesh = this.rocketGroup.getObjectByName(decoupler.part.id);
    if (decouplerMesh) {
      while (decouplerMesh.children.length > 0) {
        decouplerMesh.children[0]!.removeFromParent();
      }
    }

    // Update assembly tree and fuel
    this.rocket.removeStage(decoupler);
    toast.show('Stage separated!');
  }

  private findLowestDecoupler(nodes: import('../rocket/Assembly').AssemblyNode[]): import('../rocket/Assembly').AssemblyNode | null {
    let last: import('../rocket/Assembly').AssemblyNode | null = null;
    const walk = (ns: import('../rocket/Assembly').AssemblyNode[]) => {
      for (const n of ns) {
        if (n.part.kind === 'decoupler') last = n;
        walk(n.children);
      }
    };
    walk(nodes);
    return last;
  }
```

- [ ] **Step 3: Run full test suite + typecheck**

Run: `npx vitest run && npx tsc --noEmit`
Expected: all pass

- [ ] **Step 4: Commit**

```bash
git add src/scenes/FlightScene.ts src/rocket/Rocket.ts
git commit -m "feat: staging — spacebar detaches stage below lowest decoupler"
```

---

## Full Test Suite

After all tasks, run:

```bash
npx vitest run && npx tsc --noEmit
```

Expected: 59+ tests pass, typecheck clean.
