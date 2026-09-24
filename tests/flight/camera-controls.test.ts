import { afterEach, expect, it } from 'vitest';
import * as THREE from 'three';
import { Controls } from '../../src/flight/Controls';
import { ChaseCamera } from '../../src/flight/ChaseCamera';
import type { FlightState } from '../../src/flight/FlightState';
const owned: Array<{dispose(): void}> = [];
afterEach(() => { owned.splice(0).forEach(x => x.dispose()); });
function state(): FlightState { return { position: [0, 0, 0], throttle: 0 } as FlightState; }
function key(type: string, key: string, shiftKey = false) { window.dispatchEvent(new KeyboardEvent(type, { key, shiftKey })); }
it('reserves Shift+arrows for camera and clears held controls on blur', () => {
 const s = state(); const controls = new Controls(s); owned.push(controls);
 key('keydown', 'ArrowUp', true); controls.update(1); expect(s.throttle).toBe(0);
 key('keyup', 'ArrowUp'); key('keydown', 'w'); key('keydown', 'ArrowUp');
 window.dispatchEvent(new Event('blur')); controls.update(1);
 expect(s.throttle).toBe(0); expect(controls.getPitch()).toBe(0);
});
it('supports roll and releases input after disposal', () => {
 const controls = new Controls(state()); owned.push(controls);
 key('keydown', 'j'); expect(controls.getRoll()).toBe(1);
 key('keyup', 'j'); key('keydown', 'k'); expect(controls.getRoll()).toBe(-1);
 controls.dispose(); key('keydown', 'w'); expect(controls.getPitch()).toBe(0); expect(controls.getRoll()).toBe(0);
});
it('places camera above the local surface and preserves its up vector', () => {
 const camera = new THREE.PerspectiveCamera(); const chase = new ChaseCamera(camera); owned.push(chase);
 const up = new THREE.Vector3(-1, 0, 0); const look = new THREE.Vector3(1, 2, 3);
 chase.initialiseAt(state(), new THREE.Quaternion(), up, look);
 expect(camera.position.clone().sub(look).dot(up)).toBeGreaterThan(0);
 expect(camera.position.distanceTo(look)).toBeCloseTo(14);
 expect(camera.up.distanceTo(up)).toBeLessThan(1e-8);
 chase.follow(state(), 1 / 60, up, true, look);
 expect(camera.position.clone().sub(look).dot(up)).toBeGreaterThan(0);
});
it('removes camera mouse and keyboard listeners on disposal and blur resets dragging', () => {
 const camera = new THREE.PerspectiveCamera(); const chase = new ChaseCamera(camera); owned.push(chase);
 const el = document.createElement('canvas'); chase.enableOrbit(el);
 el.dispatchEvent(new MouseEvent('mousedown', {button: 0})); expect(chase.isDragging).toBe(true);
 window.dispatchEvent(new Event('blur')); expect(chase.isDragging).toBe(false);
 chase.dispose(); el.dispatchEvent(new MouseEvent('mousedown', {button: 0})); expect(chase.isDragging).toBe(false);
 chase.follow(state(), 1, new THREE.Vector3(0, 1, 0), true); const before = camera.position.clone();
 key('keydown', 'ArrowLeft', true); chase.follow(state(), 1, new THREE.Vector3(0, 1, 0), true);
 expect(camera.position.distanceTo(before)).toBeLessThan(1e-8);
});
it.each([16 / 9, 9 / 16])('frames a tall rocket inside the camera frustum at aspect %s', aspect => {
 const camera = new THREE.PerspectiveCamera(60, aspect, 0.01, 1000);
 const chase = new ChaseCamera(camera); owned.push(chase);
 chase.frame(40, 5);
 chase.initialiseAt(state(), new THREE.Quaternion(), new THREE.Vector3(0, 1, 0));
 camera.updateMatrixWorld();
 // Bounding sphere of the complete stack must fit both angular apertures.
 const sphereRadius = Math.hypot(20, 5);
 const halfAngle = Math.min(THREE.MathUtils.degToRad(30), Math.atan(Math.tan(THREE.MathUtils.degToRad(30)) * aspect));
 expect(Math.asin(sphereRadius / camera.position.length())).toBeLessThan(halfAngle);
 const fittedDistance = camera.position.length();
 chase.zoom(0.5); chase.follow(state(), 1, undefined, true); chase.reset(); chase.follow(state(), 1, undefined, true);
 expect(camera.position.length()).toBeCloseTo(fittedDistance, 8);
});
it('keeps manual zoom inside a bounded range', () => {
 const camera = new THREE.PerspectiveCamera(60, 1, 0.01, 1000);
 const chase = new ChaseCamera(camera); owned.push(chase);
 chase.frame(40, 5); chase.initialiseAt(state(), new THREE.Quaternion(), new THREE.Vector3(0, 1, 0));
 const fitted = camera.position.length();
 chase.zoom(0.0001); chase.follow(state(), 1, undefined, true);
 expect(camera.position.length()).toBeGreaterThanOrEqual(fitted * 0.38 - 1e-6);
 chase.zoom(1000); chase.follow(state(), 1, undefined, true);
 expect(camera.position.length()).toBeLessThanOrEqual(80 + 1e-6);
});
