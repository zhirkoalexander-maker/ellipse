import type { FlightState } from './FlightState';
import type { System } from '../physics/System';
import { getReferenceBody } from '../physics/SoiResolver';
import { findFirstEngine } from './Thrust';

export class HUD {
  private root: HTMLDivElement;
  private speedVal!: HTMLSpanElement;
  private speedUnit!: HTMLSpanElement;
  private vsVal!: HTMLSpanElement;
  private altVal!: HTMLSpanElement;
  private altUnit!: HTMLSpanElement;
  private angleVal!: HTMLSpanElement;
  private fuelFill!: HTMLSpanElement;
  private fuelPct!: HTMLSpanElement;
  private throtFill!: HTMLSpanElement;
  private throtPct!: HTMLSpanElement;
  private heatFill!: HTMLSpanElement;
  private heatPct!: HTMLSpanElement;
  private gforceVal!: HTMLSpanElement;
  private stageVal!: HTMLSpanElement;
  private apeVal!: HTMLSpanElement;
  private peVal!: HTMLSpanElement;
  private twrVal!: HTMLSpanElement;
  private ttaVal!: HTMLSpanElement;
  private ttpVal!: HTMLSpanElement;
  private timeVal!: HTMLSpanElement;
  private dvVal!: HTMLSpanElement;
  private ispVal!: HTMLSpanElement;
  private burnVal!: HTMLSpanElement;
  private recVal!: HTMLSpanElement;
  private pauseOverlay!: HTMLDivElement;
  private navballCanvas!: HTMLCanvasElement;
  private navballCtx!: CanvasRenderingContext2D;
  onAction: ((action: string) => void) | null = null;

  constructor() {
    this.root = document.createElement('div');
    this.root.className = 'hud-panel';
    this.root.style.cssText = 'position:fixed;top:16px;left:16px;z-index:100;min-width:180px;';

    // Pause menu overlay (centered)
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

    // Bind pause menu buttons
    this.pauseOverlay.querySelectorAll('.pause-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.onAction) this.onAction((e.target as HTMLElement).dataset.action!);
      });
    });
  }

  mount(parent: HTMLElement = document.body): void {
    this.root.innerHTML = `
      <div class="hud-row"><span class="hud-label">Velocity</span><span class="hud-value"><span class="speed-val">0</span> <span class="speed-unit" style="font-size:11px;color:var(--text-muted);">m/s</span></span></div>
      <div class="hud-row"><span class="hud-label">V/S</span><span class="hud-value"><span class="vs-val" style="color:#44FF44;">0</span> <span style="font-size:11px;color:var(--text-muted);">m/s</span></span></div>
      <div class="hud-row"><span class="hud-label">Altitude</span><span class="hud-value"><span class="alt-val">0</span> <span class="alt-unit" style="font-size:11px;color:var(--text-muted);">m</span></span></div>
      <div class="hud-row"><span class="hud-label">Angle</span><span class="hud-value"><span class="angle-val">0</span><span style="font-size:11px;color:var(--text-muted);">°</span></span></div>
      <div class="hud-row"><span class="hud-label">G-Force</span><span class="hud-value"><span class="gforce-val" style="color:#88CCFF;">1.0</span><span style="font-size:11px;color:var(--text-muted);">G</span></span></div>
      <div class="hud-row"><span class="hud-label">Warp</span><span class="hud-value"><span class="warp-val" style="color:var(--accent-gold);">x1</span></span></div>
      <div class="separator"></div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1);">
        <div class="hud-row"><span class="hud-label">Fuel</span><span class="text-data-sm fuel-pct">0%</span></div>
        <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--fuel fuel-fill" style="width:0%;"></span></span></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1);">
        <div class="hud-row"><span class="hud-label">Heat</span><span class="text-data-sm heat-pct">0%</span></div>
        <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--heat heat-fill" style="width:0%;"></span></span></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1);">
        <div class="hud-row"><span class="hud-label">Throttle</span><span class="text-data-sm throt-pct">0%</span></div>
        <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--throttle throt-fill" style="width:0%;"></span></span></div>
      </div>
      <div class="separator"></div>
      <div class="hud-row"><span class="hud-label">TWR</span><span class="hud-value twr-val" style="color:#88CCFF;">—</span></div>
      <div class="hud-row"><span class="hud-label">Δv</span><span class="hud-value dv-val" style="font-size:9px;color:#88CCFF;">—</span></div>
      <div class="hud-row"><span class="hud-label">SOI</span><span class="hud-value soi-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Isp</span><span class="hud-value isp-val" style="font-size:9px;color:#88CCFF;">—</span></div>
      <div class="hud-row"><span class="hud-label">Burn</span><span class="hud-value burn-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row gforce-row"><span class="hud-label">G</span><span class="hud-value gforce-val" style="color:#88CCFF;">1.00</span></div>
      <div class="hud-row"><span class="hud-label">Stage</span><span class="hud-value stage-val" style="color:var(--accent-gold);">1</span></div>
      <div class="hud-row"><span class="hud-label">Time</span><span class="hud-value time-val" style="font-size:9px;color:#aaaacc;">T+00:00</span></div>
      <div class="hud-row"><span class="hud-label">SAS</span><span class="hud-value sas-val" style="font-size:9px;color:#666688;">OFF</span></div>
      <div class="hud-row"><span class="hud-label">Ap/Pe</span><span class="hud-value" style="font-size:9px;"><span class="ape-val" style="color:#FF8844;">—</span> / <span class="pe-val" style="color:#44DD88;">—</span></span></div>
      <div class="hud-row"><span class="hud-label">Ecc</span><span class="hud-value ecc-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Period</span><span class="hud-value period-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Record</span><span class="hud-value rec-val" style="font-size:9px;color:#EACD9E;">—</span></div>
      <div class="hud-row"><span class="hud-label">Q</span><span class="hud-value q-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Impact</span><span class="hud-value impact-val" style="font-size:9px;color:#CCCC44;">—</span></div>
      <div class="hud-row"><span class="hud-label">Debris</span><span class="hud-value debris-val" style="font-size:9px;color:#FF8844;">0</span></div>
      <div class="hud-row"><span class="hud-label">T to Ap</span><span class="hud-value tta-val" style="font-size:9px;color:#FF8844;">—</span></div>
      <div class="hud-row"><span class="hud-label">T to Pe</span><span class="hud-value ttp-val" style="font-size:9px;color:#44DD88;">—</span></div>
      <div class="hud-row"><span class="hud-label">Heading</span><span class="hud-value hdg-val" style="font-size:9px;color:#88CCFF;">—</span></div>
      <div class="btn-bar">
        <button class="btn btn--action" data-action="stage">STAGE</button>
        <button class="btn btn--action" data-action="parachute">CHUTE</button>
        <button class="btn btn--action" data-action="map">MAP</button>
      </div>
      <div style="color:rgba(244,245,242,0.35);font-size:9px;letter-spacing:0.05em;">W/S Throttle | ↑↓ Pitch | ←→ Yaw | Space Stage | Esc Pause</div>
      <div style="color:rgba(244,245,242,0.2);font-size:8px;letter-spacing:0.03em;margin-top:4px;">🖱 Drag orbit | Shift+←→ orbit | Scroll zoom | M Map</div>
    `;
    parent.appendChild(this.root);

    this.speedVal = this.root.querySelector('.speed-val')!;
    this.speedUnit = this.root.querySelector('.speed-unit')!;
    this.vsVal = this.root.querySelector('.vs-val')!;
    this.altVal = this.root.querySelector('.alt-val')!;
    this.altUnit = this.root.querySelector('.alt-unit')!;
    this.angleVal = this.root.querySelector('.angle-val')!;
    this.fuelFill = this.root.querySelector('.fuel-fill')!;
    this.fuelPct = this.root.querySelector('.fuel-pct')!;
    this.throtFill = this.root.querySelector('.throt-fill')!;
    this.throtPct = this.root.querySelector('.throt-pct')!;
    this.heatFill = this.root.querySelector('.heat-fill')!;
    this.heatPct = this.root.querySelector('.heat-pct')!;
    this.gforceVal = this.root.querySelector('.gforce-val')!;
    this.stageVal = this.root.querySelector('.stage-val')!;
    this.apeVal = this.root.querySelector('.ape-val')!;
    this.peVal = this.root.querySelector('.pe-val')!;
    this.twrVal = this.root.querySelector('.twr-val')!;
    this.ttaVal = this.root.querySelector('.tta-val')!;
    this.ttpVal = this.root.querySelector('.ttp-val')!;
    this.timeVal = this.root.querySelector('.time-val')!;
    this.dvVal = this.root.querySelector('.dv-val')!;
    this.ispVal = this.root.querySelector('.isp-val')!;
    this.burnVal = this.root.querySelector('.burn-val')!;
    this.recVal = this.root.querySelector('.rec-val')!;
    this.root.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('[data-action]') as HTMLElement | null;
      if (btn && this.onAction) this.onAction(btn.dataset.action!);
    });

    const navballContainer = document.createElement('div');
    navballContainer.className = 'navball-container';
    navballContainer.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:100;';
    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 160;
    canvas.style.cssText = 'width:160px;height:160px;border-radius:80px;opacity:0.85;';
    navballContainer.appendChild(canvas);
    parent.appendChild(navballContainer);
    this.navballCanvas = canvas;
    this.navballCtx = canvas.getContext('2d')!;
  }

  setWarpLabel(label: string): void {
    const el = this.root.querySelector('.warp-val');
    if (el) el.textContent = label;
  }

  setDeltaV(dv: number): void {
    this.dvVal.textContent = dv >= 0 ? `${dv.toFixed(0)} m/s` : '—';
    this.dvVal.style.color = dv > 500 ? '#44FF44' : dv > 100 ? '#FFAA44' : '#FF4444';
  }

  setIsp(isp: number): void {
    this.ispVal.textContent = isp > 0 ? `${isp.toFixed(0)}s` : '—';
  }

  setRecord(text: string): void {
    this.recVal.textContent = text;
  }

  setSAS(mode: 'off' | 'hold' | 'prograde' | 'retrograde'): void {
    const el = this.root.querySelector('.sas-val');
    if (el) {
      if (mode === 'off') {
        el.textContent = 'OFF';
        (el as HTMLElement).style.color = '#666688';
      } else if (mode === 'prograde') {
        el.textContent = 'PRG';
        (el as HTMLElement).style.color = '#44FF44';
      } else if (mode === 'retrograde') {
        el.textContent = 'RET';
        (el as HTMLElement).style.color = '#FF6644';
      } else {
        el.textContent = 'HLD';
        (el as HTMLElement).style.color = '#44AAFF';
      }
    }
  }

  setVisible(v: boolean): void {
    this.root.style.display = v ? '' : 'none';
  }

  setGForce(g: number): void {
    this.gforceVal.textContent = g.toFixed(2);
    if (g > 5) this.gforceVal.style.color = '#FF4444';
    else if (g > 3) this.gforceVal.style.color = '#FFAA44';
    else this.gforceVal.style.color = '#88CCFF';
  }

  setGForceEnabled(enabled: boolean): void {
    (this.root.querySelector('.gforce-row') as HTMLElement)?.style.setProperty('display', enabled ? '' : 'none');
  }

  setDebris(count: number): void {
    const el = this.root.querySelector('.debris-val');
    if (el) el.textContent = count.toString();
  }

  setHeading(heading: number): void {
    const el = this.root.querySelector('.hdg-val');
    if (el) el.textContent = `${heading.toFixed(0)}°`;
  }

  setTWR(twr: number): void {
    this.twrVal.textContent = twr.toFixed(2);
    this.twrVal.style.color = twr > 1.1 ? '#44CC88' : twr > 0.8 ? '#FFAA44' : '#FF4444';
  }

  setPaused(paused: boolean): void {
    this.pauseOverlay.style.display = paused ? 'flex' : 'none';
    // Update zoom label visibility when paused
    const warpEl = this.root.querySelector('.warp-val') as HTMLElement | null;
    if (warpEl) warpEl.style.opacity = paused ? '0.5' : '1';
  }

  setNavballData(
    rocketFwd: [number, number, number],
    velocityDir: [number, number, number],
    upDir: [number, number, number],
    orbitNormal?: [number, number, number],
    bodyDirs?: Array<{ name: string; dir: [number, number, number]; color: string }>
  ): void {
    const ctx = this.navballCtx;
    const cw = 160, ch = 160, cx = 80, cy = 80, R = 75;
    ctx.clearRect(0, 0, cw, ch);

    ctx.beginPath(); ctx.arc(cx, cy, R + 2, 0, Math.PI * 2);
    ctx.fillStyle = '#0a0a1a'; ctx.fill();

    const dotUp = upDir[0] * rocketFwd[0] + upDir[1] * rocketFwd[1] + upDir[2] * rocketFwd[2];
    const horizonY = dotUp * R;

    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = '#2244aa';
    ctx.fillRect(cx - R, cy - R - horizonY, R * 2, R + horizonY);
    ctx.fillStyle = '#885522';
    ctx.fillRect(cx - R, cy - horizonY, R * 2, R + horizonY);

    for (let deg = -80; deg <= 80; deg += 10) {
      const y = cy - Math.sin(deg * Math.PI / 180) * R;
      ctx.beginPath();
      const lineW = deg === 0 ? 30 : deg % 20 === 0 ? 22 : 14;
      ctx.moveTo(cx - lineW, y);
      ctx.lineTo(cx + lineW, y);
      ctx.strokeStyle = deg === 0 ? '#FFCC44' : 'rgba(255,255,255,0.3)';
      ctx.lineWidth = deg === 0 ? 1.5 : 0.7;
      ctx.stroke();
      if (deg % 20 === 0) {
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '8px sans-serif';
        ctx.fillText(`${Math.abs(deg)}`, cx + lineW + 3, y + 3);
      }
    }

    ctx.beginPath();
    ctx.moveTo(cx - R, cy - horizonY);
    ctx.lineTo(cx + R, cy - horizonY);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const project = (dir: [number, number, number]) => {
      const m = Math.sqrt(dir[0]**2 + dir[1]**2 + dir[2]**2) || 1;
      const dx = dir[0] / m, dy = dir[1] / m, dz = dir[2] / m;
      const fwdD = dx * rocketFwd[0] + dy * rocketFwd[1] + dz * rocketFwd[2];
      const projX = dx - rocketFwd[0] * fwdD;
      const projY = dy - rocketFwd[1] * fwdD;
      const plen = Math.sqrt(projX * projX + projY * projY) || 1;
      return { x: cx + (projX / plen) * R * 0.78, y: cy - (projY / plen) * R * 0.78, inFront: fwdD > 0 };
    };

    const pg = project(velocityDir);
    if (pg.inFront) {
      ctx.beginPath(); ctx.arc(pg.x, pg.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#44FF44'; ctx.fill();
      ctx.beginPath(); ctx.arc(pg.x, pg.y, 9, 0, Math.PI * 2);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = '#44FF44'; ctx.font = 'bold 8px sans-serif';
      ctx.fillText('P', pg.x + 8, pg.y + 3);
    }

    const rgVel: [number, number, number] = [-velocityDir[0], -velocityDir[1], -velocityDir[2]];
    const rg = project(rgVel);
    if (rg.inFront) {
      ctx.beginPath(); ctx.arc(rg.x, rg.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(68,255,68,0.6)'; ctx.fill();
      ctx.beginPath(); ctx.arc(rg.x, rg.y, 9, 0, Math.PI * 2);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(rg.x - 5, rg.y - 5); ctx.lineTo(rg.x + 5, rg.y + 5);
      ctx.moveTo(rg.x + 5, rg.y - 5); ctx.lineTo(rg.x - 5, rg.y + 5);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1.5; ctx.stroke();
    }

    const zn = project(upDir);
    if (zn.inFront) {
      ctx.beginPath(); ctx.moveTo(zn.x, zn.y - 8); ctx.lineTo(zn.x - 6, zn.y + 4); ctx.lineTo(zn.x + 6, zn.y + 4); ctx.closePath();
      ctx.fillStyle = '#4488FF'; ctx.fill();
    }

    const nd: [number, number, number] = [-upDir[0], -upDir[1], -upDir[2]];
    const ndp = project(nd);
    if (ndp.inFront) {
      ctx.beginPath(); ctx.moveTo(ndp.x, ndp.y + 8); ctx.lineTo(ndp.x - 6, ndp.y - 4); ctx.lineTo(ndp.x + 6, ndp.y - 4); ctx.closePath();
      ctx.fillStyle = '#4488FF'; ctx.fill();
    }

    ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#FFAA44'; ctx.fill();

    // Orbit normal marker (triangle)
    if (orbitNormal) {
      const onProj = project(orbitNormal);
      if (onProj.inFront) {
        ctx.beginPath();
        ctx.moveTo(onProj.x, onProj.y - 7);
        ctx.lineTo(onProj.x - 5, onProj.y + 5);
        ctx.lineTo(onProj.x + 5, onProj.y + 5);
        ctx.closePath();
        ctx.fillStyle = '#CC88FF';
        ctx.fill();
      }
    }

    // Planet direction dots on navball
    if (bodyDirs) {
      for (const bd of bodyDirs) {
        const p = project(bd.dir);
        if (p.inFront) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = bd.color + 'aa';
          ctx.fill();
        }
      }
    }

    ctx.restore();

    ctx.beginPath(); ctx.arc(cx, cy, R + 1, 0, Math.PI * 2);
    ctx.strokeStyle = '#334466'; ctx.lineWidth = 2;
    ctx.stroke();
  }

  update(state: FlightState, system: System, heat: number = 0, stage: number = 1, apoapsis?: number, periapsis?: number, timeToAp?: number, timeToPe?: number, missionTime?: number, eccentricity?: number, period?: number): void {
    const speed = Math.sqrt(
      state.velocity[0] ** 2 + state.velocity[1] ** 2 + state.velocity[2] ** 2
    );
    let nearestBody: any = null;
    let nearestAlt = Infinity;
    let ndx = 0, ndy = 0, ndz = 0;
    for (const body of system.bodies) {
      if (body.mass <= 0) continue;
      const dx = state.position[0] - body.position[0];
      const dy = state.position[1] - body.position[1];
      const dz = state.position[2] - body.position[2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const r = (body as any).radius ?? 0;
      const surfaceR = (body as any).getSurfaceRadiusAt?.(state.position) ?? r;
      const alt = d - surfaceR;
      if (alt < nearestAlt) {
        nearestAlt = alt;
        nearestBody = body;
        ndx = dx; ndy = dy; ndz = dz;
      }
    }
    const horiz = Math.sqrt(state.velocity[0] ** 2 + state.velocity[2] ** 2);
    const angle = Math.atan2(horiz, Math.abs(state.velocity[1])) * 180 / Math.PI;

    const maxFuelMass = state.rocket.assembly.totalFuelCapacity();
    const fuelPct = maxFuelMass > 0
      ? (state.rocket.totalFuelMass() / maxFuelMass) * 100
      : 0;

    // Heat: clamp to 0-100% (100000 = 100% critical)
    const heatPct = Math.min(100, (heat / 100000) * 100);

    // Vertical speed relative to nearest body
    const dBody = Math.sqrt(ndx * ndx + ndy * ndy + ndz * ndz) || 1;
    const udx = ndx / dBody, udy = ndy / dBody, udz = ndz / dBody;
    const vertSpeed = state.velocity[0] * udx + state.velocity[1] * udy + state.velocity[2] * udz;
    this.vsVal.textContent = vertSpeed.toFixed(1);
    this.vsVal.style.color = vertSpeed < -5 ? '#FF4444' : vertSpeed > 5 ? '#44FF44' : '#CCCC44';

    this.speedVal.textContent = speed.toFixed(1);
    if (nearestAlt > 1000) {
      this.altVal.textContent = (nearestAlt / 1000).toFixed(2);
      this.altUnit.textContent = 'km';
    } else {
      this.altVal.textContent = nearestAlt.toFixed(0);
      this.altUnit.textContent = 'm';
    }
    this.angleVal.textContent = angle.toFixed(0);
    this.fuelPct.textContent = `${fuelPct.toFixed(0)}%`;
    this.fuelFill.style.width = `${Math.min(100, fuelPct)}%`;
    this.throtPct.textContent = `${(state.throttle * 100).toFixed(0)}%`;
    this.throtFill.style.width = `${state.throttle * 100}%`;
    this.throtFill.style.background = state.throttle > 0 && state.rocket.totalFuelMass() > 0 ? '#FF8844' : '#446688';
    this.heatPct.textContent = `${heatPct.toFixed(0)}%`;
    this.heatFill.style.width = `${heatPct}%`;
    this.heatFill.style.background = heatPct > 70 ? '#FF3333' : heatPct > 40 ? '#FFCC00' : '#44FF44';

    this.stageVal.textContent = `${stage}`;

    if (apoapsis !== undefined && isFinite(apoapsis)) {
      this.apeVal.textContent = apoapsis > 1000 ? `${(apoapsis / 1000).toFixed(1)}km` : `${apoapsis.toFixed(0)}m`;
    }
    if (periapsis !== undefined && isFinite(periapsis)) {
      this.peVal.textContent = periapsis > 1000 ? `${(periapsis / 1000).toFixed(1)}km` : `${periapsis.toFixed(0)}m`;
    }

    if (timeToAp !== undefined && isFinite(timeToAp)) {
      this.ttaVal.textContent = timeToAp > 60 ? `${(timeToAp / 60).toFixed(1)}m` : `${timeToAp.toFixed(0)}s`;
    } else {
      this.ttaVal.textContent = '—';
    }
    if (timeToPe !== undefined && isFinite(timeToPe)) {
      this.ttpVal.textContent = timeToPe > 60 ? `${(timeToPe / 60).toFixed(1)}m` : `${timeToPe.toFixed(0)}s`;
    } else {
      this.ttpVal.textContent = '—';
    }

    if (missionTime !== undefined) {
      const mins = Math.floor(missionTime / 60);
      const secs = Math.floor(missionTime % 60);
      this.timeVal.textContent = `T+${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Impact prediction when falling
    const impactEl = this.root.querySelector('.impact-val');
    if (impactEl) {
      const vertUp = -vertSpeed;
      if (vertUp > 1 && nearestAlt > 0 && nearestAlt < 500000) {
        const timeToImpact = nearestAlt / vertUp;
        if (timeToImpact < 600) {
          (impactEl as HTMLElement).textContent = `Impact T-${timeToImpact.toFixed(0)}s`;
          (impactEl as HTMLElement).style.color = timeToImpact < 30 ? '#FF4444' : timeToImpact < 120 ? '#FFAA44' : '#CCCC44';
        } else {
          (impactEl as HTMLElement).textContent = '—';
        }
      } else {
        (impactEl as HTMLElement).textContent = '—';
      }
    }

    // Eccentricity display
    const eccEl = this.root.querySelector('.ecc-val');
    if (eccEl && eccentricity !== undefined) {
      eccEl.textContent = eccentricity.toFixed(3);
    }

    // Orbital period
    const periodEl = this.root.querySelector('.period-val');
    if (periodEl && period !== undefined && isFinite(period)) {
      periodEl.textContent = period > 3600 ? `${(period / 3600).toFixed(1)}h` : period > 60 ? `${(period / 60).toFixed(1)}m` : `${period.toFixed(0)}s`;
    }

    // SOI body name
    const soiEl = this.root.querySelector('.soi-val');
    if (soiEl) {
      const refBody = getReferenceBody(state.position, system);
      soiEl.textContent = refBody ? refBody.name.toUpperCase() : '—';
    }

    // Burn time remaining
    if (this.burnVal) {
      const fuelMass = state.rocket.totalFuelMass();
      const throttle = state.throttle;
      if (fuelMass > 0.1 && throttle > 0.01) {
        const engBurn = findFirstEngine(state.rocket.assembly.roots);
        if (engBurn && engBurn.thrust) {
          const thrustN = engBurn.thrust * 1000 * throttle;
          const massFlow = thrustN / (320 * 9.80665); // kg/s
          const burnTime = fuelMass / massFlow;
          this.burnVal.textContent = burnTime > 60 ? `${(burnTime / 60).toFixed(1)}m` : `${burnTime.toFixed(0)}s`;
        }
      } else {
        this.burnVal.textContent = '—';
      }
    }
  }

  setQ(q: number): void {
    const el = this.root.querySelector('.q-val');
    if (el) {
      el.textContent = q > 1000 ? `${(q / 1000).toFixed(1)} kPa` : `${q.toFixed(0)} Pa`;
      (el as HTMLElement).style.color = q > 10000 ? '#FF4444' : q > 2000 ? '#FFAA44' : '#aaaacc';
    }
  }

  unmount(): void {
    this.root.remove();
    this.pauseOverlay.remove();
  }
}
