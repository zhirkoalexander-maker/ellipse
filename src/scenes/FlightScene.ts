import * as THREE from 'three';
import type { Renderer } from '../core/Renderer';
import type { SceneManager } from '../core/SceneManager';
import type { System } from '../physics/System';
import type { Rocket } from '../rocket/Rocket';
import type { Achievements } from '../core/Achievements';
import { FlightState } from '../flight/FlightState';
import { ChaseCamera } from '../flight/ChaseCamera';
import { Controls } from '../flight/Controls';
import { HUD } from '../flight/HUD';
import { applyThrust } from '../flight/Thrust';
import { FIXED_DT } from '../config/constants';
import { toast } from '../ui/Toast';

export class FlightScene {
  private renderer: Renderer;
  private sceneMgr: SceneManager;
  private system: System;
  private achievements: Achievements;
  private state: FlightState;
  private rocket: Rocket;
  private rocketGroup: THREE.Group;
  private chase: ChaseCamera;
  private controls: Controls;
  private hud: HUD;
  private launched = false;

  constructor(renderer: Renderer, sceneMgr: SceneManager, system: System, rocket: Rocket, achievements: Achievements) {
    this.renderer = renderer;
    this.sceneMgr = sceneMgr;
    this.system = system;
    this.achievements = achievements;
    this.rocket = rocket;
    this.rocket.fuelMass = (rocket.assembly.totalMassWithFuel() - rocket.assembly.totalMass());

    // Spawn rocket just above Earth's surface
    const earth = system.bodyByName('earth') as any;
    const earthR = earth?.radius ?? 6.371e6;
    this.state = new FlightState(rocket, system, [earthR + 100, 0, 0], [0, 0, 0]);

    // Build rocket mesh
    this.rocketGroup = rocket.assembly.toMesh();
    this.updateRocketMesh();
    sceneMgr.scene.add(this.rocketGroup);

    // Add Earth and Moon meshes
    const earthMesh = (earth as any).mesh;
    const moon = system.bodyByName('moon');
    if (earthMesh) sceneMgr.scene.add(earthMesh);
    if (moon) sceneMgr.scene.add((moon as any).mesh);

    this.chase = new ChaseCamera(sceneMgr.camera);
    this.controls = new Controls(this.state);
    this.hud = new HUD();
    this.hud.mount();

    this.achievements.unlock('first_launch');
    toast.show('You are at the launchpad. Press W to throttle up.');
  }

  update(_dt: number): void {
    // Update controls
    this.controls.update(_dt);

    // Apply thrust
    if (this.state.throttle > 0) {
      applyThrust(this.state, _dt);
      if (!this.launched) { this.launched = true; this.achievements.unlock('reach_space'); }
    }

    // Propagate physics
    this.system.propagate(_dt, FIXED_DT);

    // Sync rocket position from flight state
    this.rocketGroup.position.set(this.state.position[0], this.state.position[1], this.state.position[2]);

    // Update camera
    this.chase.follow(this.state, _dt);

    // Update HUD
    this.hud.update(this.state, this.system);
  }

  private updateRocketMesh(): void {
    const earth = this.system.bodyByName('earth') as any;
    if (earth) this.rocketGroup.position.set(earth.radius + 100, 0, 0);
  }

  dispose(): void {
    this.sceneMgr.scene.remove(this.rocketGroup);
    this.hud.unmount();
  }
}
