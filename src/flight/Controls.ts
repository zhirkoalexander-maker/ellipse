import type { FlightState } from './FlightState';

export class Controls {
  private keys: Record<string, boolean> = {};
  private state: FlightState;
  private tilt = 0; // -1..1 (left/right)
  private pitch = 0; // -1..1 (forward/back tilt)

  constructor(state: FlightState) {
    this.state = state;
    window.addEventListener('keydown', (e) => { this.keys[e.key.toLowerCase()] = true; });
    window.addEventListener('keyup', (e) => { this.keys[e.key.toLowerCase()] = false; });
  }

  update(dt: number): void {
    // Throttle: W = up, S = down
    if (this.keys['w']) this.state.throttle = Math.min(1, this.state.throttle + dt * 0.5);
    if (this.keys['s']) this.state.throttle = Math.max(0, this.state.throttle - dt * 0.5);

    // Attitude (for future SAS, not used in MVP physics but tracked)
    this.tilt = 0;
    this.pitch = 0;
    if (this.keys['arrowleft']) this.tilt = -1;
    if (this.keys['arrowright']) this.tilt = 1;
    if (this.keys['arrowup']) this.pitch = 1;
    if (this.keys['arrowdown']) this.pitch = -1;
  }

  getTilt(): number { return this.tilt; }
  getPitch(): number { return this.pitch; }
}
