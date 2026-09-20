# Ellipse — Space Flight Simulator (v4.5)

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

## Physics (v3.5)
- **Patched-conics SOI** — single-body gravity per frame
- **3D quaternion-based thrust** — direction from rocket attitude
- **Realistic rocket equation**: mass flow = thrust / (Isp * G0) **× FUEL_FLOW_MULT (1/15 ≈ 0.067)** — game-balance slowdown; raw flow at g≈176 thrust levels would empty a 50t tank in ~3s. Burn times now ~2-3 min. Δv readout uses effective exhaust velocity (Isp·g0/FUEL_FLOW_MULT).
- **Multiple engines** — all engines fire simultaneously, thrust summed
- **Drag** CdA ∝ mass, exponential atmosphere density *per-body scale (Earth 1.0, Venus 1.5, Mars 0.05, others 0)*
- **Landing**: soft <5m/s (8 with chute), rough <20m/s (15 with chute), crash above — *chute now scales with mass (×6) for universal soft landing*
- **TWR gate**: must have TWR ≥ 1.0 at CURRENT throttle and fuel > 0.01 to lift off — sums ALL engines' thrust, with fuel check ("No fuel — cannot launch!")
- **Countdown**: 3-2-1-LIFTOFF, 5s cooldown after TWR failure
- **Spawn protection**: 2 seconds (120 frames) after launch
- **Aerodynamic stability**: rocket aligns with velocity in atmosphere (<70km) *gated by per-body atmosphere scale*
- **Rotation**: yaw around surface normal, pitch around horizon tangent — realistic
- **Gravity/drag**: use warped dt — consistent at all time warp levels
- **SAS (v2.9)**: 4 modes cycled by `T` — OFF / HOLD (locks current attitude) / PROGRADE (tracks velocity) / RETROGRADE (tracks -velocity). Drives angular velocity toward target quaternion. Works only at x1 warp.

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

## Staging Fixes (v4.2)
- **Position-based staging**: decoupler selection and stage removal now use PHYSICAL Y position (bottom-most decoupler; drop everything below its Y) — order-agnostic. Before, staging used root array order: VAB adds parts bottom-first but Game default top-first, so VAB-built rockets (e.g. Saturn V preset) dropped the UPPER stage and kept the booster — inverted staging.
- **Unique node uid** (`part.id#N`): every assembly node gets a runtime-unique mesh name. Fixes `getObjectByName` collisions — before, two identical parts (e.g. two `tank_m_lfo` in the default rocket) caused the WRONG mesh to detach on staging (upper tank flew away as debris, lower stayed glued → broken visuals, "teleport").
- **Debris push direction fixed**: separated stages now push DOWN toward the planet (away from the continuing rocket); before, the sign error pushed them UP.
- **Fuel drain order fixed**: tanks sorted top-first, consumed bottom-first — lower-stage (booster) tanks drain before upper-stage tanks. Correct staging: booster fuel is used up, then SPACE drops the empty booster.
- **Saturn V (GLTF)**: thrust 60000 → 120000 kN — TWR 1.29 at full load (530t), lifts off alone.
- **Heavy engines boosted** for g≈176 heavy lifting: Mammoth 55000 kN, Kickback 70000 kN, TwinBoar 45000 kN.
- **VAB preset "Saturn V (2-stage)"** (v4.4): slim L-profile booster — TwinBoar + 2× L tank + TD-2 decoupler + Saturn V GLTF. Total TWR 1.28; after booster separation Saturn V alone TWR 1.29.
- **Engine bells slimmed** (v4.4): nozzle exit flare 0.84r → 0.60r, elongated 0.38h → 0.44h — sleeker, less "fat" look on all engines.
- **Engine redesign (v4.5)**: engines read as ENGINES, not barrels — narrow
  top mount (0.55r, fills the slot so no gap) + short turbopump block with
  twin exhaust pipes + DOMINANT wide bell flaring to 0.88r over half the slot
  height. Applies to all engines.
- **Stage debris fixed (v4.5)**: separated stages now render at
  ROCKET_VISUAL_SCALE (×60) with tumbling rotation — before, the detached
  booster was an invisible speck (mesh at PART_SCALE with no group scale),
  so staging looked like "nothing separated" / a lump under the rocket.
- **Auto-staging (v4.5)**: drops the booster when ITS OWN tanks run dry (not
  only when every tank is empty); also runs during warped autopilot ascent.
- **VAB camera (v4.5)**: auto-frames the REAL mesh bounding box (toMesh()
  com-centres the stack, so raw stack coordinates point the camera at empty
  space); wheel + pinch zoom, double-click re-frames; scrolling the parts
  LIST no longer silently zooms the camera out; LOAD restores the stack
  height counter so new parts stack on top correctly.

## Crash & Atmosphere Fixes (v4.2)
- **No drag full-stop**: drag never removes more than 90% of speed per frame — the old `velocity = 0` overshoot (especially at high time warp) halted rockets mid-air and made ground impacts impossible.
- **Atmosphere warp clamp (KSP-style)**: below 70 km altitude, time warp auto-limits to 10x — prevents tunneling through the 200 m crash band at high warp (rockets "landed" instead of crashing).
- **Countdown fix (v4.1)**: 3-2-1 DOM updated only on digit change (was every frame — reflow jank).

## Staging "Planets Disappear" Fix (v4.3)
- **Root cause**: `positionFlameAtNozzle` reads `Box3.setFromObject` which returns WORLD-space coordinates once the scene has rendered (at construction, before first render, matrixWorld is identity and it happens to return local coords). On staging the function re-runs mid-flight → `rocketBottomY` becomes a huge world coordinate (~+1400 near Earth) → `visualOffset = -rocketBottomY` explodes to ~-1400 → rocket visual + chase camera teleport deep INSIDE the planet → "planets disappear".
- **Fix**: convert the world-space box to the rocket group's LOCAL space via `Box3.applyMatrix4(inverse(matrixWorld))` (handles rocket rotation mid-flight); also exclude the `reentry-outer` glow effect mesh from bounds so the flame stays at the true nozzle.

## Default Rocket (Quick Flight) — v4.5
```
Stage 1: engine_mammoth (XL, 55000kN) + tank_xl_lfo (250t fuel)
         ↓ decoupler_l
Stage 2: engine_twinboar (L, 45000kN) + tank_l_lfo (100t fuel)
         ↓ decoupler_s
Stage 3: engine_sparkler (S, 600kN) + tank_s_lfo (5t fuel) + capsule_mk1

Total wet: ~365 t, launch thrust: 100600 kN (all engines fire)
TWR ≈ 1.57 at g≈176 — lifts off at full throttle
Tapered silhouette: r 1.0 → 0.75 → 0.4 (classic rocket profile)
```

## Part Proportions (v4.5)
Chunky rocket proportions (h/r ≈ 2.4) — user-tuned through three iterations
(1.6 "fat barrels" → 3.6 "thin sticks" → 2.9 "still small" → 2.4 final).
Heights/radii live in `PartBuilder SIZE_DIMS` and MUST stay in sync with
`VABScene PH` (stacking) and `Assembly SIZE_DIMS` (adapter radii):
```
S:  r 0.60·p, h 1.4·p     M:  r 0.85·p, h 2.0·p
L:  r 1.15·p, h 2.8·p     XL: r 1.50·p, h 3.6·p
```
VAB has on-screen ＋/－/FIT zoom buttons (bottom-right) in addition to
wheel/pinch; FIT re-frames the whole rocket. Scrolling the parts list never
zooms the camera.

## Flight Controls gotchas fixed (v4.5)
- **Throttle locks only above 10x warp** (with a toast) — it used to be
  silently zeroed at ANY warp, so rockets "wouldn't lift off".
- **Free camera no longer kills throttle/steering** — it's just a camera.
- **Rotation**: world-space premultiply (was post-multiply — yaw twisted
  around a wrong axis); SAS angular velocity actually integrated (SAS was
  dead code); ANGULAR_ACCEL 2.5; aerodynamic alignment suspended while the
  player steers and softened ×2.5 (it used to fight manual turns).
- **Stale saves**: CONTINUE detects unknown part ids (old catalogs) and
  warns + starts fresh instead of silently dropping decouplers.

## Part Catalog (32 parts)
- **Capsule**: MK-1 (M, 1200 kg) — textured body, dark heat shield, blue window, gold ring
- **Tanks**: S(5000)/M(50000)/L(100000)/XL(250000) kg fuel, all LFO — textured, dark connector rings, gold accents
- **Engines (9)**: Ant(1800kN,Isp350)/Sparkler(600,Isp385 vac)/Vector(3000,Isp340)/Reliant(2400,Isp290)/Mastodon(7500,Isp330)/Poodle(4000,Isp370 vac)/TwinBoar(45000,Isp300)/Mammoth(55000,Isp310)/Kickback(70000,Isp280)
- **Decouplers (3)**: TD-0 (S, 40kg), TD-1 (M, 100kg), TD-2 (L, 250kg)
- **Fairings (3)**: Nose Cone S/M + Payload Fairing L — aerodynamic cones, dragCoeff 0.1
- **RCS**: Thruster Block (S, 20kN, Isp 240) — 4-nozzle attitude control
- **Solar**: Panel (S, 25kg) — decorative, future power
- **Utility**: Parachute Mk16, Landini legs, 3 Heat shields
- **GLTF models**: Agena, Apollo-Soyuz, Saturn V, Ares I, Apollo LM, Atlas 6/9, Crawler

## Saturn V
- GLTF model, 30000 kg dry, 500000 kg fuel, 60000 kN thrust, Isp 310

## Controls (v3.5)
↑/↓ Engine Power (throttle), W/S Pitch (tilt up/down), A/D Yaw (turn left/right), Space Stage Separation, M/Tab Map view, C Free Camera, F Reset Camera, T SAS (cycle OFF/HOLD/PROGRADE/RETROGRADE), [/] Time warp, P Deploy Parachute, G Gear, Esc Pause/Menu, Mouse Orbit/Zoom, F1 Toggle HUD

### HUD (v3.5)
- **Telemetry panel** (top-left): SPD, ALT, V/S, FUEL, MASS, HEAT, THR, **TWR** (live, color-coded green≥1.0), **Δv** (Tsiolkovsky budget), **SAS mode**, WARP
- **Fuel panel** (top-right): current/total fuel + bar
- **Orbit panel** (top-right, below fuel): Ap, Pe, T→Ap, eccentricity; "suborbital" when not bound
- **Navball** (bottom-right): prograde/retrograde markers, up/down, planet markers
- **Control bar** (bottom-center): THR−/THR+/STAGE/MAP/SAS/CHUTE screen buttons
- **Version badge** (top-center): minimal ELLIPSE v3.5 pill
- **Dynamic FOV** (v3.0): FOV widens subtly at very high speed

## Missions (v3.4)
- 12 objectives across 6 categories (launch/altitude/orbit/landing/speed/staging)
- Score points persist in localStorage (`ellipse_missions_score`)
- Live evaluation during flight; toast on completion
- Mission list panel in main menu (★ MISSIONS button) with progress + rewards

## Save System (v3.2, flight-resume in v4.5)
- VAB **SAVE** dialog: name and persist assembly to localStorage
- VAB **LOAD** dialog: list saved rockets, load or delete
- **Autosave last build**: persists on LAUNCH; **CONTINUE** button in main menu resumes it
- **Flight resume (v4.5)**: leaving flight for the menu (Esc → MENU, not a crash)
  saves the full flight state — position, velocity, attitude, throttle, fuel per
  tank, landed/launched flags AND all planetary positions/velocities (planets
  reset to epoch each session, so without this the rocket would resume in the
  wrong place). **CONTINUE** restores everything where you left off. A fresh
  launch (FLIGHT / VAB LAUNCH) clears the resume point; crashes are not saved.

## Transfer Planner & Autopilot (v3.7, auto-launch in v4.5)
- In map view: **TRANSFER PLANNER** panel (top-right)
- Select target planet → COMPUTE Hohmann transfer (Δv, direction, travel time)
- **AUTOPILOT GO** button: rocket automatically flies to selected planet.
  GO **auto-computes the plan** if COMPUTE was not pressed — previously it
  silently did nothing without a plan ("press GO, nothing happens").
  - **ASCENT phase (v4.5)**: GO works even on the pad — full-throttle auto-launch
    (straight up); works at ANY time warp (atmosphere clamp still limits to 10x
    below 70 km); dry boosters are auto-staged mid-ascent; at 120 km the
    transfer is RE-COMPUTED from the current state (a pad-side plan has
    velocity ≈ 0 and is meaningless)
  - **BURN phase**: sets throttle=100%, SAS=prograde/retrograde, burns until Δv achieved
  - **COAST phase**: time-warp to 100000x, monitors distance to target
  - **ARRIVAL**: shows "YOU HAVE ARRIVED" overlay with travel time, fuel consumed, mass lost
  - Live status badge (top-center) shows phase + progress — click to cancel
  - Validates: has fuel, has engines before starting; COMPUTE failures show a toast
  - Abort: out of fuel, cancelled by user, target not found, no valid transfer from orbit

### Animations (v3.0)
- **Starfield**: per-star twinkle (shader uTime) + drifting nebula bands
- **Toast**: pop-in (back-out) + slide-out; vertical stack container
- **Main menu**: logo + buttons stagger rise-in; ellipse rings continuous drift; title glow pulse
- **Guide overlay**: fade + card rise-in
- **HUD panels**: slide-in from edges on flight start (left/right/bottom/fade-up)
- **Scene transitions**: fade-to-black overlay between MainMenu/VAB/Flight (280ms in, swap, 320ms out)
- **Loading screen**: animated spinner + model preload progress (shown during GLTF preload)
- **Countdown**: scale-pop on each 3/2/1 number
- **Stage separation**: white flash overlay + rocket scale pulse (back-out overshoot)
- **Parachute**: deploy scale-in from 0 with back-out overshoot over ~1.25s
- **Engine exhaust light**: combustion flicker (±9% noise)
- **Reentry plasma**: scale + opacity flicker proportional to intensity
- **Map view**: fade in/out (220ms); animated dash flow on orbit trails (lineDashOffset) + pulsing trajectory glow
- **Pause overlay**: fade in/out
- **Crash overlay**: fade in + shake on "CRASH!" text
- **Achievements**: slide-in card from right with pop + glow, auto-dismiss after 3.2s
- **VAB part add**: back-out scale drop-in of the newly added part
- **Bottom control bar**: button press scale feedback
- **Dynamic FOV**: FOV widens slightly at high speed for sense of motion
- **Liftoff ignition**: orange radial flash + camera shake at LIFTOFF
- **Idle camera sway**: gentle breathing bob while grounded on pad (pre-launch)
- **TWR warning pulse**: TWR value blinks when < 1.0 (can't lift off)
- **SAS active glow**: SAS mode label glows while engaged
- **Warp change pulse**: warp label scale-pops on level change

### In-game Guide (v3.0)
- 4-step build & launch walkthrough (VAB → stack capsule→tank→engine → optional decoupler/parachute/legs → FLIGHT)
- Flight tips panel: TWR ≥ 1.0 gate, gravity turn east at ~10km, ORBIT panel reading, SAS usage, staging, soft landing (<5 m/s, chute + legs)
- Renamed control labels: "Throttle"→"Engine Power", "Stage"→"Stage Separation", "SAS toggle"→"SAS — cycle OFF/HOLD/PROGRADE/RETROGRADE", "Parachute"→"Deploy Parachute", "Map view"→"Map / orbit view", "Free/Reset camera"→"Free Camera"/"Reset Camera", "Time warp"→"Time Warp slower / faster"

### Touch Controls (v3.0)
- Left: pitch/yaw joystick
- Right: THR+/THR-/STAGE/**SAS**/**CHUTE** buttons (SAS/CHUTE wired to same actions as desktop)

## Scenes
- **MainMenu** (v1.0 style): SVG ellipse logo, gold accent, FLIGHT/VEHICLE ASSEMBLY/SETTINGS/GUIDE buttons via CSS classes
- **VAB**: dark sidebar, part list grouped by type, color-coded indicators, rocket breadcrumbs, UNDO/CLEAR/LAUNCH/BACK
- **Flight**: physics, rendering, HUD, map, effects, staging, SAS — 2300+ lines

## Known Issues (v4.5)
- FlightScene.ts needs decomposition into modules (~2500 lines)
- Flat assembly model limits radial/staged complexity
- No symmetry mode for boosters
- Map redraw throttled to every 5th frame to avoid lag
- Roll disabled (getRoll always 0) — 2-axis attitude control only
- Transfer planner uses circular-orbit approximation (no phase-angle timing yet)
- RCS/Solar parts are visual-only (no attitude/thrust or power simulation)
