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

  removeStage(decouplerNode: AssemblyNode): void {
    const roots = this.assembly.roots;
    const decIdx = roots.indexOf(decouplerNode);
    if (decIdx < 0) return;
    const count = roots.length - decIdx;

    const removedNodes = new Set<AssemblyNode>();
    const walk = (n: AssemblyNode) => { removedNodes.add(n); n.children.forEach(walk); };
    // Collect ALL nodes to remove BEFORE splicing
    walk(decouplerNode);
    for (let i = 1; i < count; i++) {
      const node = roots[decIdx + i];
      if (node) walk(node);
    }
    this.fuelTanks = this.fuelTanks.filter(t => !removedNodes.has(t.node));

    // Remove decoupler and all roots below it
    roots.splice(decIdx, count);
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
