import type { FlightState } from './FlightState';
import { TouchControls } from './TouchControls';

export class Controls {
  private keys: Set<string> = new Set();
  private stagePressed = false;
  private pauseToggle = false;
  readonly state: FlightState;
  touch: TouchControls | null = null;
  private _onKeyDown: (e: KeyboardEvent) => void;
  private _onKeyUp: (e: KeyboardEvent) => void;

  constructor(state: FlightState) {
    this.state = state;
    this._onKeyDown = (e) => {
      if (e.repeat) return;
      this.keys.add(e.key.toLowerCase());
      if (e.key === ' ') this.stagePressed = true;
      if (e.key === 'Escape') this.pauseToggle = true;
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    this._onKeyUp = (e) => {
      this.keys.delete(e.key.toLowerCase());
    };
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
  }

  enableTouch(): void {
    if (!this.touch) this.touch = new TouchControls();
    this.touch.show();
  }

  disableTouch(): void {
    this.touch?.hide();
  }

  update(dt: number): void {
    const up = this.touch?.getThrottleUp() || this.keys.has('w');
    const down = this.touch?.getThrottleDown() || this.keys.has('s');
    if (up) this.state.throttle = Math.min(1, this.state.throttle + dt * 0.5);
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
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    this.touch?.dispose();
    this.touch = null;
  }
}
