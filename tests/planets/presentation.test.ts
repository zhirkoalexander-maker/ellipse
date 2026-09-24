import { expect, it } from 'vitest';
import * as THREE from 'three';
import { surfaceMagnification, magnifyPoint, SurfaceView } from '../../src/planets/SurfaceView';
import { LaunchClamps } from '../../src/flight/LaunchClamps';
import { Earth } from '../../src/planets/Earth';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../../src/config/constants';

it('makes close planets huge and reduces all bodies by the same continuous factor on ascent', () => {
  expect(surfaceMagnification(0, 1000)).toBe(6);
  expect(surfaceMagnification(1000, 1000)).toBe(1);
  let previous = 6;
  for (let altitude = 0; altitude <= 1000; altitude += 10) {
    const scale = surfaceMagnification(altitude, 1000);
    expect(scale).toBeLessThanOrEqual(previous); previous = scale;
  }
  const pivot = new THREE.Vector3(100, 200, 300);
  expect(magnifyPoint(pivot, pivot, 6).distanceTo(pivot)).toBe(0);
  const a = new THREE.Vector3(10, 5, 8), b = new THREE.Vector3(20, 2, 9);
  expect(magnifyPoint(a, pivot, 6).distanceTo(magnifyPoint(b, pivot, 6))).toBeCloseTo(a.distanceTo(b) * 6);
});

it('holds the rocket until liftoff, then retracts all four restraints', () => {
  const clamps = new LaunchClamps(2, 6);
  const closed = clamps.arms.map(arm => arm.quaternion.clone());
  clamps.update(1, false);
  clamps.arms.forEach((arm, i) => expect(arm.quaternion.angleTo(closed[i]!)).toBe(0));
  for (let i = 0; i < 120; i++) clamps.update(1 / 60, true);
  clamps.arms.forEach((arm, i) => expect(arm.quaternion.angleTo(closed[i]!)).toBeGreaterThan(1));
  expect(clamps.progress).toBe(1);
});

it('keeps local terrain on the physical surface and restores the globe on exit', () => {
  const body = new Earth([1e9, 0, 0], [0, 0, 0]);
  const lat = 28.5 * Math.PI / 180, lon = -80.5 * Math.PI / 180;
  const up = new THREE.Vector3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon));
  const position = up.clone().multiplyScalar(body.radius + 2).add(new THREE.Vector3(...body.position));
  const original = [...body.position], view = new SurfaceView();
  view.update(position.toArray(), body, [body]);
  const patch = body.mesh.getObjectByName('local-terrain') as THREE.Mesh;
  expect(patch).toBeTruthy();
  const vertices = patch.geometry.attributes.position!;
  for (let i = 500; i < 4000; i += 157) {
    const point = new THREE.Vector3().fromBufferAttribute(vertices, i).divideScalar(ORBIT_SCALE * VISUAL_PLANET_MULT);
    const surface = body.getSurfaceRadiusAt(point.clone().add(new THREE.Vector3(...body.position)).toArray());
    expect(Math.abs(point.length() - surface)).toBeLessThan(3);
  }
  expect(body.position).toEqual(original);
  expect(body.mesh.scale.x).toBeGreaterThan(5.9);
  view.dispose([body]);
  expect(body.mesh.getObjectByName('local-terrain')).toBeUndefined();
  expect(body.mesh.scale.x).toBe(1);
});
