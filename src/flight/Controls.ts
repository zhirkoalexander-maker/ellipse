import type { FlightState } from './FlightState';

export class Controls {
  private keys: Set<string> = new Set();
  private stagePressed = false;
  private pauseToggle = false;
  readonly state: FlightState;

  constructor(state: FlightState) {
    this.state = state;
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      this.keys.add(e.key.toLowerCase());
      if (e.key === ' ') this.stagePressed = true;
      if (e.key === 'Escape') this.pauseToggle = true;
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.key.toLowerCase());
    });
  }

  update(dt: number): void {
    if (this.keys.has('w')) this.state.throttle = Math.min(1, this.state.throttle + dt * 0.5);
    if (this.keys.has('s')) this.state.throttle = Math.max(0, this.state.throttle - dt * 0.5);
  }

  getPitch(): number {
    let v = 0;
    if (this.keys.has('arrowup')) v = 1;
    if (this.keys.has('arrowdown')) v = -1;
    return v;
  }

  getYaw(): number {
    let v = 0;
    if (this.keys.has('arrowleft')) v = -1;
    if (this.keys.has('arrowright')) v = 1;
    return v;
  }

  getStageRequested(): boolean {
    const was = this.stagePressed;
    this.stagePressed = false;
    return was;
  }

  consumePauseToggle(): boolean {
    const was = this.pauseToggle;
    this.pauseToggle = false;
    return was;
  }
}
