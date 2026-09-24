import type { FlightState } from './FlightState';
import { TouchControls } from './TouchControls';
import { Lifetime } from '../core/Lifetime';

export class Controls {
  private lifetime = new Lifetime();
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
      if (e.key === 'Shift') { this.keys.delete('arrowup'); this.keys.delete('arrowdown'); }
      if (e.shiftKey && e.key.startsWith('Arrow')) return;
      if (e.repeat) return;
      this.keys.add(e.key.toLowerCase());
      if (e.key === ' ') this.stagePressed = true;
      if (e.key === 'Escape') this.pauseToggle = true;
      if (['w','s','a','d','arrowup','arrowdown',' '].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    this._onKeyUp = (e) => {
      this.keys.delete(e.key.toLowerCase());
    };
    this.lifetime.listen(window, 'keydown', this._onKeyDown);
    this.lifetime.listen(window, 'keyup', this._onKeyUp);
    this.lifetime.listen(window, 'blur', () => this.clearInput());
  }

  enableTouch(): void {
    if (!this.touch) this.touch = new TouchControls();
    this.touch.show();
  }

  disableTouch(): void {
    this.touch?.hide();
  }

  update(dt: number): void {
    const up = this.touch?.getThrottleUp() || this.keys.has('arrowup');
    const down = this.touch?.getThrottleDown() || this.keys.has('arrowdown');
    if (up) this.state.throttle = Math.min(1, this.state.throttle + dt * 0.5);
    if (down) this.state.throttle = Math.max(0, this.state.throttle - dt * 0.3);
  }

  getPitch(): number {
    let v = 0;
    if (this.keys.has('w') || this.touch?.getPitch() === 1) v = 1;
    if (this.keys.has('s') || this.touch?.getPitch() === -1) v = -1;
    return v;
  }

  getYaw(): number {
    let v = 0;
    if (this.keys.has('a') || this.touch?.getYaw() === 1) v = 1;
    if (this.keys.has('d') || this.touch?.getYaw() === -1) v = -1;
    return v;
  }

  getRoll(): number { return Number(this.keys.has('j')) - Number(this.keys.has('k')); }

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

  clearInput(): void {
    this.keys.clear();
    this.stagePressed = false;
    this.pauseToggle = false;
  }

  dispose(): void {
    this.lifetime.dispose();
    this.clearInput();
    this.touch?.dispose();
    this.touch = null;
  }
}
