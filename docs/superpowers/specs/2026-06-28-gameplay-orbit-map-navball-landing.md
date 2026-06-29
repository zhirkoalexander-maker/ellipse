# Gameplay: Orbital Mechanics, Map, Navball & Landing

## Overview

Implement full orbital physics with SOI switching (patched conics), a map view with predicted trajectory, a navball orientation indicator, and landing on any body.

---

## 1. Orbital Mechanics + SOI Switching

### SOI (Sphere of Influence)

Each planet/body has an SOI radius computed as:

```
soi = distance_to_sun * (body_mass / sun_mass)^0.4
```

For the Sun, SOI is infinite (everything is inside it).

### Gravity Model

Each frame, find the **reference body**:
1. For each body, compute distance from rocket
2. If rocket is within body's SOI, body is a candidate
3. Pick the candidate with the strongest gravitational acceleration at rocket's position
4. Apply only that body's gravity (ignore others)

Outside all planet SOIs → Sun's gravity applies.

### Orbit Elements

Compute Keplerian elements from rocket's state vector relative to reference body:
- Semi-major axis (a)
- Eccentricity (e)
- Inclination, longitude of ascending node, argument of periapsis, true anomaly (for map rendering)

If `e < 1`: bound elliptical orbit
If `e >= 1`: hyperbolic escape trajectory

### Orbit Prediction

For map rendering, compute N points along the predicted trajectory:
- Ellipse: 360 points (full orbit)
- Hyperbola: points until exit from SOI

---

## 2. Orbit Map (M Key)

### Full-Screen Overlay

- Opens with M or Tab key
- Full-screen canvas overlay (no margins)
- Dark background (#060814)
- Planet positions plotted as colored circles with labels

### New Features

| Element | Description |
|---------|-------------|
| **Trajectory line** | Blue (#4488CC) for bound orbit, yellow (#DDAA44) for escape |
| **Ap marker** | "Ap" label at apoapsis point |
| **Pe marker** | "Pe" label at periapsis point |
| **SOI boundary** | Dashed circle around reference body at SOI radius |
| **Rocket icon** | Colored triangle showing direction |
| **Zoom** | Mouse wheel / `+` `-` keys — scale factor 0.5x to 4x |
| **Pan** | Drag with mouse, or arrow keys |

### Rendering

2D Canvas, updated every frame while map is open. Uses the same projection as current map (top-down, Y axis up on screen).

---

## 3. Navball (2D Canvas HUD Element)

### Position & Size

- Bottom-right corner of screen
- 150×150 pixel circle
- Semi-transparent overlay (opacity 0.85)

### Markers

| Element | Symbol | Color | Meaning |
|---------|--------|-------|---------|
| Horizon line | Horizontal dividing line | — | Sky (top half, blue) / Ground (bottom half, brown) |
| Prograde | Circle with top bar ⭧ | #44FF44 | Direction of velocity vector |
| Retrograde | Circle with crossed bar ⭨ | #44FF44 | Opposite of velocity |
| Zenith | Small triangle pointing up | #4488FF | Radial away from reference body |
| Nadir | Small triangle pointing down | #4488FF | Radial toward reference body |
| Heading | Small dot | #FFAA44 | Rocket nose direction |
| Pitch ladder | Horizontal lines at 10° intervals | White, thin | Indicate pitch angle relative to horizon |

### Projection

All 3D directions (velocity, zenith, heading) are projected onto the 2D navball circle using azimuthal equidistant projection:
- Center of navball = rocket forward direction
- The "up" on navball depends on rocket roll angle
- Horizon rotates with roll

---

## 4. Landing System

### Ground Detection

For any body with a `radius` property:
- Distance from rocket to body center < body.radius + 0.5m → ground contact
- Compute vertical speed (component of velocity toward body center)
- Compute tilt angle (angle between rocket up [0,1,0] and radial out from body)

### Landing Rules

| Condition | Result |
|-----------|--------|
| Vertical speed ≥ 10 m/s | **CRASH** — rocket destroyed, toast "CRASH!" |
| Tilt ≥ 20° from vertical | **CRASH** — tipped over |
| Speed < 10 AND tilt < 20° | **LANDED** — soft touchdown, toast "Landed on {body}" |
| Landing on Earth with parachute | Parachute enables landing at higher speeds (15 m/s) |

### Landing Legs

If rocket has `legs` parts, tilt tolerance increases to 30°.

### Achievements

- `land_earth` — soft landing on Earth
- `land_moon` — soft landing on Moon
- `land_mars` — soft landing on Mars
- `land_venus` — soft landing on Venus
- `land_mercury` — soft landing on Mercury

---

## Acceptance Criteria

1. Rocket goes into orbit around Earth when given enough horizontal velocity (no more "falling down")
2. SOI switches when approaching Moon — Moon's gravity takes over
3. Map shows predicted orbit trajectory (ellipse or hyperbola)
4. Map is full-screen with zoom (mouse wheel) and pan (drag)
5. Navball shows correct orientation relative to horizon/prograde
6. Landing on Moon/Mars possible with < 10 m/s + tilt < 20°
7. All existing 71 tests pass, typecheck clean
