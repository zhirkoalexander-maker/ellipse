import type { FlightState } from './FlightState';
import type { System } from '../physics/System';

export class HUD {
  private root: HTMLDivElement;
  private speedVal!: HTMLSpanElement;
  private fuelVal!: HTMLSpanElement;
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
  onAction: ((action: string) => void) | null = null;

  constructor() {
    this.root = document.createElement('div');
    this.root.style.cssText = 'position:fixed;inset:0;z-index:100;pointer-events:none;';

    this.pauseOverlay = document.createElement('div');
    this.pauseOverlay.style.cssText = 'position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;';
    this.pauseOverlay.innerHTML = `
      <div style="width:280px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button class="btn btn--primary pause-btn" data-action="resume" style="width:100%;padding:14px;font-size:16px;text-align:center;">▶ RESUME</button>
        <button class="btn btn--secondary pause-btn" data-action="menu" style="width:100%;padding:14px;font-size:16px;text-align:center;">MENU</button>
        <button class="btn btn--danger pause-btn" data-action="restart" style="width:100%;padding:14px;font-size:16px;text-align:center;">🔄 RESTART</button>
      </div>
    `;
    document.body.appendChild(this.pauseOverlay);
    this.pauseOverlay.querySelectorAll('.pause-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.onAction) this.onAction((e.target as HTMLElement).dataset.action!);
      });
    });
  }

  mount(parent: HTMLElement = document.body): void {
    // Compact top-right panel
    const panel = document.createElement('div');
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
      <div style="display:flex;gap:4px;margin-top:4px;">
        <button data-action="stage" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(200,152,56,0.2);color:#c89838;border:1px solid rgba(200,152,56,0.3);border-radius:3px;cursor:pointer;">STAGE</button>
        <button data-action="chute" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(100,120,200,0.2);color:#88aacc;border:1px solid rgba(100,120,200,0.3);border-radius:3px;cursor:pointer;">CHUTE</button>
        <button data-action="map" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(100,200,100,0.2);color:#88cc88;border:1px solid rgba(100,200,100,0.3);border-radius:3px;cursor:pointer;">MAP</button>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">WARP</span>
        <span class="warp-val" style="color:#c89838;font-size:10px;">x1</span>
      </div>
    `;
    this.root.appendChild(panel);

    this.speedVal = panel.querySelector('.speed-val')!;
    this.fuelVal = panel.querySelector('.fuel-val')!;
    this.altVal = panel.querySelector('.alt-val')!;
    this.massVal = panel.querySelector('.mass-val')!;
    this.heatFill = panel.querySelector('.heat-fill')!;
    this.heatPct = panel.querySelector('.heat-pct')!;
    this.throttleFill = panel.querySelector('.throt-fill')!;
    this.throttlePct = panel.querySelector('.throt-pct')!;
    this.warpLabel = panel.querySelector('.warp-val')!;

    panel.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('[data-action]') as HTMLElement | null;
      if (btn && this.onAction) this.onAction(btn.dataset.action!);
    });

    // Free cam label (bottom)
    this.camModeEl = document.createElement('div');
    this.camModeEl.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;';
    this.root.appendChild(this.camModeEl);

    // Navball (bottom-right)
    const navballContainer = document.createElement('div');
    navballContainer.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;';
    const canvas = document.createElement('canvas');
    canvas.width = 140;
    canvas.height = 140;
    canvas.style.cssText = 'width:140px;height:140px;border-radius:70px;opacity:0.85;';
    navballContainer.appendChild(canvas);
    this.root.appendChild(navballContainer);
    this.navballCanvas = canvas;
    this.navballCtx = canvas.getContext('2d')!;

    const fuelRight = document.createElement('div');
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
    if (this.warpLabel) this.warpLabel.textContent = `x${value}`;
  }

  setPaused(paused: boolean): void {
    this.pauseOverlay.style.display = paused ? 'flex' : 'none';
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

  update(state: FlightState, system: System, heat: number = 0, throttle: number = 0): void {
    const speed = Math.sqrt(
      state.velocity[0] ** 2 + state.velocity[1] ** 2 + state.velocity[2] ** 2
    );
    let nearestAlt = Infinity;
    for (const body of system.bodies) {
      if (body.mass <= 0) continue;
      const dx = state.position[0] - body.position[0];
      const dy = state.position[1] - body.position[1];
      const dz = state.position[2] - body.position[2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const r = (body as any).getSurfaceRadiusAt?.(state.position) ?? (body as any).radius ?? 0;
      const alt = d - r;
      if (alt < nearestAlt) nearestAlt = alt;
    }

    const heatPct = Math.min(100, (heat / 300000) * 100);

    this.speedVal.textContent = speed > 1000 ? (speed/1000).toFixed(1)+'k' : speed.toFixed(1);
    this.speedVal.style.color = speed > 1000 ? '#ffaa44' : '#ddd';
    const nearestAltKm = nearestAlt / 1000; this.altVal.textContent = nearestAlt > 10000 ? nearestAltKm.toFixed(1)+'k' : nearestAlt.toFixed(0);
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
    this.throttleFill.style.background = tPct > 80 ? '#ff6644' : '#4488ff';
    this.heatPct.textContent = `${heatPct.toFixed(0)}%`;
    this.heatPct.style.color = heatPct > 70 ? '#FF3333' : heatPct > 40 ? '#FFCC00' : '#44FF44';
    this.heatFill.style.width = `${heatPct}%`;
    this.heatFill.style.background = heatPct > 70 ? '#FF3333' : heatPct > 40 ? '#FFCC00' : '#44FF44';
  }

  unmount(): void {
    this.root.remove();
    this.pauseOverlay.remove();
  }
}