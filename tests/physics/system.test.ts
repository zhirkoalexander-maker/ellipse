import { describe, it, expect } from 'vitest';
import { System } from '../../src/physics/System';
import { Body } from '../../src/physics/Body';

describe('System', () => {
  it('add() stores body', () => {
    const sys = new System();
    const b = new Body('a', 1, [0, 0, 0], [0, 0, 0]);
    sys.add(b);
    expect(sys.bodies).toContain(b);
  });

  it('bodyByName returns matching body', () => {
    const sys = new System();
    const b = new Body('earth', 1, [0, 0, 0], [0, 0, 0]);
    sys.add(b);
    expect(sys.bodyByName('earth')).toBe(b);
    expect(sys.bodyByName('mars')).toBeUndefined();
  });

  it('propagate advances 2-body Earth-Moon system', () => {
    const sys = new System();
    // Use real-ish masses; position scaled; the test just checks integration runs
    const earth = new Body('earth', 5.97e24, [0, 0, 0], [0, 0, 0]);
    const moon = new Body('moon', 7.35e22, [3.84e8, 0, 0], [0, 1022, 0]);
    sys.add(earth);
    sys.add(moon);
    sys.propagate(0.001, 0.001); // no time warp
    // Moon's Y position should have changed (velocity is in Y)
    expect(moon.position[1]).toBeGreaterThan(0);
  });
});
