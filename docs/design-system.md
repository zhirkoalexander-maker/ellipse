# Interface notes

The menu uses a screenshot of the starter rocket. Flight, Continue and Vehicle assembly sit together on the left; Missions, Settings and Guide are below them. On a narrow display the background darkens so the text stays readable over the rocket. The image is static and does not need an additional 3D scene.

The panels use dark slate, light text and an amber primary button. Most text uses the system font, with a separate display face for the title and monospace figures in the instruments. Green and red carry flight-state information.

Menus, the guide, missions and settings share their panel styling. A short screen scrolls within the dialog so the closing button remains reachable. The guide keeps the first flight visible and puts the longer instructions in expandable sections. The tutorial uses game screenshots, with closer images on phones, and can be paused or stepped through manually.

Button names are repeated literally in the instructions. For example, Take to pad is the action in both the editor and the tutorial. Keyboard reminders belong beside the relevant instruction or in the guide; the flight view needs enough clear space to see the rocket and nearby ground.

`src/scenes/MainMenu.css` contains the menu layout and shared menu dialogs. `src/ui/Tutorial.css` covers the walkthrough and guide. Common colors and controls are in `styles/tokens.css` and `styles/components.css`. The HUD is built in `src/flight/HUD.ts`, and the map has its own `src/ui/OrbitMap.css`.

The useful layout checks are a desktop window, a narrow phone view and a short landscape view. A dialog can fit on a phone in portrait and still hide its last button in landscape. Keyboard focus and the system's reduced-motion setting also need to survive a styling change.
