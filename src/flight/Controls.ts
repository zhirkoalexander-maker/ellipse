import type { FlightState } from './FlightState';
import { TouchControls } from './TouchControls';

export class Controls {
  private keys: Set<string> = new Set();
  private stagePressed = false;
  private pauseToggle = false;
  readonly state: FlightState;
  touch: TouchControls | null = null;

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

  enableTouch(): void {
    if (!this.touch) {
      this.touch = new TouchControls();
    }
    this.touch.show();
  }

  disableTouch(): void {
    if (this.touch) {
      this.touch.hide();
    }
  }

  update(dt: number): void {
    const up = this.touch?.getThrottleUp() || this.keys.has('w');
    const down = this.touch?.getThrottleDown() || this.keys.has('s');
    if (up) this.state.throttle = Math.min(1, this.state.throttle + dt * 0.3);
    if (down) this.state.throttle = Math.max(0, this.state.throttle - dt * 0.3);
  }

  getPitch(): number {
    let v = 0;
    if (this.keys.has('arrowup') || this.touch?.getPitch() === 1) v = 1;
    if (this.keys.has('arrowdown') || this.touch?.getPitch() === -1) v = -1;
    return v;
  }

  getYaw(): number {
    let v = 0;
    if (this.keys.has('arrowleft') || this.touch?.getYaw() === 1) v = 1;
    if (this.keys.has('arrowright') || this.touch?.getYaw() === -1) v = -1;
    return v;
  }

  getRoll(): number {
    let v = 0;
    if (this.keys.has('a') || this.touch?.getRoll() === 1) v = 1;
    if (this.keys.has('d') || this.touch?.getRoll() === -1) v = -1;
    return v;
  }

  getZoomIn(): boolean { return this.keys.has('z'); }
  getZoomOut(): boolean { return this.keys.has('x'); }

  getStageRequested(): boolean {
    const was = this.stagePressed || !!this.touch?.getStageRequested();
    this.stagePressed = false;
    return was;
  }

  consumePauseToggle(): boolean {
    const was = this.pauseToggle;
    this.pauseToggle = false;
    return was;
  }

  dispose(): void {
    this.touch?.dispose();
    this.touch = null;
  }
}
