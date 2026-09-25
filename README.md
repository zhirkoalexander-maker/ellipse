# Ellipse

A rocket game that runs in your browser. Build a rocket, launch it, and try to bring it down in one piece.

**[Play Ellipse](https://zhirkoalexander-maker.github.io/ellipse/)**

## First flight

Choose **Flight** for a ready-made rocket. Press **Launch** or **Space** and wait for the countdown. The arrow buttons control throttle; W/S and A/D steer.

For a trip to the Moon, open **Map**, choose **Moon**, then **Autopilot to destination**. It uses the rocket's engines and fuel. Steering or changing throttle gives you control again.

Want to build your own? Open **Vehicle assembly** and add an engine, tanks, then a capsule. The stack list lets you move or remove individual parts. Put a decoupler between stages, then choose **Take to pad**.

## Controls

| Key | Action |
| --- | --- |
| ↑ / ↓ | Throttle |
| W / S, A / D | Steer |
| J / K | Roll |
| Space | Launch or separate a stage |
| L | Landing assist |
| T | Cycle stability modes |
| P / G | Parachute / landing gear |
| M / Tab | Open map |
| Q / E or [ / ] | Change time warp |
| C / F | Free camera / reset view |
| Esc | Close the map or pause flight |

Drag to orbit the camera; scroll or pinch to zoom. High warp needs the engines off and at least 17.5 km altitude.

The map starts with an overview of the system. Pick a planet to see the route. **Adjust course** opens the burn controls and a yellow preview. Applying a correction uses fuel; the preview only accounts for the current planet's gravity.

On descent, watch **Above surface**. Keep fuel for braking, or use **L** for landing assist. Parachutes work only in an atmosphere. Upright landings can survive up to 90 m/s; sideways or inverted impacts can still crash.

## Saves

**Continue** resumes the last saved flight. **Restart** returns the original rocket to the pad, including stages dropped during flight. Saves from older versions may only contain the remaining stages.

Flights save automatically unless you turn this off in Settings. Named designs are saved separately in Vehicle assembly. Everything stays in this browser; clearing site data removes it.

## Run locally

Requires Node.js 20 or newer.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
```

The app uses TypeScript, Three.js and Vite. Pushes to `main` run the tests, build the game and publish it to GitHub Pages.

[Code layout and flight model](SPECIFICATION.md) · [Recent changes](DEVLOG.md)
