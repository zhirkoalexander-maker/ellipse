import { afterEach, describe, expect, it, vi } from 'vitest';
import * as THREE from 'three';
import { FlightScene } from '../../src/scenes/FlightScene';
import { Renderer } from '../../src/core/Renderer';
import { SceneManager } from '../../src/core/SceneManager';
import { Achievements } from '../../src/core/Achievements';
import { Missions } from '../../src/core/Missions';
import { Mars } from '../../src/planets/Mars';
import { loadFlightState } from '../../src/storage/SaveLoad';
import { buildDefaultRocket, buildSystem } from './fixtures';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, G } from '../../src/config/constants';
let flight: FlightScene | undefined;
function create() {
  const scene = new SceneManager();
  flight = new FlightScene(new Renderer(), scene, buildSystem(), buildDefaultRocket(), new Achievements(), new Missions());
  return { f: flight as any, scene };
}
afterEach(() => { flight?.dispose(); flight = undefined; document.body.replaceChildren(); vi.restoreAllMocks(); });

describe('flight reliability', () => {
  it('falls toward the Moon with engines off in its moving reference frame', () => {
    const { f } = create(); const body = f.system.bodyByName('moon');
    const radius = body.radius + 10000;
    f.state.position = [body.position[0], body.position[1] + radius, body.position[2]];
    f.state.velocity = [...body.velocity];
    f.state.throttle = 0; f.grounded = false; f.groundedDir = null; f._spawnProtectionTimer = 0;
    for (let i = 0; i < 60; i++) f.updateInner(1 / 60);
    expect(f.state.velocity[1] - body.velocity[1]).toBeLessThan(-2.9);
    expect(f.state.velocity[1] - body.velocity[1]).toBeGreaterThan(-3.2);
    expect(Math.hypot(...f.state.position.map((v: number, i: number) => v - body.position[i]))).toBeLessThan(radius - 1);
  });

  it('holds camera distance at 1000x coast across uneven frame times', () => {
    const { f, scene } = create(); const body = f.system.bodyByName('earth');
    const radius = body.radius + 1000000;
    f.state.position = [body.position[0], body.position[1] + radius, body.position[2]];
    f.state.velocity = [body.velocity[0] + Math.sqrt(G * body.mass / radius), body.velocity[1], body.velocity[2]];
    f.grounded = false; f.groundedDir = null; f._spawnProtectionTimer = 0;
    f.setPlayerWarp(f.warpLevels.indexOf(1000));
    for (const dt of [1 / 60, 1 / 30, 1 / 120, 1 / 45, 1 / 60]) {
      f.update(dt);
      const up = f.presentationUp;
      const look = new THREE.Vector3(...f.state.position).multiplyScalar(ORBIT_SCALE * VISUAL_PLANET_MULT)
        .addScaledVector(up, -f.rocketBottomY * 60)
        .add(new THREE.Vector3(0, (f.rocketTopY + f.rocketBottomY) * 30, 0).applyQuaternion(f.rocketGroup.quaternion));
      expect(scene.camera.position.distanceTo(look)).toBeCloseTo(f.chase.dist, 3);
      expect(f.timeWarp).toBe(1000);
      expect(f.crashed).toBe(false);
    }
  });
  it('reports physical apoapsis altitude for a circular orbit around a moving Earth', () => {
    const { f } = create(); const body = f.system.bodyByName('earth');
    const r = body.radius + 200000;
    f.state.position = [body.position[0] + r, body.position[1], body.position[2]];
    f.state.velocity = [body.velocity[0], body.velocity[1] + Math.sqrt(G * body.mass / r), body.velocity[2]];
    f.grounded = false; f.groundedDir = null; f._spawnProtectionTimer = 0;
    const orbit = vi.spyOn(f.hud, 'setOrbit');
    f.updateInner(1 / 60);
    const value = orbit.mock.calls.at(-1)![0] as any;
    expect(value.apoapsis).toBeGreaterThan(199000);
    expect(value.apoapsis).toBeLessThan(201000);
    expect(value.periapsis).toBeGreaterThan(199000);
  });

  it('releases rocket geometry on exit while retaining planet geometry for the next flight', () => {
    const { f } = create();
    let mesh: THREE.Mesh | undefined;
    f.structuralRoots[0].traverse((obj: THREE.Object3D) => { if (obj instanceof THREE.Mesh) mesh ??= obj; });
    const rocketRelease = vi.spyOn(mesh!.geometry, 'dispose');
    const planetRelease = vi.spyOn(f.system.bodyByName('earth').mesh.geometry, 'dispose');
    f.dispose(); flight = undefined;
    expect(rocketRelease).toHaveBeenCalledOnce();
    expect(planetRelease).not.toHaveBeenCalled();
  });

  it('does not award speed records on the pad', () => {
    const { f } = create();
    f.updateInner(1 / 60);
    f.updateInner(1 / 60);
    expect(f.relSpeed()).toBe(0);
    expect(f.maxSpeed).toBe(0);
  });
  it('discards a stage press made during pause', () => {
    const { f } = create();
    const stage = vi.spyOn(f, 'performStage');
    f.paused = true;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    f.updateInner(1 / 60);
    window.dispatchEvent(new KeyboardEvent('keyup', { key: ' ' }));
    f.paused = false;
    f.updateInner(1 / 60);
    expect(stage).not.toHaveBeenCalled();
  });
  it('overheating uses the recoverable crash screen', () => {
    const { f } = create();
    f.grounded = false; f._spawnProtectionTimer = 0;
    f.heatEnergy = f.MAX_HEAT * 2;
    f.updateInner(1 / 60);
    expect(f.crashed).toBe(true);
    expect(f.crashOverlay?.querySelector('#crash-restart')).not.toBeNull();
    expect(f.rocketGroup.visible).toBe(false);
  });

  it('does not mistake the chord of a warped quarter-orbit for a surface collision', () => {
    const { f } = create(); const body = f.system.bodyByName('earth');
    const r = body.radius + 200000;
    f.state.position = [body.position[0] + r, body.position[1], body.position[2]];
    f.state.velocity = [body.velocity[0], body.velocity[1] + Math.sqrt(G * body.mass / r), body.velocity[2]];
    f.grounded = false; f.groundedDir = null; f.launched = true; f._spawnProtectionTimer = 0;
    f.warpIndex = 7; f.timeWarp = 1e6;
    const halfPeriod = Math.PI * 0.5 * Math.sqrt(r ** 3 / (G * body.mass));
    f.updateInner(halfPeriod / 1e6);
    expect(f.crashed).toBe(false);
    expect(f.grounded).toBe(false);
  });

  it.each(['earth', 'moon', 'mars'])('assisted descent reaches a safe touchdown on %s using actual flight physics', name => {
    const { f } = create();
    if (name === 'mars') f.system.add(new Mars([1.5e9, 1e9, -4e8], [0, 0, 13500]));
    const body = f.system.bodyByName(name);
    const up = name === 'earth' ? new THREE.Vector3(...f.groundedDir) : new THREE.Vector3(0, 1, 0);
    const atSurface = body.position.map((x: number, i: number) => x + up.getComponent(i) * body.radius);
    const r = body.getSurfaceRadiusAt(atSurface);
    f.state.position = body.position.map((x: number, i: number) => x + up.getComponent(i) * (r + FlightScene.SPAWN_OFFSET_M + 1800));
    f.state.velocity = body.velocity.map((x: number, i: number) => x - up.getComponent(i) * 60);
    f.rocketQuat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), up);
    f.grounded = false; f.groundedDir = null; f.launched = true; f._spawnProtectionTimer = 0; f.liftoffFrames = 0;
    const fuel = f.rocket.totalFuelMass();
    f.toggleLandingAssist();
    for (let i = 0; i < 12000 && !f.grounded && !f.crashed; i++) f.updateInner(1 / 60);
    expect(f.crashed).toBe(false);
    expect(f.grounded).toBe(true);
    expect(f.rocket.totalFuelMass()).toBeLessThan(fuel);
    expect(f.state.throttle).toBe(0);
    expect(f.state.position.every(Number.isFinite)).toBe(true);
  });
  it('fast sideways contact crashes instead of being accepted as a soft landing', () => {
    const { f } = create(); const body = f.system.bodyByName('earth');
    const up = new THREE.Vector3(...f.groundedDir);
    const tangent = new THREE.Vector3().crossVectors(up, new THREE.Vector3(0, 1, 0)).normalize();
    f.state.position = body.position.map((x: number, i: number) => x + up.getComponent(i) * (body.getSurfaceRadiusAt(f.state.position) + FlightScene.SPAWN_OFFSET_M + 0.01));
    f.state.velocity = body.velocity.map((x: number, i: number) => x - up.getComponent(i) * 2 + tangent.getComponent(i) * 500);
    f.grounded = false; f._spawnProtectionTimer = 0;
    f.updateInner(1 / 60);
    expect(f.crashed).toBe(true);
  });

  it('places the whole structural model above the terrain before the first update', () => {
    const { f } = create();
    const earth = f.system.bodyByName('earth');
    f.rocketGroup.updateMatrixWorld(true);
    const vs = ORBIT_SCALE * VISUAL_PLANET_MULT;
    const up = new THREE.Vector3(...f.groundedDir);
    let lowest = Infinity;
    for (const root of f.structuralRoots) root.traverse((obj: THREE.Object3D) => {
      if (!(obj instanceof THREE.Mesh)) return;
      const vertices = obj.geometry.attributes.position!;
      for (let i = 0; i < vertices.count; i++) {
        const point = new THREE.Vector3().fromBufferAttribute(vertices, i).applyMatrix4(obj.matrixWorld);
        point.sub(new THREE.Vector3(...earth.position).multiplyScalar(vs));
        lowest = Math.min(lowest, point.dot(up));
      }
    });
    expect(f.rocketGroup.quaternion.angleTo(f.rocketQuat)).toBeLessThan(1e-6);
    expect(lowest).toBeGreaterThan(earth.getSurfaceRadiusAt(f.state.position) * vs - 0.1);
  });
  it('saves on pagehide and ignores keyboard events after disposal', () => {
    const { f } = create();
    f.state.throttle = 0.37;
    window.dispatchEvent(new Event('pagehide'));
    expect(loadFlightState()?.throttle).toBeCloseTo(0.37);
    f.dispose(); flight = undefined;
    const oldWarp = f.timeWarp;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'e' }));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'm' }));
    expect(f.timeWarp).toBe(oldWarp);
    expect(document.querySelector('#transfer-target')).toBeNull();
  });
  it('uses one throttle input and allows staging only while live and unpaused', () => {
    const { f } = create();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    f.update(0.1);
    window.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowUp' }));
    expect(f.state.throttle).toBeCloseTo(0.05);
    const stage = vi.spyOn(f, 'performStage');
    f.paused = true;
    f.hud.onAction('stage');
    expect(stage).not.toHaveBeenCalled();
  });
  it('soft lands, stops engines, and permits a subsequent liftoff', () => {
    const { f } = create();
    const earth = f.system.bodyByName('earth');
    const up = new THREE.Vector3(...f.groundedDir);
    const r = earth.getSurfaceRadiusAt(f.state.position);
    f.state.position = earth.position.map((x: number, i: number) => x + up.getComponent(i) * (r + FlightScene.SPAWN_OFFSET_M + 0.02));
    f.state.velocity = earth.velocity.map((x: number, i: number) => x - up.getComponent(i) * 2);
    f.grounded = false; f.launched = true; f._spawnProtectionTimer = 0; f.liftoffFrames = 0;
    f.update(1 / 60);
    expect(f.crashed).toBe(false);
    expect(f.grounded).toBe(true);
    expect(f.state.throttle).toBe(0);
    f.state.throttle = 1;
    for (let i = 0; i < 250; i++) f.update(1 / 60);
    expect(f.crashed).toBe(false);
    expect(f.grounded).toBe(false);
  });
});
