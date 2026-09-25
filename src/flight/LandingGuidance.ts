/** Fuel-limited powered descent. Acceleration components are in the local surface frame. */
export interface LandingInput {
  altitude: number;
  verticalSpeed: number;
  horizontalSpeed: number;
  gravity: number;
  maxAcceleration: number;
}

export function landingCommand(s: LandingInput) {
  const available = Math.max(0, s.maxAcceleration);
  if (available === 0) return { throttle: 0, verticalAcceleration: 0, lateralAcceleration: 0, insufficientThrust: true };
  const margin = Math.max(0.1, available - s.gravity);
  // Brake early, then settle at walking speed; no hover equilibrium above contact.
  const targetDescent = -Math.min(100, 1.5 + Math.sqrt(Math.max(0, s.altitude) * margin * 0.35), 1.5 + Math.max(0, s.altitude) * 0.15);
  const vertical = Math.max(0, s.gravity + (targetDescent - s.verticalSpeed) * 1.5);
  const lateral = Math.min(s.horizontalSpeed * 0.8, available * 0.35);
  const demand = Math.hypot(vertical, lateral);
  const scale = demand > available ? available / demand : 1;
  return {
    throttle: Math.min(1, demand / available),
    verticalAcceleration: vertical * scale,
    lateralAcceleration: lateral * scale,
    insufficientThrust: available <= s.gravity,
  };
}

export function landingOutcome(verticalSpeed: number, lateralSpeed: number, tiltDegrees: number, supported: boolean): 'soft' | 'rough' | 'crash' {
  if (![verticalSpeed, lateralSpeed, tiltDegrees].every(Number.isFinite)) return 'crash';
  // Allow round-off when subtracting a planet's orbital velocity at the boundary.
  if (Math.abs(verticalSpeed) > 90 + 1e-6 || lateralSpeed > (supported ? 8 : 4) || tiltDegrees > (supported ? 35 : 22)) return 'crash';
  return Math.abs(verticalSpeed) <= 6 && lateralSpeed <= 3 ? 'soft' : 'rough';
}
