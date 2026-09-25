# Interface notes

Keep flight controls short and in English. Use the same names in the guide, menu and buttons. Explain an action where the player chooses it; avoid permanent keyboard hints over the flight view.

The map uses pale paths for the current trajectory, yellow for a burn preview and blue for the selected destination. The system overview is schematic; route and orbit views use simulation positions.

Menus use the existing dark panels and system fonts. Dialogs must fit a narrow phone screen, scroll when needed and remain closable with touch or keyboard. Opening a dialog must not pass its input to the rocket.

The main flight layout is in `src/flight/HUD.ts`; map styles are in `src/ui/OrbitMap.css`.
