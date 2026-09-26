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
  /** Side-mounted separator; its children stay aligned with the rocket axis. */
  radial?: boolean;
}

export class Assembly {
  roots: AssemblyNode[] = [];
  private uidCounter = 0;

  addRoot(node: AssemblyNode): void {
    this.assignUid(node);
    this.roots.push(node);
  }

  addChild(parent: AssemblyNode, child: AssemblyNode): void {
    this.assignUid(child);
    parent.children.push(child);
  }

  /** Space for a tapered joint between differently sized stack parts. */
  static jointHeight(bottom: AssemblyNode, top: AssemblyNode): number {
    const delta = Math.abs(Assembly.endRadius(bottom.part, 'top') - Assembly.endRadius(top.part, 'bottom'));
    return delta < .001 ? 0 : delta * 1.4;
  }

  private static endRadius(part: Part, end: 'top' | 'bottom'): number {
    const r = SIZE_DIMS[part.size].radius;
    if (part.kind !== 'capsule') return r;
    if (end === 'top') return r * .17;
    return part.id === 'capsule_mk1' ? SIZE_DIMS.S.radius : r * .96;
  }

  restack(): void {
    let y = 0;
    for (let i = 0; i < this.roots.length; i++) {
      const n = this.roots[i]!;
      if (i) y += Assembly.jointHeight(this.roots[i - 1]!, n);
      const h = SIZE_DIMS[n.part.size].height;
      n.position[1] = y + h / 2;
      y += h;
    }
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
    const walk = (n: AssemblyNode, parent: THREE.Matrix4) => {
      const transform = new THREE.Matrix4().compose(new THREE.Vector3(...n.position),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), n.rotation), new THREE.Vector3(1, 1, 1));
      transform.premultiply(parent);
      const pos = new THREE.Vector3().setFromMatrixPosition(transform);
      const m = n.part.mass;
      totalMass += m; sx += pos.x * m; sy += pos.y * m; sz += pos.z * m;
      n.children.forEach(child => walk(child, transform));
    };
    this.roots.forEach(n => walk(n, new THREE.Matrix4()));
    if (totalMass === 0) return [0, 0, 0];
    return [sx / totalMass, sy / totalMass, sz / totalMass];
  }

  toMesh(): THREE.Group {
    const group = new THREE.Group();
    const walk = (n: AssemblyNode, parent: THREE.Object3D) => {
      const model = buildPartMesh(n.part);
      const mesh = n.radial ? new THREE.Group() : model;
      if (n.radial) { model.scale.y = .2; model.rotation.z = Math.PI / 2; mesh.add(model); }
      mesh.name = n.uid ?? n.part.id;
      mesh.position.set(n.position[0], n.position[1], n.position[2]);
      mesh.rotation.y = n.rotation;
      parent.add(mesh);
      n.children.forEach((c) => {
        walk(c, mesh);
        if (c.part.kind === 'engine' && !n.radial && Math.abs(c.position[0]) > .001) {
          const d = SIZE_DIMS[c.part.size];
          const mount = new THREE.Mesh(new THREE.BoxGeometry(d.radius * 1.4, d.height * .12, d.radius * .5),
            new THREE.MeshStandardMaterial({color:0x7c8993,roughness:.6,metalness:.5}));
          mount.position.set(c.position[0] - Math.sign(c.position[0]) * d.radius * .65, c.position[1] + d.height * .36, c.position[2]);
          mesh.add(mount);
        }
      });
    };
    this.roots.forEach((r) => walk(r, group));
    const sorted = [...this.roots].sort((a, b) => b.position[1] - a.position[1]);
    for (let i = 0; i < sorted.length - 1; i++) {
      const top = sorted[i]!, bottom = sorted[i + 1]!;
      const dt = SIZE_DIMS[top.part.size], db = SIZE_DIMS[bottom.part.size];
      const rTop = Assembly.endRadius(top.part, 'bottom'), rBottom = Assembly.endRadius(bottom.part, 'top');
      if (Math.abs(rTop - rBottom) < .001) continue;
      if (Math.hypot(top.position[0] - bottom.position[0], top.position[2] - bottom.position[2]) > .001) continue;
      const lowerEdge = bottom.position[1] + db.height / 2;
      const upperEdge = top.position[1] - dt.height / 2;
      const gap = upperEdge - lowerEdge;
      if (gap < -.001 || gap > Math.max(dt.height, db.height)) continue;
      // Old saves use flush joints; cover those with a short collar as well.
      const h = Math.max(gap, Math.min(dt.height, db.height) * .18);
      const adapter = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, 24),
        new THREE.MeshStandardMaterial({ color: 0xf2f2e9, roughness: .48, metalness: .08 }));
      adapter.position.set(top.position[0], (upperEdge + lowerEdge) / 2, top.position[2]);
      adapter.userData.joint = true;
      adapter.userData.upperPart = top.uid;
      adapter.userData.lowerPart = bottom.uid;
      group.add(adapter);
    }
    const com = this.centerOfMass();
    for (const child of group.children) {
      child.position.x -= com[0];
      child.position.y -= com[1];
      child.position.z -= com[2];
    }
    return group;
  }
}
