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
    // Scaled solar system for gameplay (distances ×1e-3 of real, fits in camera far plane)
    // Mercury at 1.5e8 m
    this.system.add(new Mercury([1.5e8, 0, 0], [0, 0, 42000]));
    // Venus at 3e8 m
    this.system.add(new Venus([3e8, 0, 0], [0, 0, 30000]));
    // Earth at 5e8 m (1 AU scaled)
    const earthPos: [number, number, number] = [5e8, 0, 0];
    const earthVel: [number, number, number] = [0, 0, 24000];
    this.system.add(new Earth(earthPos, earthVel));
    // Moon orbits Earth at 3.84e8 m (real distance)
    const moonPos: [number, number, number] = [earthPos[0] + 3.844e8, 0, 0];
    const moonVel: [number, number, number] = [0, 0, earthVel[2] + 1020];
    this.system.add(new Moon(moonPos, moonVel));
    // Mars at 7.5e8 m
    this.system.add(new Mars([7.5e8, 0, 0], [0, 0, 19500]));
    // Jupiter at 1.5e9 m (optional, far)
    // this.system.add(new Jupiter([1.5e9, 0, 0], [0, 0, 13000]));

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
    this.renderer.three.render(this.sceneMgr.scene, this.sceneMgr.camera);
    requestAnimationFrame(() => this.loop());
  }
}
