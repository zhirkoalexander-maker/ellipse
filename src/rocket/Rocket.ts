import { Assembly, type AssemblyNode } from './Assembly';

export interface FuelTank {
  node: AssemblyNode;
  remaining: number;
  capacity: number;
}

export class Rocket {
  assembly: Assembly;
  fuelTanks: FuelTank[];

  constructor(assembly: Assembly) {
    this.assembly = assembly;
    this.fuelTanks = [];
    collectTanks(assembly.roots, this.fuelTanks);
    // Sort tanks top-first (highest Y first) — consumeFuel iterates in reverse,
    // so bottom tanks (feeding lower-stage engines) drain first. Correct staging.
    this.fuelTanks.sort((a, b) => b.node.position[1] - a.node.position[1]);
  }

  dryMass(): number { return this.assembly.totalMass(); }

  totalFuelMass(): number {
    return this.fuelTanks.reduce((s, t) => s + t.remaining, 0);
  }

  totalMass(): number { return this.dryMass() + this.totalFuelMass(); }

  consumeFuel(rate: number, dt: number): number {
    let consumed = 0;
    for (let i = this.fuelTanks.length - 1; i >= 0; i--) {
      const tank = this.fuelTanks[i]!;
      if (tank.remaining <= 0) continue;
      const want = rate * dt - consumed;
      if (want <= 0) break;
      const take = Math.min(tank.remaining, want);
      tank.remaining -= take;
      consumed += take;
    }
    return consumed;
  }

  /** Position-based staging: drop the decoupler + everything physically BELOW it (Y < decoupler Y).
   *  Works regardless of root array order (VAB adds bottom-first, Game default top-first). */
  removeStage(decouplerNode: AssemblyNode): void {
    const roots = this.assembly.roots;
    const decY = decouplerNode.position[1];

    const removedNodes = new Set<AssemblyNode>();
    const walk = (n: AssemblyNode) => { removedNodes.add(n); n.children.forEach(walk); };

    for (const r of roots) {
      if (r === decouplerNode || r.position[1] < decY) walk(r);
    }

    this.fuelTanks = this.fuelTanks.filter(t => !removedNodes.has(t.node));
    this.assembly.roots = roots.filter(r => !removedNodes.has(r));
    decouplerNode.children = [];
  }
}

function collectTanks(nodes: AssemblyNode[], out: FuelTank[]) {
  for (const n of nodes) {
    if (n.part.fuelCapacity) {
      out.push({ node: n, remaining: n.part.fuelCapacity, capacity: n.part.fuelCapacity });
    }
    collectTanks(n.children, out);
  }
}

function collectDescendants(node: AssemblyNode, out: Set<AssemblyNode>) {
  for (const c of node.children) {
    out.add(c);
    collectDescendants(c, out);
  }
}
