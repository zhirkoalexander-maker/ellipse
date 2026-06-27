import * as THREE from 'three';
import type { Part } from './Part';

const SIZE_DIMS = {
  S: { radius: 0.4, height: 0.6 },
  M: { radius: 0.6, height: 1.0 },
  L: { radius: 0.9, height: 1.4 }
};

export function buildPartMesh(part: Part): THREE.Group {
  const group = new THREE.Group();
  group.name = part.id;

  const dims = SIZE_DIMS[part.size];
  const mat = new THREE.MeshStandardMaterial({ color: getColorForKind(part.kind), roughness: 0.6 });

  switch (part.kind) {
    case 'capsule': {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(dims.radius, dims.radius, dims.height, 16), mat);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(dims.radius, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat);
      cap.position.y = dims.height / 2;
      group.add(body, cap);
      break;
    }
    case 'tank': {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(dims.radius, dims.radius, dims.height, 16), mat);
      group.add(m);
      break;
    }
    case 'engine': {
      const bell = new THREE.Mesh(new THREE.CylinderGeometry(dims.radius * 0.5, dims.radius * 0.9, dims.height * 0.6, 16), mat);
      bell.position.y = -dims.height / 2;
      group.add(bell);
      break;
    }
    case 'parachute': {
      const chute = new THREE.Mesh(new THREE.SphereGeometry(dims.radius, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xCC3344, side: THREE.DoubleSide }));
      group.add(chute);
      break;
    }
    case 'legs': {
      for (let i = 0; i < 4; i++) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, dims.height, 8), mat);
        const angle = (i / 4) * Math.PI * 2;
        leg.position.set(Math.cos(angle) * dims.radius, -dims.height / 2, Math.sin(angle) * dims.radius);
        leg.rotation.z = Math.cos(angle) * 0.3;
        leg.rotation.x = Math.sin(angle) * 0.3;
        group.add(leg);
      }
      break;
    }
  }
  return group;
}

function getColorForKind(kind: string): number {
  switch (kind) {
    case 'capsule': return 0xE8EAF0;
    case 'tank': return 0xE8EAF0;
    case 'engine': return 0x404045;
    case 'parachute': return 0xCC3344;
    case 'legs': return 0x808085;
    default: return 0x808080;
  }
}
