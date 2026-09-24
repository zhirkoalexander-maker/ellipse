import { Matrix4, Quaternion, Vector3 } from 'three';

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
export function aimAttitude(q: Quaternion, direction: Vector3, dt: number, radiansPerSecond = 0.8, up?: Vector3): void {
  if (direction.lengthSq() < 1e-12) return;
  const desiredDirection = direction.clone().normalize();
  let target: Quaternion;
  if (up && up.lengthSq() > 1e-12) {
    // A shortest-arc nose turn preserves whatever bank the vehicle already
    // had. During automatic flight that makes the rocket appear to wobble or
    // arrive at the pad on a random angle. Build a deterministic frame from
    // the surface normal so pitch/yaw and roll settle together.
    const referenceUp = up.clone().normalize();
    const right = new Vector3().crossVectors(referenceUp, desiredDirection);
    if (right.lengthSq() > 1e-10) {
      right.normalize();
      // X × Y = Z for a right-handed Three.js frame (Y is the rocket nose).
      const correctedZ = new Vector3().crossVectors(right, desiredDirection).normalize();
      const basis = new Matrix4().makeBasis(right, desiredDirection, correctedZ);
      target = new Quaternion().setFromRotationMatrix(basis);
    } else {
      target = q.clone();
    }
  } else {
    const nose = new Vector3(0, 1, 0).applyQuaternion(q);
    const delta = new Quaternion().setFromUnitVectors(nose, desiredDirection);
    target = delta.multiply(q.clone());
  }
  q.rotateTowards(target, Math.max(0, dt) * radiansPerSecond).normalize();
}
