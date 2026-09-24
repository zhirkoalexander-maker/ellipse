import { Quaternion, Vector3 } from 'three';

/** Body axes: X pitch, Z yaw, Y roll. Damped angular rate avoids snapping and gimbal singularities. */
export function steerAttitude(q: Quaternion, rate: Vector3, pitch: number, yaw: number, roll: number, dt: number): void {
  const response = 1 - Math.exp(-8 * dt);
  const target = new Vector3(pitch * 0.65, roll * 0.8, -yaw * 0.65);
  rate.lerp(target, response);
  const speed = rate.length();
  if (speed > 1e-8) q.multiply(new Quaternion().setFromAxisAngle(rate.clone().divideScalar(speed), speed * dt));
  q.normalize();
}

/** Rotate the nose toward a world direction using the shortest arc, preserving the existing bank. */
export function aimAttitude(q: Quaternion, direction: Vector3, dt: number, radiansPerSecond = 0.8): void {
  if (direction.lengthSq() < 1e-12) return;
  const nose = new Vector3(0, 1, 0).applyQuaternion(q);
  const delta = new Quaternion().setFromUnitVectors(nose, direction.clone().normalize());
  const target = delta.multiply(q.clone());
  q.rotateTowards(target, Math.max(0, dt) * radiansPerSecond).normalize();
}
