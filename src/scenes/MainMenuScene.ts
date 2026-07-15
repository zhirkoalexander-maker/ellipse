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
    logo.style.cssText = 'margin-bottom: var(--space-8); text-align: center;';
    logo.innerHTML = `
      <svg viewBox="0 0 120 40" fill="none" style="width:100px;height:36px;display:block;margin:0 auto var(--space-2);">
        <ellipse cx="60" cy="20" rx="52" ry="16" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="1.2" opacity="0.4"/>
        <ellipse cx="60" cy="20" rx="36" ry="10" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.8" opacity="0.25"/>
        <ellipse cx="60" cy="20" rx="18" ry="5" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.6" opacity="0.15"/>
        <circle cx="60" cy="20" r="2.5" fill="var(--accent-gold)"/>
        <line x1="10" y1="20" x2="110" y2="20" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
        <line x1="60" y1="4" x2="60" y2="36" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
      </svg>
      <div class="text-display" style="font-size:52px;letter-spacing:0.1em;color:var(--accent-gold);">ELLIPSE</div>
      <div class="text-caption" style="margin-top:var(--space-2);letter-spacing:0.15em;">SPACE FLIGHT SIMULATOR</div>
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
    this.root.appendChild(btn('GUIDE', 'ghost', () => this.toggleHelp()));
  }

  private toggleHelp(): void {
    if (this.helpOverlay) {
      this.helpOverlay.remove();
      this.helpOverlay = null;
      return;
    }
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);';
    overlay.innerHTML = `<div style="max-width:520px;padding:32px;font-family:sans-serif;line-height:1.6;color:#ddd;">` +
      `<h2 style="color:#c89838;font-size:20px;margin-bottom:12px;">HOW TO BUILD & LAUNCH</h2>` +
      `<p style="font-size:13px;color:#889;margin-bottom:8px;">1. Click <b>VEHICLE ASSEMBLY</b> to build rocket</p>` +
      `<p style="font-size:13px;color:#889;margin-bottom:8px;">2. Add capsule → tank → engine (bottom to top)</p>` +
      `<p style="font-size:13px;color:#889;margin-bottom:16px;">3. Click <b>FLIGHT</b> — press <b>W</b>, wait countdown</p>` +
      `<h2 style="color:#c89838;font-size:20px;margin-bottom:8px;">CONTROLS</h2>` +
      `<table style="width:100%;font-size:13px;border-collapse:collapse;">` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">W/S</td><td>Throttle</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">↑↓←→</td><td>Pitch / Yaw</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">C</td><td>Free camera</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">F</td><td>Reset camera</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">T</td><td>SAS toggle</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Space</td><td>Stage</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">M/Tab</td><td>Map view</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Q/E</td><td>Time warp</td></tr>` +
      `<tr><td style="color:#889;padding:3px 12px 3px 0;">Mouse</td><td>Orbit / Zoom camera</td></tr>` +
      `</table><button class="btn btn--primary" style="margin-top:20px;width:100%;padding:12px;" id="help-close">CLOSE</button></div>`;
    overlay.querySelector('#help-close')!.addEventListener('click', () => { overlay.remove(); this.helpOverlay = null; });
    document.body.appendChild(overlay);
    this.helpOverlay = overlay;
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); this.helpOverlay?.remove(); }
}
