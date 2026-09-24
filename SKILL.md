---
name: rocket-ship
description: Development notes for the Ellipse browser rocket simulator.
---

# Working on Ellipse

Use this guide when changing this repository. Start with README.md for local commands and SPECIFICATION.md for the current flight model.

Keep physics positions in metres and convert only at the rendering boundary. Terrain rendering and collision queries must use the same surface function. Flight changes should preserve fuel consumption, manual control, and saved-flight compatibility.

Run the relevant tests during development, then `npm test` and `npm run build` before publishing. Check visible changes in a browser at desktop and narrow screen widths.
