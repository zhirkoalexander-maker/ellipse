# Rocket models and planet surfaces

The parts in Vehicle assembly are built from Three.js geometry in `src/parts/DesignedParts.ts`. `PartBuilder.ts` puts them into the assembled vehicle. Flight uses those same models, so a change to a capsule or an engine should also appear in the editor.

The catalog currently offers S and XL parts. The two tank capacities in each size share their dimensions, but have different external details. Joints between different body widths use short tapered adapters. Side engines and decouplers attach to a selected tank as a mirrored pair. Their attachment points matter as much as their shape: a model that looks fine by itself can intersect the next part when assembled.

For a closer look, run the app and open `part-gallery.html`. It shows the individual parts and includes a switch for the older models. The gallery is useful for inspecting windows, nozzles and attachment points; the assembly screen is where stage spacing and mixed-size joints can be checked together.

## Terrain

Planet classes are in `src/planets`. Earth, the Moon, Mars and Mercury use maps from `public/textures`. The gas giants get their banded appearance from `GasAppearance.ts`. Saturn's rings are separate from its cloud surface.

`Terrain.ts` supplies the surface heights used by both geometry and collisions. `SurfaceView.ts` builds the more detailed ground around the rocket. Earth's coastline and nearby land use the launch-site coordinates in `EarthGeography.ts`, so water, shore shading and terrain are tied to the same area.

The launch pad is a useful reference point when editing terrain. The rocket needs to stand on the visible surface before launch, and the ground must remain aligned during descent. Flying upward also reveals the transition from nearby ground to the distant planet mesh, where a change can otherwise go unnoticed in a close-up screenshot.

## Menu and tutorial images

`public/menu-launch.webp` is a screenshot of the starter rocket in the game. It was used by the screenshot menu. The restored 2.5.33 menu does not display it.

The tutorial uses the images in `public/tutorial`. `scripts/capture-tutorial.mjs` captures the game with Puppeteer and records highlight positions in `src/ui/TutorialFrames.json`. It also makes closer views for small screens. The script navigates through the menu, assembly screen, flight and map. It is intended for a local game server so taking screenshots does not increment the public player counter.

If a button moves or a menu changes, its screenshot and highlight need updating together. The caption can be correct while the picture still points at the old control.
