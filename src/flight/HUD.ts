import type { FlightState } from './FlightState';
import type { System } from '../physics/System';

export class HUD {
  private root: HTMLDivElement;
  private speedVal!: HTMLSpanElement;
  private altVal!: HTMLSpanElement;
  private massVal!: HTMLSpanElement;
  private heatFill!: HTMLSpanElement;
  private heatPct!: HTMLSpanElement;
  private pauseOverlay!: HTMLDivElement;
  private navballCanvas!: HTMLCanvasElement;
  private navballCtx!: CanvasRenderingContext2D;
  private camModeEl!: HTMLDivElement;
  private machEl!: HTMLDivElement;
  private stagePanel!: HTMLDivElement;
  private stageLabel!: HTMLDivElement;
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
      <div class="hud-primary">
        <div class="hud-speed"><span class="speed-val">0</span> <span style="font-size:11px;color:var(--text-muted);">m/s</span></div>
        <div class="hud-alt"><span class="alt-val">0</span> <span style="font-size:11px;color:var(--text-muted);">m</span></div>
      </div>
      <div class="hud-bottom">
        <div class="hud-row"><span class="hud-label">Mass</span><span class="mass-val" style="font-size:9px;color:#aaaacc;">—</span></div>
        <div style="display:flex;flex-direction:column;gap:var(--space-1);">
          <div class="hud-row"><span class="hud-label">Heat</span><span class="text-data-sm heat-pct">0%</span></div>
          <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--heat heat-fill" style="width:0%;"></span></span></div>
        </div>
        <div class="btn-bar">
          <button class="btn btn--action" data-action="stage">STAGE</button>
          <button class="btn btn--action" data-action="parachute">CHUTE</button>
          <button class="btn btn--action" data-action="map">MAP</button>
        </div>
      </div>
      <div class="hud-cam-mode" style="position:absolute;bottom:120px;right:20px;color:rgba(244,245,242,0.5);font-size:10px;font-family:monospace;pointer-events:none;"></div>
      <div class="hud-mach" style="position:fixed;top:20px;right:20px;color:rgba(244,245,242,0.7);font-size:13px;font-family:monospace;z-index:100;text-align:right;"></div>
    `;
    parent.appendChild(this.root);

    this.speedVal = this.root.querySelector('.speed-val')!;
    this.altVal = this.root.querySelector('.alt-val')!;
    this.massVal = this.root.querySelector('.mass-val')!;
    this.heatFill = this.root.querySelector('.heat-fill')!;
    this.heatPct = this.root.querySelector('.heat-pct')!;
    this.camModeEl = this.root.querySelector('.hud-cam-mode')!;
    this.machEl = this.root.querySelector('.hud-mach')!;
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

    // Stage panel
    const stagePanel = document.createElement('div');
    stagePanel.style.cssText = `
      position:fixed;left:16px;bottom:20px;z-index:100;
      width:150px;display:flex;flex-direction:column;gap:3px;
    `;
    this.stagePanel = stagePanel;

    const stageLabel = document.createElement('div');
    stageLabel.style.cssText = `
      color:var(--accent-gold);font-size:11px;font-weight:600;
      font-family:monospace;letter-spacing:0.05em;
      padding:4px 6px;border-bottom:1px solid rgba(200,152,56,0.2);
      margin-bottom:4px;
    `;
    stageLabel.textContent = 'STAGES';
    stagePanel.appendChild(stageLabel);
    this.stageLabel = stageLabel;

    parent.appendChild(stagePanel);
  }

  setWarpLabel(label: string): void {
  }

  setDeltaV(dv: number): void {
  }

  setIsp(isp: number): void {
  }

  setRecord(text: string): void {
  }

  setSAS(mode: 'off' | 'hold' | 'prograde' | 'retrograde'): void {
  }

  setVisible(v: boolean): void {
    this.root.style.display = v ? '' : 'none';
  }

  setGForce(g: number): void {
  }

  setGForceEnabled(enabled: boolean): void {
  }

  setDebris(count: number): void {
  }

  setHeading(heading: number): void {
  }

  setAoA(aoa: number): void {
  }

  setLatLon(lat: number, lon: number): void {
  }

  setMach(mach: number): void {
    if (!this.machEl) return;
    if (mach > 0.7) {
      this.machEl.textContent = `MACH ${mach.toFixed(2)}`;
      this.machEl.style.color = mach > 1.0 ? '#ff6644' : mach > 0.9 ? '#ffaa44' : '#aaaacc';
    } else {
      this.machEl.textContent = '';
    }
  }

  setMass(kg: number): void {
    if (this.massVal) this.massVal.textContent = `${(kg / 1000).toFixed(1)}t`;
  }

  setFreeCamera(active: boolean): void {
    if (this.camModeEl) {
      this.camModeEl.textContent = active ? 'FREE CAM' : '';
    }
  }

  setGravity(g: number): void {
  }

  setTWR(twr: number): void {
  }

  setPaused(paused: boolean): void {
    this.pauseOverlay.style.display = paused ? 'flex' : 'none';
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
    ctx.fillStyle = '#080812'; ctx.fill();

    // Build the rocket's local reference frame
    const fwd: [number, number, number] = [rocketFwd[0], rocketFwd[1], rocketFwd[2]];
    const fwdLen = Math.sqrt(fwd[0]*fwd[0] + fwd[1]*fwd[1] + fwd[2]*fwd[2]) || 1;
    fwd[0] /= fwdLen; fwd[1] /= fwdLen; fwd[2] /= fwdLen;

    // Reference up = component of upDir perpendicular to fwd
    const dotFU = fwd[0]*upDir[0] + fwd[1]*upDir[1] + fwd[2]*upDir[2];
    let refUp: [number, number, number] = [
      upDir[0] - fwd[0] * dotFU,
      upDir[1] - fwd[1] * dotFU,
      upDir[2] - fwd[2] * dotFU,
    ];
    const refUpLen = Math.sqrt(refUp[0]*refUp[0] + refUp[1]*refUp[1] + refUp[2]*refUp[2]) || 1;
    refUp[0] /= refUpLen; refUp[1] /= refUpLen; refUp[2] /= refUpLen;

    // Right vector = cross(fwd, refUp)
    const right: [number, number, number] = [
      fwd[1]*refUp[2] - fwd[2]*refUp[1],
      fwd[2]*refUp[0] - fwd[0]*refUp[2],
      fwd[0]*refUp[1] - fwd[1]*refUp[0],
    ];

    // Project a world direction onto the navball using stereographic projection
    const project = (dir: [number, number, number]) => {
      const m = Math.sqrt(dir[0]*dir[0] + dir[1]*dir[1] + dir[2]*dir[2]) || 1;
      const dx = dir[0]/m, dy = dir[1]/m, dz = dir[2]/m;

      // Transform to local frame: (right, refUp, fwd)
      const lx = dx*right[0] + dy*right[1] + dz*right[2];
      const ly = dx*refUp[0] + dy*refUp[1] + dz*refUp[2];
      const lz = dx*fwd[0] + dy*fwd[1] + dz*fwd[2];

      const inFront = lz > 0;
      // Stereographic projection: map hemisphere to disk
      const d = lz > 0 ? R / (1 + lz) : R * 0.5;
      const sx = cx + lx * d;
      const sy = cy - ly * d;
      return { x: sx, y: sy, inFront, lx, ly, lz };
    };

    const r2 = R * R;

    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    // Draw background: sky/ground hemispheres
    // Project up vector to find horizon position on navball
    const upProj = project(upDir);
    const nadProj = project([-upDir[0], -upDir[1], -upDir[2]]);

    // Sky hemisphere (blue gradient)
    const skyGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    skyGrad.addColorStop(0, '#0a0a22');
    skyGrad.addColorStop(0.4, '#1a2a4a');
    skyGrad.addColorStop(1, '#224488');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

    // Ground hemisphere drawn as a clipped ellipse based on up/nadir positions
    // The horizon cuts through the navball where the up/nadir projections lie on the sphere
    // We approximate by drawing inverted triangle gradient toward nadir
    if (nadProj.inFront) {
      const earthGrad = ctx.createRadialGradient(nadProj.x, nadProj.y, 0, nadProj.x, nadProj.y, R * 1.2);
      earthGrad.addColorStop(0, '#6a4a2a');
      earthGrad.addColorStop(0.3, '#5a3a1a');
      earthGrad.addColorStop(0.7, '#3a2a12');
      earthGrad.addColorStop(1, 'rgba(10,10,40,0)');
      ctx.fillStyle = earthGrad;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
    }

    // Grid: pitch ladder
    for (let deg = -80; deg <= 80; deg += 10) {
      const rad = deg * Math.PI / 180;
      const cosP = Math.cos(rad);
      const sinP = Math.sin(rad);
      // Project the pitch angle: a direction at angle 'deg' from forward
      // dir = cos(deg)*fwd + sin(deg)*refUp
      const dir: [number, number, number] = [
        fwd[0]*cosP + refUp[0]*sinP,
        fwd[1]*cosP + refUp[1]*sinP,
        fwd[2]*cosP + refUp[2]*sinP,
      ];
      const p = project(dir);
      if (!p.inFront) continue;
      const dx2 = p.x - cx, dy2 = p.y - cy;
      if (dx2*dx2 + dy2*dy2 > r2) continue;

      const lineW = deg === 0 ? 30 : deg % 20 === 0 ? 22 : 14;
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

    // Draw heading markers on the horizon
    for (let h = 0; h < 360; h += 45) {
      const hr = h * Math.PI / 180;
      // A horizontal direction = rotate refUp around fwd by h degrees
      // We can approximate by using the right vector
      const hx = right[0]*Math.cos(hr) + refUp[0]*Math.sin(hr);
      const hy = right[1]*Math.cos(hr) + refUp[1]*Math.sin(hr);
      const hz = right[2]*Math.cos(hr) + refUp[2]*Math.sin(hr);
      // This is on the horizon plane (perpendicular to upDir)
      const hDir: [number, number, number] = [
        hx - fwd[0]*dotFU,
        hy - fwd[1]*dotFU,
        hz - fwd[2]*dotFU,
      ];
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

    // Markers
    const drawMarker = (
      dir: [number, number, number],
      drawFn: (p: { x: number; y: number }) => void,
    ) => {
      const p = project(dir);
      if (p.inFront) drawFn(p);
    };

    // Prograde (velocity direction)
    drawMarker(velocityDir, (p) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#44FF44'; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1.5; ctx.stroke();
    });

    // Retrograde (opposite velocity)
    drawMarker([-velocityDir[0], -velocityDir[1], -velocityDir[2]], (p) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(68,255,68,0.5)'; ctx.fill();
      ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(p.x - 4, p.y - 4); ctx.lineTo(p.x + 4, p.y + 4);
      ctx.moveTo(p.x + 4, p.y - 4); ctx.lineTo(p.x - 4, p.y + 4);
      ctx.strokeStyle = '#44FF44'; ctx.lineWidth = 1; ctx.stroke();
    });

    // Zenith (up)
    drawMarker(upDir, (p) => {
      ctx.beginPath(); ctx.moveTo(p.x, p.y - 7); ctx.lineTo(p.x - 5, p.y + 4); ctx.lineTo(p.x + 5, p.y + 4); ctx.closePath();
      ctx.fillStyle = '#4488FF'; ctx.fill();
    });

    // Nadir (down)
    drawMarker([-upDir[0], -upDir[1], -upDir[2]], (p) => {
      ctx.beginPath(); ctx.moveTo(p.x, p.y + 7); ctx.lineTo(p.x - 5, p.y - 4); ctx.lineTo(p.x + 5, p.y - 4); ctx.closePath();
      ctx.fillStyle = '#CC8844'; ctx.fill();
    });

    // Center indicator (rocket's nose direction)
    ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#FFAA44'; ctx.fill();
    ctx.strokeStyle = '#FFAA44'; ctx.lineWidth = 1;
    ctx.stroke();

    // Orbit normal
    if (orbitNormal) {
      drawMarker(orbitNormal, (p) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - 6);
        ctx.lineTo(p.x - 5, p.y + 4);
        ctx.lineTo(p.x + 5, p.y + 4);
        ctx.closePath();
        ctx.fillStyle = '#CC88FF';
        ctx.fill();
      });

      // Anti-normal
      drawMarker([-orbitNormal[0], -orbitNormal[1], -orbitNormal[2]], (p) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y + 6);
        ctx.lineTo(p.x - 5, p.y - 4);
        ctx.lineTo(p.x + 5, p.y - 4);
        ctx.closePath();
        ctx.fillStyle = '#8844CC';
        ctx.fill();
      });
    }

    // Planet direction dots
    if (bodyDirs) {
      for (const bd of bodyDirs) {
        drawMarker(bd.dir, (p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = bd.color + 'aa';
          ctx.fill();
        });
      }
    }

    ctx.restore();

    // Outer ring
    ctx.beginPath(); ctx.arc(cx, cy, R + 1, 0, Math.PI * 2);
    ctx.strokeStyle = '#334466'; ctx.lineWidth = 2;
    ctx.stroke();

    // Tick marks at 45-degree intervals on the ring
    for (let deg = 0; deg < 360; deg += 45) {
      const rad = deg * Math.PI / 180;
      const inner = R - 8, outer = R + 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(rad) * inner, cy + Math.sin(rad) * inner);
      ctx.lineTo(cx + Math.cos(rad) * outer, cy + Math.sin(rad) * outer);
      ctx.strokeStyle = '#4a6a8a'; ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  update(state: FlightState, system: System, heat: number = 0, stageCount: number = 1, currentStage: number = 1): void {
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
      const r = (body as any).radius ?? 0;
      const surfaceR = (body as any).getSurfaceRadiusAt?.(state.position) ?? r;
      const alt = d - surfaceR;
      if (alt < nearestAlt) nearestAlt = alt;
    }

    const heatPct = Math.min(100, (heat / 300000) * 100);

    this.speedVal.textContent = speed.toFixed(1);
    if (nearestAlt > 1000) {
      this.altVal.textContent = (nearestAlt / 1000).toFixed(2);
    } else {
      this.altVal.textContent = nearestAlt.toFixed(0);
    }
    this.heatPct.textContent = `${heatPct.toFixed(0)}%`;
    this.heatFill.style.width = `${heatPct}%`;
    this.heatFill.style.background = heatPct > 70 ? '#FF3333' : heatPct > 40 ? '#FFCC00' : '#44FF44';

    // Update stage indicator
    if (stageCount > 0 && this.stageLabel) {
      this.stageLabel.textContent = `STAGE ${currentStage}/${stageCount}`;
    }
  }

  setStageData(stages: Array<{ label: string; fuelMass: number; dryMass: number; active: boolean; spent: boolean }>): void {
    if (!this.stagePanel) return;

    // Remove existing stage rows (keep the label)
    const children = Array.from(this.stagePanel.children);
    for (const c of children) {
      if (c !== this.stageLabel) c.remove();
    }

    for (const st of stages) {
      const row = document.createElement('div');
      const fuelPct = st.dryMass > 0 ? Math.max(0, Math.min(100, (st.fuelMass / (st.fuelMass + st.dryMass)) * 100)) : 0;

      let bg = st.spent ? 'rgba(40,40,50,0.5)' : st.active ? 'rgba(60,80,50,0.6)' : 'rgba(30,35,45,0.5)';
      let border = st.active ? '1px solid rgba(200,152,56,0.4)' : '1px solid rgba(60,60,80,0.3)';

      row.style.cssText = `
        display:flex;flex-direction:column;gap:2px;
        padding:4px 6px;border-radius:4px;
        background:${bg};border:${border};
        font-family:monospace;font-size:9px;
        color:${st.spent ? '#555' : st.active ? '#ddd' : '#888'};
      `;

      const top = document.createElement('div');
      top.style.cssText = 'display:flex;justify-content:space-between;';
      top.innerHTML = `<span>${st.label}</span><span>${fuelPct.toFixed(0)}%</span>`;
      row.appendChild(top);

      const bar = document.createElement('div');
      bar.style.cssText = `
        height:3px;border-radius:2px;
        background:${st.spent ? '#333' : '#333'};
        position:relative;
      `;
      const fill = document.createElement('div');
      fill.style.cssText = `
        height:100%;border-radius:2px;width:${fuelPct}%;
        background:${fuelPct > 50 ? '#4a8' : fuelPct > 20 ? '#da5' : '#c44'};
        transition:width 0.3s;
      `;
      bar.appendChild(fill);
      row.appendChild(bar);

      this.stagePanel.appendChild(row);
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
