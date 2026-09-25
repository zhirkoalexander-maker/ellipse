import * as THREE from 'three';
import { Lifetime } from '../core/Lifetime';
import type { FlightState } from './FlightState';
import { ORBIT_SCALE, VISUAL_PLANET_MULT } from '../config/constants';

const VISUAL_SCALE = ORBIT_SCALE * VISUAL_PLANET_MULT;

const MIN_DIST = 4;
const MAX_DIST = 80;
const LERP_SPEED = 25;
const ORBIT_SPEED = 3;
const ZOOM_SPEED = 2;

// Rockets render at ROCKET_VISUAL_SCALE (×60), so a default stack is ~18 scene
// units tall. A DEFAULT_DIST of 2 put the camera INSIDE the fuselage — the user
// stared at rocket texture and liftoff looked like "nothing happens" while the
// HUD altitude climbed. Pull far enough out to frame the whole rocket + pad.
const DEFAULT_DIST = 14;
const DEFAULT_AZIMUTH = 0;
const DEFAULT_POLAR = Math.PI / 2.5;

export class ChaseCamera {
  private lifetime = new Lifetime();
  private orbitLifetime = new Lifetime();
  private surfaceFrame = new THREE.Quaternion();
  camera: THREE.PerspectiveCamera;
  private fittedDist = DEFAULT_DIST;
  private minZoomDist = MIN_DIST;
  private maxZoomDist = MAX_DIST;
  private dist = DEFAULT_DIST;
  private targetDist = DEFAULT_DIST;
  private azimuth = DEFAULT_AZIMUTH;
  private targetAzimuth = DEFAULT_AZIMUTH;
  private polar = DEFAULT_POLAR;
  private targetPolar = DEFAULT_POLAR;
  isDragging = false;
  private prevMouse = { x: 0, y: 0 };
  private canvas: HTMLElement | null = null;
  private smoothPos = new THREE.Vector3();
  private initialized = false;
  private orbitKeys = { left: false, right: false, up: false, down: false };
  private zoomKeys = { in: false, out: false };
  private inertiaAzimuth = 0;
  private inertiaPolar = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.setupKeyboard();
    this.lifetime.listen(window, 'blur', () => this.clearInput());
  }

  private setupKeyboard(): void {
    this.lifetime.listen(window, 'keydown', (e) => {
      if (e.shiftKey) {
        switch (e.key) {
          case 'ArrowLeft': this.orbitKeys.left = true; e.preventDefault(); break;
          case 'ArrowRight': this.orbitKeys.right = true; e.preventDefault(); break;
          case 'ArrowUp': this.orbitKeys.up = true; e.preventDefault(); break;
          case 'ArrowDown': this.orbitKeys.down = true; e.preventDefault(); break;
        }
      }
      // Z/X zoom
      if (e.key === 'z' || e.key === 'Z') this.zoomKeys.in = true;
      if (e.key === 'x' || e.key === 'X') this.zoomKeys.out = true;
    });
    this.lifetime.listen(window, 'keyup', (e) => {
      switch (e.key) {
        case 'ArrowLeft': this.orbitKeys.left = false; break;
        case 'ArrowRight': this.orbitKeys.right = false; break;
        case 'ArrowUp': this.orbitKeys.up = false; break;
        case 'ArrowDown': this.orbitKeys.down = false; break;
        case 'z': case 'Z': this.zoomKeys.in = false; break;
        case 'x': case 'X': this.zoomKeys.out = false; break;
      }
    });
  }

  initialiseAt(state: FlightState, _quat: THREE.Quaternion, upDir?: THREE.Vector3, lookOffset?: { x: number; y: number; z: number }): void {
    this.initialized = false;
    this.follow(state, 0, upDir, true, lookOffset);
  }

  private clearInput(): void {
    this.orbitKeys = { left: false, right: false, up: false, down: false };
    this.zoomKeys = { in: false, out: false };
    this.isDragging = false;
    this.inertiaAzimuth = 0;
    this.inertiaPolar = 0;
  }

  /** Fit the complete structural bounds with margin in either screen orientation.
   * The caller supplies rendered dimensions and centers lookOffset on the bounds.
   */
  frame(height: number, radius: number): void {
    const halfHeight = Number.isFinite(height) ? Math.max(0, height) / 2 : 0;
    const radialExtent = Number.isFinite(radius) ? Math.max(0, radius) : 0;
    const sphereRadius = Math.hypot(halfHeight, radialExtent);
    const verticalHalfAngle = THREE.MathUtils.degToRad(this.camera.getEffectiveFOV()) / 2;
    const horizontalHalfAngle = Math.atan(Math.tan(verticalHalfAngle) * this.camera.aspect);
    const halfAngle = Math.max(0.001, Math.min(verticalHalfAngle, horizontalHalfAngle));
    this.fittedDist = Math.max(DEFAULT_DIST, Math.min(MAX_DIST, 1.15 * sphereRadius / Math.sin(halfAngle)));
    // Keep a useful, controllable framing range. A wheel event or a held key
    // must never pull the chase camera hundreds of units away from the craft.
    this.minZoomDist = Math.max(MIN_DIST, this.fittedDist * 0.38);
    this.maxZoomDist = Math.min(MAX_DIST, Math.max(this.fittedDist * 2.4, this.fittedDist + 10));
    this.targetDist = this.fittedDist;
    this.dist = this.fittedDist;
    this.initialized = false;
  }

  setAzimuth(az: number): void {
    this.azimuth = az;
    this.targetAzimuth = az;
  }

  setPolar(p: number): void {
    this.polar = p;
    this.targetPolar = p;
  }

  zoom(delta: number): void {
    this.targetDist *= delta;
    this.targetDist = Math.max(this.minZoomDist, Math.min(this.maxZoomDist, this.targetDist));
  }

  enableOrbit(el: HTMLElement): void {
    this.orbitLifetime.dispose();
    this.orbitLifetime = new Lifetime();
    this.canvas = el;

    this.orbitLifetime.listen(el, 'mousedown', (e) => {
      if (e.button !== 0) return;
      this.isDragging = true;
      this.prevMouse = { x: e.clientX, y: e.clientY };
      this.inertiaAzimuth = 0;
      this.inertiaPolar = 0;
    });

    this.orbitLifetime.listen(window, 'mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.prevMouse.x;
      const dy = e.clientY - this.prevMouse.y;
      this.inertiaAzimuth = -dx * 0.005;
      this.inertiaPolar = dy * 0.005;
      this.targetAzimuth += this.inertiaAzimuth;
      this.targetPolar = Math.max(0.05, Math.min(Math.PI - 0.05, this.targetPolar + this.inertiaPolar));
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });

    this.orbitLifetime.listen(window, 'mouseup', () => { this.isDragging = false; });

    this.orbitLifetime.listen(el, 'wheel', (e) => {
      e.preventDefault();
      this.zoom(e.deltaY > 0 ? 1.1 : 0.9);
    }, { passive: false });
  }

  follow(state: FlightState, dt: number, upDir?: THREE.Vector3, snap = false, lookOffset?: { x: number; y: number; z: number }): void {
    // Autopilot may split a large simulation step into tiny render slices.
    // Keep camera easing tied to visible time so it neither lags for seconds
    // nor appears to jitter while the physics is being accelerated.
    const cameraDt = Math.max(0, Math.min(0.1, dt));
    const vx = state.position[0] * VISUAL_SCALE + (lookOffset?.x ?? 0);
    const vy = state.position[1] * VISUAL_SCALE + (lookOffset?.y ?? 0);
    const vz = state.position[2] * VISUAL_SCALE + (lookOffset?.z ?? 0);
    const targetLook = new THREE.Vector3(vx, vy, vz);

    // Handle keyboard orbit
    if (this.orbitKeys.left) this.targetAzimuth += cameraDt * ORBIT_SPEED;
    if (this.orbitKeys.right) this.targetAzimuth -= cameraDt * ORBIT_SPEED;
    if (this.orbitKeys.up) this.targetPolar = Math.max(0.05, this.targetPolar - cameraDt * ORBIT_SPEED * 0.5);
    if (this.orbitKeys.down) this.targetPolar = Math.min(Math.PI - 0.05, this.targetPolar + cameraDt * ORBIT_SPEED * 0.5);
    if (this.zoomKeys.in) this.zoom(Math.max(0.01, 1 - cameraDt * ZOOM_SPEED));
    if (this.zoomKeys.out) this.zoom(1 + cameraDt * ZOOM_SPEED);

    // Apply inertia when not dragging
    if (!this.isDragging) {
      this.targetAzimuth += this.inertiaAzimuth * cameraDt * 2;
      this.targetPolar += this.inertiaPolar * cameraDt * 2;
      this.targetPolar = Math.max(0.05, Math.min(Math.PI - 0.05, this.targetPolar));
      this.inertiaAzimuth *= Math.exp(-3 * cameraDt);
      this.inertiaPolar *= Math.exp(-3 * cameraDt);
    }

    // Smooth interpolation
    this.dist += (this.targetDist - this.dist) * Math.min(1, LERP_SPEED * cameraDt);
    this.azimuth += (this.targetAzimuth - this.azimuth) * Math.min(1, LERP_SPEED * cameraDt * 0.5);
    this.polar += (this.targetPolar - this.polar) * Math.min(1, LERP_SPEED * cameraDt * 0.5);

    const ox = this.dist * Math.sin(this.polar) * Math.cos(this.azimuth);
    const oy = this.dist * Math.cos(this.polar);
    const oz = this.dist * Math.sin(this.polar) * Math.sin(this.azimuth);
    const targetUp = upDir && upDir.lengthSq() > 0
      ? upDir.clone().normalize() : new THREE.Vector3(0, 1, 0);
    // Transport the tangent frame as surface normal changes, avoiding pole flips.
    const previousUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.surfaceFrame);
    if (this.initialized) {
      const turn = new THREE.Quaternion().setFromUnitVectors(previousUp,targetUp);
      const eased = new THREE.Quaternion().rotateTowards(turn, cameraDt * 0.65);
      targetUp.copy(previousUp).applyQuaternion(eased).normalize();
    }
    this.surfaceFrame.premultiply(new THREE.Quaternion().setFromUnitVectors(previousUp, targetUp)).normalize();
    const targetPos = new THREE.Vector3(ox, oy, oz).applyQuaternion(this.surfaceFrame).add(targetLook);

    // Orbit and zoom are already eased above. Translational lag makes the
    // craft bounce across the frame when its speed or warp rate changes.
    this.smoothPos.copy(targetPos);
    this.initialized = true;

    this.camera.position.copy(this.smoothPos);
    this.camera.up.copy(targetUp);
    this.camera.lookAt(targetLook);
  }

  reset(): void {
    this.targetDist = this.fittedDist;
    this.dist = this.fittedDist;
    this.targetAzimuth = DEFAULT_AZIMUTH;
    this.azimuth = DEFAULT_AZIMUTH;
    this.targetPolar = DEFAULT_POLAR;
    this.polar = DEFAULT_POLAR;
  }

  dispose(): void {
    this.lifetime.dispose();
    this.orbitLifetime.dispose();
    this.clearInput();
    this.canvas = null;
  }
}
