# Models and terrain

Rocket parts are built in `src/parts/DesignedParts.ts` and assembled by `PartBuilder.ts`. The same models appear in the assembly screen and in flight. The older models remain available in the part gallery.

Run the app and open `part-gallery.html` to inspect parts. Check the capsule windows, engine nozzle, attachment points and stage spacing at close range.

Planet classes live in `src/planets`. Earth, the Moon, Mars and Mercury use the texture maps in `public/textures`. Gas-planet clouds come from `GasAppearance.ts`. The launch site's coast and terrain share the coordinates exported by `EarthGeography.ts`.

`Terrain.ts` supplies surface heights for both geometry and collisions. `SurfaceView.ts` builds denser geometry around the rocket. After changing terrain, check a launch, a landing and the transition to the distant planet mesh.
