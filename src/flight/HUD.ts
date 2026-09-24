import type { FlightState } from './FlightState';
import type { System } from '../physics/System';
import { Lifetime } from '../core/Lifetime';
import { flightTelemetry, type FlightTelemetry } from './Telemetry';
import { getReferenceBody } from '../physics/SoiResolver';

export class HUD {
  private lifetime = new Lifetime();
  private paused = false;
  private landingStatusEl = document.createElement('div');
  private autopilotPicker!: HTMLDivElement;
  private autopilotMission!: HTMLDivElement;
  private autopilotTitle!: HTMLElement;
  private autopilotDetail!: HTMLElement;
  private autopilotWarp!: HTMLInputElement;
  private autopilotEntry!: HTMLButtonElement;
  private stageButton!: HTMLButtonElement;
  private grounded?: boolean;
  private root: HTMLDivElement;
  private speedVal!: HTMLSpanElement;
  private fuelVal!: HTMLSpanElement;
  private vsVal!: HTMLSpanElement;
  private altVal!: HTMLSpanElement;
  private massVal!: HTMLSpanElement;
  private heatFill!: HTMLDivElement;
  private heatPct!: HTMLSpanElement;
  private throttleFill!: HTMLDivElement;
  private throttlePct!: HTMLSpanElement;
  private warpLabel!: HTMLSpanElement;
  private _fuelRKg!: HTMLElement;
  private _fuelRBar!: HTMLElement;
  private pauseOverlay!: HTMLDivElement;
  private navballCanvas!: HTMLCanvasElement;
  private navballCtx!: CanvasRenderingContext2D;
  private camModeEl!: HTMLDivElement;
  private twrVal!: HTMLSpanElement;
  private twrFill!: HTMLDivElement;
  private sasModeEl!: HTMLSpanElement;
  private dvVal!: HTMLSpanElement;
  private orbitAp!: HTMLSpanElement;
  private orbitPe!: HTMLSpanElement;
  private orbitTta!: HTMLSpanElement;
  private orbitEcc!: HTMLSpanElement;
  private orbitPanel!: HTMLDivElement;
  onAction: ((action: string) => void) | null = null;

  constructor() {
    this.root = document.createElement('div');
    this.root.className = 'flight-hud';
    this.root.style.cssText = 'position:fixed;inset:0;z-index:100;pointer-events:none;';

    this.pauseOverlay = document.createElement('div');
    this.pauseOverlay.style.cssText = 'position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;opacity:0;transition:opacity 220ms ease-out;';
    this.pauseOverlay.innerHTML = `
      <div style="width:280px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button class="btn btn--primary pause-btn" data-action="resume" style="width:100%;padding:14px;font-size:16px;text-align:center;">▶ Resume</button>
        <button class="btn btn--secondary pause-btn" data-action="menu" style="width:100%;padding:14px;font-size:16px;text-align:center;">Menu</button>
        <button class="btn btn--danger pause-btn" data-action="restart" style="width:100%;padding:14px;font-size:16px;text-align:center;">🔄 Restart</button>
      </div>
    `;
    document.body.appendChild(this.pauseOverlay);
    this.pauseOverlay.querySelectorAll<HTMLButtonElement>('.pause-btn').forEach(btn => {
      this.lifetime.listen(btn, 'click', () => {
        this.onAction?.((btn as HTMLElement).dataset.action!);
      });
    });

    // Screen control buttons
    const bar = document.createElement('div');
    bar.classList.add('hud-panel-in-bottom', 'flight-actions');
    bar.style.cssText = 'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);z-index:200;display:flex;gap:8px;pointer-events:auto;';
    const addBtn = (label: string, action: string, color: string, title = label) => {
      const b = document.createElement('button');
      b.className = 'hud-ctrl-btn';
      b.dataset.action = action;
      b.textContent = label;
      b.title = title;
      b.setAttribute('aria-label', title);
      b.style.cssText = `padding:10px 16px;background:rgba(0,0,0,0.6);color:${color};border:1px solid rgba(255,255,255,0.1);border-radius:6px;font:400 12px system-ui;cursor:pointer;letter-spacing:0.05em;`;
      this.lifetime.listen(b, 'click', () => {
        if (action === 'autopilotOpen') this.openAutopilotPicker();
        else this.onAction?.(action);
      });
      b.style.touchAction = 'none';
      b.addEventListener('pointerdown', e => { b.setPointerCapture?.(e.pointerId); if (action === 'throttleUp') this._throttleBtn = true; if (action === 'throttleDown') this._throttleDn = true; });
      for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) b.addEventListener(event, () => { if (action === 'throttleUp') this._throttleBtn = false; if (action === 'throttleDown') this._throttleDn = false; });
      return b;
    };
    bar.appendChild(addBtn('▼', 'throttleDown', '#ff8844', 'Lower throttle'));
    bar.appendChild(addBtn('▲', 'throttleUp', '#44ff88', 'Raise throttle'));
    this.stageButton = addBtn('Launch', 'stage', '#ffcc44');
    bar.appendChild(this.stageButton);
    this.setGrounded(true);
    bar.appendChild(addBtn('Map', 'map', '#4488ff'));
    bar.appendChild(addBtn('Stability', 'sas', '#8888cc'));
    bar.appendChild(addBtn('Parachute', 'parachute', '#44cc88'));
    bar.appendChild(addBtn('Landing', 'landing', '#8fb6cf', 'Landing assist'));
    bar.appendChild(addBtn('−', 'cameraZoomOut', '#9bb7cc', 'Zoom out'));
    bar.appendChild(addBtn('+', 'cameraZoomIn', '#9bb7cc', 'Zoom in'));
    this.autopilotEntry = addBtn('Auto', 'autopilotOpen', '#eacd9e', 'Open automatic flight');
    bar.appendChild(this.autopilotEntry);
    this.createAutopilotControls();
    bar.style.flexWrap = 'wrap'; bar.style.justifyContent = 'center'; bar.style.width = 'min(96vw, 760px)';
    this.landingStatusEl.className = 'flight-landing-status';
    this.landingStatusEl.style.cssText = 'position:fixed;bottom:82px;left:50%;transform:translateX(-50%);max-width:90vw;padding:8px 14px;background:rgba(8,14,22,.88);color:#bbcbd4;font:11px monospace;text-align:center;border:1px solid #40515d;border-radius:6px;pointer-events:none;opacity:0;visibility:hidden;transition:opacity 160ms ease;';
    this.landingStatusEl.textContent = 'Ready to launch';
    this.root.appendChild(this.landingStatusEl);
    this.root.appendChild(bar);
    this._throttleBtn = false;
    this._throttleDn = false;
    this.lifetime.listen(window, 'blur', () => { this._throttleBtn = false; this._throttleDn = false; });
  }

  get autopilotAutoWarp(): boolean { return this.autopilotWarp.checked; }

  private openAutopilotPicker(): void {
    if (this.paused || this.lifetime.disposed) return;
    this.autopilotPicker.hidden = false;
    this.autopilotPicker.querySelector('select')?.focus();
  }

  private closeAutopilotPicker(): void {
    this.autopilotPicker.hidden = true;
    this.autopilotEntry.focus();
  }

  private createAutopilotControls(): void {
    const style = document.createElement('style');
    style.textContent = `
      .autopilot-picker[hidden],.autopilot-mission[hidden]{display:none!important}
      .autopilot-picker{position:fixed;inset:0;z-index:450;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(4,9,17,.78);pointer-events:auto}
      .autopilot-dialog{width:min(360px,100%);max-height:85dvh;overflow:auto;border:1px solid #536273;border-radius:12px;background:#111d2b;color:#ecf0f3;padding:24px;font:14px/1.5 system-ui;box-shadow:0 20px 80px #0008}
      .autopilot-dialog select{display:block;width:100%;margin:6px 0 18px;padding:12px;border:1px solid #566577;border-radius:5px;background:#1b2b3c;color:#fff;font:inherit}
      .autopilot-dialog button,.autopilot-mission button{padding:10px 12px;border:1px solid #536273;border-radius:5px;background:#233549;color:#eaf1f8;font:11px system-ui;cursor:pointer}
      .autopilot-dialog [data-action=autopilotStart]{background:#eacd9e;color:#142233;border-color:#eacd9e;font-weight:600}
      .autopilot-mission{position:fixed;top:16px;left:50%;transform:translateX(-50%);width:min(340px,calc(100vw - 360px));box-sizing:border-box;z-index:180;padding:10px 12px;background:rgba(13,25,39,.94);border:1px solid #788d9f;border-radius:7px;color:#e8f0f4;font:11px/1.45 system-ui;pointer-events:auto}
      .autopilot-mission button{padding:5px 8px;margin-top:7px;font-size:9px}
      @media(max-width:700px){.autopilot-mission{top:auto;bottom:152px;left:8px;transform:none;width:min(260px,calc(100vw - 120px));font-size:10px;padding:8px}.autopilot-dialog{padding:20px}}
    `;
    this.root.appendChild(style);
    this.autopilotPicker = document.createElement('div');
    this.autopilotPicker.className = 'autopilot-picker'; this.autopilotPicker.hidden = true;
    this.autopilotPicker.innerHTML = `
      <section class="autopilot-dialog" role="dialog" aria-modal="true" aria-label="Autopilot mission">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px"><strong style="font-size:19px;font-weight:500">Fly & land</strong><button type="button" data-action="autopilotClose" aria-label="Close autopilot">✕</button></div>
        <p style="color:#a6b8c9;margin:0 0 20px">Choose a destination. Autopilot handles the flight and touchdown.</p>
        <label>Destination<select aria-label="Destination"><option value="moon">Moon</option><option value="mercury">Mercury</option><option value="venus">Venus</option><option value="earth">Earth</option><option value="mars">Mars</option><option value="pluto">Pluto</option></select></label>
        <label style="display:flex;align-items:center;gap:9px;margin-bottom:22px"><input type="checkbox" checked style="width:18px;height:18px;accent-color:#eacd9e">Automatic time warp</label>
        <button type="button" data-action="autopilotStart" style="width:100%">Start flight</button>
      </section>`;
    this.autopilotWarp = this.autopilotPicker.querySelector('input')!;
    const close = this.autopilotPicker.querySelector<HTMLButtonElement>('[data-action="autopilotClose"]')!;
    const start = this.autopilotPicker.querySelector<HTMLButtonElement>('[data-action="autopilotStart"]')!;
    this.lifetime.listen(close, 'click', () => this.closeAutopilotPicker());
    this.lifetime.listen(start, 'click', () => {
      if (this.paused) return;
      const target = this.autopilotPicker.querySelector('select')!.value;
      this.closeAutopilotPicker();
      this.onAction?.('autopilot:' + target);
    });
    this.lifetime.listen(this.autopilotPicker, 'click', event => {
      if (event.target === this.autopilotPicker) this.closeAutopilotPicker();
    });
    this.lifetime.listen(this.autopilotPicker, 'keydown', event => {
      const key = event as KeyboardEvent;
      key.stopPropagation();
      if (key.key === 'Escape') { key.preventDefault(); this.closeAutopilotPicker(); }
      if (key.key === 'Tab') {
        const controls = Array.from(this.autopilotPicker.querySelectorAll<HTMLElement>('button,select,input'));
        const first = controls[0]!, last = controls[controls.length - 1]!;
        if (key.shiftKey && document.activeElement === first) { key.preventDefault(); last.focus(); }
        if (!key.shiftKey && document.activeElement === last) { key.preventDefault(); first.focus(); }
      }
    });
    this.autopilotMission = document.createElement('div');
    this.autopilotMission.className = 'autopilot-mission'; this.autopilotMission.hidden = true;
    this.autopilotTitle = document.createElement('strong');
    this.autopilotDetail = document.createElement('div'); this.autopilotDetail.style.color = '#b7c8d6';
    const cancel = document.createElement('button'); cancel.textContent = 'Cancel mission'; cancel.dataset.action = 'autopilotCancel';
    this.lifetime.listen(cancel, 'click', () => this.onAction?.('autopilotCancel'));
    this.autopilotMission.append(this.autopilotTitle, this.autopilotDetail, cancel);
    this.root.append(this.autopilotPicker, this.autopilotMission);
  }

  setAutopilotStatus(phase: string | null, target: string, detail: string): void {
    this.autopilotMission.hidden = phase === null;
    const human = (value: string) => value.toLowerCase().replace(/(^|\s)\S/g, c => c.toUpperCase());
    this.autopilotTitle.textContent = phase === null ? '' : `${human(target)} · ${human(phase)}`;
    this.autopilotDetail.textContent = detail;
  }

  _throttleBtn = false;
  _throttleDn = false;
  get throttleUpBtn() { return this._throttleBtn; }
  get throttleDownBtn() { return this._throttleDn; }

  setGrounded(grounded: boolean): void {
    if (this.grounded === grounded) return;
    this.grounded = grounded;
    this.stageButton.textContent = grounded ? 'Launch' : 'Stage';
    this.stageButton.title = grounded ? 'Start engines at full throttle (Space)' : 'Separate the next stage (Space)';
    this.stageButton.style.background = grounded ? '#b94f20' : 'rgba(0,0,0,0.6)';
    this.stageButton.style.color = grounded ? '#fff' : '#ffcc44';
  }

  mount(parent: HTMLElement = document.body): void {
    // Compact top-right panel
    const panel = document.createElement('div');
    panel.classList.add('hud-panel-in-left', 'flight-readouts');
    panel.style.cssText = `
      position:fixed;top:16px;left:16px;z-index:100;pointer-events:auto;
      font-family:monospace;font-size:11px;
      display:flex;flex-direction:column;gap:4px;
      background:rgba(8,10,24,0.75);border:1px solid rgba(200,152,56,0.15);
      border-radius:6px;padding:8px 10px;min-width:130px;
      backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
    `;
    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span class="hud-speed-label" style="color:rgba(244,245,242,0.5);">SPD</span>
        <span class="speed-val" style="color:#ddd;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m/s</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">ALT</span>
        <span class="alt-val" style="color:#ddd;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">V/S</span>
        <span class="vs-val" style="color:#88ccff;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m/s</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">FUEL</span>
        <span class="fuel-val" style="color:#ffaa44;">—</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">kg</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">MASS</span>
        <span class="mass-val" style="color:#aaaacc;">—</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">t</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">HEAT</span>
        <span style="font-size:9px;"><span class="heat-pct" style="color:#44FF44;">0%</span></span>
        <div class="data-bar" style="width:50px;height:4px;"><span class="data-bar__track"><span class="heat-fill" style="width:0%;height:100%;background:#44FF44;border-radius:2px;display:block;"></span></span></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">THR</span>
        <span style="font-size:9px;"><span class="throt-pct" style="color:#aaaacc;">0%</span></span>
        <div class="data-bar" style="width:50px;height:4px;"><span class="data-bar__track"><span class="throt-fill" style="width:0%;height:100%;background:#4488ff;border-radius:2px;display:block;"></span></span></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">TWR</span>
        <span class="twr-val" style="color:#ff6644;font-size:10px;">0.0</span>
        <div class="data-bar" style="width:50px;height:4px;"><span class="data-bar__track"><span class="twr-fill" style="width:0%;height:100%;background:#ff6644;border-radius:2px;display:block;"></span></span></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">Δv</span>
        <span class="dv-val" style="color:#88ccff;font-size:10px;">0 m/s</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">SAS</span>
        <span class="sas-mode" style="color:#8888cc;font-size:10px;">OFF</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">WARP</span>
        <span class="warp-val" style="color:#c89838;font-size:10px;">x1</span>
      </div>
    `;
    const warpControls = document.createElement('div');
    warpControls.style.cssText = 'display:flex;gap:4px;margin-top:4px;';
    for (const [label, action, title] of [
      ['−', 'warpDown', 'Slower time warp ([ / Q)'],
      ['+', 'warpUp', 'Faster time warp (] / E)'],
      ['100×', 'warp100', '100× coast above 70 km — engines off'],
    ]) {
      const button = document.createElement('button');
      button.textContent = label!; button.dataset.action = action!; button.title = title!;
      button.setAttribute('aria-label', title!);
      button.style.cssText = 'flex:1;min-width:0;padding:6px 3px;background:#172335;color:#eacd9e;border:1px solid #394759;border-radius:4px;font:11px monospace;cursor:pointer;';
      warpControls.appendChild(button);
    }
    panel.appendChild(warpControls);
    this.root.appendChild(panel);

    this.speedVal = panel.querySelector('.speed-val')!;
    this.fuelVal = panel.querySelector('.fuel-val')!;
    this.vsVal = panel.querySelector('.vs-val')!;
    this.altVal = panel.querySelector('.alt-val')!;
    this.massVal = panel.querySelector('.mass-val')!;
    this.heatFill = panel.querySelector('.heat-fill')!;
    this.heatPct = panel.querySelector('.heat-pct')!;
    this.throttleFill = panel.querySelector('.throt-fill')!;
    this.throttlePct = panel.querySelector('.throt-pct')!;
    this.warpLabel = panel.querySelector('.warp-val')!;
    this.twrVal = panel.querySelector('.twr-val')!;
    this.twrFill = panel.querySelector('.twr-fill')!;
    this.sasModeEl = panel.querySelector('.sas-mode')!;
    this.dvVal = panel.querySelector('.dv-val')!;

    this.lifetime.listen(panel, 'click', (e) => {
      const btn = (e.target as HTMLElement).closest('[data-action]') as HTMLElement | null;
      if (btn && this.onAction) this.onAction(btn.dataset.action!);
    });

    // Free cam label (bottom)
    this.camModeEl = document.createElement('div');
    this.camModeEl.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;';
    this.root.appendChild(this.camModeEl);

    // Orbit info panel (top-right, below fuel)
    const orbitPanel = document.createElement('div');
    orbitPanel.classList.add('hud-panel-in-right');
    orbitPanel.style.cssText = 'position:fixed;top:96px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:11px;background:rgba(8,10,24,0.8);border:1px solid rgba(68,136,204,0.25);border-radius:6px;padding:8px 12px;color:#88ccff;min-width:140px;';
    orbitPanel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2px;">
        <span style="color:rgba(244,245,242,0.5);font-size:9px;letter-spacing:0.1em;">ORBIT</span>
        <span class="orbit-ecc" style="color:#88ccff;font-size:9px;">—</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:#ff8844;font-size:10px;">Ap</span>
        <span class="orbit-ap" style="color:#ddd;">—</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:#44dd88;font-size:10px;">Pe</span>
        <span class="orbit-pe" style="color:#ddd;">—</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);font-size:10px;">T→Ap</span>
        <span class="orbit-tta" style="color:#ddd;">—</span>
      </div>
    `;
    // Orbit readouts used to occupy the right side while showing little useful
    // information during launch. Keep the data hooks for telemetry, but leave
    // that part of the flight view open for the planet and navball.
    this.orbitPanel = orbitPanel;
    this.orbitAp = orbitPanel.querySelector('.orbit-ap')!;
    this.orbitPe = orbitPanel.querySelector('.orbit-pe')!;
    this.orbitTta = orbitPanel.querySelector('.orbit-tta')!;
    this.orbitEcc = orbitPanel.querySelector('.orbit-ecc')!;

    // Navball (bottom-right)
    const navballContainer = document.createElement('div');
    navballContainer.classList.add('hud-fade-up', 'flight-navball');
    navballContainer.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;';
    const canvas = document.createElement('canvas');
    canvas.width = 150;
    canvas.height = 150;
    canvas.style.cssText = 'width:150px;height:150px;border-radius:75px;opacity:0.85;';
    navballContainer.appendChild(canvas);
    this.root.appendChild(navballContainer);
    this.navballCanvas = canvas;
    this.navballCtx = canvas.getContext('2d')!;

    const fuelRight = document.createElement('div');
    fuelRight.classList.add('hud-panel-in-right');
    fuelRight.style.cssText = 'position:fixed;top:16px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:12px;background:rgba(8,10,24,0.8);border:1px solid rgba(200,152,56,0.2);border-radius:6px;padding:8px 12px;color:#ffaa44;';
    fuelRight.innerHTML = '<span style="color:rgba(244,245,242,0.5);">FUEL</span> <span class="fuel-r-kg">4500 kg</span><br><div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin-top:4px;"><div class="fuel-r-bar" style="width:100%;height:100%;background:#ffaa44;border-radius:3px;"></div></div>';
    this.root.appendChild(fuelRight);
    this._fuelRKg = fuelRight.querySelector('.fuel-r-kg') as HTMLElement;
    this._fuelRBar = fuelRight.querySelector('.fuel-r-bar') as HTMLElement;

    parent.appendChild(this.root);
  }

  setVisible(v: boolean): void {
    this.root.style.display = v ? '' : 'none';
  }

  setMass(kg: number): void {
    if (this.massVal) this.massVal.textContent = `${(kg / 1000).toFixed(1)}`;
  }

setFreeCamera(active: boolean): void {
    if (this.camModeEl) {
      this.camModeEl.textContent = active ? 'FREE' : '';
    }
  }

  setWarp(value: number): void {
    if (this.warpLabel) {
      this.warpLabel.textContent = `x${value}`;
      // Brief pulse on change
      this.warpLabel.classList.remove('warp-pulse');
      void this.warpLabel.offsetWidth; // reflow to restart animation
      this.warpLabel.classList.add('warp-pulse');
    }
  }

  setTwr(twr: number): void {
    if (!this.twrVal) return;
    this.twrVal.textContent = twr.toFixed(2);
    this.twrVal.style.color = twr >= 1.0 ? '#44ff88' : twr >= 0.5 ? '#ffcc44' : '#ff6644';
    const pct = Math.min(100, (twr / 2) * 100);
    this.twrFill.style.width = `${pct}%`;
    this.twrFill.style.background = twr >= 1.0 ? '#44ff88' : twr >= 0.5 ? '#ffcc44' : '#ff6644';
    // Pulse warning when insufficient thrust to lift off
    if (twr > 0 && twr < 1.0) this.twrVal.classList.add('twr-warn');
    else this.twrVal.classList.remove('twr-warn');
  }

  setSasMode(mode: 'off' | 'hold' | 'prograde' | 'retrograde'): void {
    if (!this.sasModeEl) return;
    const labels: Record<string, string> = {
      off: 'OFF', hold: 'HOLD', prograde: 'PRO', retrograde: 'RET',
    };
    this.sasModeEl.textContent = labels[mode]!;
    this.sasModeEl.style.color =
      mode === 'off' ? '#666' :
      mode === 'prograde' ? '#44ff88' :
      mode === 'retrograde' ? '#ff8844' : '#8888cc';
    if (mode !== 'off') this.sasModeEl.classList.add('sas-active');
    else this.sasModeEl.classList.remove('sas-active');
  }

  setDeltaV(dv: number): void {
    if (!this.dvVal) return;
    if (dv >= 10000) this.dvVal.textContent = `${(dv / 1000).toFixed(1)} km/s`;
    else this.dvVal.textContent = `${dv.toFixed(0)} m/s`;
    this.dvVal.style.color = dv > 3000 ? '#44ff88' : dv > 1000 ? '#ffcc44' : '#ff6644';
  }

  setOrbit(o: {
    apoapsis?: number; periapsis?: number;
    timeToAp?: number; timeToPe?: number;
    eccentricity?: number; period?: number; bound: boolean;
  }): void {
    if (!this.orbitPanel) return;
    if (!o.bound || o.apoapsis === undefined || o.periapsis === undefined) {
      this.orbitAp.textContent = '—';
      this.orbitPe.textContent = '—';
      this.orbitTta.textContent = '—';
      this.orbitEcc.textContent = 'suborbital';
      this.orbitPanel.style.borderColor = 'rgba(221,170,68,0.25)';
      return;
    }
    const fmt = (m: number) => {
      const km = m / 1000;
      return km > 1000 ? `${(km/1000).toFixed(1)} Mm` : `${km.toFixed(0)} km`;
    };
    const fmtT = (s?: number) => {
      if (s === undefined || !isFinite(s)) return '—';
      if (s > 86400) return `${(s/86400).toFixed(1)} d`;
      if (s > 3600) return `${(s/3600).toFixed(1)} h`;
      if (s > 60) return `${(s/60).toFixed(0)} min`;
      return `${s.toFixed(0)} s`;
    };
    this.orbitAp.textContent = fmt(o.apoapsis);
    this.orbitPe.textContent = fmt(o.periapsis);
    this.orbitTta.textContent = fmtT(o.timeToAp);
    this.orbitEcc.textContent = o.eccentricity !== undefined ? `e=${o.eccentricity.toFixed(2)}` : '—';
    this.orbitPanel.style.borderColor = 'rgba(68,136,204,0.4)';
  }

  setPaused(paused: boolean): void {
    this.paused = paused;
    if (paused) {
      this.autopilotPicker.hidden = true;
      this.pauseOverlay.style.display = 'flex';
      this.lifetime.frame(() => { if (this.paused) this.pauseOverlay.style.opacity = '1'; });
    } else {
      this.pauseOverlay.style.opacity = '0';
      this.lifetime.timeout(() => { if (!this.paused) this.pauseOverlay.style.display = 'none'; }, 230);
    }
  }

  setThrottle(throttle: number): void {
    const pct = Math.round(throttle * 100);
    this.throttlePct.textContent = `${pct}%`;
    this.throttleFill.style.width = `${pct}%`;
    this.throttleFill.style.background = pct > 80 ? '#ff6644' : '#4488ff';
  }

  setNavballData(
    rocketFwd: [number, number, number],
    velocityDir: [number, number, number],
    upDir: [number, number, number],
    orbitNormal?: [number, number, number],
    bodyDirs?: Array<{ name: string; dir: [number, number, number]; color: string }>
  ): void {
    const ctx = this.navballCtx;
    const cw = 140, ch = 140, cx = 70, cy = 70, R = 66;
    ctx.clearRect(0, 0, cw, ch);

    ctx.beginPath(); ctx.arc(cx, cy, R + 2, 0, Math.PI * 2);
    ctx.fillStyle = '#060810'; ctx.fill();

    const fwd: [number, number, number] = [rocketFwd[0], rocketFwd[1], rocketFwd[2]];
    const fwdLen = Math.sqrt(fwd[0]*fwd[0] + fwd[1]*fwd[1] + fwd[2]*fwd[2]) || 1;
    fwd[0] /= fwdLen; fwd[1] /= fwdLen; fwd[2] /= fwdLen;

    const dotFU = fwd[0]*upDir[0] + fwd[1]*upDir[1] + fwd[2]*upDir[2];
    let refUp: [number, number, number] = [
      upDir[0] - fwd[0] * dotFU,
      upDir[1] - fwd[1] * dotFU,
      upDir[2] - fwd[2] * dotFU,
    ];
    const refUpLen = Math.sqrt(refUp[0]*refUp[0] + refUp[1]*refUp[1] + refUp[2]*refUp[2]) || 1;
    refUp[0] /= refUpLen; refUp[1] /= refUpLen; refUp[2] /= refUpLen;

    const right: [number, number, number] = [
      fwd[1]*refUp[2] - fwd[2]*refUp[1],
      fwd[2]*refUp[0] - fwd[0]*refUp[2],
      fwd[0]*refUp[1] - fwd[1]*refUp[0],
    ];

    const project = (dir: [number, number, number]) => {
      const m = Math.sqrt(dir[0]*dir[0] + dir[1]*dir[1] + dir[2]*dir[2]) || 1;
      const dx = dir[0]/m, dy = dir[1]/m, dz = dir[2]/m;
      const lx = dx*right[0] + dy*right[1] + dz*right[2];
      const ly = dx*refUp[0] + dy*refUp[1] + dz*refUp[2];
      const lz = dx*fwd[0] + dy*fwd[1] + dz*fwd[2];
      const inFront = lz > 0;
      const d = lz > 0 ? R / (1 + lz) : R * 0.5;
      return { x: cx + lx * d, y: cy - ly * d, inFront, lx, ly, lz };
    };

    const r2 = R * R;
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    const upProj = project(upDir);
    const nadProj = project([-upDir[0], -upDir[1], -upDir[2]]);

    const skyGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    skyGrad.addColorStop(0, '#0a0a22');
    skyGrad.addColorStop(0.4, '#1a2a4a');
    skyGrad.addColorStop(1, '#224488');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

    if (nadProj.inFront) {
      const earthGrad = ctx.createRadialGradient(nadProj.x, nadProj.y, 0, nadProj.x, nadProj.y, R * 1.2);
      earthGrad.addColorStop(0, '#6a4a2a');
      earthGrad.addColorStop(0.3, '#5a3a1a');
      earthGrad.addColorStop(0.7, '#3a2a12');
      earthGrad.addColorStop(1, 'rgba(10,10,40,0)');
      ctx.fillStyle = earthGrad;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
    }

    for (let deg = -80; deg <= 80; deg += 10) {
      const rad = deg * Math.PI / 180;
      const cosP = Math.cos(rad);
      const sinP = Math.sin(rad);
      const dir: [number, number, number] = [
        fwd[0]*cosP + refUp[0]*sinP,
        fwd[1]*cosP + refUp[1]*sinP,
        fwd[2]*cosP + refUp[2]*sinP,
      ];
      const p = project(dir);
      if (!p.inFront) continue;
      if ((p.x-cx)*(p.x-cx) + (p.y-cy)*(p.y-cy) > r2) continue;
      const lineW = deg === 0 ? 26 : deg % 20 === 0 ? 18 : 10;
      ctx.beginPath();
      ctx.moveTo(cx - lineW * (1 - Math.abs(sinP) * 0.3), p.y);
      ctx.lineTo(cx + lineW * (1 - Math.abs(sinP) * 0.3), p.y);
      ctx.strokeStyle = deg === 0 ? '#FFCC44' : 'rgba(255,255,255,0.2)';
      ctx.lineWidth = deg === 0 ? 1.5 : 0.6;
      ctx.stroke();
      if (deg % 20 === 0) {
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.font = '7px sans-serif';
        ctx.fillText(`${Math.abs(deg)}`, cx + lineW + 3, p.y + 2);
      }
    }

    for (let h = 0; h < 360; h += 45) {
      const hr = h * Math.PI / 180;
      const hx = right[0]*Math.cos(hr) + refUp[0]*Math.sin(hr);
      const hy = right[1]*Math.cos(hr) + refUp[1]*Math.sin(hr);
      const hz = right[2]*Math.cos(hr) + refUp[2]*Math.sin(hr);
      const hDir: [number, number, number] = [hx - fwd[0]*dotFU, hy - fwd[1]*dotFU, hz - fwd[2]*dotFU];
      const hm = Math.sqrt(hDir[0]*hDir[0] + hDir[1]*hDir[1] + hDir[2]*hDir[2]) || 1;
      const hp = project([hDir[0]/hm, hDir[1]/hm, hDir[2]/hm]);
      if (hp.inFront) {
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.font = '6px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${h}°`, hp.x, hp.y + 2);
        ctx.textAlign = 'start';
      }
    }

    const drawMarker = (dir: [number, number, number], drawFn: (p: { x: number; y: number }) => void) => {
      const p = project(dir);
      if (p.inFront) drawFn(p);
    };

    drawMarker(velocityDir, (p) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#44FF44'; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1.5; ctx.stroke();
    });

    drawMarker([-velocityDir[0], -velocityDir[1], -velocityDir[2]], (p) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(68,255,68,0.5)'; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(p.x - 3, p.y - 3); ctx.lineTo(p.x + 3, p.y + 3);
      ctx.moveTo(p.x + 3, p.y - 3); ctx.lineTo(p.x - 3, p.y + 3);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1; ctx.stroke();
    });

    drawMarker(upDir, (p) => {
      ctx.beginPath(); ctx.moveTo(p.x, p.y - 6); ctx.lineTo(p.x - 4, p.y + 3); ctx.lineTo(p.x + 4, p.y + 3); ctx.closePath();
      ctx.fillStyle = '#4488FF'; ctx.fill();
    });

    drawMarker([-upDir[0], -upDir[1], -upDir[2]], (p) => {
      ctx.beginPath(); ctx.moveTo(p.x, p.y + 6); ctx.lineTo(p.x - 4, p.y - 3); ctx.lineTo(p.x + 4, p.y - 3); ctx.closePath();
      ctx.fillStyle = '#CC8844'; ctx.fill();
    });

    ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#FFAA44'; ctx.fill();

    ctx.restore();

    ctx.beginPath(); ctx.arc(cx, cy, R + 1, 0, Math.PI * 2);
    ctx.strokeStyle = '#334466'; ctx.lineWidth = 2;
    ctx.stroke();

    for (let deg = 0; deg < 360; deg += 45) {
      const rad = deg * Math.PI / 180;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(rad) * (R-7), cy + Math.sin(rad) * (R-7));
      ctx.lineTo(cx + Math.cos(rad) * (R+2), cy + Math.sin(rad) * (R+2));
      ctx.strokeStyle = '#4a6a8a'; ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  update(state: FlightState, system: System, heat: number = 0, throttle: number = 0, telemetry?: Pick<FlightTelemetry, 'speed' | 'verticalSpeed' | 'altitude'>): void {
    const reference = system.bodyByName('sun') ? getReferenceBody(state.position, system) : system.bodies[0];
    const values = telemetry ?? flightTelemetry(state.position, state.velocity, reference, false);
    const speed = values.speed;
    const nearestAlt = values.altitude;

    const heatPct = Math.min(100, (heat / 300000) * 100);

    this.speedVal.textContent = speed > 1000 ? (speed/1000).toFixed(1)+'k' : speed.toFixed(1);
    this.speedVal.style.color = speed > 3000 ? '#ff6644' : speed > 1000 ? '#ffaa44' : '#ddd';
    const nearestAltKm = nearestAlt / 1000; this.altVal.textContent = nearestAlt > 10000 ? nearestAltKm.toFixed(1)+'k' : nearestAlt.toFixed(0);
    // Vertical speed
    const vs = values.verticalSpeed;
    this.vsVal.textContent = vs > 0 ? '+' + vs.toFixed(0) : vs.toFixed(0);
    this.vsVal.style.color = vs > 0 ? '#88ff88' : vs < 0 ? '#ff6644' : '#88ccff';
    const fuelKg = state.rocket.totalFuelMass();
    if (fuelKg > 1000) {
      this.fuelVal.textContent = (fuelKg / 1000).toFixed(1);
      (this.fuelVal.nextElementSibling as HTMLElement).textContent = 't';
    } else {
      this.fuelVal.textContent = fuelKg.toFixed(0);
      (this.fuelVal.nextElementSibling as HTMLElement).textContent = 'kg';
    }
    const tPct = Math.round(throttle * 100);
    this.throttlePct.textContent = `${tPct}%`;
    // Right fuel panel
    const fKg = state.rocket.totalFuelMass();
    const maxF = state.rocket.assembly.totalFuelCapacity();
    if (this._fuelRKg) this._fuelRKg.textContent = fKg > 1000 ? `${(fKg/1000).toFixed(1)} t` : `${fKg.toFixed(0)} kg`;
    if (this._fuelRBar) this._fuelRBar.style.width = `${maxF > 0 ? (fKg/maxF)*100 : 0}%`;
    this.throttleFill.style.width = `${tPct}%`;
    this.throttleFill.style.background = tPct > 80 ? '#ff4444' : tPct > 40 ? '#ffaa00' : '#4488ff';
    this.heatPct.textContent = `${heatPct.toFixed(0)}%`;
    this.heatPct.style.color = heatPct > 70 ? '#FF3333' : heatPct > 40 ? '#FFCC00' : '#44FF44';
    this.heatFill.style.width = `${heatPct}%`;
    this.heatFill.style.background = heatPct > 70 ? '#FF3333' : heatPct > 40 ? '#FFCC00' : '#44FF44';
  }

  setLandingStatus(text: string, active: boolean): void {
    this.landingStatusEl.textContent = text;
    this.landingStatusEl.style.borderColor = active ? '#7fafbc' : '#40515d';
    const isHint = /^(Click Launch|W\/S and A\/D|Ready to launch)/.test(text);
    const visible = !isHint && (active || /^(GROUND|LANDING|LOW THRUST|Landed|Impact|Insufficient)/.test(text));
    this.landingStatusEl.style.opacity = visible ? '1' : '0';
    this.landingStatusEl.style.visibility = visible ? 'visible' : 'hidden';
  }

  unmount(): void {
    this.lifetime.dispose();
    this.root.remove();
    this.pauseOverlay.remove();
  }
}
