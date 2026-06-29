# Controls, Staging & Fuel System Design

## Overview

Rework the flight controls from 2-axis instant rotation to 3-axis angular
velocity with damping. Add staging via decoupler parts and proper per-tank
fuel consumption.

---

## 1. Controls — 3-Axis Angular Velocity with Damping

### Problem

Current controls use instant rotation (`rotation += input * speed * dt`) on
only 2 axes (pitch + roll). The rocket feels unresponsive and lacks yaw.

### Solution

Replace instant rotation with angular velocity + strong damping:

```
angularVel += input * acceleration * dt      // accelerate while key held
angularVel *= exp(-damping * dt)              // damp when released
rotation += angularVel * dt                   // integrate
```

Strong damping (λ ≈ 10) ensures rotation stops quickly when key is released —
no "sticking" like the previous failed attempt.

### Key Mapping

| Key | Axis | Action |
|-----|------|--------|
| Arrow Up | pitch positive | Nose down |
| Arrow Down | pitch negative | Nose up |
| Arrow Left | yaw positive | Turn left |
| Arrow Right | yaw negative | Turn right |
| A | roll positive | Roll left |
| D | roll negative | Roll right |
| W | throttle | Increase throttle |
| S | throttle | Decrease throttle |
| Space | staging | Separate current stage |

### Thrust Direction

Apply rotations in order: yaw → pitch → roll, using standard Euler angles
on the up vector `[0, 1, 0]`.

---

## 2. Staging

### Decoupler Part

New part in `PartCatalog`:

| ID | Name | Size | Mass (kg) | Cost |
|----|------|------|-----------|------|
| `decoupler_1` | TD-1 Decoupler | M | 100 | 200 |

Visually: thin ring/band (low-poly torus or cylinder, 8 sides, grey).

### Assembly Tree Convention

Decoupler sits between stages in the root tree:

```
capsule_mk1           ← stage 2 (uppermost)
  decoupler_1         ← staging point
    tank_m_lfo        ← stage 1
      engine_ant      ← stage 0 (lowest)
```

The decoupler's parent side stays attached; the child side (everything below)
separates on staging.

### Staging Mechanism

1. Press Space → find the **lowest decoupler** in the assembly tree
2. Remove all descendants of that decoupler from the rocket
3. Recalculate total mass and fuel capacity
4. Decoupled parts are removed from scene (no debris physics for MVP)

### Fuel Drain Order

Fuel is consumed from the **lowest tank** first (depth-first, rightmost child).
When a tank is empty, it becomes dead weight. Staging removes it.

---

## 3. Fuel System

### Per-Tank Tracking

Replace `Rocket.fuelMass = assembly.totalFuelCapacity()` with:

```ts
class Rocket {
  fuelPerTank: Map<AssemblyNode, number>;  // node → current fuel kg
  currentStage: number;                     // 0 = lowest
}
```

Each tank starts with `part.fuelCapacity` kg. On each frame:

```
for each tank from bottom to top:
  if tank has fuel:
    consume = min(tank.fuel, massFlow * dt)
    tank.fuel -= consume
    totalThrustMass -= consume (since fuel mass decreases)
    break (only drain one tank per frame)
```

### Thrust Calculation

- Engine produces constant thrust (400 kN for `engine_ant`)
- Total mass = dry mass + remaining fuel mass
- TWR increases as fuel drains and stages separate

---

## Acceptance Criteria

1. Arrow keys control pitch (up/down) and yaw (left/right)
2. A/D control roll
3. Rocket feels responsive but not instant — angular velocity with smooth stop
4. Space detaches the lowest stage (decoupler splits)
5. Fuel drains from bottom tank first
6. Empty tanks become dead weight; staging removes them
7. Rocket accelerates after staging (less mass, same thrust)
8. 58+ existing tests pass, typecheck clean
