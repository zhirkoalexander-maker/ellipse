// Stub — full implementation lands in Task 26.
// Game.ts references this for the scene router. Methods are no-ops until
// thrust / camera / HUD wiring is added in Task 26.
import type { Renderer } from '../core/Renderer';
import type { SceneManager } from '../core/SceneManager';
import type { System } from '../physics/System';
import type { Rocket } from '../rocket/Rocket';
import type { Achievements } from '../core/Achievements';

export class FlightScene {
  constructor(
    _renderer: Renderer,
    _sceneMgr: SceneManager,
    _system: System,
    _rocket: Rocket,
    _achievements: Achievements
  ) {}

  update(_dt: number): void {}

  dispose(): void {}
}
