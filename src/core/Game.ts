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
import { loadGLTF } from '../parts/PartBuilder';

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
    // Half realistic distances (scaled by ORBIT_SCALE = 1e-9)
    // Mercury: 57.9e9 m → 28.95e1 m
    this.system.add(new Mercury([2.895e10, 0, 0], [0, 0, 47400]));
    // Venus: 108e9 m → 5.4e1 m
    this.system.add(new Venus([5.41e10, 0, 0], [0, 0, 35000]));
    // Earth: 149.6e9 m → 7.48e1 m
    const earthPos: [number, number, number] = [7.48e10, 0, 0];
    const earthVel: [number, number, number] = [0, 0, 29780];
    this.system.add(new Earth(earthPos, earthVel));
    // Moon: 3.844e8 m from Earth → 1.92e8 m
    const moonPos: [number, number, number] = [earthPos[0] + 1.922e8, 0, 0];
    const moonVel: [number, number, number] = [0, 0, earthVel[2] + 1020];
    this.system.add(new Moon(moonPos, moonVel));
    // Mars: 2.279e11 m → 1.139e2 m
    this.system.add(new Mars([1.1395e11, 0, 0], [0, 0, 24000]));
    // Jupiter at 7.78e11 m → 3.89e2 m (optional, far)
    // this.system.add(new Jupiter([3.89e11, 0, 0], [0, 0, 13000]));

    document.getElementById('app')!.appendChild(this.renderer.domElement);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.sceneMgr.camera.aspect = window.innerWidth / window.innerHeight;
      this.sceneMgr.camera.updateProjectionMatrix();
    });

    this.achievements.onUnlock((id) => toast.show(`Achievement: ${id}`));

    // Preload GLTF models
    this.preloadModels();
  }

  private async preloadModels(): Promise<void> {
    const { loadGLTF } = await import('../parts/PartBuilder');
    // Preload Agena Target Vehicle
    await loadGLTF('/models/agena.glb', 1.0);
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
    if (this.vab) {
      this.renderer.three.render(this.vab.scene, this.vab.camera);
    } else {
      this.renderer.three.render(this.sceneMgr.scene, this.sceneMgr.camera);
    }
    requestAnimationFrame(() => this.loop());
  }
}
