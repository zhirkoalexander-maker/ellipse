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
    // Remove decoupler and all roots below it (lower Y = earlier in flat list)
    const nodesToRemove = new Set<AssemblyNode>();
    nodesToRemove.add(decouplerNode);
    // Collect all roots below decoupler (typically lower in the list)
    for (let i = decIdx + 1; i < roots.length; i++) {
      nodesToRemove.add(roots[i]!);
    }
    // Filter out removed roots
    this.assembly.roots = roots.filter(r => !nodesToRemove.has(r));
    // Filter out removed fuel tanks
    this.fuelTanks = this.fuelTanks.filter(t => !nodesToRemove.has(t.node));
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
