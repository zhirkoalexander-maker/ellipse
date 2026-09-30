# Interface

The title screen uses a screenshot of the starter rocket, with flight choices on the left and secondary links below. Keep it static: the menu should not need another 3D scene running in the background.

Menus, the guide, missions and settings share slate panels, light text and an amber primary button. Green and red indicate flight state. Ordinary controls do not need their own colors.

Use the same action names in buttons and instructions. Keep keyboard shortcuts in the guide and tooltips. Instructions should fit in a few steps; extra detail goes in the guide’s expandable sections.

Check narrow and short windows. The player must always be able to reach Close, Back or Cancel.

Menu layout: `src/scenes/MainMenu.css`. Flight controls: `src/flight/HUD.ts`. Map: `src/ui/OrbitMap.css`.
