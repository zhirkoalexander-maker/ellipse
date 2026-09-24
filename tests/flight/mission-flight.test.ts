import { afterEach, describe, expect, it } from 'vitest';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Renderer } from '../../src/core/Renderer';
import { SceneManager } from '../../src/core/SceneManager';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';
import { Mars } from '../../src/planets/Mars';
import { buildDefaultRocket, buildSystem } from './fixtures';
import { clearFlightSave, loadFlightState } from '../../src/storage/SaveLoad';
import * as THREE from 'three';
import { getReferenceBody } from '../../src/physics/SoiResolver';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, ROCKET_VISUAL_SCALE } from '../../src/config/constants';

let flight: FlightScene | undefined;
function create() {
  const system = buildSystem();
  system.add(new Mars([1.5e9, 1e9, -4e8], [0, 0, 13500]));
  flight = new FlightScene(new Renderer(), new SceneManager(), system, buildDefaultRocket(), new Achievements(), new Missions());
  return flight as any;
}
afterEach(() => { flight?.dispose(); flight = undefined; clearFlightSave(); });

describe('automatic flight and landing', () => {
  it('starts a Moon mission from the HUD and actually lifts off with fuel consumption', () => {
    const f = create(); const before = f.rocket.totalFuelMass();
    f.hud.onAction('autopilot:moon');
    expect(f.autopilotActive).toBe(true);
    for (let i = 0; i < 300; i++) f.update(1 / 30);
    expect(f.crashed).toBe(false);
    expect(f.grounded).toBe(false);
    expect(f.rocket.totalFuelMass()).toBeLessThan(before);
  });

  it.each(['moon', 'mars'])('flies from the Earth pad to a real touchdown on %s', target => {
    const f = create(); const before = f.rocket.totalFuelMass();
    f.hud.onAction('autopilot:' + target);
    expect(f.autopilotActive).toBe(true);
    let fastFrames = 0;
    for (let i = 0; i < 30000 && !f.crashed && f.autopilotActive; i++) {
      const beforeAttitude = f.rocketGroup.quaternion.clone();
      f.update(1 / 30);
      if (f.autopilotActive && !f.grounded) {
        expect(beforeAttitude.angleTo(f.rocketGroup.quaternion)).toBeLessThanOrEqual(1.4 / 30 + 1e-6);
      }
      if (f.autopilotActive && f.missionRate >= 100) {
        const body = f.autopilotSurfaceBody() ?? getReferenceBody(f.state.position, f.system);
        const up = new THREE.Vector3(...f.state.position).sub(new THREE.Vector3(...body.position)).normalize();
        const look = new THREE.Vector3(...f.state.position).multiplyScalar(ORBIT_SCALE * VISUAL_PLANET_MULT)
          .addScaledVector(up, (-f.rocketBottomY + (f.rocketTopY + f.rocketBottomY) * 0.5) * ROCKET_VISUAL_SCALE);
        expect(f.sceneMgr.camera.position.distanceTo(look)).toBeCloseTo(f.chase.dist, 3);
        fastFrames++;
      }
    }
    expect(fastFrames).toBeGreaterThan(0);
    expect({ crashed: f.crashed, phase: f.autopilotPhase, status: f.landingStatus }).toMatchObject({ crashed: false, phase: 'arrived' });
    expect(f.grounded).toBe(true);
    const body = f.system.bodyByName(target);
    const distance = Math.hypot(...f.state.position.map((x: number, i: number) => x - body.position[i]));
    expect(distance - body.getSurfaceRadiusAt(f.state.position)).toBeCloseTo(FlightScene.SPAWN_OFFSET_M, 1);
    expect(f.rocket.totalFuelMass()).toBeLessThan(before);
    expect(f.rocket.totalFuelMass()).toBeGreaterThan(0);
    expect(f.state.throttle).toBe(0);
  }, 120000);

  it('cancels automatic flight before accepting manual steering', () => {
    const f = create(); f.hud.onAction('autopilot:moon');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'w' }));
    f.update(1 / 60);
    window.dispatchEvent(new KeyboardEvent('keyup', { key: 'w' }));
    expect(f.autopilotActive).toBe(false);
    expect(f.timeWarp).toBe(1);
  });

  it('keeps the displayed attitude continuous when autopilot is cancelled', () => {
    const f = create();
    f.hud.onAction('autopilot:moon');
    for (let i = 0; i < 300; i++) f.update(1 / 30);
    expect(f.grounded).toBe(false);
    const before = f.rocketGroup.quaternion.clone();
    f.rocketQuat.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), 0.8));
    f.abortAutopilot('Manual control');
    f.update(1 / 30);
    expect(before.angleTo(f.rocketGroup.quaternion)).toBeLessThanOrEqual(1.4 / 30 + 1e-6);
  });

  it('persists and resumes an in-progress automatic mission', () => {
    const f = create();
    f.hud.onAction('autopilot:moon');
    for (let i = 0; i < 300 && (f as any).grounded; i++) f.update(1 / 30);
    (f as any).persistFlight();
    const save = loadFlightState();
    expect(save?.version).toBe(3);
    expect(save?.mission).toMatchObject({ target: 'moon', departure: 'earth', autoWarp: true });
    f.dispose(); flight = undefined;
    const resumed = new FlightScene(new Renderer(), new SceneManager(), buildSystem(), buildDefaultRocket(), new Achievements(), new Missions(), save!);
    flight = resumed;
    expect((resumed as any).autopilotActive).toBe(true);
    expect((resumed as any).missionGuidance.target.name).toBe('moon');
    resumed.update(1 / 30);
    expect((resumed as any).crashed).toBe(false);
  });

  it('refuses empty tanks and non-solid landing targets', () => {
    const f = create();
    f.hud.onAction('autopilot:jupiter');
    expect(f.autopilotActive).toBe(false);
    for (const tank of f.rocket.fuelTanks) tank.remaining = 0;
    f.hud.onAction('autopilot:moon');
    expect(f.autopilotActive).toBe(false);
    expect(f.state.throttle).toBe(0);
  });
});
