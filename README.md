# Ellipse

[Play in the browser](https://zhirkoalexander-maker.github.io/ellipse/)

A spaceflight simulator built with TypeScript and Three.js.

**Flight** starts with a rocket on the pad. **Vehicle assembly** opens the builder. There’s a guide in the main menu.

## Controls

| Key | Action |
| --- | --- |
| Space | Launch / stage |
| ↑ / ↓ | Throttle |
| W / S, A / D | Steering |
| J / K | Roll |
| M / Tab | Map |
| L | Landing assist |
| T | Stability mode |
| P / G | Parachute / landing gear |
| Q / E | Time warp |
| C / F | Free camera / reset view |
| Esc | Pause / close map |

Drag to move the camera. Scroll or pinch to zoom.

Saves are stored in your browser. **Continue** loads the last flight; builds saved in the assembly screen have their own names.

## Development

Node.js 20+.

```sh
npm ci
npm run dev
```

`npm test` runs the tests. `npm run build` writes the production build to `dist/`.

Source code is in [`src/`](src/). See [SPECIFICATION.md](SPECIFICATION.md) for the flight model and [DEVLOG.md](DEVLOG.md) for changes.
