import * as THREE from 'three';
import type { Part } from '../parts/Part';
import { buildPartMesh } from '../parts/PartBuilder';
import { PART_SCALE } from '../config/constants';
import type { Vec3 } from '../physics/Body';

const SIZE_DIMS: Record<string, { radius: number }> = {
  S: { radius: 0.5 * PART_SCALE },
  M: { radius: 0.7 * PART_SCALE },
  L: { radius: 1.0 * PART_SCALE },
  XL: { radius: 1.4 * PART_SCALE }
};

export interface AssemblyNode {
  part: Part;
  position: Vec3;
  rotation: number;
  children: AssemblyNode[];
}

export class Assembly {
  roots: AssemblyNode[] = [];

  addRoot(node: AssemblyNode): void {
    this.roots.push(node);
  }

  totalFuelCapacity(): number {
    let f = 0;
    const walk = (n: AssemblyNode) => {
      if (n.part.fuelCapacity) f += n.part.fuelCapacity;
      n.children.forEach(walk);
    };
    this.roots.forEach(walk);
    return f;
  }

  totalMass(): number {
    let m = 0;
    const walk = (n: AssemblyNode) => {
      m += n.part.mass;
      n.children.forEach(walk);
    };
    this.roots.forEach(walk);
    return m;
  }

  totalMassWithFuel(): number {
    let m = 0;
    const walk = (n: AssemblyNode) => {
      m += n.part.mass;
      if (n.part.fuelCapacity) m += n.part.fuelCapacity;
      n.children.forEach(walk);
    };
    this.roots.forEach(walk);
    return m;
  }

  centerOfMass(): Vec3 {
    let totalMass = 0;
    let sx = 0, sy = 0, sz = 0;
    const walk = (n: AssemblyNode) => {
      const m = n.part.mass;
      totalMass += m;
      sx += n.position[0] * m;
      sy += n.position[1] * m;
      sz += n.position[2] * m;
      n.children.forEach(walk);
    };
    this.roots.forEach(walk);
    if (totalMass === 0) return [0, 0, 0];
    return [sx / totalMass, sy / totalMass, sz / totalMass];
  }

  toMesh(): THREE.Group {
    const group = new THREE.Group();
    const walk = (n: AssemblyNode, parent: THREE.Object3D) => {
      const mesh = buildPartMesh(n.part);
      mesh.position.set(n.position[0], n.position[1], n.position[2]);
      mesh.rotation.y = n.rotation;
      parent.add(mesh);
      n.children.forEach((c) => walk(c, mesh));
    };
    this.roots.forEach((r) => walk(r, group));
    // Add smooth adapters between adjacent parts of different sizes
    const sorted = [...this.roots].sort((a, b) => b.position[1] - a.position[1]);
    let adapterCount = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      const top = sorted[i]!, bot = sorted[i + 1]!;
      const r1 = SIZE_DIMS[top.part.size]?.radius ?? 0;
      const r2 = SIZE_DIMS[bot.part.size]?.radius ?? 0;
if (Math.abs(r1 - r2) > 0.001 && !top.part.id.includes('decoupler') && !bot.part.id.includes('decoupler')) {
        const midY = (top.position[1] + bot.position[1]) / 2;
        const coneH = Math.abs(top.position[1] - bot.position[1]) * 1.5;
        const coneGeom = new THREE.CylinderGeometry(Math.min(r1, r2)*1.0, Math.max(r1, r2)*1.0, coneH, 32);
        const coneMat = new THREE.MeshStandardMaterial({ color: 0xdd9944, roughness: 0.25, metalness: 0.4, emissive: 0x331100, emissiveIntensity: 0.2 });
        const cone = new THREE.Mesh(coneGeom, coneMat);
cone.position.y = midY;
        group.add(cone);
        adapterCount++;
      }
    }
    // Center group at center of mass
    if (adapterCount > 0) console.log('Smooth adapters created:', adapterCount);
    const com = this.centerOfMass();
    for (const child of group.children) {
      child.position.x -= com[0];
      child.position.y -= com[1];
      child.position.z -= com[2];
    }
    return group;
  }
}
