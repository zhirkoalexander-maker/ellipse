import * as THREE from 'three';

/** Four pad-mounted restraints. They stay with the pad when the craft leaves. */
export class LaunchClamps extends THREE.Group {
  readonly arms: THREE.Group[] = [];
  progress = 0;
  private released = false;

  constructor(radius: number, height: number) {
    super(); this.name = 'launch-restraints';
    const steel = new THREE.MeshStandardMaterial({ color: 0x657780, metalness: 0.65, roughness: 0.48 });
    const yellow = new THREE.MeshStandardMaterial({ color: 0xe9ac36, metalness: 0.4, roughness: 0.5 });
    const rubber = new THREE.MeshStandardMaterial({ color: 0x20272b, roughness: 0.9 });
    for (let i = 0; i < 4; i++) {
      const mount = new THREE.Group(); mount.rotation.y = i * Math.PI / 2 + Math.PI / 4;
      const foot = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.5, 1.3), steel);
      foot.position.set(radius + 2.2, 0.25, 0); mount.add(foot);
      const hinge = new THREE.Group(); hinge.position.set(radius + 2.2, 0.55, 0);
      const end = new THREE.Vector3(-2.2, height - 0.55, 0);
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.55, end.length(), 0.65), yellow);
      beam.position.copy(end).multiplyScalar(0.5);
      beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.clone().normalize());
      hinge.add(beam);
      const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 1.05), rubber);
      jaw.position.copy(end); hinge.add(jaw);
      const piston = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, end.length() * 0.65, 12), steel);
      piston.position.copy(end).multiplyScalar(0.4); piston.position.z = 0.48;
      piston.quaternion.copy(beam.quaternion); hinge.add(piston);
      mount.add(hinge); this.add(mount); this.arms.push(hinge);
    }
  }

  update(dt: number, liftoff: boolean): void {
    this.released ||= liftoff;
    if (!this.released) return;
    this.progress = Math.min(1, this.progress + Math.max(0, dt) / 1.2);
    const t = this.progress * this.progress * (3 - 2 * this.progress);
    for (const arm of this.arms) arm.rotation.z = -t * Math.PI * 0.42;
  }
}
