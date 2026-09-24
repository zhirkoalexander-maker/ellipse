# Terrain and launch clamps

Goal: visible terrain from the pad through ascent, large close-up planets, and moving launch restraints.

- Add shared deterministic terrain functions and a dense local terrain patch. Use the same height samples for rendering and contact.
- Keep only the immediate launch site flat. Give rocky bodies different surface profiles.
- Apply a common altitude-dependent visual scale around the rocket to planet meshes. Physical radii, gravity and saved coordinates remain unchanged.
- Replace decorative launch posts with articulated restraints fitted to the rocket. Open them as liftoff begins and leave them attached to the pad.
- Test mesh/contact agreement, proportional visual scaling, clamp motion, and complete Moon/Mars missions. Inspect the pad, ascent and Moon in a browser before publishing.
