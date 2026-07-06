import * as THREE from 'three';
import { Planet } from './Planet';
import type { Vec3 } from '../physics/Body';
import { ORBIT_SCALE, VISUAL_PLANET_MULT, EARTH_MASS } from '../config/constants';
import { AtmosphereGlow } from '../effects/AtmosphereGlow';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SEGMENTS = 64;

export class Earth extends Planet {
  atmosphereGlow: AtmosphereGlow;

  constructor(position: Vec3, velocity: Vec3) {
    super('earth', EARTH_MASS, position, velocity, 6.371e6);

    const visualR = this.visualRadius;

    const geom = new THREE.SphereGeometry(visualR, SEGMENTS, SEGMENTS);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.7,
      metalness: 0.0,
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(position[0] * VS, position[1] * VS, position[2] * VS);
    this.mesh.rotation.z = 23.5 * Math.PI / 180;

    this.atmosphereGlow = new AtmosphereGlow(visualR);
    this.mesh.add(this.atmosphereGlow.getMesh());

    this.loadTexturesAndDisplace(visualR);
  }

  private async loadTexturesAndDisplace(visualR: number) {
    const loader = new THREE.TextureLoader();

    const [dayTex] = await Promise.all([
      loader.loadAsync('/textures/earth_daymap.jpg'),
    ]);

    dayTex.colorSpace = THREE.SRGBColorSpace;
    dayTex.anisotropy = 8;

    const canvas = document.createElement('canvas');
    canvas.width = dayTex.image.width;
    canvas.height = dayTex.image.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(dayTex.image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    const g = this.mesh.geometry as THREE.SphereGeometry;
    const posAttr = g.attributes.position!;
    const uvAttr = g.attributes.uv!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.025;
    const seaLevel = 0.35;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const u = uvAttr.getX(i);
      const v = uvAttr.getY(i);
      const px = Math.floor(u * (canvas.width - 1));
      const py = Math.floor((1 - v) * (canvas.height - 1));
      const idx = (py * canvas.width + px) * 4;
      const r = pixels[idx]! / 255;

      let disp = 0;
      if (r < seaLevel) {
        disp = -(seaLevel - r) / seaLevel * visualR * 0.002;
      } else {
        disp = ((r - seaLevel) / (1 - seaLevel)) * maxDisp;
      }

      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    g.computeVertexNormals();

    // Store height data for terrain collision
    this.setHeightData(pixels, canvas.width, canvas.height);

    const mat = this.mesh.material as THREE.MeshStandardMaterial;
    mat.map = dayTex;
    mat.needsUpdate = true;

    const waterGeom = new THREE.SphereGeometry(visualR * 0.998, 48, 24);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0a2848,
      transparent: true,
      opacity: 0.18,
      roughness: 0.1,
      metalness: 0.0,
    });
    this.mesh.add(new THREE.Mesh(waterGeom, waterMat));
  }

  private generateFallback(visualR: number) {
    const geom = this.mesh.geometry as THREE.SphereGeometry;
    const posAttr = geom.attributes.position!;
    const uvAttr = geom.attributes.uv!;
    const vert = new THREE.Vector3();
    const maxDisp = visualR * 0.02;

    for (let i = 0; i < posAttr.count; i++) {
      vert.fromBufferAttribute(posAttr, i);
      const u = uvAttr.getX(i);
      const v = uvAttr.getY(i);
      const lat = (0.5 - v) * Math.PI;
      const lon = u * Math.PI * 2 - Math.PI;
      const nx = Math.cos(lat) * Math.cos(lon);
      const ny = Math.sin(lat);
      const nz = Math.cos(lat) * Math.sin(lon);
      const elev = (Math.sin(nx * 4.5) * 0.5 + Math.cos(ny * 3.2) * 0.3 + Math.sin(nz * 2.1) * 0.2) * 0.5 + 0.5;
      let disp = 0;
      if (elev > 0.4) disp = ((elev - 0.4) / 0.6) ** 2 * maxDisp;
      else disp = -(0.4 - elev) / 0.4 * maxDisp * 0.1;
      vert.setLength(visualR + disp);
      posAttr.setXYZ(i, vert.x, vert.y, vert.z);
    }
    posAttr.needsUpdate = true;
    geom.computeVertexNormals();

    const mat = this.mesh.material as THREE.MeshStandardMaterial;
    mat.color.setHex(0x1a3050);
    mat.needsUpdate = true;
  }
}