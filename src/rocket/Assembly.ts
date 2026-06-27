import * as THREE from 'three';
import type { Part } from '../parts/Part';
import { buildPartMesh } from '../parts/PartBuilder';
import type { Vec3 } from '../physics/Body';

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
    return group;
  }
}
