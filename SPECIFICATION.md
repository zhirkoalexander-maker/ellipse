# Ellipse — Space Flight Simulator (v2.5)

## Platform
- Web (Three.js + TypeScript + Vite)
- English UI
- Desktop + mobile (touch controls)

## Scale Constants
```
G = 6.67430e-11
G0 = 9.80665
FIXED_DT = 1/60
ORBIT_SCALE = 1e-9
VISUAL_PLANET_MULT = 230000
VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT = 2.3e-4
PART_SCALE = 0.05
ROCKET_VISUAL_SCALE = 60
EARTH_MASS = 8.92e24 * 48  →  g ≈ 176 m/s² at R = 12.74e6 (2× real radius)
```

## Physics (v2.5)
- **Patched-conics SOI** — single-body gravity per frame
- **3D quaternion-based thrust** — direction from rocket attitude
- **Realistic rocket equation**: mass flow = thrust / (Isp * G0)
- **Multiple engines** — all engines fire simultaneously, thrust summed
- **Drag** CdA ∝ mass, exponential atmosphere density
- **Landing**: soft <5m/s (8 with chute), rough <20m/s (15 with chute), crash above
- **TWR gate**: must have TWR ≥ 1.0 at CURRENT throttle to lift off
- **Countdown**: 3-2-1-LIFTOFF, 5s cooldown after TWR failure
- **Spawn protection**: 2 seconds (120 frames) after launch
- **Aerodynamic stability**: rocket aligns with velocity in atmosphere (<70km)
- **Rotation**: yaw around surface normal, pitch around horizon tangent — realistic
- **Gravity/drag**: use warped dt — consistent at all time warp levels

## Solar System
| Body | Mass (kg) | Radius (m) | Orbital radius |
|------|-----------|------------|---------------|
| Sun | 2e26 | visual R=100 | origin |
| Earth | 4.28e26 | 12.74e6 (2×) | 1e9 m |
| Moon | 2.2e23 | 1.737e6 | Earth+6e7(Z) |
| Venus | 1.46e25 | 6.052e6 | ~6e8 m |
| Mars | 1.9e24 | 3.390e6 | 1.5e9 m |
| Mercury | 1e24 | 2.440e6 | ~2e8 m |
| Jupiter | 1.9e27 | 69.91e6 | 3e9 m |
| Saturn | 5.68e26 | 58.23e6 | 5.6e9 m |
| Uranus | 8.68e25 | 25.36e6 | 1.1e10 m |
| Neptune | 1.02e26 | 24.62e6 | 1.7e10 m |
| Pluto | 1.46e22 | 1.188e6 | 2.3e10 m |

## Earth (v2.5)
- Radius: 12.74 million meters (2× real)
- SEG: 256 — smooth sphere
- **Vertex-colored terrain** based on height:
  - Deep ocean (dark blue) → ocean → beach (beige) → plains (green) → hills (brown) → mountains (gray) → snow peaks (white)
- 4-octave FBM noise: mountain ranges, ocean basins, continental shelves
- Cloud layer (procedural, rotating)
- Atmosphere glow (Rayleigh/Mie scattering)
- Night city lights (emissive map, 5 continents)
- Optional high-res texture (/textures/earth_daymap.jpg)

## Default Rocket (Quick Flight)
```
capsule_mk1  — 1200 kg, crew 1, parachute
tank_s_lfo   — 200 kg dry, 5000 kg fuel (LFO)
engine_ant   — 50 kg, 1800 kN, Isp 350s

Total wet: 6450 kg, TWR ≈ 1.6 at g≈176
Staging required for orbit
```

## Part Catalog (18 parts)
- **Capsule**: MK-1 (M, 1200 kg) — textured body, dark heat shield, blue window, gold ring
- **Tanks**: S(5000)/M(50000)/L(100000)/XL(250000) kg fuel, all LFO — textured, dark connector rings, gold accents
- **Engines**: Ant(1800kN,Isp350)/Vector(3000,Isp340)/Mastodon(7500,Isp330)/Mammoth(18000,Isp310) — textured upper, gunmetal bell, dark cavity, gold rim, orange glow
- **Utility**: Parachute Mk16, Landini legs, 3 Heat shields, TD-1 Decoupler
- **GLTF models**: Agena, Apollo-Soyuz, Saturn V, Ares I, Apollo LM, Atlas 6/9, Crawler

## Saturn V
- GLTF model, 30000 kg dry, 500000 kg fuel, 60000 kN thrust, Isp 310

## Controls
W/S throttle, ↑↓ pitch, ←→ yaw, Space stage, M map, C freecam, T SAS, Q/E warp, Esc pause, Mouse orbit/zoom

## Scenes
- **MainMenu** (v1.0 style): SVG ellipse logo, gold accent, FLIGHT/VEHICLE ASSEMBLY/SETTINGS/GUIDE buttons via CSS classes
- **VAB**: dark sidebar, part list grouped by type, color-coded indicators, rocket breadcrumbs, UNDO/CLEAR/LAUNCH/BACK
- **Flight**: physics, rendering, HUD, map, effects, staging, SAS — 2300+ lines

## Known Issues (v2.5)
- FlightScene.ts needs decomposition into modules
- Flat assembly model limits radial/staged complexity
- No symmetry mode for boosters
- Map redraw throttled to every 5th frame to avoid lag
