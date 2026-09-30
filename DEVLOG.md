# Release notes

The current game uses 2.5.33 as its base. Later updates changed menu styling and tutorial images. The version number remains 2.5.33. The later 2.5.34 and 2.5.35 changes below are historical releases, not a list of features in the current build.

## 2.5.35 — before the rollback

The title screen used a frame from the game. The guide and walkthrough were shortened, dialogs were given matching styles, and the flight controls were made visually quieter. The unused app scaffold and design preview were removed. The README and GitHub description were updated too.

## 2.5.34 — before the rollback

Underpowered heavy rockets received extra thrust at full throttle so they could leave the pad, with slower ascent for larger builds. Fuel use, instruments and guidance used the same adjusted force. Camera zoom gained a much wider range and free-camera buttons; F still returned to the fitted view. Moderate sideways drift became a rough landing instead of an immediate crash.

## 2.5.33

The tutorial's illustrations were replaced with screenshots of the actual game, highlighted controls and closer views on phones. Playback and first-visit dismissal stayed in place. The menu and dialogs were simplified, the orbit logo and decorative status glow were removed, and the interface switched to local system fonts.

## 2.5.32

The guide was split into expandable sections for building, Moon trips, landing and controls, with instructions for the S/XL parts. Tutorial captions, mission names and flight messages were rewritten. Decorative button emoji and unnecessary uppercase labels were removed.

## 2.5.31

The new-build catalog was reduced to 16 parts in S and XL. Older builds still loaded with their original parts. Each size gained two tank capacities: 5/10 t for S and 250/500 t for XL. Within each pair, dimensions and dry mass stayed the same while capacity and bodywork differed. The starter rocket switched to an S capsule. Both new capsules included a parachute.

## 2.5.30

Side pair placement could now start with a central fuel tank. Previously the instructions could send the player back and forth between parts without allowing the first attachment. The next required step was shown beside the attachment selector.

## 2.5.29

Staging no longer changed the rocket's altitude or orbit, and upper-stage engines waited until their stage was exposed. Continue restored stability mode, landing assistance and automatic trips back to the same planet, including trip statistics. The attitude indicator's horizon and roll were corrected, and flight gained a Pause button.

Large side-separator discs were replaced with compact mounts. Upper-stage engines received a detachable interstage. Assembly text was enlarged and attachment controls were kept accessible in short windows.

## 2.5.28

Vehicle assembly gained side-mounted engine pairs, optional side decouplers, tank selection and Undo. Tapered joints were fitted to the adjoining parts, including the Mk1 capsule. Separated stages stayed intact, kept their pose and moved at the current simulation speed.

## 2.5.27

The game was renamed Challenger. Existing saves, designs and settings carried over from the Ellipse storage keys.

## 2.5.26

The map was reduced to its Planets view, keeping destination selection and course corrections there. The guide gained the English keyboard layout reminder.

## 2.5.25

The flight-path line was removed from the flight view while remaining on the map at that time. Manual warp could change the time rate without cancelling autopilot, and switching it off during a mission returned warp control to autopilot.

## 2.5.24

The flight instruments were reorganized and the delta-v readout was removed.

## 2.5.23

Terrain calculations with no effect on the launch pad, open water or distant regions were skipped. The resulting surface heights stayed the same.

## 2.5.22

Only live exhaust particles were drawn, without changing the plume simulation. Mission completion remained, but points and rewards were removed. A shared browser-based player count was added to the menu.

## 2.5.21

Imported vehicles and their startup downloads were removed. Quick start used the four-part starter rocket. Old assembly previews were released when rebuilding or leaving the editor, and static rocket decorations were batched without reducing mesh detail.

## 2.5.20

Terrain buffers and materials were reused as the rocket moved across a planet. Invisible surface-detail calculations and unchanged HUD text updates were skipped. The 3D view stopped drawing underneath the map while the flight simulation continued.

## 2.5.19

Three separated mountains were added inland from the launch site. The guide was shortened and a replayable animated tour was shown on the first visit.

## 2.5.18

The launch coast moved closer to the pad, with a narrower beach and darker water. Nearby hills became lower and broader, with finer grass and soil detail.

## 2.5.16

At this point the map opened on the rocket's flight path, with brighter lines and predicted impact markers. Surface warnings appeared earlier, with an estimated time to the ground and a more visible landing readout. Hull drag was reduced during atmospheric entry; parachute braking stayed the same. Automatic missions could cruise at up to 40× and slow down on approach.

## 2.5.15

Map zoom and view changes became smoother. Dragging redrew the map on every display frame.

## 2.5.14

Keyboard and touch input could take over from autopilot correctly, and conflicts between landing assist and course corrections were fixed. Restart kept the original rocket after saving and continuing a flight that had already separated stages.

Other fixes covered rocket names in the Load dialog, storage errors, double-click framing in assembly, the 7000 m/s mission reward and menu-overlay cleanup. Autosave and sound settings were made functional; settings that did nothing were removed. The guide and README were rewritten, and repeated source snapshots and outdated work plans were removed from the documentation.

## 2.5.13

Displayed distances and speeds were reduced while visual motion near the surface increased. Excessive atmospheric braking and manual-throttle takeover from landing assist were fixed. The launch coastline was rebuilt at sea level with a beach and visible inland ridges.

## 2.5.12

Distant planet discs became smaller. The map gained a system overview, direct destination selection and collapsible course controls.

## 2.5.11

Earth, the Moon, Mars and Mercury received detailed surface maps. Gas planets and rings were updated, and planets no longer showed through one another.

## 2.5.10

Upright touchdowns up to 90 m/s were allowed. Engine audio was disabled, and the map could fit the full lunar orbit.

Earlier changes are in the Git history.
