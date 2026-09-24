import { expect, it, vi } from 'vitest';
import * as THREE from 'three';
import { Earth } from '../../src/planets/Earth';
import { Moon } from '../../src/planets/Moon';
import { Mercury } from '../../src/planets/Mercury';
import { Venus } from '../../src/planets/Venus';
import { Pluto } from '../../src/planets/Pluto';
import { Mars } from '../../src/planets/Mars';
import { G, ORBIT_SCALE, VISUAL_PLANET_MULT } from '../../src/config/constants';
vi.spyOn(THREE.TextureLoader.prototype, 'load').mockImplementation(() => new THREE.Texture());
vi.spyOn(THREE.TextureLoader.prototype, 'loadAsync').mockResolvedValue(new THREE.Texture());
it('uses gentle terrain and identical mesh vertex and physical surface heights', () => {
  const scale = ORBIT_SCALE * VISUAL_PLANET_MULT;
  for (const planet of [new Earth([1e8, 0, 0], [0,0,0]), new Moon([0,0,0], [0,0,0]), new Mars([0,0,0], [0,0,0]), new Mercury([0,0,0], [0,0,0]), new Venus([0,0,0], [0,0,0]), new Pluto([0,0,0], [0,0,0])]) {
    const vertices = planet.mesh.geometry.attributes.position!;
    const heights: number[] = [];
    for (let i = 0; i < vertices.count; i += 137) {
      const p = new THREE.Vector3().fromBufferAttribute(vertices, i);
      const physical = planet.getSurfaceRadiusAt([planet.position[0] + p.x / scale, p.y / scale, p.z / scale]);
      heights.push(physical / planet.radius - 1);
      expect(Math.abs(p.length() / scale - physical)).toBeLessThan(3);
      expect(Math.abs(physical / planet.radius - 1)).toBeLessThan(0.01);
    }
    expect(Math.max(...heights) - Math.min(...heights)).toBeGreaterThan(0.0001);
    if (planet instanceof Earth) {
      expect(planet.radius).toBe(6.371e6 * 2.5);
      expect(G * planet.mass / planet.radius ** 2).toBeCloseTo(14, 5);
      const rotation = planet.mesh.quaternion.clone();
      planet.updateClouds(10, [1,0,0]);
      expect(planet.mesh.quaternion.equals(rotation)).toBe(true);
      expect(planet.mesh.children.at(-1)!.position.length()).toBe(0);
    }
  }
});
it('gives Pluto continuous raised ridges rather than a smooth sphere', () => {
 const planet = new Pluto([0,0,0], [0,0,0]);
 const direction = new THREE.Vector3(1, 2, 3).normalize();
 const point = direction.clone().multiplyScalar(planet.radius);
 const fraction = planet.getSurfaceRadiusAt(point.toArray()) / planet.radius - 1;
 expect(Math.abs(fraction)).toBeGreaterThan(0.0005);
 const adjacent = direction.clone().add(new THREE.Vector3(1e-5,0,0)).normalize().multiplyScalar(planet.radius);
 expect(Math.abs(planet.getSurfaceRadiusAt(adjacent.toArray()) - planet.getSurfaceRadiusAt(point.toArray())) / planet.radius).toBeLessThan(1e-5);
});
it('keeps only the immediate launch site flat with hills outside it', () => {
 const earth = new Earth([0,0,0], [0,0,0]);
 const lat = 28.5 * Math.PI / 180, lon = -80.5 * Math.PI / 180;
 const pad = new THREE.Vector3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon));
 for (const offset of [-0.0003, 0, 0.0003]) {
  const point = pad.clone().add(new THREE.Vector3(offset,0,0)).normalize().multiplyScalar(earth.radius);
  expect(earth.getSurfaceRadiusAt(point.toArray())).toBeCloseTo(earth.radius, 6);
 }
 const hillside = pad.clone().add(new THREE.Vector3(0.006, 0, 0)).normalize().multiplyScalar(earth.radius);
 expect(earth.getSurfaceRadiusAt(hillside.toArray()) - earth.radius).toBeGreaterThan(1000);
});
