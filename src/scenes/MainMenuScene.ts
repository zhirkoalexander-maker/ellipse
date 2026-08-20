export class MainMenuScene {
  private root: HTMLDivElement;
  private helpOverlay: HTMLDivElement | null = null;
  private onPlay: () => void;
  private onVab: () => void;
  private onSettings: () => void;

  constructor(onPlay: () => void, onVab: () => void, onSettings: () => void) {
    this.onPlay = onPlay;
    this.onVab = onVab;
    this.onSettings = onSettings;

    this.root = document.createElement('div');
    this.root.className = 'panel';
    this.root.style.cssText = `
      position: fixed; inset: 0; z-index: 500;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: rgba(6,8,20,0.95);
      border: none; border-radius: 0;
    `;

    const logo = document.createElement('div');
    logo.className = 'menu-logo';
    logo.style.cssText = 'margin-bottom: var(--space-8); text-align: center;';
    logo.innerHTML = `
      <svg viewBox="0 0 120 40" fill="none" style="width:100px;height:36px;display:block;margin:0 auto var(--space-2);">
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="52" ry="16" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="1.2" opacity="0.4"/>
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="36" ry="10" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.8" opacity="0.25"/>
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="18" ry="5" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.6" opacity="0.15"/>
        <circle cx="60" cy="20" r="2.5" fill="var(--accent-gold)"/>
        <line x1="10" y1="20" x2="110" y2="20" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
        <line x1="60" y1="4" x2="60" y2="36" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
      </svg>
      <div class="menu-title text-display" style="font-size:52px;letter-spacing:0.1em;color:var(--accent-gold);">ELLIPSE</div>
      <div class="text-caption" style="margin-top:var(--space-2);letter-spacing:0.15em;">SPACE FLIGHT SIMULATOR</div>
    `;
    this.root.appendChild(logo);

    const btn = (label: string, variant: string, cb: () => void): HTMLButtonElement => {
      const b = document.createElement('button');
      b.className = `btn btn--${variant} menu-btn`;
      b.textContent = label;
      b.style.cssText = 'margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;';
      b.addEventListener('click', cb);
      return b;
    };
    this.root.appendChild(btn('FLIGHT', 'primary', this.onPlay));
    this.root.appendChild(btn('VEHICLE ASSEMBLY', 'secondary', this.onVab));
    this.root.appendChild(btn('SETTINGS', 'ghost', this.onSettings));
    this.root.appendChild(btn('GUIDE', 'ghost', () => this.toggleHelp()));
  }

  private toggleHelp(): void {
    if (this.helpOverlay) { this.helpOverlay.remove(); this.helpOverlay = null; return; }
    const overlay = document.createElement('div');
    overlay.className = 'guide-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);';
    const card = document.createElement('div');
    card.className = 'guide-card';
    card.style.cssText = 'max-width:560px;padding:32px;font-family:sans-serif;line-height:1.6;color:#ddd;';
    card.innerHTML =
      `<h2 style="color:#c89838;font-size:22px;margin-bottom:14px;letter-spacing:0.05em;">🎮 HOW TO BUILD & LAUNCH</h2>` +
      `<p style="font-size:13px;color:#a9b;margin-bottom:6px;">1. Open <b style="color:#c89838;">VEHICLE ASSEMBLY</b> — build your rocket</p>` +
      `<p style="font-size:13px;color:#a9b;margin-bottom:6px;">2. Stack parts bottom→top: <b>capsule</b> → <b>fuel tank</b> → <b>engine</b></p>` +
      `<p style="font-size:13px;color:#a9b;margin-bottom:6px;">3. (optional) Add <b>decoupler</b> between stages, <b>parachute</b> + <b>legs</b> for landing</p>` +
      `<p style="font-size:13px;color:#a9b;margin-bottom:14px;">4. Hit <b style="color:#c89838;">FLIGHT</b>, hold <b>↑</b> to spool engines, wait for countdown</p>` +
      `<h2 style="color:#c89838;font-size:18px;margin:10px 0 8px;letter-spacing:0.05em;">💡 FLIGHT TIPS</h2>` +
      `<p style="font-size:12px;color:#889;margin-bottom:4px;">• <b>TWR ≥ 1.0</b> required to lift off — check the gauge on HUD (green = go)</p>` +
      `<p style="font-size:12px;color:#889;margin-bottom:4px;">• Tilt east (<b>A</b>) at ~10km to build horizontal speed for orbit</p>` +
      `<p style="font-size:12px;color:#889;margin-bottom:4px;">• Watch the <b style="color:#88ccff;">ORBIT panel</b> (top-right): Ap/Pe show your orbit shape</p>` +
      `<p style="font-size:12px;color:#889;margin-bottom:4px;">• Press <b>T</b> to cycle SAS — holds attitude / prograde / retrograde</p>` +
      `<p style="font-size:12px;color:#889;margin-bottom:4px;">• <b>Space</b> drops empty stages — watch the stage panel</p>` +
      `<p style="font-size:12px;color:#889;margin-bottom:14px;">• Land slow (< 5 m/s). Deploy <b>parachute</b> in atmosphere, extend <b>legs</b></p>` +
      `<h2 style="color:#c89838;font-size:18px;margin:10px 0 8px;letter-spacing:0.05em;">⌨ ROCKET CONTROLS</h2>` +
      `<table style="width:100%;font-size:13px;border-collapse:collapse;">` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;width:80px;">↑ / ↓</td><td>Engine Power (throttle)</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">W / S</td><td>Pitch — Tilt Up / Down</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">A / D</td><td>Yaw — Turn Left / Right</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Space</td><td>Stage Separation</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;width:80px;">T</td><td>SAS — cycle OFF / HOLD / PROGRADE / RETROGRADE</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">P</td><td>Deploy Parachute</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">M / Tab</td><td>Map / Orbit view</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">[ / ]</td><td>Time Warp slower / faster</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">C</td><td>Free Camera</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">F</td><td>Reset Camera</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Mouse</td><td>Orbit / Zoom camera</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Esc</td><td>Pause / Menu</td></tr>` +
      `</table><button class="btn btn--primary" style="margin-top:20px;width:100%;padding:12px;" id="help-close">CLOSE</button>`;
    const closeBtn = card.querySelector('#help-close') as HTMLButtonElement;
    closeBtn.addEventListener('click', () => { overlay.remove(); this.helpOverlay = null; });
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    this.helpOverlay = overlay;
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); this.helpOverlay?.remove(); }
}
