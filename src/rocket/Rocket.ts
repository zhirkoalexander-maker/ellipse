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

  stageRoots(decoupler: AssemblyNode): AssemblyNode[] {
    if (decoupler.radial) {
      const siblings = (nodes: AssemblyNode[]): AssemblyNode[] | undefined => {
        if (nodes.includes(decoupler)) return nodes.filter(n => n.radial);
        for (const n of nodes) { const found = siblings(n.children); if (found) return found; }
      };
      return siblings(this.assembly.roots) ?? [decoupler];
    }
    if (!this.assembly.roots.includes(decoupler)) return [decoupler];
    return this.assembly.roots.filter(n => n === decoupler || n.position[1] < decoupler.position[1]);
  }

  /** Keep each detached branch intact, including its side-mounted engines. */
  removeStage(decoupler: AssemblyNode): void {
    const removed = new Set<AssemblyNode>();
    const walk = (n: AssemblyNode) => { removed.add(n); n.children.forEach(walk); };
    this.stageRoots(decoupler).forEach(walk);
    this.fuelTanks = this.fuelTanks.filter(t => !removed.has(t.node));
    const retain = (nodes: AssemblyNode[]): AssemblyNode[] => nodes.filter(n => !removed.has(n)).map(n => {
      n.children = retain(n.children); return n;
    });
    this.assembly.roots = retain(this.assembly.roots);
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
