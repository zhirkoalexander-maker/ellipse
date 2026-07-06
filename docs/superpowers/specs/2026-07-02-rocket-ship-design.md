# Rocket Ship Design

## Goal

Build a desktop-only browser game in English using Vite, TypeScript, and Three.js that reproduces the specified Ellipse-style 2D flight sandbox with patched-conics gravity, heading-based thrust, HUD, map mode, and localStorage-backed progress.

## Scope

This design covers all required items in the supplied specification except the section marked `Next Features (pending)`, which remains out of scope for the current release.

## Architecture

The game is split into a deterministic simulation core and a thin rendering layer.

- `world` defines immutable game data: celestial bodies, orbital positions, rocket parts, stages, masses, thrust, and scale constants.
- `core` defines shared types, constants, fixed-step timing helpers, math utilities, and storage interfaces.
- `physics` computes dominant-body selection, sphere-of-influence transitions, gravitational acceleration, thrust, drag, fuel burn, parachute drag behavior, and launch/grounded rules.
- `simulation` owns `GameState`, applies player intents, advances time with `FIXED_DT = 1/60`, and coordinates physics, achievements, and UI flags.
- `rendering` owns the Three.js scene, stars shader, procedural Earth surface generation, planet visuals, rocket visuals, and chase camera.
- `ui` renders HUD, navball, map mode, labels, button bar, and keyboard/mouse bindings against a read-only state snapshot.
- `persistence` reads and writes achievements, highscores, and progress metadata to localStorage.

The simulation layer does not depend on Three.js. Rendering reads the current snapshot and mirrors it visually.

## Runtime Model

The app boots a single game runtime. Each animation frame:

1. Input adapters translate keyboard and button events into short-lived intents.
2. The simulation loop consumes intents and advances one or more fixed steps depending on the selected warp level.
3. Physics resolves the current dominant celestial body by sphere of influence and applies only that body's gravity for the step.
4. Rocket state updates position, velocity, heading, fuel, stage status, parachute status, altitude, and derived HUD values.
5. Achievements and score metadata update when thresholds change.
6. Rendering and UI read the latest immutable snapshot and update the scene.

Warp never changes `FIXED_DT`; it increases how many simulation steps run per render frame.

## State Model

`GameState` contains:

- simulation clock and active warp level;
- rocket position, velocity, heading, throttle, dry mass, fuel mass, active stage, parachute state, grounded state, and SAS state;
- current dominant body and altitude context;
- UI flags such as map visibility and button states;
- achievements, best-speed, best-altitude, and progress values.

## Explicit Gameplay Rules

- Thrust is heading-based in 2D only: `tx = -sin(heading)`, `ty = cos(heading)`, `tz = 0`.
- `ArrowLeft` and `ArrowRight` rotate heading only when SAS is off.
- SAS, when enabled, holds the current heading constant without an angular-velocity system.
- `ArrowUp` and `ArrowDown` remain no-ops.
- `W` and `S` change throttle within bounded limits.
- `Q` and `E` step warp down and up through discrete levels.
- `Space` stages the current rocket stage. If the craft is still grounded, launch starts only when throttle and staging rules allow it.
- `P` and the `CHUTE` button toggle parachute deployment.
- Parachute behavior is modeled through increased drag, not a separate lift system.
- `M` and the `MAP` button toggle a solar-system overview without changing the simulation state.
- The chase camera follows the rocket with a fixed offset and applies mouse orbit directly with no lerp.

## Rendering Design

- Three.js uses `MeshStandardMaterial` with flat colors inspired by the Ellipse palette.
- The solar-system view uses orbital positions scaled by `ORBIT_SCALE` and visual planet radii scaled by `VISUAL_PLANET_MULT`.
- The flight view uses `VISUAL_SCALE` and `PART_SCALE` to keep the rocket readable without changing the physical simulation.
- Earth uses a procedural texture generated at runtime from color and noise rules rather than external image assets.
- The background uses a custom stars shader with a dark sky and white twinkling stars.
- The rocket is rendered as a stacked 2D side-view composition: capsule, tank, and engine bell.

## Map Design

Map mode presents a bird's-eye solar-system overview with:

- visible planet markers;
- text labels for each body;
- SOI circles derived from each body's computed sphere of influence;
- a rocket marker showing its current position in system space.

## Persistence Design

Persistence stores only meta-progress in versioned JSON under a single localStorage key.

- achievements;
- best altitude;
- best speed;
- progress flags.

The current release does not persist an in-flight save state. This avoids coupling browser storage to transient simulation details while still meeting the progress requirement.

## Testing Strategy

The codebase follows TDD with Vitest.

- Unit tests cover physics and state rules: SOI selection, gravity, drag, thrust vector mapping, SAS heading lock, warp stepping, staging, parachute drag, and score updates.
- Integration tests cover the simulation loop and intent handling without depending on WebGL.
- Narrow rendering tests cover deterministic helpers such as scaling, navball angle formatting, and rocket-part layout math.

The first executable validation target for each feature is the narrowest relevant Vitest file.

## Release Definition

The release is complete when the browser game provides:

- a playable launch-to-space sandbox;
- all required keyboard and button controls;
- HUD with speed, altitude, angle, warp, fuel, and throttle;
- navball and button bar;
- map mode with labels, SOI circles, and rocket marker;
- chase camera mouse orbit;
- procedural Earth, star shader, and Ellipse-style rocket visual;
- localStorage-backed achievements and highscores.