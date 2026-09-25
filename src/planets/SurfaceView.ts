import { configureSurfaceMaterial } from './SurfaceMaterial';
import * as THREE from 'three';
import type { Body, Vec3 } from '../physics/Body';
import { Planet } from './Planet';
import { terrainColor } from './Terrain';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VS = ORBIT_SCALE * VISUAL_PLANET_MULT;
const SOLID = new Set(['earth', 'moon', 'mars', 'venus', 'mercury', 'pluto']);

export function surfaceMagnification(altitude: number, radius: number): number {
  const t = THREE.MathUtils.clamp(Math.max(0, altitude) / Math.max(1, radius * 0.35), 0, 1);
  return 1 + 15 * (1 - t * t * (3 - 2 * t));
}

export function magnifyPoint(point: THREE.Vector3, pivot: THREE.Vector3, scale: number): THREE.Vector3 {
  return point.clone().sub(pivot).multiplyScalar(scale).add(pivot);
}

/** Compressed travel distances should not turn remote planets into giant sky discs. */
export function skyScale(name: string, radius: number, distance: number): number {
  if (radius <= 0 || distance <= radius * 4) return 1;
  const angularRadius = name === 'moon' || name === 'sun' ? .006 : name === 'earth' ? .014 : .0008;
  const distant = Math.min(1, angularRadius * distance / radius);
  const t = THREE.MathUtils.smoothstep(distance / radius, 4, 12);
  return THREE.MathUtils.lerp(1, distant, t);
}

/** Render-only close-up scale and terrain detail. Never changes physical bodies. */
export class SurfaceView {
  scale = 1;
  private scaleInitialized = false;
  readonly pivot = new THREE.Vector3();
  private active: Planet | null = null;
  private patch: THREE.Mesh | null = null;
  private center = new THREE.Vector3();
  private readonly extent = 0.028;
  private oldVisible = true;

  update(position: Vec3, reference: Body, bodies: Body[], dt = 1/60): void {
    this.pivot.set(...position).multiplyScalar(VS);
    const planet = reference instanceof Planet ? reference : null;
    const distance = new THREE.Vector3(...position).distanceTo(new THREE.Vector3(...reference.position));
    const altitude = planet ? distance - planet.getSurfaceRadiusAt(position) : Infinity;
    const desiredScale=planet ? surfaceMagnification(altitude, planet.radius) : 1;
    this.scale=this.scaleInitialized?this.scale+(desiredScale-this.scale)*(1-Math.exp(-Math.max(0,dt)*1.5)):desiredScale;
    this.scaleInitialized=true;
    for (const body of bodies) {
      const mesh = (body as Body & { mesh?: THREE.Object3D }).mesh;
      if (!mesh) continue;
      mesh.position.copy(magnifyPoint(new THREE.Vector3(...body.position).multiplyScalar(VS), this.pivot, this.scale));
      const radius = (body as Body & { radius?: number }).radius || 0;
      const separation = new THREE.Vector3(...position).distanceTo(new THREE.Vector3(...body.position));
      mesh.scale.setScalar(this.scale * skyScale(body.name, radius, separation));
    }
    const detailed = planet && SOLID.has(planet.name) && altitude < planet.radius * 0.012 ? planet : null;
    if (detailed !== this.active) { this.clearDetail(); if (detailed) this.attachDetail(detailed); }
    if (detailed) {
      const direction = new THREE.Vector3(...position).sub(new THREE.Vector3(...detailed.position)).normalize();
      if (!this.patch || direction.distanceTo(this.center) > this.extent * 0.18) this.rebuild(direction);
    }
  }

  private attachDetail(body: Planet): void {
    this.active = body;
    const material = body.mesh.material as THREE.Material;
    this.oldVisible = material.visible;
    material.visible = false;
  }

  private rebuild(up: THREE.Vector3): void {
    const body = this.active!;
    this.center.copy(up);
    if (this.patch) { this.patch.removeFromParent(); this.patch.geometry.dispose(); (this.patch.material as THREE.Material).dispose(); }
    const east = new THREE.Vector3().crossVectors(up, Math.abs(up.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0)).normalize();
    const north = new THREE.Vector3().crossVectors(east, up).normalize();
    const nearRings = 96, rings = 224, segments = 192;
    const positions: number[] = [], colors: number[] = [], indices: number[] = [];
    for (let ring = 0; ring <= rings; ring++) {
      // One continuous globe: dense near the craft, coarse on the far side.
      // Shared rings eliminate the cracks of overlapping terrain patches.
      const angle = ring <= nearRings
        ? (ring / nearRings) ** 1.35 * this.extent
        : this.extent + ((ring - nearRings) / (rings - nearRings)) ** 1.35 * (Math.PI - this.extent);
      for (let s = 0; s <= segments; s++) {
        const azimuth = s / segments * Math.PI * 2;
        const direction = up.clone().multiplyScalar(Math.cos(angle))
          .addScaledVector(east, Math.sin(angle) * Math.cos(azimuth)).addScaledVector(north, Math.sin(angle) * Math.sin(azimuth)).normalize();
        const point = direction.clone().multiplyScalar(body.radius).add(new THREE.Vector3(...body.position));
        const radius = body.getSurfaceRadiusAt(point.toArray() as Vec3);
        positions.push(...direction.clone().multiplyScalar(radius * VS).toArray());
        const color = terrainColor(body.name, radius / body.radius - 1, direction);
        colors.push(color.r, color.g, color.b);
        if (ring < rings && s < segments) {
          const a = ring * (segments + 1) + s, b = a + segments + 1;
          indices.push(a, a + 1, b, a + 1, b + 1, b);
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices); geometry.computeVertexNormals();
    const material = (body.mesh.material as THREE.MeshStandardMaterial).clone();
    material.visible = true; material.vertexColors = true; material.roughness = 1;
    material.emissiveMap = null;
    material.emissive.setHex(0x000000); material.emissiveIntensity = 0;
    material.transparent = false; material.opacity = 1;
    configureSurfaceMaterial(material,body.name,body.visualRadius);
    this.patch = new THREE.Mesh(geometry, material); this.patch.name = 'local-terrain';
    body.mesh.add(this.patch);
  }

  private clearDetail(): void {
    if (this.patch) { this.patch.removeFromParent(); this.patch.geometry.dispose(); (this.patch.material as THREE.Material).dispose(); this.patch = null; }
    if (this.active) {
      const material = this.active.mesh.material as THREE.Material;
      material.visible = this.oldVisible;
    }
    this.active = null;
  }

  dispose(bodies: Body[]): void {
    this.clearDetail(); this.scaleInitialized=false;
    for (const body of bodies) {
      const mesh = (body as Body & { mesh?: THREE.Object3D }).mesh;
      if (mesh) { mesh.scale.setScalar(1); mesh.position.set(...body.position).multiplyScalar(VS); }
    }
  }
}
