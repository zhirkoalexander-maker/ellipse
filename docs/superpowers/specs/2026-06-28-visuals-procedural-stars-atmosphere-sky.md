# Visuals: Procedural Stars, Atmosphere Glow & Sky Gradient

## Overview

Replace the current placeholder star field (4000 white points), fix the atmosphere glow
to follow the planet, and add a sky-to-space gradient during flight.

---

## 1. Procedural Shader Skybox (`src/effects/Stars.ts`)

Replace the particle system with a single custom `ShaderMaterial` on a large sphere
(radius 1000, 48 segments).

### Fragment Shader

The shader composites these layers (bottom to top):

| Layer | Technique | Description |
|-------|-----------|-------------|
| Base gradient | `mix()` on UV.y | Dark navy (#060814) → deep purple → dark blue → black |
| Colored bands | Horizontal sine waves, alpha-gated | Subtle bands of purple, blue, teal, pink — the Ellipse look |
| Nebula patches | 3D value noise (2 octaves) | Soft color blotches, sampled from world position, tinted toward blue/purple/magenta |
| Star field | Pre-computed buffer attribute positions | ~3000 points on sphere surface, each with size + color (white, blue-white, yellow-white) attributes |
| Twinkle | `sin(time * speed + seed)` per star | Subtle opacity oscillation (< 15% amplitude) |

### Vertex Shader

Standard, passes `uv` and `position` to fragment. No custom work needed.

### Uniforms

```ts
uniforms: {
  uTime: { value: 0 },
  uColor1: { value: new THREE.Color('#060814') },  // dark navy
  uColor2: { value: new THREE.Color('#1a0a2e') },  // deep purple
  uColor3: { value: new THREE.Color('#16213e') },  // dark blue
}
```

### Camera Tracking

Already done: `SceneManager.update()` sets `stars.position.copy(camera.position)`.

---

## 2. Atmosphere Glow (`src/effects/AtmosphereGlow.ts`)

The Fresnel shader already exists and works. Fix the **position tracking bug**:

### Problem

The glow mesh is created at origin `[0,0,0]` and added to the scene separately
(not as a child of Earth's mesh). It never gets synced when Earth orbits.

### Fix

In `Earth.ts`, add glow as a child of `this.mesh`:

```ts
this.atmosphereGlow = new AtmosphereGlow(this.visualRadius);
this.mesh.add(this.atmosphereGlow.getMesh());
```

Then **remove** the `getGlow()` method and the separate scene-add in
`FlightScene.ts` (`if (pbody.getGlow) ...`).

The glow automatically moves/rotates with the parent mesh.

---

## 3. Sky Gradient (`src/scenes/FlightScene.ts`)

During flight, the scene background interpolates from sky blue to space black
based on altitude above the nearest body.

### Logic

```
alt = distanceToNearestBody - body.radius
t = clamp(alt / 100_000, 0, 1)         // 0 = sea level, 1 = 100km+
color = lerp(#87CEEB, #060814, t)
sceneManager.scene.background = color
```

### Implementation

In `FlightScene.update()`, after computing `nearestDist` and `nearestBody`:

```ts
const alt = nearestDist - nearestBody.radius;
const t = Math.max(0, Math.min(1, alt / 100000));
const bg = new THREE.Color().lerpColors(
  new THREE.Color(0x87CEEB),  // sky blue
  new THREE.Color(0x060814),  // space black
  t
);
this.sceneMgr.scene.background = bg;
```

---

## Files Changed

| File | Change |
|------|--------|
| `src/effects/Stars.ts` | Rewrite: particle system → procedural shader skybox |
| `src/effects/AtmosphereGlow.ts` | No changes needed (shader is correct) |
| `src/planets/Earth.ts` | Add glow as child of `this.mesh`, remove `getGlow()` |
| `src/scenes/FlightScene.ts` | Remove separate glow add; add sky gradient logic |
| `src/core/SceneManager.ts` | No changes needed |

## Files Removed

None.

## Testing

- `tests/effects/stars.test.ts` — update for new shader (test that mesh is created)
- `tests/effects/atmosphere-glow.test.ts` — test Fresnel glow creation (if exists)
- Visual: load `http://localhost:3000/` and fly the rocket — sky should be blue on
  the ground, black in space; stars should have colored bands/nebula; Earth glow
  should follow the planet.

## Acceptance Criteria

1. Stars show colored bands + nebula noise (not just white dots)
2. Atmosphere glow follows Earth when it orbits
3. Sky is blue at sea level, fades to black by 100km altitude
4. Stars still follow camera (don't disappear when looking around)
5. All existing tests still pass
6. `tsc --noEmit` passes
