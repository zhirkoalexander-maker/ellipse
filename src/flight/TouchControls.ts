import * as THREE from 'three';
import { toast } from '../ui/Toast';

export class TouchControls {
  private container: HTMLDivElement;
  private active = false;
  private keys: Set<string> = new Set();
  private stagePressed = false;
  private pauseToggle = false;
  private visible = false;

  constructor() {
    this.container = document.createElement('div');
    this.container.style.cssText = `
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;
      display: none; pointer-events: none;
      height: 200px; padding: 8px;
    `;
    document.body.appendChild(this.container);
    this.buildUI();
  }

  private buildUI(): void {
    const c = this.container;

    // Left side — pitch/yaw joystick area
    const left = document.createElement('div');
    left.style.cssText = `
      position: absolute; bottom: 20px; left: 20px; width: 140px; height: 140px;
      background: rgba(255,255,255,0.08); border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.15); pointer-events: auto;
      touch-action: none;
    `;

    const stick = document.createElement('div');
    stick.style.cssText = `
      position: absolute; top: 50%; left: 50%; width: 50px; height: 50px;
      background: rgba(255,255,255,0.2); border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid rgba(255,255,255,0.3);
    `;
    left.appendChild(stick);

    let joyTouchId: number | null = null;
    const joyCenter = { x: 0, y: 0 };
    const joyPos = { x: 0, y: 0 };

    const onJoyStart = (cx: number, cy: number) => {
      const rect = left.getBoundingClientRect();
      joyCenter.x = rect.left + rect.width / 2;
      joyCenter.y = rect.top + rect.height / 2;
      joyPos.x = cx;
      joyPos.y = cy;
      this.updateStick(stick, joyCenter, joyPos);
    };

    const onJoyMove = (cx: number, cy: number) => {
      joyPos.x = cx;
      joyPos.y = cy;
      this.updateStick(stick, joyCenter, joyPos);
      // Set virtual keys based on stick position
      const dx = (cx - joyCenter.x) / 60;
      const dy = (cy - joyCenter.y) / 60;
      const clampedDx = Math.max(-1, Math.min(1, dx));
      const clampedDy = Math.max(-1, Math.min(1, dy));
      if (clampedDy > 0.3) { this.keys.add('touch-up'); this.keys.delete('touch-down'); }
      else if (clampedDy < -0.3) { this.keys.add('touch-down'); this.keys.delete('touch-up'); }
      else { this.keys.delete('touch-up'); this.keys.delete('touch-down'); }
      if (clampedDx > 0.3) { this.keys.add('touch-right'); this.keys.delete('touch-left'); }
      else if (clampedDx < -0.3) { this.keys.add('touch-left'); this.keys.delete('touch-right'); }
      else { this.keys.delete('touch-left'); this.keys.delete('touch-right'); }
    };

    const onJoyEnd = () => {
      joyTouchId = null;
      stick.style.transform = 'translate(-50%, -50%)';
      this.keys.delete('touch-up');
      this.keys.delete('touch-down');
      this.keys.delete('touch-left');
      this.keys.delete('touch-right');
    };

    left.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (joyTouchId !== null) return;
      const t = e.changedTouches[0]!;
      joyTouchId = t.identifier;
      onJoyStart(t.clientX, t.clientY);
    }, { passive: false });

    left.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i]!.identifier === joyTouchId) {
          onJoyMove(e.changedTouches[i]!.clientX, e.changedTouches[i]!.clientY);
        }
      }
    }, { passive: false });

    left.addEventListener('touchend', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i]!.identifier === joyTouchId) {
          onJoyEnd();
        }
      }
    });

    left.addEventListener('touchcancel', onJoyEnd);
    c.appendChild(left);

    // Right side — buttons
    const right = document.createElement('div');
    right.style.cssText = `
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;

    const btnStyle = (label: string, w = 70, h = 50): [HTMLButtonElement, HTMLDivElement] => {
      const wrap = document.createElement('div');
      wrap.style.cssText = `pointer-events: auto; position: relative;`;
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.style.cssText = `
        width: ${w}px; height: ${h}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `;
      wrap.appendChild(btn);
      return [btn, wrap];
    };

    // Throttle up/down
    const [throttleUpBtn, throttleUpWrap] = btnStyle('THR+', 70, 44);
    const [throttleDownBtn, throttleDownWrap] = btnStyle('THR-', 70, 44);
    const [stageBtn, stageWrap] = btnStyle('STAGE', 70, 44);
    const [rollLeftBtn, rollLeftWrap] = btnStyle('R-', 60, 44);
    const [rollRightBtn, rollRightWrap] = btnStyle('R+', 60, 44);

    const pressKey = (key: string, btn: HTMLButtonElement) => {
      this.keys.add(key);
      btn.style.background = 'rgba(255,255,255,0.3)';
    };

    const releaseKey = (key: string, btn: HTMLButtonElement) => {
      this.keys.delete(key);
      btn.style.background = 'rgba(255,255,255,0.1)';
    };

    const setupBtn = (btn: HTMLButtonElement, key: string) => {
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); pressKey(key, btn); }, { passive: false });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); releaseKey(key, btn); }, { passive: false });
      btn.addEventListener('touchcancel', () => releaseKey(key, btn));
      btn.addEventListener('mousedown', () => pressKey(key, btn));
      btn.addEventListener('mouseup', () => releaseKey(key, btn));
      btn.addEventListener('mouseleave', () => releaseKey(key, btn));
    };

    setupBtn(throttleUpBtn, 'w');
    setupBtn(throttleDownBtn, 's');
    setupBtn(rollLeftBtn, 'a');
    setupBtn(rollRightBtn, 'd');

    stageBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.stagePressed = true; }, { passive: false });
    stageBtn.addEventListener('mousedown', () => { this.stagePressed = true; });

    const row1 = document.createElement('div');
    row1.style.cssText = 'display:flex; gap:8px;';
    row1.appendChild(throttleUpWrap);
    row1.appendChild(stageWrap);
    right.appendChild(row1);

    const row2 = document.createElement('div');
    row2.style.cssText = 'display:flex; gap:8px;';
    row2.appendChild(throttleDownWrap);
    row2.appendChild(rollLeftWrap);
    row2.appendChild(rollRightWrap);
    right.appendChild(row2);

    c.appendChild(right);
  }

  private updateStick(stick: HTMLElement, center: { x: number; y: number }, pos: { x: number; y: number }): void {
    const dx = pos.x - center.x;
    const dy = pos.y - center.y;
    const maxR = 60;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const clamped = Math.min(dist, maxR);
    const angle = Math.atan2(dy, dx);
    const x = Math.cos(angle) * clamped;
    const y = Math.sin(angle) * clamped;
    stick.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }

  show(): void {
    if (this.visible) return;
    this.visible = true;
    this.container.style.display = 'block';
  }

  hide(): void {
    this.visible = false;
    this.container.style.display = 'none';
  }

  isVisible(): boolean { return this.visible; }

  getPitch(): number {
    let v = 0;
    if (this.keys.has('touch-up')) v = 1;
    if (this.keys.has('touch-down')) v = -1;
    return v;
  }

  getYaw(): number {
    let v = 0;
    if (this.keys.has('touch-right')) v = 1;
    if (this.keys.has('touch-left')) v = -1;
    return v;
  }

  getRoll(): number {
    let v = 0;
    if (this.keys.has('a')) v = 1;
    if (this.keys.has('d')) v = -1;
    return v;
  }

  getThrottleUp(): boolean { return this.keys.has('w'); }
  getThrottleDown(): boolean { return this.keys.has('s'); }

  getStageRequested(): boolean {
    const was = this.stagePressed;
    this.stagePressed = false;
    return was;
  }

  dispose(): void {
    document.body.removeChild(this.container);
  }
}
