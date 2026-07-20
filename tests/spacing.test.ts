import { describe, it, expect } from 'vitest';
import { Assembly } from '../src/rocket/Assembly';
import { findPart } from '../src/parts/PartCatalog';
import { PART_SCALE } from '../src/config/constants';

describe('Rocket Part Spacing', () => {
  it('default rocket parts do not overlap', () => {
    const a = new Assembly();
    const p = PART_SCALE;
    const capH = 1.1 * p, tankH = 0.7 * p, engH = 0.7 * p;
    const gap = 0.005;
    const engY = 0;
    const tankY = engY + engH/2 + gap + tankH/2;
    const capY = tankY + tankH/2 + gap + capH/2;
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, capY, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_s_lfo')!, position: [0, tankY, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, engY, 0], rotation: 0, children: [] });
    
    expect(capY - capH/2).toBeGreaterThanOrEqual(tankY + tankH/2);
    expect(tankY - tankH/2).toBeGreaterThanOrEqual(engY + engH/2);
    
    const mesh = a.toMesh();
    expect(mesh.children.length).toBeGreaterThan(3);
  });
  
  it('parts gap is exactly 0.005', () => {
    const p = PART_SCALE;
    const capH = 1.1 * p, tankH = 0.7 * p, engH = 0.7 * p;
    const gap = 0.005;
    const engY = 0;
    const tankY = engY + engH/2 + gap + tankH/2;
    const capY = tankY + tankH/2 + gap + capH/2;
    
    const capBottom = capY - capH/2;
    const tankTop = tankY + tankH/2;
    const tankBottom = tankY - tankH/2;
    const engTop = engY + engH/2;
    
    expect(Math.abs(capBottom - tankTop - gap)).toBeLessThan(0.001);
    expect(Math.abs(tankBottom - engTop - gap)).toBeLessThan(0.001);
  });
});
