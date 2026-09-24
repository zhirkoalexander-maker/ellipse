import type { Vec3 } from '../physics/Body';
export interface FlightTelemetry { speed: number; verticalSpeed: number; altitude: number; lateralSpeed: number }
interface SurfaceBody { position: Vec3; velocity: Vec3; radius?: number; getSurfaceRadiusAt?(position: Vec3): number }

/** Terrain altitude and velocity relative to the translating reference body. */
export function flightTelemetry(position: Vec3, velocity: Vec3, body: SurfaceBody | undefined, grounded: boolean): FlightTelemetry {
  const finite = (n: number): number => Number.isFinite(n) ? n : 0;
  const relativePosition = position.map((n, i) => finite(n - (body?.position[i] ?? 0))) as Vec3;
  const distance = Math.hypot(...relativePosition);
  const relativeVelocity = velocity.map((n, i) => grounded ? 0 : finite(n - (body?.velocity[i] ?? 0))) as Vec3;
  const speed = finite(Math.hypot(...relativeVelocity));
  const verticalSpeed = distance > 0 ? finite(relativeVelocity.reduce((sum, n, i) => sum + n * relativePosition[i]! / distance, 0)) : 0;
  const radius = finite(body?.getSurfaceRadiusAt?.(position) ?? body?.radius ?? 0);
  return { speed, verticalSpeed, altitude: grounded ? 0 : Math.max(0, finite(distance - radius)), lateralSpeed: Math.sqrt(Math.max(0, speed ** 2 - verticalSpeed ** 2)) };
}
