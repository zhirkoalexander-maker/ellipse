# Flight upgrade implementation plan

Goal: Improve the existing simulator, preserve the current source and models, repair the six audit findings, and make launch, steering and landing reliable.

Architecture: Retain Game, FlightScene, Assembly and the existing catalog. Extract bounded physics, attitude and landing calculations into testable modules. Keep legacy part rendering available; use a new procedural design for the default appearance.

Constraints: No deletion of the existing game or imported models. Snapshot: backups/before-flight-upgrade-2026-09-23.tar.gz. No new runtime dependencies. Preserve existing part IDs and migrate old saves.

- [x] Physics: regression tests for oscillator RK4, bounded propagation and inward transfer; correct derivatives, integrate coupled planetary states, bound substeps.
- [x] Visuals: original procedural part geometry, preserve legacy entry point; enlarge bodies moderately and align terrain queries with rendered geometry; test dimensions and surface consistency.
- [x] Flight lifecycle: remove all event listeners and owned overlays, cancel map animation, save on pagehide/visibilitychange and periodically; serialize recursive fuel and validate saved fields.
- [x] Launch and attitude: actual mesh bounds determine visual ground clearance; update thrust direction after rotation; smooth local pitch/yaw/roll and SAS; verify multiple orientations and frame rates.
- [x] Landing: surface-relative descent, lateral speed and upright tilt, swept contact checks; optional L landing assist with fuel-limited braking and clear HUD status; verify powered descent and crashes.
- [x] Verification: full Vitest suite, typecheck, production build, browser launch/turn/landing and visual inspection where browser tooling is available; final review against every requirement.

Design: pearl ceramic #e8e9e3, graphite #252d35, titanium #87969d, oxidized copper #bd7650, mission blue #487e9c. Strong silhouettes, panel seams, dark bell interiors, restrained rings and windows. Planet increase 25%, surface gravity adjusted for playable launch and landing. Gentle terrain uses one source for mesh and collisions. Optional assistance controls thrust and attitude but consumes real fuel.

Verification result: 47 Vitest files / 193 tests passed; TypeScript and production build passed. Chromium/WebGL launch, powered ascent, manual steering, desktop/mobile layouts and both part galleries inspected. Earth, Moon and Mars powered landings verified by regression scenarios. Original archive and legacy meshes retained.

Final Chromium Moon descent: landed without a crash in 41.07 simulated seconds, consuming 41.98 kg of fuel; screenshot /tmp/ellipse-moon-landed.png.
