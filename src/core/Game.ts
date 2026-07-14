import { Renderer } from './Renderer';
import { SceneManager } from './SceneManager';
import { MainMenuScene } from '../scenes/MainMenuScene';
import { VABScene } from '../scenes/VABScene';
import { FlightScene } from '../scenes/FlightScene';
import { System } from '../physics/System';
import { Mercury } from '../planets/Mercury';
import { Venus } from '../planets/Venus';
import { Earth } from '../planets/Earth';
import { Moon } from '../planets/Moon';
import { Mars } from '../planets/Mars';
import { Jupiter } from '../planets/Jupiter';
import { Saturn } from '../planets/Saturn';
import { Uranus } from '../planets/Uranus';
import { Neptune } from '../planets/Neptune';
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
    this.system.add(new Mercury([1.5e8, 0, 2e7], [0, 0, 47400]));
    // Venus at 3e8 m
    this.system.add(new Venus([3e8, 0, -3e7], [0, 0, 30000]));
    // Earth at 5e8 m (1 AU scaled)
    const earthPos: [number, number, number] = [5e8, 0, 0];
    const earthVel: [number, number, number] = [0, 0, 24000];
    this.system.add(new Earth(earthPos, earthVel));
    // Moon at 3.844e8 m from Earth (real Moon distance), orbit inclined
    const moonPos: [number, number, number] = [earthPos[0], 0, earthPos[2] + 3.844e8];
    const moonVel: [number, number, number] = [0, 0, earthVel[2] + 1020];
    this.system.add(new Moon(moonPos, moonVel));
    // Mars at 7.5e8 m with offset so it's not aligned with Earth
    this.system.add(new Mars([7.5e8, 5e8, -2e8], [0, 0, 19500]));
    // Jupiter at 1.5e9 m
    this.system.add(new Jupiter([1.5e9, -3e8, 1e8], [0, 0, 13000]));
    // Saturn at 2.8e9 m
    this.system.add(new Saturn([2.8e9, 2e8, -2e8], [0, 0, 9700]));
    // Uranus at 5.5e9 m
    this.system.add(new Uranus([5.5e9, -1e8, 3e8], [0, 0, 6800]));
    // Neptune at 8.5e9 m
    this.system.add(new Neptune([8.5e9, 4e8, 0], [0, 0, 5400]));

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
    const models = [
      '/models/agena.glb',
      '/models/saturn_v.glb',
      '/models/apollo_soyuz.glb',
      '/models/ares_1.glb',
      '/models/apollo_lunar_module.glb',
      '/models/atlas_6.glb',
      '/models/atlas_9.glb',
      '/models/crawler.glb',
    ];
    await Promise.allSettled(models.map(url => loadGLTF(url, 1.0)));
    console.log('GLTF models preloaded:', models.length);
  }

  start(): void {
    // Skip main menu — launch directly into flight
    this.showFlight();
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

  private async showFlight(rocket?: Rocket): Promise<void> {
    this.unmountCurrent();
    const a = rocket?.assembly ?? new Assembly();
    if (!rocket) {
      const p = PART_SCALE;
      a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 1.6 * p, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, 0.8 * p, 0], rotation: 0, children: [] });
      a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    }
    const r = new Rocket(a);
    this.flight = new FlightScene(this.renderer, this.sceneMgr, this.system, r, this.achievements);
    this.flight.onCrashAction = (action) => {
      if (action === 'menu') {
        this.showMainMenu();
      } else {
        this.showFlight(rocket);
      }
    };
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
