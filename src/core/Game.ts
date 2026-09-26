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
import { Moon, lunarOrbitVelocity } from '../planets/Moon';
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
import { ACHIEVEMENTS } from './AchievementData';
import { Missions } from './Missions';
import { toast } from '../ui/Toast';
import { loadSettings, SettingsPanel } from '../ui/Settings';
import { PART_SCALE, assetUrl } from '../config/constants';
import { loadAllTextures } from '../effects/TextureLoader';
import { loadLastAssembly, hasLastAssembly, loadFlightState, hasFlightSave, clearFlightSave, serializeAssembly, deserializeAssembly, type FlightSave } from '../storage/SaveLoad';
import { migrateLegacyLunarOrbit } from '../storage/Migration';
import * as THREE from 'three';

export class Game {
  renderer: Renderer;
  sceneMgr: SceneManager;
  system: System;
  achievements: Achievements;
  missions: Missions;
  private mainMenu?: MainMenuScene;
  private vab?: VABScene;
  private flight?: FlightScene;

  constructor() {
    loadAllTextures();
    this.renderer = new Renderer();
    this.sceneMgr = new SceneManager();
    this.achievements = new Achievements();
    this.missions = new Missions();

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
    const moonVel = lunarOrbitVelocity(this.system.bodyByName('earth')!.mass, earthVel, 6e7);
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
    this.achievements.onUnlock((id) => {
      const def = ACHIEVEMENTS.find(a => a.id === id);
      const name = def?.name ?? id;
      // Slide-in achievement card from right
      const card = document.createElement('div');
      card.className = 'achievement-pop';
      card.style.cssText = 'position:fixed;top:80px;right:16px;z-index:310;background:rgba(8,10,24,0.92);border:1px solid var(--accent-gold);border-radius:8px;padding:10px 14px;box-shadow:var(--shadow-glow-gold);font-family:system-ui,sans-serif;max-width:240px;pointer-events:none;';
      card.innerHTML = `<div style="color:var(--accent-gold);font-size:9px;letter-spacing:0.15em;margin-bottom:2px;">★ ACHIEVEMENT</div><div style="color:var(--text-primary);font-size:13px;font-weight:600;">${name}</div>`;
      document.body.appendChild(card);
      setTimeout(() => {
        card.style.transition = 'opacity 300ms ease-in, transform 300ms ease-in';
        card.style.opacity = '0';
        card.style.transform = 'translateX(40px)';
        setTimeout(() => card.remove(), 320);
      }, 3200);
    });
  }

  async start(): Promise<void> {
    // Loading overlay with animated spinner
    const loader = document.createElement('div');
    loader.style.cssText = 'position:fixed;inset:0;z-index:9998;background:var(--space-deep);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;font-family:system-ui,sans-serif;';
    loader.innerHTML = `
      <div style="width:46px;height:46px;border:2px solid rgba(234,205,158,0.2);border-top-color:var(--accent-gold);border-radius:50%;animation:spin 0.9s linear infinite;"></div>
      <div style="color:var(--accent-gold);font-size:13px;letter-spacing:0.2em;">LOADING</div>
      <div id="load-progress" style="color:rgba(244,245,242,0.4);font-size:10px;letter-spacing:0.1em;">preparing assets</div>
    `;
    // Spin keyframe injected inline via a style tag (so it survives even without animations.css)
    const style = document.createElement('style');
    style.textContent = '@keyframes spin{to{transform:rotate(360deg);}}';
    document.head.appendChild(style);
    document.body.appendChild(loader);
    // Brief fade-out
    loader.style.transition = 'opacity 320ms ease-out';
    requestAnimationFrame(() => { loader.style.opacity = '0'; });
    setTimeout(() => { loader.remove(); style.remove(); }, 360);
    this.showMainMenu();
    this.loop();
  }

  /** Part ids referenced by a serialized assembly that no longer exist in the catalog. */
  private collectUnknownPartIds(assembly: any[]): string[] {
    const unknown: string[] = [];
    const walk = (nodes: any[]) => {
      for (const n of nodes) {
        if (!findPart(n.partId)) unknown.push(String(n.partId));
        if (Array.isArray(n.children)) walk(n.children);
      }
    };
    walk(assembly ?? []);
    return [...new Set(unknown)];
  }

  private showMainMenu(): void {
    this.transitionTo(() => {
      this.unmountCurrent();
      this.sceneMgr.scene.background = new THREE.Color(0x000000);
      // CONTINUE: resume the saved flight where it was left off (position,
      // velocity, fuel, planets) — falls back to last build on the pad.
      const onContinue = (hasFlightSave() || hasLastAssembly()) ? () => {
        const loadedSave = loadFlightState();
        const save = loadedSave ? migrateLegacyLunarOrbit(loadedSave, this.system) : null;
        if (save) {
          // Old saves may reference parts that no longer exist (catalog
          // changes) — deserializeAssembly SILENTLY drops them, which once
          // removed every decoupler from a resumed rocket ("weight doesn't
          // change when staging"). Detect and warn loudly instead.
          const unknown = this.collectUnknownPartIds(save.assembly);
          if (unknown.length > 0) {
            toast.show(`Saved flight has unknown parts (${unknown.join(', ')}) — old save, starting fresh`, 5000);
            clearFlightSave();
            this.showFlight();
            return;
          }
          // Restore planetary state — planets reset to epoch each session,
          // which would otherwise strand the rocket in empty space.
          for (const b of save.bodies) {
            const body = this.system.bodies.find(x => x.name === b.name);
            if (body) {
              body.position = [...b.position] as [number, number, number];
              body.velocity = [...b.velocity] as [number, number, number];
              (body as any).syncMesh?.();
            }
          }
          const a = deserializeAssembly(save.assembly);
          if (a) { const r = new Rocket(a); this.showFlight(r, save); return; }
        }
        const a = loadLastAssembly();
        if (a) { const r = new Rocket(a); this.showFlight(r); }
        else this.showFlight();
      } : null;
      this.mainMenu = new MainMenuScene(() => this.showFlight(), () => this.showVab(), () => this.showSettings(), onContinue ?? undefined, this.missions);
      this.mainMenu.mount();
    });
  }

  private showSettings(): void { const panel = new SettingsPanel(loadSettings(), () => panel.unmount()); panel.mount(); }

  private showVab(): void {
    this.transitionTo(() => {
      this.unmountCurrent();
      this.vab = new VABScene((assembly: Assembly) => { const r = new Rocket(assembly); this.showFlight(r); }, () => this.showMainMenu());
      this.vab.mount();
      this.sceneMgr.scene.add(this.vab.scene);
    });
  }

  private async showFlight(rocket?: Rocket, save?: FlightSave): Promise<void> {
    this.transitionTo(() => {
      this.unmountCurrent();
      // A fresh launch invalidates the previous resume point
      if (!save) clearFlightSave();
      const a = rocket?.assembly ?? new Assembly();
if (!rocket) {
        // Ant engine + 2x S tank + MK1 capsule (classic small rocket)
        const p = PART_SCALE;
        const H = { S: 1.4 * p, M: 2.0 * p, L: 2.8 * p, XL: 3.6 * p };
        const gap = 0;

        let y = -H.S / 2; // bottom face of the Ant engine (S size)
        const stack = (h: number) => { const c = y + h / 2; y += h + gap; return c; };

        const engY = stack(H.S);       // engine_ant (S)
        const tank1Y = stack(H.S);     // tank_s_lfo (S)
        const tank2Y = stack(H.S);     // tank_s_lfo (S)
        const capY = stack(H.M);       // capsule_mk1 (M)

        a.addRoot({ part: findPart('engine_ant')!, position: [0, engY, 0], rotation: 0, children: [] });
        a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, tank1Y, 0], rotation: 0, children: [] });
        a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, tank2Y, 0], rotation: 0, children: [] });
        a.addRoot({ part: findPart('capsule_mk1')!, position: [0, capY, 0], rotation: 0, children: [] });
      }
      // Keep an immutable launch blueprint: staging mutates the live assembly.
      const currentAssembly = serializeAssembly(a);
      const launchBlueprint = save?.launchAssembly ?? currentAssembly;
      const r = new Rocket(deserializeAssembly(currentAssembly)!);
      this.flight = new FlightScene(this.renderer, this.sceneMgr, this.system, r, this.achievements, this.missions, save);
      this.flight.onCrashAction = (action) => { if (action === 'menu') this.showMainMenu(); else this.showFlight(new Rocket(deserializeAssembly(launchBlueprint)!)); };
    });
  }

  /** Fade-to-black scene transition: fades in, swaps scene at peak, fades out. */
  private transitionTo(swap: () => void): void {
    const fade = document.createElement('div');
    fade.className = 'scene-fade fade-in';
    document.body.appendChild(fade);
    setTimeout(() => {
      swap();
      fade.classList.remove('fade-in');
      fade.classList.add('fade-out');
      setTimeout(() => fade.remove(), 640);
    }, 280);
  }

  private unmountCurrent(): void {
    this.mainMenu?.unmount(); this.mainMenu = undefined;
    if (this.vab) { this.vab.unmount(); this.sceneMgr.scene.remove(this.vab.scene); this.vab = undefined; }
    this.flight?.dispose(); this.flight = undefined;
  }

  private lastFrameTime = performance.now();

  private loop(): void {
    // MEASURED frame time, not a hardcoded 1/60 — the old fixed dt made the
    // whole game run slow-motion below 60fps (weak GPU, background tab,
    // software rendering): throttle crawled, countdowns stretched, rockets
    // "wouldn't lift off". Clamped to avoid huge jumps after tab switches.
    const now = performance.now();
    const dt = Math.min(Math.max((now - this.lastFrameTime) / 1000, 0.0005), 0.05);
    this.lastFrameTime = now;
    this.sceneMgr.update(dt);
    this.flight?.update(dt);
    if (this.vab) this.renderer.three.render(this.vab.scene, this.vab.camera);
    else if (this.flight?.flightViewVisible !== false) this.renderer.three.render(this.sceneMgr.scene, this.sceneMgr.camera);
    requestAnimationFrame(() => this.loop());
  }
}
