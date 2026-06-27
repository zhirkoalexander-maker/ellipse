import { describe, it, expect } from 'vitest';
import { Body } from '../../src/physics/Body';

describe('Body', () => {
  it('initializes with mass, position, velocity', () => {
    const b = new Body('earth', 5.97e24, [1.5e11, 0, 0], [0, 29780, 0]);
    expect(b.name).toBe('earth');
    expect(b.mass).toBe(5.97e24);
    expect(b.position[0]).toBe(1.5e11);
  });

  it('applyForce updates velocity by impulse / mass', () => {
    const b = new Body('test', 100, [0, 0, 0], [0, 0, 0]);
    b.applyForce([1000, 0, 0], 1);
    expect(b.velocity[0]).toBeCloseTo(10);
    expect(b.position[0]).toBeCloseTo(10);
  });

  it('kineticEnergy = 0.5 * m * v²', () => {
    const b = new Body('test', 2, [0, 0, 0], [3, 4, 0]);
    expect(b.kineticEnergy()).toBeCloseTo(25); // 0.5 * 2 * 25
  });
});
