import { describe, it, expect } from 'vitest';
import { Assembly } from '../../src/rocket/Assembly';
import { Rocket } from '../../src/rocket/Rocket';
import { findPart } from '../../src/parts/PartCatalog';
import { totalThrust, applyThrust, weightedIsp } from '../../src/flight/Thrust';
import { FlightState } from '../../src/flight/FlightState';
import { System } from '../../src/physics/System';
import { Earth } from '../../src/planets/Earth';
import { Body } from '../../src/physics/Body';
import { G, PART_SCALE, EARTH_MASS, EARTH_RADIUS } from '../../src/config/constants';
import { planTransfer } from '../../src/physics/ManeuverPlanner';
import type { AssemblyNode } from '../../src/rocket/Assembly';

/** Exact replica of the Game.ts default 3-stage rocket. */
function buildDefaultRocket(): Rocket {
  const a = new Assembly();
  const p = PART_SCALE;
  const H = { S: 1.4 * p, M: 2.0 * p, L: 2.8 * p, XL: 3.6 * p };
  let y = -H.XL / 2;
  const stack = (h: number) => { const c = y + h / 2; y += h; return c; };
  const add = (id: string, h: number) => {
    a.addRoot({ part: findPart(id)!, position: [0, stack(h), 0], rotation: 0, children: [] });
  };
  add('engine_mammoth', H.XL);
  add('tank_xl_lfo', H.XL);
  add('decoupler_l', H.L);
  add('engine_twinboar', H.L);
  add('tank_l_lfo', H.L);
  add('decoupler_s', H.S);
  add('engine_sparkler', H.S);
  add('tank_s_lfo', H.S);
  add('capsule_mk1', H.M);
  return new Rocket(a);
}

function surfaceGravity(): number {
  const r = EARTH_RADIUS;
  return (G * EARTH_MASS) / (r * r);
}

function findLowestDecoupler(nodes: AssemblyNode[]): AssemblyNode | null {
  let best: AssemblyNode | null = null;
  const walk = (ns: AssemblyNode[]) => {
    for (const n of ns) {
      if (n.part.kind === 'decoupler') {
        if (!best || n.position[1] < best.position[1]) best = n;
      }
      walk(n.children);
    }
  };
  walk(nodes);
  return best;
}

describe('Launch gate — default rocket', () => {
  it('TWR > 1.0 at full throttle (liftoff gate passes)', () => {
    const r = buildDefaultRocket();
    const thrust = totalThrust(r.assembly.roots); // kN
    const g = surfaceGravity();
    const twr = (thrust * 1000 * 1.0) / (r.totalMass() * g);
    expect(thrust).toBeCloseTo((5500 + 4500) * 1.12 * 1.5 * 1.5 + 120 * 1.12, 8);
    expect(twr).toBeGreaterThan(4.8);
    expect(twr).toBeLessThan(5.2); // not absurdly overpowered either
  });

  it('engines actually accelerate the rocket (simulated 10s burn)', () => {
    const r = buildDefaultRocket();
    const sys = new System();
    const fs = new FlightState(r, sys, [0, 0, 0], [0, 0, 0]);
    fs.throttle = 1;
    const minimumDv = totalThrust(r.assembly.roots) * 1000 / r.totalMass() * 10;
    for (let i = 0; i < 600; i++) applyThrust(fs, 1 / 60, [0, 1, 0]);
    expect(fs.velocity[1]).toBeGreaterThanOrEqual(minimumDv);
    expect(fs.velocity[1]).toBeLessThan(minimumDv * 1.05);
    expect(r.totalFuelMass()).toBeLessThan(250000 + 100000 + 5000); // fuel burned
  });
});

describe('Staging — booster separation', () => {
  it('removeStage drops the booster mass AND fuel ("weight must change")', () => {
    const r = buildDefaultRocket();
    const massBefore = r.totalMass();
    const fuelBefore = r.totalFuelMass();
    const tanksBefore = r.fuelTanks.length;

    const dec = findLowestDecoupler(r.assembly.roots);
    expect(dec).not.toBeNull();
    expect(dec!.part.id).toBe('decoupler_l');

    r.removeStage(dec!);

    expect(r.totalMass()).toBeLessThan(massBefore * 0.4); // 365t → ~110t
    expect(r.totalFuelMass()).toBeLessThan(fuelBefore * 0.5); // 355t → 105t
    expect(r.fuelTanks.length).toBe(tanksBefore - 1); // XL tank gone
    // Booster parts gone from the assembly
    const ids = r.assembly.roots.map(n => n.part.id);
    expect(ids).not.toContain('engine_mammoth');
    expect(ids).not.toContain('tank_xl_lfo');
    expect(ids).not.toContain('decoupler_l');
    expect(ids).toContain('engine_twinboar'); // upper stage stays
  });

  it('every booster mesh is findable by uid — visual detach works', () => {
    const r = buildDefaultRocket();
    const group = r.assembly.toMesh();
    const dec = findLowestDecoupler(r.assembly.roots)!;
    const decY = dec.position[1];
    const roots = r.assembly.roots;
    let detached = 0;
    for (const node of roots) {
      if (node !== dec && node.position[1] >= decY) continue;
      const m = group.getObjectByName(node.uid ?? node.part.id);
      expect(m).not.toBeNull(); // ← if this fails, the mesh stays glued on
      detached++;
    }
    expect(detached).toBe(3); // mammoth + xl tank + decoupler
  });

  it('upper-stage TWR after booster separation is even better', () => {
    const r = buildDefaultRocket();
    r.removeStage(findLowestDecoupler(r.assembly.roots)!);
    const thrust = totalThrust(r.assembly.roots);
    const g = surfaceGravity();
    const twr = (thrust * 1000) / (r.totalMass() * g);
    expect(twr).toBeGreaterThan(1.5);
  });
});

describe('Transfer planner — autopilot building block', () => {
  it('computes a plan to every planet (no silent nulls)', () => {
    // Plain bodies (planet constructors build canvas visuals that jsdom
    // can't run) — planTransfer only needs name/position/mass.
    const sys = new System();
    sys.add(new Body('sun', 2e26, [0, 0, 0], [0, 0, 0]));
    sys.add(new Body('mercury', 1e24, [2e8, 0, 2e7], [0, 0, 38000]));
    sys.add(new Body('venus', 1.46e25, [6e8, 0, -6e7], [0, 0, 21000]));
    sys.add(new Body('earth', EARTH_MASS, [1e9, 0, 0], [0, 0, 17000]));
    sys.add(new Body('mars', 1.9e24, [1.5e9, 1e9, -4e8], [0, 0, 13500]));
    sys.add(new Body('jupiter', 1.9e27, [3e9, -6e8, 2e8], [0, 0, 9000]));
    const targets = ['venus', 'mars', 'mercury', 'jupiter'];
    for (const t of targets) {
      const plan = planTransfer([1e9, 0, 0], [0, 0, 17000], sys, t);
      expect(plan).not.toBeNull();
      expect(plan!.deltaV).toBeGreaterThan(0);
      expect(Number.isFinite(plan!.deltaV)).toBe(true);
      expect(plan!.transferTime).toBeGreaterThan(0);
    }
  });

  it('weightedIsp is sane for the mixed-engine default rocket', () => {
    const r = buildDefaultRocket();
    const isp = weightedIsp(r.assembly.roots);
    expect(isp).toBeGreaterThan(280);
    expect(isp).toBeLessThan(360);
  });
});
