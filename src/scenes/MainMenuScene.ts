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
      background: #060814;
      border: none; border-radius: 0;
    `;

    const logo = document.createElement('div');
    logo.style.cssText = 'margin-bottom: var(--space-8); text-align: center;';
    logo.innerHTML = `
      <div style="font-size:64px;letter-spacing:0.12em;color:var(--accent-gold);font-weight:700;text-shadow:0 0 60px rgba(200,152,56,0.3);margin-bottom:4px;">ELLIPSE</div>
      <div style="font-size:14px;color:rgba(244,245,242,0.5);letter-spacing:0.2em;margin-bottom:24px;">SPACE FLIGHT SIMULATOR</div>
    `;
    this.root.appendChild(logo);

    const btn = (label: string, variant: string, cb: () => void, emoji?: string): HTMLButtonElement => {
      const b = document.createElement('button');
      b.className = `btn btn--${variant}`;
      const prefix = emoji ? `<span style="font-size:18px;margin-right:8px;">${emoji}</span>` : '';
      b.innerHTML = `${prefix}${label}`;
      b.style.cssText = 'margin: 8px; min-width: 260px; padding: 16px 32px; font-size: 16px; font-weight:600; letter-spacing:0.06em; border-radius:8px; transition:all 0.2s;';
      b.addEventListener('mouseenter', () => { b.style.transform = 'scale(1.03)'; b.style.boxShadow = '0 0 24px rgba(234,205,158,0.15)'; });
      b.addEventListener('mouseleave', () => { b.style.transform = 'scale(1)'; b.style.boxShadow = 'none'; });
      b.addEventListener('click', cb);
      return b;
    };
    this.root.appendChild(btn('FLIGHT', 'primary', this.onPlay, '🚀'));
    this.root.appendChild(btn('VEHICLE ASSEMBLY', 'secondary', this.onVab, '🔧'));
    this.root.appendChild(btn('SETTINGS', 'ghost', this.onSettings, '⚙️'));
    this.root.appendChild(btn('GUIDE', 'ghost', () => this.toggleHelp(), '📖'));
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
