import { describe, it, expect } from 'vitest';
import { predictOrbit } from '../../src/physics/OrbitPredictor';

describe('OrbitPredictor', () => {
  it('returns trajectory points for a circular-ish orbit', () => {
    const mu = 6.6743e-11 * 7e24;
    const r = 6.371e6 + 200000;
    const vCirc = Math.sqrt(mu / r);
    const result = predictOrbit(
      [r, 0, 0], [0, 0, vCirc], 7e24, 1e10, 360
    );
    expect(result.points.length).toBeGreaterThan(0);
    expect(result.eccentricity).toBeLessThan(1);
    expect(result.apoapsis).toBeGreaterThan(0);
    expect(result.periapsis).toBeGreaterThan(0);
  });

  it('detects hyperbolic trajectory', () => {
    const mu = 6.6743e-11 * 7e24;
    const r = 6.371e6 + 200000;
    const vEsc = Math.sqrt(2 * mu / r) * 1.5;
    const result = predictOrbit(
      [r, 0, 0], [0, 0, vEsc], 7e24, 1e10, 360
    );
    expect(result.eccentricity).toBeGreaterThanOrEqual(1);
  });
});
