# How the game works

Ellipse runs in the browser with TypeScript, Three.js, and Vite. The interface is in English. Physical positions use metres; rendering uses separate scales for planets and rocket parts.

## Flight

The rocket carries an assembly, remaining fuel, position, velocity, throttle, and attitude. Engines consume fuel and apply thrust along the craft's orientation. Planet motion uses velocity Verlet integration. Powered flight applies gravity relative to the moving reference body; high coast warp uses orbital propagation.

Surface contact samples the same terrain function as the planet mesh. Descent speed, lateral speed, attitude, and landing equipment determine the outcome. A crash stops the flight until restart or return to the menu.

Near the ground, a dense terrain mesh and a common visual magnification make planets look larger beside the rocket. This magnification decreases with altitude and does not change physical radii or gravity. Launch restraints are fitted to the hull and open when liftoff begins.

The default starter rocket has a full-fuel thrust-to-weight ratio of about 5.7 on Earth. This is a game balance choice. Constants live in `src/config/constants.ts`, and engine values live in the part catalog.

## Automatic flight

The flight computer handles launch, transfer, braking, and powered landing on supported solid bodies. It uses the rocket's actual engines and fuel. Manual steering cancels the automatic flight. Landing assist can also be enabled separately with `L`.

## Assembly and saves

VAB builds a stack from the parts library. Parts can be searched, reordered, and removed. Designs and in-progress flights are stored in the browser. Continue restores a saved flight; Restart restores its original assembly.

## Checks

Run `npm test` and `npm run build` before publishing. Flight tests include powered launch, Moon and Mars missions, surface collisions, high warp, and saving/resuming. Browser checks are still needed for appearance and control placement.
