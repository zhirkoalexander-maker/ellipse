# Code and flight model

`src/core/Game.ts` owns the menu, assembly screen and flight scene. Each screen removes its listeners, overlays and rendering resources when it closes.

| Directory | Contents |
| --- | --- |
| `src/scenes` | Menu, rocket assembly and flight loop |
| `src/flight` | Input, HUD, camera, guidance and atmospheric drag |
| `src/physics` | Gravity, orbital propagation and reference bodies |
| `src/planets` | Planet geometry, textures and terrain |
| `src/rocket`, `src/parts` | Assemblies, staging, engines, fuel and part models |
| `src/storage` | Design saves, flight saves and older-save migration |
| `src/ui` | Map and settings |

## Coordinates

The simulation keeps positions, velocities and forces in SI units. The HUD and map use a game-distance scale of 0.25, defined in `GameUnits.ts`. Convert both displayed values and player-entered burn values at the UI boundary. Do not scale the physics state or saved coordinates.

Rendering has its own scale. `SurfaceView` enlarges nearby terrain and reduces distant planet discs. It does not move collision surfaces. Terrain geometry and contact checks use `rockyTerrain`; Earth coast shading shares the launch frame with that function.

## Flight loop

Thrust consumes fuel and acts along the rocket's nose. Drag depends on the vehicle's width and attitude, and on local air density. Planet motion uses velocity Verlet; fast unpowered flight uses orbital propagation.

Manual input takes priority over guidance. A map burn, landing assist and a destination mission must not command the rocket at the same time. Automatic missions still need fuel and enough thrust to land.

Contact checks use vertical speed, sideways speed and tilt. The 90 m/s landing limit uses displayed game units. A crash ends the current flight; it must not bounce the rocket away from the surface.

## Saves

Flight saves include body motion, remaining fuel, vehicle attitude, guidance state and the original launch assembly. Continue restores the current vehicle; Restart uses the launch assembly. Older saves without that field fall back to the remaining vehicle.

Browser storage may be unavailable or full. Failed writes must not prevent flight, and save dialogs must report failures instead of claiming success.

## Verification

Run `npm test` and `npm run build`. The suite covers complete Moon and Mars missions, manual input, staging, terrain contact, warp, saves and scene cleanup. Check WebGL rendering and desktop/mobile controls in a browser as well; DOM tests do not compile shaders.
