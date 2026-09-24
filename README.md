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
- `M` or `Tab` opens the system map; `Esc` pauses.

Search the parts library in Vehicle Assembly and click a part to add it on top. The stack list shows the top of the rocket first; use its arrows to move parts or × to remove one. You can save and load designs.

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
