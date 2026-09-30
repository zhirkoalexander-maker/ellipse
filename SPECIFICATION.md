# Code and flight model

The current game uses the 2.5.33 flight model. Later interface work does not include the adaptive thrust or relaxed sideways landing limits from 2.5.34. Those changes are still available in the commit history.

## Where a flight starts

`src/core/Game.ts` creates the planetary system and switches between the menu, Vehicle assembly and flight. `src/main.ts` migrates saved data before creating the game. The first-visit tutorial belongs to the menu.

The editor produces an `Assembly`. Flight wraps that assembly in a `Rocket`, with separate state for position, velocity, orientation and controls. The original launch assembly is kept as a separate copy because staging changes the vehicle you are currently flying. Restart can then return the complete rocket to the pad.

Most of the flight orchestration is in `src/scenes/FlightScene.ts`. Input, instruments, camera, drag, thrust and guidance have their own files in `src/flight`. Gravity and planet motion are in `src/physics`; part definitions and models are in `src/parts`. Assembly, fuel access and stage selection are in `src/rocket`.

## Three different scales

The simulation uses metres, seconds and kilograms. Planet positions and saved flight coordinates use these units too. The numbers shown in the HUD and map apply a distance scale of 0.25 from `GameUnits.ts`. Speeds use the same scale; mass and time do not. A displayed course correction is converted back before it is applied to the simulation.

Rendering has a separate scale. `SurfaceView` changes the apparent size of nearby ground, and distant planet discs are reduced so they do not fill the sky. Those visual changes do not move the collision surface. This distinction matters when comparing a screenshot, an altitude readout and the raw flight state: they are not three interchangeable measurements.

Surface geometry and contact checks use the heights supplied by `Terrain.ts`. Earth's coastal appearance also uses the coordinates in `EarthGeography.ts`. Changing only the visible surface can leave a rocket standing above it or colliding below it, so geometry and collision heights need to agree.

## Engines, guidance and contact

An active engine applies thrust along the rocket's nose and consumes fuel accessible to its stage. The force comes from the engine's rated thrust and the current throttle. When the remaining fuel cannot cover a whole simulation step, the impulse is reduced to match the fuel actually burned. Thrust therefore stops when the tanks run dry.

Fuel consumption includes the game's burn-rate multiplier. The atmosphere model uses the vehicle's width and attitude, local density and velocity relative to the current body. Planet motion uses velocity Verlet; fast unpowered flight can use orbital propagation. These choices are for the game's scale and travel times rather than a real launch vehicle's performance.

Manual steering or throttle takes control away from automatic guidance. Map corrections, landing assist and destination autopilot share the same rocket, engines and fuel. They are mutually exclusive flight controls. Selecting a destination does not itself move the rocket there.

Surface contact uses descent speed, sideways speed and tilt. The 90 m/s vertical landing limit is in displayed units, and it does not override the other limits. Deploying actual landing legs or a parachute affects the supported-landing checks. A failed contact ends the flight instead of applying a bounce that sends the wreck back into the air.

## Saves

Flight saves contain the remaining assembly, fuel, body motion, vehicle attitude, guidance state and original launch design. Restoring the planets as well as the rocket prevents a resumed flight from finding its destination somewhere else in its orbit. Continue uses the remaining vehicle; Restart uses the launch design when the save has one. Older saves fall back to the vehicle they contain.

Named designs are separate from flight saves. Browser storage is also used for settings, tutorial dismissal and progress. Storage access can fail or run out of space; the save code handles those failures and reports unsuccessful writes rather than reporting a successful save. There is no account or server copy of a flight.

## Checking changes

`npm test` runs the automated checks, including Moon and Mars transfers, staging, manual takeover, surface contact and save restoration. `npm run build` checks TypeScript and produces the site.

The test environment uses jsdom with canvas stubs. It can check state changes and DOM controls, but it does not establish that WebGL shaders compile on a real device. Terrain, camera, part-model and interface changes also need a browser run. For a staging change, a useful check is to launch, drop a section, save, continue and restart: that exercises both the remaining rocket and the original launch design.
