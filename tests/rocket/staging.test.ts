import { describe, it, expect } from 'vitest';
import { Rocket } from '../../src/rocket/Rocket';
import { Assembly } from '../../src/rocket/Assembly';
import { findPart } from '../../src/parts/PartCatalog';
import { G0 } from '../../src/config/constants';

describe('removeStage bug: duplicate part ids', () => {
  it('removes only one tank when two identical M tanks exist', () => {
    const a = new Assembly();
    // Two identical M tanks + decoupler between them
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.06, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('decoupler_1')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, -0.03, 0], rotation: 0, children: [] });

    const r = new Rocket(a);
    expect(r.fuelTanks.length).toBe(2);
    const totalFuelBefore = r.totalFuelMass();

    const decoupler = a.roots[1]!;
    r.removeStage(decoupler);

    // Should still have 1 tank (upper), not both removed
    expect(r.fuelTanks.length).toBe(1);
    expect(r.totalFuelMass()).toBeLessThan(totalFuelBefore);
    expect(r.totalFuelMass()).toBeGreaterThan(0);
    // roots should be 1 (upper tank only)
    expect(a.roots.length).toBe(1);
  });

  it('removes correct tank with 3 identical tanks and 2 decouplers', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.09, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('decoupler_1')!, position: [0, 0.06, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('decoupler_1')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, -0.03, 0], rotation: 0, children: [] });

    const r = new Rocket(a);
    expect(r.fuelTanks.length).toBe(3);

    // Remove bottom stage
    const dec2 = a.roots[3]!;
    r.removeStage(dec2);
    expect(r.fuelTanks.length).toBe(2);
    expect(a.roots.length).toBe(3);

    // Remove middle stage
    const dec1 = a.roots[1]!;
    r.removeStage(dec1);
    expect(r.fuelTanks.length).toBe(1);
    expect(a.roots.length).toBe(1);
  });
});

describe('Δv calculator', () => {
  function buildRocket() {
    const a = new Assembly();
    return { assembly: a, rocket: () => new Rocket(a) };
  }

  it('empty assembly has 0 Δv', () => {
    const { assembly, rocket } = buildRocket();
    const stages = computeDeltaVFromAssembly(assembly);
    expect(stages.total).toBe(0);
    expect(stages.stages.length).toBe(0);
  });

  it('capsule alone has 0 Δv', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    const stages = computeDeltaVFromAssembly(a);
    expect(stages.total).toBe(0);
  });

  it('single stage with engine and fuel has positive Δv', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0.06, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const stages = computeDeltaVFromAssembly(a);
    expect(stages.total).toBeGreaterThan(3000);
    expect(stages.stages.length).toBe(1);
  });

  it('two stages sum Δv', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('capsule_mk1')!, position: [0, 0.09, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0.06, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('decoupler_1')!, position: [0, 0, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('tank_xl_lfo')!, position: [0, -0.03, 0], rotation: 0, children: [] });
    a.addRoot({ part: findPart('engine_mammoth')!, position: [0, -0.06, 0], rotation: 0, children: [] });
    const stages = computeDeltaVFromAssembly(a);
    expect(stages.stages.length).toBe(2);
    expect(stages.total).toBeGreaterThan(stages.stages[0]!.dv);
    expect(stages.total).toBeGreaterThan(stages.stages[1]!.dv);
    expect(stages.total).toBeGreaterThan(4500);
  });

  it('rocket with engines but no fuel has 0 Δv', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('engine_ant')!, position: [0, 0, 0], rotation: 0, children: [] });
    const stages = computeDeltaVFromAssembly(a);
    expect(stages.total).toBe(0);
  });

  it('rocket with fuel but no engine has 0 Δv', () => {
    const a = new Assembly();
    a.addRoot({ part: findPart('tank_m_lfo')!, position: [0, 0, 0], rotation: 0, children: [] });
    const stages = computeDeltaVFromAssembly(a);
    expect(stages.total).toBe(0);
  });
});

function computeDeltaVFromAssembly(assembly: Assembly) {
  const roots = assembly.roots;
  if (roots.length === 0) return { total: 0, stages: [] };

  const decIdx: number[] = [];
  for (let i = 0; i < roots.length; i++) {
    if (roots[i]!.part.kind === 'decoupler') decIdx.push(i);
  }

  const stageChunks = [];
  let start = 0;
  for (const di of [...decIdx, roots.length]) {
    const chunk = roots.slice(start, di);
    if (chunk.length > 0) stageChunks.push(chunk);
    start = di + 1;
  }

  const stages: { label: string; dv: number; wet: number; dry: number }[] = [];
  let aboveDry = 0;
  let aboveFuel = 0;

  for (let si = stageChunks.length - 1; si >= 0; si--) {
    const chunk = stageChunks[si]!;
    let dry = 0, fuel = 0, isp = 0, engCount = 0;

    for (const node of chunk) {
      dry += node.part.mass;
      if (node.part.fuelCapacity) fuel += node.part.fuelCapacity;
      if (node.part.thrust && node.part.isp) { isp += node.part.isp; engCount++; }
    }

    const avgIsp = engCount > 0 ? isp / engCount : 0;
    const wet = dry + fuel + aboveDry + aboveFuel;
    const dryTotal = dry + aboveDry + aboveFuel;

    let dv = 0;
    if (avgIsp > 0 && wet > 0 && dryTotal > 0 && wet > dryTotal) {
      dv = avgIsp * G0 * Math.log(wet / dryTotal);
    }
    stages.unshift({ label: `S${si+1}`, dv, wet, dry: dryTotal });
    aboveDry += dry;
    aboveFuel += fuel;
  }
  const total = stages.reduce((s, st) => s + st.dv, 0);
  return { total, stages };
}
