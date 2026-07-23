import { Renderer } from './Renderer';
import { SceneManager } from './SceneManager';
import { MainMenuScene } from '../scenes/MainMenuScene';
import { VABScene } from '../scenes/VABScene';
import { FlightScene } from '../scenes/FlightScene';
import { System } from '../physics/System';
import { Mercury } from '../planets/Mercury';
import { Venus } from '../planets/Venus';
import { Pluto } from '../planets/Pluto';
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
import { PART_SCALE, assetUrl } from '../config/constants';
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
    const sunMass = 2e26;
    this.system.add(new Sun([0, 0, 0], [0, 0, 0], sunMass));
    // Planets at game scale
    this.system.add(new Mercury([2e8, 0, 2e7], [0, 0, 38000]));
    this.system.add(new Venus([6e8, 0, -6e7], [0, 0, 21000]));
    const earthPos: [number, number, number] = [1e9, 0, 0];
    const earthVel: [number, number, number] = [0, 0, 17000];
    this.system.add(new Earth(earthPos, earthVel));
    const moonPos: [number, number, number] = [earthPos[0], 0, earthPos[2] + 6e7];
    const moonVel: [number, number, number] = [0, 0, earthVel[2] + 900];
    this.system.add(new Moon(moonPos, moonVel));
    this.system.add(new Mars([1.5e9, 1e9, -4e8], [0, 0, 13500]));
    this.system.add(new Jupiter([3e9, -6e8, 2e8], [0, 0, 9000]));
    this.system.add(new Saturn([5.6e9, 4e8, -4e8], [0, 0, 6800]));
    this.system.add(new Uranus([1.1e10, -2e8, 6e8], [0, 0, 4800]));
    this.system.add(new Neptune([1.7e10, 8e8, 0], [0, 0, 3800]));
    this.system.add(new Pluto([2.3e10, 1.6e9, -1e9], [0, 0, 2000]));

    document.getElementById('app')!.appendChild(this.renderer.domElement);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.sceneMgr.camera.aspect = window.innerWidth / window.innerHeight;
      this.sceneMgr.camera.updateProjectionMatrix();
    });
    this.achievements.onUnlock((id) => toast.show(`Achievement: ${id}`));
  }

  private async preloadModels(): Promise<void> {
    const { loadGLTF } = await import('../parts/PartBuilder');
    const models = ['/models/agena.glb','/models/saturn_v.glb','/models/apollo_soyuz.glb','/models/ares_1.glb','/models/apollo_lunar_module.glb','/models/atlas_6.glb','/models/atlas_9.glb','/models/crawler.glb'];
    await Promise.allSettled(models.map(async url => {
      try {
        const result = await loadGLTF(url, 1.0);
        console.log('Model loaded:', url, result ? 'OK' : 'NULL');
      } catch(e) {
        console.error('Model failed:', url, e);
      }
    }));
    const texLoader = new THREE.TextureLoader();
    texLoader.load(assetUrl('/textures/earth_daymap.jpg'), () => {}, undefined, () => {});
  }

  async start(): Promise<void> { 
    await this.preloadModels();
    this.showMainMenu();
    this.loop();
  }

  private showMainMenu(): void {
    this.unmountCurrent();
    this.mainMenu = new MainMenuScene(() => this.showFlight(), () => this.showVab(), () => this.showSettings());
    this.mainMenu.mount();
  }

  private showSettings(): void { const panel = new SettingsPanel(loadSettings(), () => panel.unmount()); panel.mount(); }

  private showVab(): void {
    this.unmountCurrent();
    this.vab = new VABScene((assembly: Assembly) => { const r = new Rocket(assembly); this.showFlight(r); });
    this.vab.mount();
    this.sceneMgr.scene.add(this.vab.scene);
  }

  private async showFlight(rocket?: Rocket): Promise<void> {
    this.unmountCurrent();
    const a = rocket?.assembly ?? new Assembly();
    if (!rocket) {
      const saturnPart = findPart('saturn_v');
      if (saturnPart) {
        a.addRoot({ part: saturnPart, position: [0, 0.15, 0], rotation: 0, children: [] });
        a.addRoot({ part: findPart('tank_xl_lfo')!, position: [0, 0.02, 0], rotation: 0, children: [] });
        a.addRoot({ part: findPart('engine_mammoth')!, position: [0, -0.08, 0], rotation: 0, children: [] });
      } else {
        // Fallback to procedural rocket
        const p = PART_SCALE;
        const capH = 1.1 * p, tankH = 0.7 * p, engH = 0.7 * p;
        const gap = 0.005;
        const engY = 0;
        const tankY = engY + engH/2 + gap + tankH/2;
        const capY = tankY + tankH/2 + gap + capH/2;
        a.addRoot({ part: findPart('capsule_mk1')!, position: [0, capY, 0], rotation: 0, children: [] });
        a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, tankY, 0], rotation: 0, children: [] });
        a.addRoot({ part: findPart('engine_ant')!, position: [0, engY, 0], rotation: 0, children: [] });
      }
    }
    const r = new Rocket(a);
    this.flight = new FlightScene(this.renderer, this.sceneMgr, this.system, r, this.achievements);
    this.flight.onCrashAction = (action) => { if (action === 'menu') this.showMainMenu(); else this.showFlight(rocket); };
  }

  private unmountCurrent(): void {
    this.mainMenu?.unmount(); this.mainMenu = undefined;
    if (this.vab) { this.vab.unmount(); this.sceneMgr.scene.remove(this.vab.scene); this.vab = undefined; }
    this.flight?.dispose(); this.flight = undefined;
  }

  private loop(): void {
    const dt = 1 / 60;
    this.sceneMgr.update(dt);
    this.flight?.update(dt);
    if (this.vab) this.renderer.three.render(this.vab.scene, this.vab.camera);
    else this.renderer.three.render(this.sceneMgr.scene, this.sceneMgr.camera);
    requestAnimationFrame(() => this.loop());
  }
}
