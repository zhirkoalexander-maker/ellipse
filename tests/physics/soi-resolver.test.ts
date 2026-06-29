import { describe, it, expect } from 'vitest';
import { getReferenceBody } from '../../src/physics/SoiResolver';
import { System } from '../../src/physics/System';
import { Body } from '../../src/physics/Body';

describe('SoiResolver', () => {
  it('picks Earth when close to Earth, away from Sun', () => {
    const sys = new System();
    const sun = new Body('sun', 2e26, [0, 0, 0], [0, 0, 0]);
    const earth = new Body('earth', 7e24, [1e8, 0, 0], [0, 0, 11550]);
    (earth as any).radius = 6.371e6;
    sys.add(sun);
    sys.add(earth);

    const ref = getReferenceBody([1e8, 6.371e6 + 50000, 0], sys);
    expect(ref.name).toBe('earth');
  });

  it('picks Sun when far from all planets', () => {
    const sys = new System();
    const sun = new Body('sun', 2e26, [0, 0, 0], [0, 0, 0]);
    const earth = new Body('earth', 7e24, [1e8, 0, 0], [0, 0, 11550]);
    (earth as any).radius = 6.371e6;
    sys.add(sun);
    sys.add(earth);

    const ref = getReferenceBody([3e8, 0, 3e8], sys);
    expect(ref.name).toBe('sun');
  });
});
