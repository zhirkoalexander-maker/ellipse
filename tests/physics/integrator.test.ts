import { describe, it, expect } from 'vitest';
import { Body } from '../../src/physics/Body';
import { rk4Step } from '../../src/physics/Integrator';

describe('RK4 integrator', () => {
  it('advances position with no force (free drift)', () => {
    const b = new Body('p', 1, [0, 0, 0], [10, 0, 0]);
    rk4Step(b, () => [0, 0, 0], 1);
    expect(b.position[0]).toBeCloseTo(10, 5);
  });

  it('maintains circular orbit (central gravity)', () => {
    // Earth analog: m=1, r=1, v=1 (circular if F = -1/r²)
    const b = new Body('orbit', 1, [1, 0, 0], [0, 1, 0]);
    const force = (body: Body): [number, number, number] => {
      const r2 = body.position[0] ** 2 + body.position[1] ** 2;
      const r = Math.sqrt(r2);
      const fmag = -1 / r2;
      return [fmag * body.position[0] / r, fmag * body.position[1] / r, 0];
    };
    const initialPos = [...b.position] as [number, number, number];
    // Run 100 steps, check position stayed close to radius=1
    for (let i = 0; i < 100; i++) rk4Step(b, force, 0.01);
    const r = Math.sqrt(b.position[0] ** 2 + b.position[1] ** 2);
    expect(r).toBeCloseTo(1, 2);
    // position should have rotated, not stayed at initial
    expect(b.position[0]).not.toBeCloseTo(initialPos[0], 2);
  });

  it('energy is approximately conserved (RK4 property)', () => {
    const b = new Body('orbit', 1, [1, 0, 0], [0, 1, 0]);
    const force = (body: Body): [number, number, number] => {
      const r2 = body.position[0] ** 2 + body.position[1] ** 2;
      const r = Math.sqrt(r2);
      const fmag = -1 / r2;
      return [fmag * body.position[0] / r, fmag * body.position[1] / r, 0];
    };
    const e0 = b.kineticEnergy();
    for (let i = 0; i < 1000; i++) rk4Step(b, force, 0.001);
    const e1 = b.kineticEnergy();
    expect(e1 / e0).toBeGreaterThan(0.99);
    expect(e1 / e0).toBeLessThan(1.01);
  });
});
