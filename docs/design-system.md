# Interface

The title screen uses a still of the starter rocket. Keep it static: the menu should not need another 3D scene running in the background.

Menus and dialogs share dark grey panels, light text and a tan primary button. Green, amber and red indicate flight state or a warning. Ordinary controls do not need their own colors.

Use the same action names in buttons and instructions. Keep keyboard shortcuts in the guide and tooltips. Instructions should fit in a few steps; extra detail goes in the guide’s expandable sections.

Check narrow and short windows. The player must always be able to reach Close, Back or Cancel.

Menu layout: `src/scenes/MainMenu.css`. Flight controls: `src/flight/HUD.ts`. Map: `src/ui/OrbitMap.css`.
