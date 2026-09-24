import { describe, it, expect } from 'vitest';
import { landingCommand, landingOutcome } from '../../src/flight/LandingGuidance';
import { Quaternion, Vector3 } from 'three';
import { steerAttitude, aimAttitude } from '../../src/flight/Attitude';

describe('landing guidance', () => {
  it('lands a descending vehicle using finite fuel-limited thrust in different gravities', () => {
    for (const gravity of [1.6, 3.7, 14]) {
      let altitude = 1800, verticalSpeed = -90, horizontalSpeed = 25;
      for (let n = 0; n < 30000 && altitude > 0; n++) {
        const c = landingCommand({ altitude, verticalSpeed, horizontalSpeed, gravity, maxAcceleration: 32 });
        expect(c.throttle).toBeGreaterThanOrEqual(0);
        expect(c.throttle).toBeLessThanOrEqual(1);
        const dt = 1 / 60;
        verticalSpeed += (c.verticalAcceleration - gravity) * dt;
        horizontalSpeed = Math.max(0, horizontalSpeed - c.lateralAcceleration * dt);
        altitude += verticalSpeed * dt;
      }
      expect(altitude).toBeLessThanOrEqual(0);
      expect(Math.abs(verticalSpeed)).toBeLessThan(4);
      expect(horizontalSpeed).toBeLessThan(2);
    }
  });
  it('cannot generate thrust without an engine or fuel', () => {
    expect(landingCommand({ altitude: 100, verticalSpeed: -30, horizontalSpeed: 0, gravity: 14, maxAcceleration: 0 }).throttle).toBe(0);
  });
  it('rejects sideways orbital impacts and inverted touchdown', () => {
    expect(landingOutcome(-2, 500, 5, true)).toBe('crash');
    expect(landingOutcome(-2, 0, 179, true)).toBe('crash');
    expect(landingOutcome(-4, 2, 12, true)).toBe('soft');
    expect(landingOutcome(-9, 4, 20, true)).toBe('rough');
  });
});

describe('attitude control', () => {
  it('yaw tilts the nose even when pointing vertically, roll preserves nose direction', () => {
    const q = new Quaternion(); const velocity = new Vector3();
    for (let i = 0; i < 60; i++) steerAttitude(q, velocity, 0, 1, 0, 1 / 60);
    expect(new Vector3(0, 1, 0).applyQuaternion(q).angleTo(new Vector3(0, 1, 0))).toBeGreaterThan(0.2);
    const roll = new Quaternion();
    for (let i = 0; i < 60; i++) steerAttitude(roll, new Vector3(), 0, 0, 1, 1 / 60);
    expect(new Vector3(0, 1, 0).applyQuaternion(roll).distanceTo(new Vector3(0, 1, 0))).toBeLessThan(1e-8);
  });
  it('aims by a limited angle without resetting roll every frame', () => {
    const q = new Quaternion();
    aimAttitude(q, new Vector3(1, 0, 0), 0.01, 0.8);
    expect(new Quaternion().angleTo(q)).toBeCloseTo(0.008, 7);
  });
});
