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
it('makes Pluto hills thirty percent taller while keeping smooth shallow slopes', () => {
 const planet = new Pluto([0,0,0], [0,0,0]);
 const direction = new THREE.Vector3(1, 2, 3).normalize();
 const originalFraction = 0.002 * (Math.sin(direction.x * 9 + direction.y * 3) * Math.cos(direction.z * 8) + 0.3 * Math.sin(direction.y * 17 + direction.z * 11));
 const point = direction.clone().multiplyScalar(planet.radius);
 const fraction = planet.getSurfaceRadiusAt(point.toArray()) / planet.radius - 1;
 expect(fraction).toBeCloseTo(originalFraction * 1.3, 10);
 const adjacent = direction.clone().add(new THREE.Vector3(1e-5,0,0)).normalize().multiplyScalar(planet.radius);
 expect(Math.abs(planet.getSurfaceRadiusAt(adjacent.toArray()) - planet.getSurfaceRadiusAt(point.toArray())) / planet.radius).toBeLessThan(1e-5);
});
it('keeps the Kennedy launch site flat after increasing terrain', () => {
 const earth = new Earth([0,0,0], [0,0,0]);
 const pad = new THREE.Vector3(0.144379, 0.477159, -0.866989).normalize();
 for (const offset of [-0.005, 0, 0.005]) {
  const point = pad.clone().add(new THREE.Vector3(offset,0,0)).normalize().multiplyScalar(earth.radius);
  expect(earth.getSurfaceRadiusAt(point.toArray())).toBeCloseTo(earth.radius, 6);
 }
});
