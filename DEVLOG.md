# StarWeld — Devlog

## v0.4.0 — "Ground Truth" (2026-07-01)

### 🌍 Planets — Now Actually 3D
All terrestrial bodies now use **real NASA/Solar System Scope textures** with **vertex displacement** driven by the texture's luminance:
- **Earth** — 64 segments, daymap texture, 3D continents/mountains/ocean trenches, water sphere, blue atmospheric glow
- **Moon** — 64 segments, cratered highlands (fbm 3D noise), basaltic mares
- **Mars** — 64 segments, Olympus Mons scale volcanoes, dust storms hint, red glow
- **Venus** — 64 segments, volcanic plains, thick orange atmosphere glow
- **Mercury** — 64 segments, heavy cratering, no atmosphere
- **Sun** — 96 segments, **animated solar granulation + flares** via custom shader (FBM noise, time-uniform)

All displacement done on CPU at startup → normals recomputed → perfect lighting. No shader hacks.

### 🚀 Launch Pad — Kennedy Space Center (LC-39A)
- Spawn at **28.5°N, 80.6°W** (real KSC coordinates)
- Concrete pad (50m radius) + yellow hold-down markings + service tower
- Pad **orients to surface normal** — works on any planet
- No more spawning in the Atlantic

### 🪨 Terrain-Aware Collision
- `Planet.getSurfaceRadiusAt(worldPos)` samples the same heightmap used for displacement
- Landing checks against **actual terrain height**, not a sphere
- Mountains stop you, valleys catch you
- Ground-snap uses displaced radius → rocket sits on visible geometry

### 🎮 Controls — Ground Lock
- **Pitch/Yaw disabled while `grounded`** — rocket stays vertical on pad
- Rotation unlocks **only after liftoff** (thrust > weight × 1.02)
- No more tipping over before launch

### 🌌 Visual Polish
- **Sky gradient**: blue at sea level → space black by 100 km (lerp on altitude)
- **Exponential fog** near surface (FogExp2), fades with altitude
- **Directional sun light** + **hemisphere fill** + **ambient** — PBR looks right
- **Camera far plane 20000** → Moon visible from Earth orbit
- **Planet sprites** (billboards) update every frame → orbits visible on map

### ☀️ Orbital Mechanics (Compressed for Gameplay)
| Body | Distance from Primary | Note |
|------|----------------------|------|
| Earth | 1.5×10⁷ m from Sun | 30× compressed |
| Moon | 4×10⁶ m from Earth | 96× compressed (was 3.84×10⁸!) |
| Venus | 1.1×10⁷ m | — |
| Mars | 2.3×10⁷ m | — |
| Mercury | 6×10⁶ m | — |

SOI resolver now respects **parent body** (Moon→Earth, not Moon→Sun).

### ⛽ Fuel & Engines
- Tank capacities ×1.5 (S:4.5t, M:45t, L:90t, XL:225t)
- Default starter rocket (MK1 + M-tank + Ant) now reaches orbit with margin

### 🔥 Reentry Heating (Atmospheric)
- Heat flux ∝ ρ·v³ accumulated in `heatAccumulator`
- Heat shields (S/M/L) add `heatCapacity` — ablate before structure
- HUD **Heat bar** (green→yellow→red)

### 📟 HUD
```
Velocity:  2450.3 m/s
Altitude:  124.56 km
Angle:     45°
Fuel:      ████████░░ 78%
Throttle:  ██████████ 100%
Heat:      ████░░░░░░ 32%
Warp:      x1
[STAGE] [CHUTE] [MAP]
```

### 🐛 Fixed
- Moon no longer inside Earth
- No more ocean spawn
- No clipping through mountains
- Controls locked on pad
- Typescript clean (`tsc --noEmit`)

---

## v0.3.x — "Orbital Mechanics"
- N-body gravity (RK4), warp sub-stepping
- Navball with prograde/retrograde/normal markers
- Staging, parachutes, landing legs
- Chase camera with orbit mode

## v0.2.x — "VAB"
- Procedural part builder (tanks, engines, capsules, nosecones)
- Assembly tree, symmetry, snap-to-grid
- Part catalog with stats

## v0.1.x — "Prototype"
- Three.js + Vite + TypeScript setup
- Basic rocket physics, sphere planets

---

## Next: v0.5 — "Interplanetary"
- [ ] Transfer window planner (porkchop plots)
- [ ] Maneuver nodes (Δv preview)
- [ ] CommNet / science
- [ ] Phobos/Deimos, Europa, Titan
- [ ] Ring shader for Saturn
- [ ] KTX2 texture compression
- [ ] Save/load flights

---

*Built with Three.js r158, Vite, TypeScript. Textures: Solar System Scope (CC-BY 4.0), NASA Visible Earth.*
