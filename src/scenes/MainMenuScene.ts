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
      position: fixed; inset: 0; z-index: 200;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: transparent;
      backdrop-filter: blur(2px);
      border: none;
      border-radius: 0;
    `;

    const logo = document.createElement('div');
    logo.style.cssText = 'margin-bottom: var(--space-8); text-align: center;';
    logo.innerHTML = `
      <svg viewBox="0 0 120 40" fill="none" style="width:120px;height:40px;display:block;margin:0 auto var(--space-4);">
        <ellipse cx="60" cy="20" rx="50" ry="14" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="1.5" opacity="0.5"/>
        <ellipse cx="60" cy="20" rx="30" ry="8" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="1" opacity="0.3"/>
        <circle cx="60" cy="20" r="3" fill="var(--accent-gold)"/>
      </svg>
      <div class="text-display" style="font-size:48px;letter-spacing:0.08em;">STARWELD</div>
      <div class="text-caption" style="margin-top:var(--space-2);">SPACE FLIGHT SIMULATOR</div>
    `;
    this.root.appendChild(logo);

    const btn = (label: string, variant: string, cb: () => void): HTMLButtonElement => {
      const b = document.createElement('button');
      b.className = `btn btn--${variant}`;
      b.textContent = label;
      b.style.cssText = 'margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;';
      b.addEventListener('click', cb);
      return b;
    };
    this.root.appendChild(btn('FLIGHT', 'primary', this.onPlay));
    this.root.appendChild(btn('VEHICLE ASSEMBLY', 'secondary', this.onVab));
    this.root.appendChild(btn('SETTINGS', 'ghost', this.onSettings));
    this.root.appendChild(btn('HELP', 'ghost', () => this.toggleHelp()));
  }

  private toggleHelp(): void {
    if (this.helpOverlay) {
      this.helpOverlay.remove();
      this.helpOverlay = null;
      return;
    }
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:300;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(6,8,20,0.92);
    `;
    overlay.innerHTML = `
      <div style="max-width:480px;padding:32px;font-family:'Inter',sans-serif;line-height:1.6;">
        <h2 style="color:var(--accent-gold);font-size:20px;letter-spacing:0.05em;margin-bottom:16px;">CONTROLS</h2>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">W / S</td><td>Throttle up / down</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">↑ / ↓</td><td>Pitch (nose up / down)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">← / →</td><td>Yaw (turn left / right)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Space</td><td>Stage (separate decoupler)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">T</td><td>Cycle SAS (OFF → PRO → RETRO)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Q / E</td><td>Time warp slower / faster</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">P</td><td>Toggle parachute</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">M / Tab</td><td>Map view</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Esc</td><td>Pause</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Mouse drag</td><td>Orbit camera (on 3D view)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Scroll</td><td>Zoom camera</td></tr>
        </table>
        <div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(244,245,242,0.1);">
          <h3 style="color:var(--accent-blue-bright);font-size:14px;letter-spacing:0.05em;margin-bottom:8px;">SAS GUIDE</h3>
          <ul style="font-size:12px;color:var(--text-primary);padding-left:16px;">
            <li><strong>PROGRADE</strong> — aligns rocket with velocity vector (for orbital burn)</li>
            <li><strong>RETROGRADE</strong> — aligns rocket opposite velocity (for landing / de-orbit)</li>
            <li><b>How to land:</b> Enable RETRO, throttle against velocity, deploy chute at ~1 km</li>
          </ul>
        </div>
        <button class="btn btn--primary" style="margin-top:24px;width:100%;padding:10px;" id="help-close">CLOSE</button>
      </div>
    `;
    overlay.querySelector('#help-close')!.addEventListener('click', () => {
      overlay.remove();
      this.helpOverlay = null;
    });
    document.body.appendChild(overlay);
    this.helpOverlay = overlay;
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); this.helpOverlay?.remove(); }
}
