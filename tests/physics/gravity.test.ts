import { describe, it, expect } from 'vitest';
import { Body } from '../../src/physics/Body';
import { gravitationalForce, totalGravityOn } from '../../src/physics/Gravity';

describe('Gravity', () => {
  it('gravitationalForce between two bodies = G m1 m2 / r² toward source', () => {
    // source at (10, 0, 0), mass 100; target at (0, 0, 0), mass 1
    const source = new Body('s', 100, [10, 0, 0], [0, 0, 0]);
    const target = new Body('t', 1, [0, 0, 0], [0, 0, 0]);
    const f = gravitationalForce(source, target);
    // F = G * 100 * 1 / 10² = G
    // Direction: from target toward source, i.e. +x
    expect(f[0]).toBeGreaterThan(0);
    expect(f[1]).toBeCloseTo(0);
    // magnitude ≈ G ≈ 6.67e-11
    expect(Math.abs(f[0])).toBeCloseTo(6.6743e-11, 15);
  });

  it('totalGravityOn sums forces from multiple sources', () => {
    const a = new Body('a', 1e10, [10, 0, 0], [0, 0, 0]);
    const b = new Body('b', 1e10, [-10, 0, 0], [0, 0, 0]);
    const target = new Body('t', 1, [0, 0, 0], [0, 0, 0]);
    const f = totalGravityOn(target, [a, b]);
    // Forces cancel by symmetry → net ≈ 0
    expect(Math.abs(f[0])).toBeLessThan(1e-10);
  });
});
