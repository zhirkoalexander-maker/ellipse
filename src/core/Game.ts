import { Renderer } from './Renderer';
import { SceneManager } from './SceneManager';
import { MainMenuScene } from '../scenes/MainMenuScene';
import { VABScene } from '../scenes/VABScene';
import { FlightScene } from '../scenes/FlightScene';
import { System } from '../physics/System';
import { Body } from '../physics/Body';
import { Earth } from '../planets/Earth';
import { Moon } from '../planets/Moon';
import { Venus } from '../planets/Venus';
import { Mars } from '../planets/Mars';
import { Mercury } from '../planets/Mercury';
import { Sun } from '../planets/Sun';
import { Rocket } from '../rocket/Rocket';
import { Assembly } from '../rocket/Assembly';
import { findPart } from '../parts/PartCatalog';
import { Achievements } from './Achievements';
import { toast } from '../ui/Toast';
import { loadSettings, SettingsPanel } from '../ui/Settings';
import { PART_SCALE } from '../config/constants';
import { loadAllTextures } from '../effects/TextureLoader';
import * as THREE from 'three';

export class Game {
  renderer: Renderer;
  sceneMgr: SceneManager;
  system: System;
  achievements: Achievements;
  private mainMenu?: MainMenuScene;
  private vab?: VABScene;
  private flight?: FlightScene;

  constructor() {
    loadAllTextures();
    this.renderer = new Renderer();
    this.sceneMgr = new SceneManager();
    this.achievements = new Achievements();

    this.system = new System();
    // Sun at center with reduced mass for compressed system
    const sunMass = 2e26;
    this.system.add(new Sun([0, 0, 0], [0, 0, 0], sunMass));
    // Earth orbits Sun at 1e8 m
    this.system.add(new Earth([1e8, 0, 0], [0, 0, 11550]));
    // Moon orbits Earth +1e7 m further out
    this.system.add(new Moon([1.1e8, 0, 0], [0, 0, 17850]));
    // Venus at ~8.5e7 m from Sun
    this.system.add(new Venus([6e7, 0, 6e7], [-8870, 0, 8870]));
    // Mars at ~1.52e8 m from Sun
    this.system.add(new Mars([-1.4e8, 0, 6e7], [3690, 0, 8600]));
    // Mercury at 4e7 m from Sun (innermost)
    this.system.add(new Mercury([4e7, 0, 0], [0, 0, 18270]));

    document.getElementById('app')!.appendChild(this.renderer.domElement);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.sceneMgr.camera.aspect = window.innerWidth / window.innerHeight;
      this.sceneMgr.camera.updateProjectionMatrix();
    });

    this.achievements.onUnlock((id) => toast.show(`Achievement: ${id}`));
  }

  start(): void {
    this.showMainMenu();
    this.loop();
  }

  private showMainMenu(): void {
    this.unmountCurrent();
    this.mainMenu = new MainMenuScene(
      () => this.showFlight(),
      () => this.showVab(),
      () => this.showSettings()
    );
    this.mainMenu.mount();
  }

  private showSettings(): void {
    const panel = new SettingsPanel(loadSettings(), () => panel.unmount());
    panel.mount();
  }

  private showVab(): void {
    this.unmountCurrent();
    this.vab = new VABScene((assembly: Assembly) => {
      const r = new Rocket(assembly);
      this.showFlight(r);
    });
    this.vab.mount();
    this.sceneMgr.scene.add(this.vab.scene);
  }

  private showFlight(rocket?: Rocket): void {
    this.unmountCurrent();
    const a = rocket?.assembly ?? new Assembly();
    if (!rocket) {
      const p = PART_SCALE;
      a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6 * p, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.8 * p, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    }
    const r = new Rocket(a);
    this.flight = new FlightScene(this.renderer, this.sceneMgr, this.system, r, this.achievements);
  }

  private unmountCurrent(): void {
    this.mainMenu?.unmount();
    this.mainMenu = undefined;
    if (this.vab) {
      this.vab.unmount();
      this.sceneMgr.scene.remove(this.vab.scene);
      this.vab = undefined;
    }
    this.flight?.dispose();
    this.flight = undefined;
  }

  private loop(): void {
    const dt = 1 / 60;
    this.sceneMgr.update(dt);
    this.flight?.update(dt);
    this.renderer.three.render(this.sceneMgr.scene, this.sceneMgr.camera);
    requestAnimationFrame(() => this.loop());
  }
}
