# Development notes

## 2.5.4

- Four fitted launch restraints open as the rocket lifts off.
- Nearby planets render up to six times larger, with the same multiplier across the system. The multiplier falls smoothly during ascent.
- Rocky planets use shared terrain geometry and surface colors. A denser globe mesh around the craft shows close-up slopes and crater rims without separate patch seams.
- The flat area at the launch site is much smaller. Airless bodies have a dark sky.

## 2.5.3

- High coast warp keeps the camera with the rocket while preserving zoom and orbit controls.
- Powered flight includes gravity from the system's bodies, measured relative to the moving reference planet.
- The Earth launch site has a deck, markings, and service tower that travel with Earth.
- VAB has part search and controls for moving or removing individual parts.
- Flight controls use shorter labels. Routine hints and the right-hand orbit panel no longer cover the view.

## 2.5.2

Fixed destination surface contact during automatic flights and limited camera zoom. Moon and Mars missions are covered by complete flight simulation tests.

Earlier changes are recorded in Git history. Some older design documents describe experiments that are no longer used by the current build.
