import * as THREE from 'three';
import type { Part } from '../parts/Part';
import { buildPartMesh, SIZE_DIMS } from '../parts/PartBuilder';
import type { Vec3 } from '../physics/Body';

export interface AssemblyNode {
  part: Part;
  position: Vec3;
  rotation: number;
  children: AssemblyNode[];
  /** Runtime-unique mesh name (part.id#N) — prevents getObjectByName collisions between identical parts */
  uid?: string;
}

export class Assembly {
  roots: AssemblyNode[] = [];
  private uidCounter = 0;

  addRoot(node: AssemblyNode): void {
    this.assignUid(node);
    this.roots.push(node);
  }

  private assignUid(node: AssemblyNode): void {
    node.uid = `${node.part.id}#${this.uidCounter++}`;
    node.children.forEach(c => this.assignUid(c));
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
      mesh.name = n.uid ?? n.part.id;
      mesh.position.set(n.position[0], n.position[1], n.position[2]);
      mesh.rotation.y = n.rotation;
      parent.add(mesh);
      n.children.forEach((c) => walk(c, mesh));
    };
    this.roots.forEach((r) => walk(r, group));
    // Joint collars between adjacent parts of different sizes — a SHORT cone
    // centered exactly on the joint plane, tapering from the wider part to
    // the narrower one. (The old version was a cone 1.5x the center distance
    // tall, stabbing deep into BOTH parts — ugly.)
    const sorted = [...this.roots].sort((a, b) => b.position[1] - a.position[1]);
    let adapterCount = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      const top = sorted[i]!, bot = sorted[i + 1]!;
      const dt = SIZE_DIMS[top.part.size], db = SIZE_DIMS[bot.part.size];
      if (!dt || !db) continue;
      if (Math.abs(dt.radius - db.radius) < 0.001) continue;
      if (top.part.id.includes('decoupler') || bot.part.id.includes('decoupler')) continue;
      // Capsules already taper down to the tank radius with their built-in
      // skirt — an extra collar cone on top just looks bulky/weird.
      if (top.part.kind === 'capsule') continue;
      // Joint plane = bottom face of the upper part (parts stack flush)
      const jointY = top.position[1] - dt.height / 2;
      const collarH = Math.min(dt.height, db.height) * 0.22;
      const rTop = Math.max(dt.radius, db.radius) * 1.02;
      const rBot = Math.min(dt.radius, db.radius) * 0.98;
      const coneGeom = new THREE.CylinderGeometry(rTop, rBot, collarH, 32);
      const coneMat = new THREE.MeshStandardMaterial({ color: 0xd8d8d2, roughness: 0.45, metalness: 0.3 });
      const cone = new THREE.Mesh(coneGeom, coneMat);
      cone.position.y = jointY;
      group.add(cone);
      adapterCount++;
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
