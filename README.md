# Ellipse

Ellipse is a small browser rocket simulator built with Three.js. Build a vehicle, launch it from the Earth pad, fly by hand, or ask the flight computer to carry out a transfer and landing.

Play the current build at <https://zhirkoalexander-maker.github.io/ellipse/>.

## Start locally

```sh
npm install
npm run dev
```

The production check is:

```sh
npm test -- --run
npm run build
```

## Controls

- `↑/↓` changes throttle; `W/S` pitches and `A/D` yaws the rocket.
- `Space` launches on the pad and stages a live vehicle.
- `L` toggles landing assist.
- `Q/E` changes time warp; `100×` and `1000×` are available above 70 km with the engines off.
- `C` switches the chase and free cameras; drag or use the camera buttons to orbit and zoom.
- `M` or `Tab` opens the map. `M` or `Esc` closes it; outside the map, `Esc` pauses.

Search the parts library in Vehicle Assembly and click a part to add it on top. The stack list shows the top of the rocket first; use its arrows to move parts or × to remove one. You can save and load designs.

In the map, use Orbit for the current flight path, Target to frame the selected destination, or System for an overview. Scroll or pinch to zoom and drag to pan. Prograde, radial and normal values preview a short burn from the current position; Execute burn turns the rocket and fires its engines until the requested correction is complete. Stop, manual throttle, or a warp change cancels the burn. The preview uses the current reference body, so it is not a full interplanetary encounter prediction.

## Project layout

```text
src/core       app startup and scene routing
src/scenes     menu, assembly, and flight scenes
src/flight     controls, guidance, camera, and HUD
src/physics    gravity, orbits, transfers, and collision checks
src/planets    planet meshes, terrain, and atmospheres
src/parts      procedural parts and thumbnails
src/rocket     assembly and fuel state
```
