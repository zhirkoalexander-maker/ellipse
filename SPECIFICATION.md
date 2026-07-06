# Rocket Ship — Specification (Ellipse-style 2D Flight Simulator)

## Platform
- Web (Three.js + TypeScript + Vite)
- English UI
- Desktop only

## Methodology
- TDD (Vitest)
- localStorage persistence
- Git tag v0.1 = baseline

## Scale Constants
```
ORBIT_SCALE = 1e-9
VISUAL_PLANET_MULT = 3000
VISUAL_SCALE = 3e-6
PART_SCALE = 0.001
near = 0.001, far = 5000
```

## Physics
- **Patched-conics SOI** — single-body gravity per frame
- **2D heading-based thrust**: `tx = -sin(heading), ty = cos(heading), tz = 0`
- **Drag** CdA ∝ mass
- `G = 6.67430e-11`
- `G0 = 9.80665`
- `FIXED_DT = 1/60`
- **No** angular velocity engine
- **No** heating / explosions / nebulas

## Solar System (all masses ~3× real)
| Body | Mass (kg) | Position | SOI radius (auto) |
|------|-----------|----------|-------------------|
| Sun | 2e26 | [0,0,0] | ~ |
| Earth | 2e25 | 1e8 m | ~ |
| Moon | 2.2e23 | ~ |
| Venus | 1.46e25 | ~ |
| Mars | 1.9e24 | ~ |
| Mercury | 1e24 | ~ |

## Rendering
- **StandardMaterial** with flat colors (Ellipse palette)
- **Earth** — procedural texture (continents + oceans, no external images)
- **Stars** — custom shader, dark background + white twinkle stars
- **Rocket** — 3 parts: capsule_mk1 + tank_m_lfo + engine_ant
- **Total mass** ≈ 31850 kg full, thrust 1500 kN

## Controls
| Key | Action |
|-----|--------|
| ArrowLeft | Rotate heading left |
| ArrowRight | Rotate heading right |
| ArrowUp | — (no-op in 2D) |
| ArrowDown | — (no-op in 2D) |
| W | Throttle up |
| S | Throttle down |
| Q | Warp speed down |
| E | Warp speed up |
| Space | Staging |
| P | Parachute toggle |
| M | Map toggle |
| Mouse drag | Orbit camera (window-level mousedown) |

## HUD
- Speed, altitude, angle (navball), fuel bar, throttle bar
- Warp indicator
- Navball (2D compass-style)
- Button bar: **STAGE**, **CHUTE**, **MAP**

## Map
- Bird's-eye view of solar system with planet positions
- Show **SOI circles** around each planet (gravitational field boundaries)
- Planet labels
- Rocket position marker

## Rocket Visual
- 2D Ellipse-style side view
- Standing on launchpad at start
- Parts: capsule (top) + tank (middle) + engine (bottom) with engine bell

## SAS
- Toggle on/off
- When ON: automatically holds current heading (no drift from throttle or gravity)
- When OFF: free rotation with arrow keys

## ChaseCamera
- Follows rocket with fixed offset
- Mouse orbit: mousedown on window (with preventDefault)
- No lerp — direct set

## Staging
- Spacebar drops current stage
- Grounded check: launch on first throttle + staging
- Parachute: toggle deploy (P key / CHUTE button)

## Persistence
- Achievements
- High scores / progress

## Next Features (pending)
- Stronger Earth gravity (if needed)
- SOI visualization on map
- Better rocket initial appearance matching reference
- SAS implementation
