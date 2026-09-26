import { batchStaticMeshes } from './StaticMeshes';
import * as THREE from 'three';
import type { Part } from './Part';

/** Original geometry design; dimensions stay in the catalog's existing attachment slots. */
export function buildDesignedPart(part: Part, d: { radius: number; height: number }): THREE.Group {
  const g = new THREE.Group();
  g.name = part.id;
  g.userData.design = 'ceramic-flight';
  const r = d.radius, h = d.height;
  const material = (color: number, metalness = 0.4, roughness = 0.35) => new THREE.MeshStandardMaterial({ color, metalness, roughness });
  const ceramic = material(0xf2f2e9, 0.08, 0.48);
  const titanium = material(0xa9b2b4, 0.55, 0.34);
  const graphite = material(0x252b31, 0.25, 0.48);
  const copper = material(0xe87923, 0.15, 0.4);
  const blue = material(0xee862e, 0.10, 0.4);
  const glass = material(0x329cdf, 0.2, 0.13);
  glass.emissive.setHex(0x126db0); glass.emissiveIntensity = 0.45;
  // A tiny hand-authored ceramic grain map keeps surfaces from looking like plastic.
  const grain = new Uint8Array(8 * 8 * 4);
  for (let i = 0; i < 64; i++) {
    const shade = 244 + (i * 13 % 11);
    grain.set([shade, shade, shade, 255], i * 4);
  }
  ceramic.map = new THREE.DataTexture(grain, 8, 8);
  ceramic.map.magFilter = THREE.LinearFilter;
  ceramic.map.minFilter = THREE.LinearMipmapLinearFilter;
  ceramic.map.generateMipmaps = true;
  ceramic.map.wrapS = ceramic.map.wrapT = THREE.RepeatWrapping;
  ceramic.map.repeat.set(12, 12);
  ceramic.map.colorSpace = THREE.SRGBColorSpace;
  ceramic.map.needsUpdate = true;
  function add(geometry: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0, name = '') {
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.position.set(x, y, z); mesh.name = name;
    mesh.castShadow = mesh.receiveShadow = true;
    g.add(mesh); return mesh;
  }
  function cylinder(top: number, bottom: number, height: number, y: number, mat: THREE.Material) {
    return add(new THREE.CylinderGeometry(top * r, bottom * r, height * h, 48), mat, 0, y * h);
  }
  function ring(radius: number, y: number, mat: THREE.Material, thickness = 0.018) {
    const mesh = add(new THREE.TorusGeometry(radius * r, thickness * r, 8, 48), mat, 0, y * h);
    mesh.rotation.x = Math.PI / 2; return mesh;
  }
  function beam(a: THREE.Vector3, b: THREE.Vector3, radius: number, mat: THREE.Material) {
    const delta = b.clone().sub(a);
    const mesh = add(new THREE.CylinderGeometry(radius, radius * 0.85, delta.length(), 10), mat);
    mesh.position.copy(a).add(b).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    return mesh;
  }
  switch (part.kind) {
    case 'tank':
      cylinder(0.99, 0.99, 1, 0, ceramic);
      // Broad roll marks remain readable from the launch camera.
      for (const y of [-0.455, 0.455]) {
        cylinder(1.015, 1.015, 0.075, y, graphite);
        ring(1.022, y, titanium, 0.014);
      }
      cylinder(1.002, 1.002, 0.14, -0.25, copper);
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2;
        add(new THREE.CylinderGeometry(r * 1.002, r * 1.002, h * 0.22, 12, 1, true, a, Math.PI / 5), graphite, 0, h * 0.28);
        const bolt = add(new THREE.SphereGeometry(r * 0.029, 8, 6), titanium, Math.sin(a)*r*1.022, -h*0.455, Math.cos(a)*r*1.022);
        bolt.scale.y=0.75;
      }
      // One raised service hatch provides a clear front side.
      add(new THREE.BoxGeometry(r * 0.25, h * 0.18, r * 0.08), graphite, 0, -h*0.025, r*0.988);
      add(new THREE.BoxGeometry(r * 0.19, h * 0.13, r * 0.02), titanium, 0, -h*0.025, r*1.04);
      break;
    case 'capsule': {
      // The Mk1 M capsule has a narrow adapter matching the starter S tanks.
      const base = part.id === 'capsule_mk1' ? 0.60 / 0.85 : 0.96;
      const shoulder = base * 1.08;
      cylinder(shoulder, base, 0.17, -0.415, ceramic);
      cylinder(0.29, shoulder, 0.68, 0.01, ceramic);
      const dome = add(new THREE.SphereGeometry(r * 0.29, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), ceramic, 0, h * 0.35);
      dome.scale.y = h * 0.11 / (r * 0.29);
      cylinder(0.17, 0.17, 0.04, 0.48, graphite);
      cylinder(base, base, 0.06, -0.47, graphite);
      ring(shoulder, -0.33, copper, 0.022);
      ring(base, -0.47, titanium, 0.015);
      for (const a of [-0.58, 0.58, Math.PI]) {
        const y = 0.06 * h;
        const radius = (shoulder + (0.29 - shoulder) * (0.39 / 0.68)) * r;
        const normal = new THREE.Vector3(Math.sin(a), (shoulder-0.29)*r/(h*0.68), Math.cos(a)).normalize();
        const window = add(new THREE.SphereGeometry(r*0.15,24,12), glass, Math.sin(a)*radius, y, Math.cos(a)*radius,'cockpit-window');
        window.scale.set(1,1.28,0.28);
        window.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),normal);
        const frame=add(new THREE.TorusGeometry(r*0.158,r*0.032,8,32),graphite,window.position.x,y,window.position.z);
        frame.scale.y=1.28;frame.quaternion.copy(window.quaternion);
        const trim=add(new THREE.TorusGeometry(r*0.181,r*0.009,6,32),titanium,window.position.x,y,window.position.z);
        trim.scale.y=1.28;trim.quaternion.copy(window.quaternion);
      }
      break;
    }
    case 'engine': {
      cylinder(0.99, 0.62, 0.24, 0.38, ceramic);
      cylinder(1.01,1.01,0.055,0.47,graphite);
      cylinder(0.62,0.62,0.10,0.21,copper);
      for (let i=0;i<4;i++) {
        const a=i*Math.PI/2;
        const lug=add(new THREE.BoxGeometry(r*0.13,h*0.18,r*0.13),titanium,Math.sin(a)*r*0.59,h*0.21,Math.cos(a)*r*0.59);
        lug.rotation.y=a;
      }
      cylinder(0.42, 0.42, 0.20, 0.13, titanium);
      ring(0.44, 0.06, copper, 0.04);
      // Hollow continuous wall: no capped cylinder hiding the bell interior.
      const profile = [[0.24,0.04],[0.28,-0.10],[0.43,-0.26],[0.69,-0.43],[0.86,-0.48],[0.83,-0.48],[0.66,-0.43],[0.40,-0.26],[0.25,-0.10],[0.21,0.04]];
      const bellMat = graphite.clone(); bellMat.side = THREE.DoubleSide;
      add(new THREE.LatheGeometry(profile.map(([x,y]) => new THREE.Vector2(x! * r, y! * h)), 48), bellMat, 0, 0, 0, 'nozzle-bell');
      ring(0.845, -0.48, titanium, 0.025);
      for (const sign of [-1,1]) {
        beam(new THREE.Vector3(sign*r*0.6,h*0.25,0), new THREE.Vector3(sign*r*0.36,-h*0.12,0), r*0.045, copper);
        ring(0.35, -0.15, titanium, 0.012);
      }
      break;
    }
    case 'decoupler':
      cylinder(0.97,0.97,1,0,ceramic);
      cylinder(1.01,1.01,0.20,0,copper);
      for (const y of [-0.46,0.46]) { cylinder(1.02,1.02,0.07,y,graphite); ring(1.025,y,titanium,0.014); }
      for (let i=0;i<8;i++) {
        const a=i*Math.PI/4;
        const latch=add(new THREE.BoxGeometry(r*0.15,h*0.28,r*0.075),graphite,Math.sin(a)*r*0.99,0,Math.cos(a)*r*0.99);
        latch.rotation.y=a;
      }
      break;
    case 'legs':
      for (let i=0;i<4;i++) {
        const a=i*Math.PI/2+Math.PI/4;
        // Thick spring housings and broad feet read as functional landing gear.
        const start=new THREE.Vector3(Math.cos(a)*r*0.72,h*0.30,Math.sin(a)*r*0.72);
        const knee=new THREE.Vector3(Math.cos(a)*r*1.25,-h*0.16,Math.sin(a)*r*1.25);
        const foot=new THREE.Vector3(Math.cos(a)*r*1.6,-h*0.70,Math.sin(a)*r*1.6);
        const strut=beam(start,foot,r*0.10,titanium);
        const collar=new THREE.Mesh(new THREE.CylinderGeometry(r*0.16,r*0.16,h*0.23,10),graphite);
        collar.position.copy(knee);
        collar.quaternion.copy(strut.quaternion);
        // Children do not affect mechanics; they describe the spring housing.
        g.add(collar);
        add(new THREE.CylinderGeometry(r*0.28,r*0.34,h*0.06,12),graphite,foot.x,-h*0.72,foot.z,'landing-foot');
        const mount=add(new THREE.SphereGeometry(r*0.18,12,8),copper,start.x,start.y,start.z);
        mount.scale.y=0.8;
      }
      break;
    case 'parachute':
      cylinder(0.38,0.42,0.2,0,ceramic); cylinder(0.40,0.38,0.05,0.125,blue); ring(0.42,-0.08,copper);
      break;
    case 'heatshield':
      cylinder(1.06,0.83,0.18,-0.04,graphite); ring(1.055,0.05,copper);
      for(let i=0;i<4;i++) ring(0.2+i*0.2,-0.135,titanium,0.005);
      break;
    case 'fairing': {
      const points = [new THREE.Vector2(r, -0.5 * h), new THREE.Vector2(r, -0.25 * h)];
      for (let i = 1; i <= 24; i++) {
        const t = i / 24;
        points.push(new THREE.Vector2(r * Math.cos(t * Math.PI / 2), h * (-0.25 + 0.75 * t)));
      }
      add(new THREE.LatheGeometry(points,48),ceramic);
      ring(1,-0.45,blue); break;
    }
    case 'rcs':
      add(new THREE.BoxGeometry(r*0.65,h*0.25,r*0.65),titanium);
      for(let i=0;i<4;i++) {
        const a=i*Math.PI/2;
        const nozzle=add(new THREE.CylinderGeometry(r*0.06,r*0.14,h*0.18,16,1,true),graphite,Math.sin(a)*r*0.4,0,Math.cos(a)*r*0.4);
        nozzle.quaternion.setFromUnitVectors(new THREE.Vector3(0,-1,0),new THREE.Vector3(Math.sin(a),0,Math.cos(a)));
      }
      break;
    case 'solar':
      cylinder(0.18,0.18,0.22,0,titanium);
      for(const sign of [-1,1]) {
        add(new THREE.BoxGeometry(r*1.5,h*0.025,r*0.86),titanium,sign*r*0.95);
        for(let x=0;x<6;x++) for(let z=0;z<3;z++) add(new THREE.BoxGeometry(r*0.225,h*0.01,r*0.25),glass,sign*r*0.95+(x-2.5)*r*0.24,h*0.018,(z-1)*r*0.27);
      }
      break;
  }
  batchStaticMeshes(g);
  return g;
}
