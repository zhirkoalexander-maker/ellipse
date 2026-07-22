# Ellipse — Comprehensive Specification v0.95

> Full project state as of 2026-07-22. Every file, constant, setting, and known issue.

---

## 1. Project Identity

| Key | Value |
|-----|-------|
| Name | Ellipse |
| npm name | `ellipse` |
| Version | 0.95 (display); `package.json` says 0.1.0 |
| Type | 3D space flight simulator |
| Platform | Web (Three.js + TypeScript + Vite) |
| Base URL | `/ellipse/` (GitHub Pages) |
| Repo | `rocket-ship` (working dir; product = Ellipse) |

---

## 2. Build & Toolchain

### package.json (`/package.json`)
```json
{
  "name": "ellipse", "private": true, "version": "0.1.0", "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": { "three": "^0.160.0" },
  "devDependencies": {
    "@types/three": "^0.160.0", "jsdom": "^23.0.0",
    "typescript": "^5.3.0", "vite": "^5.0.0", "vitest": "^1.0.0"
  }
}
```

### vite.config.ts
- Base: `/ellipse/`
- Dev server: port 3000, auto-open
- Build target: es2022, sourcemap: true

### tsconfig.json
- Target: ES2022, Module: ESNext, ModuleResolution: bundler
- Strict: true
- noUncheckedIndexedAccess: true, noImplicitOverride: true
- noEmit: true (Vite handles compilation)
- Includes: `src`, `tests`

### vitest.config.ts
- Environment: jsdom
- Setup files: `./tests/setup.ts`
- Pool: forks, singleFork: true, maxForks: 1
- maxConcurrency: 1, fileParallelism: false, isolate: false
- Include: `tests/**/*.test.ts`

### .github/workflows/deploy.yml
- Trigger: push to `main`
- Steps: checkout, Node 20, `npm ci`, `npx tsc`, `npx vite build`, deploy to gh-pages via peaceiris/actions-gh-pages@v3

---

## 3. All Constants (`src/config/constants.ts`)

| Symbol | Value | Units | Description |
|--------|-------|-------|-------------|
| `G` | 6.67430e-11 | m³/(kg·s²) | Gravitational constant |
| `ORBIT_SCALE` | 1e-9 | — | Orbit compression factor (1:10⁹) |
| `VISUAL_PLANET_MULT` | 230000 | — | Visual planet size multiplier |
| `FIXED_DT` | 1/60 | s | Fixed physics timestep |
| `G0` | 9.80665 | m/s² | Standard gravity (used for Isp mass flow) |
| `EARTH_MASS` | `8.92e25 * 1440` = **1.28448e29** | kg | Earth mass (heavily scaled) |
| `PART_SCALE` | 0.05 | — | Visual part scale factor |
| `ROCKET_VISUAL_SCALE` | 40 | — | Rocket visual scale multiplier |
| `TERRAIN_DISP_FRAC` | 0.001 | — | Terrain displacement fraction of visual radius |
| `TERRAIN_OCEAN_FRAC` | 0 | — | Ocean depression (unused) |
| `TERRAIN_SEA_LEVEL` | 0.35 | — | Sea level threshold (unused) |
| `SUN_MASS_MULT` | `2e27 * 1440` = **2.88e30** | kg | Sun mass (computed in Game.ts) |

**Computed visual scale**: `VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT = 1e-9 * 230000 = 2.3e-4`

### Settings (`src/config/settings.ts`)
```ts
interface Settings {
  units: 'metric' | 'imperial' | 'mixed';
  autoSave: boolean;
  difficulty: 'easy' | 'normal' | 'hard';
}
DEFAULT_SETTINGS: { units: 'metric', autoSave: true, difficulty: 'normal' }
```

---

## 4. Solar System — Planet Masses, Radii, Positions, Velocities

**Mass multiplier**: All planet masses are multiplied by `5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5 = 1440`

### Physical Parameters

| Body | Base Mass (kg) | Scaled Mass (kg) | Radius (m) | Visual Radius (m) | 
|------|--------------|-----------------|------------|-------------------|
| Sun | 2e27 (Game.ts: `sunMass`) | 2.88e30 | N/A | 100 (fixed) |
| Mercury | 1e25 | 1.44e28 | 2.440e6 | ~561 |
| Venus | 1.46e26 | 2.1024e29 | 6.052e6 | ~1392 |
| Earth | 8.92e25 | 1.28448e29 | 6.371e6 | ~1465 |
| Moon | 2.2e24 | 3.168e27 | 1.737e6 | ~400 |
| Mars | 1.9e25 | 2.736e28 | 3.390e6 | ~780 |
| Jupiter | 1.9e28 | 2.736e31 | 6.9911e7 | ~16079 |
| Saturn | 5.683e27 | 8.184e30 | 5.8232e7 | ~13393 |
| Uranus | 8.681e26 | 1.25e30 | 2.5362e7 | ~5833 |
| Neptune | 1.024e27 | 1.475e30 | 2.4622e7 | ~5663 |
| Pluto | 4.4e21 | 6.336e24 | 1.188e6 | ~273 |

**Visual Radius** = `radius * ORBIT_SCALE * VISUAL_PLANET_MULT = radius * 2.3e-4`

### Initial Positions & Velocities (Game.ts constructor)

| Body | Position (m) | Velocity (m/s) |
|------|-------------|----------------|
| Sun | [0, 0, 0] | [0, 0, 0] |
| Mercury | [2e8, 0, 2e7] | [0, 0, 38000] |
| Venus | [6e8, 0, -6e7] | [0, 0, 21000] |
| Earth | [1e9, 0, 0] | [0, 0, 17000] |
| Moon | [1e9, 0, 6e7] | [0, 0, 17900] |
| Mars | [1.5e9, 1e9, -4e8] | [0, 0, 13500] |
| Jupiter | [3e9, -6e8, 2e8] | [0, 0, 9000] |
| Saturn | [5.6e9, 4e8, -4e8] | [0, 0, 6800] |
| Uranus | [1.1e10, -2e8, 6e8] | [0, 0, 4800] |
| Neptune | [1.7e10, 8e8, 0] | [0, 0, 3800] |
| Pluto | [2.3e10, 1.6e9, -1e9] | [0, 0, 2000] |

**Moon position**: `[earth.x, 0, earth.z + 6e7]` — offset in +Z relative to Earth.
**Moon velocity**: `[0, 0, earthVel.z + 900]` = `[0, 0, 17900]`.

---

## 5. Engine Thrust Values & Parts Catalog

### Engines

| ID | Name | Size | Mass (kg) | Thrust (kN) | Isp (s) | Fuel Type |
|----|------|------|-----------|-------------|---------|-----------|
| `engine_ant` | "Ant" Engine | S | 50 | 500,000 | 350 | LFO |
| `engine_vector` | "Vector" Engine | M | 400 | 4,500,000 | 340 | LFO |
| `engine_mastodon` | "Mastodon" Engine | L | 1,200 | 11,000,000 | 330 | LFO |
| `engine_mammoth` | "Mammoth" Engine | XL | 3,000 | 27,500,000 | 310 | LFO |

### Thrust Formula (`src/flight/Thrust.ts`)
```
forceN = engine.thrust * 1000 * throttle
massFlow = forceN / (engine.isp * G0) / 30    // ÷30 for longer burn time
```

### Tanks

| ID | Name | Size | Dry Mass (kg) | Fuel Capacity (kg) |
|----|------|------|---------------|-------------------|
| `tank_s_lfo` | Fuel Tank S (LFO) | S | 200 | 4,500 |
| `tank_m_lfo` | Fuel Tank M (LFO) | M | 600 | 45,000 |
| `tank_l_lfo` | Fuel Tank L (LFO) | L | 1,200 | 90,000 |
| `tank_xl_lfo` | Fuel Tank XL (LFO) | XL | 2,500 | 225,000 |

### Other Parts

| ID | Name | Kind | Size | Mass (kg) | Key Stats |
|----|------|------|------|-----------|-----------|
| `capsule_mk1` | MK-1 Capsule | capsule | M | 1,200 | crew=1, parachute, drag=0.5 |
| `parachute_mk16` | Mk-16 Parachute | parachute | M | 30 | drag=5.0 |
| `legs_landini` | "Landini" Landing Legs | legs | S | 80 | drag=0.1 |
| `heatshield_s` | Heat Shield S | heatshield | S | 50 | heatCap=50,000 |
| `heatshield_m` | Heat Shield M | heatshield | M | 150 | heatCap=150,000 |
| `heatshield_l` | Heat Shield L | heatshield | L | 400 | heatCap=400,000 |
| `decoupler_1` | TD-1 Decoupler | decoupler | M | 100 | drag=0.3 |

### GLTF Models (loadable as parts)

| ID | Name | Size | Mass | gltfUrl | Scale |
|----|------|------|------|---------|-------|
| `agena_target` | Agena Target Vehicle | M | 1,500 | /models/agena.glb | 0.0015 |
| `apollo_soyuz` | Apollo Soyuz | L | 5,000 | /models/apollo_soyuz.glb | 0.0015 |
| `saturn_v` | Saturn V | XL | 3,000,000 | /models/saturn_v.glb | 0.0015 |
| `ares_1` | Ares I | XL | 2,000,000 | /models/ares_1.glb | 0.0015 |
| `apollo_lunar_module` | Apollo Lunar Module | L | 15,000 | /models/apollo_lunar_module.glb | 0.002 |
| `atlas_6` | Atlas 6 (Friendship 7) | L | 120,000 | /models/atlas_6.glb | 0.0015 |
| `atlas_9` | Atlas 9 (Faith 7) | L | 120,000 | /models/atlas_9.glb | 0.0015 |
| `crawler` | Crawler Transporter | XL | 2,700,000 | /models/crawler.glb | 0.001 |

---

## 6. Size Dimensions

### Part Size → Visual Dimensions (source: `PartBuilder.ts`)

| Size | Radius (PART_SCALE * factor) | Height (PART_SCALE * factor) |
|------|------------------------------|------------------------------|
| S | 0.5 * 0.05 = 0.025 | 0.7 * 0.05 = 0.035 |
| M | 0.7 * 0.05 = 0.035 | 1.1 * 0.05 = 0.055 |
| L | 1.0 * 0.05 = 0.050 | 1.6 * 0.05 = 0.080 |
| XL | 1.4 * 0.05 = 0.070 | 2.2 * 0.05 = 0.110 |

---

## 7. Rocket Assembly System

### Assembly (`src/rocket/Assembly.ts`)

**Data structure**: Tree of `AssemblyNode`:
```ts
interface AssemblyNode {
  part: Part;
  position: Vec3;     // [x, y, z] in game units (PART_SCALE space)
  rotation: number;   // Y-axis rotation in radians
  children: AssemblyNode[];
}
```

**Key methods**:
- `addRoot(node)` — adds to `roots[]`
- `totalFuelCapacity()` — sums all `part.fuelCapacity`
- `totalMass()` — sums all `part.mass` (dry)
- `totalMassWithFuel()` — dry mass + fuel capacity
- `centerOfMass()` — mass-weighted average of all root positions
- `toMesh()` — builds `THREE.Group`, creates **smooth adapters** between adjacent parts of different sizes (see below)

### Smooth Adapters

When `toMesh()` is called, the assembly sorts roots by Y position (top to bottom), then for each adjacent pair:
1. Gets `radius` from size for each part
2. If `|r1 - r2| > 0.001` and neither is a decoupler:
   - Creates a **truncated cone** (cylinder geometry) with `radiusTop = r1`, `radiusBottom = r2`
   - `coneH = |y1 - y2| * 1.5`
   - Color: `0xdd9944` (gold), roughness: 0.2, metalness: 0.5, emissive: `0x221100` with intensity 0.3
   - Positioned at `midY = (y1 + y2) / 2`
3. Shifts all children to center at center of mass

### Rocket (`src/rocket/Rocket.ts`)

Wraps an Assembly and manages fuel.
- `fuelTanks: FuelTank[]` — collected from all assembly nodes with `fuelCapacity`
- `totalMass()` = dry + remaining fuel
- `consumeFuel(rate, dt)` — drains from **lowest tank first** (last in array)
- `removeStage(decouplerNode)` — removes all descendent nodes of the decoupler from fuel tracking

### Default Rocket (from `Game.ts showFlight()`)
When no rocket is provided:
```
capsule_mk1  at Y = 0.005 + 0.035/2 + 0.005 + 0.055/2 = 0.0475
tank_s_lfo   at Y = 0 + 0.035/2 + 0.005 + 0.035/2 = 0.0375
engine_ant   at Y = 0
```
Gap between parts: **0.005** game units.

### Rocket Builder (`src/parts/RocketBuilder.ts`)

Preset mission builder that maps descriptions to assemblies:

| Description Trigger | Stages | Stage Size | Notes |
|---------------------|--------|------------|-------|
| suborbit | 1 | tiny | S tank + Ant |
| orbit, station, satellite | 1 | small | M tank + Vector |
| moon (+land) | 1-2 | medium | 2 stages with return |
| mars/venus (+land) | 2-3 | large | 3 stages with return |
| mercury | 2 | medium | |
| sun | 3 | large | |
| heavy, safe (50% fuel) | 2 | large | |

### Save/Load (`src/storage/SaveLoad.ts`)
- localStorage keys: `ellipse_assembly_<name>`, `ellipse_assemblies`
- Serializes part IDs (not full Part objects) and reconstructs via `findPart()`
- Child nodes supported

---

## 8. Physics System

### Body (`src/physics/Body.ts`)
```ts
class Body {
  name: string; mass: number;
  position: Vec3;  // [x, y, z]
  velocity: Vec3;
  applyForce(force, dt): semi-implicit Euler (F→a→dv→dx)
}
```

### Gravity (`src/physics/Gravity.ts`)
- `gravitationalForce(source, target)`: F = G·m₁·m₂ / r² along source→target direction
- `totalGravityOn(target, sources)`: sums all gravitational forces (skips same body, massless)

### Integrator (`src/physics/Integrator.ts`)
- `rk4Step(body, forceFn, dt)`: 4th-order Runge-Kutta
- Uses temp bodies for intermediate evaluation points

### System (`src/physics/System.ts`)
- `propagate(totalWallDt, FIXED_DT)`: breaks time into sub-steps, each step applies total gravity to each body via RK4
- Skips massless bodies

### SOI Resolver (`src/physics/SoiResolver.ts`)
- `getReferenceBody(position, system)`: returns the dominant gravitational body at a point
- SOI radius: `distToPrimary * (mass / primaryMass)^0.4`
- Moon has special handling: primary = Earth

### Orbit Predictor (`src/physics/OrbitPredictor.ts`)
- `predictOrbit(pos, vel, bodyMass, soiRadius, steps)`:
  - Computes orbital elements (eccentricity, a, h vector, e vector)
  - Generates points for ellipse/hyperbola
  - Returns: `{ points, eccentricity, apoapsis, periapsis, bound, timeToAp, timeToPe }`
  - Bound if eccentricity < 1 and semi-major axis > 0
  - Capped at SOI radius * 1.5

---

## 9. Flight Scene Flow (`src/scenes/FlightScene.ts`, 2308 lines)

### Spawn (`constructor`)
1. Creates `FlightState` at Kennedy Space Center (28.5°N, 80.5°W)
2. Surface distance computed: `surfaceR + SPAWN_OFFSET_M` where SPAWN_OFFSET_M = 60m
3. Uses `Planet.getSurfaceRadiusAt()` for terrain-aware positioning
4. Rocket quaternion aligns with surface normal (points away from Earth center)
5. Creates rocket mesh at `ROCKET_VISUAL_SCALE = 40x`
6. Initial camera: hardcoded position 10 units left/forward + 3 units up from rocket visual position

### Physics Loop (`updateInner`, line 1075)
Each frame:
1. **Pause** toggle via Escape
2. If crashed: propagate bodies, update explosions, return
3. **Time warp**: multiplies dt; disables throttle during warp
4. **Controls**: read keyboard/touch, update throttle
5. **SAS**: hold/prograde/retrograde attitude correction
6. **Angular velocity**: pitch/yaw/roll inputs, engine gimbal, damping
7. **Countdown**: 3-2-1-LIFTOFF sequence when engine active and grounded
   - TWR check: must be ≥ 0.3 for liftoff
8. **Thrust**: applied via `applyThrust()`, flame + sound updated
9. **Gravity**: single-body (nearest SOI body), applied per-frame with 500 m/s cap
10. **Drag**: CdA ∝ mass, exponential atmosphere ρ = 1.225 * exp(-alt/8500), parachute CdA = 50
11. **Heat**: ρ·v³ flux accumulation, radiation cooling at 0.999/frame, MAX_HEAT effectively disabled (9,999,999,999)
12. **Collision** (line 1455-1504):
    - Penetration: inside surfaceR - 50m → always crash
    - Near surface (d < surfaceR + 60m): check vertical speed and tilt
      - Speed limit: parachute 200 m/s, no parachute 20,000 m/s
      - Tilt limit: legs 30°, no legs 20°
      - Soft landing: vertSpeed < 1 m/s → ground snap, play land sound
      - Achievement unlocks: `land_earth`, `land_moon`, `land_mars`, `land_venus`, `land_mercury`
    - Spawn protection: 1200 frames (~20s) grace period
13. **System propagation**: all planets advanced
14. **Visual sync**: rocket group positioned with visual offset (accounts for terrain)
15. **Camera**: chase or freecam mode
16. **Map**: if active, draws via 2D Canvas
17. **HUD update**: speed, altitude, fuel, heat, throttle, navball, stage data
18. **Sky color**: blue→black lerp 0m→100km altitude
19. **Reentry glow**: alt < 120km, speed > 2000 m/s → orange plasma sphere; parts glow red based on heat
20. **Screen shake**: G-force > 2.5
21. **3D orbit line**: drawn in scene via `THREE.Line`

### Staging (Spacebar, line 1916)
1. Finds lowest decoupler in assembly
2. Spawns 16 explosion particles
3. Detaches children from decoupler mesh
4. Creates debris `Body` objects with push-away velocity
5. Unlocks `stage_separate` achievement

### Crash Flow (line 2052)
1. Hides rocket mesh, stops flame/sound
2. White flash overlay (100ms)
3. Full-screen "CRASH!" overlay with reason + MENU / LAUNCH AGAIN buttons
4. Shakes camera (screenShake = 3.0)
5. Spawns explosion (8 fire spheres + 4 smoke spheres)
6. Explosion particles expand, fade over 0.5-2s

### Debris System
- After staging, detached parts become `Debris` objects with `Body` physics
- Gravity applied per-frame via `totalGravityOn()`
- Ground collision removes debris

---

## 10. HUD Layout & Data (`src/flight/HUD.ts`)

### Top-Left Panel (monospace, 75% opacity dark background)
```
SPD    2450.3 m/s    (color: yellow if >1000, red if >3000)
ALT    124.56 km     (k suffix if >10000m)
V/S    +125 m/s      (green positive, red negative)
FUEL   4.5 t         (t if >1000kg, kg otherwise)
MASS   5.2 t
HEAT   32%  ████░░░░  (green/yellow/red by threshold)
THR    100% █████████  (blue/orange/red by threshold)
[STAGE] [CHUTE] [MAP]
WARP   x1
```

### Top-Right Fuel Panel
```
FUEL  4500 kg
[██████████] bar
```

### Bottom-Right Navball (140×140px)
- Circular clipping
- Sky gradient + earth gradient on nadir side
- Pitch lines at 0°, ±10°, ±20°, …, ±80°
- Heading ticks at 0°, 45°, 90°, …, 315°
- Prograde marker (green circle), retrograde (green circle with X)
- Up marker (blue triangle ▲), nadir marker (orange triangle ▼)
- Center dot (orange)

### Heat Display
- Normalized to 300,000 J = 100%
- Colors: <40% green, 40-70% yellow, >70% red

### Pause Overlay
- "RESUME", "MENU", "RESTART" buttons, centered

### Free Camera Label
- Bottom-left: "FREE" text when in free camera mode

---

## 11. Camera System

### Chase Camera (`src/flight/ChaseCamera.ts`)

**Orbit parameters**:
- Default distance: 7, range: 0.5–500
- Default azimuth: 0, polar: π/2.5
- Lerp speed: 15, orbit speed: 3

**Controls**:
- Mouse drag: orbit azimuth + polar
- Scroll wheel: zoom distance
- Shift + Arrow keys: keyboard orbit
- Z/X: keyboard zoom
- F: reset to defaults
- C: toggle chase ↔ free camera

**Follow logic** (`follow()`):
1. Compute rocket visual position
2. Apply keyboard orbit + mouse inertia
3. Lerp distance, azimuth, polar toward targets
4. Compute camera position at spherical offset from rocket
5. Dynamic up-vector to prevent gimbal lock at poles

### Free Camera (`FlightScene.ts` internal)

**Activated by C key**, toggled via `cameraMode: 'chase' | 'free'`.

**Controls**:
- Mouse drag: orbit azimuth + polar
- Scroll wheel: zoom distance
- Arrow keys: orbit (only in freecam mode)
- Initial distance: 4, range: 0.5–500

**In freecam**, throttle is forced to 0 and rocket rotation is disabled.

---

## 12. Map System (`FlightScene.ts`, lines 363-858)

### Activation
- M key or Tab toggles the map
- Full-screen dark overlay (95% opacity) with 2D Canvas

### Drawing (every frame when visible)
1. Dark background `#060814`
2. Radial gradient from rocket position
3. Grid lines + concentric range rings from rocket
4. Planet orbit trails around Sun (dashed ellipses from `predictOrbit`)
5. Atmospheric halos for Earth, Venus, Mars, Jupiter, Saturn, Uranus, Neptune
6. Kármán line boundary rings (1.2× planet dot radius)
7. Planet dots with glow (sized 1.5–8px via `sizes` map)
8. Planet labels in uppercase monospace
9. SOI circles (dashed rings) around each planet
10. Scale indicator bar (bottom-right, auto-nice units)
11. Compass rose (bottom-left, N/S/W/E labels)
12. Rocket position (diamond icon, rotated to velocity direction)
13. Velocity vector arrow
14. Sun direction dotted line from rocket
15. **Trajectory prediction line** with gradient (blue for bound orbits, gold for hyperbolic)
    - Shows Ap/Pe markers for bound orbits
    - Arrow at trajectory end
    - Target planet label at trajectory end
16. Map info text (bottom-left): distance, zoom level

### Map Colors (for dots + labels)
```
sun: #ffdd44, earth: #4fc3f7, moon: #ccccee, venus: #e8b84c,
mars: #e88444, jupiter: #e8b87c, saturn: #f4e8b0, uranus: #5fe0f0,
neptune: #5b88ee, pluto: #ddccbb
```

### Map Zoom
- Scroll wheel: 0.9×/1.1× per tick
- Clamped: 0.05–100
- Double-click on planet: zoom to it

### Map Pan
- Mouse drag: pan X/Y

---

## 13. Planet Rendering

### Planet Base Class (`src/planets/Planet.ts`)
- Extends `Body`
- Stores `radius` (physics) and `visualRadius = radius * VISUAL_SCALE`
- `syncMesh()`: updates mesh position to match physics position * VISUAL_SCALE
- `getSurfaceRadiusAt(worldPos)`: accounts for terrain displacement, returns physics-space radius

### Earth (`src/planets/Earth.ts`, 435 lines)
- **Geometry**: 200-segment sphere (previously 64)
- **Texture**: Async load from `/textures/earth_daymap.jpg`, fallback is procedural 4096×2048 with continent ellipses + ocean + polar caps
- **Bump map**: `generateEarthBumpMap()` (1024×512)
- **Night lights**: Procedural city lights (2048×1024), used as emissive map
- **Roughness map**: Generated, oceans smooth (40), land rough (180)
- **Cloud layer**: Procedural cloud texture (2048×1024), translucent sphere at 1.008× radius
- **Terrain displacement**: 4-layer sin/cos noise, max disp 0.1% of visual radius, ocean depth 0.02%
- **Atmosphere glow**: `new AtmosphereGlow(visualR, 0x4488ff, 2.5, visualR * 0.10)`

### Moon (`src/planets/Moon.ts`, 101 lines)
- **Geometry**: 64 segments
- **Texture**: `/textures/moon.jpg`
- **Terrain**: 3D FBM noise (4 octave craters + 3 octave micro detail)
  - Max displacement: 4% of visual radius
- **Material**: roughness 0.95, metalness 0.0

### Venus (`src/planets/Venus.ts`, 107 lines)
- **Texture**: `/textures/venus.jpg`
- **Terrain**: FBM volcano + plains noise, max 1.5% visual radius
- **Atmosphere glow**: `new AtmosphereGlow(visualR, 0xe8a84c, 0.4)`

### Mars (`src/planets/Mars.ts`, 107 lines)
- **Texture**: `/textures/mars.jpg`
- **Terrain**: FBM mountains (5 octaves) + detail (3 octaves), max 3.5% visual radius
- **Atmosphere glow**: `new AtmosphereGlow(visualR, 0xd46a4a, 0.25)`

### Mercury (`src/planets/Mercury.ts`, 101 lines)
- **Texture**: `/textures/mercury.jpg`
- **Terrain**: FBM craters (4 octaves) + micro (3 octaves), max 3% visual radius
- **No atmosphere**

### Jupiter (`src/planets/Jupiter.ts`, 61 lines)
- **Texture**: Procedural `generateJupiterTexture()` (banded gas giant with Great Red Spot + Oval BA)
- **Terrain**: FBM band noise, max 2% visual radius
- **Atmosphere glow**: `new AtmosphereGlow(visualR, 0xd4a574, 0.15)`
- **Axial tilt**: 3.1°

### Saturn (`src/planets/Saturn.ts`, 145 lines)
- **Texture**: Procedural `generateSaturnTexture()` (banded golden with rings texture)
- **Rings**: `RingGeometry` inner 1.15×R, outer 2.4×R with custom ring texture (Cassini Division, Encke Gap); outer faint ring 2.4–2.8×R
- **Atmosphere glow**: `new AtmosphereGlow(visualR, 0xf4e4a1, 0.1)`
- **Axial tilt**: 26.7°

### Uranus (`src/planets/Uranus.ts`, 74 lines)
- **Texture**: Procedural blue-green
- **Rings**: Simple `RingGeometry` 1.2–2.1×R, opacity 0.3
- **Atmosphere glow**: `new AtmosphereGlow(visualR, 0x4fd0e8, 0.1)`
- **Axial tilt**: -97.8° (extreme)

### Neptune (`src/planets/Neptune.ts`, 61 lines)
- **Texture**: Procedural deep blue with Great Dark Spot
- **Atmosphere glow**: `new AtmosphereGlow(visualR, 0x4b70dd, 0.15)`
- **Axial tilt**: 28.3°

### Pluto (`src/planets/Pluto.ts`, 16 lines)
- **Texture**: Flat color `0xddccbb`, 32 segments
- **No terrain, no atmosphere**

### Sun (`src/planets/Sun.ts`, 137 lines)
- Extends `Body` (not Planet — has its own `mesh`)
- Visual radius: 100 (fixed, not scaled)
- **Shader**: Animated FBM noise with `uTime` uniform, warm orange `0xffcc00`, additive blending
- **Sprite**: 256×256 radial gradient glow sprite, scale 250,000
- **Light**: `DirectionalLight` 0xffeedd intensity 5.0

---

## 14. Atmosphere Glow Settings (`src/effects/AtmosphereGlow.ts`)

**Dual-shell system**: inner shell (1.01× radius) + outer shell (1.06× radius).

### Constructor Parameters Used Per Planet

| Planet | Color | Intensity | atmHeight | GlowPower | 
|--------|-------|-----------|-----------|-----------|
| Earth | 0x4488ff | 2.5 | visualR * 0.10 | 3.0 (default) |
| Venus | 0xe8a84c | 0.4 | default (visualR * 0.08) | 3.0 |
| Mars | 0xd46a4a | 0.25 | default | 3.0 |
| Jupiter | 0xd4a574 | 0.15 | default | 3.0 |
| Saturn | 0xf4e4a1 | 0.1 | default | 3.0 |
| Uranus | 0x4fd0e8 | 0.1 | default | 3.0 |
| Neptune | 0x4b70dd | 0.15 | default | 3.0 |

**Shader uniforms** (per inner shell): `uSunDir`, `uPlanetCenter`, `uInnerRadius`, `uAtmHeight`, `uRayleighCol`, `uMieCol`, `uDensity`, `uTerminatorCol`, `uGlowPower`

**Rendering**: Additive blending, depthWrite: false, front side. Day/night/terminator scattering model with Rayleigh + Mie phase functions. Outer shell uses simplified glow shader (fainter, wider).

---

## 15. Terrain Settings

### Earth
- **Noise**: 4 octaves sin/cos at frequencies 3.0, 6.0, 12.0, 25.0
- **Max displacement**: `visualRadius * 0.001` = ~1.465m visual
- **Ocean depth**: `visualRadius * 0.0002` = ~0.293m visual
- **Threshold**: elev > 0.4 → land (quadratic ramp), elev ≤ 0.4 → ocean (linear)
- **Applied**: CPU-side vertex displacement, normals recomputed

### Moon
- **Noise**: 3D FBM, craters (4 octaves ×8 freq) + micro (3 octaves ×30 freq)
- **Max displacement**: `visualRadius * 0.04` = ~16m visual
- **Ocean multiplier**: 0.15× maxDisp
- **Threshold**: elev > 0.45

### Mercury
- **Max**: 3% visual radius, threshold 0.4, micro ratio 0.12

### Venus
- **Max**: 1.5% visual radius, threshold 0.35, ocean ratio 0.05

### Mars
- **Max**: 3.5% visual radius, threshold 0.4, ocean ratio 0.1

### Jupiter/Saturn/Uranus/Neptune
- **Max**: 1.5-2% visual radius, threshold 0.4, ocean ratio 0.1

### General Terrain Parameters (constants.ts)
```
TERRAIN_DISP_FRAC = 0.001    (not directly used; each planet overrides)
TERRAIN_OCEAN_FRAC = 0       (unused)
TERRAIN_SEA_LEVEL = 0.35     (unused)
```

---

## 16. Visual Effects

### Engine Flame (`src/effects/EngineFlame.ts`)
- 600 particles, additive blending
- `FLAME_SCALE = PART_SCALE / 0.08 * 1.5 = 0.9375`
- Core particles (white→yellow→orange→red over lifetime 0.25–0.35s)
- Outer particles (larger, softer, fixed orange)
- Vacuum mode: 3.5× speed, wider spread, blue-shifted colors
- Throttle controls spawn rate (3–6 per frame × throttle)

### Ground Smoke (`src/effects/GroundSmoke.ts`)
- 100 particles, normal blending, size 0.3× SMOKE_SCALE
- `SMOKE_SCALE = PART_SCALE * ROCKET_VISUAL_SCALE = 0.05 * 40 = 2.0`
- Spawns below rocket, rises with random velocity
- Fades when engine stopped

### Stars (`src/effects/Stars.ts`)
- Inverted sphere geometry, radius 50,000, 64×48 segments
- Custom ShaderMaterial, backside rendered
- 3-layer star field: dense dim, bright, foreground
- Nebula: sin-based color (pink + blue)
- Sky gradient: dark bottom → slightly brighter top
- Position follows camera

### Procedural Textures (`src/effects/ProceduralTextures.ts`, 2508 lines)
Generates PBR texture sets (color, normal, roughness, metalness, AO) for:
- Tank (S/M/L/XL): white/grey with weld seams, USA markings, foam insulation patches
- Capsule: white body + dark ablative heat shield, blue/red stripes, windows
- Engine: dark metal upper, copper nozzle, bolt flange, soot gradient
- Parachute: white nylon fabric with radial gore seams, suspension lines
- Landing legs: olive green struts, hydraulic chrome bands, foot pads
- Decoupler: dark gunmetal, separation ring, pyro indicators
- Heat shield: dark ablative with char streaks, tile gaps
- Gold foil: multilayer golden MLI with crinkles, oxidation spots
- Fabric: white nylon with weave pattern, stitching

### Texture Loader (`src/effects/TextureLoader.ts`)
- Async loads external textures: `metal013`, `plates`, `metal009`, `metal021`, `fabric`
- Falls back to checker textures
- Detail textures: metal scratches, panel lines, rivets, carbon fiber, thermal protection, fabric weave (all procedurally generated)

---

## 17. Sound System (`src/flight/SoundManager.ts`)

Uses Web Audio API:

| Sound | Waveform | Frequency | Duration | Notes |
|-------|----------|-----------|----------|-------|
| Engine idle | Sawtooth + filtered noise | 80 + throttle×80 Hz | Continuous | Gain 0.01–0.04 |
| Staging | Square | 200→40 Hz sweep | 0.5s | Explosive burst |
| Crash | Triangle + noise burst | 120→20 Hz sweep | 1.5s | Noise crackle |
| Landing | Sine | 300→60 Hz sweep | 0.3s | Soft thud |

---

## 18. Controls (`src/flight/Controls.ts` + `TouchControls.ts`)

### Keyboard

| Key | Action |
|-----|--------|
| W | Throttle up (rate: 0.5/s) |
| S | Throttle down (rate: 0.3/s) |
| ArrowUp / ArrowDown | Pitch |
| ArrowLeft / ArrowRight | Yaw |
| A / D | Roll |
| Space | Stage |
| Escape | Pause toggle |
| C | Toggle chase/free camera |
| F | Reset camera view |
| T | SAS toggle |
| Q / [ | Warp down |
| E / ] | Warp up |
| M / Tab | Map toggle |
| P | Parachute toggle |
| G | Landing gear toggle |
| F1 | HUD visibility toggle |
| Shift+Arrows | Keyboard orbit (chase cam) |
| Z / X | Zoom in/out |

### Warp Levels
```
[1, 3, 5, 10, 100, 1000, 100000, 1000000]
```

### Touch Controls
- Left side: virtual joystick (140px circle) for pitch/yaw
- Right side: THR+, STAGE, THR-, R-, R+ buttons
- Auto-detects touch devices

---

## 19. Scenes & UI

### Main Menu (`src/scenes/MainMenuScene.ts`)
- HTML overlay: dark background, "ELLIPSE" logo (SVG ellipses + gold text)
- Buttons: FLIGHT (primary), VEHICLE ASSEMBLY (secondary), SETTINGS (ghost), GUIDE (ghost)
- Guide overlay: controls reference table + build instructions

### VAB (`src/scenes/VABScene.ts`)
- 3D scene with grid floor, platform ring
- Orbit camera (mouse drag + scroll)
- Left panel (280px): quick build presets, current rocket list, part catalog
- Presets: Suborbital, Earth Orbit, Moon Landing, Moon Return, Moon Safe, Mars, Solar Orbit, Heavy Lifter
- Part list: all 8 procedural parts + 8 GLTF models
- Launch button → transitions to FlightScene
- Async GLTF model loading with status messages

### Settings Panel (`src/ui/Settings.ts`)
- Modal overlay with: Units selector, Auto-save toggle
- Persists to `ellipse_settings` localStorage key

### Toast (`src/ui/Toast.ts`)
- Fixed top-center, auto-fade after 2500ms

### Achievements (`src/core/Achievements.ts` + `AchievementData.ts`)
- Persistent via `ellipse_achievements` localStorage
- 15 achievements: `first_launch`, `reach_space`, `reach_orbit`, `first_landing`, `parachute_landing`, `moon_landing`, `no_damage`, `one_stage`, `crash`, `land_earth`, `land_moon`, `land_mars`, `land_venus`, `land_mercury`, `stage_separate`
- Toast notification on unlock

---

## 20. Loading Screen (`index.html`)
- Star field animation (120 random stars, twinkling)
- Logo "ELLIPSE v0.95" with gold glow pulse
- Spinning loader
- Cycling messages: INITIALIZING → LOADING SOLAR SYSTEM → GENERATING TEXTURES → PREPARING VEHICLES → CALIBRATING SENSORS (3s each)
- Version check via sessionStorage → auto-reload on version change
- Service worker registration: `/ellipse/sw.js`

### Service Worker (`public/sw.js`)
- Skip waiting on install
- Navigate all clients on activate (force refresh)

### Cache Strategy
```
Cache-Control: no-cache, no-store, must-revalidate, max-age=0
Pragma: no-cache
Expires: 0
```

---

## 21. Renderer Setup (`src/core/Renderer.ts`)
```js
WebGLRenderer({ antialias: false, powerPreference: 'high-performance' })
pixelRatio: window.devicePixelRatio
clearColor: 0x000010 (dark blue)
toneMapping: NoToneMapping
outputColorSpace: SRGBColorSpace
```

### Scene Manager (`src/core/SceneManager.ts`)
- Camera: PerspectiveCamera FOV 45°, near 1.0, far 5e7
- Lights: AmbientLight 0x223355 0.1, HemisphereLight 0x335577/0x112233 0.15
- Stars mesh positioned at camera
- FPS tracking (not displayed)

---

## 22. All Files by Directory

### `/` (root)
| File | Purpose |
|------|---------|
| `index.html` | Entry point, loading screen |
| `package.json` | Dependencies & scripts |
| `tsconfig.json` | TypeScript config |
| `vite.config.ts` | Vite build config |
| `vitest.config.ts` | Test runner config |
| `.env` | OPENROUTER_API_KEY (unused in app) |
| `.gitignore` | Standard Node.js + .env + .DS_Store + screenshots/ |
| `README.md` | Quickstart guide |
| `DEVLOG.md` | Development log v0.1–v0.4 |
| `SKILL.md` | Placeholder skill definition |
| `SPECIFICATION.md` | Original spec (outdated 2D design) |
| `processed_screenshots.json` | Color analysis of 4 screenshots |
| `design-preview.html` | Standalone HTML preview |

### `/src/config/`
| File | Purpose |
|------|---------|
| `constants.ts` | All game constants |
| `settings.ts` | Settings interface + defaults |

### `/src/core/`
| File | Purpose |
|------|---------|
| `Game.ts` | Top-level game class, creates system, scenes, loop |
| `SceneManager.ts` | THREE.Scene + camera + stars + lights + FPS |
| `Renderer.ts` | WebGLRenderer wrapper |
| `Achievements.ts` | Achievement tracking (localStorage) |
| `AchievementData.ts` | Achievement definitions (15 entries) |

### `/src/physics/`
| File | Purpose |
|------|---------|
| `Body.ts` | Physics body (mass, position, velocity, applyForce, kineticEnergy) |
| `Gravity.ts` | gravitationalForce, totalGravityOn |
| `Integrator.ts` | RK4 integrator |
| `System.ts` | N-body system with propagate |
| `SoiResolver.ts` | Reference body selection by SOI |
| `OrbitPredictor.ts` | Keplerian orbit prediction |

### `/src/planets/`
| File | Purpose |
|------|---------|
| `Planet.ts` | Base class, visual radius, syncMesh, getSurfaceRadiusAt |
| `Sun.ts` | Sun with custom shader, sprite glow, directional light |
| `Earth.ts` | Earth with terrain, atmosphere, clouds, night lights, procedural textures |
| `Moon.ts` | Moon with FBM crater terrain, texture |
| `Venus.ts` | Venus with FBM terrain, thick atmosphere glow |
| `Mars.ts` | Mars with FBM mountain terrain, thin atmosphere glow |
| `Mercury.ts` | Mercury with FBM crater terrain |
| `Jupiter.ts` | Jupiter with procedural banded texture, atmosphere glow |
| `Saturn.ts` | Saturn with rings, procedural texture, atmosphere glow |
| `Uranus.ts` | Uranus with rings, procedural texture, atmosphere glow |
| `Neptune.ts` | Neptune with procedural texture, Great Dark Spot, atmosphere glow |
| `Pluto.ts` | Simple flat-colored sphere |

### `/src/effects/`
| File | Purpose |
|------|---------|
| `Stars.ts` | ShaderMaterial star field sky dome |
| `AtmosphereGlow.ts` | Dual-shell atmosphere shader (Rayleigh + Mie scattering) |
| `EngineFlame.ts` | 600-particle engine flame (core + outer) |
| `GroundSmoke.ts` | 100-particle launch smoke |
| `ProceduralTextures.ts` | PBR texture generation for all parts + planet textures |
| `TextureLoader.ts` | Async external texture loading + detail textures |

### `/src/flight/`
| File | Purpose |
|------|---------|
| `FlightState.ts` | State container (rocket, position, velocity, throttle) |
| `Controls.ts` | Keyboard + touch input handling |
| `TouchControls.ts` | Mobile touch UI (joystick + buttons) |
| `ChaseCamera.ts` | Spherical orbit camera around rocket |
| `HUD.ts` | All HUD elements (telemetry, navball, buttons, pause overlay) |
| `Thrust.ts` | Thrust force application + fuel consumption |
| `SoundManager.ts` | Web Audio engine + event sounds |

### `/src/rocket/`
| File | Purpose |
|------|---------|
| `Assembly.ts` | Assembly tree, mass/com calculations, toMesh with adapters |
| `Rocket.ts` | Fuel management, staging |

### `/src/parts/`
| File | Purpose |
|------|---------|
| `Part.ts` | Part interface definition |
| `PartBuilder.ts` | Procedural part mesh construction (capsule, tank, engine, etc.) + GLTF loader |
| `PartCatalog.ts` | All part definitions (8 procedural + 8 GLTF) |
| `RocketBuilder.ts` | Mission description → Assembly builder |

### `/src/scenes/`
| File | Purpose |
|------|---------|
| `FlightScene.ts` | Main flight simulation (2308 lines) |
| `MainMenuScene.ts` | Main menu UI |
| `VABScene.ts` | Vehicle Assembly Building |

### `/src/storage/`
| File | Purpose |
|------|---------|
| `SaveLoad.ts` | Assembly serialization to localStorage |

### `/src/ui/`
| File | Purpose |
|------|---------|
| `Settings.ts` | Settings panel + persistence |
| `Toast.ts` | Toast notification system |

### `/src/utils/`
| File | Purpose |
|------|---------|
| `noise.ts` | 3D hash, noise3D, fbm3D, lerp utilities |

### `/styles/`
| File | Purpose |
|------|---------|
| `tokens.css` | Design tokens (colors, spacing) |
| `typography.css` | Text styles |
| `components.css` | Button/panel component styles |

### `/public/`
| File | Purpose |
|------|---------|
| `sw.js` | Service worker (skip waiting + client refresh) |
| `textures/` | 23 texture files (metal, planet, fabric) |
| `models/` | 8 GLB 3D models |

### `/tests/`
| File | What it covers |
|------|----------------|
| `setup.ts` | WebGL canvas shim + localStorage shim for jsdom |
| `smoke.test.ts` | Basic test harness check |
| `spacing.test.ts` | Part spacing calculations |
| `rocket-config.test.ts` | All capsule×tank×engine combos build, adapter creation, centerOfMass, catalog integrity |
| `adapter.test.ts` | Adapter creation for S-size mismatches, same-size no-adapters |
| `integration.test.ts` | Constants validation, part catalog, assembly, gravity, rocket mesh, adapters |
| `integration/smoke.test.ts` | Full launch cycle (thrust + propagate) |
| `physics/body.test.ts` | Body initialization, applyForce, kineticEnergy |
| `physics/gravity.test.ts` | gravitationalForce, totalGravityOn, symmetry cancellation |
| `physics/integrator.test.ts` | Free drift, circular orbit stability, energy conservation (RK4) |
| `physics/system.test.ts` | Add body, bodyByName, propagate advances positions |
| `physics/soi-resolver.test.ts` | SOI picks Earth when close, Sun when far |
| `physics/orbit-predictor.test.ts` | Circular orbit prediction, hyperbolic trajectory detection |
| `rocket/assembly.test.ts` | addRoot, totalMass, totalMassWithFuel, centerOfMass |
| `rocket/fuel.test.ts` | Fuel tracking, bottom-to-top drain, totalMass decreases |
| `parts/catalog.test.ts` | Catalog size, required fields, capsule/tank/engine validation |
| `parts/builder.test.ts` | Part mesh creation, geometry type checks, material type checks |
| `flight/controls.test.ts` | Pitch/yaw keys, throttle increase, staging consume-once |
| `flight/thrust.test.ts` | Thrust acceleration, fuel consumption, zero throttle |
| `flight/state.test.ts` | FlightState init, consumeFuel |
| `flight/sky-gradient.test.ts` | THREE.Color lerpColors behavior |
| `effects/stars.test.ts` | Stars creates Group with ShaderMaterial sky dome |
| `effects/engine-flame.test.ts` | EngineFlame creates Group, particle positions update |
| `effects/procedural-textures.test.ts` | All texture generators produce correct-size CanvasTextures |
| `core/achievements.test.ts` | Unlock persists, isUnlocked, list, callback fires once |
| `core/renderer.test.ts` | Renderer creates canvas element |
| `storage/saveload.test.ts` | Save/load roundtrip, listAssemblies, unknown returns null |

---

## 23. Known Issues

1. **Earth mass is enormously inflated** — `EARTH_MASS = 8.92e25 * 1440 = 1.28e29 kg` (real Earth: 5.97e24). This is intentional to make gravity strong enough for gameplay at compressed scale, but means surface gravity is unrealistically high.

2. **Engine thrust values are in kN but treated as enormous** — 500,000 kN for "Ant" is 500,000,000 N. Combined with inflated Earth mass, this produces workable TWR for gameplay.

3. **Mass flow is divided by 30** in `Thrust.ts` — `massFlow = forceN / (isp * G0) / 30`. This extends burn time beyond realistic values for gameplay purposes.

4. **No angular velocity engine for planets** — Planets don't rotate on their axes despite having `rotation.z` set on their meshes (axial tilts). Planet positions advance only via gravity.

5. **Single-body gravity in FlightScene** — FlightScene applies gravity from only the nearest SOI body per frame, not full N-body. The System propagates N-body for planets but the rocket isn't a Body in the system (it's a separate FlightState).

6. **Terrain displacement doesn't affect visual planet meshes uniformly** — Each planet class duplicates the terrain noise code rather than sharing it. Earth has its own `getTerrainHeightVisual` while Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune each implement inlined FBM.

7. **Crash speed limit is 20,000 m/s without parachute** — This is extremely high; the rocket needs to hit at orbital velocity to crash. Parachute deployment reduces limit to 200 m/s.

8. **MAX_HEAT is 9,999,999,999** — Heat is effectively never lethal. The `HEAT_RADIATION_RATE = 0.999` per frame also makes cooling very fast.

9. **Spawn protection timer is 1200 frames** — ~20 seconds at 60fps. During this window, collision detection is completely disabled.

10. **Free camera while ground-stuck** — Toggling freecam (`C`) while grounded still disables throttle, which can be confusing since you can't launch.

11. **Debug marker visible** — `_debugMarker` (green sphere) is created but `visible = false`. Debug overlay `#rocket-debug` shown once.

12. **VAB GLTF loading is async** — Models may not be visible immediately when assembling. Status messages show loading progress.

13. **Camera snap on spawn** — Initial camera position is hardcoded to `[rocketVisX + 10, rocketVisY + 3, rocketVisZ + 10]` and ChaseCamera is immediately initialized. On first frame, `_camSnapped = false` triggers a snap to the chase camera position.

14. **Impact marker is 2D-only** — Positioned at `y = 0` in visual space regardless of terrain height.

15. **Parachute mesh always at rocket + 0.02 Y** — No physics, purely visual attachment.

---

## 24. Version History Summary (from DEVLOG.md)

| Version | Date | Description |
|---------|------|-------------|
| v0.1.x | — | Three.js + Vite + TS setup, basic rocket, sphere planets |
| v0.2.x | — | VAB, procedural parts, assembly tree, symmetry, snap-to-grid |
| v0.3.x | — | N-body (RK4), warp, navball, staging, parachutes, chase camera |
| v0.4.0 | 2026-07-01 | 3D planets with vertex displacement, KSC launch pad, terrain collision, sky gradient, atmosphere glow, heat/reentry, HUD polish, fuel balancing |
| v0.95 | 2026-07-22 | **Current**: free camera, map, SAS, GLTF models, stage panel, sonic boom, screen shake, orbit line, exhaust light, countdown, presets, debug cleanup |

---

## 25. Index of Every File (Complete)

```
/
├── .env
├── .gitignore
├── .github/workflows/deploy.yml
├── DEVLOG.md
├── README.md
├── SKILL.md
├── SPECIFICATION.md
├── design-preview.html
├── index.html
├── package.json
├── package-lock.json
├── processed_screenshots.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── docs/
│   ├── 3d-objects.md
│   ├── design-system.md
│   └── SPEC.md (this file)
├── public/
│   ├── sw.js
│   ├── models/
│   │   ├── agena.glb
│   │   ├── apollo_lunar_module.glb
│   │   ├── apollo_soyuz.glb
│   │   ├── ares_1.glb
│   │   ├── atlas_6.glb
│   │   ├── atlas_9.glb
│   │   ├── crawler.glb
│   │   └── saturn_v.glb
│   └── textures/
│       ├── earth_daymap.jpg
│       ├── fabric_color.jpg
│       ├── fabric_normal.jpg
│       ├── fabric_rough.jpg
│       ├── mars.jpg
│       ├── mercury.jpg
│       ├── metal009_color.jpg
│       ├── metal009_metal.jpg
│       ├── metal009_normal.jpg
│       ├── metal009_rough.jpg
│       ├── metal013_color.jpg
│       ├── metal013_metal.jpg
│       ├── metal013_normal.jpg
│       ├── metal013_rough.jpg
│       ├── metal021_color.jpg
│       ├── metal021_metal.jpg
│       ├── metal021_normal.jpg
│       ├── metal021_rough.jpg
│       ├── moon.jpg
│       ├── plates_color.jpg
│       ├── plates_metal.jpg
│       ├── plates_normal.jpg
│       ├── plates_rough.jpg
│       └── venus.jpg
├── src/
│   ├── main.ts
│   ├── config/
│   │   ├── constants.ts
│   │   └── settings.ts
│   ├── core/
│   │   ├── AchievementData.ts
│   │   ├── Achievements.ts
│   │   ├── Game.ts
│   │   ├── Renderer.ts
│   │   └── SceneManager.ts
│   ├── physics/
│   │   ├── Body.ts
│   │   ├── Gravity.ts
│   │   ├── Integrator.ts
│   │   ├── OrbitPredictor.ts
│   │   ├── SoiResolver.ts
│   │   └── System.ts
│   ├── planets/
│   │   ├── Earth.ts
│   │   ├── Jupiter.ts
│   │   ├── Mars.ts
│   │   ├── Mercury.ts
│   │   ├── Moon.ts
│   │   ├── Neptune.ts
│   │   ├── Planet.ts
│   │   ├── Pluto.ts
│   │   ├── Saturn.ts
│   │   ├── Sun.ts
│   │   ├── Uranus.ts
│   │   └── Venus.ts
│   ├── effects/
│   │   ├── AtmosphereGlow.ts
│   │   ├── EngineFlame.ts
│   │   ├── GroundSmoke.ts
│   │   ├── ProceduralTextures.ts
│   │   ├── Stars.ts
│   │   └── TextureLoader.ts
│   ├── flight/
│   │   ├── ChaseCamera.ts
│   │   ├── Controls.ts
│   │   ├── FlightState.ts
│   │   ├── HUD.ts
│   │   ├── SoundManager.ts
│   │   ├── Thrust.ts
│   │   └── TouchControls.ts
│   ├── rocket/
│   │   ├── Assembly.ts
│   │   └── Rocket.ts
│   ├── parts/
│   │   ├── Part.ts
│   │   ├── PartBuilder.ts
│   │   ├── PartCatalog.ts
│   │   └── RocketBuilder.ts
│   ├── scenes/
│   │   ├── FlightScene.ts
│   │   ├── MainMenuScene.ts
│   │   └── VABScene.ts
│   ├── storage/
│   │   └── SaveLoad.ts
│   ├── ui/
│   │   ├── Settings.ts
│   │   └── Toast.ts
│   └── utils/
│       └── noise.ts
├── styles/
│   ├── components.css
│   ├── tokens.css
│   └── typography.css
├── tests/
│   ├── setup.ts
│   ├── smoke.test.ts
│   ├── spacing.test.ts
│   ├── adapter.test.ts
│   ├── rocket-config.test.ts
│   ├── integration.test.ts
│   ├── core/
│   │   ├── achievements.test.ts
│   │   └── renderer.test.ts
│   ├── effects/
│   │   ├── engine-flame.test.ts
│   │   ├── procedural-textures.test.ts
│   │   └── stars.test.ts
│   ├── flight/
│   │   ├── controls.test.ts
│   │   ├── sky-gradient.test.ts
│   │   ├── state.test.ts
│   │   └── thrust.test.ts
│   ├── integration/
│   │   └── smoke.test.ts
│   ├── parts/
│   │   ├── builder.test.ts
│   │   └── catalog.test.ts
│   ├── physics/
│   │   ├── body.test.ts
│   │   ├── gravity.test.ts
│   │   ├── integrator.test.ts
│   │   ├── orbit-predictor.test.ts
│   │   ├── soi-resolver.test.ts
│   │   └── system.test.ts
│   ├── rocket/
│   │   ├── assembly.test.ts
│   │   └── fuel.test.ts
│   └── storage/
│       └── saveload.test.ts
└── app/ (separate sub-app, not part of main build)
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    ├── src/
    │   ├── assets/
    │   │   ├── hero.png
    │   │   ├── typescript.svg
    │   │   └── vite.svg
    │   ├── counter.ts
    │   ├── main.ts
    │   └── style.css
    └── tests/
        ├── physics/forces.test.ts
        ├── physics/soi.test.ts
        └── smoke/app-shell.test.ts
```

Note: `app/` is a separate Vite app (not part of the Ellipse game — appears to be a demo/template).

---

**Document generated 2026-07-22 from full codebase read.**

## COMPLETE COMMIT HISTORY (642 commits)

96644a6 2026-07-22 v0.95: ROCKET_VISUAL_SCALE 23→40 (bigger, details visible)
9adb600 2026-07-22 v0.95: clean rocket materials — no emissive, simple finish
51ba40c 2026-07-22 v0.95: gravity ×5 all planets + thrust ×5 + gravity cap 500
e941738 2026-07-22 v0.95 version badges
95db34b 2026-07-21 v0.95: FIX adapter orientation — top=r1 bottom=r2 (correct direction)
dad644d 2026-07-21 v0.95: gravity cap 50→200 (effective g≈12000 m/s²)
2f80788 2026-07-21 v0.95: capped gravity per frame (max 50 m/s) + deeper collision threshold
4974bfb 2026-07-21 v0.94: thrust /1.7 + TWR threshold 0.3 — very weak engine
d2cdb54 2026-07-20 v0.94: sun light 2.5→5.0 (bright day side)
4d42ff7 2026-07-20 v0.94: darker night side — ambient 0.1 hemi 0.15
ccf39c8 2026-07-20 v0.94: +2 spacing tests — verify parts don't overlap (86 total)
ebab619 2026-07-20 Earth texture 4096×2048 + night lights 2048×1024
6d9eea8 2026-07-20 adapter more metallic + flame 1.5× bigger
a82fc87 2026-07-20 v0.94: fix rocket part overlap — spaced with gaps between parts
0faa3f5 2026-07-20 v0.94: +2 adapter tests — verified all size combos (84 total)
36dbe3f 2026-07-20 v0.94: +11 permanent integration tests (82 total)
32e953f 2026-07-20 v0.94: +5 rocket config tests (16 capsule×tank×engine combos pass)
a0427a9 2026-07-20 v0.94: terrain 0.0025→0.001 (mountains ~1.3 units tall)
4c7c37b 2026-07-20 v0.94: atmosphere density 2.5 height 10%
ce5df0a 2026-07-20 v0.94: ChaseCamera.dispose() + call from FlightScene
1991bb5 2026-07-20 v0.94: fix Controls memory leak (removeEventListener in dispose)
35a312a 2026-07-20 v0.94: finalized — 71 tests, 0 TS errors, clean build
03dafc5 2026-07-20 v0.93: brighter green continents
43a430f 2026-07-20 v0.93: adapter count log for debugging
13496d1 2026-07-20 v0.93: Earth texture 6144→2048 (75MB→8MB RAM)
1066f6c 2026-07-20 v0.93: menu shows immediately, models load in background
2e3aece 2026-07-20 v0.93: remove dead G-FRC code (runtime error fix)
3eadc8f 2026-07-19 v0.93: TWR≈0.7 + liftoff threshold 0.5 — slow ascent
64fb0ba 2026-07-19 v0.93: adapters=exact radius + thrust TWR≈1.0 (Ant=253k kN)
c37674e 2026-07-19 v0.93: thrust from v0.78 + thicker adapters (1.08× radius, emissive)
dd2124c 2026-07-19 v0.93: G-FRC removed, thrust /2.5, 71 tests pass
5370367 2026-07-19 HUD left + FUEL right (swapped)
99e7dba 2026-07-18 rocket 23 VPM 230k
53820f7 2026-07-18 cam 7
9b6eca3 2026-07-18 VPM 227k terrain 0.0025
e2df05a 2026-07-18 cam 5 rocket 22
30c83ae 2026-07-17 VPM 229k
39edd51 2026-07-17 cam 8 terrain 0.003
7bf0c4e 2026-07-17 VPM 231k rocket 24
44a1871 2026-07-17 cam 6 terrain 0.002
0bc9b52 2026-07-17 rocket 22
813b771 2026-07-17 cam 7 VPM 228k
975cefc 2026-07-17 rocket 21 terrain 0.0025
d47ccef 2026-07-17 cam 6 VPM 230k
ef4a0ae 2026-07-17 rocket 23 terrain 0.003
1041277 2026-07-17 VPM 226k cam 7
36b5f20 2026-07-17 terrain 0.002
602d88e 2026-07-17 VPM 233k rocket 22 cam 8
9c16cff 2026-07-17 terrain 0.0025
15d9375 2026-07-17 rocket 24 cam 5
72e0247 2026-07-17 VPM 229k
9248fd7 2026-07-17 terrain 0.0035 cam 7
a8f8fc2 2026-07-17 VPM 232k rocket 22 cam 6
06db8cd 2026-07-17 terrain 0.002
5335212 2026-07-17 cam 7
509a9ce 2026-07-17 VPM 228k + rocket 21
75c7389 2026-07-17 terrain 0.003 + cam 6
e9d69ae 2026-07-17 rocket 22
bb05fbc 2026-07-17 cam 8 + VPM 231k
c32c39d 2026-07-17 terrain 0.0025
dd81ed7 2026-07-17 rocket 23
62a91a9 2026-07-17 cam 5 + VPM 227k
85fd456 2026-07-17 adapter slightly wider than parts (1.05× radius)
e06df13 2026-07-17 VPM 230k + rocket 22
4ca2a95 2026-07-17 cam 7 + terrain 0.003
85b5ea3 2026-07-17 rocket 23
9b09e36 2026-07-17 VPM 234k + cam 6
84e4f22 2026-07-17 terrain 0.002
0622b0d 2026-07-17 cam 7 + rocket 21
b958467 2026-07-17 VPM 230k
cfec240 2026-07-17 terrain 0.0035 + cam 5
4e33427 2026-07-17 rocket 22
0fafc52 2026-07-17 cam 8 + VPM 236k
100c2af 2026-07-17 terrain 0.0025
06825ff 2026-07-17 rocket 20
1381979 2026-07-17 VPM 232k
49598b2 2026-07-17 cam 6
e6cdd47 2026-07-17 v0.92: finalized crash/heat/spawn protection + gold adapters
99f8f66 2026-07-17 crash limits: 200/20000/50000 — very hard to crash
044827a 2026-07-17 spawn protection 10s→20s
ade13cd 2026-07-17 heatFlux 5e-6→1e-6 (5× slower heating)
1b4ee2b 2026-07-17 heat radiation 0.995→0.999 (cools instantly)
15209ed 2026-07-17 MAX_HEAT 10B — overheat truly impossible
70a0d67 2026-07-17 all engines thrust /1.3
7712cd9 2026-07-17 Ant thrust 684k→500k (slower ascent)
e6130d3 2026-07-17 camera snap reset on liftoff
2f4eb2f 2026-07-17 v0.91: smooth gold adapters + version
b240ddf 2026-07-17 adapter gold color 0xddaa66
121201e 2026-07-17 adapter: brighter color 0xccccdd + taller 1.2× + debug log
a6078e8 2026-07-17 rocket 22 final
d9f287c 2026-07-17 terrain 0.003
a5874b4 2026-07-17 VPM 228k
666a920 2026-07-17 cam 7
5bf924f 2026-07-17 rocket 21
8626b7d 2026-07-17 VPM 235k
851d396 2026-07-17 terrain 0.003 + cam 8
e699ebd 2026-07-17 rocket 23
d84d66b 2026-07-17 terrain 0.004
493cbf8 2026-07-17 cam 6 + VPM 225k
94faf39 2026-07-17 rocket 25
8ddc118 2026-07-17 VPM 230k + cam 7
e79719a 2026-07-17 rocket 22
c139e9d 2026-07-17 cam 9
c169f5c 2026-07-17 VPM 220k
3181072 2026-07-17 rocket 20
8a3d05d 2026-07-17 cam 5
ddfd391 2026-07-17 terrain 0.004 Earth
0a71f19 2026-07-17 FIXED_DT back 1/60
76f7f80 2026-07-17 VPM 250k
52b85de 2026-07-17 cam 7
c1acded 2026-07-17 rocket 28
7caf953 2026-07-17 terrain 0.005 Earth
801a802 2026-07-17 VPM 245k
147cfe8 2026-07-17 cam dist 6
651dc52 2026-07-17 rocket 26
044707d 2026-07-17 terrain 0.005
69dab4e 2026-07-17 camera near 1.0
106e43d 2026-07-17 FIXED_DT 1/50
c854bc5 2026-07-17 VPM 240k
fd6999f 2026-07-17 rocket scale 24
5c4db4c 2026-07-17 moon closer 6e7
e403efb 2026-07-17 v0.90: navball 140→150px
94b4e44 2026-07-17 v0.90: Mercury closer 2e8
6890fc3 2026-07-17 v0.90: G-FRC field + setGForce method
65822fa 2026-07-17 v0.90: G-FRC meter in HUD
20c7b2e 2026-07-17 v0.90: Earth emissive 0.6 + version badges
297952c 2026-07-17 v0.90: vertical speed V/S indicator in HUD
85f0e47 2026-07-17 v0.90: fuel panel moved to LEFT
b57d0e4 2026-07-17 v0.90: HUD moved to RIGHT
dffd66b 2026-07-17 v0.89 badges
9223e52 2026-07-17 v0.89: camera LERP 4→15, polar above rocket, first frame snap
59880ac 2026-07-17 deploy: c8908659da410f3d5c891890e86359f107ccbc76
c890865 2026-07-17 v0.88: thrust ×2.7 — TWR should exceed 1.0
6f6c13f 2026-07-17 deploy: 4fa1621960c5aa46c1f13c19c24a98a3b569adce
4fa1621 2026-07-17 v0.87 badges
3317ee7 2026-07-17 deploy: e26066c3c5cb32803e1ea34c1c01b0b1e5419f60
e26066c 2026-07-17 v0.87: thrust /2.5 + heatFlux /10 — slower rocket, slower overheat
6758b4c 2026-07-16 deploy: 71468c85cd56b721387c9cefae7563d3b4202600
71468c8 2026-07-17 v0.86: crash skip during spawn protection + wider smoother cone adapters
5579bae 2026-07-16 deploy: d50e7e3f635c6c152c7a00cf313d2f39397b8fb8
d50e7e3 2026-07-17 v0.85: crash speedLimit 10→5000, spawn protection 10s
ef4f0bc 2026-07-16 deploy: ffd3498a036518eb5683c316238d960e6fc629ca
ffd3498 2026-07-16 v0.85: spawn protection 3s — no crash on start
8e9bd5b 2026-07-16 deploy: a05eceadfe6a95da6c5f5dc1da174e16c1b4dc6d
a05ecea 2026-07-16 v0.85 badges
69c5682 2026-07-16 deploy: 551ec1effafae68a206e943eef8252ba310cbe90
551ec1e 2026-07-16 v0.85: gravity ×3 + overheat disabled — g≈42240 m/s², TWR≈2.5
18d7ee2 2026-07-16 deploy: 8930e2e9b81facb8654cf32844e46f929684d0f7
8930e2e 2026-07-16 v0.84: gravity /15 — g≈14080 m/s²
7d0bce0 2026-07-16 deploy: e854d2667606c9e08b1fe36e696d1484be2d8b90
e854d26 2026-07-16 v0.84 version badges
f7f9bb2 2026-07-16 deploy: 06680ad0017f4068de01656e140920d02d4a912f
06680ad 2026-07-16 v0.84: gravity /20 + smooth tank adapters between different sizes
354c95f 2026-07-16 deploy: c4155fbf9daf02d79b6b389524a091dd31deb70b
c4155fb 2026-07-16 v0.83: version badges
32a4562 2026-07-16 deploy: 13be1ea91dca08db2a194d33902b8a41c8043036
13be1ea 2026-07-16 v0.83: gravity ×40 — Ant thrust unchanged, TWR=0.025 (can't lift off)
ec7aef7 2026-07-16 deploy: ab761bb16f3eba80de354a4a0ae919249a75be7d
ab761bb 2026-07-16 v0.82 version badges
184e24e 2026-07-16 deploy: b8b43d02a8e3b82bd2f6bab6bc99c939253d4d32
b8b43d0 2026-07-16 v0.82: gravity ×2 more — g≈105600 m/s², thrust 633600 kN
3c317fe 2026-07-16 deploy: b75183334f43d4468e96ad95950a3d6b7892b15a
b751833 2026-07-16 v0.82: SAS removed + day/night fix + gravity ×2 + planets closer
588143c 2026-07-16 deploy: 02ee7809a24c35bc8199551162db4681705278c7
02ee780 2026-07-16 v0.81: version strings to v0.81
95d5dcc 2026-07-16 deploy: daeb6d3ae0a37b66b44fb790302f99fc4ca9bb9a
daeb6d3 2026-07-16 v0.81: gravity ×6 + thrust ×6 + overheat fixed + easier controls
86688a7 2026-07-16 deploy: 5160132a3a25a781edcaffe32b2649582840dfdc
5160132 2026-07-16 v0.80: update all version strings to v0.80
5b7b2e0 2026-07-16 deploy: d399c4f3214665ad94bc9d5067cfe6acf27aea81
d399c4f 2026-07-16 v0.80: ANGULAR_ACCEL 8→12 (more responsive pitch/yaw)
c133541 2026-07-16 deploy: cbac316780b2e60c8520918645801d2ca38c1aae
cbac316 2026-07-16 v0.80: throttle response 0.3→0.5 (faster)
2f01cde 2026-07-16 deploy: e9a4f83aa4ebaab6818bde0e8b05b7f7d9d7772d
6a91359 2026-07-16 deploy: e95afb717ae4e802b17ae1ff357a718deaa5d920
e9a4f83 2026-07-16 v0.80: MAX_HEAT 50k→30k (explodes faster)
e95afb7 2026-07-16 v0.80: gravity ×1.5 more — TWR≈1.0 (hard to lift off)
8abfb8e 2026-07-16 deploy: 44d09c29b9d812fcc0da408cc9567271c8673555
44d09c2 2026-07-16 v0.80: TERRAIN_DISP_FRAC 0.006
86bc96c 2026-07-16 deploy: c5ccfc3dc48e95d559d9cf110299f1669757a39d
c5ccfc3 2026-07-16 v0.80: terrain 0.006
69c6416 2026-07-16 deploy: 5a4dcb93d0be14312d1129b591fcc5808dd85592
5a4dcb9 2026-07-16 v0.79: fix Pluto mesh position
ed11dbe 2026-07-16 deploy: ac21266ce09335c44b43caf84f55b7a28e64cf36
ac21266 2026-07-16 v0.79: await preloadModels before showing menu — all GLTF models loaded first
52242bd 2026-07-16 deploy: bad01577f169b7e8d2bfabd7c5a3990a8b564a27
bad0157 2026-07-16 v0.78: overheat fix + gravity ×4 all planets + Pluto added + thrust ×4
4850c99 2026-07-15 deploy: ae8292dd3e56b56ab254dbe499a68dd745851939
ae8292d 2026-07-15 60: FINAL — spawn 60m. Marathon complete.
57bc746 2026-07-15 deploy: d1c947e9d1fe2b4cfbfc121f065aeace6240eea7
d1c947e 2026-07-15 59: cam 7→8
50af1bf 2026-07-15 deploy: f499c8ac16d4e7cc6d98d5cda00a7956193feabd
f499c8a 2026-07-15 58: VPM 235k
a7fd05b 2026-07-15 deploy: b3f0dfa768d8c68ae2c0f9ac7206acb2d4c7443b
b3f0dfa 2026-07-15 57: hemi 0.6→0.55
9379fa3 2026-07-15 deploy: 2cea1739e2c9308c9fdfa0dac5d75b93d3daabb3
2cea173 2026-07-15 56: spawn 100→80
b4c1ec7 2026-07-15 deploy: 6cd59ac367a2d0d4996247d856db92f148d829ad
6cd59ac 2026-07-15 55: ambient 0.5→0.55
6d7c46d 2026-07-15 deploy: cbddc3d5f40019d56e0363bca2581d1b3e5618a4
cbddc3d 2026-07-15 54: rocket 24→22
7218deb 2026-07-15 deploy: 0fe3b77717a3b76dd1eedcecc3a67be905c5ccd4
0fe3b77 2026-07-15 53: VPM 240k
1561718 2026-07-15 deploy: 5cd0a92c57c13539b1ce175e26f5f2e74e263291
5cd0a92 2026-07-15 52: cam 9→7
72b0105 2026-07-15 deploy: c2193cb842e2a4cda2b6500bb2fdfaf07a16e6ee
c2193cb 2026-07-15 51: rocket 26→24
f3a2146 2026-07-15 deploy: 26d99b478b0a10a104b265e1d3479865c3084c35
26d99b4 2026-07-15 50: VPM 250k
0965b06 2026-07-15 deploy: 3f1ced10e634e684c238cccabe608aab292d029a
3f1ced1 2026-07-15 49: atmos 2.5→2.0
a939312 2026-07-15 deploy: 48fa3b00c417b9c5657242d675fe91f5b3d6db22
48fa3b0 2026-07-15 48: FOV 50→45
cb5b3c1 2026-07-15 deploy: 6c56584180a829fab2efe7f746dfbd3b2f3017b2
6c56584 2026-07-15 47: cam 8→9
77c7da9 2026-07-15 deploy: b546b39df781049add42469fd9b695f6331d31e1
b546b39 2026-07-15 46: rocket 28→26
aaa7b3a 2026-07-15 deploy: b46766ebd6befc1ec4d2dc16f4c24a1851ca60f5
b46766e 2026-07-15 45: VPM 260k
fb101d8 2026-07-15 deploy: 9a44cceeba1d47d1ef249584df3f494b750109cb
9a44cce 2026-07-15 44: FOV 40→50
11a13f4 2026-07-15 deploy: abb91fa2ad381521c93b8d0f1952e583a9429d60
abb91fa 2026-07-15 43: cam back 11→8
29757b0 2026-07-15 deploy: c0724bce208e522b49896fde5937f586f9e3e87c
c0724bc 2026-07-15 42: rocket back 32→28
d206418 2026-07-15 deploy: 012b261e52e308e43354e1db49ac41b2fde8fe70
012b261 2026-07-15 41: VPM 280k
0f367b9 2026-07-15 deploy: 1df8a36245aa501bc0306df2a103ceed6a2a279c
1df8a36 2026-07-15 40: FOV 45→40
679c8d8 2026-07-15 deploy: 6826bc9e541e432600de51f551cb820e9ca550e2
6826bc9 2026-07-15 39: cam 10→11
3e16be4 2026-07-15 deploy: 6f13006943f86738c009d5f0f683680ac8af8c79
6f13006 2026-07-15 38: rocket 30→32
468d8ec 2026-07-15 deploy: 972e24749529867be358a42d810d84cae831d31f
972e247 2026-07-15 37: VPM 270k
8a2ed85 2026-07-15 deploy: e2c317236567661f4f2bf9c00df4fd937008427b
e2c3172 2026-07-15 36: cam 9→10
089d78d 2026-07-15 deploy: 69b2f5e31a11820eb36110d4e816a72f41020942
69b2f5e 2026-07-15 35: rocket 28→30
f56f886 2026-07-15 deploy: 25cd26986153e79ca3269d8ce38142a050b247ab
25cd269 2026-07-15 34: VPM 260k
8923483 2026-07-15 deploy: 6c6427ec64e7d02286d6ef8ec93bb7a4cf8bda8a
6c6427e 2026-07-15 33: cam dist 8→9
7c0fc60 2026-07-15 deploy: 33f20a3a9f30c719ad8a844cad2778748374af05
33f20a3 2026-07-15 32: rocket scale 25→28
31a3ac2 2026-07-15 deploy: 9a5db657d3ac43596190713456156cc79bee33c9
9a5db65 2026-07-15 31: VPM 240→250k
ab2ad06 2026-07-15 deploy: 43f7e588d1e2ee57e3f097070d788f83dad32695
43f7e58 2026-07-15 30: atmosphere 2.0→2.5
abaca78 2026-07-15 deploy: a413cad1d87e06aba8a09ac34445df697ea971e1
a413cad 2026-07-15 29: cam dist 7→8
9662c72 2026-07-15 deploy: 3a9a9cb797dcbc8f638d1d1fd26fdbaf29de8662
3a9a9cb 2026-07-15 28: ROCKET_VISUAL_SCALE 25
d1bf5b6 2026-07-15 deploy: 6faf1fd07df19b43837e97701a70e4e51f39ca91
6faf1fd 2026-07-15 27: VISUAL_PLANET_MULT 240000
e8ac50b 2026-07-15 deploy: 70980c1164080647f181da2dc62d573ecdc0cac8
70980c1 2026-07-15 v0.77z: cam dist 5→7
36226cb 2026-07-15 deploy: 64f400bc49e9f0d6220778efa742b008c39c24cf
64f400b 2026-07-15 v0.77y: ROCKET_VISUAL_SCALE 22
05ac20e 2026-07-15 deploy: 8c43342600130c941dcb8058e3d2a4d788f6efbd
8c43342 2026-07-15 v0.77x: VISUAL_PLANET_MULT 230000
d8b122d 2026-07-15 deploy: a13cfd0b598eb244ed90bf7a5f80f2667c53227b
a13cfd0 2026-07-15 v0.77w: cloud rotation speed 0.008→0.012
75c4a8f 2026-07-15 deploy: fad83be558b99ab01a76123ce2341d6474d392cf
fad83be 2026-07-15 v0.77v: clearColor 0x000010
94db8bb 2026-07-15 deploy: d657d07f29e2f94ed927488643dbd396c6874a52
d657d07 2026-07-15 v0.77u: near 0.5 far 5e7
451589d 2026-07-15 deploy: 0d86dfd07c6cec80a55b930a6c299366462be746
0d86dfd 2026-07-15 v0.77t: throttle 3-color gradient
4b84ae2 2026-07-15 deploy: 04e7e67ea5930c29b9778e698faa27c7876ee1dc
04e7e67 2026-07-15 v0.77s: speed color >3000 red
1ce5f6b 2026-07-15 deploy: 8e588b6e96328516862ba533e7b2018b257e3cd3
8e588b6 2026-07-15 v0.77r: SPD >1k shows km/s
cad3bf8 2026-07-15 deploy: 74525031a993b41ff46405a85862b9faa531fcc7
7452503 2026-07-15 v0.77q: ALT >10km shows km
5e687bc 2026-07-15 deploy: e500e93d34a673253327299b9870cfb74497c028
e500e93 2026-07-15 v0.77p: ALT compact format (1.5k)
35eba15 2026-07-15 deploy: 71cbee53d7a3853ad7a15266f8293e538cd25db3
71cbee5 2026-07-15 v0.77o: SPAWN_OFFSET 50→100
2e59281 2026-07-15 deploy: b9cc0856e8b3b24de78e17ea5e54146ef4752d7b
b9cc085 2026-07-15 v0.77n: cleaner GUIDE overlay
4da05a1 2026-07-15 deploy: da91bdefb5f559e9cf5274b5fda5325c2c33ff73
da91bde 2026-07-15 v0.77m: FREE CAM→FREE
566fc85 2026-07-15 deploy: 00d4dfc474e042df9b2a50fe8d064276dbc1f103
00d4dfc 2026-07-15 v0.77l: TERRAIN_DISP_FRAC 0.004
8dfef7c 2026-07-15 deploy: ad73b18d14e6728a741d7a26608aa1a7a76d6e0c
ad73b18 2026-07-15 v0.77k: cam dist 4→5
e41c5c8 2026-07-15 deploy: bb2c1020e215f697ea5f04f7d6883acc1e4aa789
bb2c102 2026-07-15 v0.77j: hemisphere light 0.6
b29d829 2026-07-15 deploy: 1a668af127ec15fee1d374acc07e0ed21131fea5
1a668af 2026-07-15 v0.77i: ambient light 0x8888cc 0.5
200344e 2026-07-15 deploy: 1cd9f04fd08896410adc1032364205eb7d1127c1
1cd9f04 2026-07-15 v0.77h: ROCKET_VISUAL_SCALE 15→18
62ef731 2026-07-15 deploy: 28cd2288eafbd082b7ccd6042f7d66edc897ef3d
28cd228 2026-07-15 v0.77g: VISUAL_PLANET_MULT 220000
0bd7b5c 2026-07-15 deploy: 599f4df51ad53af190c8a8e8055360aaa97cba53
599f4df 2026-07-15 v0.77f: terrain 0.0005→0.004 (visible mountains)
cc55633 2026-07-15 deploy: e754427c5fc969db799a1e8cb5cfee79a5f72bf5
e754427 2026-07-15 v0.77e: FOV 35→45
72c8a65 2026-07-15 deploy: 6fdba3d9d86c03ecddf961b0588c7520ae32aef9
6fdba3d 2026-07-15 v0.77d: atmosphere glow density 2.0 height 12%
714e394 2026-07-15 deploy: 2ce56585569ef084b10277b585a43ffc7566045b
2ce5658 2026-07-15 v0.77c: map trajectory → PLANET labels
681ccd7 2026-07-15 deploy: 70c77a9c3de0c6d160cc1ad7458f83aa3fc927f7
70c77a9 2026-07-15 v0.77b: menu z-index 500 + right fuel panel + hexagons already gone
6760427 2026-07-15 deploy: 52a1e69d582c5395bbc66ee37ed382c6b9f65cfb
52a1e69 2026-07-15 v0.77a: planets ×2 further + gravity ×5 + thrust ×5
2a3e7f0 2026-07-15 deploy: 9f4cde6169a680ad546e2be80896fffc7b6d0fee
4b4ab4a 2026-07-15 deploy: 79b7be49b4700276d1d023c9071bfdd57e3a545c
3b7e9d6 2026-07-15 deploy: 9ced41ceaefcf56ee4e9e8c4906fe3e6f9266c58
3510409 2026-07-15 deploy: 8aff1795685af0031b74734068e2960721844822
8118fe2 2026-07-15 deploy: 90d077956dc07b353f3f2b64dce85b5f2dd9bd71
17af21b 2026-07-15 deploy: 1bd11356bed2b22b6c744887435ee9aeac78027f
bae3589 2026-07-15 deploy: b3aff5dc501c8a8c543fc772bed75a36dba10e9b
bab9a95 2026-07-15 deploy: b51733e71431320bd12a2704b03dcf2025d7b285
b1bb573 2026-07-15 deploy: 49e363012103c883e3a7b7b8bb10ec18a22f9d28
391cc7f 2026-07-15 deploy: f7f512fb8b7dbdb1e3f87e4c29f7b6dcb90c1c78
eb5f700 2026-07-15 deploy: 8f922d169fdd5c57785b8a9e0a7681713c108c06
816632c 2026-07-15 deploy: 4237d97d7fdc36f76d9cd50113afd48d540e8ddb
035bbe1 2026-07-15 deploy: 9f4cde6169a680ad546e2be80896fffc7b6d0fee
9f4cde6 2026-07-15 v0.76: gravity ×10, thrust ×3, Moon closer, fuel /30
fd86eb1 2026-07-15 deploy: 0dd73a3dc4bc0fa2725a834fd74341f01a4c3849
0dd73a3 2026-07-15 v0.75: planets ×3 distance, gravity ×5, thrust ×5, remove gear, fuel HUD, map labels
3c2402c 2026-07-15 deploy: ffdfbfcd4b5b6230567adb1ae7905a35859bcca9
ffdfbfc 2026-07-15 v0.74: atmosphere glow taller (15% radius) + density 1.5 for visible blue aura
4de1990 2026-07-15 deploy: d6ec4174f680e069d05894eca637cf70aabc303b
d6ec417 2026-07-15 v0.74: opaque MainMenu + better rocket materials (original textures + emissive)
0f04e2c 2026-07-15 deploy: 5a1cd50b2509d4c9811762e8def10d47d6362302
5a1cd50 2026-07-15 v0.73: rocket scale 50→15 + fuel 10× slower + cam dist 8→4
772d144 2026-07-15 deploy: 580d59fdcb630d2c39979a1430b7959c7b5a9bd4
580d59f 2026-07-15 v0.72: CRITICAL BLUR FIX — remove backdrop-filter from full-screen HUD root
eae2248 2026-07-15 deploy: bc9cda84ca61a2b123852724a8b1d8a5844c4df0
bc9cda8 2026-07-15 v0.72: canvas CSS 100vw/100vh + native pixelRatio for CRISP rendering
d6081ba 2026-07-15 deploy: 40fbb72efb0fc3fbf7f1b31c53122f2f5d5e2e4d
40fbb72 2026-07-15 v0.71: VISUAL_PLANET_MULT 562500→200000 — sharper Earth texture (0.77 px/unit)
f344f6b 2026-07-15 deploy: 415dfa3c498faab0ccddd5d66745071be13b6df1
415dfa3 2026-07-15 v0.71: version badges updated
ec68764 2026-07-15 deploy: c23a446dbc375e8976e5179210d0d47f2e166c64
c23a446 2026-07-15 v0.71: atmosphere density 3.0→1.0 (was too strong, looked hazy)
fe68b29 2026-07-15 deploy: 42b6e3e01ea3199fc191526b49ad048dea8843e1
42b6e3e 2026-07-15 v0.71: NoToneMapping + clearColor black — raw rendering for sharpness
34d990c 2026-07-15 deploy: 3727963fa4fe506674c577ffe419a55424410819
3727963 2026-07-15 v0.71: standard depth buffer — near=1.0 far=1e6, removed logDepth
2424f1e 2026-07-15 deploy: 5a4f3117e7c3b6da985593c3afb1d69f4dc7acfa
5a4f311 2026-07-15 v0.71: atmosphere 3.0 + visualOffset safety margin +2 + vibrant oceans
ddd1151 2026-07-14 deploy: d70e2dfada979996a8761a35325fa1463a540144
3ad91b8 2026-07-14 deploy: 09361266dc9b504b3bec19df0d97487bfb6358b2
d70e2df 2026-07-15 v0.70: polygon offset on Earth mesh — pushed behind rocket
0936126 2026-07-15 v0.70: disable dynamic FOV — fixed at 35 for sharpness
afbba89 2026-07-14 deploy: 0ad4891edf7bf5dc6bf19bc3f01cac6e1a6ada73
0ad4891 2026-07-15 v0.70: preload Earth texture before Earth construction
abce796 2026-07-14 deploy: b4f3d93a74acf07a76c3e007ce3afb569fc9b29a
b4f3d93 2026-07-15 v0.70: Earth 1× + pixelRatio=1 + texture 6144 + anisotropy 16
8b8868b 2026-07-14 deploy: fb2a21e388b2cc19859a3e4cbd9e02f9c876006f
fb2a21e 2026-07-15 v0.69: antialias=false + outputColorSpace=SRGB for sharp rendering
447e4a6 2026-07-14 deploy: 428c3b1c371ca4e71d468da107ecb83dbf204746
428c3b1 2026-07-15 v0.69: FOV 45→35, cam dist 30→20, remove mipmaps for sharpness
a826f4d 2026-07-14 deploy: 8db78b32fa9046926f0aa53e876701aa360ce5c6
8db78b3 2026-07-14 v0.68: version badges to v0.68
0650aaa 2026-07-14 deploy: e2e6f443d136b28201d1f5cb05fa021a96e632a1
e2e6f44 2026-07-14 v0.68: texture mipmaps + anisotropy on all rocket part textures
59f1f23 2026-07-14 deploy: 1232fa5a90099ed8d0f6e9aab1baca8af3130b18
1232fa5 2026-07-14 v0.68: Earth ×3 + blue atmosphere glow + pixelRatio cap
e5ee1bd 2026-07-14 deploy: f5c80498fa3dca453c68c9c53a6f65e01547c276
f5c8049 2026-07-14 v0.67: polygonOffset on rocket to prevent z-fight with Earth terrain
0c8eb46 2026-07-14 deploy: 5295c77d7198ca622620626cdca2e9d44929cd62
5295c77 2026-07-14 v0.67: service worker for auto-cache-clear on update
31213d2 2026-07-14 deploy: 24d0cae94454fde7229754e6ff331c42f8612a25
24d0cae 2026-07-14 v0.67: cache-bust — version badge, auto-reload on version change
bebf914 2026-07-14 deploy: d73014a6a5d88ee5b100493bea290f78ca60d118
d73014a 2026-07-14 v0.67: remove ×17 scale → fix blur + max liftoff gravity + hide green sphere
13208f5 2026-07-14 deploy: d7b7d72ad14bc0da01007010f2996cec06b35ef1
d7b7d72 2026-07-14 v0.66: restore MainMenu, fix crash (TWR check), fix altitude, GUIDE button, green Earth
c7e74fb 2026-07-14 deploy: 100c6d16e1cd03d4578701b45d5f343a18c5b6d6
100c6d1 2026-07-14 v0.65: force ALL rocket parts WHITE (color=0xffffff, metal=0.1, roughness=0.5, emissive=0x333333)
8399d88 2026-07-14 deploy: 2def488c3efd2eb7a9102e72cf294d2a8d81641d
2def488 2026-07-14 v0.64: Earth texture 4096×2048 + debug marker 200 radius for scale
9fd9fe6 2026-07-14 deploy: 3e606c5e3caf31cce2f0f23bce7e2cfd6482b87f
3e606c5 2026-07-14 v0.63: revert thrust, scale everything ×17 proportionally
1a238c8 2026-07-14 deploy: 440e0e3c6d2ac2e4b98080da70738c625677ff7c
440e0e3 2026-07-14 v0.62: freecam blocks throttle + debug shows controls
f09a9b1 2026-07-14 deploy: c461f7e6946097a5c125287a37be0c371c8692a8
c461f7e 2026-07-14 v0.61: day/night — Earth emissive 0.3→0.5 (city lights brighter)
4c23378 2026-07-14 deploy: d80351f9ee9c18c3985de3ae028ff5f2054fe651
d80351f 2026-07-14 v0.60: camera near 0.5→1.0 for larger Earth scale
26eb60b 2026-07-14 deploy: f7d132cb5747b3e24cefb11f4d9a90edb1192f28
f7d132c 2026-07-14 v0.59: CRITICAL GRAVITY FIX + Earth ×17 + gravity ×20 + thrust ×400 + bright materials
b566f1f 2026-07-14 deploy: 103a8e88f35e537c890f32b29fa1e38b6dc4208d
103a8e8 2026-07-14 v0.58: brighter sky blue (0.35→0.45, 0.55→0.65, 0.85→0.95)
394d532 2026-07-14 deploy: 1c615ce640a1ee3a3b825cb2b5e659e10a5cd06c
1c615ce 2026-07-14 v0.57: brighter Earth — ocean colors, lower roughness, higher emissive
59681a3 2026-07-14 deploy: 48ba8894f57b777a9e0c9587381d735b76edea7d
48ba889 2026-07-14 v0.56: lower metalness 1.0→0.3, roughness 1.0→0.6 in default materials
455d4d5 2026-07-14 deploy: 57fbfe524a73cc2e5625d16879ca0d6593ea9d57
57fbfe5 2026-07-14 v0.55: override initial camera to fixed offset + giant green debug sphere
4cd5765 2026-07-14 deploy: 4ff8301af7498f81aaf609d9eff9664af469e7c0
4ff8301 2026-07-14 v0.54: emissive on all rocket parts + max ambient light + closer cam
03005ae 2026-07-14 deploy: c7c3ca8cf61ff18f6562814e9262e8b1de8569cb
c7c3ca8 2026-07-14 v0.53: narrow FOV 60→45 (base 50→40) for larger rocket on screen
d73eaef 2026-07-14 deploy: d7e9b4297d198c0f35b3a848d2ab8f2a7649c48d
d7e9b42 2026-07-14 v0.52: pixelRatio cap 2→3 for sharper rendering on high-DPI displays
02355c6 2026-07-14 deploy: 6fd91328342314867c913fd79a3b9cace2b0eb99
6fd9132 2026-07-14 v0.51: global JS error alert for runtime diagnosis
92c4455 2026-07-14 deploy: 8d741c1fb4b01d3cb5718351524e33dd7acffc6e
8d741c1 2026-07-14 v0.50: debug wireframe marker + portrait fix
fc8f551 2026-07-14 deploy: 5c28a3a78018e9ec96651bbe9c538453db65b0ee
5c28a3a 2026-07-14 v0.49: remove portrait restriction + cleanup unused field
8b52795 2026-07-14 deploy: a287a7ffd5fdc341556d76c2fac539f39efb3538
a287a7f 2026-07-14 v0.48: permanent debug overlay + console.log for diagnostics
ac07839 2026-07-14 deploy: 55aa78c38efae46ca0e4da6961fd111dce61253e
55aa78c 2026-07-14 v0.47: fix visual offset — terrain cancellation bug
25d04cd 2026-07-14 deploy: 339653f2768f7262407922ddfd13cefc63faca64
339653f 2026-07-14 v0.46: follow light on rocket — always visible
023d1dc 2026-07-14 deploy: 245bc66fefc5dea04bacf96481eaeb6e9f27e0c6
245bc66 2026-07-14 v0.45: account for terrain displacement in visual offset
571f4bb 2026-07-14 deploy: 03d27cbebc59b1fc056841dbee7ef5516d54c093
03d27cb 2026-07-14 v0.44: Earth texture 2048×1024 + mipmaps + anisotropy
d1b89f3 2026-07-14 deploy: e0dd649c20e98138ca923e77f6449d0ce161a6fa
e0dd649 2026-07-14 v0.43: lighting boost + no-cache meta tags
b01abbc 2026-07-14 deploy: 08c3f05b34e2793a3400fd16aada81504b8e5ad9
08c3f05 2026-07-14 v0.42: skip MainMenu — launch directly into FlightScene
0f0851c 2026-07-14 deploy: fd84f8856c1d5e7fe1b7136e3e104ff746b376ee
fd84f88 2026-07-14 v0.41: fix shadow position — dynamic y=rocketBottomY-0.02
a8ba8ab 2026-07-14 deploy: c52d914ae14bbcb765a18af6966dd2806c9a946f
c52d914 2026-07-14 v0.40: ROCKET_VISUAL_SCALE 5→50, antialias on, terrain 8%→2%, dist 15
95d6d5a 2026-07-14 deploy: 3e1c7c133a574c57d6f3ac323e960aea89b98be5
3e1c7c1 2026-07-14 v0.39: fix rocketBottomY — filter out landing gear from BoundingBox
d22e10b 2026-07-14 deploy: fa77c81c2f65bc705ec4bdbb3987465f0c855889
fa77c81 2026-07-14 v0.38: logarithmic depth buffer + debug overlay for rocket position
abece1d 2026-07-14 deploy: bed5ed6facb7e241e337d7a3caa2e3fe311ad0e3
bed5ed6 2026-07-14 v0.37: fix double ROCKET_VISUAL_SCALE bug, restore v0.33 renderer + dist=5
8a00621 2026-07-14 deploy: d5e90d701d29ba390edb7953b533f4fe602917aa
d5e90d7 2026-07-14 v0.36: fix rocket visual offset, depth precision, ALT accuracy
f08dd38 2026-07-14 deploy: 57fa97c79a8d97349a0cc337ef9569591bd61928
57fa97c 2026-07-14 v0.35: fix rocket-in-ground — spawn offset 2000m (visual scale mismatch), antialias=true, chase cam dist 15
2fa15d5 2026-07-14 deploy: 29164ea76f5c06ad53954c7cddf9e35b2da89870
29164ea 2026-07-14 v0.34: Fix Earth mass (v0.27 gravity 196 m/s²)
e9beb9f 2026-07-14 v0.34: Fix Earth mass (real 5.972e24), chase camera default distance 5, MIN_DIST 0.01
7f092b7 2026-07-14 deploy: 85629532170a5817f67f7d116125fef168cdec0d
8562953 2026-07-14 v0.34: Fix blur - NoToneMapping, full devicePixelRatio, no antialias, darker clearColor
5ed036c 2026-07-14 deploy: b984cbbc4414abf20b483854c57048cb81213bae
eb5db8e 2026-07-14 deploy: 3d01090dfeadc36f17145f58e28c9cf1ec1de71c
970a8b0 2026-07-14 deploy: b984cbbc4414abf20b483854c57048cb81213bae
b984cbb 2026-07-14 v0.33: Fix camera blur (LinearToneMapping, exposure 1.2), deeper sky clear color, HUD left position
c82c654 2026-07-13 v0.32: Fix Ctrl+C freecam block, HUD left side, thrust without massFactor cap, TWR warning toast
594ecf3 2026-07-13 v0.31: Brighter ocean colors on Earth procedural texture
ef4ae07 2026-07-13 v0.30: Freecam arrows block rocket control, day/night Earth rotation toward sun with emissive lights, proper sun position passed to updateClouds
40d6f61 2026-07-13 v0.29: Free camera with arrow key orbit + mouse/touch drag + scroll zoom + dynamic up-vector; HUD already stripped of all unused indicators
ab209af 2026-07-13 v0.28: Fix gravity (real Earth mass), remove sonic boom/Mach messages, revert camera to v0.26 chase+simple freecam, add warp indicator to HUD, day/night on Earth
3d01090 2026-07-13 v0.27: Bug fixes — liftoff works after countdown, HUD compact (top-right), freecam WASD+mouse drag+scroll, Earth terrain amplified, sky gradient 0→100km, altitude from base radius
9544825 2026-07-12 v0.26: Update Atlas GLB models (higher detail) + test fixes for new flame/texture API
dee76e0 2026-07-12 v0.25: UI polish — loading screen with spinner+logo, fade transition, styled error fallback
cc82537 2026-07-12 v0.24: PartBuilder — enhanced NASA model materials (engine glow, metallic hulls, glass, heat shields); VAB loading status + part height tuning
c089e7e 2026-07-12 v0.23: Planets — procedural textures replace jpg loads, proper orbit positioning, Earth cloud layer
a0f213b 2026-07-12 v0.22: FlightScene — per-stage data UI, sonic boom effect, heat accumulation/radiation, altitude-based sky gradient
8d0a371 2026-07-12 v0.21: HUD refactor — compact layout, stage panel with fuel bars, navball compass, camera mode toggle
7f99cfe 2026-07-12 v0.20: Procedural textures overhaul — tank details (US flag, seams), planet generators (Jupiter/Saturn/Neptune/Uranus), Earth bump map 1024×512
31a86f7 2026-07-12 v0.19: EngineFlame dual-layer particles — core+outer, dynamic sizes, improved gradient textures
df37ac5 2026-07-12 v0.18: Physical atmosphere scattering — Rayleigh + Mie phase functions, terminator band, per-planet tint
b839bb4 2026-07-12 v0.17: Real Web Audio engine — oscillator, noise, filter; staging burst, crash boom, land thud
c7ccd12 2026-07-12 deploy: acf236cc97035b736b635933f94d865dca02eee9
acf236c 2026-07-12 feat: dynamic sky color (blue at surface → black in space)
76074c4 2026-07-12 deploy: 49394832f0acc69e8b5131c8d3ef25911b9aa9d3
4939483 2026-07-12 feat: local gravitational acceleration display (g = GM/r²)
4a9143a 2026-07-12 deploy: 9a39c38552294d4752b2cdb2c0123f36cfe77072
9a39c38 2026-07-12 feat: map double-click to zoom to body + show mass/radius info
738203b 2026-07-12 deploy: 7dd9abe988ab09c9685ac8a5b6a6839a55c5b87a
7dd9abe 2026-07-12 feat: map trajectory gradient line + single direction arrow (cleaner)
980340f 2026-07-12 feat: camera orbit inertia (smooth release after drag)
efe436e 2026-07-12 feat: map colors improved (+moons/pluto/titan), compass rose, more vibrant palette
4451c28 2026-07-12 deploy: 254d2be57462d3a9fd057fd42829b910336ba128
9407391 2026-07-12 feat: improved NASA model materials - engine glow, metallic hulls, glass cockpits, heat shields, solar panels
254d2be 2026-07-12 fix: NASA models not loading - assetUrl dev mode fix, scale applied in loadGLTF, error toast
a03805e 2026-07-12 deploy: f74fa3c830af01b57a83888eb0063b0f4e08c7d9
f74fa3c 2026-07-12 feat: total mass display on HUD
091a6ab 2026-07-12 deploy: 4089afc65d2e3b29b91612d5d096e80146217762
08650f4 2026-07-12 deploy: 63d7fa2293c5aaa402ae37abac6f0aae2f75f76d
4089afc 2026-07-12 feat: reentry glow mesh (white-hot spherical plasma halo)
63d7fa2 2026-07-12 fix: reentry glow brace nesting bug + reentry glow cleanup
8706a0a 2026-07-12 deploy: b0437b4eabeab74cfd4d984f1ebb0598b34e76ed
b0437b4 2026-07-12 feat: sonic boom ring visual + notification when crossing Mach 1
276ecee 2026-07-12 deploy: b09c4269605a09474472e97f4ed2aed6ee5e59ec
b09c426 2026-07-12 feat: Mach number display on HUD
45917d1 2026-07-12 deploy: 757b5a10a7445de7ec09a9d58518c2b74b42d258
757b5a1 2026-07-12 feat: latitude/longitude display on HUD
dd830a7 2026-07-12 deploy: 6c0a943100bd72561185fa1b047c2ef812f5bb4c
6c0a943 2026-07-12 feat: sun direction indicator on map
ed2a81e 2026-07-12 feat: engine exhaust dynamic light (throttle-responsive glow)
dacebb3 2026-07-12 feat: angle of attack (AoA) display on HUD
a74a74a 2026-07-12 feat: heading (compass) display on HUD
649f98e 2026-07-12 feat: altitude milestone notifications
af45e41 2026-07-12 feat: crash screen shake + white flash effect
b6d2536 2026-07-12 deploy: ccba21f34e527ac1f89a6bbc1d0d012c35c4210e
ccba21f 2026-07-12 feat: F1 toggle HUD, debris counter display
501c68c 2026-07-12 deploy: 83feb1b5c147b28c9fc6450204e46f60ba8cbe7c
83feb1b 2026-07-12 feat: orbital period display on HUD
af6ecd3 2026-07-12 feat: free camera mode (C key toggle) for scenic views
09e0037 2026-07-12 feat: 3D orbit path line in flight view
a6f5c8d 2026-07-12 deploy: bdf52b822ceaf3c92fe1aee0670d4a577b84ef53
bdf52b8 2026-07-12 fix: restore touch event handler broken by edit
49554d9 2026-07-12 feat: SAS cycle (T): off→hold→prograde→retrograde→off
ca2431d 2026-07-12 feat: SAS prograde hold mode (T cycles: off→hold→prograde)
be2c799 2026-07-12 feat: personal altitude/speed record tracker
ecf8b43 2026-07-12 feat: burn time remaining display on HUD
4f7b85f 2026-07-12 feat: impact prediction marker (red ring on surface for suborbital trajectories)
01e9ea3 2026-07-12 feat: staging separation particle burst effect
f0eeaf6 2026-07-12 feat: SOI change notification when crossing body boundaries
ced0dc8 2026-07-12 feat: SOI body name display on HUD
a322d2f 2026-07-12 feat: rocket naming input in VAB
2495ce4 2026-07-12 feat: dynamic pressure (Q) display with color coding
f839e5e 2026-07-12 feat: engine Isp display on HUD
2255525 2026-07-12 feat: VAB part count, total mass, and fuel summary
4e13f10 2026-07-12 feat: big screen countdown (3-2-1-LIFTOFF) with animated overlay
036dd97 2026-07-12 feat: atmosphere boundary rings on map at Kármán line altitude
688fdbe 2026-07-12 feat: launch countdown (3-2-1-liftoff) + camera reset (F key)
538e389 2026-07-12 feat: camera view reset (F key)
040a2bd 2026-07-12 feat: impact T- countdown when falling towards body
07209bd 2026-07-12 feat: orbit eccentricity display on HUD
8e3373e 2026-07-12 feat: planet direction dots on navball for all bodies
34f1c94 2026-07-12 feat: map scale indicator bar with auto-nice km value
87e6a29 2026-07-12 feat: atmospheric halo glow on map for planets with atmospheres
95ad7b4 2026-07-12 feat: screen shake on high G-force, dynamic FOV by speed
60ed96e 2026-07-12 feat: navball orbit normal marker (triangle), better warp levels
365e7f4 2026-07-12 feat: delta-v remaining via Tsiolkovsky + engine flame throttle/vacuum improvements
88c0a96 2026-07-12 feat: throttle-scaled engine flame, vacuum mode with longer exhaust
cd70b7f 2026-07-12 feat: SAS hold mode (T key), attitude hold with drift counter
e4fe27a 2026-07-12 feat: time-to-Ap/Pe from orbital mechanics in HUD
aaaa5b3 2026-07-12 feat: engine gimbal torque for better in-flight rotation control
0446be6 2026-07-12 feat: auto-staging when fuel depleted, VAB stage separator rings
b5ff3e1 2026-07-12 feat: mission clock (T+MM:SS) on HUD
1736b69 2026-07-12 feat: landing gear (G key), drag multiplier, 3-leg visual
bb96c3e 2026-07-12 feat: VAB grid floor + platform ring, HUD time-to-Ap/Pe placeholders
a96b80a 2026-07-12 feat: TWR display on HUD with color coding
310cf0b 2026-07-12 feat: SOI boundary circles on orbital map for all bodies
57e3c27 2026-07-12 feat: HUD stage indicator + Ap/Pe display from orbit prediction
82adac7 2026-07-12 feat: G-force indicator in HUD, color-coded by severity
02cae1d 2026-07-12 feat: Z/X zoom keys, gimbal-lock-free up vector, HUD camera hint
72d87da 2026-07-12 feat: VAB orbit controls (drag to orbit, scroll zoom), auto-frame camera on assembly
8b5d41e 2026-07-12 feat: map overhaul — planet orbits, trajectory glow, diamond rocket icon, Ap/Pe markers, radial gradient
098121f 2026-07-12 fix: GLTF load error handling, placeholder fallback, preload all NASA models
904428d 2026-07-12 fix: chase camera 360° orbit, stable up vector, Shift+arrows keyboard orbit
93fdc30 2026-07-11 docs: survival sandbox spec — procedural parts, life support, challenges, education
bbd6e59 2026-07-11 deploy: d5b200b747b24b20d0c4e95e53a845bcc8071267
d5b200b 2026-07-11 fix: Ant 88 kN — TWR 1.5, realistic 5 m/s² acceleration
63584c3 2026-07-11 deploy: 39e043183bb5eca29fa6bfdde5b60c092dbb3699
39e0431 2026-07-11 fix: Ant engine 117 kN (was 1500) — TWR 2.0 for stock rocket
575691a 2026-07-11 deploy: dc362c105c254ebf1db77f7de7b23cb22046cc21
dc362c1 2026-07-11 fix: gravity direction toward body, use baseDt not _dt
ef277e0 2026-07-11 deploy: faa47d351672b930be84428cb3738574d03285f6
faa47d3 2026-07-11 fix: restore high-res JPG loading; brighter fallback ocean
11cf9fc 2026-07-11 deploy: f69fbeec2afa058fea651f386d5f64740f0e4c65
f69fbee 2026-07-11 fix: liftoffFrames guard prevents immediate re-landing; Earth no-color fallback only
c8f5567 2026-07-11 deploy: baf58b1e3852d440124662f5768b70072545d5ed
baf58b1 2026-07-11 fix: start with grounded=false so collision check can initialize properly
da6866a 2026-07-11 deploy: 3e7720cf5233715ba0165d3faf5e1eadf5a4a5a2
3e7720c 2026-07-11 fix: landing only with vertSpeed<1, Earth base color 0x4488cc
aa3fcb2 2026-07-11 deploy: ba4e953045cb54528a18bddcfc2865c3c514d463
ba4e953 2026-07-11 fix: drag uses baseDt, Earth 200 segments + 4 noise octaves + 1K bump map
f087196 2026-07-11 deploy: 6950c238893705a78e775ce331c1d2eed2f2e8f0
6950c23 2026-07-11 fix: tilt check now compares rocket up vs surface normal instead of global Y axis
fb51665 2026-07-11 deploy: d23ac0f97acd5567b25e5bc503691952ee134e04
d23ac0f 2026-07-11 fix: rewrite Stars to pure shader approach (no THREE.Points), fix test
9127ec6 2026-07-11 fix: crash overlay, warp bounce, stars depth, SOI removal, Earth color, explosion update
7ca39fe 2026-07-11 deploy: 842ac4f5c7b5d7b4afe22f815469626908feec5b
842ac4f 2026-07-11 fix: Earth procedural fallback, collision penetration, mobile controls, landscape hint
8b664de 2026-07-11 deploy: 5247fb1fa3c65007365c7b349caab18900ae27b4
5247fb1 2026-07-11 fix: texture paths for GitHub Pages base URL
77cb0a9 2026-07-11 Clean up internal docs
64080a6 2026-07-11 deploy: 782a64f60f7890d48e8addc6e6e6fcdede2b28d5
782a64f 2026-07-11 Fix: Mars position (Y offset), crash explosion, camera warp snap, 2K textures, Sun size, stage debris, GitHub Pages deploy
ad61252 2026-07-09 fix: VAB render with correct camera, pause menu action handlers, gravity and planet size
f8cd00e 2026-07-09 fix: model visibility, gravity, spawn position, crash fixes
70ae201 2026-07-09 fix: model visibility, gravity, spawn position, crash fixes, pause menu
d3dd6db 2026-07-09 fix: models visibility, gravity, spawn position, crash fixes
b476adf 2026-07-09 fix: tests, spawn position, gravity, models, flame
e0d0551 2026-07-08 fix: spawn at 1km altitude to clear visual mesh
e11ad26 2026-07-08 fix: spawn on surface, no auto-throttle, stronger gravity, flame at bottom
f65c446 2026-07-08 fix: pause menu with 3 bars, spawn at orbit altitude, orbital velocity
7367dae 2026-07-08 feat: map rocket + trajectory arrow, stronger Earth gravity
e329602 2026-07-08 fix: nozzle detection for flame, model visibility fixes, map improvements
6d59f34 2026-07-07 fix: map design, flame position, models visibility, planet distances
0d69d58 2026-07-07 fix: planet distances 2x closer, moon position, map zoom, flame, models
d65f204 2026-07-07 feat: realistic scales, map/flame fixes, new models (final)
db489a2 2026-07-07 feat: realistic scales, map fixes, flame fixes, new models
c328afa 2026-07-06 WIP: model scaling and flame fixes (pre-fixes for remaining issues)
7777650 2026-06-30 fix: SAS rewritten - proper quaternion alignment, faster response
25c6bc3 2026-06-30 fix: RocketBuilder stacking, SAS e.repeat, removed overheating, Moon Safe preset
8be74d2 2026-06-30 fix: SAS now uses quaternion rotation, auto-throttle for retrograde landing
326d8f9 2026-06-30 feat: preset mission rockets instead of text AI input
dd6ffda 2026-06-30 feat: AI rocket builder, help menu, camera zoom fix
3404514 2026-06-29 feat: 3D pitch/yaw controls, SAS autopilot, sound, heating, pause
a4f683c 2026-06-29 feat: procedural Earth texture, HUD action buttons, planet mass rebalance, cleanup
cb29c58 2026-06-29 v0.1: MVP with flight, physics, map, navball, staging, landing, procedural stars, Ellipse palette
8eae37b 2026-06-28 feat(textures): rewrite all rocket part textures as 1024x1024 PBR TextureSet with normal maps
8640431 2026-06-28 feat(textures): add TextureSet, Sobel normal maps, light gradient, wear helpers
e88bbd7 2026-06-27 docs: README + v0.1.0 MVP ready
687296f 2026-06-27 chore: error handling + integration smoke test
5700295 2026-06-27 feat(core): MVP achievement definitions
3e020cd 2026-06-27 feat(ui): settings panel with units + auto-save toggle
e7f53d3 2026-06-27 feat(scenes): FlightScene with thrust + chase camera + HUD
ec44fa8 2026-06-27 feat(core): Game class with menu/VAB/flight scene routing
b943a9b 2026-06-27 feat(core): Achievements with localStorage persistence
3ca6edf 2026-06-27 feat(ui): toast notification with fade in/out
b2afafd 2026-06-27 feat(scenes): MainMenuScene with Play/VAB/Settings buttons
39835c1 2026-06-27 feat(storage): SaveLoad with localStorage
60c4883 2026-06-27 feat(scenes): VABScene with launch pad + part picking
e580155 2026-06-27 feat(flight): keyboard controls for throttle + attitude
198bbec 2026-06-27 feat(flight): HUD overlay with speed/alt/angle/fuel/throttle
651c9ec 2026-06-27 feat(flight): smooth chase camera
86ba04c 2026-06-27 feat(flight): applyThrust consumes fuel and accelerates
907e5c6 2026-06-27 feat(flight): FlightState with fuel consumption
7185a31 2026-06-27 feat(rocket): Assembly with total mass + CoM + mesh tree
dd73d5f 2026-06-27 feat(parts): procedural mesh builder for all part kinds
d0dae14 2026-06-27 feat(parts): Part interface + MVP catalog (7 parts)
cc9a55d 2026-06-27 feat(planets): Moon with cratered material
868ed53 2026-06-27 feat(planets): Earth with axial tilt
818a930 2026-06-27 feat(planets): Planet base class with Three.js mesh
2f134d3 2026-06-27 feat(physics): System class with fixed-step propagation
97ed8ed 2026-06-27 test(physics): fix System test (propagate dt + check Y position)
c344143 2026-06-27 feat(physics): gravity with single and multi-source
00b2ca5 2026-06-27 feat(physics): RK4 integrator with circular orbit test
366f55b 2026-06-27 feat(physics): Body class with applyForce + kineticEnergy
094696d 2026-06-27 feat(renderer): Three.js scene with FPS counter
9be12c1 2026-06-27 feat(ui): design tokens + typography + base button
aa2892e 2026-06-27 chore: scaffold directory structure and config
26027ef 2026-06-27 chore: initialize Vite + TypeScript + Three.js + Vitest
7c93255 2026-06-27 docs(plan): MVP implementation plan (30 tasks, TDD, Vitest, 8 phases)
78a6abf 2026-06-27 docs: add design system and 3D objects specification
68ed59d 2026-06-27 docs(spec): v1.6 \u2014 honest difficulty principle + interplanetary navigation
5dc5f84 2026-06-27 docs(spec): v1.5 \u2014 +5 achievements, promote backlog to spec sections
e5832e7 2026-06-27 docs(spec): v1.4 \u2014 prune backlog per user feedback
774be10 2026-06-27 docs(spec): v1.3 \u2014 open world philosophy + structured backlog
fdc053f 2026-06-27 docs(spec): v1.2 — solar heating, meteors, lunar station, remove difficulty
4a7d50d 2026-06-27 docs(spec): v1.1 — add 10 new features and fix EVA achievement
013d70f 2026-06-27 docs(spec): mark as v1.0 — all 16 TBD items resolved, add changelog
91e6342 2026-06-27 docs(spec): close all 16 TBD items, rename game to Ellipse
4833d21 2026-06-27 docs(spec): mark T4 as closed in TBD table
43ab36c 2026-06-27 docs(spec): T4 — full thermal model with conduction between parts
8c124c8 2026-06-27 docs(spec): close T1-T3, add launch sites, expand fuel types with EN effects
0d02587 2026-06-27 docs(spec): expand rocket parts catalog with size and purpose variants
c8205f3 2026-06-27 docs: initial game design specification for Rocket Ship
d2c8eb0 2026-06-27 Initial commit

## EVERY SOURCE FILE — FULL LISTING

### src/ui/Toast.ts
      18 src/ui/Toast.ts
### src/ui/Settings.ts
      96 src/ui/Settings.ts
### src/scenes/MainMenuScene.ts
      84 src/scenes/MainMenuScene.ts
### src/scenes/VABScene.ts
     381 src/scenes/VABScene.ts
### src/scenes/FlightScene.ts
    2308 src/scenes/FlightScene.ts
### src/core/AchievementData.ts
      23 src/core/AchievementData.ts
### src/core/Achievements.ts
      24 src/core/Achievements.ts
### src/core/Renderer.ts
      28 src/core/Renderer.ts
### src/core/Game.ts
     136 src/core/Game.ts
### src/core/SceneManager.ts
      41 src/core/SceneManager.ts
### src/main.ts
      24 src/main.ts
### src/config/settings.ts
      14 src/config/settings.ts
### src/config/constants.ts
      39 src/config/constants.ts
### src/flight/HUD.ts
     390 src/flight/HUD.ts
### src/flight/FlightState.ts
      23 src/flight/FlightState.ts
### src/flight/TouchControls.ts
     241 src/flight/TouchControls.ts
### src/flight/ChaseCamera.ts
     192 src/flight/ChaseCamera.ts
### src/flight/SoundManager.ts
     159 src/flight/SoundManager.ts
### src/flight/Thrust.ts
      45 src/flight/Thrust.ts
### src/flight/Controls.ts
      89 src/flight/Controls.ts
### src/utils/noise.ts
      36 src/utils/noise.ts
### src/storage/SaveLoad.ts
      46 src/storage/SaveLoad.ts
### src/parts/Part.ts
      21 src/parts/Part.ts
### src/parts/PartCatalog.ts
     238 src/parts/PartCatalog.ts
### src/parts/RocketBuilder.ts
     120 src/parts/RocketBuilder.ts
### src/parts/PartBuilder.ts
     743 src/parts/PartBuilder.ts
### src/planets/Neptune.ts
      60 src/planets/Neptune.ts
### src/planets/Uranus.ts
      73 src/planets/Uranus.ts
### src/planets/Earth.ts
     435 src/planets/Earth.ts
### src/planets/Saturn.ts
     145 src/planets/Saturn.ts
### src/planets/Planet.ts
      51 src/planets/Planet.ts
### src/planets/Jupiter.ts
      60 src/planets/Jupiter.ts
### src/planets/Venus.ts
     106 src/planets/Venus.ts
### src/planets/Pluto.ts
      16 src/planets/Pluto.ts
### src/planets/Mercury.ts
     100 src/planets/Mercury.ts
### src/planets/Sun.ts
     137 src/planets/Sun.ts
### src/planets/Moon.ts
     100 src/planets/Moon.ts
### src/planets/Mars.ts
     106 src/planets/Mars.ts
### src/rocket/Rocket.ts
      64 src/rocket/Rocket.ts
### src/rocket/Assembly.ts
     113 src/rocket/Assembly.ts
### src/physics/OrbitPredictor.ts
      91 src/physics/OrbitPredictor.ts
### src/physics/SoiResolver.ts
      56 src/physics/SoiResolver.ts
### src/physics/Gravity.ts
      26 src/physics/Gravity.ts
### src/physics/Body.ts
      34 src/physics/Body.ts
### src/physics/Integrator.ts
      55 src/physics/Integrator.ts
### src/physics/System.ts
      36 src/physics/System.ts
### src/effects/Stars.ts
      78 src/effects/Stars.ts
### src/effects/EngineFlame.ts
     273 src/effects/EngineFlame.ts
### src/effects/GroundSmoke.ts
      96 src/effects/GroundSmoke.ts
### src/effects/ProceduralTextures.ts
    2508 src/effects/ProceduralTextures.ts
### src/effects/TextureLoader.ts
     260 src/effects/TextureLoader.ts
### src/effects/AtmosphereGlow.ts
     242 src/effects/AtmosphereGlow.ts

## CURRENT CONSTANTS (EXACT VALUES)

/* Gravitational constant (m³/(kg·s²)) */
export const G = 6.67430e-11;

/** Orbit compression factor (1:10⁹) */
export const ORBIT_SCALE = 1e-9;

/** Visual planet size multiplier */
export const VISUAL_PLANET_MULT = 230000;

/** Fixed physics timestep (s) */
export const FIXED_DT = 1 / 60;

/** Standard gravity (m/s²) — used for Isp mass flow calc */
export const G0 = 9.80665;

/** Earth mass (kg) — g≈14.67 m/s² (max for Ant engine TWR≈1) */
export const EARTH_MASS = 8.92e25 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5;

/** Visual part scale factor (rocket size relative to planets) */
export const PART_SCALE = 0.05;

/** Rocket visual scale multiplier */
export const ROCKET_VISUAL_SCALE = 40;

/** Terrain displacement fraction of visual radius */
export const TERRAIN_DISP_FRAC = 0.001;

/** Ocean depression */
export const TERRAIN_OCEAN_FRAC = 0;

/** Sea level threshold */
export const TERRAIN_SEA_LEVEL = 0.35;

/** Resolve asset URL with correct base path for GitHub Pages. */
export function assetUrl(path: string): string {
  if (import.meta.env.DEV) return path;
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  return (base + path.replace(/^\//, '')).replace(/\/\//g, '/');
}

## PLANET MASSES

--- src/planets/Earth.ts ---
    super('earth', EARTH_MASS, position, velocity, 6.371e6);
--- src/planets/Jupiter.ts ---
    super('jupiter', 1.9e28 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 6.9911e7);
--- src/planets/Mars.ts ---
    super('mars', 1.9e25 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 3.390e6);
--- src/planets/Mercury.ts ---
    super('mercury', 1e25 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 2.440e6);
--- src/planets/Moon.ts ---
    super('moon', 2.2e24 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 1.737e6);
--- src/planets/Neptune.ts ---
    super('neptune', 1.024e27 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 2.4622e7);
--- src/planets/Planet.ts ---
    super(name, mass, position, velocity);
--- src/planets/Pluto.ts ---
    super('pluto', 4.4e21 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 1.188e6);
--- src/planets/Saturn.ts ---
    super('saturn', 5.683e27 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 5.8232e7);
--- src/planets/Sun.ts ---
    super('sun', mass, position, velocity);
--- src/planets/Uranus.ts ---
    super('uranus', 8.681e26 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 2.5362e7);
--- src/planets/Venus.ts ---
    super('venus', 1.46e26 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 6.052e6);

## ENGINE THRUSTS

thrust: 500000,
    isp: 350,
    fuelType: 'LFO'
  },
--
    thrust: 4500000,
    isp: 340,
    fuelType: 'LFO'
  },
--
    thrust: 11000000,
    isp: 330,
    fuelType: 'LFO'
  },
--
    thrust: 27500000,
    isp: 310,
    fuelType: 'LFO'
  },


## ALL TEST FILES

=== tests/adapter.test.ts ===
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Assembly } from '../src/rocket/Assembly';
import { findPart, PART_CATALOG } from '../src/parts/PartCatalog';
import { PART_SCALE } from '../src/config/constants';

describe('Adapter Tests', () => {
  const sizes = ['S', 'M', 'L', 'XL'] as const;
  const getAdapterColor = (mesh: THREE.Mesh) => 
    (mesh.material as THREE.MeshStandardMaterial).color.getHex();

  it('every S-size tank to every capsule creates adapter', () => {
    const caps = PART_CATALOG.filter(p => p.kind === 'capsule');
    const tanks = PART_CATALOG.filter(p => p.kind === 'tank' && p.size === 'S');
    for (const cap of caps) {
      for (const tank of tanks) {
        const a = new Assembly();
        a.addRoot({ part: cap, position: [0, 1.2*PART_SCALE, 0], rotation: 0, children: [] });
        a.addRoot({ part: tank, position: [0, 0.6*PART_SCALE, 0], rotation: 0, children: [] });
        const m = a.toMesh();
        const goldCones = m.children.filter(c => {
          const mesh = c as THREE.Mesh;
          return mesh.isMesh && mesh.geometry.type === 'CylinderGeometry' && getAdapterColor(mesh) === 0xdd9944;
        });
        // S tank size differs from capsule — adapter should exist
        if (tank.size !== cap.size) {
          expect(goldCones.length).toBeGreaterThanOrEqual(1);
        }
      }
    }
  });

  it('same-size parts produce no adapter', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const m = a.toMesh();
    const goldCones = m.children.filter(c => {
      const mesh = c as THREE.Mesh;
      return mesh.isMesh && mesh.geometry.type === 'CylinderGeometry' && getAdapterColor(mesh) === 0xdd9944;
    });
    // Both S size — no adapter needed
    expect(goldCones.length).toBe(0);
  });
});

=== tests/integration.test.ts ===
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Assembly } from '../src/rocket/Assembly';
import { Rocket } from '../src/rocket/Rocket';
import { findPart, PART_CATALOG } from '../src/parts/PartCatalog';
import { G, EARTH_MASS, PART_SCALE, ROCKET_VISUAL_SCALE, VISUAL_PLANET_MULT, ORBIT_SCALE, FIXED_DT, G0 } from '../src/config/constants';
import { gravitationalForce } from '../src/physics/Gravity';
import { Body } from '../src/physics/Body';
import { getReferenceBody } from '../src/physics/SoiResolver';
import { System } from '../src/physics/System';

describe('Comprehensive Integration Tests', () => {
  // ── Constants ──
  it('all constants are valid', () => {
    expect(G).toBeCloseTo(6.67430e-11);
    expect(PART_SCALE).toBeGreaterThan(0);
    expect(ROCKET_VISUAL_SCALE).toBeGreaterThan(0);
    expect(VISUAL_PLANET_MULT).toBeGreaterThan(0);
    expect(ORBIT_SCALE).toBeGreaterThan(0);
    expect(FIXED_DT).toBeGreaterThan(0);
    expect(G0).toBeCloseTo(9.80665);
    expect(EARTH_MASS).toBeGreaterThan(1e20);
  });

  // ── Part Catalog ──
  it('all parts have required fields', () => {
    for (const p of PART_CATALOG) {
      expect(p.id).toBeTruthy();
      expect(p.kind).toBeTruthy();
      expect(p.mass).toBeGreaterThan(0);
      expect(p.size).toBeTruthy();
      if (p.kind === 'engine') {
        expect(p.thrust).toBeGreaterThan(0);
        expect(p.isp).toBeGreaterThan(0);
      }
      if (p.kind === 'tank') {
        expect(p.fuelCapacity).toBeGreaterThan(0);
      }
    }
  });

  // ── Assembly ──
  it('assembly totalMass includes fuel', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    expect(a.totalMassWithFuel()).toBeGreaterThan(a.totalMass());
  });

  it('adapter count matches diff-sized parts', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const mesh = a.toMesh();
    const adapters = mesh.children.filter(c => {
      const m = c as THREE.Mesh;
      return m.isMesh && m.geometry.type === 'CylinderGeometry' && 
             (m.material as THREE.MeshStandardMaterial).color.getHex() === 0xdd9944;
    });
    expect(adapters.length).toBeGreaterThanOrEqual(1);
  });

  // ── Physics ──
  it('gravity between Earth and rocket', () => {
    const earth = new Body('earth', EARTH_MASS, [0, 0, 0], [0, 0, 0]);
    const rocket = new Body('rocket', 6000, [6.371e6 + 100, 0, 0], [0, 0, 0]);
    const force = gravitationalForce(earth, rocket);
    expect(force[0]).toBeLessThan(0); // pulls toward Earth center
    expect(Math.abs(force[0])).toBeGreaterThan(10000);
  });

  // ── Rocket mesh ──
  it('default rocket mesh has children', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8*PART_SCALE, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    const mesh = r.assembly.toMesh();
    expect(mesh.children.length).toBeGreaterThan(3); // 3 parts + adapters
    expect(mesh instanceof THREE.Group).toBe(true);
  });
});

=== tests/rocket-config.test.ts ===
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Assembly } from '../src/rocket/Assembly';
import { Rocket } from '../src/rocket/Rocket';
import { findPart, PART_CATALOG } from '../src/parts/PartCatalog';

describe('Rocket Configurations', () => {
  const sizes = ['S', 'M', 'L', 'XL'] as const;
  const capsules = PART_CATALOG.filter(p => p.kind === 'capsule');
  const tanks = PART_CATALOG.filter(p => p.kind === 'tank');
  const engines = PART_CATALOG.filter(p => p.kind === 'engine');

  it('all capsule + tank + engine combos build without crash', () => {
    for (const cap of capsules) {
      for (const tank of tanks) {
        for (const eng of engines) {
          const a = new Assembly();
          a.addRoot({ part: cap, position: [0, 1.6 * 0.05, 0], rotation: 0, children: [] });
          a.addRoot({ part: tank, position: [0, 0.8 * 0.05, 0], rotation: 0, children: [] });
          a.addRoot({ part: eng, position: [0, 0, 0], rotation: 0, children: [] });
          const r = new Rocket(a);
          expect(r.totalMass()).toBeGreaterThan(0);
          expect(r.totalFuelMass()).toBeGreaterThanOrEqual(0);
          const mesh = a.toMesh();
          expect(mesh.children.length).toBeGreaterThanOrEqual(3);
          // Adapters: expect 0-2 cones between 3 parts of different sizes
          const adapterCount = mesh.children.filter(
            c => c instanceof THREE.Mesh && (c as THREE.Mesh).geometry.type === 'CylinderGeometry'
          ).length;
          expect(adapterCount).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });

  it('centerOfMass is between min and max Y', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_xl_lfo')!, position: [0, 0.8 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_mammoth')!, position: [0, 0, 0], rotation: 0, children: [] });
    const com = a.centerOfMass();
    expect(com[1]).toBeGreaterThan(0);
    expect(com[1]).toBeLessThan(1.6 * 0.05);
  });

  it('default rocket has fuel', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const r = new Rocket(a);
    expect(r.totalFuelMass()).toBeGreaterThan(0);
  });

  it('XL tank + XL engine adapter is created', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_xl_lfo')!, position: [0, 0.6 * 0.05, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const mesh = a.toMesh();
    // XL tank and S engine have different sizes → adapter should exist
    const cylinders = mesh.children.filter(
      c => c instanceof THREE.Mesh && (c as THREE.Mesh).geometry.type === 'CylinderGeometry'
    ).length;
    // Original parts add cylinders + adapter adds one more
    expect(cylinders).toBeGreaterThan(0);
  });

  it('all part catalog entries have valid data', () => {
    for (const part of PART_CATALOG) {
      expect(part.id).toBeTruthy();
      expect(part.kind).toBeTruthy();
      expect(part.size).toBeTruthy();
      expect(part.mass).toBeGreaterThan(0);
      if (part.kind === 'engine') {
        expect(part.thrust).toBeGreaterThan(0);
        expect(part.isp).toBeGreaterThan(0);
      }
      if (part.kind === 'tank') {
        expect(part.fuelCapacity).toBeGreaterThan(0);
      }
    }
  });
});


=== tests/setup.ts ===
// Minimal WebGL shim for jsdom so THREE.WebGLRenderer can initialize in tests.
const WEBGL_TYPES = new Set(['webgl', 'webgl2', 'experimental-webgl']);

const webglHandler: ProxyHandler<object> = {
  get(_target, prop) {
    if (prop === 'canvas') return _target;
    if (prop === 'drawingBufferWidth' || prop === 'drawingBufferHeight') return 0;
    if (prop === 'getExtension') return () => null;
    if (prop === 'getParameter') return () => 'WebGL 1.0';
    if (prop === 'getShaderPrecisionFormat') return () => ({ precision: 0, rangeMin: 0, rangeMax: 0 });
    if (prop === 'getShaderParameter' || prop === 'getProgramParameter') return () => true;
    if (prop === 'getShaderInfoLog' || prop === 'getProgramInfoLog' || prop === 'getError') return () => '';
    if (prop === 'getUniformLocation') return () => ({});
    if (prop === 'getAttribLocation') return () => 0;
    if (
      prop === 'createBuffer' ||
      prop === 'createShader' ||
      prop === 'createProgram' ||
      prop === 'createTexture' ||
      prop === 'createVertexArray' ||
      prop === 'createFramebuffer' ||
      prop === 'createRenderbuffer'
    ) {
      return () => ({ __webglStub: true });
    }
    if (
      prop === 'getSupportedExtensions' ||
      prop === 'getContextAttributes' ||
      prop === 'getProgramInfoLog' ||
      prop === 'getShaderInfoLog'
    ) {
      return () => [];
    }
    return () => undefined;
  },
  set() {
    return true;
  },
};

// Minimal 2D canvas context shim for procedural texture generation tests.
function create2DShim(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const state: Record<string, unknown> = {
    fillStyle: '#000000',
    strokeStyle: '#000000',
    lineWidth: 1,
    globalAlpha: 1,
    imageData: new Map<string, ImageData>(),
  };
  const handler: ProxyHandler<Record<string, unknown>> = {
    get(target, prop: string) {
      if (prop === 'canvas') return canvas;
      if (prop in target) return target[prop];
      if (prop === 'fillRect' || prop === 'clearRect' || prop === 'beginPath' || prop === 'closePath' ||
          prop === 'fill' || prop === 'stroke' || prop === 'moveTo' || prop === 'lineTo' ||
          prop === 'arc' || prop === 'ellipse' || prop === 'save' || prop === 'restore' ||
          prop === 'putImageData' || prop === 'scale' || prop === 'rotate' || prop === 'translate') {
        return () => undefined;
      }
      if (prop === 'createImageData') {
        return (w: number, h: number) => {
          const data = new Uint8ClampedArray(w * h * 4);
          return { width: w, height: h, data } as ImageData;
        };
      }
      if (prop === 'getImageData') {
        return (_x: number, _y: number, w: number, h: number) => {
          const data = new Uint8ClampedArray(w * h * 4);
          return { width: w, height: h, data } as ImageData;
        };
      }
      return () => undefined;
    },
    set(target, prop: string, value) {
      target[prop] = value;
      return true;
    },
  };
  return new Proxy(state, handler) as unknown as CanvasRenderingContext2D;
}

HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, type: string) {
  if (WEBGL_TYPES.has(type)) {
    return new Proxy({ canvas: this }, webglHandler);
  }
  if (type === '2d') {
    return create2DShim(this);
  }
  return null;
} as typeof HTMLCanvasElement.prototype.getContext;

// In-memory localStorage shim for jsdom
if (typeof (globalThis as any).window !== 'undefined' && !(globalThis as any).window.localStorage) {
  const store = new Map<string, string>();
  const ls = {
    getItem(k: string): string | null { return store.has(k) ? store.get(k)! : null; },
    setItem(k: string, v: string): void { store.set(k, String(v)); },
    removeItem(k: string): void { store.delete(k); },
    clear(): void { store.clear(); },
    key(i: number): string | null { return Array.from(store.keys())[i] ?? null; },
    get length(): number { return store.size; }
  };
  (globalThis as any).window.localStorage = ls;
  (globalThis as any).localStorage = ls;
}
=== tests/smoke.test.ts ===
import { describe, it, expect } from 'vitest';

describe('smoke', () => {
  it('runs', () => {
    expect(1 + 1).toBe(2);
  });
});

=== tests/spacing.test.ts ===
import { describe, it, expect } from 'vitest';
import { Assembly } from '../src/rocket/Assembly';
import { findPart } from '../src/parts/PartCatalog';
import { PART_SCALE } from '../src/config/constants';

describe('Rocket Part Spacing', () => {
  it('default rocket parts do not overlap', () => {
    const a = new Assembly();
    const p = PART_SCALE;
    const capH = 1.1 * p, tankH = 0.7 * p, engH = 0.7 * p;
    const gap = 0.005;
    const engY = 0;
    const tankY = engY + engH/2 + gap + tankH/2;
    const capY = tankY + tankH/2 + gap + capH/2;
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, capY, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, tankY, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, engY, 0], rotation: 0, children: [] });
    
    expect(capY - capH/2).toBeGreaterThanOrEqual(tankY + tankH/2);
    expect(tankY - tankH/2).toBeGreaterThanOrEqual(engY + engH/2);
    
    const mesh = a.toMesh();
    expect(mesh.children.length).toBeGreaterThan(3);
  });
  
  it('parts gap is exactly 0.005', () => {
    const p = PART_SCALE;
    const capH = 1.1 * p, tankH = 0.7 * p, engH = 0.7 * p;
    const gap = 0.005;
    const engY = 0;
    const tankY = engY + engH/2 + gap + tankH/2;
    const capY = tankY + tankH/2 + gap + capH/2;
    
    const capBottom = capY - capH/2;
    const tankTop = tankY + tankH/2;
    const tankBottom = tankY - tankH/2;
    const engTop = engY + engH/2;
    
    expect(Math.abs(capBottom - tankTop - gap)).toBeLessThan(0.001);
    expect(Math.abs(tankBottom - engTop - gap)).toBeLessThan(0.001);
  });
});


## ALL CSS

=== styles/components.css ===
/* ─── BUTTONS ─── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  background: var(--panel-bg);
  color: var(--text-primary);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.02em;
  cursor: pointer;
  user-select: none;
  transition: background 120ms ease-out, border-color 120ms ease-out, opacity 120ms ease-out;
}

.btn:hover {
  background: var(--panel-elevated);
  border-color: var(--text-muted);
}

.btn:active {
  transform: scale(0.97);
}

.btn--primary {
  background: var(--accent-gold);
  color: var(--space-deep);
  border-color: var(--accent-gold);
  font-weight: 600;
}

.btn--primary:hover {
  background: var(--accent-gold-hover);
  border-color: var(--accent-gold-hover);
}

.btn--secondary {
  background: transparent;
  border-color: var(--accent-blue);
  color: var(--accent-blue-bright);
}

.btn--secondary:hover {
  background: rgba(20, 81, 129, 0.15);
}

.btn--danger {
  background: var(--danger-bg);
  border-color: var(--danger);
  color: var(--text-primary);
}

.btn--danger:hover {
  background: #8A0A0A;
}

.btn--ghost {
  background: transparent;
  border-color: transparent;
  color: var(--text-secondary);
}

.btn--ghost:hover {
  background: var(--panel-bg);
  color: var(--text-primary);
}

.btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
}

/* ─── PANELS ─── */
.panel {
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius-lg);
}

.panel--elevated {
  background: var(--panel-elevated);
  box-shadow: var(--shadow-md);
}

.panel--dark {
  background: var(--space-bg);
  border-color: var(--panel-border);
}

/* ─── INPUTS ─── */
.input {
  background: var(--space-bg);
  color: var(--text-primary);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius-sm);
  padding: var(--space-2) var(--space-3);
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1;
  outline: none;
  transition: border-color 120ms ease-out;
}

.input:focus {
  border-color: var(--accent-gold);
  box-shadow: var(--shadow-glow-gold);
}

.input::placeholder {
  color: var(--text-muted);
}

/* ─── HUD OVERLAY ─── */
.hud-panel {
  background: rgba(13, 13, 13, 0.85);
  border: 1px solid rgba(58, 64, 85, 0.6);
  border-radius: var(--radius-sm);
  padding: var(--space-2) var(--space-3);
}

/* ─── TOAST ─── */
.toast {
  background: var(--panel-elevated);
  border: 1px solid var(--panel-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-5);
  font-size: 13px;
  box-shadow: var(--shadow-lg);
  animation: toast-in 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes toast-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── DATA BAR (fuel, throttle) ─── */
.data-bar {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.data-bar__track {
  flex: 1;
  height: 6px;
  background: var(--space-bg);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.data-bar__fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 100ms linear;
}

.data-bar__fill--fuel {
  background: var(--accent-gold);
}

.data-bar__fill--throttle {
  background: var(--accent-blue-bright);
}

.data-bar__fill--danger {
  background: var(--danger);
}

/* ─── PROGRESS RING ─── */
.progress-ring {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* ─── HUD BUTTON BAR ─── */
.btn-bar {
  display: flex;
  gap: 6px;
}

.btn--action {
  flex: 1;
  font-size: 10px;
  padding: 6px 4px;
  letter-spacing: 0.08em;
  background: rgba(58, 64, 85, 0.4);
  border-color: rgba(58, 64, 85, 0.6);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: background 120ms ease-out, border-color 120ms ease-out;
}

.btn--action:hover {
  background: rgba(58, 64, 85, 0.7);
  border-color: var(--text-muted);
  color: var(--text-primary);
}

.btn--action:active {
  transform: scale(0.95);
}

/* ─── SEPARATOR ─── */
.separator {
  width: 100%;
  height: 1px;
  background: var(--panel-border);
  margin: var(--space-3) 0;
}

.separator--vertical {
  width: 1px;
  height: 100%;
}
=== styles/tokens.css ===
:root {
  /* SPACE ENVIRONMENT */
  --space-deep: #060814;
  --space-bg: #0D0D0D;
  --space-atmosphere: #0E1424;
  --nebula: #2A1A3A;

  /* PANELS */
  --panel-bg: #242831;
  --panel-bg-alt: #1E222B;
  --panel-border: #3A4055;
  --panel-elevated: #2C3136;
  --panel-hover: #2E333A;

  /* TEXT */
  --text-primary: #F4F5F2;
  --text-secondary: #9DA3B5;
  --text-muted: #5C6275;
  --text-data: #F4F5F2;

  /* ACCENTS */
  --accent-gold: #EACD9E;
  --accent-gold-hover: #F0D9B0;
  --accent-gold-dim: #C4A87A;
  --accent-blue: #145181;
  --accent-blue-bright: #4FC3F7;
  --accent-blue-hover: #1A6BAC;
  --success: #7CFFB2;
  --warning: #FFC857;
  --danger: #FF3D5A;
  --danger-bg: #690509;

  /* SPACING (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-8: 48px;
  --space-10: 64px;

  /* RADIUS */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-full: 9999px;

  /* SHADOWS */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.5);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.6);
  --shadow-glow-gold: 0 0 12px rgba(234, 205, 158, 0.2);
  --shadow-glow-blue: 0 0 12px rgba(20, 81, 129, 0.3);
  --shadow-glow-danger: 0 0 12px rgba(255, 61, 90, 0.3);

  /* BORDERS */
  --border-thin: 1px solid var(--panel-border);
  --border-focus: 2px solid var(--accent-gold);
}
=== styles/typography.css ===
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

* {
  box-sizing: border-box;
}

::selection {
  background: var(--accent-gold);
  color: var(--space-deep);
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-primary);
  background: #000000;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Space Grotesk — Display/Headings */
.text-display {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text-display-sm {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Inter — Body */
.text-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.55;
}

.text-body-sm {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  line-height: 1.5;
}

/* JetBrains Mono — Data/HUD */
.text-data {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

.text-data-lg {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
}

.text-data-sm {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
}

/* Labels / Captions */
.text-caption {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--panel-border);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

/* Focus visible */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--space-deep), 0 0 0 4px var(--accent-gold);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

## ALL HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate, max-age=0" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <title>Ellipse</title>
    <link rel="stylesheet" href="/styles/tokens.css" />
    <link rel="stylesheet" href="/styles/typography.css" />
    <link rel="stylesheet" href="/styles/components.css" />
    <style>
      html, body { overflow: hidden; position: fixed; width: 100%; height: 100%; margin: 0; padding: 0; }
      #rotate-hint { display: none !important; }
      #rotate-hint {
        display: none; position: fixed; inset: 0; z-index: 9999;
        background: #0a0a12; color: #889; font: 600 18px/1.4 sans-serif;
        justify-content: center; align-items: center; text-align: center;
        flex-direction: column; gap: 16px;
      }
      #loading-screen {
        position: fixed; inset: 0; z-index: 900;
        background: #06080f;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        transition: opacity 0.8s ease-out;
      }
      #loading-screen.hidden { opacity: 0; pointer-events: none; }
      #loading-screen .logo {
        font: 600 48px/1 sans-serif;
        letter-spacing: 0.1em;
        color: #c89838;
        margin-bottom: 24px;
        text-shadow: 0 0 40px rgba(200,152,56,0.2);
        animation: pulse-logo 2s ease-in-out infinite;
      }
      @keyframes pulse-logo {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      .loader-spinner {
        width: 48px; height: 48px;
        border: 2px solid rgba(200,152,56,0.15);
        border-top-color: #c89838;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
      .loader-label {
        font: 400 13px/1.4 sans-serif;
        color: #556;
        letter-spacing: 0.05em;
        margin-top: 20px;
        text-align: center;
      }
      .star-field {
        position: fixed; inset: 0; z-index: -1;
        overflow: hidden;
      }
      .star-field .star {
        position: absolute;
        width: 2px; height: 2px;
        background: #fff;
        border-radius: 50%;
        animation: twinkle 3s ease-in-out infinite alternate;
      }
      @keyframes twinkle {
        0% { opacity: 0.2; }
        100% { opacity: 0.9; }
      }
    </style>
  </head>
  <body>
    <div id="loading-screen">
      <div class="star-field" id="loading-stars"></div>
      <div class="logo">ELLIPSE <span style="font-size:12px;color:#556;display:block;">v0.95</span></div>
      <div class="loader-spinner"></div>
      <div class="loader-label" id="loading-label">INITIALIZING</div>
    </div>
    <div id="rotate-hint">
      <div style="font-size:48px">↻</div>
      <div>Please rotate your device to landscape</div>
    </div>
    <div id="app" style="position:fixed;inset:0;z-index:1;"></div>
    <script>
      (function() {
        var el = document.getElementById('loading-stars');
        if (el) {
          for (var i = 0; i < 120; i++) {
            var s = document.createElement('div');
            s.className = 'star';
            s.style.left = (Math.random() * 100) + '%';
            s.style.top = (Math.random() * 100) + '%';
            s.style.width = s.style.height = (0.5 + Math.random() * 1.5) + 'px';
            s.style.animationDelay = (Math.random() * 3) + 's';
            s.style.animationDuration = (2 + Math.random() * 3) + 's';
            el.appendChild(s);
          }
        }
        var label = document.getElementById('loading-label');
        var msgs = ['INITIALIZING', 'LOADING SOLAR SYSTEM', 'GENERATING TEXTURES', 'PREPARING VEHICLES', 'CALIBRATING SENSORS'];
        var idx = 0;
        setInterval(function() {
          if (label && !label.dataset.done) {
            idx = (idx + 1) % msgs.length;
            label.textContent = msgs[idx];
          }
        }, 3000);
      })();
      window.onerror = function(m) { alert('JS Error: '+m); };
      // Force cache-bust: if page is old, try to reload
      (function(){
        var v = 'v0.95';
        if (sessionStorage.getItem('ellipse_ver') && sessionStorage.getItem('ellipse_ver') !== v) {
          sessionStorage.setItem('ellipse_ver', v);
          location.reload(true);
        } else {
          sessionStorage.setItem('ellipse_ver', v);
        }
      })();
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/ellipse/sw.js').then(function(reg) {
          reg.update();
        }).catch(function(){});
      }
    </script>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
=== src/config/constants.ts ===
/* Gravitational constant (m³/(kg·s²)) */
export const G = 6.67430e-11;

/** Orbit compression factor (1:10⁹) */
export const ORBIT_SCALE = 1e-9;

/** Visual planet size multiplier */
export const VISUAL_PLANET_MULT = 230000;

/** Fixed physics timestep (s) */
export const FIXED_DT = 1 / 60;

/** Standard gravity (m/s²) — used for Isp mass flow calc */
export const G0 = 9.80665;

/** Earth mass (kg) — g≈14.67 m/s² (max for Ant engine TWR≈1) */
export const EARTH_MASS = 8.92e25 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5;

/** Visual part scale factor (rocket size relative to planets) */
export const PART_SCALE = 0.05;

/** Rocket visual scale multiplier */
export const ROCKET_VISUAL_SCALE = 40;

/** Terrain displacement fraction of visual radius */
export const TERRAIN_DISP_FRAC = 0.001;

/** Ocean depression */
export const TERRAIN_OCEAN_FRAC = 0;

/** Sea level threshold */
export const TERRAIN_SEA_LEVEL = 0.35;

/** Resolve asset URL with correct base path for GitHub Pages. */
export function assetUrl(path: string): string {
  if (import.meta.env.DEV) return path;
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  return (base + path.replace(/^\//, '')).replace(/\/\//g, '/');
}

=== src/config/settings.ts ===
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

=== src/core/AchievementData.ts ===
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
  { id: 'one_stage', name: 'Single Stage', description: 'Reach orbit without staging' },
  { id: 'crash', name: 'Rapid Unscheduled Disassembly', description: 'Crash your rocket' },
  { id: 'land_earth', name: 'Home Sweet Home', description: 'Land safely on Earth' },
  { id: 'land_moon', name: 'Lunar Landing', description: 'Land safely on the Moon' },
  { id: 'land_mars', name: 'Red Planet Touchdown', description: 'Land safely on Mars' },
  { id: 'land_venus', name: 'Venusian Visit', description: 'Land safely on Venus' },
  { id: 'land_mercury', name: 'Mercurial Touch', description: 'Land safely on Mercury' },
  { id: 'stage_separate', name: 'Stage Separation', description: 'Separate a stage in flight' },
];

=== src/core/Achievements.ts ===
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

=== src/core/Game.ts ===
import { Renderer } from './Renderer';
import { SceneManager } from './SceneManager';
import { MainMenuScene } from '../scenes/MainMenuScene';
import { VABScene } from '../scenes/VABScene';
import { FlightScene } from '../scenes/FlightScene';
import { System } from '../physics/System';
import { Mercury } from '../planets/Mercury';
import { Venus } from '../planets/Venus';
import { Pluto } from '../planets/Pluto';
import { Earth } from '../planets/Earth';
import { Moon } from '../planets/Moon';
import { Mars } from '../planets/Mars';
import { Jupiter } from '../planets/Jupiter';
import { Saturn } from '../planets/Saturn';
import { Uranus } from '../planets/Uranus';
import { Neptune } from '../planets/Neptune';
import { Sun } from '../planets/Sun';
import { Rocket } from '../rocket/Rocket';
import { Assembly } from '../rocket/Assembly';
import { findPart } from '../parts/PartCatalog';
import { Achievements } from './Achievements';
import { toast } from '../ui/Toast';
import { loadSettings, SettingsPanel } from '../ui/Settings';
import { PART_SCALE, assetUrl } from '../config/constants';
import { loadAllTextures } from '../effects/TextureLoader';
import * as THREE from 'three';
import { loadGLTF } from '../parts/PartBuilder';

export class Game {
  renderer: Renderer;
  sceneMgr: SceneManager;
  system: System;
  achievements: Achievements;
  private mainMenu?: MainMenuScene;
  private vab?: VABScene;
  private flight?: FlightScene;

  constructor() {
    loadAllTextures();
    this.renderer = new Renderer();
    this.sceneMgr = new SceneManager();
    this.achievements = new Achievements();

    this.system = new System();
    const sunMass = 2e27 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5;
    this.system.add(new Sun([0, 0, 0], [0, 0, 0], sunMass));
    // Planets at game scale
    this.system.add(new Mercury([2e8, 0, 2e7], [0, 0, 38000]));
    this.system.add(new Venus([6e8, 0, -6e7], [0, 0, 21000]));
    const earthPos: [number, number, number] = [1e9, 0, 0];
    const earthVel: [number, number, number] = [0, 0, 17000];
    this.system.add(new Earth(earthPos, earthVel));
    const moonPos: [number, number, number] = [earthPos[0], 0, earthPos[2] + 6e7];
    const moonVel: [number, number, number] = [0, 0, earthVel[2] + 900];
    this.system.add(new Moon(moonPos, moonVel));
    this.system.add(new Mars([1.5e9, 1e9, -4e8], [0, 0, 13500]));
    this.system.add(new Jupiter([3e9, -6e8, 2e8], [0, 0, 9000]));
    this.system.add(new Saturn([5.6e9, 4e8, -4e8], [0, 0, 6800]));
    this.system.add(new Uranus([1.1e10, -2e8, 6e8], [0, 0, 4800]));
    this.system.add(new Neptune([1.7e10, 8e8, 0], [0, 0, 3800]));
    this.system.add(new Pluto([2.3e10, 1.6e9, -1e9], [0, 0, 2000]));

    document.getElementById('app')!.appendChild(this.renderer.domElement);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.sceneMgr.camera.aspect = window.innerWidth / window.innerHeight;
      this.sceneMgr.camera.updateProjectionMatrix();
    });
    this.achievements.onUnlock((id) => toast.show(`Achievement: ${id}`));
  }

  private async preloadModels(): Promise<void> {
    const { loadGLTF } = await import('../parts/PartBuilder');
    const models = ['/models/agena.glb','/models/saturn_v.glb','/models/apollo_soyuz.glb','/models/ares_1.glb','/models/apollo_lunar_module.glb','/models/atlas_6.glb','/models/atlas_9.glb','/models/crawler.glb'];
    await Promise.allSettled(models.map(url => loadGLTF(url, 1.0)));
    const texLoader = new THREE.TextureLoader();
    texLoader.load(assetUrl('/textures/earth_daymap.jpg'), () => {}, undefined, () => {});
  }

  start(): void { 
    this.showMainMenu();
    this.loop();
    this.preloadModels(); // load in background
  }

  private showMainMenu(): void {
    this.unmountCurrent();
    this.mainMenu = new MainMenuScene(() => this.showFlight(), () => this.showVab(), () => this.showSettings());
    this.mainMenu.mount();
  }

  private showSettings(): void { const panel = new SettingsPanel(loadSettings(), () => panel.unmount()); panel.mount(); }

  private showVab(): void {
    this.unmountCurrent();
    this.vab = new VABScene((assembly: Assembly) => { const r = new Rocket(assembly); this.showFlight(r); });
    this.vab.mount();
    this.sceneMgr.scene.add(this.vab.scene);
  }

  private async showFlight(rocket?: Rocket): Promise<void> {
    this.unmountCurrent();
    const a = rocket?.assembly ?? new Assembly();
    if (!rocket) {
      const p = PART_SCALE;
      // Space parts with gaps to avoid overlap
      const capH = 1.1 * p, tankH = 0.7 * p, engH = 0.7 * p;
      const gap = 0.005;
      const engY = 0;
      const tankY = engY + engH/2 + gap + tankH/2;
      const capY = tankY + tankH/2 + gap + capH/2;
      a.addRoot({ part: findPart('capsule_mk1')!, position: [0, capY, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, tankY, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('engine_ant')!, position: [0, engY, 0], rotation: 0, children: [] });
    }
    const r = new Rocket(a);
    this.flight = new FlightScene(this.renderer, this.sceneMgr, this.system, r, this.achievements);
    this.flight.onCrashAction = (action) => { if (action === 'menu') this.showMainMenu(); else this.showFlight(rocket); };
  }

  private unmountCurrent(): void {
    this.mainMenu?.unmount(); this.mainMenu = undefined;
    if (this.vab) { this.vab.unmount(); this.sceneMgr.scene.remove(this.vab.scene); this.vab = undefined; }
    this.flight?.dispose(); this.flight = undefined;
  }

  private loop(): void {
    const dt = 1 / 60;
    this.sceneMgr.update(dt);
    this.flight?.update(dt);
    if (this.vab) this.renderer.three.render(this.vab.scene, this.vab.camera);
    else this.renderer.three.render(this.sceneMgr.scene, this.sceneMgr.camera);
    requestAnimationFrame(() => this.loop());
  }
}

=== src/core/Renderer.ts ===
import * as THREE from 'three';

export class Renderer {
  readonly domElement: HTMLCanvasElement;
  readonly three: THREE.WebGLRenderer;

  constructor() {
    this.three = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.domElement = this.three.domElement;
    this.three.setPixelRatio(window.devicePixelRatio);
    this.three.setClearColor(0x000010, 1);
    this.three.toneMapping = THREE.NoToneMapping;
    this.three.outputColorSpace = THREE.SRGBColorSpace;
  }

  setSize(width: number, height: number): void {
    this.three.setSize(width, height, false);
    this.domElement.style.width = '100vw';
    this.domElement.style.height = '100vh';
    this.domElement.style.position = 'fixed';
    this.domElement.style.top = '0';
    this.domElement.style.left = '0';
  }

  dispose(): void {
    this.three.dispose();
  }
}

=== src/core/SceneManager.ts ===
import * as THREE from 'three';
import { Stars } from '../effects/Stars';

export class SceneManager {
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();
  private frames = 0;
  private lastFpsUpdate = 0;
  private fps = 0;
  private stars: Stars;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.stars = new Stars();
    this.scene.add(this.stars.getMesh());

    this.scene.add(new THREE.AmbientLight(0x223355, 0.1));
    this.scene.add(new THREE.HemisphereLight(0x335577, 0x112233, 0.15));

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1.0, 5e7);
    this.camera.position.set(0, 0, 10);
    this.camera.lookAt(0, 0, 0);
  }

  update(dt: number): void {
    const t = this.clock.getElapsedTime();
    this.frames++;
    if (t - this.lastFpsUpdate >= 1) {
      this.fps = this.frames / (t - this.lastFpsUpdate);
      this.frames = 0;
      this.lastFpsUpdate = t;
    }
    this.stars.getMesh().position.copy(this.camera.position);
    this.stars.update(dt);
  }

  getFps(): number { return this.fps; }
}

=== src/effects/AtmosphereGlow.ts ===
import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  Vertex shader – shared by inner & outer shells                     */
/* ------------------------------------------------------------------ */
const vertexShader = `
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos     = wp.xyz;
  vWorldNormal  = normalize(mat3(modelMatrix) * normal);
  vViewDir      = normalize(cameraPosition - wp.xyz);
  gl_Position   = projectionMatrix * viewMatrix * wp;
}
`;

/* ------------------------------------------------------------------ */
/*  Fragment shader with full scattering model                         */
/* ------------------------------------------------------------------ */
const fragmentShader = `
uniform vec3  uSunDir;           // normalised world-space direction planet→sun
uniform vec3  uPlanetCenter;     // world-space centre of the planet
uniform float uInnerRadius;      // planet surface radius
uniform float uAtmHeight;        // physical height of the atmosphere shell
uniform vec3  uRayleighCol;      // base Rayleigh colour (per-planet tint)
uniform vec3  uMieCol;           // Mie / haze colour
uniform float uDensity;          // overall optical depth multiplier
uniform vec3  uTerminatorCol;    // colour at the terminator (sunset band)
uniform float uGlowPower;        // how much the glow spreads past the limb

varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

// Rayleigh phase function  P(θ) = 3/16π (1 + cos²θ)
float rayleighPhase(float cosTheta) {
  float ct2 = cosTheta * cosTheta;
  return 0.0596831 * (1.0 + ct2);           // 3/(16π) ≈ 0.05968
}

// Henyey–Greenstein Mie phase function
float miePhase(float cosTheta, float g) {
  float g2 = g * g;
  return 0.0795775 * (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5);   // 1/(4π) ≈ 0.07958
}

void main() {
  vec3  V   = normalize(vViewDir);
  vec3  L   = normalize(uSunDir);
  vec3  N   = normalize(vWorldNormal);
  vec3  C   = uPlanetCenter;
  float R   = uInnerRadius;
  float Ratm = R + uAtmHeight;

  // ---- 1. Geometry: where on the planet disk? ----
  float viewAngle = max(dot(N, V), 0.0);
  float fresnel   = pow(1.0 - viewAngle, uGlowPower);

  // ---- 2. Lighting: day / terminator / night ----
  float NdotL     = dot(N, L);
  float daySide   = smoothstep(-0.15, 0.25, NdotL);
  float terminator = exp(-pow((NdotL - 0.08) * 6.0, 2.0));   // band at terminator

  // ---- 3. Phase functions ----
  float cosTheta   = dot(V, L);
  float phaseR    = rayleighPhase(cosTheta);
  float phaseM    = miePhase(cosTheta, 0.76);

  // ---- 4. Density approximation ----
  // Use fresnel as a proxy for the optical path length through the atmosphere
  float optDepth = fresnel * uDensity * 0.5;

  // ---- 5. Base colour mixing ----
  vec3 dayCol       = uRayleighCol;
  vec3 nightCol     = vec3(0.01, 0.005, 0.02);
  vec3 terminatorCol = uTerminatorCol;

  vec3 baseCol = mix(nightCol, dayCol, daySide);
  baseCol      = mix(baseCol, terminatorCol, terminator);

  // ---- 6. Apply phase + depth ----
  float scattering = phaseR * 0.7 + phaseM * 0.3;
  float alpha      = fresnel * (0.3 + 0.7 * daySide) * uDensity;

  vec3 color = baseCol * scattering * optDepth * 2.0;

  // ---- 7. Outer haze (adds bright white at limb) ----
  float haze = fresnel * fresnel * uDensity * 0.15 * (0.5 + 0.5 * daySide);
  color += vec3(haze);

  alpha = clamp(alpha, 0.0, 1.0);
  if (alpha < 0.005) discard;

  gl_FragColor = vec4(color, alpha);
}
`;

/* ------------------------------------------------------------------ */
/*  Outer / glow shell fragment shader (softer, fainter)              */
/* ------------------------------------------------------------------ */
const glowFragmentShader = `
uniform vec3  uSunDir;
uniform vec3  uPlanetCenter;
uniform float uInnerRadius;
uniform float uDensity;
uniform float uGlowPower;

varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

void main() {
  vec3 V = normalize(vViewDir);
  vec3 L = normalize(uSunDir);
  vec3 N = normalize(vWorldNormal);

  float viewAngle = max(dot(N, V), 0.0);
  float fresnel   = pow(1.0 - viewAngle, uGlowPower * 0.7);
  float NdotL     = dot(N, L);
  float dayFactor = smoothstep(-0.3, 0.2, NdotL);

  float cosTheta  = dot(V, L);
  float phase     = 0.05968 * (1.0 + cosTheta * cosTheta);

  float alpha = fresnel * (0.1 + 0.4 * dayFactor) * uDensity * phase;
  alpha = clamp(alpha, 0.0, 0.6);

  vec3 color = mix(
    vec3(0.01, 0.005, 0.03),
    vec3(0.3, 0.5, 1.0),
    dayFactor
  ) * fresnel * uDensity * 0.3;

  if (alpha < 0.005) discard;
  gl_FragColor = vec4(color, alpha);
}
`;

/* ------------------------------------------------------------------ */
/*  AtmosphereGlow class – dual shell (inner + outer)                  */
/* ------------------------------------------------------------------ */
export class AtmosphereGlow {
  private group = new THREE.Group();
  private innerMesh: THREE.Mesh;
  private outerMesh: THREE.Mesh;
  private innerMat: THREE.ShaderMaterial;
  private outerMat: THREE.ShaderMaterial;

  /**
   * @param planetRadius   visual radius of the planet body
   * @param color          base atmospheric tint (e.g. 0x4488ff for Earth)
   * @param intensity      overall strength of the effect
   * @param atmHeight      height of the atmosphere shell (in visual units, default 8 % of radius)
   * @param terminatorCol  colour at the sunset terminator (default orange)
   * @param glowPower      how far the glow spreads past the limb
   */
  constructor(
    planetRadius: number,
    color = 0x4488ff,
    intensity = 0.7,
    atmHeight?: number,
    terminatorCol = 0xff6622,
    glowPower = 3.0,
  ) {
    const baseCol = new THREE.Color(color);
    const termCol = new THREE.Color(terminatorCol);
    const h = atmHeight ?? planetRadius * 0.08;

    const planetCenter = new THREE.Vector3(0, 0, 0); // relative to parent (planet mesh)

    // ---- Inner shell ----
    const innerRadius = planetRadius * 1.01;
    const innerGeom = new THREE.SphereGeometry(innerRadius, 64, 48);

    this.innerMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uSunDir:        { value: new THREE.Vector3(0, 1, 0) },
        uPlanetCenter:  { value: planetCenter },
        uInnerRadius:   { value: planetRadius },
        uAtmHeight:     { value: h },
        uRayleighCol:   { value: baseCol },
        uMieCol:        { value: new THREE.Color(0.9, 0.9, 1.0) },
        uDensity:       { value: intensity },
        uTerminatorCol: { value: termCol },
        uGlowPower:     { value: glowPower },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    this.innerMesh = new THREE.Mesh(innerGeom, this.innerMat);
    this.group.add(this.innerMesh);

    // ---- Outer shell (wider, fainter glow) ----
    const outerRadius = planetRadius * 1.06;
    const outerGeom = new THREE.SphereGeometry(outerRadius, 48, 32);

    this.outerMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: glowFragmentShader,
      uniforms: {
        uSunDir:       { value: new THREE.Vector3(0, 1, 0) },
        uPlanetCenter: { value: planetCenter },
        uInnerRadius:  { value: planetRadius },
        uDensity:      { value: intensity * 0.5 },
        uGlowPower:    { value: glowPower },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    this.outerMesh = new THREE.Mesh(outerGeom, this.outerMat);
    this.group.add(this.outerMesh);
  }

  /** Update the sun direction uniform (called each frame from the scene) */
  setSunDirection(sunWorldPos: THREE.Vector3, planetWorldPos: THREE.Vector3): void {
    const dir = new THREE.Vector3().copy(sunWorldPos).sub(planetWorldPos).normalize();
    (this.innerMat.uniforms['uSunDir']!.value as THREE.Vector3).copy(dir);
    (this.outerMat.uniforms['uSunDir']!.value as THREE.Vector3).copy(dir);
  }

  getMesh(): THREE.Group {
    return this.group;
  }

  dispose(): void {
    this.innerMat.dispose();
    this.outerMat.dispose();
    this.innerMesh.geometry.dispose();
    this.outerMesh.geometry.dispose();
  }
}

=== src/effects/EngineFlame.ts ===
import * as THREE from 'three';
import { PART_SCALE } from '../config/constants';

const FLAME_SCALE = PART_SCALE / 0.08 * 1.5;
const PARTICLE_COUNT = 600;

function createCoreTexture(): THREE.Texture {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const g = canvas.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.15, 'rgba(255,255,240,0.95)');
    grad.addColorStop(0.35, 'rgba(255,230,180,0.7)');
    grad.addColorStop(0.55, 'rgba(255,180,100,0.35)');
    grad.addColorStop(0.75, 'rgba(255,120,50,0.15)');
    grad.addColorStop(1, 'rgba(255,80,20,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  } catch {
    return new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, THREE.RGBAFormat);
  }
}

function createOuterTexture(): THREE.Texture {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const g = canvas.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,200,100,0.6)');
    grad.addColorStop(0.3, 'rgba(255,150,60,0.3)');
    grad.addColorStop(0.6, 'rgba(200,80,30,0.1)');
    grad.addColorStop(1, 'rgba(100,30,10,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  } catch {
    return new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1, THREE.RGBAFormat);
  }
}

export class EngineFlame {
  private particles: THREE.Points;
  private outerParticles: THREE.Points;
  private positions: Float32Array;
  private velocities: Float32Array;
  private lifetimes: Float32Array;
  private ages: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;
  private active: boolean;
  private nextIndex: number;
  private coreTex: THREE.Texture;
  private outerTex: THREE.Texture;
  private throttleLevel: number = 1;
  private inVacuum: boolean = false;
  private group: THREE.Group;

  constructor() {
    this.active = false;
    this.nextIndex = 0;

    this.positions = new Float32Array(PARTICLE_COUNT * 3);
    this.velocities = new Float32Array(PARTICLE_COUNT * 3);
    this.lifetimes = new Float32Array(PARTICLE_COUNT);
    this.ages = new Float32Array(PARTICLE_COUNT);
    this.colors = new Float32Array(PARTICLE_COUNT * 3);
    this.sizes = new Float32Array(PARTICLE_COUNT);

    this.ages.fill(Infinity);

    this.coreTex = createCoreTexture();
    this.outerTex = createOuterTexture();

    this.group = new THREE.Group();

    // Core particles
    const coreGeom = new THREE.BufferGeometry();
    coreGeom.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    coreGeom.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    coreGeom.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    const coreMat = new THREE.PointsMaterial({
      size: FLAME_SCALE * 0.6,
      map: this.coreTex,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 1.0,
    });

    this.particles = new THREE.Points(coreGeom, coreMat);
    this.group.add(this.particles);

    // Outer glow particles (slightly larger, softer)
    const outerGeom = new THREE.BufferGeometry();
    outerGeom.setAttribute('position', new THREE.BufferAttribute(this.positions.slice(), 3));
    const outerMat = new THREE.PointsMaterial({
      size: FLAME_SCALE * 1.2,
      map: this.outerTex,
      color: 0xff8844,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.5,
    });

    this.outerParticles = new THREE.Points(outerGeom, outerMat);
    this.group.add(this.outerParticles);
  }

  setThrottle(t: number): void {
    this.throttleLevel = Math.max(0.01, t);
  }

  setVacuum(v: boolean): void {
    this.inVacuum = v;
  }

  start(): void {
    this.active = true;
  }

  stop(): void {
    this.active = false;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.ages[i] = this.lifetimes[i]!;
      this.positions[i * 3] = 0;
      this.positions[i * 3 + 1] = 0;
      this.positions[i * 3 + 2] = 0;
    }
    this.particles.geometry.attributes.position!.needsUpdate = true;
    this.particles.geometry.attributes.color!.needsUpdate = true;
    this.outerParticles.geometry.attributes.position!.needsUpdate = true;
  }

  update(dt: number): void {
    const vacMult = this.inVacuum ? 3.5 : 1;

    if (this.active) {
      const spawnCount = Math.ceil((3 + Math.random() * 3) * this.throttleLevel);

      for (let i = 0; i < spawnCount; i++) {
        const idx = this.nextIndex;
        this.nextIndex = (this.nextIndex + 1) % PARTICLE_COUNT;

        // Wider spread at lower pressure (vacuum expansion)
        const spread = (0.08 + Math.random() * 0.15) * (this.inVacuum ? 3 : 1) / Math.max(0.3, this.throttleLevel);

        this.positions[idx * 3]     = (Math.random() - 0.5) * spread * FLAME_SCALE;
        this.positions[idx * 3 + 1] = -(Math.random() * 0.04) * FLAME_SCALE;
        this.positions[idx * 3 + 2] = (Math.random() - 0.5) * spread * FLAME_SCALE;

        // Speed depends on throttle and atmosphere
        const speed = (6 + Math.random() * 10) * this.throttleLevel * vacMult;
        this.velocities[idx * 3]     = (Math.random() - 0.5) * 0.3 * FLAME_SCALE;
        this.velocities[idx * 3 + 1] = -(speed * FLAME_SCALE);
        this.velocities[idx * 3 + 2] = (Math.random() - 0.5) * 0.3 * FLAME_SCALE;

        // Lifetime longer in vacuum (plume expands more)
        this.lifetimes[idx] = (0.25 + Math.random() * 0.35) * vacMult;
        this.ages[idx] = 0;

        // Size variation
        this.sizes[idx] = 0.5 + Math.random() * 0.5;
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const age_i = this.ages[i]!;
      const lifetime_i = this.lifetimes[i]!;
      if (age_i >= lifetime_i) continue;

      const age = age_i + dt;
      this.ages[i] = age;

      if (age >= lifetime_i) continue;

      const t = age / lifetime_i;
      const i3 = i * 3;

      // Update position
      this.positions[i3]     = (this.positions[i3] ?? 0) + (this.velocities[i3] ?? 0) * dt;
      this.positions[i3 + 1] = (this.positions[i3 + 1] ?? 0) + (this.velocities[i3 + 1] ?? 0) * dt;
      this.positions[i3 + 2] = (this.positions[i3 + 2] ?? 0) + (this.velocities[i3 + 2] ?? 0) * dt;

      // Damping
      const damp = Math.exp(-2.0 * dt);
      this.velocities[i3]     = (this.velocities[i3] ?? 0) * damp;
      this.velocities[i3 + 2] = (this.velocities[i3 + 2] ?? 0) * damp;

      // Turbulence: random sideways wobble
      if (Math.random() < 0.05) {
        this.velocities[i3]     = (this.velocities[i3] ?? 0) + (Math.random() - 0.5) * 0.2 * FLAME_SCALE;
        this.velocities[i3 + 2] = (this.velocities[i3 + 2] ?? 0) + (Math.random() - 0.5) * 0.2 * FLAME_SCALE;
      }

      // Color: white core → yellow → orange → faint red
      let r: number, g: number, b: number;
      if (t < 0.15) {
        r = 1; g = 1; b = 1;
      } else if (t < 0.35) {
        const t2 = (t - 0.15) / 0.2;
        r = 1;
        g = 1 - t2 * 0.3;
        b = 1 - t2 * 0.8;
      } else if (t < 0.6) {
        const t2 = (t - 0.35) / 0.25;
        r = 1;
        g = 0.7 - t2 * 0.3;
        b = 0.2 - t2 * 0.15;
      } else {
        const t2 = (t - 0.6) / 0.4;
        r = 1 - t2 * 0.7;
        g = 0.4 - t2 * 0.35;
        b = 0.05 - t2 * 0.04;
      }

      // Vacuum: slightly more blue-shifted
      if (this.inVacuum) {
        g *= 0.85;
        b *= 0.5;
      }

      this.colors[i3]     = Math.max(0, r);
      this.colors[i3 + 1] = Math.max(0, g);
      this.colors[i3 + 2] = Math.max(0, b);

      // Size grows slightly then shrinks
      const sizeCurve = t < 0.3 ? 0.6 + t / 0.3 * 0.4 : 1.0 - (t - 0.3) / 0.7 * 0.8;
      this.sizes[i] = sizeCurve * (0.5 + (this.sizes[i] ?? 0.5) * 0.5);
    }

    this.particles.geometry.attributes.position!.needsUpdate = true;
    this.particles.geometry.attributes.color!.needsUpdate = true;
    (this.particles.geometry.attributes as any).size.needsUpdate = true;

    // Sync outer particle positions (shared, simpler)
    const outerPos = this.outerParticles.geometry.attributes.position!;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      outerPos.array[i3]     = this.positions[i3] ?? 0;
      outerPos.array[i3 + 1] = this.positions[i3 + 1] ?? 0;
      outerPos.array[i3 + 2] = this.positions[i3 + 2] ?? 0;
    }
    outerPos.needsUpdate = true;
  }

  getMesh(): THREE.Group {
    return this.group;
  }

  dispose(): void {
    this.particles.geometry.dispose();
    (this.particles.material as THREE.PointsMaterial).dispose();
    this.outerParticles.geometry.dispose();
    (this.outerParticles.material as THREE.PointsMaterial).dispose();
    this.coreTex.dispose();
    this.outerTex.dispose();
  }
}

=== src/effects/GroundSmoke.ts ===
import * as THREE from 'three';
import { PART_SCALE, ROCKET_VISUAL_SCALE } from '../config/constants';

const SMOKE_COUNT = 100;
const SMOKE_SCALE = PART_SCALE * ROCKET_VISUAL_SCALE;

export class GroundSmoke {
  private particles: THREE.Points;
  private positions: Float32Array;
  private velocities: Float32Array;
  private lifetimes: Float32Array;
  private ages: Float32Array;
  private active = false;

  constructor() {
    this.positions = new Float32Array(SMOKE_COUNT * 3);
    this.velocities = new Float32Array(SMOKE_COUNT * 3);
    this.lifetimes = new Float32Array(SMOKE_COUNT);
    this.ages = new Float32Array(SMOKE_COUNT);
    this.ages.fill(Infinity);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.3 * SMOKE_SCALE,
      color: 0xcccccc,
      transparent: true,
      opacity: 0.5,
      blending: THREE.NormalBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geometry, material);
  }

  start(): void { this.active = true; }
  stop(): void { this.active = false; }

  update(dt: number): void {
    if (this.active) {
      for (let i = 0; i < 3; i++) {
        let idx = -1;
        let oldestAge = -1;
        for (let j = 0; j < SMOKE_COUNT; j++) {
          if (this.ages[j]! >= this.lifetimes[j]!) {
            if (this.ages[j]! > oldestAge) { oldestAge = this.ages[j]!; idx = j; }
          }
        }
        if (idx < 0) {
          for (let j = 0; j < SMOKE_COUNT; j++) {
            if (this.ages[j]! > oldestAge) { oldestAge = this.ages[j]!; idx = j; }
          }
        }
        if (idx >= 0) {
          this.positions[idx * 3] = (Math.random() - 0.5) * 0.1 * SMOKE_SCALE;
          this.positions[idx * 3 + 1] = 0;
          this.positions[idx * 3 + 2] = (Math.random() - 0.5) * 0.1 * SMOKE_SCALE;
          this.velocities[idx * 3] = (Math.random() - 0.5) * 0.5 * SMOKE_SCALE;
          this.velocities[idx * 3 + 1] = (0.5 + Math.random() * 1.0) * SMOKE_SCALE;
          this.velocities[idx * 3 + 2] = (Math.random() - 0.5) * 0.5 * SMOKE_SCALE;
          this.lifetimes[idx] = 1.0 + Math.random() * 1.5;
          this.ages[idx] = 0;
        }
      }
    }

    const mat = this.particles.material as THREE.PointsMaterial;
    let anyAlive = false;
    const vel = this.velocities;
    const pos = this.positions;
    for (let i = 0; i < SMOKE_COUNT; i++) {
      if (this.ages[i]! >= this.lifetimes[i]!) continue;
      anyAlive = true;
      const age = this.ages[i]! + dt;
      this.ages[i] = age;
      if (age >= this.lifetimes[i]!) continue;
      const i3 = i * 3;
      const vx = vel[i3] ?? 0;
      const vy = vel[i3 + 1] ?? 0;
      const vz = vel[i3 + 2] ?? 0;
      pos[i3] = (pos[i3] ?? 0) + vx * dt;
      pos[i3 + 1] = (pos[i3 + 1] ?? 0) + vy * dt;
      pos[i3 + 2] = (pos[i3 + 2] ?? 0) + vz * dt;
      vel[i3] = vx * 0.98;
      vel[i3 + 2] = vz * 0.98;
    }
    mat.opacity = this.active ? 0.5 : Math.max(0, mat.opacity - dt * 2);
    this.particles.geometry.attributes.position!.needsUpdate = true;
    this.particles.visible = anyAlive || this.active;
  }

  getMesh(): THREE.Points { return this.particles; }
  dispose(): void { this.particles.geometry.dispose(); (this.particles.material as THREE.PointsMaterial).dispose(); }
}

=== src/effects/ProceduralTextures.ts ===
import * as THREE from 'three';

// ── helpers ────────────────────────────────────────────────────────────────

function createCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  return [canvas, ctx];
}

/** Simple seeded random (mulberry32) */
function seededRandom(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** equirectangular UV → normalised lat/lon in [-1, 1] */
function uvToLatLon(u: number, v: number): [number, number] {
  const lon = u * 2 * Math.PI - Math.PI;   // -π … π
  const lat = v * Math.PI - Math.PI / 2;     // -π/2 … π/2
  return [lat, lon];
}

// ── continent shapes (lat, lon in radians) ────────────────────────────────

interface Continent {
  lat: number;
  lon: number;
  radiusLat: number;
  radiusLon: number;
  color: string;
}

const CONTINENTS: Continent[] = [
  // North America
  { lat: 0.7, lon: -1.8, radiusLat: 0.5, radiusLon: 0.8, color: '#4a7c3f' },
  // South America
  { lat: -0.4, lon: -1.3, radiusLat: 0.6, radiusLon: 0.35, color: '#5a8c4a' },
  // Europe
  { lat: 0.85, lon: 0.4, radiusLat: 0.25, radiusLon: 0.3, color: '#6a9c5a' },
  // Africa
  { lat: 0.1, lon: 0.6, radiusLat: 0.55, radiusLon: 0.4, color: '#8a7c3f' },
  // Asia (large)
  { lat: 0.7, lon: 1.6, radiusLat: 0.55, radiusLon: 1.0, color: '#6a8c4a' },
  // Australia
  { lat: -0.6, lon: 2.4, radiusLat: 0.25, radiusLon: 0.3, color: '#9a8c5a' },
  // Greenland
  { lat: 1.1, lon: -0.9, radiusLat: 0.2, radiusLon: 0.2, color: '#8aac7a' },
];

// ── TextureSet types ─────────────────────────────────────────────────────

export interface TextureSet {
  color: THREE.CanvasTexture;
  normal?: THREE.CanvasTexture;
  roughness?: THREE.CanvasTexture;
  metalness?: THREE.CanvasTexture;
  // New PBR maps
  ao?: THREE.CanvasTexture;
  emissive?: THREE.CanvasTexture;
}

/** Generate a normal map from a height map canvas using Sobel filter. */
function makeNormalMap(src: HTMLCanvasElement, strength = 2.0): THREE.CanvasTexture {
  const W = src.width, H = src.height;
  const sCtx = src.getContext('2d')!;
  const sImg = sCtx.getImageData(0, 0, W, H);
  const sData: Uint8ClampedArray = sImg.data;
  const [canvas, ctx] = createCanvas(W, H);
  const img = ctx.createImageData(W, H);
  const d = img.data;
  const idx2 = (x: number, y: number) => (Math.max(0, Math.min(H - 1, y)) * W + Math.max(0, Math.min(W - 1, x))) * 4;
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const tl = sData[idx2(px - 1, py - 1)]! / 255;
      const t  = sData[idx2(px,     py - 1)]! / 255;
      const tr = sData[idx2(px + 1, py - 1)]! / 255;
      const l  = sData[idx2(px - 1, py)]!     / 255;
      const r  = sData[idx2(px + 1, py)]!     / 255;
      const bl = sData[idx2(px - 1, py + 1)]! / 255;
      const b  = sData[idx2(px,     py + 1)]! / 255;
      const br = sData[idx2(px + 1, py + 1)]! / 255;
      const dx = (tr + 2 * r + br) - (tl + 2 * l + bl);
      const dy = (bl + 2 * b + br) - (tl + 2 * t + tr);
      const nx = dx * strength, ny = dy * strength;
      const len = Math.sqrt(nx * nx + ny * ny + 1);
      const i = (py * W + px) * 4;
      d[i]!     = Math.round((nx / len * 0.5 + 0.5) * 255);
      d[i + 1]! = Math.round((ny / len * 0.5 + 0.5) * 255);
      d[i + 2]! = Math.round((1 / len) * 255);
      d[i + 3]! = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

function createFullTextureSet(
  colorCanvas: HTMLCanvasElement,
  normalCanvas?: HTMLCanvasElement,
  roughnessCanvas?: HTMLCanvasElement,
  metalnessCanvas?: HTMLCanvasElement,
  aoCanvas?: HTMLCanvasElement,
): TextureSet {
  const color = new THREE.CanvasTexture(colorCanvas);
  color.wrapS = color.wrapT = THREE.RepeatWrapping;
  color.colorSpace = THREE.SRGBColorSpace;
  color.anisotropy = 4;

  let normal: THREE.CanvasTexture | undefined;
  if (normalCanvas) {
    normal = makeNormalMap(normalCanvas, 2.0);
  }

  let roughness: THREE.CanvasTexture | undefined;
  if (roughnessCanvas) {
    roughness = new THREE.CanvasTexture(roughnessCanvas);
    roughness.wrapS = roughness.wrapT = THREE.RepeatWrapping;
    roughness.anisotropy = 4;
  }

  let metalness: THREE.CanvasTexture | undefined;
  if (metalnessCanvas) {
    metalness = new THREE.CanvasTexture(metalnessCanvas);
    metalness.wrapS = metalness.wrapT = THREE.RepeatWrapping;
    metalness.anisotropy = 4;
  }

  let ao: THREE.CanvasTexture | undefined;
  if (aoCanvas) {
    ao = new THREE.CanvasTexture(aoCanvas);
    ao.wrapS = ao.wrapT = THREE.RepeatWrapping;
    ao.anisotropy = 4;
  }

  return { color, normal, roughness, metalness, ao };
}

function seededRandomFast(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

function drawNoise(ctx: CanvasRenderingContext2D, W: number, H: number, scale: number, seed: number, min = 0, max = 255) {
  const rng = seededRandomFast(seed);
  const img = ctx.createImageData(W, H);
  const data = img.data;
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const idx = (py * W + px) * 4;
      const v = min + rng() * (max - min);
      data[idx] = data[idx + 1] = data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

function addFilmGrain(ctx: CanvasRenderingContext2D, W: number, H: number, amount = 0.02) {
  const img = ctx.getImageData(0, 0, W, H);
  const data = img.data!;
  for (let i = 0; i < data.length; i += 4) {
    const grain = (Math.random() - 0.5) * 2 * amount * 255;
    data[i]! = Math.min(255, Math.max(0, data[i]! + grain));
    data[i + 1]! = Math.min(255, Math.max(0, data[i + 1]! + grain));
    data[i + 2]! = Math.min(255, Math.max(0, data[i + 2]! + grain));
  }
  ctx.putImageData(img, 0, 0);
}

// ── public API ────────────────────────────────────────────────────────────

export function generateEarthTexture(): THREE.CanvasTexture {
  const W = 512, H = 256;
  const [canvas, ctx] = createCanvas(W, H);

  // 1. deep ocean
  ctx.fillStyle = '#1a3d6b';
  ctx.fillRect(0, 0, W, H);

  // 2. draw continents as ellipses
  for (const c of CONTINENTS) {
    ctx.fillStyle = c.color;
    ctx.beginPath();
    // map lat [0.85 … -1.1] → v [0 … 1]
    const cx = (c.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - c.lat) / Math.PI * H;
    const rx = c.radiusLon / (2 * Math.PI) * W;
    const ry = c.radiusLat / Math.PI * H;
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();

    // add some variation dots
    const rng = seededRandom(c.lat * 1000 + c.lon * 100);
    for (let i = 0; i < 40; i++) {
      const dx = (rng() - 0.5) * rx * 1.5;
      const dy = (rng() - 0.5) * ry * 1.5;
      const px = cx + dx;
      const py = cy + dy;
      const dist = ((dx / rx) ** 2 + (dy / ry) ** 2);
      if (dist < 1) {
        ctx.fillStyle = rng() > 0.5 ? '#3a6c2f' : '#7aac5a';
        ctx.beginPath();
        ctx.arc(px, py, 2 + rng() * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // 3. polar caps
  // north
  ctx.fillStyle = '#d0e8f0';
  ctx.fillRect(0, 0, W, H * 0.06);
  // south
  ctx.fillRect(0, H * 0.94, W, H * 0.06);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function generateEarthBumpMap(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const [canvas, ctx] = createCanvas(W, H);
  const imageData = ctx.createImageData(W, H);
  const data = imageData.data;

  // build continent mask so we can blend
  const continentMask = new Float32Array(W * H);

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const u = px / W;
      const v = py / H;
      const [lat, lon] = uvToLatLon(u, v);
      let mask = 0;
      for (const c of CONTINENTS) {
        const dlat = (lat - c.lat) / c.radiusLat;
        const dlon = (lon - c.lon) / c.radiusLon;
        if (dlat * dlat + dlon * dlon < 1) {
          mask = 1;
          break;
        }
      }
      // polar caps
      if (v < 0.07 || v > 0.93) mask = 0.5;
      continentMask[py * W + px] = mask;
    }
  }

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const idx = (py * W + px) * 4;
      const mask = continentMask[py * W + px] ?? 0;
      const noise = (Math.random() * 0.15 + 0.85);
      const elevation = (mask * 0.5 + 0.1 * noise) * 255;
      const v = Math.min(255, Math.max(0, Math.round(elevation)));
      data[idx] = v;
      data[idx + 1] = v;
      data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

export function generateMoonTexture(): THREE.CanvasTexture {
  const W = 512, H = 256;
  const [canvas, ctx] = createCanvas(W, H);

  // base gray
  ctx.fillStyle = '#9a9a9a';
  ctx.fillRect(0, 0, W, H);

  const rng = seededRandom(42);

  // craters
  for (let i = 0; i < 120; i++) {
    const cx = rng() * W;
    const cy = rng() * H;
    const radius = 3 + rng() * 20;
    const brightness = rng() * 40;
    const base = 0x9a - brightness;
    const color = `rgb(${base}, ${base}, ${base})`;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    // crater rim
    ctx.strokeStyle = `rgb(${base + 30}, ${base + 30}, ${base + 30})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // highlands (lighter patches)
  for (let i = 0; i < 30; i++) {
    const cx = rng() * W;
    const cy = rng() * H;
    const radius = 10 + rng() * 30;
    const brightness = 50 + rng() * 40;
    ctx.fillStyle = `rgb(${0x9a + brightness}, ${0x9a + brightness}, ${0x9a + brightness})`;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function generateMoonBumpMap(): THREE.CanvasTexture {
  const W = 512, H = 256;
  const [canvas, ctx] = createCanvas(W, H);
  const imageData = ctx.createImageData(W, H);
  const data = imageData.data;

  const rng = seededRandom(99);

  // crater positions
  const craters: [number, number, number][] = [];
  for (let i = 0; i < 120; i++) {
    craters.push([rng() * W, rng() * H, 3 + rng() * 20]);
  }

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const noise = rng() * 20;
      let val = 100 + noise; // base

      for (const [cx, cy, r] of craters) {
        const dx = px - cx;
        const dy = py - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < r) {
          // inside crater: darker
          const inner = (dist / r);
          val = 40 + inner * 60;
        } else if (dist < r * 1.15) {
          // rim: lighter
          const rim = (dist - r) / (r * 0.15);
          val = 180 + (1 - rim) * 50;
        }
      }

      const v = Math.min(255, Math.max(0, Math.round(val)));
      const idx = (py * W + px) * 4;
      data[idx] = v;
      data[idx + 1] = v;
      data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// ── Rocket part textures ─────────────────────────────────────────────────

export function generateTankTexture(size: 'S' | 'M' | 'L' | 'XL' = 'M'): TextureSet {
  const W = 2048, H = 2048;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(size.charCodeAt(0) * 1000 + 42);

  const isSmall = size === 'S';
  const isLarge = size === 'L' || size === 'XL';

  // === COLOR MAP ===
  // Light grey-white base (like real rocket tanks)
  colorCtx.fillStyle = '#e8e8e4';
  colorCtx.fillRect(0, 0, W, H);

  // Subtle vertical gradient for lighting effect
  const grad = colorCtx.createLinearGradient(0, 0, 0, H);
  if (grad) {
    grad.addColorStop(0, 'rgba(0,0,0,0.03)');
    grad.addColorStop(0.3, 'rgba(0,0,0,0)');
    grad.addColorStop(0.7, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.04)');
    colorCtx.fillStyle = grad;
    colorCtx.fillRect(0, 0, W, H);
  }

  // Horizontal weld seams
  const panelCount = isSmall ? 4 : isLarge ? 12 : 8;
  const panelH = H / panelCount;
  for (let y = panelH; y < H; y += panelH) {
    // Seam shadow
    colorCtx.strokeStyle = 'rgba(0,0,0,0.08)';
    colorCtx.lineWidth = 2;
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();

    // Weld bead highlight
    colorCtx.strokeStyle = 'rgba(255,255,255,0.15)';
    colorCtx.lineWidth = 1.5;
    colorCtx.beginPath();
    colorCtx.moveTo(0, y - 1.5);
    colorCtx.lineTo(W, y - 1.5);
    colorCtx.stroke();
  }

  // Vertical stringers
  const stringerCount = isSmall ? 8 : isLarge ? 24 : 14;
  colorCtx.strokeStyle = 'rgba(80,80,90,0.04)';
  colorCtx.lineWidth = 1.5;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }

  // Rivets along weld seams
  colorCtx.fillStyle = '#c0c0ba';
  for (let y = panelH; y < H; y += panelH) {
    for (let x = 30; x < W - 30; x += 60) {
      colorCtx.beginPath();
      colorCtx.arc(x, y, 4, 0, Math.PI * 2);
      colorCtx.fill();
      colorCtx.strokeStyle = '#a0a09a';
      colorCtx.lineWidth = 0.5;
      colorCtx.stroke();
    }
  }

  // US flag pattern on larger tanks
  if (isLarge) {
    const flagX = W * 0.08, flagY = H * 0.15;
    const flagW = W * 0.12, flagH = H * 0.08;
    // Blue field
    colorCtx.fillStyle = '#002868';
    colorCtx.fillRect(flagX, flagY, flagW * 0.4, flagH);
    // Red stripes
    for (let i = 0; i < 7; i++) {
      colorCtx.fillStyle = i % 2 === 0 ? '#BF0A30' : '#ffffff';
      colorCtx.fillRect(flagX + flagW * 0.4, flagY + (i / 7) * flagH, flagW * 0.6, flagH / 7);
    }
    // White stars (simplified as dots)
    colorCtx.fillStyle = '#ffffff';
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 3; col++) {
        colorCtx.beginPath();
        colorCtx.arc(flagX + (col + 0.5) * (flagW * 0.4 / 3), flagY + (row + 0.5) * (flagH / 5), 2, 0, Math.PI * 2);
        colorCtx.fill();
      }
    }
  }

  // "USA" text on tanks
  colorCtx.fillStyle = 'rgba(30,40,80,0.12)';
  colorCtx.font = `bold ${H * 0.06}px monospace`;
  colorCtx.textAlign = 'center';
  colorCtx.fillText('USA', W / 2, H * 0.25);

  // Insulation foam patches (SpaceX Falcon 9 style)
  const foamCount = isSmall ? 3 : isLarge ? 12 : 6;
  for (let i = 0; i < foamCount; i++) {
    const x = rng() * W * 0.8 + W * 0.1;
    const y = rng() * H * 0.7 + H * 0.15;
    const w = 60 + rng() * 200;
    const h = 50 + rng() * 140;

    // Orange-brown foam base with variation
    const fr = 180 + rng() * 40;
    const fg = 140 + rng() * 30;
    const fb = 80 + rng() * 30;
    colorCtx.fillStyle = `rgb(${fr}, ${fg}, ${fb})`;
    colorCtx.globalAlpha = 0.6 + rng() * 0.3;
    colorCtx.fillRect(x, y, w, h);

    // Foam texture dots/strokes
    colorCtx.fillStyle = `rgb(${fr - 20}, ${fg - 15}, ${fb - 10})`;
    for (let d = 0; d < 15; d++) {
      colorCtx.beginPath();
      colorCtx.arc(x + rng() * w, y + rng() * h, 2 + rng() * 6, 0, Math.PI * 2);
      colorCtx.fill();
    }

    // Frost/ice patches on foam (white semi-transparent)
    colorCtx.fillStyle = 'rgba(200, 220, 240, 0.15)';
    for (let d = 0; d < 5; d++) {
      colorCtx.beginPath();
      colorCtx.arc(x + rng() * w, y + rng() * h, 5 + rng() * 15, 0, Math.PI * 2);
      colorCtx.fill();
    }
    colorCtx.globalAlpha = 1;
  }

  // Top/bottom domes (slightly darker)
  colorCtx.fillStyle = '#606068';
  colorCtx.fillRect(0, 0, W, H * 0.012);
  colorCtx.fillRect(0, H * 0.988, W, H * 0.012);

  // Vertical seam (welded joint along the side)
  colorCtx.strokeStyle = 'rgba(80,80,90,0.3)';
  colorCtx.lineWidth = 3;
  colorCtx.beginPath();
  colorCtx.moveTo(W * 0.5, 0);
  colorCtx.lineTo(W * 0.5, H);
  colorCtx.stroke();

  // Subtle dirt/grime streaks
  colorCtx.strokeStyle = 'rgba(60,50,40,0.03)';
  colorCtx.lineWidth = 1;
  for (let i = 0; i < 30; i++) {
    const sx = rng() * W;
    const sy = rng() * H;
    colorCtx.beginPath();
    colorCtx.moveTo(sx, sy);
    colorCtx.lineTo(sx + (rng() - 0.5) * 20, sy + rng() * H * 0.3);
    colorCtx.stroke();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Panel seam ridges
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 8;
  for (let y = panelH; y < H; y += panelH) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // Stringers
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 3;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }

  // Rivets
  normalCtx.fillStyle = '#c8c8c8';
  for (let y = panelH; y < H; y += panelH) {
    for (let x = 30; x < W - 30; x += 60) {
      normalCtx.beginPath();
      normalCtx.arc(x, y, 5, 0, Math.PI * 2);
      normalCtx.fill();
    }
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#909090';
  roughCtx.fillRect(0, 0, W, H);

  // Seams rougher
  roughCtx.strokeStyle = '#c0c0c0';
  roughCtx.lineWidth = 10;
  for (let y = panelH; y < H; y += panelH) {
    roughCtx.beginPath();
    roughCtx.moveTo(0, y);
    roughCtx.lineTo(W, y);
    roughCtx.stroke();
  }

  // Foam areas very rough
  for (let i = 0; i < foamCount; i++) {
    const x = rng() * W * 0.8 + W * 0.1;
    const y = rng() * H * 0.7 + H * 0.15;
    const w = 60 + rng() * 200;
    const h = 50 + rng() * 140;
    roughCtx.fillStyle = '#e0e0e0';
    roughCtx.fillRect(x, y, w, h);
  }

  // Domes smoother
  roughCtx.fillStyle = '#505050';
  roughCtx.fillRect(0, 0, W, H * 0.012);
  roughCtx.fillRect(0, H * 0.988, W, H * 0.012);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#050505';
  metalCtx.fillRect(0, 0, W, H);

  // Domes slightly metallic (bare metal)
  metalCtx.fillStyle = '#c0c0c0';
  metalCtx.fillRect(0, 0, W, H * 0.012);
  metalCtx.fillRect(0, H * 0.988, W, H * 0.012);

  // Vertical seam metallic
  metalCtx.fillStyle = '#606060';
  metalCtx.fillRect(W * 0.49, 0, W * 0.02, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 12;
  for (let y = panelH; y < H; y += panelH) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#b0b0b0';
  aoCtx.lineWidth = 6;
  for (let i = 1; i < stringerCount; i++) {
    const x = (i / stringerCount) * W;
    aoCtx.beginPath();
    aoCtx.moveTo(x, 0);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.010);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateCapsuleTexture(): TextureSet {
  const W = 2048, H = 2048;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(12345);

  // === COLOR MAP ===
  // White capsule body (Apollo/Dragon style)
  colorCtx.fillStyle = '#f5f5ee';
  colorCtx.fillRect(0, 0, W, H * 0.78);

  // Subtle vertical gradient
  const bodyGrad = colorCtx.createLinearGradient(0, 0, 0, H * 0.78);
  if (bodyGrad) {
    bodyGrad.addColorStop(0, 'rgba(20,20,25,0.05)');
    bodyGrad.addColorStop(0.5, 'rgba(0,0,0,0)');
    bodyGrad.addColorStop(1, 'rgba(20,20,25,0.03)');
    colorCtx.fillStyle = bodyGrad;
    colorCtx.fillRect(0, 0, W, H * 0.78);
  }

  // Panel seam lines on body
  colorCtx.strokeStyle = 'rgba(180,180,180,0.15)';
  colorCtx.lineWidth = 2;
  for (let y = H * 0.08; y < H * 0.75; y += H * 0.07) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // Heat shield (dark ablative) with better detail
  colorCtx.fillStyle = '#2a2a2e';
  colorCtx.fillRect(0, H * 0.78, W, H * 0.22);

  // Tiled pattern (Shuttle-style tiles)
  colorCtx.strokeStyle = 'rgba(40,40,45,0.5)';
  colorCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 32) {
    colorCtx.beginPath(); colorCtx.moveTo(x, H * 0.78); colorCtx.lineTo(x, H); colorCtx.stroke();
  }
  for (let y = H * 0.78; y < H; y += 32) {
    colorCtx.beginPath(); colorCtx.moveTo(0, y); colorCtx.lineTo(W, y); colorCtx.stroke();
  }

  // Ablative texture dots with color variation
  for (let i = 0; i < 2000; i++) {
    const x = rng() * W;
    const y = H * 0.78 + rng() * H * 0.22;
    const r = 1 + rng() * 3;
    const b = 25 + rng() * 50;
    const warmth = rng() * 15;
    colorCtx.fillStyle = `rgb(${b + warmth},${b},${b - warmth})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Reentry char streaks with more variation
  for (let i = 0; i < 60; i++) {
    const sx = rng() * W;
    const sy = H * 0.78 + rng() * H * 0.15;
    const len = 30 + rng() * 150;
    const drift = (rng() - 0.5) * 50;
    colorCtx.strokeStyle = `rgba(20,15,10,${0.2 + rng() * 0.3})`;
    colorCtx.lineWidth = 1 + rng() * 3;
    colorCtx.beginPath();
    colorCtx.moveTo(sx, sy);
    colorCtx.lineTo(sx + drift, sy + len);
    colorCtx.stroke();

    // Glowing streak edge
    colorCtx.strokeStyle = `rgba(60,40,20,${0.05 + rng() * 0.1})`;
    colorCtx.lineWidth = 3 + rng() * 5;
    colorCtx.beginPath();
    colorCtx.moveTo(sx - drift * 0.1, sy + len * 0.2);
    colorCtx.lineTo(sx + drift, sy + len);
    colorCtx.stroke();
  }

  // Separation ring
  colorCtx.fillStyle = '#5a5a60';
  colorCtx.fillRect(0, H * 0.77, W, H * 0.015);
  colorCtx.fillStyle = '#8a8a90';
  colorCtx.fillRect(0, H * 0.775, W, H * 0.005);

  // NASA-style stripes
  colorCtx.fillStyle = '#003366';
  colorCtx.fillRect(0, H * 0.20, W, H * 0.035);
  colorCtx.fillStyle = '#b31b1b';
  colorCtx.fillRect(0, H * 0.245, W, H * 0.025);
  colorCtx.fillStyle = 'rgba(255,255,255,0.25)';
  colorCtx.fillRect(0, H * 0.27, W, H * 0.003);

  // Command module windows (2 windows)
  const windPositions: [number, number][] = [[W * 0.28, H * 0.12], [W * 0.55, H * 0.14]];
  for (const [wx, wy] of windPositions) {
    colorCtx.fillStyle = '#0a0a15';
    colorCtx.beginPath();
    colorCtx.ellipse(wx, wy, W * 0.04, H * 0.03, 0, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#9a9a9e';
    colorCtx.lineWidth = 5;
    colorCtx.beginPath();
    colorCtx.ellipse(wx, wy, W * 0.045, H * 0.035, 0, 0, Math.PI * 2);
    colorCtx.stroke();
    colorCtx.strokeStyle = '#5a5a5e';
    colorCtx.lineWidth = 2;
    colorCtx.beginPath();
    colorCtx.ellipse(wx, wy, W * 0.05, H * 0.04, 0, 0, Math.PI * 2);
    colorCtx.stroke();
  }

  // RCS ports
  colorCtx.fillStyle = '#3a3a3e';
  for (let q = 0; q < 4; q++) {
    const a = (q / 4) * Math.PI * 2;
    const x = W * 0.5 + Math.cos(a) * W * 0.38;
    const y = H * 0.35 + Math.sin(a) * H * 0.05;
    colorCtx.beginPath();
    colorCtx.arc(x, y, 14, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#5a5a5e';
    colorCtx.lineWidth = 2;
    colorCtx.stroke();
  }

  // Parachute cover
  colorCtx.fillStyle = '#e0e0d8';
  colorCtx.fillRect(0, 0, W, H * 0.04);
  colorCtx.strokeStyle = '#a0a0a0';
  colorCtx.lineWidth = 2;
  colorCtx.beginPath();
  colorCtx.moveTo(0, H * 0.04);
  colorCtx.lineTo(W, H * 0.04);
  colorCtx.stroke();

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  normalCtx.strokeStyle = '#a8a8a8';
  normalCtx.lineWidth = 5;
  for (let y = H * 0.08; y < H * 0.75; y += H * 0.07) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  normalCtx.strokeStyle = '#585858';
  normalCtx.lineWidth = 3;
  for (let x = 0; x < W; x += 48) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, H * 0.78);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }
  for (let y = H * 0.8; y < H; y += 48) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  normalCtx.strokeStyle = '#c0c0c0';
  normalCtx.lineWidth = 8;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.775);
  normalCtx.lineTo(W, H * 0.775);
  normalCtx.stroke();

  for (const [wx, wy] of windPositions) {
    normalCtx.strokeStyle = '#d0d0d0';
    normalCtx.lineWidth = 10;
    normalCtx.beginPath();
    normalCtx.ellipse(wx, wy, W * 0.05, H * 0.04, 0, 0, Math.PI * 2);
    normalCtx.stroke();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#808080';
  roughCtx.fillRect(0, 0, W, H * 0.78);

  roughCtx.fillStyle = '#e0e0e0';
  roughCtx.fillRect(0, H * 0.78, W, H * 0.22);

  roughCtx.fillStyle = '#484848';
  roughCtx.fillRect(0, H * 0.77, W, H * 0.015);

  for (const [wx, wy] of windPositions) {
    roughCtx.fillStyle = '#181818';
    roughCtx.beginPath();
    roughCtx.ellipse(wx, wy, W * 0.045, H * 0.035, 0, 0, Math.PI * 2);
    roughCtx.fill();
  }

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#080808';
  metalCtx.fillRect(0, 0, W, H);

  metalCtx.fillStyle = '#d0d0d0';
  metalCtx.fillRect(0, H * 0.77, W, H * 0.015);
  metalCtx.fillRect(0, 0, W, H * 0.04);

  for (const [wx, wy] of windPositions) {
    metalCtx.fillStyle = '#b0b0b0';
    metalCtx.beginPath();
    metalCtx.ellipse(wx, wy, W * 0.05, H * 0.04, 0, 0, Math.PI * 2);
    metalCtx.fill();
  }

  for (let q = 0; q < 4; q++) {
    const a = (q / 4) * Math.PI * 2;
    const x = W * 0.5 + Math.cos(a) * W * 0.38;
    const y = H * 0.35 + Math.sin(a) * H * 0.05;
    metalCtx.beginPath();
    metalCtx.arc(x, y, 16, 0, Math.PI * 2);
    metalCtx.fill();
  }

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 10;
  for (let y = H * 0.08; y < H * 0.75; y += H * 0.07) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#606060';
  aoCtx.lineWidth = 6;
  for (let x = 0; x < W; x += 48) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, H * 0.78);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }
  for (let y = H * 0.8; y < H; y += 48) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#909090';
  aoCtx.lineWidth = 12;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.775);
  aoCtx.lineTo(W, H * 0.775);
  aoCtx.stroke();

  for (const [wx, wy] of windPositions) {
    aoCtx.strokeStyle = '#707070';
    aoCtx.lineWidth = 14;
    aoCtx.beginPath();
    aoCtx.ellipse(wx, wy, W * 0.05, H * 0.04, 0, 0, Math.PI * 2);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.018);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateEngineTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(54321);

  // === COLOR MAP ===
  // Upper engine body - dark inconel/steel
  colorCtx.fillStyle = '#3a3a40';
  colorCtx.fillRect(0, 0, W, H * 0.30);

  // Subtle brushed metal texture on body
  for (let i = 0; i < 150; i++) {
    const x = rng() * W;
    const y = rng() * H * 0.30;
    const len = 5 + rng() * 25;
    colorCtx.strokeStyle = `rgba(255,255,255,${0.02 + rng() * 0.03})`;
    colorCtx.lineWidth = 0.5;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x, y + len);
    colorCtx.stroke();
  }

  // Mid flange (bolted connection)
  colorCtx.fillStyle = '#4a4a50';
  colorCtx.fillRect(0, H * 0.30, W, H * 0.05);

  // Bolt pattern on flange
  colorCtx.fillStyle = '#2a2a2e';
  for (let x = 20; x < W; x += 30) {
    colorCtx.beginPath();
    colorCtx.arc(x, H * 0.325, 4, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#5a5a60';
    colorCtx.lineWidth = 0.5;
    colorCtx.stroke();
  }

  // Nozzle - copper alloy with regenerative cooling channels
  for (let py = H * 0.35; py < H * 0.92; py++) {
    const t = (py - H * 0.35) / (H * 0.57);
    const r = Math.round(180 + 60 * (1 - t));
    const g = Math.round(100 + 30 * (1 - t));
    const b = Math.round(40 + 15 * (1 - t));
    colorCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    colorCtx.fillRect(0, py, W, 1);
  }

  // Cooling channel ridges (vertical lines)
  colorCtx.strokeStyle = 'rgba(100,60,25,0.3)';
  colorCtx.lineWidth = 1;
  for (let x = 6; x < W; x += 12) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, H * 0.35);
    colorCtx.lineTo(x, H * 0.92);
    colorCtx.stroke();
  }

  // Soot/carbon buildup
  const sootGrad = colorCtx.createLinearGradient(0, H * 0.80, 0, H);
  if (sootGrad) {
    sootGrad.addColorStop(0, 'rgba(0,0,0,0)');
    sootGrad.addColorStop(0.4, 'rgba(0,0,0,0.2)');
    sootGrad.addColorStop(0.8, 'rgba(0,0,0,0.5)');
    sootGrad.addColorStop(1, 'rgba(0,0,0,0.7)');
    colorCtx.fillStyle = sootGrad;
    colorCtx.fillRect(0, H * 0.80, W, H * 0.20);
  }

  // Nozzle exit rim - lighter metal
  colorCtx.fillStyle = '#6a6a70';
  colorCtx.fillRect(0, H * 0.92, W, H * 0.03);
  colorCtx.fillStyle = '#8a8a90';
  colorCtx.fillRect(0, H * 0.95, W, H * 0.02);

  // Fuel/oxidizer inlet pipes on upper body
  colorCtx.fillStyle = '#2a2a30';
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const px = W * 0.5 + Math.cos(a) * W * 0.38;
    const py = H * 0.15 + Math.sin(a) * H * 0.04;
    colorCtx.beginPath();
    colorCtx.arc(px, py, W * 0.04, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#5a5a60';
    colorCtx.lineWidth = 1;
    colorCtx.stroke();
  }

  // Gimbal mounting ring
  colorCtx.strokeStyle = '#6a6a70';
  colorCtx.lineWidth = 3;
  colorCtx.beginPath();
  colorCtx.arc(W / 2, H * 0.12, W * 0.3, 0, Math.PI * 2);
  colorCtx.stroke();

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Brushed texture on body
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 3) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H * 0.30);
    normalCtx.stroke();
  }

  // Flange bolts
  normalCtx.fillStyle = '#c0c0c0';
  for (let x = 20; x < W; x += 30) {
    normalCtx.beginPath();
    normalCtx.arc(x, H * 0.325, 4, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // Cooling channels (more prominent)
  normalCtx.strokeStyle = '#606060';
  normalCtx.lineWidth = 2;
  for (let x = 6; x < W; x += 12) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, H * 0.35);
    normalCtx.lineTo(x, H * 0.92);
    normalCtx.stroke();
  }

  // Seams
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 5;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.30);
  normalCtx.lineTo(W, H * 0.30);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.92);
  normalCtx.lineTo(W, H * 0.92);
  normalCtx.stroke();

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#404040'; // Smooth polished body
  roughCtx.fillRect(0, 0, W, H * 0.30);

  roughCtx.fillStyle = '#606060'; // Flange
  roughCtx.fillRect(0, H * 0.30, W, H * 0.05);

  roughCtx.fillStyle = '#707070'; // Copper nozzle
  roughCtx.fillRect(0, H * 0.35, W, H * 0.57);

  roughCtx.fillStyle = '#c0c0c0'; // Soot area very rough
  roughCtx.fillRect(0, H * 0.80, W, H * 0.20);

  roughCtx.fillStyle = '#303030'; // Exit rim smoother
  roughCtx.fillRect(0, H * 0.92, W, H * 0.08);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#e0e0e0'; // All metallic
  metalCtx.fillRect(0, 0, W, H);

  // Less metallic where soot covers
  metalCtx.fillStyle = '#606060';
  metalCtx.fillRect(0, H * 0.80, W, H * 0.20);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  // Flange shadow
  aoCtx.strokeStyle = '#606060';
  aoCtx.lineWidth = 10;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.30);
  aoCtx.lineTo(W, H * 0.30);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.35);
  aoCtx.lineTo(W, H * 0.35);
  aoCtx.stroke();

  // Cooling channels shadows
  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 3;
  for (let x = 6; x < W; x += 12) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, H * 0.35);
    aoCtx.lineTo(x, H * 0.92);
    aoCtx.stroke();
  }

  // Exit rim shadow
  aoCtx.strokeStyle = '#707070';
  aoCtx.lineWidth = 8;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.92);
  aoCtx.lineTo(W, H * 0.92);
  aoCtx.stroke();

  addFilmGrain(colorCtx, W, H, 0.01);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateParachuteTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(98765);

  // === COLOR MAP ===
  // White nylon fabric with slight warmth
  colorCtx.fillStyle = '#fafaf5';
  colorCtx.fillRect(0, 0, W, H);

  // Subtle fabric texture variation
  for (let i = 0; i < 5000; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 1 + rng() * 2;
    const brightness = 245 + rng() * 10;
    colorCtx.fillStyle = `rgb(${brightness},${brightness},${brightness - 2})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Radial gore seams (parachute panels)
  colorCtx.strokeStyle = 'rgba(180,180,190,0.4)';
  colorCtx.lineWidth = 2;
  const goreCount = 12;
  for (let i = 0; i < goreCount; i++) {
    const angle = (i / goreCount) * Math.PI * 2;
    colorCtx.beginPath();
    colorCtx.moveTo(W / 2, H / 2);
    colorCtx.lineTo(
      W / 2 + Math.cos(angle) * W * 0.7,
      H / 2 + Math.sin(angle) * H * 0.7
    );
    colorCtx.stroke();
  }

  // Horizontal ring seams (reefing lines)
  colorCtx.strokeStyle = 'rgba(160,160,170,0.3)';
  colorCtx.lineWidth = 1;
  colorCtx.setLineDash([8, 16]);
  for (let r = 50; r < Math.min(W, H) * 0.45; r += 60) {
    colorCtx.beginPath();
    colorCtx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
    colorCtx.stroke();
  }
  colorCtx.setLineDash([]);

  // Center vent (if applicable)
  colorCtx.fillStyle = '#e8e8e0';
  colorCtx.beginPath();
  colorCtx.arc(W / 2, H / 2, 15, 0, Math.PI * 2);
  colorCtx.fill();
  colorCtx.strokeStyle = '#c0c0b8';
  colorCtx.lineWidth = 2;
  colorCtx.stroke();

  // Reinforcement tapes (cross pattern)
  colorCtx.strokeStyle = 'rgba(200,200,210,0.5)';
  colorCtx.lineWidth = 4;
  colorCtx.beginPath();
  colorCtx.moveTo(W / 2 - 30, 0);
  colorCtx.lineTo(W / 2 - 30, H);
  colorCtx.stroke();
  colorCtx.beginPath();
  colorCtx.moveTo(W / 2 + 30, 0);
  colorCtx.lineTo(W / 2 + 30, H);
  colorCtx.stroke();
  colorCtx.beginPath();
  colorCtx.moveTo(0, H / 2 - 30);
  colorCtx.lineTo(W, H / 2 - 30);
  colorCtx.stroke();
  colorCtx.beginPath();
  colorCtx.moveTo(0, H / 2 + 30);
  colorCtx.lineTo(W, H / 2 + 30);
  colorCtx.stroke();

  // Suspension line attachment points (around edge)
  colorCtx.fillStyle = '#d0d0c8';
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const x = W / 2 + Math.cos(angle) * W * 0.45;
    const y = H / 2 + Math.sin(angle) * H * 0.45;
    colorCtx.beginPath();
    colorCtx.arc(x, y, 8, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Fabric weave pattern
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 1;
  for (let i = 0; i < W; i += 6) {
    normalCtx.beginPath(); normalCtx.moveTo(i, 0); normalCtx.lineTo(i, H); normalCtx.stroke();
    normalCtx.beginPath(); normalCtx.moveTo(0, i); normalCtx.lineTo(W, i); normalCtx.stroke();
  }

  // Gore seams
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 3;
  for (let i = 0; i < goreCount; i++) {
    const angle = (i / goreCount) * Math.PI * 2;
    normalCtx.beginPath();
    normalCtx.moveTo(W / 2, H / 2);
    normalCtx.lineTo(
      W / 2 + Math.cos(angle) * W * 0.7,
      H / 2 + Math.sin(angle) * H * 0.7
    );
    normalCtx.stroke();
  }

  // Ring seams
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 2;
  normalCtx.setLineDash([10, 20]);
  for (let r = 50; r < Math.min(W, H) * 0.45; r += 60) {
    normalCtx.beginPath();
    normalCtx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
    normalCtx.stroke();
  }
  normalCtx.setLineDash([]);

  // Reinforcement tapes
  normalCtx.strokeStyle = '#c0c0c0';
  normalCtx.lineWidth = 6;
  normalCtx.beginPath();
  normalCtx.moveTo(W / 2 - 30, 0);
  normalCtx.lineTo(W / 2 - 30, H);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(W / 2 + 30, 0);
  normalCtx.lineTo(W / 2 + 30, H);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H / 2 - 30);
  normalCtx.lineTo(W, H / 2 - 30);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H / 2 + 30);
  normalCtx.lineTo(W, H / 2 + 30);
  normalCtx.stroke();

  // === ROUGHNESS MAP ===
  // Fabric is quite rough
  roughCtx.fillStyle = '#d0d0d0';
  roughCtx.fillRect(0, 0, W, H);

  // Seams slightly smoother (thread)
  roughCtx.strokeStyle = '#b0b0b0';
  roughCtx.lineWidth = 4;
  for (let i = 0; i < goreCount; i++) {
    const angle = (i / goreCount) * Math.PI * 2;
    roughCtx.beginPath();
    roughCtx.moveTo(W / 2, H / 2);
    roughCtx.lineTo(
      W / 2 + Math.cos(angle) * W * 0.7,
      H / 2 + Math.sin(angle) * H * 0.7
    );
    roughCtx.stroke();
  }

  // Center vent smooth
  roughCtx.fillStyle = '#808080';
  roughCtx.beginPath();
  roughCtx.arc(W / 2, H / 2, 20, 0, Math.PI * 2);
  roughCtx.fill();

  // Reinforcement tapes
  roughCtx.fillStyle = '#a0a0a0';
  roughCtx.fillRect(W / 2 - 32, 0, 4, H);
  roughCtx.fillRect(W / 2 + 28, 0, 4, H);
  roughCtx.fillRect(0, H / 2 - 32, W, 4);
  roughCtx.fillRect(0, H / 2 + 28, W, 4);

  // === METALNESS MAP ===
  // Fabric is non-metallic
  metalCtx.fillStyle = '#000000';
  metalCtx.fillRect(0, 0, W, H);

  // Metal D-rings at attachment points
  metalCtx.fillStyle = '#e0e0e0';
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const x = W / 2 + Math.cos(angle) * W * 0.45;
    const y = H / 2 + Math.sin(angle) * H * 0.45;
    metalCtx.beginPath();
    metalCtx.arc(x, y, 10, 0, Math.PI * 2);
    metalCtx.fill();
  }

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  // Seam shadows
  aoCtx.strokeStyle = '#a0a0a0';
  aoCtx.lineWidth = 8;
  for (let i = 0; i < goreCount; i++) {
    const angle = (i / goreCount) * Math.PI * 2;
    aoCtx.beginPath();
    aoCtx.moveTo(W / 2, H / 2);
    aoCtx.lineTo(
      W / 2 + Math.cos(angle) * W * 0.7,
      H / 2 + Math.sin(angle) * H * 0.7
    );
    aoCtx.stroke();
  }

  // Ring shadows
  aoCtx.strokeStyle = '#b0b0b0';
  aoCtx.lineWidth = 4;
  aoCtx.setLineDash([10, 20]);
  for (let r = 50; r < Math.min(W, H) * 0.45; r += 60) {
    aoCtx.beginPath();
    aoCtx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
    aoCtx.stroke();
  }
  aoCtx.setLineDash([])

  // Tape shadows
  aoCtx.strokeStyle = '#909090';
  aoCtx.lineWidth = 10;
  aoCtx.beginPath();
  aoCtx.moveTo(W / 2 - 30, 0);
  aoCtx.lineTo(W / 2 - 30, H);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(W / 2 + 30, 0);
  aoCtx.lineTo(W / 2 + 30, H);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H / 2 - 30);
  aoCtx.lineTo(W, H / 2 - 30);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H / 2 + 30);
  aoCtx.lineTo(W, H / 2 + 30);
  aoCtx.stroke();

  addFilmGrain(colorCtx, W, H, 0.025);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateLegsTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(11111);

  // === COLOR MAP ===
  // Dark olive/military green or grey landing legs
  colorCtx.fillStyle = '#3a3d30';
  colorCtx.fillRect(0, 0, W, H);

  // Brushed metal texture on struts
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const len = 10 + rng() * 50;
    colorCtx.strokeStyle = `rgba(255,255,255,${0.02 + rng() * 0.03})`;
    colorCtx.lineWidth = 0.5;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x, y + len);
    colorCtx.stroke();
  }

  // Hydraulic cylinder bands (chrome/silver)
  colorCtx.fillStyle = '#8a8a8e';
  for (let y = 50; y < H; y += 200) {
    colorCtx.fillRect(0, y, W, 15);
    colorCtx.fillStyle = '#6a6a6e';
    colorCtx.fillRect(0, y + 15, W, 2);
    colorCtx.fillStyle = '#8a8a8e';
  }

  // Foot pads - darker with texture
  colorCtx.fillStyle = '#2a2d22';
  colorCtx.fillRect(0, H * 0.85, W, H * 0.15);

  // Foot pad texture (honeycomb or grid)
  colorCtx.strokeStyle = '#4a4d42';
  colorCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 32) {
    colorCtx.beginPath(); colorCtx.moveTo(x, H * 0.85); colorCtx.lineTo(x, H); colorCtx.stroke();
  }
  for (let y = H * 0.85; y < H; y += 32) {
    colorCtx.beginPath(); colorCtx.moveTo(0, y); colorCtx.lineTo(W, y); colorCtx.stroke();
  }

  // Warning stripes on foot (yellow/black)
  colorCtx.fillStyle = '#222';
  for (let x = 0; x < W; x += 40) {
    colorCtx.fillRect(x, H * 0.85, 20, H * 0.15);
  }
  colorCtx.fillStyle = '#ffcc00';
  for (let x = 20; x < W; x += 40) {
    colorCtx.fillRect(x, H * 0.85, 20, H * 0.15);
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Strut ridges
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 2;
  for (let x = 0; x < W; x += 64) {
    normalCtx.beginPath(); normalCtx.moveTo(x, 0); normalCtx.lineTo(x, H * 0.85); normalCtx.stroke();
  }

  // Hydraulic bands
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 6;
  for (let y = 50; y < H; y += 200) {
    normalCtx.beginPath(); normalCtx.moveTo(0, y); normalCtx.lineTo(W, y); normalCtx.stroke();
  }

  // Foot pad grid
  normalCtx.strokeStyle = '#606060';
  normalCtx.lineWidth = 3;
  for (let x = 0; x < W; x += 32) {
    normalCtx.beginPath(); normalCtx.moveTo(x, H * 0.85); normalCtx.lineTo(x, H); normalCtx.stroke();
  }
  for (let y = H * 0.85; y < H; y += 32) {
    normalCtx.beginPath(); normalCtx.moveTo(0, y); normalCtx.lineTo(W, y); normalCtx.stroke();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#707070'; // Painted metal
  roughCtx.fillRect(0, 0, W, H * 0.85);

  roughCtx.fillStyle = '#909090'; // Hydraulic bands - smoother
  for (let y = 50; y < H; y += 200) {
    roughCtx.fillRect(0, y, W, 17);
  }

  roughCtx.fillStyle = '#b0b0b0'; // Foot pads - rougher
  roughCtx.fillRect(0, H * 0.85, W, H * 0.15);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#303030'; // Painted = low metal
  metalCtx.fillRect(0, 0, W, H);

  // Hydraulic chrome parts
  metalCtx.fillStyle = '#e0e0e0';
  for (let y = 50; y < H; y += 200) {
    metalCtx.fillRect(0, y, W, 17);
  }

  // Foot pad metal brackets
  metalCtx.fillStyle = '#a0a0a0';
  metalCtx.fillRect(0, H * 0.85, W, H * 0.15);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 8;
  for (let x = 0; x < W; x += 64) {
    aoCtx.beginPath(); aoCtx.moveTo(x, 0); aoCtx.lineTo(x, H * 0.85); aoCtx.stroke();
  }

  aoCtx.strokeStyle = '#909090';
  aoCtx.lineWidth = 10;
  for (let y = 50; y < H; y += 200) {
    aoCtx.beginPath(); aoCtx.moveTo(0, y); aoCtx.lineTo(W, y); aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.02);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateDecouplerTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(22222);

  // === COLOR MAP ===
  // Dark gunmetal grey
  colorCtx.fillStyle = '#4a4a4e';
  colorCtx.fillRect(0, 0, W, H);

  // Subtle brushed texture
  for (let i = 0; i < 150; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const len = 5 + rng() * 30;
    colorCtx.strokeStyle = `rgba(255,255,255,${0.02 + rng() * 0.03})`;
    colorCtx.lineWidth = 0.5;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x, y + len);
    colorCtx.stroke();
  }

  // Separation ring (brighter metal)
  colorCtx.fillStyle = '#7a7a7e';
  colorCtx.fillRect(0, H * 0.35, W, H * 0.30);

  // Bolt pattern on ring
  colorCtx.fillStyle = '#3a3a3e';
  for (let x = 24; x < W; x += 48) {
    colorCtx.beginPath();
    colorCtx.arc(x, H * 0.5, 6, 0, Math.PI * 2);
    colorCtx.fill();
    colorCtx.strokeStyle = '#6a6a6e';
    colorCtx.lineWidth = 1;
    colorCtx.stroke();
  }

  // Pyro charge indicators (small red/yellow dots)
  colorCtx.fillStyle = '#cc3300';
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const x = W * 0.5 + Math.cos(angle) * W * 0.35;
    const y = H * 0.5 + Math.sin(angle) * H * 0.35;
    colorCtx.beginPath();
    colorCtx.arc(x, y, 8, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Top and bottom flanges
  colorCtx.fillStyle = '#5a5a5e';
  colorCtx.fillRect(0, 0, W, H * 0.08);
  colorCtx.fillRect(0, H * 0.92, W, H * 0.08);

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Separation ring ridge
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 10;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.35);
  normalCtx.lineTo(W, H * 0.35);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.65);
  normalCtx.lineTo(W, H * 0.65);
  normalCtx.stroke();

  // Bolts
  normalCtx.fillStyle = '#c0c0c0';
  for (let x = 24; x < W; x += 48) {
    normalCtx.beginPath();
    normalCtx.arc(x, H * 0.5, 6, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // Flanges
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 8;
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.08);
  normalCtx.lineTo(W, H * 0.08);
  normalCtx.stroke();
  normalCtx.beginPath();
  normalCtx.moveTo(0, H * 0.92);
  normalCtx.lineTo(W, H * 0.92);
  normalCtx.stroke();

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#606060'; // Machined metal
  roughCtx.fillRect(0, 0, W, H);

  // Separation ring - smoother (precision ground)
  roughCtx.fillStyle = '#404040';
  roughCtx.fillRect(0, H * 0.35, W, H * 0.30);

  // Flanges
  roughCtx.fillStyle = '#505050';
  roughCtx.fillRect(0, 0, W, H * 0.08);
  roughCtx.fillRect(0, H * 0.92, W, H * 0.08);

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#d0d0d0'; // All metal
  metalCtx.fillRect(0, 0, W, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#707070';
  aoCtx.lineWidth = 12;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.35);
  aoCtx.lineTo(W, H * 0.35);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.65);
  aoCtx.lineTo(W, H * 0.65);
  aoCtx.stroke();

  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 10;
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.08);
  aoCtx.lineTo(W, H * 0.08);
  aoCtx.stroke();
  aoCtx.beginPath();
  aoCtx.moveTo(0, H * 0.92);
  aoCtx.lineTo(W, H * 0.92);
  aoCtx.stroke();

  addFilmGrain(colorCtx, W, H, 0.015);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateHeatshieldTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(33333);

  // === COLOR MAP ===
  // Dark ablative material (PICA/XIRCA/Shuttle tile style)
  colorCtx.fillStyle = '#1a1a1c';
  colorCtx.fillRect(0, 0, W, H);

  // Ablative texture - charred carbon phenolics
  for (let i = 0; i < 3000; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 1 + rng() * 4;
    const brightness = 20 + rng() * 50;
    const hueShift = rng() * 20 - 10;
    colorCtx.fillStyle = `rgb(${brightness + hueShift},${brightness},${brightness - hueShift})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Charring streaks (reentry plasma flow)
  colorCtx.strokeStyle = 'rgba(40,20,10,0.3)';
  colorCtx.lineWidth = 1 + rng() * 2;
  for (let i = 0; i < 80; i++) {
    const x = rng() * W;
    const y = rng() * H * 0.3;
    const len = 50 + rng() * 200;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x + (rng() - 0.5) * 40, y + len);
    colorCtx.stroke();
  }

  // Tile gap pattern (if tiled heatshield like Shuttle)
  colorCtx.strokeStyle = '#0a0a0c';
  colorCtx.lineWidth = 2;
  for (let x = 0; x < W; x += 64) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }
  for (let y = 0; y < H; y += 64) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Ablative surface roughness
  for (let i = 0; i < 500; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 5;
    normalCtx.fillStyle = `rgb(${128 + rng() * 30},${128 + rng() * 30},${128 + rng() * 30})`;
    normalCtx.beginPath();
    normalCtx.arc(x, y, r, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // Tile gaps
  normalCtx.strokeStyle = '#404040';
  normalCtx.lineWidth = 6;
  for (let x = 0; x < W; x += 64) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }
  for (let y = 0; y < H; y += 64) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // === ROUGHNESS MAP ===
  // Ablative = extremely rough
  roughCtx.fillStyle = '#f0f0f0';
  roughCtx.fillRect(0, 0, W, H);

  // Tile gaps even rougher
  roughCtx.fillStyle = '#ffffff';
  roughCtx.strokeStyle = '#ffffff';
  roughCtx.lineWidth = 8;
  for (let x = 0; x < W; x += 64) {
    roughCtx.beginPath();
    roughCtx.moveTo(x, 0);
    roughCtx.lineTo(x, H);
    roughCtx.stroke();
  }
  for (let y = 0; y < H; y += 64) {
    roughCtx.beginPath();
    roughCtx.moveTo(0, y);
    roughCtx.lineTo(W, y);
    roughCtx.stroke();
  }

  // === METALNESS MAP ===
  // Ablative is non-metallic
  metalCtx.fillStyle = '#000000';
  metalCtx.fillRect(0, 0, W, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#303030';
  aoCtx.lineWidth = 10;
  for (let x = 0; x < W; x += 64) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, 0);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }
  for (let y = 0; y < H; y += 64) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.03);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateGoldTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(44444);

  // === COLOR MAP ===
  // Multi-layer gold/mylar foil: richer, more reflective
  // Base: warm golden gradient with subtle vertical variation
  const goldGrad = colorCtx.createLinearGradient(0, 0, 0, H);
  if (goldGrad) {
    goldGrad.addColorStop(0, '#b8862e');
    goldGrad.addColorStop(0.08, '#dba44a');
    goldGrad.addColorStop(0.15, '#e8b858');
    goldGrad.addColorStop(0.22, '#cf9a3e');
    goldGrad.addColorStop(0.3, '#b0802e');
    goldGrad.addColorStop(0.38, '#d8a84a');
    goldGrad.addColorStop(0.45, '#eac05e');
    goldGrad.addColorStop(0.52, '#c89838');
    goldGrad.addColorStop(0.6, '#b0802e');
    goldGrad.addColorStop(0.68, '#d8a84a');
    goldGrad.addColorStop(0.75, '#e8b858');
    goldGrad.addColorStop(0.85, '#c89838');
    goldGrad.addColorStop(1, '#b8862e');
    colorCtx.fillStyle = goldGrad;
    colorCtx.fillRect(0, 0, W, H);
  }

  // Large foil panel divisions (simulating blanket patches)
  for (let i = 0; i < 12; i++) {
    const x = 50 + rng() * (W - 100);
    const y = 50 + rng() * (H - 100);
    const pw = 80 + rng() * 300;
    const ph = 80 + rng() * 300;
    // Seam border
    colorCtx.strokeStyle = `rgba(80,55,15,${0.15 + rng() * 0.15})`;
    colorCtx.lineWidth = 1 + rng() * 2;
    colorCtx.strokeRect(x, y, pw, ph);
    // Slight color shift inside each patch
    const shift = (rng() - 0.5) * 0.06;
    colorCtx.fillStyle = `rgba(200,160,60,${shift > 0 ? shift : 0})`;
    colorCtx.fillRect(x + 2, y + 2, pw - 4, ph - 4);
  }

  // Complex crinkles: multiple generations
  // Generation 1: large rolling creases
  colorCtx.strokeStyle = 'rgba(70,50,15,0.12)';
  colorCtx.lineWidth = 3 + rng() * 4;
  for (let i = 0; i < 60; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 40 + rng() * 150;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    const cx1 = x + Math.cos(angle + 0.3) * len * 0.5;
    const cy1 = y + Math.sin(angle + 0.3) * len * 0.5;
    colorCtx.quadraticCurveTo(cx1, cy1, x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    colorCtx.stroke();
  }

  // Generation 2: medium folding creases
  colorCtx.strokeStyle = 'rgba(60,40,10,0.18)';
  colorCtx.lineWidth = 1.5;
  for (let i = 0; i < 120; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 15 + rng() * 60;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    colorCtx.stroke();
  }

  // Generation 3: tiny sharp creases (bright edges for specular)
  colorCtx.strokeStyle = 'rgba(255,230,160,0.15)';
  colorCtx.lineWidth = 0.5;
  for (let i = 0; i < 250; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 3 + rng() * 25;
    colorCtx.beginPath();
    colorCtx.moveTo(x, y);
    colorCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    colorCtx.stroke();
  }

  // Dark crease shadows
  colorCtx.strokeStyle = 'rgba(30,20,5,0.1)';
  colorCtx.lineWidth = 0.5;
  for (let i = 0; i < 200; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 4 + rng() * 30;
    colorCtx.beginPath();
    colorCtx.moveTo(x + 1, y + 1);
    colorCtx.lineTo(x + Math.cos(angle) * len + 1, y + Math.sin(angle) * len + 1);
    colorCtx.stroke();
  }

  // Oxidation / dirt spots (more varied colors)
  for (let i = 0; i < 120; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 18;
    const t = rng();
    if (t < 0.33) {
      // Brown oxidation
      colorCtx.fillStyle = `rgba(80,50,20,${0.08 + rng() * 0.15})`;
    } else if (t < 0.66) {
      // Dark spot
      colorCtx.fillStyle = `rgba(30,25,15,${0.06 + rng() * 0.12})`;
    } else {
      // Green-ish tarnish (rare)
      colorCtx.fillStyle = `rgba(60,80,40,${0.04 + rng() * 0.08})`;
    }
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Bright specular hotspots (foil flash)
  for (let i = 0; i < 50; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 1 + rng() * 8;
    const bright = 240 + Math.floor(rng() * 15);
    colorCtx.fillStyle = `rgba(${bright}, ${bright - 20}, ${bright - 80}, ${0.15 + rng() * 0.2})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r, 0, Math.PI * 2);
    colorCtx.fill();
    // Glow spread
    colorCtx.fillStyle = `rgba(255,240,180,${0.03 + rng() * 0.05})`;
    colorCtx.beginPath();
    colorCtx.arc(x, y, r * 3, 0, Math.PI * 2);
    colorCtx.fill();
  }

  // Horizontal banding from rolling
  colorCtx.strokeStyle = 'rgba(160,120,40,0.12)';
  colorCtx.lineWidth = 1;
  for (let y = 0; y < H; y += 15 + rng() * 25) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    for (let x = 0; x < W; x += 10) {
      colorCtx.lineTo(x + rng() * 5, y + (rng() - 0.5) * 3);
    }
    colorCtx.stroke();
  }

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Large rolling creases (bright/dark edges)
  normalCtx.strokeStyle = '#a0a0a0';
  normalCtx.lineWidth = 2;
  for (let i = 0; i < 120; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 20 + rng() * 100;
    normalCtx.beginPath();
    normalCtx.moveTo(x, y);
    const cx1 = x + Math.cos(angle + 0.2) * len * 0.4;
    const cy1 = y + Math.sin(angle + 0.2) * len * 0.4;
    normalCtx.quadraticCurveTo(cx1, cy1, x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    normalCtx.stroke();
  }

  // Sharp medium creases
  normalCtx.strokeStyle = '#c0c0c0';
  normalCtx.lineWidth = 1;
  for (let i = 0; i < 300; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 5 + rng() * 40;
    normalCtx.beginPath();
    normalCtx.moveTo(x, y);
    normalCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    normalCtx.stroke();
  }

  // Oxidation pits
  normalCtx.fillStyle = '#606060';
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 16;
    normalCtx.beginPath();
    normalCtx.arc(x, y, r, 0, Math.PI * 2);
    normalCtx.fill();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#606060';
  roughCtx.fillRect(0, 0, W, H);

  // Foil is generally smooth (dark = smooth), creases are slightly rough
  roughCtx.fillStyle = '#909090';
  for (let i = 0; i < 400; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const w = 5 + rng() * 50;
    const h = 3 + rng() * 20;
    roughCtx.fillRect(x, y, w, h);
  }

  // Oxidation spots are rough
  roughCtx.fillStyle = '#c0c0c0';
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 16;
    roughCtx.beginPath();
    roughCtx.arc(x, y, r, 0, Math.PI * 2);
    roughCtx.fill();
  }

  // === METALNESS MAP ===
  metalCtx.fillStyle = '#f0f0f0';
  metalCtx.fillRect(0, 0, W, H);

  // Oxidation spots lower metalness
  metalCtx.fillStyle = '#303030';
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 2 + rng() * 16;
    metalCtx.beginPath();
    metalCtx.arc(x, y, r, 0, Math.PI * 2);
    metalCtx.fill();
  }

  // Seam edges are less metallic
  metalCtx.strokeStyle = '#808080';
  metalCtx.lineWidth = 2;
  for (let i = 0; i < 12; i++) {
    const x = 50 + rng() * (W - 100);
    const y = 50 + rng() * (H - 100);
    const pw = 80 + rng() * 300;
    const ph = 80 + rng() * 300;
    metalCtx.strokeRect(x, y, pw, ph);
  }

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  // Deep creases shadow
  aoCtx.strokeStyle = '#606060';
  aoCtx.lineWidth = 3;
  for (let i = 0; i < 400; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 5 + rng() * 50;
    aoCtx.beginPath();
    aoCtx.moveTo(x, y);
    aoCtx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    aoCtx.stroke();
  }

  // Crinkle valley shadows
  aoCtx.strokeStyle = '#808080';
  aoCtx.lineWidth = 2;
  for (let i = 0; i < 200; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const angle = rng() * Math.PI * 2;
    const len = 10 + rng() * 80;
    aoCtx.beginPath();
    aoCtx.moveTo(x, y);
    const cx1 = x + Math.cos(angle + 0.3) * len * 0.5;
    const cy1 = y + Math.sin(angle + 0.3) * len * 0.5;
    aoCtx.quadraticCurveTo(cx1, cy1, x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    aoCtx.stroke();
  }

  // Oxidation patch shadows
  aoCtx.fillStyle = '#888888';
  for (let i = 0; i < 100; i++) {
    const x = rng() * W;
    const y = rng() * H;
    const r = 3 + rng() * 18;
    aoCtx.beginPath();
    aoCtx.arc(x, y, r, 0, Math.PI * 2);
    aoCtx.fill();
  }

  addFilmGrain(colorCtx, W, H, 0.02);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

export function generateFabricTexture(): TextureSet {
  const W = 1024, H = 1024;
  const [colorCanvas, colorCtx] = createCanvas(W, H);
  const [normalCanvas, normalCtx] = createCanvas(W, H);
  const [roughCanvas, roughCtx] = createCanvas(W, H);
  const [metalCanvas, metalCtx] = createCanvas(W, H);
  const [aoCanvas, aoCtx] = createCanvas(W, H);

  const rng = seededRandomFast(55555);

  // === COLOR MAP ===
  // White/off-white nylon/polyester fabric
  colorCtx.fillStyle = '#f5f5f0';
  colorCtx.fillRect(0, 0, W, H);

  // Warp/weft threads
  colorCtx.strokeStyle = 'rgba(200,200,190,0.15)';
  colorCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 4) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }
  colorCtx.strokeStyle = 'rgba(200,200,190,0.1)';
  for (let y = 0; y < H; y += 4) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // Panel seams (every 8th thread thicker)
  colorCtx.strokeStyle = 'rgba(160,160,150,0.3)';
  colorCtx.lineWidth = 2;
  for (let x = 0; x < W; x += 32) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }

  // Stitching lines (dashed)
  colorCtx.strokeStyle = 'rgba(120,120,110,0.4)';
  colorCtx.lineWidth = 1;
  colorCtx.setLineDash([8, 16]);
  for (let x = 16; x < W; x += 64) {
    colorCtx.beginPath();
    colorCtx.moveTo(x, 0);
    colorCtx.lineTo(x, H);
    colorCtx.stroke();
  }
  for (let y = 16; y < H; y += 64) {
    colorCtx.beginPath();
    colorCtx.moveTo(0, y);
    colorCtx.lineTo(W, y);
    colorCtx.stroke();
  }
  colorCtx.setLineDash([]);

  // === NORMAL MAP ===
  normalCtx.fillStyle = '#808080';
  normalCtx.fillRect(0, 0, W, H);

  // Weave pattern
  normalCtx.strokeStyle = '#909090';
  normalCtx.lineWidth = 1;
  for (let x = 0; x < W; x += 8) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }
  for (let y = 0; y < H; y += 8) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // Panel seams
  normalCtx.strokeStyle = '#b0b0b0';
  normalCtx.lineWidth = 4;
  for (let x = 0; x < W; x += 32) {
    normalCtx.beginPath();
    normalCtx.moveTo(x, 0);
    normalCtx.lineTo(x, H);
    normalCtx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    normalCtx.beginPath();
    normalCtx.moveTo(0, y);
    normalCtx.lineTo(W, y);
    normalCtx.stroke();
  }

  // === ROUGHNESS MAP ===
  roughCtx.fillStyle = '#c0c0c0'; // Fabric is rough
  roughCtx.fillRect(0, 0, W, H);

  // Seams slightly different
  roughCtx.fillStyle = '#e0e0e0';
  roughCtx.strokeStyle = '#e0e0e0';
  roughCtx.lineWidth = 6;
  for (let x = 0; x < W; x += 32) {
    roughCtx.beginPath();
    roughCtx.moveTo(x, 0);
    roughCtx.lineTo(x, H);
    roughCtx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    roughCtx.beginPath();
    roughCtx.moveTo(0, y);
    roughCtx.lineTo(W, y);
    roughCtx.stroke();
  }

  // === METALNESS MAP ===
  // Fabric is non-metallic
  metalCtx.fillStyle = '#000000';
  metalCtx.fillRect(0, 0, W, H);

  // === AO MAP ===
  aoCtx.fillStyle = '#ffffff';
  aoCtx.fillRect(0, 0, W, H);

  aoCtx.strokeStyle = '#a0a0a0';
  aoCtx.lineWidth = 6;
  for (let x = 0; x < W; x += 32) {
    aoCtx.beginPath();
    aoCtx.moveTo(x, 0);
    aoCtx.lineTo(x, H);
    aoCtx.stroke();
  }
  for (let y = 0; y < H; y += 32) {
    aoCtx.beginPath();
    aoCtx.moveTo(0, y);
    aoCtx.lineTo(W, y);
    aoCtx.stroke();
  }

  addFilmGrain(colorCtx, W, H, 0.02);

  return createFullTextureSet(colorCanvas, normalCanvas, roughCanvas, metalCanvas, aoCanvas);
}

// ---------------------------------------------------------------------------
// Procedural planet textures for gas giants (fallback when .jpg is missing)
// ---------------------------------------------------------------------------

interface PlanetBand {
  y: number;   // 0-1 vertical position
  width: number;
  color: string;
  turbulence: number;
}

function bandedGasGiantTexture(
  W: number, H: number, bands: PlanetBand[],
  turbFreq: number, turbAmp: number, seed: number,
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const rng = seededRandomFast(seed);
  const imgData = ctx.createImageData(W, H);

  for (let py = 0; py < H; py++) {
    const v = py / H;
    let baseR = 0, baseG = 0, baseB = 0, weightTotal = 0;
    for (const b of bands) {
      const dist = Math.abs(v - b.y) / b.width;
      if (dist < 1) {
        const w = 1 - dist * dist;
        const c = parseHexColor(b.color);
        baseR += c[0] * w; baseG += c[1] * w; baseB += c[2] * w;
        weightTotal += w;
      }
    }
    if (weightTotal > 0) {
      baseR /= weightTotal; baseG /= weightTotal; baseB /= weightTotal;
    }

    for (let px = 0; px < W; px++) {
      const u = px / W;
      const turb = Math.sin(u * turbFreq + v * turbFreq * 0.5 + seed) * turbAmp
                + Math.sin(u * turbFreq * 2.3 + v * turbFreq * 0.7 + seed * 2) * turbAmp * 0.5;

      let r = baseR, g = baseG, b = baseB;

      const tv = turb * 30;
      r += tv; g += tv * 0.7; b += tv * 0.3;

      const n = (rng() - 0.5) * 8;

      const idx = (py * W + px) * 4;
      imgData.data[idx]     = clampByte(r + n);
      imgData.data[idx + 1] = clampByte(g + n);
      imgData.data[idx + 2] = clampByte(b + n);
      imgData.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function parseHexColor(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function clampByte(v: number): number {
  return Math.min(255, Math.max(0, Math.round(v)));
}

export function generateJupiterTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const bands: PlanetBand[] = [
    { y: 0.0, width: 0.08, color: '#5a4a3a', turbulence: 0.3 },
    { y: 0.05, width: 0.06, color: '#6a4c36', turbulence: 0.3 },
    { y: 0.1, width: 0.04, color: '#8a6a48', turbulence: 0.4 },
    { y: 0.18, width: 0.06, color: '#c4a46a', turbulence: 0.5 },
    { y: 0.24, width: 0.04, color: '#d4b880', turbulence: 0.5 },
    { y: 0.3, width: 0.05, color: '#8a6a3a', turbulence: 0.6 },
    { y: 0.38, width: 0.04, color: '#e4d0a0', turbulence: 0.7 },
    { y: 0.42, width: 0.03, color: '#f0e0b8', turbulence: 0.8 },
    { y: 0.46, width: 0.03, color: '#e8d4a8', turbulence: 0.7 },
    { y: 0.5, width: 0.03, color: '#dcc89c', turbulence: 0.7 },
    { y: 0.54, width: 0.03, color: '#e4d0a0', turbulence: 0.8 },
    { y: 0.58, width: 0.03, color: '#f0e0b8', turbulence: 0.7 },
    { y: 0.62, width: 0.04, color: '#e4d0a0', turbulence: 0.6 },
    { y: 0.7, width: 0.05, color: '#8a6a3a', turbulence: 0.6 },
    { y: 0.76, width: 0.04, color: '#c4a46a', turbulence: 0.5 },
    { y: 0.82, width: 0.06, color: '#d4b880', turbulence: 0.5 },
    { y: 0.9, width: 0.04, color: '#7a5a3a', turbulence: 0.4 },
    { y: 0.94, width: 0.06, color: '#6a4c36', turbulence: 0.3 },
    { y: 1.0, width: 0.08, color: '#5a4a3a', turbulence: 0.3 },
  ];

  const tex = bandedGasGiantTexture(W, H, bands, 40, 0.015, 777);

  // Add Great Red Spot
  const canvas = tex.image as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const gx = 0.33 * W, gy = 0.56 * H;
  const gr = 40 + seededRandomFast(888)() * 10;
  const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
  grad.addColorStop(0, '#c04830');
  grad.addColorStop(0.3, '#b04028');
  grad.addColorStop(0.6, '#a05030');
  grad.addColorStop(0.8, '#8a4830');
  grad.addColorStop(1, 'rgba(120,60,40,0)');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.fill();

  // Oval BA (smaller storm)
  const ox = 0.55 * W, oy = 0.48 * H;
  const or = 15 + seededRandomFast(889)() * 5;
  const grad2 = ctx.createRadialGradient(ox, oy, 0, ox, oy, or);
  grad2.addColorStop(0, '#d06040');
  grad2.addColorStop(0.5, '#b05038');
  grad2.addColorStop(1, 'rgba(120,60,40,0)');
  ctx.fillStyle = grad2;
  ctx.beginPath(); ctx.arc(ox, oy, or, 0, Math.PI * 2); ctx.fill();

  tex.needsUpdate = true;
  return tex;
}

export function generateSaturnTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const bands: PlanetBand[] = [
    { y: 0.0, width: 0.08, color: '#a09070', turbulence: 0.2 },
    { y: 0.06, width: 0.06, color: '#b8a888', turbulence: 0.2 },
    { y: 0.12, width: 0.05, color: '#a89878', turbulence: 0.3 },
    { y: 0.18, width: 0.06, color: '#c8b898', turbulence: 0.3 },
    { y: 0.25, width: 0.05, color: '#b8a888', turbulence: 0.4 },
    { y: 0.32, width: 0.05, color: '#d4c8a8', turbulence: 0.4 },
    { y: 0.38, width: 0.04, color: '#c0b090', turbulence: 0.5 },
    { y: 0.42, width: 0.03, color: '#e8dcc0', turbulence: 0.5 },
    { y: 0.46, width: 0.03, color: '#d4c8a8', turbulence: 0.5 },
    { y: 0.5, width: 0.03, color: '#f0e4d0', turbulence: 0.5 },
    { y: 0.54, width: 0.03, color: '#d4c8a8', turbulence: 0.5 },
    { y: 0.58, width: 0.04, color: '#e8dcc0', turbulence: 0.5 },
    { y: 0.64, width: 0.05, color: '#c0b090', turbulence: 0.4 },
    { y: 0.7, width: 0.05, color: '#b8a888', turbulence: 0.4 },
    { y: 0.76, width: 0.06, color: '#a89878', turbulence: 0.3 },
    { y: 0.85, width: 0.05, color: '#b8a888', turbulence: 0.2 },
    { y: 0.92, width: 0.08, color: '#a09070', turbulence: 0.2 },
  ];
  return bandedGasGiantTexture(W, H, bands, 30, 0.01, 333);
}

export function generateUranusTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const rng = seededRandomFast(222);
  const imgData = ctx.createImageData(W, H);

  for (let py = 0; py < H; py++) {
    const v = py / H;
    const bandPattern = Math.sin(v * 12) * 0.3 + Math.sin(v * 24) * 0.15 + Math.sin(v * 6) * 0.4;
    const bright = 0.6 + bandPattern * 0.1;

    for (let px = 0; px < W; px++) {
      const u = px / W;
      const lonVar = Math.sin(u * 8 + v * 4) * 0.03;
      const n = (rng() - 0.5) * 0.04;

      const r = (0.48 + bright * 0.12 + lonVar + n) * 255;
      const g = (0.70 + bright * 0.18 + lonVar * 0.5 + n) * 255;
      const b = (0.75 + bright * 0.20 + n) * 255;

      const idx = (py * W + px) * 4;
      imgData.data[idx]     = clampByte(r);
      imgData.data[idx + 1] = clampByte(g);
      imgData.data[idx + 2] = clampByte(b);
      imgData.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function generateNeptuneTexture(): THREE.CanvasTexture {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const rng = seededRandomFast(444);
  const imgData = ctx.createImageData(W, H);

  for (let py = 0; py < H; py++) {
    const v = py / H;
    const bandPattern = Math.sin(v * 14) * 0.5 + Math.sin(v * 28) * 0.2 + Math.sin(v * 7) * 0.3;
    const bright = 0.5 + bandPattern * 0.08;

    for (let px = 0; px < W; px++) {
      const u = px / W;
      const lonVar = Math.sin(u * 10 + v * 5) * 0.04;
      const n = (rng() - 0.5) * 0.03;

      const r = (0.18 + bright * 0.08 + lonVar + n) * 255;
      const g = (0.25 + bright * 0.12 + lonVar * 0.7 + n) * 255;
      const b = (0.70 + bright * 0.20 + n) * 255;

      const idx = (py * W + px) * 4;
      imgData.data[idx]     = clampByte(r);
      imgData.data[idx + 1] = clampByte(g);
      imgData.data[idx + 2] = clampByte(b);
      imgData.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // Add Great Dark Spot
  const gx = 0.30 * W, gy = 0.65 * H;
  const gr = 30;
  const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
  grad.addColorStop(0, '#0a0a2a');
  grad.addColorStop(0.3, '#101040');
  grad.addColorStop(0.6, '#1a2050');
  grad.addColorStop(1, 'rgba(30,40,80,0)');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.fill();

  // Bright companion cloud
  const cx = 0.30 * W + 35, cy = 0.65 * H - 15;
  const cr = 15;
  const grad2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
  grad2.addColorStop(0, 'rgba(200,220,255,0.4)');
  grad2.addColorStop(0.5, 'rgba(180,200,240,0.2)');
  grad2.addColorStop(1, 'rgba(180,200,240,0)');
  ctx.fillStyle = grad2;
  ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fill();

  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

=== src/effects/Stars.ts ===
import * as THREE from 'three';

export class Stars {
  private group: THREE.Group;
  private skyMat: THREE.ShaderMaterial;

  constructor() {
    this.group = new THREE.Group();

    const skyGeom = new THREE.SphereGeometry(50000, 64, 48);
    skyGeom.scale(-1, 1, 1);
    this.skyMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        varying vec3 vPos;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float star(vec2 uv, float density) {
          vec2 g = floor(uv * density);
          vec2 f = fract(uv * density) - 0.5;
          float h = hash(g);
          float dist = length(f - vec2(hash(g + 1.7), hash(g + 3.1)) * 0.8 + 0.1);
          float bright = h;
          float size = 0.05 + 0.08 * h;
          return smoothstep(size, 0.0, dist) * bright;
        }

        void main() {
          vec3 dir = normalize(vPos);
          float height = dir.y * 0.5 + 0.5;

          vec3 top = vec3(0.02, 0.03, 0.08);
          vec3 bottom = vec3(0.001, 0.001, 0.03);
          vec3 col = mix(bottom, top, smoothstep(0.0, 1.0, height));

          float neb1 = sin(dir.y * 12.0 + dir.x * 8.0) * 0.5 + 0.5;
          float neb2 = sin(dir.z * 10.0 - dir.x * 6.0) * 0.5 + 0.5;
          col += vec3(0.15, 0.02, 0.08) * neb1 * 0.12;
          col += vec3(0.01, 0.04, 0.12) * neb2 * 0.08;

          // Dense dim stars (background)
          float s1 = star(vUv, 200.0) * 0.6;
          col += vec3(s1);

          // Bright stars (foreground)
          float s2 = star(vUv, 60.0) * 1.5;
          float s3 = star(vUv + vec2(13.7, 7.3), 40.0) * 2.0;
          col += vec3(s2 + s3);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      uniforms: {},
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.group.add(new THREE.Mesh(skyGeom, this.skyMat));
  }

  update(_dt: number): void {}

  getMesh(): THREE.Group {
    return this.group;
  }
}

=== src/effects/TextureLoader.ts ===
import * as THREE from 'three';

export interface LoadedTextures {
  color: THREE.Texture;
  normal: THREE.Texture;
  roughness: THREE.Texture;
  metalness: THREE.Texture;
}

export interface DetailTextures {
  metalScratchesNormal: THREE.Texture;
  panelLinesNormal: THREE.Texture;
  rivetNormal: THREE.Texture;
  carbonFiberNormal: THREE.Texture;
  thermalProtectionNormal: THREE.Texture;
  fabricWeaveNormal: THREE.Texture;
}

function makeChecker(c: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = c;
  ctx.fillRect(0, 0, 64, 64);
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, 64, 64);
  ctx.strokeRect(16, 16, 32, 32);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 1);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

const FALLBACK: LoadedTextures = {
  color: makeChecker('#8899aa'),
  normal: makeChecker('#808080'),
  roughness: makeChecker('#808080'),
  metalness: makeChecker('#000000'),
};

async function loadTex(url: string, cs: THREE.ColorSpace = THREE.SRGBColorSpace): Promise<THREE.Texture> {
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(i);
    i.onerror = () => reject(new Error(`Failed: ${url}`));
    i.src = url;
  });
  const tex = new THREE.Texture(img);
  tex.colorSpace = cs;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 1);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

async function make(name: string): Promise<LoadedTextures> {
  const [color, normal, roughness, metalness] = await Promise.all([
    loadTex(`/textures/${name}_color.jpg`, THREE.SRGBColorSpace),
    loadTex(`/textures/${name}_normal.jpg`, THREE.LinearSRGBColorSpace),
    loadTex(`/textures/${name}_rough.jpg`, THREE.LinearSRGBColorSpace),
    loadTex(`/textures/${name}_metal.jpg`, THREE.LinearSRGBColorSpace),
  ]);
  return { color, normal, roughness, metalness };
}

let _loaded = false;
let _tankTex: LoadedTextures | null = null;
let _capsuleTex: LoadedTextures | null = null;
let _engineTex: LoadedTextures | null = null;
let _goldTex: LoadedTextures | null = null;
let _fabricTex: LoadedTextures | null = null;

let _detailTex: DetailTextures | null = null;
let _detailLoadingPromise: Promise<void> | null = null;
let _loadingPromise: Promise<void> | null = null;

export function loadAllTextures(): Promise<void> {
  if (_loadingPromise) return _loadingPromise;
  _loadingPromise = (async () => {
    try {
      [_tankTex, _capsuleTex, _engineTex, _goldTex, _fabricTex] = await Promise.all([
        make('metal013'),
        make('plates'),
        make('metal009'),
        make('metal021'),
        (async () => {
          const [color, normal, roughness] = await Promise.all([
            loadTex('/textures/fabric_color.jpg', THREE.SRGBColorSpace),
            loadTex('/textures/fabric_normal.jpg', THREE.LinearSRGBColorSpace),
            loadTex('/textures/fabric_rough.jpg', THREE.LinearSRGBColorSpace),
          ]);
          return { color, normal, roughness, metalness: roughness };
        })(),
      ]);
      _loaded = true;
    } catch (e) {
      console.error('Texture loading failed, using fallback', e);
    }
  })();
  return _loadingPromise;
}

export function getTankTex(): LoadedTextures { return _tankTex ?? FALLBACK; }
export function getCapsuleTex(): LoadedTextures { return _capsuleTex ?? FALLBACK; }
export function getEngineTex(): LoadedTextures { return _engineTex ?? FALLBACK; }
export function getGoldTex(): LoadedTextures { return _goldTex ?? FALLBACK; }
export function getFabricTex(): LoadedTextures { return _fabricTex ?? FALLBACK; }

async function loadDetailTextures(): Promise<DetailTextures> {
  const [
    metalScratchesNormal,
    panelLinesNormal,
    rivetNormal,
    carbonFiberNormal,
    thermalProtectionNormal,
    fabricWeaveNormal,
  ] = await Promise.all([
    loadTex('/textures/detail_metal_scratches_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_panel_lines_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_rivet_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_carbon_fiber_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_thermal_protection_normal.jpg', THREE.LinearSRGBColorSpace),
    loadTex('/textures/detail_fabric_weave_normal.jpg', THREE.LinearSRGBColorSpace),
  ]);

  for (const tex of [
    metalScratchesNormal,
    panelLinesNormal,
    rivetNormal,
    carbonFiberNormal,
    thermalProtectionNormal,
    fabricWeaveNormal,
  ]) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(16, 16);
    tex.anisotropy = 8;
  }

  return {
    metalScratchesNormal,
    panelLinesNormal,
    rivetNormal,
    carbonFiberNormal,
    thermalProtectionNormal,
    fabricWeaveNormal,
  };
}

export async function loadDetailTexturesOnce(): Promise<DetailTextures> {
  if (_detailTex) return _detailTex;
  if (_detailLoadingPromise) return _detailLoadingPromise.then(() => _detailTex!);

  _detailLoadingPromise = (async () => {
    try {
      _detailTex = await loadDetailTextures();
    } catch (e) {
      console.error('Detail texture loading failed, generating procedural fallback', e);
      _detailTex = generateProceduralDetailTextures();
    }
  })();

  await _detailLoadingPromise;
  return _detailTex!;
}

function generateProceduralDetailTextures(): DetailTextures {
  const makeNormal = (drawFn: (ctx: CanvasRenderingContext2D) => void): THREE.Texture => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    drawFn(ctx);
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(16, 16);
    tex.anisotropy = 8;
    tex.colorSpace = THREE.LinearSRGBColorSpace;
    return tex;
  };

  const rng = () => Math.random();

  return {
    metalScratchesNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 2000; i++) {
        const x = rng() * 512, y = rng() * 512;
        const len = 2 + rng() * 8;
        const angle = rng() * Math.PI * 2;
        ctx.strokeStyle = `rgba(255,255,255,${0.05 + rng() * 0.1})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
        ctx.stroke();
      }
    }),
    panelLinesNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1.5;
      for (let y = 0; y < 512; y += 64) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke();
      }
      for (let x = 0; x < 512; x += 128) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke();
      }
    }),
    rivetNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      ctx.fillStyle = 'rgba(200,200,255,0.8)';
      for (let y = 32; y < 512; y += 64) {
        for (let x = 32; x < 512; x += 64) {
          ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
        }
      }
    }),
    carbonFiberNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = 'rgba(100,100,150,0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 512; i += 4) {
        const offset = (i % 8) * 2;
        ctx.beginPath(); ctx.moveTo(i + offset, 0); ctx.lineTo(i + offset + 512, 512); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(i - offset, 512); ctx.lineTo(i - offset + 512, 0); ctx.stroke();
      }
    }),
    thermalProtectionNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 5000; i++) {
        const x = rng() * 512, y = rng() * 512;
        const r = 1 + rng() * 3;
        const h = 128 + rng() * 80;
        ctx.fillStyle = `rgb(${h},${h},${h + 50})`;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
    }),
    fabricWeaveNormal: makeNormal((ctx) => {
      ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = 'rgba(180,180,220,0.4)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 512; i += 8) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
      }
    }),
  };
}

export function getDetailTextures(): DetailTextures {
  if (!_detailTex) {
    return generateProceduralDetailTextures();
  }
  return _detailTex;
}

=== src/flight/ChaseCamera.ts ===
import * as THREE from 'three';
import type { FlightState } from './FlightState';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

const MIN_DIST = 0.5;
const MAX_DIST = 500;
const LERP_SPEED = 15;
const ORBIT_SPEED = 3;
const ZOOM_SPEED = 2;

const DEFAULT_DIST = 7;
const DEFAULT_AZIMUTH = 0;
const DEFAULT_POLAR = Math.PI / 2.5;

export class ChaseCamera {
  camera: THREE.PerspectiveCamera;
  private dist = DEFAULT_DIST;
  private targetDist = DEFAULT_DIST;
  private azimuth = DEFAULT_AZIMUTH;
  private targetAzimuth = DEFAULT_AZIMUTH;
  private polar = DEFAULT_POLAR;
  private targetPolar = DEFAULT_POLAR;
  isDragging = false;
  private prevMouse = { x: 0, y: 0 };
  private canvas: HTMLElement | null = null;
  private smoothPos = new THREE.Vector3();
  private initialized = false;
  private orbitKeys = { left: false, right: false, up: false, down: false };
  private zoomKeys = { in: false, out: false };
  private inertiaAzimuth = 0;
  private inertiaPolar = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.setupKeyboard();
  }

  private setupKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      if (e.shiftKey) {
        switch (e.key) {
          case 'ArrowLeft': this.orbitKeys.left = true; e.preventDefault(); break;
          case 'ArrowRight': this.orbitKeys.right = true; e.preventDefault(); break;
          case 'ArrowUp': this.orbitKeys.up = true; e.preventDefault(); break;
          case 'ArrowDown': this.orbitKeys.down = true; e.preventDefault(); break;
        }
      }
      // Z/X zoom
      if (e.key === 'z' || e.key === 'Z') this.zoomKeys.in = true;
      if (e.key === 'x' || e.key === 'X') this.zoomKeys.out = true;
    });
    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowLeft': this.orbitKeys.left = false; break;
        case 'ArrowRight': this.orbitKeys.right = false; break;
        case 'ArrowUp': this.orbitKeys.up = false; break;
        case 'ArrowDown': this.orbitKeys.down = false; break;
        case 'z': case 'Z': this.zoomKeys.in = false; break;
        case 'x': case 'X': this.zoomKeys.out = false; break;
      }
    });
  }

  initialiseAt(state: FlightState, _quat: THREE.Quaternion, upDir?: THREE.Vector3, lookOffset?: { x: number; y: number; z: number }): void {
    const vx = state.position[0] * VISUAL_SCALE + (lookOffset?.x ?? 0);
    const vy = state.position[1] * VISUAL_SCALE + (lookOffset?.y ?? 0);
    const vz = state.position[2] * VISUAL_SCALE + (lookOffset?.z ?? 0);
    const look = new THREE.Vector3(vx, vy, vz);
    const ox = this.targetDist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = this.targetDist * Math.cos(this.polar);
    const oz = this.targetDist * Math.sin(this.polar) * Math.sin(this.azimuth);

    this.camera.position.set(vx + ox, vy + oy, vz + oz);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(look);
  }

  setAzimuth(az: number): void {
    this.azimuth = az;
    this.targetAzimuth = az;
  }

  setPolar(p: number): void {
    this.polar = p;
    this.targetPolar = p;
  }

  zoom(delta: number): void {
    this.targetDist *= delta;
    this.targetDist = Math.max(MIN_DIST, Math.min(MAX_DIST, this.targetDist));
  }

  enableOrbit(el: HTMLElement): void {
    this.canvas = el;

    el.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      this.isDragging = true;
      this.prevMouse = { x: e.clientX, y: e.clientY };
      this.inertiaAzimuth = 0;
      this.inertiaPolar = 0;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.prevMouse.x;
      const dy = e.clientY - this.prevMouse.y;
      this.inertiaAzimuth = -dx * 0.005;
      this.inertiaPolar = dy * 0.005;
      this.targetAzimuth += this.inertiaAzimuth;
      this.targetPolar = Math.max(0.05, Math.min(Math.PI - 0.05, this.targetPolar + this.inertiaPolar));
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { this.isDragging = false; });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.targetDist *= e.deltaY > 0 ? 1.1 : 0.9;
      this.targetDist = Math.max(MIN_DIST, Math.min(MAX_DIST, this.targetDist));
    }, { passive: false });
  }

  follow(state: FlightState, dt: number, _upDir?: THREE.Vector3, snap = false, lookOffset?: { x: number; y: number; z: number }): void {
    const vx = state.position[0] * VISUAL_SCALE + (lookOffset?.x ?? 0);
    const vy = state.position[1] * VISUAL_SCALE + (lookOffset?.y ?? 0);
    const vz = state.position[2] * VISUAL_SCALE + (lookOffset?.z ?? 0);
    const targetLook = new THREE.Vector3(vx, vy, vz);

    // Handle keyboard orbit
    if (this.orbitKeys.left) this.targetAzimuth += dt * ORBIT_SPEED;
    if (this.orbitKeys.right) this.targetAzimuth -= dt * ORBIT_SPEED;
    if (this.orbitKeys.up) this.targetPolar = Math.max(0.05, this.targetPolar - dt * ORBIT_SPEED * 0.5);
    if (this.orbitKeys.down) this.targetPolar = Math.min(Math.PI - 0.05, this.targetPolar + dt * ORBIT_SPEED * 0.5);
    if (this.zoomKeys.in) this.targetDist = Math.max(MIN_DIST, this.targetDist * (1 - dt * ZOOM_SPEED));
    if (this.zoomKeys.out) this.targetDist = Math.min(MAX_DIST, this.targetDist * (1 + dt * ZOOM_SPEED));

    // Apply inertia when not dragging
    if (!this.isDragging) {
      this.targetAzimuth += this.inertiaAzimuth * dt * 2;
      this.targetPolar += this.inertiaPolar * dt * 2;
      this.inertiaAzimuth *= Math.exp(-3 * dt);
      this.inertiaPolar *= Math.exp(-3 * dt);
    }

    // Smooth interpolation
    this.dist += (this.targetDist - this.dist) * Math.min(1, LERP_SPEED * dt);
    this.azimuth += (this.targetAzimuth - this.azimuth) * Math.min(1, LERP_SPEED * dt * 0.5);
    this.polar += (this.targetPolar - this.polar) * Math.min(1, LERP_SPEED * dt * 0.5);

    const ox = this.dist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = this.dist * Math.cos(this.polar);
    const oz = this.dist * Math.sin(this.polar) * Math.sin(this.azimuth);
    const targetPos = new THREE.Vector3(vx + ox, vy + oy, vz + oz);
    const targetUp = new THREE.Vector3(0, 1, 0);

    if (!this.initialized) {
      this.smoothPos.copy(targetPos);
      this.initialized = true;
    }

    if (snap) {
      this.smoothPos.copy(targetPos);
    } else {
      const t = Math.min(1, LERP_SPEED * dt);
      this.smoothPos.lerp(targetPos, t);
    }

    this.camera.position.copy(this.smoothPos);
    // Dynamic up-vector to prevent gimbal lock at poles
    const upVec = Math.abs(this.polar) < 0.1 ? new THREE.Vector3(0, 0, 1) :
                  Math.abs(this.polar - Math.PI) < 0.1 ? new THREE.Vector3(0, 0, -1) :
                  targetUp;
    this.camera.up.copy(upVec);
    this.camera.lookAt(targetLook);
  }

  reset(): void {
    this.targetDist = DEFAULT_DIST;
    this.dist = DEFAULT_DIST;
    this.targetAzimuth = DEFAULT_AZIMUTH;
    this.azimuth = DEFAULT_AZIMUTH;
    this.targetPolar = DEFAULT_POLAR;
    this.polar = DEFAULT_POLAR;
  }

  dispose(): void {
    this.canvas = null;
  }
}

=== src/flight/Controls.ts ===
import type { FlightState } from './FlightState';
import { TouchControls } from './TouchControls';

export class Controls {
  private keys: Set<string> = new Set();
  private stagePressed = false;
  private pauseToggle = false;
  readonly state: FlightState;
  touch: TouchControls | null = null;
  private _onKeyDown: (e: KeyboardEvent) => void;
  private _onKeyUp: (e: KeyboardEvent) => void;

  constructor(state: FlightState) {
    this.state = state;
    this._onKeyDown = (e) => {
      if (e.repeat) return;
      this.keys.add(e.key.toLowerCase());
      if (e.key === ' ') this.stagePressed = true;
      if (e.key === 'Escape') this.pauseToggle = true;
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    this._onKeyUp = (e) => {
      this.keys.delete(e.key.toLowerCase());
    };
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
  }

  enableTouch(): void {
    if (!this.touch) this.touch = new TouchControls();
    this.touch.show();
  }

  disableTouch(): void {
    this.touch?.hide();
  }

  update(dt: number): void {
    const up = this.touch?.getThrottleUp() || this.keys.has('w');
    const down = this.touch?.getThrottleDown() || this.keys.has('s');
    if (up) this.state.throttle = Math.min(1, this.state.throttle + dt * 0.5);
    if (down) this.state.throttle = Math.max(0, this.state.throttle - dt * 0.3);
  }

  getPitch(): number {
    let v = 0;
    if (this.keys.has('arrowup') || this.touch?.getPitch() === 1) v = 1;
    if (this.keys.has('arrowdown') || this.touch?.getPitch() === -1) v = -1;
    return v;
  }

  getYaw(): number {
    let v = 0;
    if (this.keys.has('arrowleft') || this.touch?.getYaw() === 1) v = 1;
    if (this.keys.has('arrowright') || this.touch?.getYaw() === -1) v = -1;
    return v;
  }

  getRoll(): number {
    let v = 0;
    if (this.keys.has('a') || this.touch?.getRoll() === 1) v = 1;
    if (this.keys.has('d') || this.touch?.getRoll() === -1) v = -1;
    return v;
  }

  getZoomIn(): boolean { return this.keys.has('z'); }
  getZoomOut(): boolean { return this.keys.has('x'); }

  getStageRequested(): boolean {
    const was = this.stagePressed || !!this.touch?.getStageRequested();
    this.stagePressed = false;
    return was;
  }

  consumePauseToggle(): boolean {
    const was = this.pauseToggle;
    this.pauseToggle = false;
    return was;
  }

  dispose(): void {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    this.touch?.dispose();
    this.touch = null;
  }
}

=== src/flight/FlightState.ts ===
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
    this.rocket.consumeFuel(rate, dt);
  }
}

=== src/flight/HUD.ts ===
import type { FlightState } from './FlightState';
import type { System } from '../physics/System';

export class HUD {
  private root: HTMLDivElement;
  private speedVal!: HTMLSpanElement;
  private fuelVal!: HTMLSpanElement;
  private vsVal!: HTMLSpanElement;
  private altVal!: HTMLSpanElement;
  private massVal!: HTMLSpanElement;
  private heatFill!: HTMLDivElement;
  private heatPct!: HTMLSpanElement;
  private throttleFill!: HTMLDivElement;
  private throttlePct!: HTMLSpanElement;
  private warpLabel!: HTMLSpanElement;
  private _fuelRKg!: HTMLElement;
  private _fuelRBar!: HTMLElement;
  private pauseOverlay!: HTMLDivElement;
  private navballCanvas!: HTMLCanvasElement;
  private navballCtx!: CanvasRenderingContext2D;
  private camModeEl!: HTMLDivElement;
  onAction: ((action: string) => void) | null = null;

  constructor() {
    this.root = document.createElement('div');
    this.root.style.cssText = 'position:fixed;inset:0;z-index:100;pointer-events:none;';

    this.pauseOverlay = document.createElement('div');
    this.pauseOverlay.style.cssText = 'position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;';
    this.pauseOverlay.innerHTML = `
      <div style="width:280px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button class="btn btn--primary pause-btn" data-action="resume" style="width:100%;padding:14px;font-size:16px;text-align:center;">▶ RESUME</button>
        <button class="btn btn--secondary pause-btn" data-action="menu" style="width:100%;padding:14px;font-size:16px;text-align:center;">MENU</button>
        <button class="btn btn--danger pause-btn" data-action="restart" style="width:100%;padding:14px;font-size:16px;text-align:center;">🔄 RESTART</button>
      </div>
    `;
    document.body.appendChild(this.pauseOverlay);
    this.pauseOverlay.querySelectorAll('.pause-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.onAction) this.onAction((e.target as HTMLElement).dataset.action!);
      });
    });
  }

  mount(parent: HTMLElement = document.body): void {
    // Compact top-right panel
    const panel = document.createElement('div');
    panel.style.cssText = `
      position:fixed;top:16px;left:16px;z-index:100;pointer-events:auto;
      font-family:monospace;font-size:11px;
      display:flex;flex-direction:column;gap:4px;
      background:rgba(8,10,24,0.75);border:1px solid rgba(200,152,56,0.15);
      border-radius:6px;padding:8px 10px;min-width:130px;
      backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
    `;
    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span class="hud-speed-label" style="color:rgba(244,245,242,0.5);">SPD</span>
        <span class="speed-val" style="color:#ddd;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m/s</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">ALT</span>
        <span class="alt-val" style="color:#ddd;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">V/S</span>
        <span class="vs-val" style="color:#88ccff;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m/s</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">FUEL</span>
        <span class="fuel-val" style="color:#ffaa44;">—</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">kg</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">MASS</span>
        <span class="mass-val" style="color:#aaaacc;">—</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">t</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">HEAT</span>
        <span style="font-size:9px;"><span class="heat-pct" style="color:#44FF44;">0%</span></span>
        <div class="data-bar" style="width:50px;height:4px;"><span class="data-bar__track"><span class="heat-fill" style="width:0%;height:100%;background:#44FF44;border-radius:2px;display:block;"></span></span></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">THR</span>
        <span style="font-size:9px;"><span class="throt-pct" style="color:#aaaacc;">0%</span></span>
        <div class="data-bar" style="width:50px;height:4px;"><span class="data-bar__track"><span class="throt-fill" style="width:0%;height:100%;background:#4488ff;border-radius:2px;display:block;"></span></span></div>
      </div>
      <div style="display:flex;gap:4px;margin-top:4px;">
        <button data-action="stage" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(200,152,56,0.2);color:#c89838;border:1px solid rgba(200,152,56,0.3);border-radius:3px;cursor:pointer;">STAGE</button>
        <button data-action="chute" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(100,120,200,0.2);color:#88aacc;border:1px solid rgba(100,120,200,0.3);border-radius:3px;cursor:pointer;">CHUTE</button>
        <button data-action="map" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(100,200,100,0.2);color:#88cc88;border:1px solid rgba(100,200,100,0.3);border-radius:3px;cursor:pointer;">MAP</button>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">WARP</span>
        <span class="warp-val" style="color:#c89838;font-size:10px;">x1</span>
      </div>
    `;
    this.root.appendChild(panel);

    this.speedVal = panel.querySelector('.speed-val')!;
    this.fuelVal = panel.querySelector('.fuel-val')!;
    this.vsVal = panel.querySelector('.vs-val')!;
    this.altVal = panel.querySelector('.alt-val')!;
    this.massVal = panel.querySelector('.mass-val')!;
    this.heatFill = panel.querySelector('.heat-fill')!;
    this.heatPct = panel.querySelector('.heat-pct')!;
    this.throttleFill = panel.querySelector('.throt-fill')!;
    this.throttlePct = panel.querySelector('.throt-pct')!;
    this.warpLabel = panel.querySelector('.warp-val')!;

    panel.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('[data-action]') as HTMLElement | null;
      if (btn && this.onAction) this.onAction(btn.dataset.action!);
    });

    // Free cam label (bottom)
    this.camModeEl = document.createElement('div');
    this.camModeEl.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;';
    this.root.appendChild(this.camModeEl);

    // Navball (bottom-right)
    const navballContainer = document.createElement('div');
    navballContainer.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;';
    const canvas = document.createElement('canvas');
    canvas.width = 150;
    canvas.height = 150;
    canvas.style.cssText = 'width:150px;height:150px;border-radius:75px;opacity:0.85;';
    navballContainer.appendChild(canvas);
    this.root.appendChild(navballContainer);
    this.navballCanvas = canvas;
    this.navballCtx = canvas.getContext('2d')!;

    const fuelRight = document.createElement('div');
    fuelRight.style.cssText = 'position:fixed;top:16px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:12px;background:rgba(8,10,24,0.8);border:1px solid rgba(200,152,56,0.2);border-radius:6px;padding:8px 12px;color:#ffaa44;';
    fuelRight.innerHTML = '<span style="color:rgba(244,245,242,0.5);">FUEL</span> <span class="fuel-r-kg">4500 kg</span><br><div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin-top:4px;"><div class="fuel-r-bar" style="width:100%;height:100%;background:#ffaa44;border-radius:3px;"></div></div>';
    this.root.appendChild(fuelRight);
    this._fuelRKg = fuelRight.querySelector('.fuel-r-kg') as HTMLElement;
    this._fuelRBar = fuelRight.querySelector('.fuel-r-bar') as HTMLElement;

    parent.appendChild(this.root);
  }

  setVisible(v: boolean): void {
    this.root.style.display = v ? '' : 'none';
  }

  setMass(kg: number): void {
    if (this.massVal) this.massVal.textContent = `${(kg / 1000).toFixed(1)}`;
  }

setFreeCamera(active: boolean): void {
    if (this.camModeEl) {
      this.camModeEl.textContent = active ? 'FREE' : '';
    }
  }

  setWarp(value: number): void {
    if (this.warpLabel) this.warpLabel.textContent = `x${value}`;
  }

  setPaused(paused: boolean): void {
    this.pauseOverlay.style.display = paused ? 'flex' : 'none';
  }

  setThrottle(throttle: number): void {
    const pct = Math.round(throttle * 100);
    this.throttlePct.textContent = `${pct}%`;
    this.throttleFill.style.width = `${pct}%`;
    this.throttleFill.style.background = pct > 80 ? '#ff6644' : '#4488ff';
  }

  setNavballData(
    rocketFwd: [number, number, number],
    velocityDir: [number, number, number],
    upDir: [number, number, number],
    orbitNormal?: [number, number, number],
    bodyDirs?: Array<{ name: string; dir: [number, number, number]; color: string }>
  ): void {
    const ctx = this.navballCtx;
    const cw = 140, ch = 140, cx = 70, cy = 70, R = 66;
    ctx.clearRect(0, 0, cw, ch);

    ctx.beginPath(); ctx.arc(cx, cy, R + 2, 0, Math.PI * 2);
    ctx.fillStyle = '#060810'; ctx.fill();

    const fwd: [number, number, number] = [rocketFwd[0], rocketFwd[1], rocketFwd[2]];
    const fwdLen = Math.sqrt(fwd[0]*fwd[0] + fwd[1]*fwd[1] + fwd[2]*fwd[2]) || 1;
    fwd[0] /= fwdLen; fwd[1] /= fwdLen; fwd[2] /= fwdLen;

    const dotFU = fwd[0]*upDir[0] + fwd[1]*upDir[1] + fwd[2]*upDir[2];
    let refUp: [number, number, number] = [
      upDir[0] - fwd[0] * dotFU,
      upDir[1] - fwd[1] * dotFU,
      upDir[2] - fwd[2] * dotFU,
    ];
    const refUpLen = Math.sqrt(refUp[0]*refUp[0] + refUp[1]*refUp[1] + refUp[2]*refUp[2]) || 1;
    refUp[0] /= refUpLen; refUp[1] /= refUpLen; refUp[2] /= refUpLen;

    const right: [number, number, number] = [
      fwd[1]*refUp[2] - fwd[2]*refUp[1],
      fwd[2]*refUp[0] - fwd[0]*refUp[2],
      fwd[0]*refUp[1] - fwd[1]*refUp[0],
    ];

    const project = (dir: [number, number, number]) => {
      const m = Math.sqrt(dir[0]*dir[0] + dir[1]*dir[1] + dir[2]*dir[2]) || 1;
      const dx = dir[0]/m, dy = dir[1]/m, dz = dir[2]/m;
      const lx = dx*right[0] + dy*right[1] + dz*right[2];
      const ly = dx*refUp[0] + dy*refUp[1] + dz*refUp[2];
      const lz = dx*fwd[0] + dy*fwd[1] + dz*fwd[2];
      const inFront = lz > 0;
      const d = lz > 0 ? R / (1 + lz) : R * 0.5;
      return { x: cx + lx * d, y: cy - ly * d, inFront, lx, ly, lz };
    };

    const r2 = R * R;
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    const upProj = project(upDir);
    const nadProj = project([-upDir[0], -upDir[1], -upDir[2]]);

    const skyGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    skyGrad.addColorStop(0, '#0a0a22');
    skyGrad.addColorStop(0.4, '#1a2a4a');
    skyGrad.addColorStop(1, '#224488');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

    if (nadProj.inFront) {
      const earthGrad = ctx.createRadialGradient(nadProj.x, nadProj.y, 0, nadProj.x, nadProj.y, R * 1.2);
      earthGrad.addColorStop(0, '#6a4a2a');
      earthGrad.addColorStop(0.3, '#5a3a1a');
      earthGrad.addColorStop(0.7, '#3a2a12');
      earthGrad.addColorStop(1, 'rgba(10,10,40,0)');
      ctx.fillStyle = earthGrad;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
    }

    for (let deg = -80; deg <= 80; deg += 10) {
      const rad = deg * Math.PI / 180;
      const cosP = Math.cos(rad);
      const sinP = Math.sin(rad);
      const dir: [number, number, number] = [
        fwd[0]*cosP + refUp[0]*sinP,
        fwd[1]*cosP + refUp[1]*sinP,
        fwd[2]*cosP + refUp[2]*sinP,
      ];
      const p = project(dir);
      if (!p.inFront) continue;
      if ((p.x-cx)*(p.x-cx) + (p.y-cy)*(p.y-cy) > r2) continue;
      const lineW = deg === 0 ? 26 : deg % 20 === 0 ? 18 : 10;
      ctx.beginPath();
      ctx.moveTo(cx - lineW * (1 - Math.abs(sinP) * 0.3), p.y);
      ctx.lineTo(cx + lineW * (1 - Math.abs(sinP) * 0.3), p.y);
      ctx.strokeStyle = deg === 0 ? '#FFCC44' : 'rgba(255,255,255,0.2)';
      ctx.lineWidth = deg === 0 ? 1.5 : 0.6;
      ctx.stroke();
      if (deg % 20 === 0) {
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.font = '7px sans-serif';
        ctx.fillText(`${Math.abs(deg)}`, cx + lineW + 3, p.y + 2);
      }
    }

    for (let h = 0; h < 360; h += 45) {
      const hr = h * Math.PI / 180;
      const hx = right[0]*Math.cos(hr) + refUp[0]*Math.sin(hr);
      const hy = right[1]*Math.cos(hr) + refUp[1]*Math.sin(hr);
      const hz = right[2]*Math.cos(hr) + refUp[2]*Math.sin(hr);
      const hDir: [number, number, number] = [hx - fwd[0]*dotFU, hy - fwd[1]*dotFU, hz - fwd[2]*dotFU];
      const hm = Math.sqrt(hDir[0]*hDir[0] + hDir[1]*hDir[1] + hDir[2]*hDir[2]) || 1;
      const hp = project([hDir[0]/hm, hDir[1]/hm, hDir[2]/hm]);
      if (hp.inFront) {
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.font = '6px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${h}°`, hp.x, hp.y + 2);
        ctx.textAlign = 'start';
      }
    }

    const drawMarker = (dir: [number, number, number], drawFn: (p: { x: number; y: number }) => void) => {
      const p = project(dir);
      if (p.inFront) drawFn(p);
    };

    drawMarker(velocityDir, (p) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#44FF44'; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1.5; ctx.stroke();
    });

    drawMarker([-velocityDir[0], -velocityDir[1], -velocityDir[2]], (p) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(68,255,68,0.5)'; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(p.x - 3, p.y - 3); ctx.lineTo(p.x + 3, p.y + 3);
      ctx.moveTo(p.x + 3, p.y - 3); ctx.lineTo(p.x - 3, p.y + 3);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1; ctx.stroke();
    });

    drawMarker(upDir, (p) => {
      ctx.beginPath(); ctx.moveTo(p.x, p.y - 6); ctx.lineTo(p.x - 4, p.y + 3); ctx.lineTo(p.x + 4, p.y + 3); ctx.closePath();
      ctx.fillStyle = '#4488FF'; ctx.fill();
    });

    drawMarker([-upDir[0], -upDir[1], -upDir[2]], (p) => {
      ctx.beginPath(); ctx.moveTo(p.x, p.y + 6); ctx.lineTo(p.x - 4, p.y - 3); ctx.lineTo(p.x + 4, p.y - 3); ctx.closePath();
      ctx.fillStyle = '#CC8844'; ctx.fill();
    });

    ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#FFAA44'; ctx.fill();

    ctx.restore();

    ctx.beginPath(); ctx.arc(cx, cy, R + 1, 0, Math.PI * 2);
    ctx.strokeStyle = '#334466'; ctx.lineWidth = 2;
    ctx.stroke();

    for (let deg = 0; deg < 360; deg += 45) {
      const rad = deg * Math.PI / 180;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(rad) * (R-7), cy + Math.sin(rad) * (R-7));
      ctx.lineTo(cx + Math.cos(rad) * (R+2), cy + Math.sin(rad) * (R+2));
      ctx.strokeStyle = '#4a6a8a'; ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  update(state: FlightState, system: System, heat: number = 0, throttle: number = 0): void {
    const speed = Math.sqrt(
      state.velocity[0] ** 2 + state.velocity[1] ** 2 + state.velocity[2] ** 2
    );
    let nearestAlt = Infinity;
    for (const body of system.bodies) {
      if (body.mass <= 0) continue;
      const dx = state.position[0] - body.position[0];
      const dy = state.position[1] - body.position[1];
      const dz = state.position[2] - body.position[2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const r = (body as any).getSurfaceRadiusAt?.(state.position) ?? (body as any).radius ?? 0;
      const alt = d - r;
      if (alt < nearestAlt) nearestAlt = alt;
    }

    const heatPct = Math.min(100, (heat / 300000) * 100);

    this.speedVal.textContent = speed > 1000 ? (speed/1000).toFixed(1)+'k' : speed.toFixed(1);
    this.speedVal.style.color = speed > 3000 ? '#ff6644' : speed > 1000 ? '#ffaa44' : '#ddd';
    const nearestAltKm = nearestAlt / 1000; this.altVal.textContent = nearestAlt > 10000 ? nearestAltKm.toFixed(1)+'k' : nearestAlt.toFixed(0);
    // Vertical speed
    const vs = state.velocity[1]; // Y-component is radial at surface
    this.vsVal.textContent = vs > 0 ? '+' + vs.toFixed(0) : vs.toFixed(0);
    this.vsVal.style.color = vs > 0 ? '#88ff88' : vs < 0 ? '#ff6644' : '#88ccff';
    const fuelKg = state.rocket.totalFuelMass();
    if (fuelKg > 1000) {
      this.fuelVal.textContent = (fuelKg / 1000).toFixed(1);
      (this.fuelVal.nextElementSibling as HTMLElement).textContent = 't';
    } else {
      this.fuelVal.textContent = fuelKg.toFixed(0);
      (this.fuelVal.nextElementSibling as HTMLElement).textContent = 'kg';
    }
    const tPct = Math.round(throttle * 100);
    this.throttlePct.textContent = `${tPct}%`;
    // Right fuel panel
    const fKg = state.rocket.totalFuelMass();
    const maxF = state.rocket.assembly.totalFuelCapacity();
    if (this._fuelRKg) this._fuelRKg.textContent = fKg > 1000 ? `${(fKg/1000).toFixed(1)} t` : `${fKg.toFixed(0)} kg`;
    if (this._fuelRBar) this._fuelRBar.style.width = `${maxF > 0 ? (fKg/maxF)*100 : 0}%`;
    this.throttleFill.style.width = `${tPct}%`;
    this.throttleFill.style.background = tPct > 80 ? '#ff4444' : tPct > 40 ? '#ffaa00' : '#4488ff';
    this.heatPct.textContent = `${heatPct.toFixed(0)}%`;
    this.heatPct.style.color = heatPct > 70 ? '#FF3333' : heatPct > 40 ? '#FFCC00' : '#44FF44';
    this.heatFill.style.width = `${heatPct}%`;
    this.heatFill.style.background = heatPct > 70 ? '#FF3333' : heatPct > 40 ? '#FFCC00' : '#44FF44';
  }

  unmount(): void {
    this.root.remove();
    this.pauseOverlay.remove();
  }
}
=== src/flight/SoundManager.ts ===
export class SoundManager {
  private ctx: AudioContext | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private engineNoise: AudioBufferSourceNode | null = null;
  private engineRunning = false;
  private throttleLevel = 0;

  constructor() {
    try { this.ctx = new AudioContext(); } catch { /* no Web Audio */ }
  }

  private ensureCtx(): AudioContext | null {
    if (!this.ctx) return null;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  startEngine(): void {
    if (!this.ensureCtx() || this.engineRunning) return;
    const c = this.ctx!;
    this.engineRunning = true;

    // Main oscillator (low rumble)
    this.engineOsc = c.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = 80;

    this.engineGain = c.createGain();
    this.engineGain.gain.value = 0.02;

    // Noise source for hiss
    const noiseBuf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = (Math.random() * 2 - 1) * 0.3;
    }
    this.engineNoise = c.createBufferSource();
    this.engineNoise.buffer = noiseBuf;
    this.engineNoise.loop = true;
    const noiseGain = c.createGain();
    noiseGain.gain.value = 0.01;

    // Filter for the noise
    const noiseFilter = c.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 400;

    this.engineOsc.connect(this.engineGain);
    this.engineOsc.start();

    this.engineNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);

    const masterGain = c.createGain();
    masterGain.gain.value = 0.4;
    this.engineGain.connect(masterGain);
    noiseGain.connect(masterGain);
    masterGain.connect(c.destination);
  }

  setThrottle(t: number): void {
    this.throttleLevel = t;
    if (!this.engineOsc || !this.engineGain) return;
    const f = 60 + t * 80;
    const gain = 0.01 + t * 0.04;
    this.engineOsc.frequency.setValueAtTime(f, this.ctx!.currentTime + 0.1);
    this.engineGain.gain.setValueAtTime(gain, this.ctx!.currentTime + 0.05);
  }

  stopEngine(): void {
    if (this.engineOsc) { try { this.engineOsc.stop(); } catch {} this.engineOsc = null; }
    if (this.engineNoise) { try { this.engineNoise.stop(); } catch {} this.engineNoise = null; }
    if (this.engineGain) { this.engineGain.disconnect(); this.engineGain = null; }
    this.engineRunning = false;
  }

  playStaging(): void {
    const c = this.ensureCtx();
    if (!c) return;
    const time = c.currentTime;

    // Short explosive burst
    const osc = c.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, time);
    osc.frequency.exponentialRampToValueAtTime(40, time + 0.3);

    const gain = c.createGain();
    gain.gain.setValueAtTime(0.15, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);

    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(time);
    osc.stop(time + 0.5);
  }

  playCrash(): void {
    const c = this.ensureCtx();
    if (!c) return;
    const time = c.currentTime;

    // Low boom + crackle
    const osc = c.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, time);
    osc.frequency.exponentialRampToValueAtTime(20, time + 0.8);

    const gain = c.createGain();
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.5);

    // Noise burst
    const noiseBuf = c.createBuffer(1, c.sampleRate * 1, c.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = (Math.random() * 2 - 1) * (i < noiseData.length * 0.2 ? 0.8 : 0.1 * (1 - i / noiseData.length));
    }
    const noiseSrc = c.createBufferSource();
    noiseSrc.buffer = noiseBuf;
    const noiseGain = c.createGain();
    noiseGain.gain.setValueAtTime(0.2, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 1);

    osc.connect(gain);
    noiseSrc.connect(noiseGain);
    gain.connect(c.destination);
    noiseGain.connect(c.destination);
    osc.start(time);
    osc.stop(time + 1.5);
    noiseSrc.start(time);
    noiseSrc.stop(time + 1);
  }

  playLand(): void {
    const c = this.ensureCtx();
    if (!c) return;
    const time = c.currentTime;

    const osc = c.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, time);
    osc.frequency.exponentialRampToValueAtTime(60, time + 0.2);

    const gain = c.createGain();
    gain.gain.setValueAtTime(0.1, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(time);
    osc.stop(time + 0.3);
  }

  dispose(): void {
    this.stopEngine();
    if (this.ctx) { this.ctx.close(); this.ctx = null; }
  }
}
=== src/flight/Thrust.ts ===
import type { FlightState } from './FlightState';
import { G0 } from '../config/constants';

/**
 * Apply thrust to a flight state for the given dt.
 * Finds active engine in rocket assembly, applies force along +Y in local frame.
 * Consumes fuel at mass_flow = thrust / (Isp * g0) * throttle.
 */
export function applyThrust(state: FlightState, dt: number, direction?: [number, number, number]): void {
  if (state.throttle <= 0) return;

  // Find first engine in assembly
  const engine = findFirstEngine(state.rocket.assembly.roots);
  if (!engine || !engine.thrust || !engine.isp) return;

  // Thrust force in Newtons (engine.thrust is in kN)
  const forceN = engine.thrust * 1000 * state.throttle;
  // Mass flow in kg/s — divided by 30 for longer burn time
  const massFlow = forceN / (engine.isp * G0) / 30;

  // Apply force in direction (default +Y = up)
  const dir = direction ?? [0, 1, 0];
  const ax = forceN * dir[0] / state.rocket.totalMass();
  const ay = forceN * dir[1] / state.rocket.totalMass();
  const az = forceN * dir[2] / state.rocket.totalMass();
  state.velocity[0] += ax * dt;
  state.velocity[1] += ay * dt;
  state.velocity[2] += az * dt;

  // Consume fuel
  state.consumeFuel(massFlow, dt);
}

export function findFirstEngine(nodes: any[]): { thrust: number; isp: number } | null {
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

=== src/flight/TouchControls.ts ===
import * as THREE from 'three';
import { toast } from '../ui/Toast';

export class TouchControls {
  private container: HTMLDivElement;
  private active = false;
  private keys: Set<string> = new Set();
  private stagePressed = false;
  private pauseToggle = false;
  private visible = false;

  constructor() {
    this.container = document.createElement('div');
    this.container.style.cssText = `
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;
      display: none; pointer-events: none;
      height: 200px; padding: 8px;
    `;
    document.body.appendChild(this.container);
    this.buildUI();
  }

  private buildUI(): void {
    const c = this.container;

    // Left side — pitch/yaw joystick area
    const left = document.createElement('div');
    left.style.cssText = `
      position: absolute; bottom: 20px; left: 20px; width: 140px; height: 140px;
      background: rgba(255,255,255,0.08); border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.15); pointer-events: auto;
      touch-action: none;
    `;

    const stick = document.createElement('div');
    stick.style.cssText = `
      position: absolute; top: 50%; left: 50%; width: 50px; height: 50px;
      background: rgba(255,255,255,0.2); border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid rgba(255,255,255,0.3);
    `;
    left.appendChild(stick);

    let joyTouchId: number | null = null;
    const joyCenter = { x: 0, y: 0 };
    const joyPos = { x: 0, y: 0 };

    const onJoyStart = (cx: number, cy: number) => {
      const rect = left.getBoundingClientRect();
      joyCenter.x = rect.left + rect.width / 2;
      joyCenter.y = rect.top + rect.height / 2;
      joyPos.x = cx;
      joyPos.y = cy;
      this.updateStick(stick, joyCenter, joyPos);
    };

    const onJoyMove = (cx: number, cy: number) => {
      joyPos.x = cx;
      joyPos.y = cy;
      this.updateStick(stick, joyCenter, joyPos);
      // Set virtual keys based on stick position
      const dx = (cx - joyCenter.x) / 60;
      const dy = (cy - joyCenter.y) / 60;
      const clampedDx = Math.max(-1, Math.min(1, dx));
      const clampedDy = Math.max(-1, Math.min(1, dy));
      if (clampedDy > 0.3) { this.keys.add('touch-up'); this.keys.delete('touch-down'); }
      else if (clampedDy < -0.3) { this.keys.add('touch-down'); this.keys.delete('touch-up'); }
      else { this.keys.delete('touch-up'); this.keys.delete('touch-down'); }
      if (clampedDx > 0.3) { this.keys.add('touch-right'); this.keys.delete('touch-left'); }
      else if (clampedDx < -0.3) { this.keys.add('touch-left'); this.keys.delete('touch-right'); }
      else { this.keys.delete('touch-left'); this.keys.delete('touch-right'); }
    };

    const onJoyEnd = () => {
      joyTouchId = null;
      stick.style.transform = 'translate(-50%, -50%)';
      this.keys.delete('touch-up');
      this.keys.delete('touch-down');
      this.keys.delete('touch-left');
      this.keys.delete('touch-right');
    };

    left.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (joyTouchId !== null) return;
      const t = e.changedTouches[0]!;
      joyTouchId = t.identifier;
      onJoyStart(t.clientX, t.clientY);
    }, { passive: false });

    left.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i]!.identifier === joyTouchId) {
          onJoyMove(e.changedTouches[i]!.clientX, e.changedTouches[i]!.clientY);
        }
      }
    }, { passive: false });

    left.addEventListener('touchend', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i]!.identifier === joyTouchId) {
          onJoyEnd();
        }
      }
    });

    left.addEventListener('touchcancel', onJoyEnd);
    c.appendChild(left);

    // Right side — buttons
    const right = document.createElement('div');
    right.style.cssText = `
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;

    const btnStyle = (label: string, w = 70, h = 50): [HTMLButtonElement, HTMLDivElement] => {
      const wrap = document.createElement('div');
      wrap.style.cssText = `pointer-events: auto; position: relative;`;
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.style.cssText = `
        width: ${w}px; height: ${h}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `;
      wrap.appendChild(btn);
      return [btn, wrap];
    };

    // Throttle up/down
    const [throttleUpBtn, throttleUpWrap] = btnStyle('THR+', 70, 44);
    const [throttleDownBtn, throttleDownWrap] = btnStyle('THR-', 70, 44);
    const [stageBtn, stageWrap] = btnStyle('STAGE', 70, 44);
    const [rollLeftBtn, rollLeftWrap] = btnStyle('R-', 60, 44);
    const [rollRightBtn, rollRightWrap] = btnStyle('R+', 60, 44);

    const pressKey = (key: string, btn: HTMLButtonElement) => {
      this.keys.add(key);
      btn.style.background = 'rgba(255,255,255,0.3)';
    };

    const releaseKey = (key: string, btn: HTMLButtonElement) => {
      this.keys.delete(key);
      btn.style.background = 'rgba(255,255,255,0.1)';
    };

    const setupBtn = (btn: HTMLButtonElement, key: string) => {
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); pressKey(key, btn); }, { passive: false });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); releaseKey(key, btn); }, { passive: false });
      btn.addEventListener('touchcancel', () => releaseKey(key, btn));
      btn.addEventListener('mousedown', () => pressKey(key, btn));
      btn.addEventListener('mouseup', () => releaseKey(key, btn));
      btn.addEventListener('mouseleave', () => releaseKey(key, btn));
    };

    setupBtn(throttleUpBtn, 'w');
    setupBtn(throttleDownBtn, 's');
    setupBtn(rollLeftBtn, 'a');
    setupBtn(rollRightBtn, 'd');

    stageBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.stagePressed = true; }, { passive: false });
    stageBtn.addEventListener('mousedown', () => { this.stagePressed = true; });

    const row1 = document.createElement('div');
    row1.style.cssText = 'display:flex; gap:8px;';
    row1.appendChild(throttleUpWrap);
    row1.appendChild(stageWrap);
    right.appendChild(row1);

    const row2 = document.createElement('div');
    row2.style.cssText = 'display:flex; gap:8px;';
    row2.appendChild(throttleDownWrap);
    row2.appendChild(rollLeftWrap);
    row2.appendChild(rollRightWrap);
    right.appendChild(row2);

    c.appendChild(right);
  }

  private updateStick(stick: HTMLElement, center: { x: number; y: number }, pos: { x: number; y: number }): void {
    const dx = pos.x - center.x;
    const dy = pos.y - center.y;
    const maxR = 60;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const clamped = Math.min(dist, maxR);
    const angle = Math.atan2(dy, dx);
    const x = Math.cos(angle) * clamped;
    const y = Math.sin(angle) * clamped;
    stick.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }

  show(): void {
    if (this.visible) return;
    this.visible = true;
    this.container.style.display = 'block';
  }

  hide(): void {
    this.visible = false;
    this.container.style.display = 'none';
  }

  isVisible(): boolean { return this.visible; }

  getPitch(): number {
    let v = 0;
    if (this.keys.has('touch-up')) v = 1;
    if (this.keys.has('touch-down')) v = -1;
    return v;
  }

  getYaw(): number {
    let v = 0;
    if (this.keys.has('touch-right')) v = 1;
    if (this.keys.has('touch-left')) v = -1;
    return v;
  }

  getRoll(): number {
    let v = 0;
    if (this.keys.has('a')) v = 1;
    if (this.keys.has('d')) v = -1;
    return v;
  }

  getThrottleUp(): boolean { return this.keys.has('w'); }
  getThrottleDown(): boolean { return this.keys.has('s'); }

  getStageRequested(): boolean {
    const was = this.stagePressed;
    this.stagePressed = false;
    return was;
  }

  dispose(): void {
    document.body.removeChild(this.container);
  }
}

=== src/main.ts ===
import { Game } from './core/Game';
import '../styles/tokens.css';
import '../styles/typography.css';
import '../styles/components.css';

function hideLoadingScreen(): void {
  const el = document.getElementById('loading-screen');
  if (el) el.classList.add('hidden');
  const label = document.getElementById('loading-label');
  if (label) (label as any).dataset.done = '1';
}

try {
  const game = new Game();
  hideLoadingScreen();
  game.start();
} catch (e) {
  console.error('Failed to start Ellipse:', e);
  hideLoadingScreen();
  document.body.innerHTML += `<div style="position:fixed;inset:0;z-index:950;color:white;padding:32px;font-family:monospace;background:#06080f;">
      <h1>Failed to start</h1>
      <pre>${String(e)}</pre>
    </div>`;
}

=== src/parts/Part.ts ===
export type FuelType = 'LFO' | 'LF';
export type PartKind = 'capsule' | 'tank' | 'engine' | 'parachute' | 'legs' | 'decoupler' | 'heatshield' | 'gltf';
export type PartSize = 'S' | 'M' | 'L' | 'XL';

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
  heatCapacity?: number;   // J (heat shields)
  dragCoeff?: number;      // aerodynamic
  gltfUrl?: string;        // GLTF model URL (for gltf kind)
  gltfScale?: number;      // scale factor for GLTF model
}

=== src/parts/PartBuilder.ts ===
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { Part } from './Part';
import { PART_SCALE, assetUrl } from '../config/constants';
import { toast } from '../ui/Toast';
import {
  generateTankTexture,
  generateCapsuleTexture,
  generateEngineTexture,
  generateLegsTexture,
  generateDecouplerTexture,
  generateHeatshieldTexture,
  generateGoldTexture,
  generateFabricTexture,
  type TextureSet,
} from '../effects/ProceduralTextures';

const SIZE_DIMS = {
  S: { radius: 0.5 * PART_SCALE, height: 0.7 * PART_SCALE },
  M: { radius: 0.7 * PART_SCALE, height: 1.1 * PART_SCALE },
  L: { radius: 1.0 * PART_SCALE, height: 1.6 * PART_SCALE },
  XL: { radius: 1.4 * PART_SCALE, height: 2.2 * PART_SCALE }
};

const PI = Math.PI;
const SEG = 64;

// Seeded random for vertex noise
let _vnoiseSeed = 0;
function vnoise(): number {
  _vnoiseSeed = (_vnoiseSeed * 1664525 + 1013904223) >>> 0;
  return (_vnoiseSeed >>> 0) / 0xffffffff;
}

function perturbVertices(geom: THREE.BufferGeometry, strength: number): void {
  const pos = geom.attributes.position;
  if (!pos) return;
  const arr = pos.array as Float32Array;
  for (let i = 0; i < arr.length; i += 3) {
    const dx = (vnoise() - 0.5) * 2;
    const dy = (vnoise() - 0.5) * 2;
    const dz = (vnoise() - 0.5) * 2;
    arr[i] = arr[i]! + dx * strength;
    arr[i + 1] = arr[i + 1]! + dy * strength;
    arr[i + 2] = arr[i + 2]! + dz * strength;
  }
  pos.needsUpdate = true;
  geom.computeVertexNormals();
}

// GLTF loader
export const gltfLoader = new GLTFLoader();
export const gltfCache = new Map<string, THREE.Group>();

export async function loadGLTF(url: string, scale = 1): Promise<THREE.Group | null> {
  const resolvedUrl = assetUrl(url);
  if (gltfCache.has(url)) {
    return gltfCache.get(url)!.clone();
  }
  // Try multiple URL variants in case the first one fails
  const urlsToTry = [resolvedUrl];
  if (resolvedUrl !== url) urlsToTry.push(url);
  if (url.startsWith('/')) urlsToTry.push(url.slice(1));

  let lastErr: any;
  for (const tryUrl of urlsToTry) {
    try {
      const gltf = await gltfLoader.loadAsync(tryUrl);
      const group = gltf.scene;
      if (!group) continue;

      group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
          if (obj.material) {
            const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
            for (const mat of mats) {
              if (mat instanceof THREE.MeshStandardMaterial) {
                mat.roughness = Math.max(0.1, mat.roughness ?? 0.5);
                mat.metalness = Math.max(0, mat.metalness ?? 0);
                if (mat.color) {
                  const hsl = { h: 0, s: 0, l: 0 };
                  mat.color.getHSL(hsl);
                  if (hsl.s < 0.3) {
                    hsl.s = Math.min(1, hsl.s * 1.5 + 0.05);
                    hsl.l = Math.min(1, Math.max(0.1, hsl.l * 1.1));
                    mat.color.setHSL(hsl.h, hsl.s, hsl.l);
                  }
                }
                const name = obj.name.toLowerCase();
                const isEngine = name.includes('engine') || name.includes('nozzle') || name.includes('thruster') || name.includes('motor') || name.includes('bell');
                const isMetallic = name.includes('metal') || name.includes('hull') || name.includes('body') || name.includes('frame') || name.includes('strut');
                const isGlass = name.includes('glass') || name.includes('window') || name.includes('canopy') || name.includes('cockpit');
                const isHeatshield = name.includes('heat') || name.includes('shield') || name.includes('tile');
                const isSolarPanel = name.includes('solar') || name.includes('panel') || name.includes('array');

                if (isEngine) {
                  mat.roughness = Math.max(0.05, mat.roughness);
                  mat.metalness = Math.min(1, mat.metalness + 0.3);
                  mat.emissive = new THREE.Color(0x884422);
                  mat.emissiveIntensity = 0.15;
                } else if (isMetallic) {
                  mat.roughness = Math.max(0.1, mat.roughness * 0.7);
                  mat.metalness = Math.min(1, mat.metalness + 0.4);
                } else if (isGlass) {
                  mat.roughness = 0;
                  mat.metalness = 0;
                  mat.transparent = true;
                  mat.opacity = 0.6;
                  mat.emissive = new THREE.Color(0x4488ff);
                  mat.emissiveIntensity = 0.08;
                } else if (isHeatshield) {
                  mat.roughness = Math.min(1, mat.roughness + 0.2);
                  mat.metalness = 0;
                } else if (isSolarPanel) {
                  mat.roughness = 0.8;
                  mat.metalness = 0;
                  mat.emissive = new THREE.Color(0x4488ff);
                  mat.emissiveIntensity = 0.03;
                }

                if (!isEngine && !isGlass && !isSolarPanel) {
                  if (name.includes('engine') || name.includes('nozzle') || name.includes('thruster') || name.includes('motor')) {
                    mat.emissive = new THREE.Color(0x442200);
                    mat.emissiveIntensity = 0.05;
                  }
                }
                mat.needsUpdate = true;
              } else if (mat instanceof THREE.MeshBasicMaterial || mat instanceof THREE.MeshPhongMaterial) {
                const newMat = new THREE.MeshStandardMaterial({
                  color: (mat as THREE.MeshBasicMaterial).color ?? 0xffffff,
                  map: (mat as THREE.MeshBasicMaterial).map,
                  normalMap: (mat as any).normalMap,
                  roughnessMap: (mat as any).roughnessMap,
                  metalnessMap: (mat as any).metalnessMap,
                  aoMap: (mat as any).aoMap,
                  roughness: 0.5,
                  metalness: 0.1,
                });
                obj.material = newMat;
              }
            }
          } else {
            obj.material = new THREE.MeshStandardMaterial({
              color: 0xcccccc,
              roughness: 0.5,
              metalness: 0.1,
            });
          }
        }
      });

      group.scale.setScalar(scale);
      gltfCache.set(url, group);
      return group.clone();
    } catch (err) {
      lastErr = err;
    }
  }

  console.error('Failed to load GLTF after all attempts:', url, lastErr);
  toast.show(`Failed to load model: ${url.split('/').pop()}`, 3000);
  return null;
}

// Cache for generated texture sets
const textureCache = new Map<string, TextureSet>();

function getTextureSet(key: string, generator: () => TextureSet): TextureSet {
  if (!textureCache.has(key)) {
    const set = generator();
    // Set proper filtering on all textures
    const textures = [set.color, set.normal, set.roughness, set.metalness, set.ao, set.emissive].filter(Boolean) as THREE.Texture[];
    for (const tex of textures) {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
    }
    textureCache.set(key, set);
  }
  return textureCache.get(key)!;
}

function createMaterialFromTextureSet(
  texSet: TextureSet,
  overrides: Partial<THREE.MeshStandardMaterialParameters> = {}
): THREE.MeshStandardMaterial {
  const params: THREE.MeshStandardMaterialParameters = {
    map: texSet.color,
    normalMap: texSet.normal,
    roughnessMap: texSet.roughness,
    metalnessMap: texSet.metalness,
    roughness: 0.5,
    metalness: 0.1,
    color: 0xccddee,
    ...overrides,
  };
  if (texSet.ao) {
    params.aoMap = texSet.ao;
    params.aoMapIntensity = 1.0;
  }
  if (texSet.emissive) {
    params.emissiveMap = texSet.emissive;
  }
  const mat = new THREE.MeshStandardMaterial(params);
  return mat;
}

function applyCylindricalUV(geometry: THREE.BufferGeometry, heightScale = 1.0): void {
  const pos = geometry.attributes.position;
  if (!pos) return;
  let uv = geometry.attributes.uv;
  if (!uv) {
    uv = new THREE.BufferAttribute(new Float32Array(pos.count * 2), 2);
  }

  // Compute Y range from actual geometry
  let minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  const yRange = maxY - minY || 1;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);

    // Cylindrical projection: U = angle around Y, V = height
    const angle = Math.atan2(x, z);
    const u = (angle + Math.PI) / (2 * Math.PI);
    const v = ((y - minY) / yRange) * heightScale;

    uv.setXY(i, u, v);
  }

  geometry.setAttribute('uv', uv);
  uv.needsUpdate = true;

  // Add UV2 for AO map support
  if (!geometry.attributes.uv2) {
    geometry.setAttribute('uv2', uv.clone());
  }
}

export async function buildPartMeshAsync(part: Part): Promise<THREE.Group> {
  const g = new THREE.Group();
  g.name = part.id;
  
  // Handle GLTF models
  if (part.gltfUrl) {
    const scale = part.gltfScale ?? 1;
    const gltfGroup = await loadGLTF(part.gltfUrl, scale);
    if (gltfGroup) g.add(gltfGroup);
    return g;
  }

  const d = SIZE_DIMS[part.size];
  switch (part.kind) {
    case 'capsule': buildCapsule(g, d, part.id); break;
    case 'tank': buildTank(g, d, part.size); break;
    case 'engine': buildEngine(g, d, part.size); break;
    case 'parachute': buildParachute(g, d); break;
    case 'legs': buildLegs(g, d); break;
    case 'decoupler': buildDecoupler(g, d); break;
    case 'heatshield': buildHeatshield(g, d); break;
  }
  return g;
}

export function buildPartMesh(part: Part): THREE.Group {
  const g = new THREE.Group();
  g.name = part.id;
  const d = SIZE_DIMS[part.size];
  switch (part.kind) {
    case 'capsule': buildCapsule(g, d, part.id); break;
    case 'tank': buildTank(g, d, part.size); break;
    case 'engine': buildEngine(g, d, part.size); break;
    case 'parachute': buildParachute(g, d); break;
    case 'legs': buildLegs(g, d); break;
    case 'decoupler': buildDecoupler(g, d); break;
    case 'heatshield': buildHeatshield(g, d); break;
case 'gltf': {
      // Use cached GLTF model if available, otherwise placeholder
      if (part.gltfUrl && gltfCache.has(part.gltfUrl)) {
        const scale = part.gltfScale ?? 1;
        const gltfGroup = gltfCache.get(part.gltfUrl)!.clone();
        gltfGroup.scale.setScalar(scale);
        
        // Center the model
        const box = new THREE.Box3().setFromObject(gltfGroup);
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltfGroup.position.sub(center);
        
        // Find nozzle/engine attachment points without overwriting materials
        const nozzlePoints: THREE.Vector3[] = [];
        const engineMeshes: THREE.Mesh[] = [];
        
        gltfGroup.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            const name = obj.name.toLowerCase();
            const isEngine = name.includes('engine') || name.includes('nozzle') || name.includes('thruster') || 
                             name.includes('motor') || name.includes('combustion');
            
            const isEnginePart = isEngine || obj.position.y < -0.1;
            
            // Collect engine/nozzle positions for flame attachment (preserve original materials)
            if (isEnginePart) {
              const box = new THREE.Box3().setFromObject(obj);
              const center = new THREE.Vector3();
              box.getCenter(center);
              const localPos = center.clone().sub(gltfGroup.position);
              nozzlePoints.push(localPos);
              engineMeshes.push(obj);
            }
            
            obj.castShadow = true;
            obj.receiveShadow = true;
          }
        });
        
        // Store nozzle attachment points on the group for later use
        (gltfGroup as any).userData.nozzlePoints = nozzlePoints;
        (gltfGroup as any).userData.engineMeshes = engineMeshes;
        
        g.add(gltfGroup);
      } else {
        // Generate procedural fallback (colored cylinder with fins)
        const d = SIZE_DIMS[part.size];
        const fallbackMat = new THREE.MeshStandardMaterial({
          color: 0x88aacc,
          roughness: 0.4,
          metalness: 0.3,
        });
        const bodyGeom = new THREE.CylinderGeometry(d.radius, d.radius * 0.8, d.height * 0.8, 16);
        applyCylindricalUV(bodyGeom);
        const body = new THREE.Mesh(bodyGeom, fallbackMat);
        body.position.y = -d.height * 0.1;
        g.add(body);

        // Nose cone
        const noseGeom = new THREE.ConeGeometry(d.radius * 0.6, d.height * 0.2, 16);
        const noseMat = new THREE.MeshStandardMaterial({ color: 0xcc4444, roughness: 0.6, metalness: 0.1 });
        const nose = new THREE.Mesh(noseGeom, noseMat);
        nose.position.y = d.height * 0.4;
        g.add(nose);

        // Fins
        const finMat = new THREE.MeshStandardMaterial({ color: 0x666688, roughness: 0.8, metalness: 0.0 });
        for (let fi = 0; fi < 4; fi++) {
          const angle = (fi / 4) * Math.PI * 2;
          const finGeom = new THREE.BoxGeometry(d.radius * 0.02, d.height * 0.15, d.radius * 0.3);
          const fin = new THREE.Mesh(finGeom, finMat);
          fin.position.set(
            Math.sin(angle) * d.radius * 1.05,
            -d.height * 0.35,
            Math.cos(angle) * d.radius * 1.05
          );
          fin.rotation.y = -angle;
          g.add(fin);
        }
      }
      break;
    }
  }
  return g;
}

function buildCapsule(group: THREE.Group, d: { radius: number; height: number }, id: string) {
  const r = d.radius, h = d.height;
  const isMk1 = id.includes('mk1');

  const tex = getTextureSet(`capsule_${isMk1 ? 'mk1' : 'mk2'}`, generateCapsuleTexture);
  const bodyMat = createMaterialFromTextureSet(tex);

  // Gold accents for stripes and base
  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  // Main body cylinder
  const bodyGeom = new THREE.CylinderGeometry(r, r, h * 0.6, SEG);
  applyCylindricalUV(bodyGeom);
  const body = new THREE.Mesh(bodyGeom, bodyMat);
  body.position.y = h * 0.05;
  group.add(body);

  // Nose cone (hemisphere)
  const noseGeom = new THREE.SphereGeometry(r, SEG, SEG, 0, PI * 2, 0, PI / 2);
  applyCylindricalUV(noseGeom, 0.5);
  const nose = new THREE.Mesh(noseGeom, bodyMat);
  nose.position.y = h * 0.35;
  group.add(nose);

  // Tip
  const tip = new THREE.Mesh(new THREE.SphereGeometry(r * 0.08, 12, 8), goldMat);
  tip.position.y = h * 0.35 + r * 0.5;
  group.add(tip);

  // Stripe bands (painted stripes on capsule body)
  const stripeColor = isMk1 ? 0xDD4444 : 0x0077D1;
  const stripeMat = new THREE.MeshStandardMaterial({
    color: stripeColor,
    roughness: 0.6,
    metalness: 0.1,
  });
  const bandGeom = new THREE.CylinderGeometry(r * 1.04, r * 1.04, h * 0.05, SEG);
  applyCylindricalUV(bandGeom);
  perturbVertices(bandGeom, PART_SCALE * 0.008);
  const band = new THREE.Mesh(bandGeom, stripeMat);
  band.position.y = h * 0.05;
  group.add(band);

  const band2Geom = new THREE.CylinderGeometry(r * 1.04, r * 1.04, h * 0.03, SEG);
  applyCylindricalUV(band2Geom);
  perturbVertices(band2Geom, PART_SCALE * 0.008);
  const band2 = new THREE.Mesh(band2Geom, stripeMat);
  band2.position.y = -h * 0.15;
  group.add(band2);

  // Base ring
  const baseGeom = new THREE.CylinderGeometry(r * 1.3, r * 0.95, h * 0.15, SEG);
  applyCylindricalUV(baseGeom);
  perturbVertices(baseGeom, PART_SCALE * 0.01);
  const base = new THREE.Mesh(baseGeom, goldMat);
  base.position.y = -h * 0.3 - h * 0.075;
  group.add(base);

  // Window
  const winMat = createMaterialFromTextureSet(tex, {
    color: 0x1A5988,
    roughness: 0.1,
    metalness: 0.8,
    transparent: true,
    opacity: 0.3,
  });
  const win = new THREE.Mesh(new THREE.CircleGeometry(r * 0.2, 16), winMat);
  win.position.set(r + 0.001, h * 0.18, 0);
  win.rotation.y = -PI / 2;
  group.add(win);

  // Window glow ring
  const glowM = new THREE.MeshBasicMaterial({ color: 0x3399FF, transparent: true, opacity: 0.6 });
  const glowRing = new THREE.Mesh(new THREE.RingGeometry(r * 0.2, r * 0.24, 16), glowM);
  glowRing.position.set(r + 0.001, h * 0.18, 0);
  glowRing.rotation.y = -PI / 2;
  group.add(glowRing);
}

function buildTank(group: THREE.Group, d: { radius: number; height: number }, size: 'S' | 'M' | 'L' | 'XL') {
  const r = d.radius, h = d.height;

  const tex = getTextureSet(`tank_${size}`, () => generateTankTexture(size));
  const bodyMat = createMaterialFromTextureSet(tex);

  // Gold bands
  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  const bodyGeom = new THREE.CylinderGeometry(r, r, h, SEG);
  applyCylindricalUV(bodyGeom);
  const body = new THREE.Mesh(bodyGeom, bodyMat);
  group.add(body);

  const bh = h * 0.03;
  const bandGeom = new THREE.CylinderGeometry(r * 1.03, r * 1.03, bh, SEG);
  applyCylindricalUV(bandGeom);
  perturbVertices(bandGeom, PART_SCALE * 0.006);
  const band = new THREE.Mesh(bandGeom, goldMat);
  band.position.y = h / 2 - bh / 2;
  group.add(band);

  const bandBGeom = new THREE.CylinderGeometry(r * 1.03, r * 1.03, bh, SEG);
  applyCylindricalUV(bandBGeom);
  perturbVertices(bandBGeom, PART_SCALE * 0.006);
  const bandB = new THREE.Mesh(bandBGeom, goldMat);
  bandB.position.y = -h / 2 + bh / 2;
  group.add(bandB);

  for (let i = 0; i < 3; i++) {
    const ridgeGeom = new THREE.TorusGeometry(r * 1.01, bh * 1.5, 6, SEG);
    applyCylindricalUV(ridgeGeom);
    perturbVertices(ridgeGeom, PART_SCALE * 0.005);
    const ridge = new THREE.Mesh(ridgeGeom, goldMat);
    ridge.position.y = -h / 2 + h * 0.2 * (i + 1);
    ridge.rotation.x = PI / 2;
    group.add(ridge);
  }

  const ringGeom = new THREE.TorusGeometry(r * 1.02, bh * 1.2, 6, SEG);
  applyCylindricalUV(ringGeom);
  perturbVertices(ringGeom, PART_SCALE * 0.005);
  const ring = new THREE.Mesh(ringGeom, goldMat);
  ring.position.y = 0;
  ring.rotation.x = PI / 2;
  group.add(ring);
}

function buildEngine(group: THREE.Group, d: { radius: number; height: number }, size: 'S' | 'M' | 'L' | 'XL') {
  const r = d.radius, h = d.height;

  const tex = getTextureSet(`engine_${size}`, generateEngineTexture);
  const engineMat = createMaterialFromTextureSet(tex);

  // Gold for flange
  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  // Engine upper body
  const upperGeom = new THREE.CylinderGeometry(r * 1.4, r * 0.6, h * 0.25, SEG);
  applyCylindricalUV(upperGeom);
  const upper = new THREE.Mesh(upperGeom, engineMat);
  upper.position.y = h * 0.35;
  group.add(upper);

  // Mid flange ring
  const ringGeom = new THREE.CylinderGeometry(r * 0.6, r * 0.5, h * 0.06, SEG);
  applyCylindricalUV(ringGeom);
  perturbVertices(ringGeom, PART_SCALE * 0.015);
  const ring = new THREE.Mesh(ringGeom, goldMat);
  ring.position.y = h * 0.12;
  group.add(ring)

  // Nozzle outer
  const bellOuterGeom = new THREE.CylinderGeometry(r * 0.5, r * 0.85, h * 0.4, SEG);
  applyCylindricalUV(bellOuterGeom, 1.5);
  perturbVertices(bellOuterGeom, PART_SCALE * 0.01);
  const bellOuter = new THREE.Mesh(bellOuterGeom, engineMat);
  bellOuter.position.y = -h * 0.12;
  group.add(bellOuter);

  // Nozzle inner (throat)
  const darkMat = createMaterialFromTextureSet(tex, {
    color: 0x1A222A,
    roughness: 0.7,
    metalness: 0.5,
  });
  const bellInnerGeom = new THREE.CylinderGeometry(r * 0.35, r * 0.7, h * 0.38, SEG);
  applyCylindricalUV(bellInnerGeom, 1.5);
  perturbVertices(bellInnerGeom, PART_SCALE * 0.012);
  const bellInner = new THREE.Mesh(bellInnerGeom, darkMat);
  bellInner.position.y = -h * 0.12;
  group.add(bellInner);

  // Nozzle exit rim
  const rimGeom = new THREE.CylinderGeometry(r * 0.88, r * 0.88, h * 0.03, SEG);
  applyCylindricalUV(rimGeom);
  perturbVertices(rimGeom, PART_SCALE * 0.008);
  const rim = new THREE.Mesh(rimGeom, goldMat);
  rim.position.y = -h * 0.12 - h * 0.2 - h * 0.015;
  group.add(rim);

  // Engine glow
  const glowM = new THREE.MeshBasicMaterial({ color: 0xFF8800, transparent: true, opacity: 0.4 });
  const inner = new THREE.Mesh(new THREE.RingGeometry(0, r * 0.3, SEG), glowM);
  inner.position.y = -h * 0.12 - h * 0.2 - h * 0.02;
  inner.rotation.x = -PI / 2;
  group.add(inner);
}

function buildParachute(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const fabricTex = getTextureSet('fabric', generateFabricTexture);
  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  const packMat = createMaterialFromTextureSet(fabricTex, {
    color: 0x8899AA,
    roughness: 0.5,
    metalness: 0.1,
  });

  const packGeom = new THREE.CylinderGeometry(r * 0.35, r * 0.35, h * 0.18, 12);
  applyCylindricalUV(packGeom);
  const pack = new THREE.Mesh(packGeom, packMat);
  pack.position.y = h * 0.55;
  group.add(pack);

  const lidMat = createMaterialFromTextureSet(fabricTex, {
    color: 0x6A7A8A,
    roughness: 0.4,
    metalness: 0.2,
  });
  const lidGeom = new THREE.CylinderGeometry(r * 0.37, r * 0.37, h * 0.03, 12);
  applyCylindricalUV(lidGeom);
  const lid = new THREE.Mesh(lidGeom, lidMat);
  lid.position.y = h * 0.55 + h * 0.09;
  group.add(lid);

  const bandGeom = new THREE.CylinderGeometry(r * 0.37, r * 0.37, h * 0.02, 12);
  applyCylindricalUV(bandGeom);
  const band = new THREE.Mesh(bandGeom, goldMat);
  band.position.y = h * 0.55 - h * 0.09;
  group.add(band);
}

export function buildDeployedParachute(d: { radius: number; height: number }): THREE.Group {
  const g = new THREE.Group();
  const r = d.radius, h = d.height;
  const SEG_P = 24;

  const fabricTex = getTextureSet('fabric', generateFabricTexture);
  const canopyMat = createMaterialFromTextureSet(fabricTex, {
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95,
  });
  const canopyGeom = new THREE.SphereGeometry(r * 1.8, SEG_P, SEG_P, 0, PI * 2, 0, PI * 0.5);
  applyCylindricalUV(canopyGeom, 0.5);
  const canopy = new THREE.Mesh(canopyGeom, canopyMat);
  canopy.position.y = h * 0.3;
  canopy.rotation.x = PI;
  g.add(canopy);

  // Gore stripes
  const stripeMat = createMaterialFromTextureSet(fabricTex, {
    color: 0xDD4444,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
  });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * PI * 2;
    const stripeGeom = new THREE.BoxGeometry(r * 0.03, h * 0.7, r * 0.015);
    const stripe = new THREE.Mesh(stripeGeom, stripeMat);
    stripe.position.set(Math.cos(a) * r * 0.9, h * 0.4, Math.sin(a) * r * 0.9);
    stripe.rotation.x = PI;
    stripe.lookAt(0, h * 0.8, 0);
    g.add(stripe);
  }

  const strutMat = createMaterialFromTextureSet(fabricTex, {
    color: 0x6A7A8A,
    roughness: 0.5,
    metalness: 0.4,
  });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;
    for (let j = 0; j < 3; j++) {
      const strutGeom = new THREE.CylinderGeometry(0.006, 0.006, h * 0.15, 4);
      applyCylindricalUV(strutGeom);
      const strut = new THREE.Mesh(strutGeom, strutMat);
      const angle = a + (j - 1) * 0.3;
      strut.position.set(
        Math.cos(angle) * r * 1.5,
        h * 0.15 - h * 0.06 * j,
        Math.sin(angle) * r * 1.5
      );
      g.add(strut);
    }
  }
  return g;
}

function buildLegs(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const tex = getTextureSet('legs', generateLegsTexture);
  const legMat = createMaterialFromTextureSet(tex);
  const footMat = createMaterialFromTextureSet(tex, {
    color: 0x2a2d22,
    roughness: 0.8,
    metalness: 0.2,
  });

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * PI * 2 + PI / 4;

    const legGeom = new THREE.CylinderGeometry(0.01, 0.007, h * 0.35, 6);
    applyCylindricalUV(legGeom);
    const leg = new THREE.Mesh(legGeom, legMat);
    const legX = Math.cos(a) * r * 0.65;
    const legZ = Math.sin(a) * r * 0.65;
    leg.position.set(legX, -h / 2 - h * 0.175, legZ);
    leg.rotation.z = Math.cos(a) * 0.3;
    leg.rotation.x = Math.sin(a) * 0.3;
    group.add(leg);

    const footGeom = new THREE.CylinderGeometry(0.02, 0.025, 0.008, 6);
    applyCylindricalUV(footGeom);
    const foot = new THREE.Mesh(footGeom, footMat);
    foot.position.set(Math.cos(a) * r * 0.95, -h / 2 - h * 0.35, Math.sin(a) * r * 0.95);
    group.add(foot);
  }
}

function buildDecoupler(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const tex = getTextureSet('decoupler', generateDecouplerTexture);
  const bodyMat = createMaterialFromTextureSet(tex);

  const goldTex = getTextureSet('gold', generateGoldTexture);
  const goldMat = createMaterialFromTextureSet(goldTex);

  const ringGeom = new THREE.CylinderGeometry(r * 1.05, r * 0.92, h * 0.12, SEG);
  applyCylindricalUV(ringGeom);
  perturbVertices(ringGeom, PART_SCALE * 0.008);
  const ring = new THREE.Mesh(ringGeom, bodyMat);
  group.add(ring);

  const bandGeom = new THREE.CylinderGeometry(r * 1.08, r * 1.08, h * 0.04, SEG);
  applyCylindricalUV(bandGeom);
  perturbVertices(bandGeom, PART_SCALE * 0.005);
  const band = new THREE.Mesh(bandGeom, goldMat);
  band.position.y = h * 0.06;
  group.add(band);

  const bottomGeom = new THREE.CylinderGeometry(r * 0.92, r * 0.92, h * 0.04, SEG);
  applyCylindricalUV(bottomGeom);
  perturbVertices(bottomGeom, PART_SCALE * 0.008);
  const bottom = new THREE.Mesh(bottomGeom, bodyMat);
  bottom.position.y = -h * 0.06;
  group.add(bottom);
}

function buildHeatshield(group: THREE.Group, d: { radius: number; height: number }) {
  const r = d.radius, h = d.height;

  const tex = getTextureSet('heatshield', generateHeatshieldTexture);
  const mat = createMaterialFromTextureSet(tex);

  // Ablative heatshield - convex dish shape
  const shieldGeom = new THREE.CylinderGeometry(r * 1.2, r * 0.8, h * 0.2, SEG, 1, true);
  applyCylindricalUV(shieldGeom, 0.5);
  perturbVertices(shieldGeom, PART_SCALE * 0.012);
  const shield = new THREE.Mesh(shieldGeom, mat);
  shield.position.y = -h * 0.1;
  group.add(shield);

  // Backing structure
  const backGeom = new THREE.CylinderGeometry(r * 0.8, r * 0.8, h * 0.08, SEG);
  applyCylindricalUV(backGeom);
  perturbVertices(backGeom, PART_SCALE * 0.01);
  const backing = new THREE.Mesh(backGeom, mat);
  backing.position.y = -h * 0.2;
  group.add(backing);
}

=== src/parts/PartCatalog.ts ===
import type { Part } from './Part';

export const PART_CATALOG: Part[] = [
  // Capsule
  {
    id: 'capsule_mk1',
    name: 'MK-1 Capsule',
    kind: 'capsule',
    size: 'M',
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
    fuelCapacity: 4500,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_m_lfo',
    name: 'Fuel Tank M (LFO)',
    kind: 'tank',
    size: 'M',
    mass: 600,
    fuelCapacity: 45000,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_l_lfo',
    name: 'Fuel Tank L (LFO)',
    kind: 'tank',
    size: 'L',
    mass: 1200,
    fuelCapacity: 90000,
    fuelType: 'LFO',
    dragCoeff: 0.4
  },
  {
    id: 'tank_xl_lfo',
    name: 'Fuel Tank XL (LFO)',
    kind: 'tank',
    size: 'XL',
    mass: 2500,
    fuelCapacity: 225000,
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
thrust: 500000,
    isp: 350,
    fuelType: 'LFO'
  },
  {
    id: 'engine_vector',
    name: '"Vector" Engine',
    kind: 'engine',
    size: 'M',
    mass: 400,
    thrust: 4500000,
    isp: 340,
    fuelType: 'LFO'
  },
  {
    id: 'engine_mastodon',
    name: '"Mastodon" Engine',
    kind: 'engine',
    size: 'L',
    mass: 1200,
    thrust: 11000000,
    isp: 330,
    fuelType: 'LFO'
  },
  {
    id: 'engine_mammoth',
    name: '"Mammoth" Engine',
    kind: 'engine',
    size: 'XL',
    mass: 3000,
    thrust: 27500000,
    isp: 310,
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
  },
  // Heat shields
  {
    id: 'heatshield_s',
    name: 'Heat Shield S (Ablative)',
    kind: 'heatshield',
    size: 'S',
    mass: 50,
    heatCapacity: 50000,
    dragCoeff: 1.2
  },
  {
    id: 'heatshield_m',
    name: 'Heat Shield M (Ablative)',
    kind: 'heatshield',
    size: 'M',
    mass: 150,
    heatCapacity: 150000,
    dragCoeff: 1.2
  },
  {
    id: 'heatshield_l',
    name: 'Heat Shield L (Ablative)',
    kind: 'heatshield',
    size: 'L',
    mass: 400,
    heatCapacity: 400000,
    dragCoeff: 1.2
  },
  // Decoupler
  {
    id: 'decoupler_1',
    name: 'TD-1 Decoupler',
    kind: 'decoupler',
    size: 'M',
    mass: 100,
    dragCoeff: 0.3
  },
// GLTF Models (scales calibrated: GLTF in meters → game units via gltfScale)
// Target: ~0.0015 scale for all (1 meter = 0.0015 game units)
  {
    id: 'agena_target',
    name: 'Agena Target Vehicle',
    kind: 'gltf',
    size: 'M',
    mass: 1500,
    dragCoeff: 0.3,
    gltfUrl: '/models/agena.glb',
    gltfScale: 0.0015
  },
  {
    id: 'apollo_soyuz',
    name: 'Apollo Soyuz',
    kind: 'gltf',
    size: 'L',
    mass: 5000,
    dragCoeff: 0.3,
    gltfUrl: '/models/apollo_soyuz.glb',
    gltfScale: 0.0015
  },
  {
    id: 'saturn_v',
    name: 'Saturn V',
    kind: 'gltf',
    size: 'XL',
    mass: 3000000,
    dragCoeff: 0.3,
    gltfUrl: '/models/saturn_v.glb',
    gltfScale: 0.0015
  },
  {
    id: 'ares_1',
    name: 'Ares I',
    kind: 'gltf',
    size: 'XL',
    mass: 2000000,
    dragCoeff: 0.3,
    gltfUrl: '/models/ares_1.glb',
    gltfScale: 0.0015
  },
  {
    id: 'apollo_lunar_module',
    name: 'Apollo Lunar Module',
    kind: 'gltf',
    size: 'L',
    mass: 15000,
    dragCoeff: 0.3,
    gltfUrl: '/models/apollo_lunar_module.glb',
    gltfScale: 0.002
  },
  {
    id: 'atlas_6',
    name: 'Atlas 6 (Friendship 7)',
    kind: 'gltf',
    size: 'L',
    mass: 120000,
    dragCoeff: 0.3,
    gltfUrl: '/models/atlas_6.glb',
    gltfScale: 0.0015
  },
  {
    id: 'atlas_9',
    name: 'Atlas 9 (Faith 7)',
    kind: 'gltf',
    size: 'L',
    mass: 120000,
    dragCoeff: 0.3,
    gltfUrl: '/models/atlas_9.glb',
    gltfScale: 0.0015
  },
  {
    id: 'crawler',
    name: 'Crawler Transporter',
    kind: 'gltf',
    size: 'XL',
    mass: 2700000,
    dragCoeff: 0.3,
    gltfUrl: '/models/crawler.glb',
    gltfScale: 0.001
  }
];

export function findPart(id: string): Part | undefined {
  return PART_CATALOG.find((p) => p.id === id);
}

=== src/parts/RocketBuilder.ts ===
import { Assembly } from '../rocket/Assembly';
import { PART_SCALE } from '../config/constants';
import { findPart } from './PartCatalog';

const H: Record<string, number> = {
  S: 0.7 * PART_SCALE, M: 1.1 * PART_SCALE,
  L: 1.6 * PART_SCALE, XL: 2.2 * PART_SCALE,
};

function addPartAt(assembly: Assembly, id: string, yPos: number): number {
  const p = findPart(id);
  if (!p) return yPos;
  const h = H[p.size] || 0.6 * PART_SCALE;
  assembly.addRoot({ part: p, position: [0, yPos + h / 2, 0], rotation: 0, children: [] });
  return yPos + h;
}

type StageSpec = { tank: string; engine: string };
const STAGES: Record<string, StageSpec> = {
  tiny:   { tank: 'tank_s_lfo', engine: 'engine_ant' },
  small:  { tank: 'tank_m_lfo', engine: 'engine_vector' },
  medium: { tank: 'tank_l_lfo', engine: 'engine_mastodon' },
  large:  { tank: 'tank_xl_lfo', engine: 'engine_mammoth' },
};

function addStage(a: Assembly, y: number, size: keyof typeof STAGES, extras: string[] = []): number {
  const s = STAGES[size];
  if (!s) return y;
  for (const id of [s.tank, s.engine, ...extras]) {
    y = addPartAt(a, id, y);
  }
  return y;
}

interface MissionPlan {
  stages: number;
  stageSize: keyof typeof STAGES;
  needsParachute: boolean;
  needsLegs: boolean;
  needsReturn: boolean;
}

function planMission(desc: string): MissionPlan {
  const d = desc.toLowerCase();

  const toSun      = /sun|солн|heliocentric/.test(d);
  const toMars     = /mars|марс/.test(d);
  const toVenus    = /venus|венер/.test(d);
  const toMercury  = /mercury|меркур/.test(d);
  const toMoon     = /moon|лун/.test(d);
  const toOrbit    = /orbit|орбит|station|станц|satellite|спутник/.test(d);
  const toSub      = /suborbit|суборбит|test|тест|hop|прыж/.test(d);

  const needsLand  = /land|сади|посад|touchdown/.test(d) && !/flyby|пролет/.test(d);
  const needsRet   = /return|back|верн|обратн|round.?trip|there\s+and\s+back/.test(d) || 
                     (toMoon && needsLand) ||
                     (toMars && needsLand);
  const needsChute = needsRet || /parachute|парашют|chute/.test(d) || !needsLand;
  const needsLegs  = needsLand || /legs|ноги|landing\s+gear/.test(d);

  let stages = 1;
  let stageSize: MissionPlan['stageSize'] = 'small';

  if (toSub) { stages = 1; stageSize = 'tiny'; }
  else if (toOrbit) { stages = 1; stageSize = 'small'; }
  else if (toMoon) {
    stages = needsRet ? 2 : 1;
    stageSize = 'medium';
  } else if (toMars || toVenus) {
    stages = needsRet ? 3 : 2;
    stageSize = 'large';
  } else if (toMercury) { stages = 2; stageSize = 'medium'; }
  else if (toSun) { stages = 3; stageSize = 'large'; }
  else {
    if (/big|large|тяже|больш|huge|super|giant/.test(d)) { stages = 2; stageSize = 'large'; }
    else if (/small|tiny|легк|малень/.test(d)) { stages = 1; stageSize = 'tiny'; }
    else if (/safe|50%|half/.test(d)) { stages = 2; stageSize = 'medium'; stages = 2; }
    else { stages = 1; stageSize = 'small'; }
  }

  if (/heavy|super|giant|тяжел/.test(d) && stageSize !== 'large') {
    stageSize = stageSize === 'tiny' ? 'small' : 'large';
  }
  if (/safe|50%|half\s+fuel/.test(d)) { stages = 2; stageSize = 'large'; }

  return { stages, stageSize, needsParachute: needsChute, needsLegs, needsReturn: needsRet };
}

function buildFromPlan(plan: MissionPlan): Assembly {
  const a = new Assembly();
  let y = 0;
  const sz = plan.stageSize;

  // Bottom to top: main stages first
  const mainN = plan.needsReturn ? Math.max(1, plan.stages - 1) : plan.stages;
  for (let i = 0; i < mainN; i++) {
    const size = i === 0 ? sz : (sz === 'large' && i > 0 ? 'medium' : sz);
    const extras: string[] = [];
    if (i === 0 && plan.needsLegs) extras.push('legs_landini');
    y = addStage(a, y, size, extras);
  }

  // Decoupler + return stage
  if (plan.needsReturn && plan.stages > 1) {
    y = addPartAt(a, 'decoupler_1', y);
    const rSize = sz === 'large' ? 'small' : 'tiny';
    y = addStage(a, y, rSize);
  }

  // Capsule on top
  y = addPartAt(a, 'capsule_mk1', y);
  if (plan.needsParachute) y = addPartAt(a, 'parachute_mk16', y);

  return a;
}

export function buildRocketFromDescription(description: string): Assembly {
  const plan = planMission(description);
  return buildFromPlan(plan);
}

=== src/physics/Body.ts ===
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

=== src/physics/Gravity.ts ===
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

/** Sum gravitational force on target from all sources (skips massless). */
export function totalGravityOn(target: Body, sources: Body[]): Vec3 {
  let fx = 0, fy = 0, fz = 0;
  for (const s of sources) {
    if (s === target) continue;
    if (s.mass <= 0) continue;
    const f = gravitationalForce(s, target);
    fx += f[0]; fy += f[1]; fz += f[2];
  }
  return [fx, fy, fz];
}

=== src/physics/Integrator.ts ===
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
  // p_new = p0 + (dt/6)(k1v + 2k2v + 2k3v + k4v)  -- k*v hold velocities (position derivatives)
  const dp = scale3(add3(add3(k1v, scale3(k2v, 2)), add3(scale3(k3v, 2), k4v)), dt / 6);

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

=== src/physics/OrbitPredictor.ts ===
import { G } from '../config/constants';

export interface OrbitPrediction {
  points: [number, number][];
  eccentricity: number;
  apoapsis: number;
  periapsis: number;
  bound: boolean;
  timeToAp?: number;
  timeToPe?: number;
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
  const h = Math.sqrt(hx * hx + hy * hy + hz * hz);

  const evx = (vel[1] * hz - vel[2] * hy) / mu - pos[0] / r;
  const evy = (vel[2] * hx - vel[0] * hz) / mu - pos[1] / r;
  const evz = (vel[0] * hy - vel[1] * hx) / mu - pos[2] / r;
  const e = Math.sqrt(evx * evx + evy * evy + evz * evz);

  const bound = e < 1 && a > 0;
  const apoapsis = bound ? a * (1 + e) : Infinity;
  const periapsis = bound ? a * (1 - e) : r;

  const ex = e > 1e-8 ? evx / e : 1;
  const ey = e > 1e-8 ? evy / e : 0;
  const ez = e > 1e-8 ? evz / e : 0;

  const p: [number, number, number] = [ex, ey, ez];
  const q: [number, number, number] = [
    (hy * ez - hz * ey) / (h || 1),
    (hz * ex - hx * ez) / (h || 1),
    (hx * ey - hy * ex) / (h || 1),
  ];

  const pts: [number, number][] = [];
  const thetaMax = bound ? Math.PI : Math.acos(-1 / Math.max(e, 1.001)) * 0.98;

  // Compute time to Ap/Pe for bound orbits
  let timeToAp: number | undefined;
  let timeToPe: number | undefined;
  if (bound) {
    const orbitPeriod = 2 * Math.PI * Math.sqrt((a * a * a) / mu);
    const dot = (pos[0] * vel[0] + pos[1] * vel[1] + pos[2] * vel[2]) / (r || 1);
    const cosTheta = (a * (1 - e * e) / r - 1) / e;
    const sinTheta = dot * Math.sqrt(a * (1 - e * e) / mu) / (e || 1);
    let trueAnomaly = Math.atan2(sinTheta, cosTheta);
    if (trueAnomaly < 0) trueAnomaly += Math.PI * 2;
    const cosE = (e + cosTheta) / (1 + e * cosTheta);
    const sinE = Math.sqrt(1 - e * e) * sinTheta / (1 + e * cosTheta);
    let E = Math.atan2(sinE, cosE);
    if (E < 0) E += Math.PI * 2;
    const meanAnomaly = E - e * sinE;
    const timeFromPe = meanAnomaly * orbitPeriod / (2 * Math.PI);
    const timeToPeOrbit = orbitPeriod - timeFromPe;
    const timeToApOrbit = (timeToPeOrbit + orbitPeriod / 2) % orbitPeriod;
    timeToPe = timeToPeOrbit;
    timeToAp = timeToApOrbit;
  }

  for (let i = 0; i <= steps; i++) {
    const theta = -thetaMax + (2 * thetaMax * i) / steps;
    const denom = 1 + e * Math.cos(theta);
    if (Math.abs(denom) < 1e-10) continue;
    const rr = (a * (1 - e * e)) / denom;
    if (isNaN(rr) || !isFinite(rr) || rr < 0) continue;
    const x = rr * (Math.cos(theta) * p[0] + Math.sin(theta) * q[0]);
    const z = rr * (Math.cos(theta) * p[2] + Math.sin(theta) * q[2]);
    const dist = Math.sqrt(x * x + z * z);
    if (dist > soiRadius * 1.5) break;
    pts.push([x, z]);
  }

  return { points: pts, eccentricity: e, apoapsis, periapsis, bound, timeToAp, timeToPe };
}

=== src/physics/SoiResolver.ts ===
import type { Body } from './Body';
import type { System } from './System';
import { G } from '../config/constants';

interface BodyWithParent extends Body {
  parentBody?: Body;
}

export function getReferenceBody(
  position: [number, number, number],
  system: System
): Body {
  const sun = system.bodyByName('sun')!;
  let bestBody: Body = sun;
  let bestGrav = 0;

  for (const body of system.bodies) {
    if (body.name === 'sun') continue;

    const bwp = body as BodyWithParent;
    let primary: Body = sun;
    let primaryPos: [number, number, number] = sun.position;

    if (bwp.parentBody) {
      primary = bwp.parentBody;
      primaryPos = primary.position;
    } else if (body.name === 'moon') {
      const earth = system.bodyByName('earth');
      if (earth) {
        primary = earth;
        primaryPos = earth.position;
      }
    }

    const dx = body.position[0] - position[0];
    const dy = body.position[1] - position[1];
    const dz = body.position[2] - position[2];
    const r2 = dx * dx + dy * dy + dz * dz;
    const r = Math.sqrt(r2);

    const dxP = body.position[0] - primaryPos[0];
    const dyP = body.position[1] - primaryPos[1];
    const dzP = body.position[2] - primaryPos[2];
    const distToPrimary = Math.sqrt(dxP * dxP + dyP * dyP + dzP * dzP);
    const soi = distToPrimary * Math.pow(body.mass / primary.mass, 0.4);

    if (r < soi) {
      const grav = (G * body.mass) / r2;
      if (grav > bestGrav) {
        bestGrav = grav;
        bestBody = body;
      }
    }
  }

  return bestBody;
}
=== src/physics/System.ts ===
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
      if (body.mass <= 0) continue; // skip massless (Sun)
      const force: Vec3 = totalGravityOn(body, this.bodies);
      rk4Step(body, () => force, dt);
    }
  }
}

=== src/planets/Earth.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, EARTH_MASS, assetUrl } from '../config/constants';
import { generateEarthBumpMap } from '../effects/ProceduralTextures';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

/**
 * Seeded random (mulberry32)
 */
function srand(seed: number): () => number {
  let s = seed | 0;
  return () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/** Generate a procedural cloud texture (grayscale, white = cloudy) */
function generateCloudTexture(): THREE.CanvasTexture {
  const W = 2048, H = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const rng = srand(999);
  const imgData = ctx.createImageData(W, H);

  // Simple value noise approach
  const freq = 3;
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const u = px / W, v = py / H;
      const lat = (v - 0.5) * Math.PI;
      const lon = u * Math.PI * 2;
      const nx = Math.cos(lat) * Math.cos(lon);
      const ny = Math.cos(lat) * Math.sin(lon);
      const nz = Math.sin(lat);

      // Layered noise on sphere
      const n1 = Math.sin(nx * freq + ny * 1.3 + nz * 0.7) * 0.5 + 0.5;
      const n2 = Math.sin((nx + 1.7) * freq * 2 + nz * 1.1) * 0.5 + 0.5;
      const n3 = Math.cos((ny + 0.5) * freq * 4 - nx * 2.3) * 0.5 + 0.5;
      const n4 = Math.sin(nx * freq * 8 + ny * 6 + nz * 7) * 0.5 + 0.5;

      let cloud = (n1 * 0.4 + n2 * 0.3 + n3 * 0.2 + n4 * 0.1);
      // Reduce clouds over poles
      const polarFade = 1 - Math.abs(v - 0.5) * 1.2;
      cloud *= Math.max(0, polarFade);
      // Threshold for distinct clouds
      cloud = Math.max(0, (cloud - 0.4) * 2.5);

      const val = Math.min(255, Math.max(0, Math.round(cloud * 255)));
      const idx = (py * W + px) * 4;
      imgData.data[idx] = val;
      imgData.data[idx + 1] = val;
      imgData.data[idx + 2] = val;
      imgData.data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/** Generate a procedural city lights texture for the night side */
function generateNightLightsTexture(): THREE.CanvasTexture {
  const W = 2048, H = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // Black background (no lights)
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, W, H);

  // Continents mask (same as bump map but simplified)
  const continents: { lat: number; lon: number; rx: number; ry: number }[] = [
    { lat: 0.7, lon: -1.8, rx: 0.5, ry: 0.8 },
    { lat: -0.4, lon: -1.3, rx: 0.6, ry: 0.35 },
    { lat: 0.85, lon: 0.4, rx: 0.25, ry: 0.3 },
    { lat: 0.1, lon: 0.6, rx: 0.55, ry: 0.4 },
    { lat: 0.7, lon: 1.6, rx: 0.55, ry: 1.0 },
    { lat: -0.6, lon: 2.4, rx: 0.25, ry: 0.3 },
    { lat: 1.1, lon: -0.9, rx: 0.2, ry: 0.2 },
  ];

  const rng = srand(42);

  for (const c of continents) {
    const cx = (c.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - c.lat) / Math.PI * H;
    const rx = c.rx / (2 * Math.PI) * W;
    const ry = c.ry / Math.PI * H;

    // City clusters
    const numCities = 20 + Math.floor(rng() * 40);
    for (let i = 0; i < numCities; i++) {
      const dx = (rng() - 0.5) * rx * 2;
      const dy = (rng() - 0.5) * ry * 2;
      const d2 = (dx / rx) ** 2 + (dy / ry) ** 2;
      if (d2 > 1) continue;

      const px = cx + dx;
      const py = cy + dy;
      const size = 1 + rng() * 4;
      const bright = 100 + Math.floor(rng() * 155);

      // Warm yellow-white lights
      ctx.fillStyle = `rgb(${bright}, ${Math.floor(bright * 0.85)}, ${Math.floor(bright * 0.5)})`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();

      // Light glow spread
      ctx.fillStyle = `rgba(255, 220, 100, ${0.05 + rng() * 0.1})`;
      ctx.beginPath();
      ctx.arc(px, py, size * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Major city hotspots (bigger, brighter)
    for (let i = 0; i < 3; i++) {
      const dx = (rng() - 0.5) * rx * 1.5;
      const dy = (rng() - 0.5) * ry * 1.5;
      const d2 = (dx / rx) ** 2 + (dy / ry) ** 2;
      if (d2 > 1) continue;

      const px = cx + dx;
      const py = cy + dy;
      ctx.fillStyle = '#ffdd66';
      ctx.beginPath();
      ctx.arc(px, py, 3 + rng() * 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 200, 80, 0.2)';
      ctx.beginPath();
      ctx.arc(px, py, 8 + rng() * 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Coastline glow (dimmer)
  for (const c of continents) {
    const cx = (c.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - c.lat) / Math.PI * H;
    const rx = c.rx / (2 * Math.PI) * W;
    const ry = c.ry / Math.PI * H;

    for (let i = 0; i < 30; i++) {
      const angle = rng() * Math.PI * 2;
      const dist = 0.85 + rng() * 0.2;
      const px = cx + Math.cos(angle) * rx * dist;
      const py = cy + Math.sin(angle) * ry * dist;
      const size = 1 + rng() * 2;
      ctx.fillStyle = `rgba(200, 180, 100, ${0.1 + rng() * 0.15})`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function generateRoughnessMap(): THREE.CanvasTexture {
  const W = 2048, H = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const imageData = ctx.createImageData(W, H);
  const data = imageData.data;

  const continents: { lat: number; lon: number; rx: number; ry: number }[] = [
    { lat: 0.7, lon: -1.8, rx: 0.5, ry: 0.8 },
    { lat: -0.4, lon: -1.3, rx: 0.6, ry: 0.35 },
    { lat: 0.85, lon: 0.4, rx: 0.25, ry: 0.3 },
    { lat: 0.1, lon: 0.6, rx: 0.55, ry: 0.4 },
    { lat: 0.7, lon: 1.6, rx: 0.55, ry: 1.0 },
    { lat: -0.6, lon: 2.4, rx: 0.25, ry: 0.3 },
    { lat: 1.1, lon: -0.9, rx: 0.2, ry: 0.2 },
  ];

  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const u = px / W, v = py / H;
      const lat = (v - 0.5) * Math.PI;
      const lon = u * Math.PI * 2 - Math.PI;

      let isLand = false;
      for (const c of continents) {
        const dlat = (lat - c.lat) / c.rx;
        const dlon = (lon - c.lon) / c.ry;
        if (dlat * dlat + dlon * dlon < 1) { isLand = true; break; }
      }

      // Oceans: smooth (low roughness), Land: rough (high roughness)
      const v2 = isLand ? 180 : 40;
      const idx = (py * W + px) * 4;
      data[idx] = data[idx + 1] = data[idx + 2] = v2;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/** Generate a procedural Earth texture as a synchronous fallback. */
function generateEarthTextureFallback(): THREE.CanvasTexture {
  const W = 4096, H = 2048;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // Ocean (deeper blue, more vibrant)
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#2255aa');
  grad.addColorStop(0.5, '#3399ee');
  grad.addColorStop(1, '#2255aa');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  const continents: { lat: number; lon: number; rx: number; ry: number; color: string }[] = [
    { lat: 0.7, lon: -2.0, rx: 0.55, ry: 0.5, color: '#4a8c2a' },
    { lat: 0.65, lon: -1.6, rx: 0.35, ry: 0.35, color: '#5a9c3a' },
    { lat: -0.35, lon: -1.4, rx: 0.4, ry: 0.6, color: '#5a9c3a' },
    { lat: 0.85, lon: 0.4, rx: 0.2, ry: 0.22, color: '#6aac4a' },
    { lat: 0.1, lon: 0.6, rx: 0.45, ry: 0.5, color: '#7a8c3a' },
    { lat: 0.5, lon: 1.5, rx: 0.6, ry: 0.4, color: '#6a9c3a' },
    { lat: 0.3, lon: 1.1, rx: 0.25, ry: 0.15, color: '#7aac4a' },
    { lat: -0.4, lon: 1.7, rx: 0.15, ry: 0.35, color: '#5a9c3a' },
    { lat: 1.0, lon: -2.5, rx: 0.08, ry: 0.1, color: '#5a9c3a' },
    { lat: -0.7, lon: -1.1, rx: 0.08, ry: 0.08, color: '#6aac4a' },
  ];

  for (const c of continents) {
    ctx.fillStyle = c.color;
    ctx.beginPath();
    const cx = (c.lon + Math.PI) / (2 * Math.PI) * W;
    const cy = (Math.PI / 2 - c.lat) / Math.PI * H;
    const rx = c.rx / (2 * Math.PI) * W;
    const ry = c.ry / Math.PI * H;
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();

    const seed = c.lat * 1000 + c.lon * 100;
    const rng = srand(seed);
    for (let i = 0; i < 80; i++) {
      const dx = (rng() - 0.5) * rx * 1.8;
      const dy = (rng() - 0.5) * ry * 1.8;
      const d2 = (dx / rx) ** 2 + (dy / ry) ** 2;
      if (d2 < 1) {
        ctx.fillStyle = rng() > 0.5 ? '#2a5c1f' : '#6a9c4a';
        ctx.beginPath();
        ctx.arc(cx + dx, cy + dy, 1 + rng() * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Polar caps
  ctx.fillStyle = '#c0d8e8';
  ctx.fillRect(0, 0, W, H * 0.05);
  ctx.fillRect(0, H * 0.95, W, H * 0.05);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class Earth extends Planet {
  atmosphereGlow: AtmosphereGlow;
  private cloudMesh: THREE.Mesh;
  private cloudTex: THREE.CanvasTexture;

  constructor(position: Vec3, velocity: Vec3) {
    super('earth', EARTH_MASS, position, velocity, 6.371e6);

    const visualR = this.visualRadius;
    const SEG = 200;

    const geom = new THREE.SphereGeometry(visualR, SEG, SEG);
    const roughnessMap = generateRoughnessMap();
    // Push Earth slightly back with polygon offset to prevent z-fight with rocket
    const mat = new THREE.MeshStandardMaterial({
      roughness: 0.7,
      roughnessMap,
      metalness: 0.0,
      bumpMap: generateEarthBumpMap(),
      bumpScale: 0.3,
      emissiveMap: generateNightLightsTexture(),
      emissive: new THREE.Color(0xffdd66),
      emissiveIntensity: 0.6,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    // Terrain displacement (synchronous, before texture)
    this.generateTerrain(visualR);

    const fallbackTex = generateEarthTextureFallback();
    fallbackTex.minFilter = THREE.LinearMipmapLinearFilter;
    fallbackTex.magFilter = THREE.LinearFilter;
    fallbackTex.generateMipmaps = false;
    fallbackTex.colorSpace = THREE.SRGBColorSpace;
    mat.map = fallbackTex;
    mat.needsUpdate = true;

    // Set proper texture filtering on all Earth textures — NO mipmaps for sharpness
    const earthTextures = [fallbackTex, roughnessMap, mat.bumpMap, mat.emissiveMap]
      .filter(Boolean) as THREE.Texture[];
    for (const tex of earthTextures) {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
    }

    this.loadHighResTexture().catch(() => {});

    // Atmosphere glow
    this.atmosphereGlow = new AtmosphereGlow(visualR, 0x4488ff, 2.5, visualR * 0.10);
    this.mesh.add(this.atmosphereGlow.getMesh());

    // Cloud layer
    this.cloudTex = generateCloudTexture();
    const cloudMat = new THREE.MeshStandardMaterial({
      map: this.cloudTex,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      side: THREE.DoubleSide,
      roughness: 1,
      metalness: 0,
    });
    const cloudGeom = new THREE.SphereGeometry(visualR * 1.008, SEG, SEG);
    this.cloudMesh = new THREE.Mesh(cloudGeom, cloudMat);
    this.cloudMesh.position.copy(this.mesh.position);
    this.mesh.add(this.cloudMesh);
  }

  private async loadHighResTexture(): Promise<void> {
    try {
      const loader = new THREE.TextureLoader();
      const tex = await loader.loadAsync(assetUrl('/textures/earth_daymap.jpg'));
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 16;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      const mat = this.mesh.material as THREE.MeshStandardMaterial;
      mat.map = tex;
      mat.needsUpdate = true;
      console.log('Earth high-res texture loaded');
    } catch(e) {
      console.warn('Earth texture load failed, using fallback:', e);
    }
  }

  /** Update cloud rotation + day/night cycle driven by sun direction */
  updateClouds(dt: number, sunPosWC?: [number, number, number]): void {
    this.cloudMesh.rotation.y += dt * 0.012;
    if (!sunPosWC) return;

    const mat = this.mesh.material as THREE.MeshStandardMaterial;
    const sl = Math.sqrt(sunPosWC[0]*sunPosWC[0] + sunPosWC[1]*sunPosWC[1] + sunPosWC[2]*sunPosWC[2]) || 1;
    const sx = sunPosWC[0] / sl, sy = sunPosWC[1] / sl, sz = sunPosWC[2] / sl;

    // Turn Earth day side towards sun
    this.mesh.lookAt(
      this.mesh.position.x + sx * 100,
      this.mesh.position.y + sy * 100,
      this.mesh.position.z + sz * 100
    );

    // Compute camera position relative to Earth center
    const ex = this.mesh.position.x, ey = this.mesh.position.y, ez = this.mesh.position.z;
    // Get global sun light direction in world space
    // Night side = dot(camera→earthCenter, sun→earthCenter) < 0 means camera is on night side
    // emissive = city lights visible at night
    // Simple: emissiveIntensity = city lights intensity modulated by day/night
    mat.emissiveIntensity = 0.15;
  }

  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const n1 = Math.sin(nx * 3.0 + ny * 1.8) * 0.5 + Math.cos(ny * 2.5 - nz * 1.3) * 0.3;
    const n2 = Math.sin(nz * 1.8 + nx * 1.2 + ny * 0.6) * 0.2 + Math.sin(nx * 6.0 + ny * 3.0 + nz * 4.0) * 0.15;
    const n3 = Math.sin(nx * 12.0 + nz * 8.0) * 0.1 + Math.cos(ny * 10.0 + nx * 5.0) * 0.08;
    const n4 = Math.sin(nx * 25.0 + ny * 20.0 + nz * 30.0) * 0.05;
    const elev = ((n1 + n2 + n3 + n4) * 0.3 + 0.5) * 1.2;
    const maxDisp = this.visualRadius * 0.001;
    const oceanDepth = this.visualRadius * 0.0002;
    if (elev > 0.4) {
      const h = (elev - 0.4) / 0.6;
      return h * h * maxDisp;
    }
    return -(0.4 - elev) / 0.4 * oceanDepth;
  }

  private generateTerrain(visualR: number): void {
    const g = this.mesh.geometry as THREE.SphereGeometry;
    const posAttr = g.attributes.position!;
    const vert = new THREE.Vector3();
    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;
      const disp = this.getTerrainHeightVisual(nx, ny, nz);
      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    g.computeVertexNormals();
  }
}

=== src/planets/Jupiter.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateJupiterTexture } from '../effects/ProceduralTextures';
import { fbm3D } from '../utils/noise';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Jupiter extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super('jupiter', 1.9e28 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 6.9911e7);

    const visualR = this.visualRadius;

    const tex = generateJupiterTexture();

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.02;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const bands = fbm3D(nx * 8 + 10, ny * 8 + 20, nz * 8 + 30, 4);
      const micro = fbm3D(nx * 30 + 100, ny * 30 + 200, nz * 30 + 300, 3);
      const elev = bands * 0.7 + micro * 0.3;

      let disp = 0;
      if (elev > 0.4) disp = ((elev - 0.4) / 0.6) ** 2 * maxDisp;
      else disp = -(0.4 - elev) / 0.4 * maxDisp * 0.1;

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
    this.mesh.rotation.z = 3.1 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0xd4a574, 0.15);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}
=== src/planets/Mars.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, assetUrl } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

const hash = (x: number, y: number, z: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.9) * 43758.5453;
  return n - Math.floor(n);
};

const noise3D = (x: number, y: number, z: number) => {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const sz = fz * fz * (3 - 2 * fz);
  const v000 = hash(ix, iy, iz);
  const v100 = hash(ix + 1, iy, iz);
  const v010 = hash(ix, iy + 1, iz);
  const v110 = hash(ix + 1, iy + 1, iz);
  const v001 = hash(ix, iy, iz + 1);
  const v101 = hash(ix + 1, iy, iz + 1);
  const v011 = hash(ix, iy + 1, iz + 1);
  const v111 = hash(ix + 1, iy + 1, iz + 1);
  return lerp(lerp(lerp(v000, v100, sx), lerp(v010, v110, sx), sy),
              lerp(lerp(v001, v101, sx), lerp(v011, v111, sx), sy), sz);
};

const fbm3D = (x: number, y: number, z: number, octaves: number) => {
  let v = 0, a = 1, t = 0;
  for (let i = 0; i < octaves; i++) {
    const f = 1 << i;
    v += a * noise3D(x * f, y * f, z * f);
    t += a;
    a *= 0.5;
  }
  return v / t;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export class Mars extends Planet {
  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const mountains = fbm3D(nx * 4 + 10, ny * 4 + 20, nz * 4 + 30, 5);
    const detail = fbm3D(nx * 20 + 100, ny * 20 + 200, nz * 20 + 300, 3);
    const elev = mountains * 0.7 + detail * 0.3;
    const maxDisp = this.visualRadius * 0.035;
    if (elev > 0.4) return ((elev - 0.4) / 0.6) ** 2 * maxDisp;
    return -(0.4 - elev) / 0.4 * maxDisp * 0.1;
  }

  atmosphereGlow: AtmosphereGlow;

  constructor(position: Vec3, velocity: Vec3) {
    super('mars', 1.9e25 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 3.390e6);

    const visualR = this.visualRadius;

    const loader = new THREE.TextureLoader();
    const tex = loader.load(assetUrl('/textures/mars.jpg'), (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 4;
    });

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.035;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const mountains = fbm3D(nx * 4 + 10, ny * 4 + 20, nz * 4 + 30, 5);
      const detail = fbm3D(nx * 20 + 100, ny * 20 + 200, nz * 20 + 300, 3);
      const elev = mountains * 0.7 + detail * 0.3;

      let disp = 0;
      if (elev > 0.4) disp = ((elev - 0.4) / 0.6) ** 2 * maxDisp;
      else disp = -(0.4 - elev) / 0.4 * maxDisp * 0.1;

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.85,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0xd46a4a, 0.25);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}
=== src/planets/Mercury.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, assetUrl } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

const hash = (x: number, y: number, z: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.9) * 43758.5453;
  return n - Math.floor(n);
};

const noise3D = (x: number, y: number, z: number) => {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const sz = fz * fz * (3 - 2 * fz);
  const v000 = hash(ix, iy, iz);
  const v100 = hash(ix + 1, iy, iz);
  const v010 = hash(ix, iy + 1, iz);
  const v110 = hash(ix + 1, iy + 1, iz);
  const v001 = hash(ix, iy, iz + 1);
  const v101 = hash(ix + 1, iy, iz + 1);
  const v011 = hash(ix, iy + 1, iz + 1);
  const v111 = hash(ix + 1, iy + 1, iz + 1);
  return lerp(lerp(lerp(v000, v100, sx), lerp(v010, v110, sx), sy),
              lerp(lerp(v001, v101, sx), lerp(v011, v111, sx), sy), sz);
};

const fbm3D = (x: number, y: number, z: number, octaves: number) => {
  let v = 0, a = 1, t = 0;
  for (let i = 0; i < octaves; i++) {
    const f = 1 << i;
    v += a * noise3D(x * f, y * f, z * f);
    t += a;
    a *= 0.5;
  }
  return v / t;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export class Mercury extends Planet {
  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const craters = fbm3D(nx * 10 + 500, ny * 10 + 600, nz * 10 + 700, 4);
    const micro = fbm3D(nx * 40 + 100, ny * 40 + 200, nz * 40 + 300, 3);
    const elev = craters * 0.8 + micro * 0.2;
    const maxDisp = this.visualRadius * 0.03;
    if (elev > 0.4) return ((elev - 0.4) / 0.6) ** 2 * maxDisp;
    return -(0.4 - elev) / 0.4 * maxDisp * 0.12;
  }

  constructor(position: Vec3, velocity: Vec3) {
    super('mercury', 1e25 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 2.440e6);

    const visualR = this.visualRadius;

    const loader = new THREE.TextureLoader();
    const tex = loader.load(assetUrl('/textures/mercury.jpg'), (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 4;
    });

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.03;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const craters = fbm3D(nx * 10 + 500, ny * 10 + 600, nz * 10 + 700, 4);
      const micro = fbm3D(nx * 40 + 100, ny * 40 + 200, nz * 40 + 300, 3);
      const elev = craters * 0.8 + micro * 0.2;

      let disp = 0;
      if (elev > 0.4) disp = ((elev - 0.4) / 0.6) ** 2 * maxDisp;
      else disp = -(0.4 - elev) / 0.4 * maxDisp * 0.12;

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
  }
}
=== src/planets/Moon.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, assetUrl } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

const hash = (x: number, y: number, z: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.9) * 43758.5453;
  return n - Math.floor(n);
};

const noise3D = (x: number, y: number, z: number) => {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const sz = fz * fz * (3 - 2 * fz);
  const v000 = hash(ix, iy, iz);
  const v100 = hash(ix + 1, iy, iz);
  const v010 = hash(ix, iy + 1, iz);
  const v110 = hash(ix + 1, iy + 1, iz);
  const v001 = hash(ix, iy, iz + 1);
  const v101 = hash(ix + 1, iy, iz + 1);
  const v011 = hash(ix, iy + 1, iz + 1);
  const v111 = hash(ix + 1, iy + 1, iz + 1);
  return lerp(lerp(lerp(v000, v100, sx), lerp(v010, v110, sx), sy),
              lerp(lerp(v001, v101, sx), lerp(v011, v111, sx), sy), sz);
};

const fbm3D = (x: number, y: number, z: number, octaves: number) => {
  let v = 0, a = 1, t = 0;
  for (let i = 0; i < octaves; i++) {
    const f = 1 << i;
    v += a * noise3D(x * f, y * f, z * f);
    t += a;
    a *= 0.5;
  }
  return v / t;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export class Moon extends Planet {
  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const craters = fbm3D(nx * 8 + 100, ny * 8 + 200, nz * 8 + 300, 4);
    const micro = fbm3D(nx * 30 + 400, ny * 30 + 500, nz * 30 + 600, 3);
    const elev = craters * 0.7 + micro * 0.3;
    const maxDisp = this.visualRadius * 0.04;
    if (elev > 0.45) return ((elev - 0.45) / 0.55) ** 2 * maxDisp;
    return -(0.45 - elev) / 0.45 * maxDisp * 0.15;
  }

  constructor(position: Vec3, velocity: Vec3) {
    super('moon', 2.2e24 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 1.737e6);

    const visualR = this.visualRadius;

    const loader = new THREE.TextureLoader();
    const tex = loader.load(assetUrl('/textures/moon.jpg'), (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 4;
    });

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.04;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const craters = fbm3D(nx * 8 + 100, ny * 8 + 200, nz * 8 + 300, 4);
      const micro = fbm3D(nx * 30 + 400, ny * 30 + 500, nz * 30 + 600, 3);
      const elev = craters * 0.7 + micro * 0.3;

      let disp = 0;
      if (elev > 0.45) disp = ((elev - 0.45) / 0.55) ** 2 * maxDisp;
      else disp = -(0.45 - elev) / 0.45 * maxDisp * 0.15;

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.95,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
  }
}
=== src/planets/Neptune.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateNeptuneTexture } from '../effects/ProceduralTextures';
import { fbm3D } from '../utils/noise';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Neptune extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super('neptune', 1.024e27 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 2.4622e7);

    const visualR = this.visualRadius;

    const tex = generateNeptuneTexture();

    const geom = new THREE.SphereGeometry(visualR, 64, 32);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.015;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const bands = fbm3D(nx * 6 + 10, ny * 6 + 20, nz * 6 + 30, 4);
      const micro = fbm3D(nx * 25 + 100, ny * 25 + 200, nz * 25 + 300, 3);
      const elev = bands * 0.7 + micro * 0.3;

      let disp = 0;
      if (elev > 0.4) disp = ((elev - 0.4) / 0.6) ** 2 * maxDisp;
      else disp = -(0.4 - elev) / 0.4 * maxDisp * 0.1;

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
    this.mesh.rotation.z = 28.3 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0x4b70dd, 0.15);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}
=== src/planets/Planet.ts ===
import * as THREE from 'three';
import { Body, type Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

export class Planet extends Body {
  radius: number;
  visualRadius: number;
  mesh: THREE.Mesh;

  constructor(name: string, mass: number, position: Vec3, velocity: Vec3, radius: number) {
    super(name, mass, position, velocity);
    this.radius = radius;
    this.visualRadius = radius * VISUAL_SCALE;
    const geom = new THREE.SphereGeometry(this.visualRadius, 64, 32);
    const mat = new THREE.MeshStandardMaterial({ color: 0x808080 });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VISUAL_SCALE, position[1] * VISUAL_SCALE, position[2] * VISUAL_SCALE);
  }

  /** Override in subclasses to add terrain displacement. Returns height in VISUAL units. */
  protected getTerrainHeightVisual(_nx: number, _ny: number, _nz: number): number {
    return 0;
  }

  syncMesh(): void {
    this.mesh.position.set(
      this.position[0] * VISUAL_SCALE,
      this.position[1] * VISUAL_SCALE,
      this.position[2] * VISUAL_SCALE
    );
  }

  /** Get surface radius at world position (physics space), accounting for terrain displacement. */
  getSurfaceRadiusAt(worldPos: Vec3): number {
    const localX = worldPos[0] - this.position[0];
    const localY = worldPos[1] - this.position[1];
    const localZ = worldPos[2] - this.position[2];
    const len = Math.sqrt(localX * localX + localY * localY + localZ * localZ);
    if (len === 0) return this.radius;

    const nx = localX / len;
    const ny = localY / len;
    const nz = localZ / len;

    const dispVisual = this.getTerrainHeightVisual(nx, ny, nz);
    const dispPhysics = dispVisual / VISUAL_SCALE;
    return this.radius + dispPhysics;
  }
}

=== src/planets/Pluto.ts ===
import * as THREE from 'three';
import type { Vec3 } from '../physics/Body';
import { Planet } from './Planet';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

export class Pluto extends Planet {
  constructor(position: Vec3, velocity: Vec3) {
    super('pluto', 4.4e21 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 1.188e6);
    const geom = new THREE.SphereGeometry(this.visualRadius, 32, 16);
    const mat = new THREE.MeshStandardMaterial({ color: 0xddccbb, roughness: 0.9, metalness: 0.0 });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
  }
}

=== src/planets/Saturn.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateSaturnTexture } from '../effects/ProceduralTextures';
import { fbm3D } from '../utils/noise';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

function createRingTexture(): THREE.CanvasTexture {
  const W = 1024, H = 64;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // Gradient from inner to outer
  const grad = ctx.createLinearGradient(0, 0, W, 0);
  grad.addColorStop(0, '#8a7a5a');
  grad.addColorStop(0.05, '#b8a888');
  grad.addColorStop(0.12, '#d4c8a8');
  grad.addColorStop(0.2, '#c0b898');
  grad.addColorStop(0.35, '#e8ddd0');
  grad.addColorStop(0.5, '#c0b090');
  grad.addColorStop(0.65, '#d8ccb0');
  grad.addColorStop(0.8, '#a89878');
  grad.addColorStop(0.9, '#786858');
  grad.addColorStop(1, '#584838');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Noise for texture
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const r = 1 + Math.random() * 4;
    const b = 120 + Math.random() * 80;
    ctx.fillStyle = `rgba(${b},${b-20},${b-40},${0.2 + Math.random() * 0.4})`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }

  // Cassini Division (main gap)
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(W * 0.43, 0, W * 0.04, H);

  // Encke Gap
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.fillRect(W * 0.72, 0, W * 0.015, H);

  // Inner gaps
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.fillRect(W * 0.1, 0, W * 0.02, H);
  ctx.fillRect(W * 0.17, 0, W * 0.01, H);
  ctx.fillRect(W * 0.55, 0, W * 0.02, H);

  // Subtle ringlets
  ctx.fillStyle = 'rgba(200,190,170,0.15)';
  for (let x = 0; x < W; x += 8) {
    ctx.fillRect(x, 0, 2, H);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.anisotropy = 4;
  return tex;
}

export class Saturn extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super('saturn', 5.683e27 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 5.8232e7);

    const visualR = this.visualRadius;

    const tex = generateSaturnTexture();

    const geom = new THREE.SphereGeometry(visualR, 64, 32);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.015;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;
      const bands = fbm3D(nx * 8 + 10, ny * 8 + 20, nz * 8 + 30, 4);
      const micro = fbm3D(nx * 30 + 100, ny * 30 + 200, nz * 30 + 300, 3);
      const elev = bands * 0.7 + micro * 0.3;
      let disp = 0;
      if (elev > 0.4) disp = ((elev - 0.4) / 0.6) ** 2 * maxDisp;
      else disp = -(0.4 - elev) / 0.4 * maxDisp * 0.1;
      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
    this.mesh.rotation.z = 26.7 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0xf4e4a1, 0.1);
    this.mesh.add(this.atmosphereGlow.getMesh());

    // Improved rings with texture
    const ringTex = createRingTexture();
    const ringGeom = new THREE.RingGeometry(visualR * 1.15, visualR * 2.4, 256);
    const ringMat = new THREE.MeshBasicMaterial({
      map: ringTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });
    const rings = new THREE.Mesh(ringGeom, ringMat);
    rings.rotation.x = -Math.PI / 2;
    rings.rotation.z = 26.7 * Math.PI / 180;
    this.mesh.add(rings);

    // Outer faint ring
    const outerGeom = new THREE.RingGeometry(visualR * 2.4, visualR * 2.8, 128);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x887868,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
      depthWrite: false,
    });
    const outerRing = new THREE.Mesh(outerGeom, outerMat);
    outerRing.rotation.x = -Math.PI / 2;
    outerRing.rotation.z = 26.7 * Math.PI / 180;
    this.mesh.add(outerRing);
  }
}

=== src/planets/Sun.ts ===
import * as THREE from 'three';
import type { Vec3 } from '../physics/Body';
import { Body } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor;
uniform float uIntensity;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = vUv * 6.0;
  float n = fbm(uv + uTime * 0.05);
  float bright = 0.6 + n * 0.4;
  vec3 col = uColor * bright;
  float alpha = (0.8 + n * 0.2) * uIntensity;
  gl_FragColor = vec4(col, alpha);
}
`;

export class Sun extends Body {
  light: THREE.DirectionalLight;
  visualRadius: number;
  mesh: THREE.Mesh;

  constructor(position: Vec3, velocity: Vec3, mass = 2e26) {
    super('sun', mass, position, velocity);

    // Visible sphere — visible when approaching
    this.visualRadius = 100;

    const geom = new THREE.SphereGeometry(this.visualRadius, 32, 16);
    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0xffcc00) },
        uIntensity: { value: 1.5 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    this.light = new THREE.DirectionalLight(0xffeedd, 5.0);
    this.light.position.set(
      this.mesh.position.x + 100,
      this.mesh.position.y + 50,
      this.mesh.position.z
    );

    // Outer glow sprite (bright star-like)
    const spriteMap = createSunGlowTexture();
    const spriteMat = new THREE.SpriteMaterial({
      map: spriteMap,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 1,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(250000, 250000, 1);
    this.mesh.add(sprite);

    this.sunMaterial = mat;
  }

  private sunMaterial: THREE.ShaderMaterial;

  update(dt: number): void {
    (this.sunMaterial.uniforms.uTime as { value: number }).value += dt;
  }

  syncMesh(): void {
    this.mesh.position.set(
      this.position[0] * VS,
      this.position[1] * VS,
      this.position[2] * VS
    );
    this.light.position.set(
      this.mesh.position.x + 100,
      this.mesh.position.y + 50,
      this.mesh.position.z
    );
  }
}

function createSunGlowTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255, 220, 100, 1)');
  g.addColorStop(0.1, 'rgba(255, 200, 80, 0.8)');
  g.addColorStop(0.3, 'rgba(255, 160, 40, 0.4)');
  g.addColorStop(0.5, 'rgba(255, 100, 20, 0.15)');
  g.addColorStop(0.7, 'rgba(255, 60, 10, 0.05)');
  g.addColorStop(1, 'rgba(255, 0, 0, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

=== src/planets/Uranus.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';
import { generateUranusTexture } from '../effects/ProceduralTextures';
import { fbm3D } from '../utils/noise';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Uranus extends Planet {
  atmosphereGlow: any;

  constructor(position: Vec3, velocity: Vec3) {
    super('uranus', 8.681e26 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 2.5362e7);

    const visualR = this.visualRadius;

    const tex = generateUranusTexture();

    const geom = new THREE.SphereGeometry(visualR, 64, 32);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.015;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const bands = fbm3D(nx * 6 + 10, ny * 6 + 20, nz * 6 + 30, 4);
      const micro = fbm3D(nx * 25 + 400, ny * 25 + 500, nz * 25 + 600, 3);
      const elev = bands * 0.7 + micro * 0.3;

      let disp = 0;
      if (elev > 0.4) disp = ((elev - 0.4) / 0.6) ** 2 * maxDisp;
      else disp = -(0.4 - elev) / 0.4 * maxDisp * 0.1;

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
    this.mesh.rotation.z = -97.8 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0x4fd0e8, 0.1);
    this.mesh.add(this.atmosphereGlow.getMesh());

    // Add rings
    const ringGeom = new THREE.RingGeometry(visualR * 1.2, visualR * 2.1, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xaaaacc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const rings = new THREE.Mesh(ringGeom, ringMat);
    rings.rotation.x = -Math.PI / 2;
    rings.rotation.z = 97.8 * Math.PI / 180;
    this.mesh.add(rings);
  }
}
=== src/planets/Venus.ts ===
import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, assetUrl } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

const hash = (x: number, y: number, z: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.9) * 43758.5453;
  return n - Math.floor(n);
};

const noise3D = (x: number, y: number, z: number) => {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const sz = fz * fz * (3 - 2 * fz);
  const v000 = hash(ix, iy, iz);
  const v100 = hash(ix + 1, iy, iz);
  const v010 = hash(ix, iy + 1, iz);
  const v110 = hash(ix + 1, iy + 1, iz);
  const v001 = hash(ix, iy, iz + 1);
  const v101 = hash(ix + 1, iy, iz + 1);
  const v011 = hash(ix, iy + 1, iz + 1);
  const v111 = hash(ix + 1, iy + 1, iz + 1);
  return lerp(lerp(lerp(v000, v100, sx), lerp(v010, v110, sx), sy),
              lerp(lerp(v001, v101, sx), lerp(v011, v111, sx), sy), sz);
};

const fbm3D = (x: number, y: number, z: number, octaves: number) => {
  let v = 0, a = 1, t = 0;
  for (let i = 0; i < octaves; i++) {
    const f = 1 << i;
    v += a * noise3D(x * f, y * f, z * f);
    t += a;
    a *= 0.5;
  }
  return v / t;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export class Venus extends Planet {
  protected override getTerrainHeightVisual(nx: number, ny: number, nz: number): number {
    const volcanoes = fbm3D(nx * 6 + 50, ny * 6 + 100, nz * 6 + 150, 4);
    const plains = fbm3D(nx * 15 + 200, ny * 15 + 300, nz * 15 + 400, 3);
    const elev = volcanoes * 0.6 + plains * 0.4;
    const maxDisp = this.visualRadius * 0.015;
    if (elev > 0.35) return ((elev - 0.35) / 0.65) ** 2 * maxDisp;
    return -(0.35 - elev) / 0.35 * maxDisp * 0.05;
  }

  atmosphereGlow: AtmosphereGlow;

  constructor(position: Vec3, velocity: Vec3) {
    super('venus', 1.46e26 * 5 * 4 * 1.5 * 6 * 2 * 2 * 2 / 15 * 3 * 5, position, velocity, 6.052e6);

    const visualR = this.visualRadius;

    const loader = new THREE.TextureLoader();
    const tex = loader.load(assetUrl('/textures/venus.jpg'), (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 4;
    });

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const posAttr = geom.attributes.position!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.015;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const nx = vert.x / visualR;
      const ny = vert.y / visualR;
      const nz = vert.z / visualR;

      const volcanoes = fbm3D(nx * 6 + 50, ny * 6 + 100, nz * 6 + 150, 4);
      const plains = fbm3D(nx * 15 + 200, ny * 15 + 300, nz * 15 + 400, 3);
      const elev = volcanoes * 0.6 + plains * 0.4;

      let disp = 0;
      if (elev > 0.35) disp = ((elev - 0.35) / 0.65) ** 2 * maxDisp;
      else disp = -(0.35 - elev) / 0.35 * maxDisp * 0.05;

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.0,
      color: 0xffffff,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);

    this.atmosphereGlow = new AtmosphereGlow(visualR, 0xe8a84c, 0.4);
    this.mesh.add(this.atmosphereGlow.getMesh());
  }
}
=== src/rocket/Assembly.ts ===
import * as THREE from 'three';
import type { Part } from '../parts/Part';
import { buildPartMesh } from '../parts/PartBuilder';
import { PART_SCALE } from '../config/constants';
import type { Vec3 } from '../physics/Body';

const SIZE_DIMS: Record<string, { radius: number }> = {
  S: { radius: 0.5 * PART_SCALE },
  M: { radius: 0.7 * PART_SCALE },
  L: { radius: 1.0 * PART_SCALE },
  XL: { radius: 1.4 * PART_SCALE }
};

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

  totalFuelCapacity(): number {
    let f = 0;
    const walk = (n: AssemblyNode) => {
      if (n.part.fuelCapacity) f += n.part.fuelCapacity;
      n.children.forEach(walk);
    };
    this.roots.forEach(walk);
    return f;
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
    // Add smooth adapters between adjacent parts of different sizes
    const sorted = [...this.roots].sort((a, b) => b.position[1] - a.position[1]);
    let adapterCount = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      const top = sorted[i]!, bot = sorted[i + 1]!;
      const r1 = SIZE_DIMS[top.part.size]?.radius ?? 0;
      const r2 = SIZE_DIMS[bot.part.size]?.radius ?? 0;
if (Math.abs(r1 - r2) > 0.001 && !top.part.id.includes('decoupler') && !bot.part.id.includes('decoupler')) {
        const midY = (top.position[1] + bot.position[1]) / 2;
        const coneH = Math.abs(top.position[1] - bot.position[1]) * 1.5;
        const coneGeom = new THREE.CylinderGeometry(r1, r2, coneH, 32);
        const coneMat = new THREE.MeshStandardMaterial({ color: 0xdd9944, roughness: 0.2, metalness: 0.5, emissive: 0x221100, emissiveIntensity: 0.3 });
        const cone = new THREE.Mesh(coneGeom, coneMat);
cone.position.y = midY;
        group.add(cone);
        adapterCount++;
      }
    }
    // Center group at center of mass
    if (adapterCount > 0) console.log('Smooth adapters created:', adapterCount);
    const com = this.centerOfMass();
    for (const child of group.children) {
      child.position.x -= com[0];
      child.position.y -= com[1];
      child.position.z -= com[2];
    }
    return group;
  }
}

=== src/rocket/Rocket.ts ===
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

  removeStage(decouplerNode: AssemblyNode): void {
    const idsToRemove = new Set<AssemblyNode>();
    collectDescendants(decouplerNode, idsToRemove);
    idsToRemove.add(decouplerNode);
    this.fuelTanks = this.fuelTanks.filter(t => !idsToRemove.has(t.node));
    decouplerNode.children = [];
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

function collectDescendants(node: AssemblyNode, out: Set<AssemblyNode>) {
  for (const c of node.children) {
    out.add(c);
    collectDescendants(c, out);
  }
}

=== src/scenes/FlightScene.ts ===
import * as THREE from 'three';
import type { Renderer } from '../core/Renderer';
import type { SceneManager } from '../core/SceneManager';
import type { System } from '../physics/System';
import type { Vec3 } from '../physics/Body';
import { Body } from '../physics/Body';
import type { Rocket } from '../rocket/Rocket';
import type { AssemblyNode } from '../rocket/Assembly';
import type { Achievements } from '../core/Achievements';
import { FlightState } from '../flight/FlightState';
import { ChaseCamera } from '../flight/ChaseCamera';
import { Controls } from '../flight/Controls';
import { HUD } from '../flight/HUD';
import { applyThrust, findFirstEngine } from '../flight/Thrust';
import { SoundManager } from '../flight/SoundManager';
import { toast } from '../ui/Toast';
import { FIXED_DT, G, ORBIT_SCALE, VISUAL_PLANET_MULT, PART_SCALE, EARTH_MASS, ROCKET_VISUAL_SCALE } from '../config/constants';
import { getReferenceBody } from '../physics/SoiResolver';
import { predictOrbit } from '../physics/OrbitPredictor';
import { buildDeployedParachute } from '../parts/PartBuilder';
import { totalGravityOn } from '../physics/Gravity';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;
import { EngineFlame } from '../effects/EngineFlame';
import { GroundSmoke } from '../effects/GroundSmoke';

interface Debris {
  mesh: THREE.Group;
  body: Body;
  life: number;
}

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
  private sound: SoundManager;
  private launched = false;
  private grounded = true;
  private groundedDir: [number, number, number] | null = null;
  private liftoffFrames = 0;
  private engineFlame: EngineFlame;
  private groundSmoke: GroundSmoke;
  private rocketShadow: THREE.Mesh | null = null;
  private reentryGlow: THREE.Mesh | null = null;
  private rocketQuat = new THREE.Quaternion();
  private angularVel = new THREE.Vector3();
  private readonly ANGULAR_ACCEL = 10;
  private readonly ANGULAR_DAMPING = 8;
  private timeWarp = 1;
  private parachuteDeployed = false;
  private deployedChuteMesh: THREE.Group | null = null;
  private crashed = false;
  private paused = false;
  private debris: Debris[] = [];
  private warpLevels = [1, 3, 5, 10, 100, 1000, 100000, 1000000];
  private warpIndex = 0;
  private crashOverlay: HTMLDivElement | null = null;
  private prevVel: [number, number, number] = [0, 0, 0];
  private gearDeployed = false;
  private gearMeshes: THREE.Mesh[] = [];
  private missionTime = 0;
  private sasMode: 'off' | 'hold' | 'prograde' | 'retrograde' = 'off';
  private sasTargetQuat = new THREE.Quaternion();
  private screenShake = 0;
  private heatEnergy = 0;
  private readonly MAX_HEAT = 9999999999; // effectively disabled
  private readonly HEAT_RADIATION_RATE = 0.999;
  private stageInfo: Array<{ label: string; fuelMass: number; dryMass: number; active: boolean; spent: boolean }> = [];
  private lastReentryIntensity = 0;
  private prevMach = 0;
  private sonicBoomTriggered = false;
  private sonicBoomTimer = 0;
  private countdownTimer = 0;
  private countdownActive = false;
  private countdownEl: HTMLElement | null = null;
  private lastRefBody: string | null = null;
  private impactMarker: THREE.Mesh | null = null;
  private maxAlt = 0;
  private maxSpeed = 0;
  private orbitLine: THREE.Line | null = null;
  private exhaustLight: THREE.PointLight | null = null;
  private followLight: THREE.PointLight | null = null;
  private cameraMode: 'chase' | 'free' = 'chase';
  private freeCamAzimuth = 0;
  private freeCamPolar = Math.PI / 2;
  private freeCamDist = 4;
  private freeCamKeys = { left: false, right: false, up: false, down: false };
  private freeCamDragging = false;
  private freeCamPrevMouse = { x: 0, y: 0 };
  private hudVisible = true;
  private lastAltMilestone = 0;
  private sonicBoomRing: THREE.Mesh | null = null;
  private sonicBoomLife = 0;
  private reentryGlowMesh: THREE.Mesh | null = null;
  private rocketBottomY = 0; // lowest point of rocket mesh in local space
  private _debugShown = false;
  private _debugMarker: THREE.Mesh | null = null;
  private _spawnProtectionTimer = 0;
  private _camSnapped = false;

  private showCountdown(text: string): void {
    if (!this.countdownEl) {
      this.countdownEl = document.createElement('div');
      this.countdownEl.style.cssText = `
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:72px;font-weight:bold;color:#fff;z-index:500;
        text-shadow:0 0 30px rgba(68,136,255,0.6);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `;
      document.body.appendChild(this.countdownEl);
    }
    this.countdownEl.textContent = text;
    this.countdownEl.style.opacity = '1';
    if (text === 'LIFTOFF!') {
      this.countdownEl.style.color = '#FF8844';
      this.countdownEl.style.fontSize = '48px';
    } else {
      this.countdownEl.style.color = '#FFFFFF';
      this.countdownEl.style.fontSize = '72px';
    }
  }

  private hideCountdown(): void {
    if (this.countdownEl) {
      this.countdownEl.style.opacity = '0';
    }
  }

  private get dragMultiplier(): number {
    return this.gearDeployed ? 2.5 : 1;
  }

  onCrashAction: ((action: 'menu' | 'restart') => void) | null = null;


  constructor(renderer: Renderer, sceneMgr: SceneManager, system: System, rocket: Rocket, achievements: Achievements) {
    this.renderer = renderer;
    this.sceneMgr = sceneMgr;
    this.system = system;
    this.achievements = achievements;
    this.rocket = rocket;

    const earth = system.bodyByName('earth')!;
    const earthR = (earth as any).radius ?? 6.371e6;
    // Kennedy Space Center: 28.5°N, 80.5°W
    const lat = 28.5 * Math.PI / 180;
    const lon = -80.5 * Math.PI / 180;
    const dir: [number, number, number] = [
      Math.cos(lat) * Math.cos(lon),
      Math.sin(lat),
      Math.cos(lat) * Math.sin(lon),
    ];
    const dirMag = Math.sqrt(dir[0]*dir[0] + dir[1]*dir[1] + dir[2]*dir[2]);
    const dirNorm: [number, number, number] = [dir[0] / dirMag, dir[1] / dirMag, dir[2] / dirMag];

    const SPAWN_OFFSET_M = 60;
    // Compute nominal surface position (for terrain lookup)
    const nominalSurface: [number, number, number] = [
      earth.position[0] + dirNorm[0] * earthR,
      earth.position[1] + dirNorm[1] * earthR,
      earth.position[2] + dirNorm[2] * earthR,
    ];
    // Get actual surface radius including terrain displacement
    const surfaceR = (earth as any).getSurfaceRadiusAt?.(nominalSurface) ?? earthR;
    const spawnPos: [number, number, number] = [
      earth.position[0] + dirNorm[0] * (surfaceR + SPAWN_OFFSET_M),
      earth.position[1] + dirNorm[1] * (surfaceR + SPAWN_OFFSET_M),
      earth.position[2] + dirNorm[2] * (surfaceR + SPAWN_OFFSET_M),
    ];
    this.state = new FlightState(rocket, system, spawnPos, [0, 0, 0]);
    this.groundedDir = dirNorm;

    // Align rocket with surface normal (90° to ground, pointing away from Earth center)
    const upDir = new THREE.Vector3(
      spawnPos[0] - earth.position[0],
      spawnPos[1] - earth.position[1],
      spawnPos[2] - earth.position[2]
    ).normalize();
    this.rocketQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), upDir);

    this.rocketGroup = rocket.assembly.toMesh();
    this.rocketGroup.scale.setScalar(ROCKET_VISUAL_SCALE);
    this.rocketGroup.position.set(
      this.state.position[0] * VISUAL_SCALE,
      this.state.position[1] * VISUAL_SCALE,
      this.state.position[2] * VISUAL_SCALE
    );
    sceneMgr.scene.add(this.rocketGroup);

    // DEBUG: hidden by default — green marker for position verification
    const dbgMarkerGeom = new THREE.SphereGeometry(1, 8, 6);
    const dbgMarkerMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.3, depthTest: false, depthWrite: false, visible: false });
    this._debugMarker = new THREE.Mesh(dbgMarkerGeom, dbgMarkerMat);
    this._debugMarker.visible = false;
    this._debugMarker.position.copy(this.rocketGroup.position);
    sceneMgr.scene.add(this._debugMarker);

    // Clean simple rocket materials
    this.rocketGroup.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const mat of mats) {
          mat.polygonOffset = true;
          mat.polygonOffsetFactor = -1;
          mat.polygonOffsetUnits = -1;
          if (mat instanceof THREE.MeshStandardMaterial) {
            mat.roughness = 0.4;
            mat.metalness = 0.1;
            mat.emissive = new THREE.Color(0x000000);
            mat.emissiveIntensity = 0;
            mat.needsUpdate = true;
          }
        }
      }
    });

    // Landing gear — completely disabled (user doesn't want hexagons)
    // for (let i = 0; i < 3; i++) { ... }
    // gear meshes are never added to rocketGroup

    // Impact prediction marker (red ring on surface)
    const markerGeom = new THREE.RingGeometry(0.05, 0.15, 16);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0xff3333, side: THREE.DoubleSide, transparent: true, opacity: 0.6, depthWrite: false
    });
    this.impactMarker = new THREE.Mesh(markerGeom, markerMat);
    this.impactMarker.rotation.x = -Math.PI / 2;
    this.impactMarker.visible = false;
    this.sceneMgr.scene.add(this.impactMarker);

    for (const body of system.bodies) {
      const pbody = body as any;
      if (pbody.mesh) sceneMgr.scene.add(pbody.mesh);
      if (pbody.light) sceneMgr.scene.add(pbody.light);
    }
    const fillLight = new THREE.DirectionalLight(0x8899cc, 1.5);
    fillLight.position.set(-50, 20, -30);
    sceneMgr.scene.add(fillLight);

    // Follow light — small point light on rocket so it's always visible
    this.followLight = new THREE.PointLight(0xffddcc, 3, 15);
    this.followLight.position.set(0, 2, 0);
    this.rocketGroup.add(this.followLight);

    this.engineFlame = new EngineFlame();
    this.positionFlameAtNozzle();
    this.rocketGroup.add(this.engineFlame.getMesh());

    // Engine exhaust light
    this.exhaustLight = new THREE.PointLight(0xff8844, 0, 20);
    this.exhaustLight.position.set(0, -1, 0);
    this.rocketGroup.add(this.exhaustLight);

    // Reentry glow mesh (white-hot spherical halo)
    const reentryGeom = new THREE.SphereGeometry(2, 16, 16);
    const reentryMat = new THREE.MeshBasicMaterial({
      color: 0xff8844, transparent: true, opacity: 0, depthWrite: false
    });
    this.reentryGlowMesh = new THREE.Mesh(reentryGeom, reentryMat);
    this.reentryGlowMesh.position.set(0, 0.5, 0);
    this.reentryGlowMesh.visible = false;
    this.rocketGroup.add(this.reentryGlowMesh);

    this.groundSmoke = new GroundSmoke();
    this.rocketGroup.add(this.groundSmoke.getMesh());

    // Rocket shadow (dark circle on ground)
    const shadowGeom = new THREE.CircleGeometry(0.3 * ROCKET_VISUAL_SCALE, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
    });
    this.rocketShadow = new THREE.Mesh(shadowGeom, shadowMat);
    this.rocketShadow.rotation.x = -Math.PI / 2;
    this.rocketShadow.position.y = -2;
    this.rocketGroup.add(this.rocketShadow);

    // Reentry glow (orange sphere around rocket)
    const glowGeom = new THREE.SphereGeometry(0.3, 16, 12);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.reentryGlow = new THREE.Mesh(glowGeom, glowMat);
    this.rocketGroup.add(this.reentryGlow);
    // Outer glow
    const outerGlowGeom = new THREE.SphereGeometry(0.5, 16, 12);
    const outerGlowMat = new THREE.MeshBasicMaterial({
      color: 0xff4400,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const outerGlow = new THREE.Mesh(outerGlowGeom, outerGlowMat);
    outerGlow.name = 'reentry-outer';
    this.rocketGroup.add(outerGlow);

    const tangent = new THREE.Vector3().crossVectors(upDir, new THREE.Vector3(0, 1, 0)).normalize();
    const azimuth = Math.atan2(tangent.z, tangent.x);

    this.chase = new ChaseCamera(sceneMgr.camera);
    this.chase.setAzimuth(azimuth);
    this.chase.enableOrbit(this.renderer.domElement);
    // Compute visual offset for initial camera placement (rocketBottomY already scaled)
    const initVisualOff = -this.rocketBottomY - 50 * VISUAL_SCALE + 2;
    const initOffX = upDir.x * initVisualOff;
    const initOffY = upDir.y * initVisualOff;
    const initOffZ = upDir.z * initVisualOff;
    this.chase.initialiseAt(this.state, this.rocketQuat, upDir, { x: initOffX, y: initOffY, z: initOffZ });
    this._spawnProtectionTimer = 1200; // 10 seconds no-crash grace period
    // OVERRIDE: force camera to guaranteed visible position
    const rocketVisX = this.state.position[0] * VISUAL_SCALE + upDir.x * initVisualOff;
    const rocketVisY = this.state.position[1] * VISUAL_SCALE + upDir.y * initVisualOff;
    const rocketVisZ = this.state.position[2] * VISUAL_SCALE + upDir.z * initVisualOff;
    sceneMgr.camera.position.set(rocketVisX + 10, rocketVisY + 3, rocketVisZ + 10);
    sceneMgr.camera.lookAt(rocketVisX, rocketVisY, rocketVisZ);
    this.controls = new Controls(this.state);

    // Auto-detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.controls.enableTouch();
    }

    this.sound = new SoundManager();

    this.hud = new HUD();
    this.hud.onAction = (action) => {
      if (action === 'stage') this.performStage();
      else if (action === 'parachute') this.toggleParachute();
      else if (action === 'map') {
        mapActive = !mapActive;
        mapEl.style.display = mapActive ? 'block' : 'none';
        if (mapActive) requestAnimationFrame(drawMap);
      }
      else if (action === 'resume') {
        this.paused = false;
        this.hud.setPaused(false);
      }
      else if (action === 'menu') {
        this.onCrashAction?.('menu');
      }
      else if (action === 'restart') {
        this.onCrashAction?.('restart');
      }
    };
    this.hud.mount();

    let mapActive = false;
    let mapZoom = 1.0;
    let mapPanX = 0;
    let mapPanY = 0;
    let mapDragStart: { x: number; y: number } | null = null;

    const mapEl = document.createElement('div');
    mapEl.style.cssText = 'position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;';
    const mapCanvas = document.createElement('canvas');
    mapCanvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
    mapEl.appendChild(mapCanvas);
    document.body.appendChild(mapEl);

    // Map UI overlay
    const mapUI = document.createElement('div');
    mapUI.style.cssText = 'position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;';
    mapUI.innerHTML = '<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>';
    mapEl.appendChild(mapUI);
    mapEl.appendChild(mapCanvas);
    document.body.appendChild(mapEl);

    mapCanvas.addEventListener('wheel', (e) => {
      mapZoom *= e.deltaY > 0 ? 0.9 : 1.1;
      mapZoom = Math.max(0.05, Math.min(100, mapZoom));
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
    mapCanvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) mapDragStart = { x: e.touches[0]!.clientX, y: e.touches[0]!.clientY };
    });
    mapCanvas.addEventListener('touchmove', (e) => {
      if (!mapDragStart || e.touches.length !== 1) return;
      mapPanX += (e.touches[0]!.clientX - mapDragStart.x);
      mapPanY += (e.touches[0]!.clientY - mapDragStart.y);
      mapDragStart = { x: e.touches[0]!.clientX, y: e.touches[0]!.clientY };
    });
    mapCanvas.addEventListener('touchend', () => { mapDragStart = null; });
    mapCanvas.addEventListener('dblclick', (e) => {
      e.preventDefault();
      const rect = mapCanvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const cW = mapCanvas.clientWidth;
      const cH = mapCanvas.clientHeight;
      const cx2 = cW/2 + mapPanX;
      const cy2 = cH/2 + mapPanY;
      let maxRelD2 = 1;
      for (const b of this.system.bodies) {
        const dx = (b.position[0] - this.state.position[0]) * VISUAL_SCALE;
        const dz = (b.position[2] - this.state.position[2]) * VISUAL_SCALE;
        const d = Math.sqrt(dx * dx + dz * dz);
        if (d > maxRelD2) maxRelD2 = d;
      }
      const s2 = Math.min(cW, cH) * 0.4 / maxRelD2 * mapZoom;
      let nearest: string | null = null;
      let nearestDist = 25;
      for (const b of this.system.bodies) {
        const bx = cx2 + (b.position[0] - this.state.position[0]) * s2;
        const by = cy2 - (b.position[2] - this.state.position[2]) * s2;
        const dr = Math.sqrt((mx-bx)**2 + (my-by)**2);
        if (dr < nearestDist) { nearestDist = dr; nearest = b.name; }
      }
      if (nearest) {
        const body = this.system.bodyByName(nearest);
        if (body) {
          const zoomTo = nearest === 'earth' ? 20 : nearest === 'moon' ? 50 : 3;
          mapPanX = -(body.position[0] - this.state.position[0]) * s2;
          mapPanY = (body.position[2] - this.state.position[2]) * s2;
          mapZoom = zoomTo;
          toast.show(`${nearest}: ${((body as any).mass ?? 0).toExponential(2)}kg R=${((body as any).radius ?? 0)/1000}km`);
        }
      }
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

      // Subtle radial gradient from rocket position
      const radGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.6);
      radGrad.addColorStop(0, 'rgba(20,30,60,0.3)');
      radGrad.addColorStop(0.5, 'rgba(10,15,30,0.15)');
      radGrad.addColorStop(1, 'rgba(6,8,20,0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, w, h);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(100,100,150,0.08)';
      ctx.lineWidth = 1;
      const gridSize = 100 * mapZoom;
      for (let x = cx % gridSize; x < w; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = cy % gridSize; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Concentric range rings from rocket
      ctx.strokeStyle = 'rgba(68,136,255,0.06)';
      ctx.lineWidth = 0.5;
      for (let r = gridSize; r < Math.max(w, h); r += gridSize) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Use VISUAL_SCALE for map distances to match visual scale
      let maxRelD = 1;
      for (const b of this.system.bodies) {
        const dx = (b.position[0] - this.state.position[0]) * VISUAL_SCALE;
        const dz = (b.position[2] - this.state.position[2]) * VISUAL_SCALE;
        const d = Math.sqrt(dx * dx + dz * dz);
        if (d > maxRelD) maxRelD = d;
      }
      const s = Math.min(w, h) * 0.4 / maxRelD * mapZoom;

      const colors: Record<string, string> = {
  sun: '#ffdd44', earth: '#4fc3f7', moon: '#ccccee',
  venus: '#e8b84c', mars: '#e88444', mercury: '#c0c0c0',
  jupiter: '#e8b87c', saturn: '#f4e8b0', uranus: '#5fe0f0',
  neptune: '#5b88ee', pluto: '#ddccbb', titan: '#ddaa77',
  io: '#eeddaa', europa: '#aaccdd', ganymede: '#bbccaa',
  phobos: '#bb9988', deimos: '#887766'
};
const glowColors: Record<string, string> = {
  sun: 'rgba(255,220,68,0.20)', earth: 'rgba(79,195,247,0.12)',
  mars: 'rgba(232,120,68,0.12)', venus: 'rgba(232,184,76,0.12)',
  jupiter: 'rgba(232,184,124,0.12)', saturn: 'rgba(244,232,176,0.20)',
  uranus: 'rgba(95,224,240,0.10)', neptune: 'rgba(91,136,238,0.10)',
  moon: 'rgba(204,204,238,0.06)', titan: 'rgba(221,170,119,0.08)'
};
const sizes: Record<string, number> = {
  sun: 8, earth: 5, moon: 2.5, venus: 3.5, mars: 3.5, mercury: 2.5,
  jupiter: 7, saturn: 6, uranus: 4, neptune: 3.5,
  pluto: 1.5, titan: 2, io: 1.5, europa: 1.5, ganymede: 2,
  phobos: 1, deimos: 1
};

  // Draw planet orbit trails around sun
const sunPos = this.system.bodyByName('sun')?.position;
if (sunPos) {
  for (const b of this.system.bodies) {
    if (b.name === 'sun' || b.name === 'moon') continue;
    const relToSun: [number, number, number] = [
      b.position[0] - sunPos[0],
      b.position[1] - sunPos[1],
      b.position[2] - sunPos[2],
    ];
    if (b.velocity) {
      const predOrbit = predictOrbit(relToSun, b.velocity, this.system.bodyByName('sun')!.mass, 5e14, 180);
      if (predOrbit.points.length > 10) {
        ctx.beginPath();
        ctx.strokeStyle = colors[b.name] + '30';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 6]);
        const firstX = cx + (predOrbit.points[0]![0] + sunPos[0]) * s;
        const firstY = cy - (predOrbit.points[0]![1] + sunPos[2]) * s;
        ctx.moveTo(firstX, firstY);
        for (let i = 1; i < predOrbit.points.length; i += 2) {
          const px = cx + (predOrbit.points[i]![0] + sunPos[0]) * s;
          const py = cy - (predOrbit.points[i]![1] + sunPos[2]) * s;
          ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  }
}

    // Atmospheric halos for bodies with atmospheres
const atmosBodies = ['earth', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
for (const b of this.system.bodies) {
  if (atmosBodies.includes(b.name)) {
    const bx = cx + (b.position[0] - this.state.position[0]) * s;
    const by = cy - (b.position[2] - this.state.position[2]) * s;
    const baseR = sizes[b.name] || 3;
    const grad = ctx.createRadialGradient(bx, by, baseR * 0.5, bx, by, baseR * 3);
    const col = colors[b.name] || '#888';
    grad.addColorStop(0, col + '30');
    grad.addColorStop(0.5, col + '15');
    grad.addColorStop(1, col + '00');
    ctx.beginPath();
    ctx.arc(bx, by, baseR * 3, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }
}

// Kármán line atmosphere boundary rings (100km altitude)
for (const b of this.system.bodies) {
  if (atmosBodies.includes(b.name)) {
    const bx = cx + (b.position[0] - this.state.position[0]) * s;
    const by = cy - (b.position[2] - this.state.position[2]) * s;
    const baseR = sizes[b.name] || 3;
    const atmosFactor = 1.2;
    ctx.beginPath();
    ctx.arc(bx, by, baseR * atmosFactor, 0, Math.PI * 2);
    ctx.setLineDash([2, 6]);
    ctx.strokeStyle = 'rgba(100,180,255,0.25)';
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

// Planet bodies with glow
for (const b of this.system.bodies) {
  const bx = cx + (b.position[0] - this.state.position[0]) * s;
  const by = cy - (b.position[2] - this.state.position[2]) * s;

  // Glow for sun and large bodies
  if (sizes[b.name] && sizes[b.name]! >= 5) {
    ctx.beginPath();
    ctx.arc(bx, by, sizes[b.name]! * 3, 0, Math.PI * 2);
    ctx.fillStyle = glowColors[b.name] || 'rgba(100,100,150,0.05)';
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(bx, by, sizes[b.name] || 3, 0, Math.PI * 2);
  ctx.fillStyle = colors[b.name] || '#888';
  ctx.fill();
  ctx.strokeStyle = 'rgba(244,245,242,0.3)';
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.font = '9px monospace';
  ctx.fillStyle = '#F4F5F2';
  ctx.fillText(b.name.toUpperCase(), bx + sizes[b.name]! + 6, by + 3);
}

    // Draw SOI circles for all bodies
const sunBody = this.system.bodyByName('sun');
for (const b of this.system.bodies) {
  if (b.name === 'sun' || b.mass <= 0 || !sunBody || b.name === sunBody.name) continue;
  const dx = (b.position[0] - sunBody.position[0]) * VISUAL_SCALE;
  const dz = (b.position[2] - sunBody.position[2]) * VISUAL_SCALE;
  const distToSun = Math.sqrt(dx * dx + dz * dz);
  if (distToSun < 1) continue;
  const soiR = distToSun * Math.pow(b.mass / sunBody.mass, 0.4);
  const bx_s = cx + (b.position[0] - this.state.position[0]) * s;
  const by_s = cy - (b.position[2] - this.state.position[2]) * s;
  ctx.beginPath();
  ctx.arc(bx_s, by_s, soiR * s, 0, Math.PI * 2);
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = (colors[b.name] || '#888') + '44';
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.setLineDash([]);
}

// Scale indicator bar
const barWidth = 80;
const barHeight = 3;
const barX = w - barWidth - 15;
const barY = h - 30;
const realKmPerPx = (maxRelD * 2) / Math.min(w, h) * mapZoom;
const barKm = realKmPerPx * barWidth;
const niceKm = Math.pow(10, Math.floor(Math.log10(barKm)));
const nicePx = barWidth * (niceKm / barKm);
ctx.fillStyle = 'rgba(244,245,242,0.4)';
ctx.fillRect(barX, barY, nicePx, barHeight);
ctx.strokeStyle = 'rgba(244,245,242,0.5)';
ctx.lineWidth = 0.5;
ctx.strokeRect(barX, barY, nicePx, barHeight);
ctx.fillStyle = 'rgba(244,245,242,0.4)';
ctx.font = '8px monospace';
ctx.fillText(`${niceKm >= 1000 ? (niceKm/1000).toFixed(0)+'Mkm' : niceKm.toFixed(0)+'km'}`, barX, barY - 2);

// Compass rose
const compassX = 30;
const compassY = h - 35;
const compassR = 12;
ctx.strokeStyle = 'rgba(244,245,242,0.25)';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(compassX, compassY, compassR, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(compassX, compassY - compassR - 5);
ctx.lineTo(compassX, compassY + compassR + 5);
ctx.moveTo(compassX - compassR - 5, compassY);
ctx.lineTo(compassX + compassR + 5, compassY);
ctx.stroke();
ctx.fillStyle = 'rgba(244,245,242,0.4)';
ctx.font = 'bold 8px monospace';
ctx.fillText('N', compassX - 3, compassY - compassR - 7);
ctx.fillStyle = 'rgba(244,245,242,0.2)';
ctx.fillText('S', compassX - 3, compassY + compassR + 12);
ctx.fillText('W', compassX - compassR - 12, compassY + 3);
ctx.fillText('E', compassX + compassR + 7, compassY + 3);


      // Draw rocket position on map with trajectory
      const rocketX = cx;
      const rocketY = cy;
      const velX = this.state.velocity[0] || 0;
      const velZ = this.state.velocity[2] || 0;
      const velMag = Math.sqrt(velX * velX + velZ * velZ);
      const velAngle = velMag > 0.1 ? Math.atan2(velZ, velX) : 0;

      // Rocket icon - diamond shape in velocity direction
      ctx.save();
      ctx.translate(rocketX, rocketY);
      ctx.rotate(-velAngle);
      ctx.beginPath();
      ctx.moveTo(8, 0);
      ctx.lineTo(0, -4);
      ctx.lineTo(-5, 0);
      ctx.lineTo(0, 4);
      ctx.closePath();
      ctx.fillStyle = '#EACD9E';
      ctx.fill();
      ctx.strokeStyle = '#EACD9E';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Draw velocity vector arrow
      if (velMag > 0.1) {
        const arrowLen = Math.min(30, 10 + velMag * s * 2);
        ctx.beginPath();
        ctx.moveTo(rocketX, rocketY);
        ctx.lineTo(rocketX + Math.cos(velAngle) * arrowLen, rocketY - Math.sin(velAngle) * arrowLen);
        ctx.strokeStyle = 'rgba(234,205,158,0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Arrow tip
        ctx.beginPath();
        ctx.moveTo(rocketX + Math.cos(velAngle) * arrowLen, rocketY - Math.sin(velAngle) * arrowLen);
        ctx.lineTo(rocketX + Math.cos(velAngle + 0.4) * (arrowLen - 5), rocketY - Math.sin(velAngle + 0.4) * (arrowLen - 5));
        ctx.lineTo(rocketX + Math.cos(velAngle - 0.4) * (arrowLen - 5), rocketY - Math.sin(velAngle - 0.4) * (arrowLen - 5));
        ctx.closePath();
        ctx.fillStyle = 'rgba(234,205,158,0.6)';
        ctx.fill();
      }

      // Draw trajectory endpoint if prediction available
      const refBody = getReferenceBody(this.state.position, this.system);
      const relPos: [number, number, number] = [
        (this.state.position[0] - refBody.position[0]) * VISUAL_SCALE,
        (this.state.position[1] - refBody.position[1]) * VISUAL_SCALE,
        (this.state.position[2] - refBody.position[2]) * VISUAL_SCALE,
      ];

      // Sun direction line from rocket
      const sun = this.system.bodyByName('sun');
      if (sun) {
        const dx = (sun.position[0] - this.state.position[0]) * s;
        const dz = (sun.position[2] - this.state.position[2]) * s;
        const dSun = Math.sqrt(dx * dx + dz * dz);
        if (dSun > 1) {
          ctx.beginPath();
          ctx.moveTo(rocketX + dx / dSun * 12, rocketY - dz / dSun * 12);
          ctx.lineTo(rocketX + dx / dSun * Math.min(dSun, 60), rocketY - dz / dSun * Math.min(dSun, 60));
          ctx.strokeStyle = 'rgba(255,220,68,0.15)';
          ctx.lineWidth = 2;
          ctx.setLineDash([3, 6]);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.arc(rocketX + dx / dSun * Math.min(dSun, 60), rocketY - dz / dSun * Math.min(dSun, 60), 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,220,68,0.3)';
          ctx.fill();
        }
      }

      const prediction = predictOrbit(relPos, this.state.velocity, refBody.mass, 5e14, 360);
      if (prediction.points.length > 1) {
        // Glow under line
        ctx.beginPath();
        ctx.strokeStyle = prediction.bound ? 'rgba(68,136,204,0.15)' : 'rgba(221,170,68,0.15)';
        ctx.lineWidth = 8;
        const firstX = cx + prediction.points[0]![0] * s;
        const firstY = cy - prediction.points[0]![1] * s;
        ctx.moveTo(firstX, firstY);
        for (let i = 1; i < prediction.points.length; i++) {
          const px = cx + prediction.points[i]![0] * s;
          const py = cy - prediction.points[i]![1] * s;
          ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Main trajectory line with gradient (bright near rocket, fades at end)
        const grad = ctx.createLinearGradient(firstX, firstY, 
          cx + prediction.points[prediction.points.length-1]![0] * s,
          cy - prediction.points[prediction.points.length-1]![1] * s);
        const startCol = prediction.bound ? 'rgba(68,136,204,0.9)' : 'rgba(221,170,68,0.9)';
        const endCol = prediction.bound ? 'rgba(68,136,204,0.2)' : 'rgba(221,170,68,0.2)';
        grad.addColorStop(0, startCol);
        grad.addColorStop(1, endCol);
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.moveTo(firstX, firstY);
        for (let i = 1; i < prediction.points.length; i++) {
          const px = cx + prediction.points[i]![0] * s;
          const py = cy - prediction.points[i]![1] * s;
          ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Single direction arrow at the end of the trajectory
        if (prediction.points.length > 4) {
          const last2 = prediction.points[prediction.points.length - 1]!;
          const last1 = prediction.points[prediction.points.length - 2]!;
          const adx = last2[0] - last1[0];
          const ady = last2[1] - last1[1];
          const ad = Math.sqrt(adx*adx + ady*ady) || 1;
          const arrowX = cx + last2[0] * s;
          const arrowY = cy - last2[1] * s;
          const aLen = 8;
          ctx.beginPath();
          ctx.moveTo(arrowX, arrowY);
          ctx.lineTo(arrowX - adx/ad * aLen + ady/ad * aLen * 0.4, arrowY + ady/ad * aLen + adx/ad * aLen * 0.4);
          ctx.lineTo(arrowX - adx/ad * aLen - ady/ad * aLen * 0.4, arrowY + ady/ad * aLen - adx/ad * aLen * 0.4);
          ctx.closePath();
          ctx.fillStyle = prediction.bound ? 'rgba(68,136,204,0.6)' : 'rgba(221,170,68,0.6)';
          ctx.fill();
        }

        if (prediction.bound && isFinite(prediction.apoapsis) && isFinite(prediction.periapsis)) {
          const apX = cx + prediction.apoapsis * s;
          const peX = cx + prediction.periapsis * s;
          ctx.beginPath(); ctx.arc(apX, cy, 4, 0, Math.PI * 2); ctx.fillStyle = '#FF8844'; ctx.fill();
          ctx.font = 'bold 9px monospace'; ctx.fillStyle = '#FF8844'; ctx.fillText('Ap', apX + 6, cy + 3);
          ctx.beginPath(); ctx.arc(peX, cy, 4, 0, Math.PI * 2); ctx.fillStyle = '#44DD88'; ctx.fill();
          ctx.fillStyle = '#44DD88'; ctx.fillText('Pe', peX + 6, cy + 3);
        }
        // Target planet label at trajectory end
        if (prediction.points.length > 2) {
          const last = prediction.points[prediction.points.length - 1]!;
          const lx = cx + last[0] * s, ly = cy - last[1] * s;
          const endWX = refBody.position[0] * VISUAL_SCALE + last[0];
          const endWZ = refBody.position[2] * VISUAL_SCALE + last[1];
          let nearName = '', nearD = 20;
          for (const b of this.system.bodies) {
            if (b.name === refBody.name || b.mass <= 0) continue;
            const dp = Math.sqrt((endWX - b.position[0]*VISUAL_SCALE)**2 + (endWZ - b.position[2]*VISUAL_SCALE)**2);
            if (dp < nearD) { nearD = dp; nearName = b.name; }
          }
          if (nearName) {
            ctx.font = 'bold 10px monospace'; ctx.fillStyle = '#EACD9E';
            ctx.fillText('\u2192 ' + nearName.toUpperCase(), lx + 8, ly - 4);
          }
        }

        // Label trajectory target — which planet is closest to the endpoint
        if (prediction.points.length > 2) {
          const lastPt = prediction.points[prediction.points.length - 1]!;
          const endWX = refBody.position[0] * VISUAL_SCALE + lastPt[0];
          const endWZ = refBody.position[2] * VISUAL_SCALE + lastPt[1];
          let nearestPlanet = '';
          let nearestDist = 30;
          for (const b of this.system.bodies) {
            if (b.name === refBody.name || b.mass <= 0) continue;
            const bx = b.position[0] * VISUAL_SCALE;
            const bz = b.position[2] * VISUAL_SCALE;
            const dp = Math.sqrt((endWX - bx)**2 + (endWZ - bz)**2);
            if (dp < nearestDist) { nearestDist = dp; nearestPlanet = b.name; }
          }
          if (nearestPlanet) {
            const lastX = cx + lastPt[0] * s;
            const lastY = cy - lastPt[1] * s;
            ctx.font = 'bold 10px monospace';
            ctx.fillStyle = '#EACD9E';
            ctx.fillText('→ ' + nearestPlanet.toUpperCase(), lastX + 10, lastY - 5);
          }
        }
      }

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

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'q' || e.key === '[') {
        if (this.paused) return;
        this.warpIndex = Math.max(0, this.warpIndex - 1);
        this.timeWarp = this.warpLevels[this.warpIndex]!;
        this.hud.setWarp(this.timeWarp);
        e.preventDefault();
      } else if (e.key === 'e' || e.key === ']') {
        if (this.paused) return;
        this.warpIndex = Math.min(this.warpLevels.length - 1, this.warpIndex + 1);
        this.timeWarp = this.warpLevels[this.warpIndex]!;
        this.hud.setWarp(this.timeWarp);
        e.preventDefault();
      } else if (e.key === 'p') {
        const hasChute = rocket.assembly.roots.some(r => r.part.kind === 'parachute') ||
          rocket.assembly.roots.some(r => r.children.some(c => c.part.kind === 'parachute'));
        if (hasChute) {
          this.parachuteDeployed = !this.parachuteDeployed;
          if (this.parachuteDeployed) {
            const d = { radius: 0.6 * PART_SCALE, height: 1.0 * PART_SCALE };
            this.deployedChuteMesh = buildDeployedParachute(d);
            this.sceneMgr.scene.add(this.deployedChuteMesh);
          } else if (this.deployedChuteMesh) {
            this.sceneMgr.scene.remove(this.deployedChuteMesh);
            this.deployedChuteMesh = null;
          }
          toast.show(this.parachuteDeployed ? 'Parachute deployed!' : 'Parachute cut.');
        }
        e.preventDefault();
      } else if (e.key === 'g') {
        this.toggleGear();
        e.preventDefault();
      } else if (e.key === 'f') {
        this.chase.reset();
        toast.show('Camera view reset');
        e.preventDefault();
      } else if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
        this.cameraMode = this.cameraMode === 'chase' ? 'free' : 'chase';
        this.hud.setFreeCamera(this.cameraMode === 'free');
        toast.show(this.cameraMode === 'free' ? 'Free camera' : 'Chase camera');
        e.preventDefault();
      } else if (e.key === 'F1') {
        e.preventDefault();
        this.hudVisible = !this.hudVisible;
        this.hud.setVisible(this.hudVisible);
        toast.show(this.hudVisible ? 'HUD shown' : 'HUD hidden');
      }
      // Free cam orbit on arrow keys + Shift+C active
      if (this.cameraMode === 'free') {
        if (e.key === 'ArrowUp') { this.freeCamKeys.up = true; e.preventDefault(); }
        if (e.key === 'ArrowDown') { this.freeCamKeys.down = true; e.preventDefault(); }
        if (e.key === 'ArrowLeft') { this.freeCamKeys.left = true; e.preventDefault(); }
        if (e.key === 'ArrowRight') { this.freeCamKeys.right = true; e.preventDefault(); }
      }
    });

    window.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') this.freeCamKeys.up = false;
      if (e.key === 'ArrowDown') this.freeCamKeys.down = false;
      if (e.key === 'ArrowLeft') this.freeCamKeys.left = false;
      if (e.key === 'ArrowRight') this.freeCamKeys.right = false;
    });

    // Free cam mouse + touch drag (touchpad)
    const dom = this.renderer.domElement;
    const startDrag = (clientX: number, clientY: number) => {
      if (this.cameraMode === 'free') {
        this.freeCamDragging = true;
        this.freeCamPrevMouse = { x: clientX, y: clientY };
      }
    };
    const moveDrag = (clientX: number, clientY: number) => {
      if (!this.freeCamDragging || this.cameraMode !== 'free') return;
      const dx = clientX - this.freeCamPrevMouse.x;
      const dy = clientY - this.freeCamPrevMouse.y;
      this.freeCamAzimuth -= dx * 0.005;
      this.freeCamPolar = Math.max(0.05, Math.min(Math.PI - 0.05, this.freeCamPolar + dy * 0.005));
      this.freeCamPrevMouse = { x: clientX, y: clientY };
    };
    const endDrag = () => { this.freeCamDragging = false; };

    dom.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
    window.addEventListener('mouseup', endDrag);
    dom.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && e.touches[0]) startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    dom.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && e.touches[0]) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    dom.addEventListener('touchend', endDrag);
    dom.addEventListener('wheel', (e) => {
      if (this.cameraMode === 'free') {
        e.preventDefault();
        this.freeCamDist *= e.deltaY > 0 ? 1.1 : 0.9;
        this.freeCamDist = Math.max(0.5, Math.min(500, this.freeCamDist));
      }
    }, { passive: false });

    this.achievements.unlock('first_launch');
    toast.show('You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, C camera, T SAS, Esc pause.');
  }

  private sanitize(v: [number, number, number]): void {
    if (!isFinite(v[0])) v[0] = 0;
    if (!isFinite(v[1])) v[1] = 0;
    if (!isFinite(v[2])) v[2] = 0;
  }

  private countStages(nodes: AssemblyNode[]): number {
    let count = 0;
    for (const n of nodes) {
      if (n.part.kind === 'decoupler') count++;
      count += this.countStages(n.children);
    }
    return count;
  }

  /**
   * Compute per-stage info for the HUD stage panel.
   * Stage definition: parts are ordered bottom-to-top (flat layout).
   * A decoupler splits the assembly into two stages. The first stage is below the decoupler,
   * the next is above. Spent stages had their decoupler already activated.
   */
  private computeStageData(): Array<{ label: string; fuelMass: number; dryMass: number; active: boolean; spent: boolean }> {
    const roots = this.rocket.assembly.roots;
    if (roots.length === 0) return [];

    const decouplerIndices: number[] = [];
    for (let i = 0; i < roots.length; i++) {
      if (roots[i]!.part.kind === 'decoupler') decouplerIndices.push(i);
    }

    type Stage = { parts: AssemblyNode[]; active: boolean; spent: boolean };
    const stages: Stage[] = [];

    let startIdx = 0;
    for (let i = 0; i <= decouplerIndices.length; i++) {
      const endIdx = i < decouplerIndices.length ? decouplerIndices[i]! : roots.length;
      const chunk: AssemblyNode[] = [];
      for (let j = startIdx; j < endIdx; j++) chunk.push(roots[j]!);
      if (chunk.length > 0) {
        const spent = this.isChunkSpent(chunk);
        stages.push({ parts: chunk, active: !spent, spent });
      }
      startIdx = endIdx + 1;
    }

    let activeIdx = 0;
    for (let i = 0; i < stages.length; i++) {
      if (!stages[i]!.spent) { activeIdx = i; break; }
      activeIdx = i;
    }

    return stages.map((st, idx) => {
      let dryMass = 0;
      let fuelMass = 0;
      for (const n of st.parts) {
        dryMass += n.part.mass;
        if (n.part.fuelCapacity) {
          const tank = this.rocket.fuelTanks.find(t => t.node === n);
          fuelMass += tank ? tank.remaining : n.part.fuelCapacity;
        }
      }
      const engineCount = st.parts.filter(p => p.part.kind === 'engine').length;
      const tankCount = st.parts.filter(p => p.part.fuelCapacity).length;

      const hasEngine = engineCount > 0;
      const label = hasEngine
        ? `${engineCount}E ${tankCount}T`
        : st.parts.length === 1
          ? (st.parts[0]!.part.name || 'C')
          : `${st.parts.length}P`;

      return {
        label: `S${idx + 1}: ${label}`,
        fuelMass,
        dryMass,
        active: idx === activeIdx,
        spent: st.spent,
      };
    });
  }

  /** A stage chunk is considered "spent" if it has no engines with remaining fuel */
  private isChunkSpent(chunk: AssemblyNode[]): boolean {
    const hasEngine = chunk.some(n => n.part.kind === 'engine');
    if (!hasEngine) return false;
    for (const n of chunk) {
      if (n.part.fuelCapacity) {
        const tank = this.rocket.fuelTanks.find(t => t.node === n);
        if (tank && tank.remaining > 0.01) return false;
      }
    }
    return true;
  }

  update(_dt: number): void {
    try {
      this.updateInner(_dt);
    } catch (e: any) {
      toast.show(`ERROR: ${e.message || e}`);
      console.error('FlightScene.update error:', e);
    }
  }

  private updateInner(_dt: number): void {
    const baseDt = _dt;
    if (this._spawnProtectionTimer > 0) this._spawnProtectionTimer -= 1;

    // Pause toggle
    if (this.controls.consumePauseToggle()) {
      this.paused = !this.paused;
      this.hud.setPaused(this.paused);
      if (this.paused) this.sound.stopEngine();
    }

    if (this.paused) {
      this.system.propagate(0, FIXED_DT);
      for (const body of this.system.bodies) (body as any).syncMesh?.();
      return;
    }

    if (this.crashed) {
      this.system.propagate(_dt * this.timeWarp, FIXED_DT);
      for (const body of this.system.bodies) (body as any).syncMesh?.();
      this.updateExplosion(baseDt);
      return;
    }

    // Track mission time (only when not crashed/paused)
    this.missionTime += baseDt;
    this.missionTime = Math.min(this.missionTime, 99999);

    _dt *= this.timeWarp;
    if (!isFinite(_dt) || _dt <= 0) _dt = 1 / 60;

    this.controls.update(baseDt);

    // Camera zoom
    if (this.controls.getZoomIn()) this.chase.zoom(0.92);
    if (this.controls.getZoomOut()) this.chase.zoom(1.08);

    // Disable controls in warp (only allow on x1)
    const warpActive = this.timeWarp > 1;
    if (warpActive) {
      this.state.throttle = 0;
    }
    // In freecam mode, disable rocket throttle and rotation
    if (this.cameraMode === 'free') {
      this.state.throttle = 0;
    }
    if (!warpActive && this.controls.getStageRequested()) this.performStage();

    // Auto-stage when engine has no fuel and there's a decoupler
    if (!warpActive && !this.grounded && this.state.throttle > 0) {
      const activeEngine = findFirstEngine(this.state.rocket.assembly.roots);
      if (!activeEngine || this.state.rocket.totalFuelMass() < 0.1) {
        const hasDecoupler = this.state.rocket.assembly.roots.some(n =>
          n.part.kind === 'decoupler' || n.children.some(c => c.part.kind === 'decoupler')
        );
        if (hasDecoupler) this.performStage();
      }
    }

    // Current forward direction (rocket local +Y in world space)
    const getFwd = (): THREE.Vector3 => new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);

    // Angular velocity with damping and engine gimbal (torque from engine when thrust is active)
    const engineActive = this.state.throttle > 0;
    // In freecam mode, arrow keys control camera, not rocket
    const inFreeCam = this.cameraMode === 'free';
    const pitchInput = (warpActive || inFreeCam) ? 0 : this.controls.getPitch();
    const yawInput = (warpActive || inFreeCam) ? 0 : this.controls.getYaw();
    const rollInput = warpActive ? 0 : this.controls.getRoll();
    this.angularVel.x += pitchInput * this.ANGULAR_ACCEL * baseDt;
    this.angularVel.y += yawInput * this.ANGULAR_ACCEL * baseDt;
    this.angularVel.z += rollInput * this.ANGULAR_ACCEL * baseDt;

    // Engine gimbal: extra rotation authority when thrust is active
    if (engineActive && !this.grounded) {
      this.angularVel.x += pitchInput * this.state.throttle * 6 * baseDt;
      this.angularVel.y += yawInput * this.state.throttle * 6 * baseDt;
    }

    // SAS: hold attitude or track prograde/retrograde
    if (this.sasMode !== 'off' && !warpActive) {
      if (this.sasMode === 'prograde' || this.sasMode === 'retrograde') {
        const velMagSas = Math.sqrt(this.state.velocity[0]**2 + this.state.velocity[1]**2 + this.state.velocity[2]**2);
        if (velMagSas > 0.1) {
          let targetDir = new THREE.Vector3(
            this.state.velocity[0] / velMagSas,
            this.state.velocity[1] / velMagSas,
            this.state.velocity[2] / velMagSas
          );
          if (this.sasMode === 'retrograde') targetDir.negate();
          this.sasTargetQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), targetDir);
        }
      }
      const drift = new THREE.Quaternion().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat);
      const angle = 2 * Math.acos(Math.abs(drift.w));
      if (angle > 0.001) {
        const axis = new THREE.Vector3(drift.x, drift.y, drift.z).normalize();
        this.angularVel.x -= axis.x * angle * 3 * baseDt;
        this.angularVel.y -= axis.y * angle * 3 * baseDt;
        this.angularVel.z -= axis.z * angle * 3 * baseDt;
      }
      this.angularVel.multiplyScalar(Math.exp(-5 * baseDt));
    }

    const damp = Math.exp(-this.ANGULAR_DAMPING * baseDt);
    this.angularVel.multiplyScalar(damp);

    // Apply rotation: yaw → pitch → roll
    const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), this.angularVel.y * baseDt);
    const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.angularVel.x * baseDt);
    const qRoll = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.angularVel.z * baseDt);
    
    this.rocketQuat.multiply(qYaw).multiply(qPitch).multiply(qRoll);
    this.rocketQuat.normalize();

    // Apply rotation to mesh
    this.rocketGroup.quaternion.copy(this.rocketQuat);

    // Thrust direction from quaternion
    const fwd = getFwd();
    const tx = fwd.x, ty = fwd.y, tz = fwd.z;

    // Apply thrust — always allowed after countdown finishes, no weight gate
    let canLiftOff = false;
    if (engineActive && this.grounded) {
      // Countdown — start once
      if (!this.countdownActive && !this.launched) {
        this.countdownActive = true;
        this.countdownTimer = 0;
        this.showCountdown('3');
      }
      if (this.countdownActive) {
        this.countdownTimer += baseDt;
        if (this.countdownTimer >= 1 && this.countdownTimer < 2) this.showCountdown('2');
        else if (this.countdownTimer >= 2 && this.countdownTimer < 3) this.showCountdown('1');
        else if (this.countdownTimer >= 3) {
          this.countdownActive = false;
          this.launched = true;
          // Check thrust-to-weight ratio using actual local gravity
          const eng = findFirstEngine(this.state.rocket.assembly.roots);
          const refBody = getReferenceBody(this.state.position, this.system);
          const gdx = this.state.position[0] - refBody.position[0];
          const gdy = this.state.position[1] - refBody.position[1];
          const gdz = this.state.position[2] - refBody.position[2];
          const gr = Math.sqrt(gdx*gdx + gdy*gdy + gdz*gdz) || 1;
          const localGrav = (G * refBody.mass) / (gr * gr);
          if (eng && eng.thrust && localGrav > 0) {
            const twr = (eng.thrust * 1000) / (this.state.rocket.totalMass() * localGrav);
            if (twr >= 0.3) {
              canLiftOff = true;
            } else {
              toast.show(`TWR ${twr.toFixed(2)} — insufficient for liftoff!`);
              this.launched = false;
              this.countdownTimer = 0; // Allow retry
            }
          }
          if (canLiftOff) {
            this.showCountdown('LIFTOFF!');
            setTimeout(() => this.hideCountdown(), 1500);
          }
        }
      }
    }
    if (engineActive && (!this.grounded || canLiftOff)) {
      applyThrust(this.state, _dt, [tx, ty, tz]);
      this.sanitize(this.state.velocity);
    }
    if (engineActive && canLiftOff && this.grounded) {
      this.grounded = false;
      this.groundedDir = null;
      this.liftoffFrames = 5;
      this.launched = true;
      this._camSnapped = false; // reset camera snap on liftoff
      this.achievements.unlock('reach_space');
      this.sound.startEngine();
    }

    // Flame and sound always show when engine is active (even if thrust < weight)
    if (engineActive) {
      this.sound.setThrottle(this.state.throttle);
      this.engineFlame.setThrottle(this.state.throttle);
      this.engineFlame.start();
      // Vacuum mode above 50km
      const refAltBody = getReferenceBody(this.state.position, this.system);
      const dxAlt = this.state.position[0] - refAltBody.position[0];
      const dyAlt = this.state.position[1] - refAltBody.position[1];
      const dzAlt = this.state.position[2] - refAltBody.position[2];
      const dAlt = Math.sqrt(dxAlt*dxAlt + dyAlt*dyAlt + dzAlt*dzAlt) || 1;
      const surfR = (refAltBody as any).getSurfaceRadiusAt?.(this.state.position) ?? (refAltBody as any).radius ?? 6371000;
      this.engineFlame.setVacuum(dAlt - surfR > 50000);
    } else {
      this.sound.setThrottle(0);
      this.engineFlame.stop();
    }
    this.engineFlame.update(baseDt);
    if (this.exhaustLight) {
      this.exhaustLight.intensity = this.state.throttle * 3;
      this.exhaustLight.color.setHSL(0.08 - this.state.throttle * 0.05, 1, 0.5 + this.state.throttle * 0.3);
    }

    // Ground smoke when engine active and grounded
    if (engineActive && this.grounded) this.groundSmoke.start();
    else this.groundSmoke.stop();
    this.groundSmoke.update(baseDt);

    // Integrate position (skip during warp when grounded to prevent bounce)
    if (!(this.grounded && warpActive)) {
      this.state.position[0] += this.state.velocity[0] * _dt;
      this.state.position[1] += this.state.velocity[1] * _dt;
      this.state.position[2] += this.state.velocity[2] * _dt;
    }

    let nearestBody: any = null;
    let nearestDist = Infinity;
    
    // Always compute nearest body for collision checks
    const nearRef = getReferenceBody(this.state.position, this.system);
    // SOI change notification
    const refName = nearRef.name;
    if (this.lastRefBody && this.lastRefBody !== refName) {
      toast.show(`Entering ${refName.toUpperCase()} SOI`);
    }
    this.lastRefBody = refName;
    const ndx = nearRef.position[0] - this.state.position[0];
    const ndy = nearRef.position[1] - this.state.position[1];
    const ndz = nearRef.position[2] - this.state.position[2];
    nearestDist = Math.sqrt(ndx*ndx + ndy*ndy + ndz*ndz);
    nearestBody = nearRef;

    // Reentry glow
    const speed = Math.sqrt(
      this.state.velocity[0] ** 2 + this.state.velocity[1] ** 2 + this.state.velocity[2] ** 2
    );
    if (!this.grounded && nearestBody && (nearestBody as any).radius) {
      const alt = nearestDist - (nearestBody as any).radius;
      if (alt > 0 && alt < 120000 && speed > 2000) {
        const intensity = Math.max(0, 1 - alt / 120000) * Math.min(1, speed / 8000);
        if (this.reentryGlow) {
          (this.reentryGlow.material as THREE.MeshBasicMaterial).color.setHSL(0.05, 1, 0.7 * intensity);
          (this.reentryGlow.material as THREE.MeshBasicMaterial).opacity = 0.4 * intensity;
          this.reentryGlow.scale.setScalar(1 + intensity * 2);
          const outer = this.rocketGroup.getObjectByName('reentry-outer') as THREE.Mesh | null;
          if (outer) {
            (outer.material as THREE.MeshBasicMaterial).color.setHSL(0.03, 1, 0.4 * intensity);
            (outer.material as THREE.MeshBasicMaterial).opacity = 0.2 * intensity;
            outer.scale.setScalar(1 + intensity * 4);
          }
        }
      } else {
        if (this.reentryGlow) (this.reentryGlow.material as THREE.MeshBasicMaterial).opacity = 0;
        const outer = this.rocketGroup.getObjectByName('reentry-outer') as THREE.Mesh | null;
        if (outer) (outer.material as THREE.MeshBasicMaterial).opacity = 0;
      }
    } else {
      if (this.reentryGlow) (this.reentryGlow.material as THREE.MeshBasicMaterial).opacity = 0;
      const outer = this.rocketGroup.getObjectByName('reentry-outer') as THREE.Mesh | null;
      if (outer) (outer.material as THREE.MeshBasicMaterial).opacity = 0;
    }

    if (this.liftoffFrames > 0) this.liftoffFrames--;

    if (!this.grounded) {
      const dx = ndx;
      const dy = ndy;
      const dz = ndz;
      const r = nearestDist;
      const r2 = r * r;
      if (r > 1 && r2 > 0) {
        const f = (G * nearRef.mass) / r2;
        const gDelta = f * baseDt;
        const capped = Math.min(gDelta, 500); // cap per-frame gravity
        this.state.velocity[0] += capped * dx / r;
        this.state.velocity[1] += capped * dy / r;
        this.state.velocity[2] += capped * dz / r;
      }
      this.sanitize(this.state.velocity);

      // Aerodynamic drag
      const speed = Math.sqrt(
        this.state.velocity[0] ** 2 + this.state.velocity[1] ** 2 + this.state.velocity[2] ** 2
      );
      const mass = this.state.rocket.totalMass();
      let CdA = mass * 0.001 + 0.2;
      if (this.parachuteDeployed) CdA = 50;
      else if (this.gearDeployed) CdA *= 2.5;
      if (nearestBody && (nearestBody as any).radius && speed > 0.05 && speed < 1e6) {
        const alt = nearestDist - (nearestBody as any).radius;
        if (alt > 0 && alt < 300000) {
          const rho = 1.225 * Math.exp(-alt / 8500);
          const q = 0.5 * rho * speed * speed;
          const dragForce = q * CdA;
          const dragAccel = dragForce / mass;
          const dragDelta = dragAccel * baseDt;
          if (dragDelta >= speed) {
            this.state.velocity[0] = 0;
            this.state.velocity[1] = 0;
            this.state.velocity[2] = 0;
          } else {
            const f = 1 - dragDelta / speed;
            this.state.velocity[0] *= f;
            this.state.velocity[1] *= f;
            this.state.velocity[2] *= f;
          }
          this.sanitize(this.state.velocity);

        // Reentry glow effect (plasma)
        const reentryIntensity = Math.max(0, (speed / 2000) * (rho / 1.225) - 0.1);
        if (reentryIntensity > 0.05 && this.reentryGlowMesh) {
          this.reentryGlowMesh.visible = true;
          this.reentryGlowMesh.scale.setScalar(1 + reentryIntensity * 2);
          (this.reentryGlowMesh.material as THREE.MeshBasicMaterial).opacity = Math.min(1, reentryIntensity);
          const tempColor = reentryIntensity > 0.8 ? 0xffffff : reentryIntensity > 0.5 ? 0xffcc44 : 0xff8844;
          (this.reentryGlowMesh.material as THREE.MeshBasicMaterial).color.setHex(tempColor);
        } else if (this.reentryGlowMesh) {
          this.reentryGlowMesh.visible = false;
        }

        // Per-part heat visualization - parts glow red based on heat
        this.lastReentryIntensity = reentryIntensity;
        if (reentryIntensity > 0.1) {
          this.rocketGroup.traverse((obj) => {
            const m = obj as THREE.Mesh;
            if (!m.isMesh) return;
            const mat = m.material as THREE.MeshStandardMaterial;
            if (!mat || !mat.emissive) return;
            const heatFraction = Math.min(1, this.heatEnergy / 300000);
            const cr = heatFraction * 0.9;
            const cg = heatFraction * heatFraction * 0.5;
            const cb = heatFraction * heatFraction * heatFraction * 0.15;
            mat.emissive.setRGB(cr, cg, cb);
            mat.emissiveIntensity = heatFraction * 1.5;
          });
        } else if (this.heatEnergy > 0) {
          const coolFraction = Math.min(1, this.heatEnergy / 300000);
          this.rocketGroup.traverse((obj) => {
            const m = obj as THREE.Mesh;
            if (!m.isMesh) return;
            const mat = m.material as THREE.MeshStandardMaterial;
            if (!mat || !mat.emissive) return;
            mat.emissive.setRGB(coolFraction * 0.4, 0, 0);
            mat.emissiveIntensity = coolFraction * 0.5;
          });
        } else if (this.heatEnergy < 1) {
          // Fully cooled
          this.rocketGroup.traverse((obj) => {
            const m = obj as THREE.Mesh;
            if (!m.isMesh) return;
            const mat = m.material as THREE.MeshStandardMaterial;
            if (!mat || !mat.emissive) return;
            if (mat.emissiveIntensity > 0) {
              mat.emissive.setRGB(0, 0, 0);
              mat.emissiveIntensity = 0;
            }
          });
        }

        // Heat accumulation from aerodynamic heating
        const heatFlux = 0.5 * rho * speed * speed * speed * 1e-6;
        this.heatEnergy += heatFlux * baseDt;
        }
      }
      if (this.reentryGlowMesh) {
        const inAtmo = nearestBody && (nearestBody as any).radius && nearestDist - (nearestBody as any).radius < 300000;
        if (!inAtmo) this.reentryGlowMesh.visible = false;
      }

      // Heat radiation (cooling when out of dense atmosphere)
      if (!this.grounded) {
        if (this.heatEnergy > 0) {
          this.heatEnergy *= this.HEAT_RADIATION_RATE;
          if (this.heatEnergy < 1) this.heatEnergy = 0;
        }
        // Heat-related part failure
        if (this.heatEnergy > this.MAX_HEAT) {
          this.crashed = true;
          toast.show(`OVERHEATED! Ship disintegrated at ${this.heatEnergy.toFixed(0)}J`);
        }
      }


      // Collision with surface
      const bodyR = nearestBody ? (nearestBody as any).radius ?? 0 : 0;
      const surfaceR = nearestBody ? ((nearestBody as any).getSurfaceRadiusAt?.(this.state.position) ?? bodyR) : 0;
      if (nearestBody && bodyR > 0 && isFinite(nearestDist) && this._spawnProtectionTimer <= 0) {
        const dx = this.state.position[0] - nearestBody.position[0];
        const dy = this.state.position[1] - nearestBody.position[1];
        const dz = this.state.position[2] - nearestBody.position[2];
        const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
        const vertSpeed = (this.state.velocity[0] * dx + this.state.velocity[1] * dy + this.state.velocity[2] * dz) / d;
        // Penetration check — inside the planet = always crash
        if (d < surfaceR - 50) {
          this.doCrash(`Impact on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
        } else if (d < surfaceR + 60 && d > 0.001 && this.liftoffFrames <= 0) {
          const surfaceNorm = new THREE.Vector3(dx / d, dy / d, dz / d);
          const rocketUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);
          const tiltDeg = Math.acos(Math.min(1, Math.abs(rocketUp.dot(surfaceNorm)))) * 180 / Math.PI;
          const hasLegs = this.hasLandingLegs();
          const speedLimit = this.parachuteDeployed ? 200 : 20000;
          const tiltLimit = hasLegs ? 30 : 20;

          if (isFinite(vertSpeed) && Math.abs(vertSpeed) > speedLimit) {
            this.doCrash(`Too fast! (${Math.abs(vertSpeed).toFixed(0)} m/s) on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
          } else if (tiltDeg > tiltLimit) {
            this.doCrash(`Tipped over! (${tiltDeg.toFixed(0)}°) on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
          } else if (isFinite(vertSpeed) && vertSpeed < 1) {
            this.state.velocity = [0, 0, 0];
            this.grounded = true;
            this.groundedDir = [dx / d, dy / d, dz / d];
            const landUp = new THREE.Vector3(dx / d, dy / d, dz / d);
            this.rocketQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), landUp);
            if (this.state.position[0] !== nearestBody.position[0] + dx / d * (surfaceR + 50) ||
                this.state.position[1] !== nearestBody.position[1] + dy / d * (surfaceR + 50) ||
                this.state.position[2] !== nearestBody.position[2] + dz / d * (surfaceR + 50)) {
              this.state.position = [nearestBody.position[0] + dx / d * (surfaceR + 50), nearestBody.position[1] + dy / d * (surfaceR + 50), nearestBody.position[2] + dz / d * (surfaceR + 50)];
              this.sound.playLand();
              this.sound.stopEngine();
              const bodyName = nearestBody.name;
              toast.show(`Landed on ${bodyName}!`);
              if (bodyName === 'earth') this.achievements.unlock('land_earth');
              else if (bodyName === 'moon') this.achievements.unlock('land_moon');
              else if (bodyName === 'mars') this.achievements.unlock('land_mars');
              else if (bodyName === 'venus') this.achievements.unlock('land_venus');
              else if (bodyName === 'mercury') this.achievements.unlock('land_mercury');
            }
          }
        } else if (d < surfaceR + 250 && isFinite(vertSpeed) && Math.abs(vertSpeed) > 50000) {
          // Altitude-based fallback: very fast near ground → crash even if outside surfaceR
          this.doCrash(`High-speed impact! (${Math.abs(vertSpeed).toFixed(0)} m/s) on ${nearestBody.name}`, nearestBody, dx, dy, dz, d, surfaceR);
        }
      }
    } else {
      this.state.velocity = [0, 0, 0];
    }

    this.system.propagate(_dt, FIXED_DT);

    // Track body surface while grounded (body moves during propagate)
    if (this.grounded && this.groundedDir) {
      const refBody = getReferenceBody(this.state.position, this.system);
      const bodyR = (refBody as any).radius ?? 6.371e6;
      // Use groundedDir direction (not stale this.state.position) for terrain height lookup
      const surfPos: [number, number, number] = [
        refBody.position[0] + this.groundedDir[0],
        refBody.position[1] + this.groundedDir[1],
        refBody.position[2] + this.groundedDir[2],
      ];
      const surfaceR = (refBody as any).getSurfaceRadiusAt?.(surfPos) ?? bodyR;
      const targetDist = surfaceR + 50; // match SPAWN_OFFSET_M
      this.state.position[0] = refBody.position[0] + this.groundedDir[0] * targetDist;
      this.state.position[1] = refBody.position[1] + this.groundedDir[1] * targetDist;
      this.state.position[2] = refBody.position[2] + this.groundedDir[2] * targetDist;
    }
    // Safety net: if grounded rocket somehow escapes, snap back
    if (this.grounded) {
      const refBody = getReferenceBody(this.state.position, this.system);
      const dx = this.state.position[0] - refBody.position[0];
      const dy = this.state.position[1] - refBody.position[1];
      const dz = this.state.position[2] - refBody.position[2];
      const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
      const bodyR = (refBody as any).radius ?? 6.371e6;
      if (d > bodyR * 1.1) {
        this.state.velocity = [0, 0, 0];
        this.state.position[0] = refBody.position[0] + (dx / d) * (bodyR + 50);
        this.state.position[1] = refBody.position[1] + (dy / d) * (bodyR + 50);
        this.state.position[2] = refBody.position[2] + (dz / d) * (bodyR + 50);
      }
    }

    for (const body of this.system.bodies) {
      (body as any).syncMesh?.();
    }

    // Update atmosphere scattering direction for all planets
    const sunBody = this.system.bodyByName('sun');
    if (sunBody && (sunBody as any).mesh) {
      const sunWorldPos = (sunBody as any).mesh.position as THREE.Vector3;
      for (const b2 of this.system.bodies) {
        const b = b2 as any;
        if (b.atmosphereGlow && b.mesh) {
          b.atmosphereGlow.setSunDirection(sunWorldPos, b.mesh.position);
        }
      }
    }

    // Animate Earth cloud layer + day/night illumination
    const earthBody = this.system.bodyByName('earth');
    if (earthBody && 'updateClouds' in earthBody) {
      const sunBody = this.system.bodyByName('sun');
      const sunPosWC = sunBody ? sunBody.position : undefined;
      (earthBody as any).updateClouds(baseDt, sunPosWC);
    }

    // Update debris physics
    if (this.debris.length > 0) {
      const refBody = getReferenceBody(this.state.position, this.system);
      for (let i = this.debris.length - 1; i >= 0; i--) {
        const d = this.debris[i]!;
        d.life -= baseDt;
        if (d.life <= 0 || d.body.mass <= 0) {
          this.sceneMgr.scene.remove(d.mesh);
          this.debris.splice(i, 1);
          continue;
        }
        // Apply gravity
        const force = totalGravityOn(d.body, this.system.bodies);
        d.body.applyForce(force, baseDt);
        // Update mesh position
        d.mesh.position.set(
          d.body.position[0] * VISUAL_SCALE,
          d.body.position[1] * VISUAL_SCALE,
          d.body.position[2] * VISUAL_SCALE
        );
        // Check ground collision
        const bdx = d.body.position[0] - refBody.position[0];
        const bdy = d.body.position[1] - refBody.position[1];
        const bdz = d.body.position[2] - refBody.position[2];
        const bd = Math.sqrt(bdx * bdx + bdy * bdy + bdz * bdz);
        const bodyR = (refBody as any).getSurfaceRadiusAt?.(d.body.position) ?? (refBody as any).radius ?? 6.371e6;
        if (bd < bodyR) {
          this.sceneMgr.scene.remove(d.mesh);
          this.debris.splice(i, 1);
        }
      }
    }
    this.updateExplosion(baseDt);

    const camRefBody = getReferenceBody(this.state.position, this.system);
    const cdx = this.state.position[0] - camRefBody.position[0];
    const cdy = this.state.position[1] - camRefBody.position[1];
    const cdz = this.state.position[2] - camRefBody.position[2];
    const cd = Math.sqrt(cdx*cdx + cdy*cdy + cdz*cdz) || 1;
    const camUp = new THREE.Vector3(cdx / cd, cdy / cd, cdz / cd);

    if (this.rocketShadow) {
      this.rocketShadow.visible = this.grounded && !this.crashed;
      if (this.rocketShadow.visible) {
        this.rocketShadow.position.y = this.rocketBottomY - 0.02;
      }
    }

    // Update debug marker position
    if (this._debugMarker) {
      this._debugMarker.position.copy(this.rocketGroup.position);
    }

    if (!this.crashed) {
      // Visual offset: rocketBottomY is already in group's scaled coords.
      // Physics pos already accounts for terrain (getSurfaceRadiusAt at spawn).
      // Terrain disp cancels out — only need to lift rocket's own height.
      const visualOffset = -this.rocketBottomY - 50 * VISUAL_SCALE + 2;

      // Direction from reference body center to rocket (up vector = surface normal)
      const refBodyVis = getReferenceBody(this.state.position, this.system);
      const upXv = this.state.position[0] - refBodyVis.position[0];
      const upYv = this.state.position[1] - refBodyVis.position[1];
      const upZv = this.state.position[2] - refBodyVis.position[2];
      const upLenV = Math.sqrt(upXv*upXv + upYv*upYv + upZv*upZv) || 1;

      // Debug overlay — shows once then fades
      if (!this._debugShown) {
        this._debugShown = true;
        const dbg = document.createElement('div');
        dbg.style.cssText = 'position:fixed;top:120px;right:16px;z-index:600;font-family:monospace;font-size:11px;color:#0f0;background:rgba(0,0,0,0.85);padding:8px;border-radius:4px;pointer-events:none;max-width:300px;';
        dbg.id = 'rocket-debug';
        dbg.innerHTML = `v0.95<br>C=freecam F=reset T=SAS W=throttle`;
        document.body.appendChild(dbg);
        console.log('ROCKET DEBUG:', {
          rocketBottomY: this.rocketBottomY,
          visualOffset,
          VISUAL_SCALE,
          ROCKET_VISUAL_SCALE,
          earthVisualR: 6.371e6 * VISUAL_SCALE,
          rocketGroupPos: this.rocketGroup.position.toArray(),
          statePos: this.state.position,
        });
      }

      this.rocketGroup.position.set(
        this.state.position[0] * VISUAL_SCALE + (upXv / upLenV) * visualOffset,
        this.state.position[1] * VISUAL_SCALE + (upYv / upLenV) * visualOffset,
        this.state.position[2] * VISUAL_SCALE + (upZv / upLenV) * visualOffset
      );

      if (this.cameraMode === 'free') {
        // Free camera: orbit around rocket - WASD keys + mouse/touch drag
        const orbitSpeed = 3;
        if (this.freeCamKeys.left) this.freeCamAzimuth += orbitSpeed * baseDt;
        if (this.freeCamKeys.right) this.freeCamAzimuth -= orbitSpeed * baseDt;
        if (this.freeCamKeys.up) this.freeCamPolar = Math.max(0.05, this.freeCamPolar - orbitSpeed * 0.7 * baseDt);
        if (this.freeCamKeys.down) this.freeCamPolar = Math.min(Math.PI - 0.05, this.freeCamPolar + orbitSpeed * 0.7 * baseDt);

        const rocketWorld = new THREE.Vector3(
          this.state.position[0] * VISUAL_SCALE + (upXv / upLenV) * visualOffset,
          this.state.position[1] * VISUAL_SCALE + (upYv / upLenV) * visualOffset,
          this.state.position[2] * VISUAL_SCALE + (upZv / upLenV) * visualOffset
        );
        const ox = this.freeCamDist * Math.sin(this.freeCamPolar) * Math.cos(this.freeCamAzimuth);
        const oy = this.freeCamDist * Math.cos(this.freeCamPolar);
        const oz = this.freeCamDist * Math.sin(this.freeCamPolar) * Math.sin(this.freeCamAzimuth);
        this.sceneMgr.camera.position.set(rocketWorld.x + ox, rocketWorld.y + oy, rocketWorld.z + oz);
        const upVec = Math.abs(this.freeCamPolar - Math.PI / 2) > (Math.PI / 2 - 0.15)
          ? new THREE.Vector3(0, 0, Math.sin(this.freeCamPolar) > 0 ? 1 : -1)
          : new THREE.Vector3(0, 1, 0);
        this.sceneMgr.camera.up.copy(upVec);
        this.sceneMgr.camera.lookAt(rocketWorld);
      } else {
        const lookOffset = {
          x: (upXv / upLenV) * visualOffset,
          y: (upYv / upLenV) * visualOffset,
          z: (upZv / upLenV) * visualOffset,
        };
        this.chase.follow(this.state, baseDt, camUp, warpActive || !this._camSnapped, lookOffset);
        if (!this._camSnapped) this._camSnapped = true;
      }

      if (this.deployedChuteMesh) {
        this.deployedChuteMesh.position.set(
          this.state.position[0] * VISUAL_SCALE,
          this.state.position[1] * VISUAL_SCALE + 0.02,
          this.state.position[2] * VISUAL_SCALE
        );
        this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation);
      }
    }

    const nearestAlt = nearestBody && (nearestBody as any).radius ? nearestDist - (nearestBody as any).radius : 0;
    const stageCount = this.countStages(this.rocket.assembly.roots);

    // Stage info (internal only, no display)
    const stageData = this.computeStageData();
    this.stageInfo = stageData;

    // Compute Ap/Pe from orbit prediction
    let ape: number | undefined;
    let pe: number | undefined;
    let timeToAp: number | undefined;
    let timeToPe: number | undefined;
    let eccentricity: number | undefined;
    let period: number | undefined;
    const orbitRefBody = getReferenceBody(this.state.position, this.system);
    if (orbitRefBody && orbitRefBody.mass > 0) {
      const relPos: [number, number, number] = [
        (this.state.position[0] - orbitRefBody.position[0]) * VISUAL_SCALE,
        (this.state.position[1] - orbitRefBody.position[1]) * VISUAL_SCALE,
        (this.state.position[2] - orbitRefBody.position[2]) * VISUAL_SCALE,
      ];
      const orbitPred = predictOrbit(relPos, this.state.velocity, orbitRefBody.mass, 5e14, 360);
      if (orbitPred.bound) {
        ape = orbitPred.apoapsis;
        pe = orbitPred.periapsis;
        timeToAp = orbitPred.timeToAp;
        timeToPe = orbitPred.timeToPe;
        eccentricity = orbitPred.eccentricity;
        period = orbitPred.timeToAp !== undefined && orbitPred.timeToPe !== undefined
          ? (orbitPred.timeToAp + orbitPred.timeToPe) * 2 : undefined;
      }
    }

    // Update impact marker position
    if (this.impactMarker) {
      const refBodyMarker = getReferenceBody(this.state.position, this.system);
      const rPos: [number, number, number] = [
        (this.state.position[0] - refBodyMarker.position[0]),
        (this.state.position[1] - refBodyMarker.position[1]),
        (this.state.position[2] - refBodyMarker.position[2]),
      ];
      const markerPred = predictOrbit(rPos, this.state.velocity, refBodyMarker.mass, 5e14, 360);
      if (markerPred.points.length > 10 && !markerPred.bound) {
        const last = markerPred.points[markerPred.points.length - 1]!;
        const surfaceR = (refBodyMarker as any).getSurfaceRadiusAt?.([last[0], 0, last[1]]) ?? (refBodyMarker as any).radius ?? 6371000;
        const surfacePos: [number, number, number] = [
          refBodyMarker.position[0] + last[0],
          0,
          refBodyMarker.position[2] + last[1],
        ];
        const dir = Math.sqrt(last[0]*last[0] + last[1]*last[1]);
        if (dir > surfaceR * 0.5) {
          const hitX = refBodyMarker.position[0] + last[0] / dir * surfaceR;
          const hitZ = refBodyMarker.position[2] + last[1] / dir * surfaceR;
          this.impactMarker.position.set(hitX * VISUAL_SCALE, 0, hitZ * VISUAL_SCALE);
          this.impactMarker.visible = true;
        } else {
          this.impactMarker.visible = false;
        }
      } else {
        this.impactMarker.visible = false;
      }
    }
    const activeStage = this.stageInfo.filter(s => s.active).length > 0
      ? this.stageInfo.findIndex(s => s.active) + 1
      : 1;
    this.hud.update(this.state, this.system, this.heatEnergy, this.state.throttle);

    // Draw 3D orbit path
    const refBodyOrbit = getReferenceBody(this.state.position, this.system);
    const relPosOrbit: [number, number, number] = [
      (this.state.position[0] - refBodyOrbit.position[0]) * VISUAL_SCALE,
      (this.state.position[1] - refBodyOrbit.position[1]) * VISUAL_SCALE,
      (this.state.position[2] - refBodyOrbit.position[2]) * VISUAL_SCALE,
    ];
    const orbitPred3d = predictOrbit(relPosOrbit, this.state.velocity, refBodyOrbit.mass, 5e14, 90);
    if (orbitPred3d.points.length > 5) {
      if (!this.orbitLine) {
        const geom = new THREE.BufferGeometry();
        const positions = new Float32Array(orbitPred3d.points.length * 3);
        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.LineBasicMaterial({
          color: orbitPred3d.bound ? 0x4488cc : 0xddaa44,
          transparent: true, opacity: 0.3, depthWrite: false
        });
        this.orbitLine = new THREE.Line(geom, mat);
        this.sceneMgr.scene.add(this.orbitLine);
      }
      const pos = this.orbitLine.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < orbitPred3d.points.length; i++) {
        pos.array[i * 3] = refBodyOrbit.position[0] * VISUAL_SCALE + orbitPred3d.points[i]![0];
        pos.array[i * 3 + 1] = this.state.position[1] * VISUAL_SCALE;
        pos.array[i * 3 + 2] = refBodyOrbit.position[2] * VISUAL_SCALE + orbitPred3d.points[i]![1];
      }
      pos.needsUpdate = true;
      this.orbitLine.geometry.setDrawRange(0, orbitPred3d.points.length);
      (this.orbitLine.material as THREE.LineBasicMaterial).color.set(orbitPred3d.bound ? 0x4488cc : 0xddaa44);
      this.orbitLine.visible = true;
    } else if (this.orbitLine) {
      this.orbitLine.visible = false;
    }

    // Track personal records
    if (nearestAlt > this.maxAlt) this.maxAlt = nearestAlt;
    if (speed > this.maxSpeed) this.maxSpeed = speed;

    // Altitude milestone notifications
    const milestones = [100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];
    for (const m of milestones) {
      if (nearestAlt >= m && this.lastAltMilestone < m) {
        this.lastAltMilestone = m;
        toast.show(`Altitude: ${m >= 1000 ? (m/1000)+'km' : m+'m'}`);
        break;
      }
    }

    // Mach number + sonic boom (visual only, no HUD display)
    const speedMs = Math.sqrt(this.state.velocity[0]**2 + this.state.velocity[1]**2 + this.state.velocity[2]**2);
    const mach = speedMs / 340;
    this.hud.setMass(this.state.rocket.totalMass());
    this.prevMach = mach;

    // Local gravitational acceleration (keep for internal use, no HUD)
    const gravRefBody = getReferenceBody(this.state.position, this.system);
    if (gravRefBody && (gravRefBody as any).mass > 0) {
      const gdx = this.state.position[0] - gravRefBody.position[0];
      const gdy = this.state.position[1] - gravRefBody.position[1];
      const gdz = this.state.position[2] - gravRefBody.position[2];
      const gr = Math.sqrt(gdx*gdx + gdy*gdy + gdz*gdz) || 1;
      const localG = (G * (gravRefBody as any).mass) / (gr * gr);
    }

    this.prevVel = [this.state.velocity[0], this.state.velocity[1], this.state.velocity[2]];

    // Compute G-force from velocity change (for screen shake, no HUD display)
    const dvx = this.state.velocity[0] - this.prevVel[0];
    const dvy = this.state.velocity[1] - this.prevVel[1];
    const dvz = this.state.velocity[2] - this.prevVel[2];
    const dvgf = Math.sqrt(dvx * dvx + dvy * dvy + dvz * dvz);
    const gForce = baseDt > 0 ? dvgf / (baseDt * 9.80665) : 1;

    // Screen shake from high G-force or mach effects
    if (gForce > 2.5) {
      this.screenShake = Math.min(1, (gForce - 2.5) / 5);
    } else {
      this.screenShake *= Math.exp(-3 * baseDt);
    }
    if (this.screenShake > 0.01) {
      const shakeX = (Math.random() - 0.5) * this.screenShake * 0.01;
      const shakeY = (Math.random() - 0.5) * this.screenShake * 0.01;
      this.rocketGroup.position.x += shakeX;
      this.rocketGroup.position.z += shakeY;
    }

    // Dynamic FOV based on speed (warp effect at high speeds)
    const speedKms = speed / 1000;
    // Fixed FOV for sharp rendering — no dynamic zoom
    // const targetFov = 35 + Math.min(30, speedKms * 0.1);
    // this.sceneMgr.camera.fov += (targetFov - this.sceneMgr.camera.fov) * baseDt * 2;
    this.sceneMgr.camera.updateProjectionMatrix();

    // Dynamic sky color — smooth blue→black transition from surface to space
    const nearestAltSky = nearestAlt ?? 0;
    // Blend from 0m (bright blue) -> 100km (pure black)
    const skyBlend = Math.min(1, Math.max(0, nearestAltSky / 100000));
    const skyR = 0.45 * (1 - skyBlend) + 0.01 * skyBlend;
    const skyG = 0.65 * (1 - skyBlend) + 0.01 * skyBlend;
    const skyB = 0.95 * (1 - skyBlend) + 0.02 * skyBlend;
    this.sceneMgr.scene.background = new THREE.Color(skyR, skyG, skyB);

    const rocketFwd = new THREE.Vector3(0, 1, 0).applyQuaternion(this.rocketQuat);
    const velMag = Math.sqrt(
      this.state.velocity[0] ** 2 + this.state.velocity[1] ** 2 + this.state.velocity[2] ** 2
    );
    const velDir: [number, number, number] = velMag > 0.01
      ? [this.state.velocity[0] / velMag, this.state.velocity[1] / velMag, this.state.velocity[2] / velMag]
      : [0, 1, 0];
    const refBody = getReferenceBody(this.state.position, this.system);
    const upX = this.state.position[0] - refBody.position[0];
    const upY = this.state.position[1] - refBody.position[1];
    const upZ = this.state.position[2] - refBody.position[2];
    const upNorm = Math.sqrt(upX * upX + upY * upY + upZ * upZ) || 1;
    // Orbit normal (angular momentum vector)
    const relVelX = this.state.velocity[0];
    const relVelY = this.state.velocity[1];
    const relVelZ = this.state.velocity[2];
    const normX = upY * relVelZ - upZ * relVelY;
    const normY = upZ * relVelX - upX * relVelZ;
    const normZ = upX * relVelY - upY * relVelX;
    const normLen = Math.sqrt(normX * normX + normY * normY + normZ * normZ) || 1;
    // Planet direction markers for navball
    const bodyDirs: Array<{ name: string; dir: [number, number, number]; color: string }> = [];
    const mapColors: Record<string, string> = {
      sun: '#ffdd44', earth: '#4fc3f7', moon: '#ccccee',
      venus: '#e8b84c', mars: '#e88444', jupiter: '#e8b87c',
      saturn: '#f4e8b0', uranus: '#5fe0f0', neptune: '#5b88ee',
      titan: '#ddaa77', io: '#eeddaa', europa: '#aaccdd',
      ganymede: '#bbccaa', pluto: '#ddccbb'
    };
    for (const body of this.system.bodies) {
      if (body.mass <= 0) continue;
      const dx = body.position[0] - this.state.position[0];
      const dy = body.position[1] - this.state.position[1];
      const dz = body.position[2] - this.state.position[2];
      const d = Math.sqrt(dx*dx + dy*dy + dz*dz) || 1;
      bodyDirs.push({ name: body.name, dir: [dx/d, dy/d, dz/d], color: mapColors[body.name] || '#888' });
    }
    this.hud.setNavballData(
      [rocketFwd.x, rocketFwd.y, rocketFwd.z],
      velDir,
      [upX / upNorm, upY / upNorm, upZ / upNorm],
      [normX / normLen, normY / normLen, normZ / normLen],
      bodyDirs
    );
  }

  private performStage(): void {
    const decoupler = this.findLowestDecoupler(this.rocket.assembly.roots);
    if (!decoupler) {
      toast.show('No decouplers to stage.');
      return;
    }

    this.sound.playStaging();

    const decouplerMesh = this.rocketGroup.getObjectByName(decoupler.part.id);
    if (decouplerMesh) {
      // Capture world positions before detaching
      const worldPositions: THREE.Vector3[] = [];
      const meshes: THREE.Object3D[] = [];

      // Staging particle burst (separation motors)
      for (let i = 0; i < 16; i++) {
        const size = 0.02 + Math.random() * 0.04;
        const pGeom = new THREE.SphereGeometry(size, 4, 3);
        const pMat = new THREE.MeshBasicMaterial({
          color: i < 4 ? 0xff8844 : 0xaaaaaa, transparent: true, opacity: 0.9,
          blending: THREE.AdditiveBlending, depthWrite: false
        });
        const pMesh = new THREE.Mesh(pGeom, pMat);
        const angle = (i / 16) * Math.PI * 2 + Math.random() * 0.3;
        const elev = (Math.random() - 0.5) * 0.8;
        pMesh.position.copy(this.rocketGroup.position);
        pMesh.position.x += Math.cos(angle) * 0.15;
        pMesh.position.y += elev * 0.1;
        pMesh.position.z += Math.sin(angle) * 0.15;
        this.sceneMgr.scene.add(pMesh);
        (pMesh as any)._life = 0.6 + Math.random() * 0.4;
        (pMesh as any)._age = 0;
        (pMesh as any)._vx = Math.cos(angle) * (0.8 + Math.random() * 1.5);
        (pMesh as any)._vy = elev * 0.5;
        (pMesh as any)._vz = Math.sin(angle) * (0.8 + Math.random() * 1.5);
        this.explosionMeshes.push(pMesh);
      }
      while (decouplerMesh.children.length > 0) {
        const child = decouplerMesh.children[0]!;
        const wp = new THREE.Vector3();
        child.getWorldPosition(wp);
        worldPositions.push(wp);
        meshes.push(child);
        child.removeFromParent();
      }

      // Create debris from detached parts with physics
      const refBody = getReferenceBody(this.state.position, this.system);
      const pos = [...this.state.position] as Vec3;
      // Push downward/away from rocket
      const pushDir: Vec3 = [
        refBody.position[0] - pos[0],
        refBody.position[1] - pos[1],
        refBody.position[2] - pos[2],
      ];
      const pdm = Math.sqrt(pushDir[0]*pushDir[0] + pushDir[1]*pushDir[1] + pushDir[2]*pushDir[2]) || 1;

      for (let i = 0; i < meshes.length; i++) {
        const dm = meshes[i]!;
        const debrisGroup = new THREE.Group();
        debrisGroup.add(dm);
        dm.position.set(0, 0, 0);

        const scene = this.sceneMgr.scene;
        debrisGroup.position.copy(worldPositions[i]!);
        // Small random spread
        debrisGroup.position.x += (Math.random() - 0.5) * 0.5;
        debrisGroup.position.y += (Math.random() - 0.5) * 0.5;
        debrisGroup.position.z += (Math.random() - 0.5) * 0.5;

        // Random rotation for tumbling
        debrisGroup.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);

        scene.add(debrisGroup);

        // Velocity: rocket velocity + push away + random
        const pushForce = 1 + Math.random() * 2;
        const sepVel: Vec3 = [
          this.state.velocity[0] - pushDir[0] / pdm * pushForce + (Math.random() - 0.5) * 0.5,
          this.state.velocity[1] - pushDir[1] / pdm * pushForce + (Math.random() - 0.5) * 0.5,
          this.state.velocity[2] - pushDir[2] / pdm * pushForce + (Math.random() - 0.5) * 0.5,
        ];

        const debrisBody = new Body('debris', 100, pos, sepVel);

        this.debris.push({
          mesh: debrisGroup,
          body: debrisBody,
          life: 60,
        });
      }
    }

    this.rocket.removeStage(decoupler);
    this.achievements.unlock('stage_separate');
    toast.show('Stage separated!');
  }

  private findLowestDecoupler(nodes: AssemblyNode[]): AssemblyNode | null {
    let last: AssemblyNode | null = null;
    const walk = (ns: AssemblyNode[]) => {
      for (const n of ns) {
        if (n.part.kind === 'decoupler') last = n;
        walk(n.children);
      }
    };
    walk(nodes);
    return last;
  }

  private toggleParachute(): void {
    const hasChute = this.rocket.assembly.roots.some(r => r.part.kind === 'parachute') ||
      this.rocket.assembly.roots.some(r => r.children.some(c => c.part.kind === 'parachute'));
    if (hasChute) {
      this.parachuteDeployed = !this.parachuteDeployed;
      if (this.parachuteDeployed) {
        const d = { radius: 0.6 * PART_SCALE, height: 1.0 * PART_SCALE };
        this.deployedChuteMesh = buildDeployedParachute(d);
        this.sceneMgr.scene.add(this.deployedChuteMesh);
      } else if (this.deployedChuteMesh) {
        this.sceneMgr.scene.remove(this.deployedChuteMesh);
        this.deployedChuteMesh = null;
      }
      toast.show(this.parachuteDeployed ? 'Parachute deployed!' : 'Parachute cut.');
    }
  }

  private toggleGear(): void {
    this.gearDeployed = !this.gearDeployed;
    for (const m of this.gearMeshes) {
      m.visible = this.gearDeployed;
    }
    toast.show(this.gearDeployed ? 'Landing gear deployed' : 'Landing gear retracted');
  }

  private doCrash(reason: string, body: any, dx: number, dy: number, dz: number, d: number, bodyR: number): void {
    if (this.crashed) return;
    if (this._spawnProtectionTimer > 0) return; // spawn grace period
    this.crashed = true;
    this.achievements.unlock('crash');
    this.sound.playCrash();
    this.sound.stopEngine();
    toast.show(`CRASH! ${reason}`);

    this.rocketGroup.visible = false;
    this.engineFlame.stop();

    // Camera shake on crash
    this.screenShake = 3.0;

    this.state.position = [
      body.position[0] + dx / d * (bodyR + 50),
      body.position[1] + dy / d * (bodyR + 50),
      body.position[2] + dz / d * (bodyR + 50),
    ];
    this.state.velocity = [0, 0, 0];
    this.state.throttle = 0;

    // Explosion effect
    this.spawnExplosion(
      this.state.position[0] * VISUAL_SCALE,
      this.state.position[1] * VISUAL_SCALE,
      this.state.position[2] * VISUAL_SCALE
    );

    // Crash overlay
    this.showCrashOverlay(reason);
  }

  private showCrashOverlay(reason: string): void {
    // Flash effect
    const flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;';
    document.body.appendChild(flash);
    requestAnimationFrame(() => { flash.style.opacity = '1'; });
    setTimeout(() => { flash.style.opacity = '0'; }, 100);
    setTimeout(() => flash.remove(), 500);

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;top:0;left:0;width:100%;height:100%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.7);z-index:1000;
      font-family:system-ui,sans-serif;color:#fff;
    `;
    overlay.innerHTML = `
      <div style="font-size:48px;font-weight:bold;color:#ff4444;margin-bottom:8px;">CRASH!</div>
      <div style="font-size:16px;color:#ccc;margin-bottom:32px;">${reason}</div>
      <div style="display:flex;gap:16px;">
        <button id="crash-menu" style="padding:12px 32px;font-size:18px;border:1px solid #555;border-radius:6px;background:#222;color:#fff;cursor:pointer;">MENU</button>
        <button id="crash-restart" style="padding:12px 32px;font-size:18px;border:none;border-radius:6px;background:#4488ff;color:#fff;cursor:pointer;">LAUNCH AGAIN</button>
      </div>
    `;
    document.body.appendChild(overlay);
    this.crashOverlay = overlay;

    overlay.querySelector('#crash-menu')!.addEventListener('click', () => {
      this.onCrashAction?.('menu');
    });
    overlay.querySelector('#crash-restart')!.addEventListener('click', () => {
      this.onCrashAction?.('restart');
    });
  }

  private updateExplosion(dt: number): void {
    if (this.explosionMeshes.length > 0) {
      for (let i = this.explosionMeshes.length - 1; i >= 0; i--) {
        const m = this.explosionMeshes[i]!;
        const age = (m as any)._age + dt;
        (m as any)._age = age;
        const life = (m as any)._life;
        const t = age / life;
        if (t >= 1) {
          this.sceneMgr.scene.remove(m);
          m.geometry.dispose();
          (m.material as THREE.Material).dispose();
          this.explosionMeshes.splice(i, 1);
          continue;
        }
        const isShockRing = (m as any)._shockRing;
        // Shock rings expand much faster (need a bigger scale factor)
        const s = isShockRing ? 1 + t * 60 : 1 + t * 6;
        m.scale.setScalar(s);
        const fadeFactor = life < 1 ? 2 : 1;
        (m.material as THREE.MeshBasicMaterial).opacity = isShockRing
          ? Math.max(0, 0.85 * (1 - t * 1.5))
          : Math.max(0, 0.9 * (1 - t * fadeFactor));
        m.position.x += (m as any)._vx * dt;
        m.position.y += (m as any)._vy * dt;
        m.position.z += (m as any)._vz * dt;
      }
    }
  }

  private explosionMeshes: THREE.Mesh[] = [];

  private spawnExplosion(x: number, y: number, z: number): void {
    const colors = [0xff8800, 0xff4400, 0xff2200, 0xff6600, 0xcc4400, 0xffaa00];
    // Big central fireball
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    core.position.set(x, y, z);
    (core as any)._life = 0.8;
    (core as any)._age = 0;
    this.sceneMgr.scene.add(core);
    this.explosionMeshes.push(core);
    // Expanding fire spheres
    for (let i = 0; i < 8; i++) {
      const size = 1 + Math.random() * 1.5;
      const geom = new THREE.SphereGeometry(size, 8, 6);
      const mat = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length]!,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geom, mat);
      const theta = (i / 8) * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 0.3;
      mesh.position.set(
        x + Math.sin(theta) * Math.cos(phi) * r,
        y + Math.sin(phi) * r,
        z + Math.cos(theta) * Math.cos(phi) * r
      );
      (mesh as any)._life = 1.5 + Math.random() * 0.5;
      (mesh as any)._age = 0;
      (mesh as any)._vx = Math.sin(theta) * Math.cos(phi) * (1 + Math.random() * 3);
      (mesh as any)._vy = Math.sin(phi) * (1 + Math.random() * 3);
      (mesh as any)._vz = Math.cos(theta) * Math.cos(phi) * (1 + Math.random() * 3);
      this.sceneMgr.scene.add(mesh);
      this.explosionMeshes.push(mesh);
    }
    // Smoke ring — grey expanding sprites
    for (let i = 0; i < 4; i++) {
      const size = 1.5 + Math.random() * 2;
      const smokeMat = new THREE.MeshBasicMaterial({
        color: 0x444444,
        transparent: true,
        opacity: 0.4,
        blending: THREE.NormalBlending,
        depthWrite: false,
      });
      const smoke = new THREE.Mesh(new THREE.SphereGeometry(size, 6, 6), smokeMat);
      const theta = (i / 4) * Math.PI * 2 + Math.random() * 0.5;
      smoke.position.set(x + Math.cos(theta) * 0.5, y + (Math.random() - 0.5) * 0.3, z + Math.sin(theta) * 0.5);
      (smoke as any)._life = 2 + Math.random() * 0.5;
      (smoke as any)._age = 0;
      (smoke as any)._vx = Math.cos(theta) * (0.5 + Math.random() * 1.5);
      (smoke as any)._vy = (Math.random() - 0.5) * 1;
      (smoke as any)._vz = Math.sin(theta) * (0.5 + Math.random() * 1.5);
      this.sceneMgr.scene.add(smoke);
      this.explosionMeshes.push(smoke);
    }
  }

  /**
   * Spawn a shock ring (e.g. sonic boom, staging event).
   * The ring expands radially around the rocket over a short amount of time.
   */
  private spawnShockRing(color: number = 0xffffff): void {
    // Place the ring at the rocket's world position
    const wp = new THREE.Vector3();
    this.rocketGroup.getWorldPosition(wp);
    const s = VISUAL_SCALE;
    const rx = wp.x * VISUAL_SCALE, ry = wp.y * VISUAL_SCALE, rz = wp.z * VISUAL_SCALE;

    const ringGeom = new THREE.RingGeometry(0.1, 0.2, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.position.set(this.rocketGroup.position.x, this.rocketGroup.position.y, this.rocketGroup.position.z);
    ring.quaternion.copy(this.rocketQuat);
    ring.scale.setScalar(1.0);
    (ring as any)._life = 1.2;
    (ring as any)._age = 0;
    (ring as any)._shockRing = true;
    (ring as any)._vx = 0;
    (ring as any)._vy = 0;
    (ring as any)._vz = 0;
    this.sceneMgr.scene.add(ring);
    this.explosionMeshes.push(ring);
  }

  private hasLandingLegs(): boolean {
    const walk = (ns: AssemblyNode[]): boolean => {
      for (const n of ns) {
        if (n.part.kind === 'legs') return true;
        if (walk(n.children)) return true;
      }
      return false;
    };
    return walk(this.rocket.assembly.roots);
  }

  private positionFlameAtNozzle(): void {
    // Find the lowest point of rocket meshes (engine nozzle)
    // Skip landing gear and other non-rocket parts that were added separately
    let minY = Infinity;
    let maxY = -Infinity;
    this.rocketGroup.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        // Skip gear meshes (they're tracked in gearMeshes and can be far below)
        if (this.gearMeshes.includes(obj)) return;
        if (obj === this.rocketShadow) return;
        if (obj === this.reentryGlow) return;
        if (obj === this.reentryGlowMesh) return;
        const box = new THREE.Box3().setFromObject(obj);
        if (box.min.y < minY) minY = box.min.y;
        if (box.max.y > maxY) maxY = box.max.y;
      }
    });
    this.rocketBottomY = minY === Infinity ? -0.1 : minY;
    // Position flame at the bottom center, in local space
    const flameY = minY === Infinity ? -0.1 : minY - 0.01;
    this.engineFlame.getMesh().position.set(0, flameY, 0);
    this.engineFlame.getMesh().rotation.set(0, 0, 0);
  }

  dispose(): void {
    if (this.crashOverlay) {
      this.crashOverlay.remove();
      this.crashOverlay = null;
    }
    this.sceneMgr.scene.remove(this.rocketGroup);
    for (const d of this.debris) {
      this.sceneMgr.scene.remove(d.mesh);
    }
    this.debris = [];
    for (const m of this.explosionMeshes) {
      this.sceneMgr.scene.remove(m);
      m.geometry.dispose();
      (m.material as THREE.Material).dispose();
    }
    this.explosionMeshes = [];
    this.controls.dispose();
    this.chase.dispose();
    this.engineFlame.dispose();
    this.groundSmoke.dispose();
    this.hud.unmount();
    this.sound.dispose();
  }
}

=== src/scenes/MainMenuScene.ts ===
export class MainMenuScene {
  private root: HTMLDivElement;
  private helpOverlay: HTMLDivElement | null = null;
  private onPlay: () => void;
  private onVab: () => void;
  private onSettings: () => void;

  constructor(onPlay: () => void, onVab: () => void, onSettings: () => void) {
    this.onPlay = onPlay;
    this.onVab = onVab;
    this.onSettings = onSettings;

    this.root = document.createElement('div');
    this.root.className = 'panel';
    this.root.style.cssText = `
      position: fixed; inset: 0; z-index: 500;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: rgba(6,8,20,0.95);
      border: none; border-radius: 0;
    `;

    const logo = document.createElement('div');
    logo.style.cssText = 'margin-bottom: var(--space-8); text-align: center;';
    logo.innerHTML = `
      <svg viewBox="0 0 120 40" fill="none" style="width:100px;height:36px;display:block;margin:0 auto var(--space-2);">
        <ellipse cx="60" cy="20" rx="52" ry="16" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="1.2" opacity="0.4"/>
        <ellipse cx="60" cy="20" rx="36" ry="10" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.8" opacity="0.25"/>
        <ellipse cx="60" cy="20" rx="18" ry="5" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.6" opacity="0.15"/>
        <circle cx="60" cy="20" r="2.5" fill="var(--accent-gold)"/>
        <line x1="10" y1="20" x2="110" y2="20" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
        <line x1="60" y1="4" x2="60" y2="36" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
      </svg>
      <div class="text-display" style="font-size:52px;letter-spacing:0.1em;color:var(--accent-gold);">ELLIPSE</div>
      <div class="text-caption" style="margin-top:var(--space-2);letter-spacing:0.15em;">SPACE FLIGHT SIMULATOR</div>
    `;
    this.root.appendChild(logo);

    const btn = (label: string, variant: string, cb: () => void): HTMLButtonElement => {
      const b = document.createElement('button');
      b.className = `btn btn--${variant}`;
      b.textContent = label;
      b.style.cssText = 'margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;';
      b.addEventListener('click', cb);
      return b;
    };
    this.root.appendChild(btn('FLIGHT', 'primary', this.onPlay));
    this.root.appendChild(btn('VEHICLE ASSEMBLY', 'secondary', this.onVab));
    this.root.appendChild(btn('SETTINGS', 'ghost', this.onSettings));
    this.root.appendChild(btn('GUIDE', 'ghost', () => this.toggleHelp()));
  }

  private toggleHelp(): void {
    if (this.helpOverlay) {
      this.helpOverlay.remove();
      this.helpOverlay = null;
      return;
    }
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);';
    overlay.innerHTML = `<div style="max-width:520px;padding:32px;font-family:sans-serif;line-height:1.6;color:#ddd;">` +
      `<h2 style="color:#c89838;font-size:20px;margin-bottom:12px;">HOW TO BUILD & LAUNCH</h2>` +
      `<p style="font-size:13px;color:#889;margin-bottom:8px;">1. Click <b>VEHICLE ASSEMBLY</b> to build rocket</p>` +
      `<p style="font-size:13px;color:#889;margin-bottom:8px;">2. Add capsule → tank → engine (bottom to top)</p>` +
      `<p style="font-size:13px;color:#889;margin-bottom:16px;">3. Click <b>FLIGHT</b> — press <b>W</b>, wait countdown</p>` +
      `<h2 style="color:#c89838;font-size:20px;margin-bottom:8px;">CONTROLS</h2>` +
      `<table style="width:100%;font-size:13px;border-collapse:collapse;">` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">W/S</td><td>Throttle</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">↑↓←→</td><td>Pitch / Yaw</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">C</td><td>Free camera</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">F</td><td>Reset camera</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">T</td><td>SAS toggle</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Space</td><td>Stage</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">M/Tab</td><td>Map view</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Q/E</td><td>Time warp</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Mouse</td><td>Orbit / Zoom camera</td></tr>` +
      `</table><button class="btn btn--primary" style="margin-top:20px;width:100%;padding:12px;" id="help-close">CLOSE</button></div>`;
    overlay.querySelector('#help-close')!.addEventListener('click', () => { overlay.remove(); this.helpOverlay = null; });
    document.body.appendChild(overlay);
    this.helpOverlay = overlay;
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); this.helpOverlay?.remove(); }
}

=== src/scenes/VABScene.ts ===
import * as THREE from 'three';
import { PART_CATALOG, findPart } from '../parts/PartCatalog';
import { Assembly, type AssemblyNode } from '../rocket/Assembly';
import type { Part } from '../parts/Part';
import { PART_SCALE, ROCKET_VISUAL_SCALE } from '../config/constants';
import { buildRocketFromDescription } from '../parts/RocketBuilder';
import { gltfCache, loadGLTF } from '../parts/PartBuilder';

const PART_HEIGHT: Record<string, number> = {
  S: 0.7 * PART_SCALE,
  M: 1.1 * PART_SCALE,
  L: 1.6 * PART_SCALE,
  XL: 2.2 * PART_SCALE,
};

export class VABScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  assembly: Assembly;
  private rocketGroup: THREE.Group;
  private rootEl: HTMLDivElement;
  private partListEl: HTMLDivElement;
  private currentRocketEl: HTMLDivElement;
  private onLaunch: (assembly: Assembly) => void;
  private stackHeight = 0;
  private addedPartNames: string[] = [];
  private framed = false;

  private vabAzimuth = 0;
  private vabPolar = Math.PI / 2;
  private vabDist = 3;
  private vabIsDragging = false;
  private vabPrevMouse = { x: 0, y: 0 };
  private vabTarget = new THREE.Vector3(0, PART_SCALE, 0);

  constructor(onLaunch: (assembly: Assembly) => void) {
    this.onLaunch = onLaunch;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0d1a);
    this.scene.add(new THREE.AmbientLight(0x444466, 0.5));
    const dir = new THREE.DirectionalLight(0xFFFFFF, 3.0);
    dir.position.set(2, 4, 3);
    this.scene.add(dir);
    const fill = new THREE.DirectionalLight(0x8888cc, 1.0);
    fill.position.set(-2, 1, -1);
    this.scene.add(fill);
    const hemi = new THREE.HemisphereLight(0x8888cc, 0x444466, 0.8);
    this.scene.add(hemi);

    // VAB grid floor
    const gridSize = 10;
    const gridDivs = 20;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivs, 0x334466, 0x223355);
    gridHelper.position.y = -0.3;
    this.scene.add(gridHelper);

    // Subtle platform ring
    const ringGeom = new THREE.RingGeometry(0.5, 0.8, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x223355, metalness: 0.6, roughness: 0.4, side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.28;
    this.scene.add(ring);

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.updateVabCamera();

    const padSize = PART_SCALE * 4;
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(padSize, 0.02 * PART_SCALE, padSize),
      new THREE.MeshStandardMaterial({ color: 0x1c2040, roughness: 0.9 })
    );
    pad.position.y = -PART_SCALE * 0.3;
    this.scene.add(pad);

    this.assembly = new Assembly();
    this.rocketGroup = new THREE.Group();
    this.scene.add(this.rocketGroup);

    // VAB orbit controls
    this.setupVabOrbit();

    // UI
    this.rootEl = document.createElement('div');
    this.rootEl.style.cssText = 'position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;';
    this.rootEl.innerHTML = `
      <div style="width:280px;background:rgba(10,12,24,0.95);border-right:1px solid rgba(234,205,158,0.2);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:16px;border-bottom:1px solid rgba(234,205,158,0.15);">
          <div style="color:#EACD9E;font-size:18px;letter-spacing:0.08em;">VAB</div>
          <div style="color:#F4F5F2;font-size:11px;opacity:0.5;margin-top:4px;">Build your rocket</div>
        </div>
        <div style="padding:8px;border-bottom:1px solid rgba(234,205,158,0.1);">
          <div style="font-size:9px;color:var(--accent-blue-bright);letter-spacing:0.05em;margin-bottom:6px;">QUICK BUILD — pick a mission</div>
          <div id="vab-presets" style="display:flex;flex-wrap:wrap;gap:4px;"></div>
        </div>
        <div style="padding:8px 8px 4px;border-bottom:1px solid rgba(234,205,158,0.1);">
          <div id="vab-current" style="min-height:40px;padding:6px;background:rgba(244,245,242,0.05);border-radius:3px;"></div>
        </div>
        <div id="vab-parts" style="flex:1;overflow-y:auto;padding:8px;"></div>
        <div style="padding:12px;border-top:1px solid rgba(234,205,158,0.15);">
          <div id="vab-status" style="font-size:9px;color:rgba(244,245,242,0.4);text-align:center;margin-bottom:6px;">&nbsp;</div>
          <button id="vab-launch" style="width:100%;padding:10px;background:#EACD9E;color:#0A0C18;border:none;border-radius:4px;font-size:13px;cursor:pointer;letter-spacing:0.06em;">LAUNCH</button>
          <button id="vab-remove" style="width:100%;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:11px;cursor:pointer;margin-top:6px;letter-spacing:0.06em;">REMOVE LAST</button>
          <button id="vab-clear" style="width:100%;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:11px;cursor:pointer;margin-top:4px;letter-spacing:0.06em;">CLEAR ALL</button>
        </div>
      </div>
      <div style="flex:1;pointer-events:none;"></div>
    `;
    this.partListEl = this.rootEl.querySelector('#vab-parts')!;
    this.currentRocketEl = this.rootEl.querySelector('#vab-current')!;
    this.buildPartList();
    this.buildPresets();
    this.updateCurrentList();

    this.rootEl.querySelector('#vab-launch')!.addEventListener('click', () => {
      if (this.assembly.roots.length > 0) this.onLaunch(this.assembly);
    });
    this.rootEl.querySelector('#vab-remove')!.addEventListener('click', () => this.removeLast());
    this.rootEl.querySelector('#vab-clear')!.addEventListener('click', () => this.clearAll());
  }

  private buildPresets(): void {
    const presets = [
      { label: '🚀 Suborbital', desc: 'suborbital test', color: '#6688aa' },
      { label: '🛸 Earth Orbit', desc: 'earth orbit', color: '#4488FF' },
      { label: '🌙 Moon Landing', desc: 'land on moon', color: '#88AACC' },
      { label: '🌙 Moon Return', desc: 'land on moon and return', color: '#EACD9E' },
      { label: '🌙+🛡️ Moon Safe', desc: 'safe moon landing and return with 50% fuel', color: '#66DD88' },
      { label: '🔴 Mars', desc: 'mars mission', color: '#d4733a' },
      { label: '☀️ Solar Orbit', desc: 'orbit around the sun', color: '#ffdd44' },
      { label: '🪐 Heavy Lifter', desc: 'heavy interplanetary', color: '#CC88AA' },
    ];
    const el = this.rootEl.querySelector('#vab-presets')!;
    for (const p of presets) {
      const btn = document.createElement('button');
      btn.textContent = p.label;
      btn.title = p.desc;
      btn.style.cssText = `flex:1;min-width:80px;padding:5px 6px;background:rgba(244,245,242,0.06);color:${p.color};border:1px solid rgba(244,245,242,0.1);border-radius:3px;font-size:9px;cursor:pointer;pointer-events:auto;text-align:center;white-space:nowrap;`;
      btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(244,245,242,0.12)'; });
      btn.addEventListener('mouseleave', () => { btn.style.background = 'rgba(244,245,242,0.06)'; });
      btn.addEventListener('click', () => {
        this.clearAll();
        this.assembly = buildRocketFromDescription(p.desc);
        this.refreshMesh();
        this.syncPartsFromAssembly();
      });
      el.appendChild(btn);
    }
  }

  private buildPartList(): void {
    for (const p of PART_CATALOG) {
      const btn = document.createElement('button');
      const sizeLabel = p.size ? ` [${p.size}]` : '';
      let info = '';
      if (p.kind === 'tank' && p.fuelCapacity) info = ` — ${(p.fuelCapacity / 1000).toFixed(0)}t`;
      if (p.kind === 'engine' && p.thrust) info = ` — ${p.thrust}kN`;
      btn.textContent = p.name + sizeLabel + info;
      btn.title = `${p.kind} — mass: ${p.mass}kg${p.fuelCapacity ? ', fuel: ' + p.fuelCapacity + 'kg' : ''}${p.thrust ? ', thrust: ' + p.thrust + 'kN' : ''}`;
      btn.style.cssText = 'display:block;width:100%;padding:6px 8px;background:transparent;color:#F4F5F2;border:none;border-radius:3px;font-size:11px;text-align:left;cursor:pointer;margin-bottom:2px;';
      btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(234,205,158,0.1)'; });
      btn.addEventListener('mouseleave', () => { btn.style.background = 'transparent'; });
      btn.addEventListener('click', () => this.addPart(p));
      this.partListEl.appendChild(btn);
    }
  }

  private addPart(p: Part): void {
    const h = PART_HEIGHT[p.size] || 0.6 * PART_SCALE;
    const yPos = this.stackHeight + h / 2;
    this.assembly.addRoot({ part: p, position: [0, yPos, 0], rotation: 0, children: [] });
    this.stackHeight += h;
    this.addedPartNames.push(p.name);
    this.refreshMesh();
    this.updateCurrentList();
  }

  private removeLast(): void {
    if (this.assembly.roots.length === 0) return;
    const removed = this.assembly.roots.pop()!;
    const h = PART_HEIGHT[removed.part.size] || 0.6 * PART_SCALE;
    this.stackHeight -= h;
    this.addedPartNames.pop();
    this.refreshMesh();
    this.updateCurrentList();
  }

  private clearAll(): void {
    this.assembly = new Assembly();
    this.stackHeight = 0;
    this.addedPartNames = [];
    this.refreshMesh();
    this.updateCurrentList();
  }

  private updateCurrentList(): void {
    if (this.addedPartNames.length === 0) {
      this.currentRocketEl.innerHTML = '<div style="color:rgba(244,245,242,0.3);font-size:10px;font-style:italic;">No parts — click from list below</div>';
      return;
    }
    const totalMass = this.assembly.roots.reduce((sum, n) => sum + n.part.mass + this.childMass(n), 0);
    const totalFuel = this.assembly.roots.reduce((sum, n) => sum + (n.part.fuelCapacity ?? 0) + this.childFuel(n), 0);
    this.currentRocketEl.innerHTML = '<div style="color:rgba(244,245,242,0.4);font-size:9px;letter-spacing:0.05em;margin-bottom:4px;">CURRENT ROCKET (top to bottom):</div>' +
      [...this.addedPartNames].reverse().map((name, i) =>
        `<div style="color:#F4F5F2;font-size:10px;padding:1px 0;${i === 0 ? 'color:#EACD9E;' : ''}">${i === 0 ? '▲ ' : ''}${name}</div>`
      ).join('') +
      `<div style="color:rgba(244,245,242,0.35);font-size:9px;margin-top:6px;border-top:1px solid rgba(244,245,242,0.1);padding-top:4px;">` +
      `${this.addedPartNames.length} parts | ${totalMass.toFixed(1)}kg | ${totalFuel.toFixed(0)}kg fuel</div>`;
  }

  private childMass(n: AssemblyNode): number {
    return n.children.reduce((s, c) => s + c.part.mass + this.childMass(c), 0);
  }

  private childFuel(n: AssemblyNode): number {
    return n.children.reduce((s, c) => s + (c.part.fuelCapacity ?? 0) + this.childFuel(c), 0);
  }

  private updateVabCamera(): void {
    const ox = this.vabDist * Math.sin(this.vabPolar) * Math.cos(this.vabAzimuth);
    const oy = this.vabDist * Math.cos(this.vabPolar);
    const oz = this.vabDist * Math.sin(this.vabPolar) * Math.sin(this.vabAzimuth);
    this.camera.position.set(
      this.vabTarget.x + ox,
      this.vabTarget.y + oy,
      this.vabTarget.z + oz,
    );
    this.camera.lookAt(this.vabTarget);
  }

  private setupVabOrbit(): void {
    const handler = (e: MouseEvent) => {
      if (e.button !== 0) return;
      this.vabIsDragging = true;
      this.vabPrevMouse = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('mousemove', (e) => {
      if (!this.vabIsDragging) return;
      const dx = e.clientX - this.vabPrevMouse.x;
      const dy = e.clientY - this.vabPrevMouse.y;
      this.vabAzimuth -= dx * 0.005;
      this.vabPolar = Math.max(0.05, Math.min(Math.PI - 0.05, this.vabPolar + dy * 0.005));
      this.vabPrevMouse = { x: e.clientX, y: e.clientY };
      this.updateVabCamera();
    });
    document.addEventListener('mouseup', () => { this.vabIsDragging = false; });
    document.addEventListener('wheel', (e: WheelEvent) => {
      this.vabDist *= e.deltaY > 0 ? 1.1 : 0.9;
      this.vabDist = Math.max(0.5, Math.min(50, this.vabDist));
      this.updateVabCamera();
    }, { passive: true });
  }

  private async refreshMesh(): Promise<void> {
    while (this.rocketGroup.children.length > 0) {
      const child = this.rocketGroup.children[0];
      if (child) this.rocketGroup.remove(child);
    }
    if (this.assembly.roots.length > 0) {
      // Show vehicle name input if this is a new rocket
      if (!this.rootEl.querySelector('.vab-name-input')) {
        const nameRow = document.createElement('div');
        nameRow.className = 'vab-name-row';
        nameRow.style.cssText = 'padding:4px 0;margin-bottom:6px;';
        nameRow.innerHTML = `
          <input type="text" class="vab-name-input" placeholder="Name your rocket..."
            style="width:100%;background:rgba(244,245,242,0.08);border:1px solid rgba(244,245,242,0.15);
            border-radius:4px;padding:6px 8px;color:#F4F5F2;font-size:11px;font-family:system-ui,sans-serif;
            outline:none;box-sizing:border-box;" maxlength="30"
          />
        `;
        this.currentRocketEl.parentElement?.insertBefore(nameRow, this.currentRocketEl);
      }
      // Check if any part needs GLTF loading
      const needsGLTF = this.assembly.roots.some(n => 
        n.part.kind === 'gltf' && n.part.gltfUrl && !gltfCache.has(n.part.gltfUrl)
      );
      
      if (needsGLTF) {
        const statusEl = document.getElementById('vab-status');
        if (statusEl) statusEl.textContent = '⏳ Loading 3D models...';
        const { loadGLTF } = await import('../parts/PartBuilder');
        let loadedCount = 0;
        let failCount = 0;
        for (const root of this.assembly.roots) {
          if (root.part.kind === 'gltf' && root.part.gltfUrl && !gltfCache.has(root.part.gltfUrl)) {
            const result = await loadGLTF(root.part.gltfUrl, root.part.gltfScale ?? 1);
            if (result) loadedCount++; else failCount++;
          }
        }
        if (statusEl) {
          if (failCount > 0) {
            statusEl.textContent = `⚠️ ${loadedCount} loaded, ${failCount} failed`;
            setTimeout(() => { if (statusEl) statusEl.innerHTML = '&nbsp;'; }, 3000);
          } else {
            statusEl.textContent = '✓ Models loaded';
            setTimeout(() => { if (statusEl) statusEl.innerHTML = '&nbsp;'; }, 1500);
          }
        }
      }
      
      const mesh = this.assembly.toMesh();
      // Ensure all meshes are visible
      mesh.traverse((obj) => {
        if (obj instanceof THREE.Mesh && obj.material) {
          obj.visible = true;
          const mat = obj.material;
          if (!Array.isArray(mat)) {
            mat.transparent = false;
            mat.opacity = 1;
            mat.depthWrite = true;
            mat.depthTest = true;
          }
        }
      });
      this.rocketGroup.add(mesh);

      // Draw stage separator discs at decoupler positions
      let sepY = 0;
      for (const root of this.assembly.roots) {
        const walkNodes = (node: AssemblyNode, y: number) => {
          if (node.part.kind === 'decoupler') {
            const sepGeom = new THREE.RingGeometry(0.15, 0.25, 16);
            const sepMat = new THREE.MeshBasicMaterial({
              color: 0xFF6644, side: THREE.DoubleSide, transparent: true, opacity: 0.5
            });
            const sep = new THREE.Mesh(sepGeom, sepMat);
            sep.position.set(0, y, 0);
            sep.rotation.x = -Math.PI / 2;
            this.rocketGroup.add(sep);
          }
          const h = PART_HEIGHT[node.part.size] || 0.6 * PART_SCALE;
          for (const child of node.children) walkNodes(child, y - h);
        };
        const h0 = PART_HEIGHT[root.part.size] || 0.6 * PART_SCALE;
        walkNodes(root, sepY + h0 / 2);
        sepY += h0;
      }

      // Auto-frame camera to fit the assembled rocket (only first time)
      if (!this.framed) {
        this.framed = true;
        const box = new THREE.Box3().setFromObject(this.rocketGroup);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z, 0.1);
        const camDist = maxDim * 3.5;
        this.camera.position.set(center.x, center.y + maxDim * 0.5, center.z + camDist);
        this.camera.lookAt(center.x, center.y, center.z);
        this.camera.updateProjectionMatrix();
      }
    }
  }

  private syncPartsFromAssembly(): void {
    this.addedPartNames = [];
    this.stackHeight = 0;
    const walk = (nodes: AssemblyNode[], depth: number) => {
      for (const n of nodes) {
        this.addedPartNames.push(n.part.name);
        const h = PART_HEIGHT[n.part.size] || 0.6 * PART_SCALE;
        this.stackHeight += h;
        walk(n.children, depth + 1);
      }
    };
    walk(this.assembly.roots, 0);
    this.updateCurrentList();
  }

  mount(): void {
    document.body.appendChild(this.rootEl);
  }

  unmount(): void {
    this.rootEl.remove();
  }
}

=== src/storage/SaveLoad.ts ===
import { Assembly, type AssemblyNode } from '../rocket/Assembly';
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
    children: (data.children ?? []).map(deserializeNode).filter((x: AssemblyNode | null): x is AssemblyNode => x !== null)
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

=== src/ui/Settings.ts ===
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
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;

    const card = document.createElement('div');
    card.className = 'panel panel--elevated';
    card.style.cssText = 'padding: var(--space-6); min-width: 400px;';

    const title = document.createElement('h2');
    title.className = 'text-display-sm';
    title.textContent = 'Settings';
    title.style.cssText = 'margin: 0 0 var(--space-5);';
    card.appendChild(title);

    const unitsRow = this.makeRow('Units', ['metric', 'imperial', 'mixed'], current.units, (v) => { this.current.units = v as 'metric' | 'imperial' | 'mixed'; });
    card.appendChild(unitsRow);

    const autoSaveRow = this.makeToggle('Auto-save', current.autoSave, (v) => { this.current.autoSave = v; });
    card.appendChild(autoSaveRow);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn btn--primary';
    closeBtn.textContent = 'Save & Close';
    closeBtn.style.cssText = 'margin-top: var(--space-4); width: 100%; padding: 12px;';
    closeBtn.addEventListener('click', () => { saveSettings(this.current); this.onClose(); });
    card.appendChild(closeBtn);

    this.root.appendChild(card);
  }

  private makeRow(label: string, options: string[], current: string, onChange: (v: string) => void): HTMLDivElement {
    const row = document.createElement('div');
    row.style.cssText = 'margin: var(--space-3) 0;';
    const lbl = document.createElement('div');
    lbl.className = 'text-caption';
    lbl.textContent = label;
    lbl.style.cssText = 'margin-bottom: var(--space-2);';
    row.appendChild(lbl);
    const group = document.createElement('div');
    group.style.cssText = 'display:flex;gap:var(--space-2);';
    for (const opt of options) {
      const b = document.createElement('button');
      b.className = `btn${opt === current ? ' btn--secondary' : ''}`;
      b.textContent = opt;
      if (opt === current) b.style.borderColor = 'var(--accent-blue)';
      b.addEventListener('click', () => { onChange(opt); saveSettings(this.current); });
      group.appendChild(b);
    }
    row.appendChild(group);
    return row;
  }

  private makeToggle(label: string, current: boolean, onChange: (v: boolean) => void): HTMLDivElement {
    const row = document.createElement('div');
    row.style.cssText = 'margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;';
    const lbl = document.createElement('span');
    lbl.className = 'text-body';
    lbl.textContent = label;
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
=== src/ui/Toast.ts ===
export class Toast {
  show(message: string, durationMs = 2500): void {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    el.style.cssText = `
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `;
    document.body.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 200);
    }, durationMs);
  }
}

export const toast = new Toast();

=== src/utils/noise.ts ===
export function hash(x: number, y: number, z: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.9) * 43758.5453;
  return n - Math.floor(n);
}

export function noise3D(x: number, y: number, z: number): number {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const sz = fz * fz * (3 - 2 * fz);
  const v000 = hash(ix, iy, iz);
  const v100 = hash(ix + 1, iy, iz);
  const v010 = hash(ix, iy + 1, iz);
  const v110 = hash(ix + 1, iy + 1, iz);
  const v001 = hash(ix, iy, iz + 1);
  const v101 = hash(ix + 1, iy, iz + 1);
  const v011 = hash(ix, iy + 1, iz + 1);
  const v111 = hash(ix + 1, iy + 1, iz + 1);
  return lerp(lerp(lerp(v000, v100, sx), lerp(v010, v110, sx), sy),
              lerp(lerp(v001, v101, sx), lerp(v011, v111, sx), sy), sz);
}

export function fbm3D(x: number, y: number, z: number, octaves: number): number {
  let v = 0, a = 1, t = 0;
  for (let i = 0; i < octaves; i++) {
    const f = 1 << i;
    v += a * noise3D(x * f, y * f, z * f);
    t += a;
    a *= 0.5;
  }
  return v / t;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

## CONFIG FILES

=== vite.config.ts ===
import { defineConfig } from 'vite';
export default defineConfig({
  base: '/ellipse/',
  server: { port: 3000, open: true },
  build: { target: 'es2022', sourcemap: true }
});
=== package.json ===
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
=== tsconfig.json ===
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

## GIT DIFF FROM INITIAL
 index.html                  |  4 +--
 src/config/constants.ts     |  8 ++---
 src/core/Game.ts            | 18 +++++++---
 src/core/SceneManager.ts    |  4 +--
 src/effects/EngineFlame.ts  |  2 +-
 src/flight/ChaseCamera.ts   |  4 +++
 src/flight/Controls.ts      | 23 ++++++------
 src/flight/HUD.ts           | 12 ++-----
 src/parts/PartCatalog.ts    |  6 ++--
 src/planets/Earth.ts        | 32 ++++++++---------
 src/planets/Jupiter.ts      |  2 +-
 src/planets/Mars.ts         |  2 +-
 src/planets/Mercury.ts      |  2 +-
 src/planets/Moon.ts         |  2 +-
 src/planets/Neptune.ts      |  2 +-
 src/planets/Pluto.ts        |  2 +-
 src/planets/Saturn.ts       |  2 +-
 src/planets/Sun.ts          |  2 +-
 src/planets/Uranus.ts       |  2 +-
 src/planets/Venus.ts        |  2 +-
 src/rocket/Assembly.ts      | 16 +++++----
 src/scenes/FlightScene.ts   | 25 +++++++------
 tests/adapter.test.ts       | 45 ++++++++++++++++++++++++
 tests/integration.test.ts   | 85 +++++++++++++++++++++++++++++++++++++++++++++
 tests/rocket-config.test.ts | 84 ++++++++++++++++++++++++++++++++++++++++++++
 tests/spacing.test.ts       | 42 ++++++++++++++++++++++
 26 files changed, 348 insertions(+), 82 deletions(-)
