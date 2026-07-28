# Ellipse — Space Flight Simulator (v2.3)

## Platform
- Web (Three.js + TypeScript + Vite)
- English UI
- Desktop + mobile (touch controls)

## Methodology
- TDD (Vitest)
- localStorage persistence
- Git tags for versions

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
```

## Physics
- **Patched-conics SOI** — single-body gravity per frame
- **3D quaternion-based thrust** — direction from rocket attitude
- **Realistic rocket equation**: mass flow = thrust / (Isp * G0)
- **Drag** CdA ∝ mass, exponential atmosphere density
- **Multiple engines** — all engines fire simultaneously, thrust summed
- **No angular velocity persistence** between sessions
- **Reentry heating** — aerodynamic flux accumulation, radiative cooling
- **Explosions on crash** — fireball + debris with physics

## Gravity
- **Earth**: mass = 8.92e24 × 4 ≈ 3.57e25 kg → g ≈ 58.7 m/s² (6× real)
- Other bodies: realistic masses (~1.5× real for terrestrial planets)

## Solar System
| Body | Mass (kg) | Orbital radius | Notes |
|------|-----------|---------------|-------|
| Sun | 2e26 | origin | Custom shader + sprite glow |
| Mercury | 1e24 | ~2e8 m | FBM crater terrain |
| Venus | 1.46e25 | ~6e8 m | Volcanic terrain + atmosphere |
| Earth | 3.57e25 | 1e9 m | Texture + night lights + clouds + atmosphere |
| Moon | 2.2e23 | Earth+6e7(Z) | 3D FBM craters |
| Mars | 1.9e24 | 1.5e9 m | FBM + texture + atmosphere |
| Jupiter | 1.9e27 | 3e9 m | Basic sphere |
| Saturn | 5.68e26 | 5.6e9 m | Basic sphere |
| Uranus | 8.68e25 | 1.1e10 m | Basic sphere |
| Neptune | 1.02e26 | 1.7e10 m | Basic sphere |
| Pluto | 1.46e22 | 2.3e10 m | Basic sphere |

## Default Rocket (Quick Flight)
```
capsule_mk1  — 1200 kg, crew 1, parachute
tank_m_lfo   — 600 kg dry, 5000 kg fuel (LFO)
engine_ant   — 50 kg, 420 kN, Isp 350s

Total wet: 6850 kg, TWR ≈ 1.045 (barely enough)
Staging: required for orbit (Δv ~4500 m/s single-stage)
```

## Part Catalog (18 parts)
- **Capsule**: MK-1 (M, 1200 kg)
- **Tanks**: S(500)/M(5000)/L(10000)/XL(25000) kg fuel, all LFO
- **Engines**: Ant(420kN,Isp350)/Vector(1000,Isp340)/Mastodon(2500,Isp330)/Mammoth(6000,Isp310)
- **Utility**: Parachute Mk16, Landini landing legs, 3 Heat shields, TD-1 Decoupler
- **GLTF models**: Agena, Apollo-Soyuz, Saturn V, Ares I, Apollo LM, Atlas 6/9, Crawler

## Controls
| Key | Action |
|-----|--------|
| W / S | Throttle up / down |
| ↑ ↓ ← → | Pitch / Yaw |
| Q / E | Time warp down / up |
| C | Free camera toggle |
| F | Reset camera |
| T | SAS mode toggle (off/hold/prograde/retrograde) |
| Space | Stage |
| P | Parachute toggle |
| M / Tab | Map toggle |
| Esc | Pause |
| Mouse drag | Orbit camera |
| Scroll | Camera zoom |

## HUD
- Speed, altitude, vertical speed, fuel bar (%), mass, throttle %
- Navball (2D canvas): pitch lines, heading, prograde/retrograde markers
- Heat bar, warp indicator
- Button bar: STAGE, CHUTE, MAP, SAS mode, MENU, RESTART

## Map
- Top-down solar system view
- Planet positions, SOI circles (dashed), labels
- Rocket trajectory prediction (Keplerian)
- Ap/Pe markers for bound orbits
- Zoom (scroll), pan (drag), double-click to center on body

## Staging
- Flat assembly: parts ordered bottom-to-top
- Decoupler splits assembly into stages
- `removeStage`: removes decoupler + all lower roots, updates fuel tanks
- Auto-stage: fires when engine has no fuel + decoupler exists (in flight)
- Stage data computed per-frame for HUD

## Landing
- **Soft**: vertical speed < 5 m/s (8 m/s with chute) — clean landing
- **Rough**: between soft limit and 20 m/s (15 m/s with chute) — survive with shake
- **Crash**: above speed limit OR tilt > 45° (60° with legs)
- Parachute: deployable via P key or CHUTE button, CdA = 50
- Landing legs: checked in assembly, increase tilt tolerance to 60°

## TWR & Launch
- **TWR check ≥ 1.0 at current throttle** — rocket won't lift off underpowered
- Countdown: 3-2-1-LIFTOFF, only at throttle where TWR ≥ 1.0
- TWR = (thrust_kN × 1000 × throttle) / (totalMass × localGravity)

## Persistence
- Achievements (localStorage): first_launch, reach_space, land_*, stage_separate, crash
- Settings: units, difficulty, volumes
- Version cache-bust via sessionStorage

## Scenes
- **MainMenu**: HTML overlay, logo, FLIGHT/VAB/SETTINGS/GUIDE buttons
- **VAB**: 3D rocket builder with part catalog, quick presets, orbit camera, LAUNCH/BACK/CLEAR
- **Flight**: 2311-line monolith (physics, rendering, HUD, map, effects, staging, SAS)

## Known Issues (v2.3)
- FlightScene.ts needs decomposition into modules
- Landing gear meshes disabled (user preference)
- Earth mass 6× real makes orbital velocity ~19 km/s
- Flat assembly model limits radial/staged complexity
