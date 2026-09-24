# Automatic flight and landing

Goal: repair the crash bounce, increase powered speed at 1×, and let the player choose a solid destination and fly from the launchpad to a real touchdown automatically. Publish the verified result to the existing GitHub Pages site. Preserve accepted part models and existing app.

- [x] Crash regression: reproduce 5705 m/s descent, 4241 m/s drift and 88° tilt on moving Earth; stop flight integration on impact and freeze the crash frame while effects finish.
- [x] Increase ascent propulsion by 50% (starter TWR≈4.17); preserve vacuum engines and ordinary 1× time.
- [x] HUD: English destination picker, default Moon, optional automatic time acceleration, start/cancel and phase/status feedback; resource cleanup and one event per click.
- [x] Closed-loop MissionGuidance: depart without intersecting the launch body, intercept moving target, gravity compensation and braking, then hand over to real fuel-limited landing guidance.
- [x] Integration: bounded powered physics substeps for automatic time acceleration, smooth orientation before thrust, fuel validation, manual cancellation, success only on touchdown, save/resume mission target. Repair Moon's radial/non-orbital initial velocity.
- [ ] Verify full real-physics Earth→Moon and Earth→Mars journeys, cancel/insufficient-fuel cases, crash stability, full tests/build/review; publish and verify public UI journey.

No teleporting or free fuel. Gas giants have no solid surface and are omitted from the landing picker. Mission guidance can be cancelled, and normal controls remain available.
