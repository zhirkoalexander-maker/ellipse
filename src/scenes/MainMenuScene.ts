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
    this.root.style.cssText = `
      position: fixed; inset: 0; z-index: 500;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: #060814; gap: 20px;
    `;

    const logo = document.createElement('div');
    logo.style.cssText = 'text-align:center;margin-bottom:20px;';
    logo.innerHTML = `
      <div style="font-size:72px;color:#EACD9E;font-weight:700;letter-spacing:0.15em;">ELLIPSE</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.35);letter-spacing:0.2em;margin-top:8px;">SPACE FLIGHT SIMULATOR</div>
    `;
    this.root.appendChild(logo);

    const btn = (label: string, emoji: string, cb: () => void, color: string) => {
      const b = document.createElement('button');
      b.innerHTML = `<span style="font-size:28px;">${emoji}</span> <span style="font-size:20px;">${label}</span>`;
      b.style.cssText = `
        width:280px; padding:20px 32px; border:none; border-radius:12px;
        background:${color}; color:#fff; cursor:pointer;
        font-weight:600; letter-spacing:0.06em;
        display:flex; align-items:center; justify-content:center; gap:12px;
        transition:all 0.15s;
      `;
      b.addEventListener('mouseenter', () => { b.style.filter = 'brightness(1.2)'; b.style.transform = 'scale(1.04)'; });
      b.addEventListener('mouseleave', () => { b.style.filter = ''; b.style.transform = ''; });
      b.addEventListener('click', cb);
      return b;
    };

    this.root.appendChild(btn('LAUNCH', '🚀', this.onPlay, '#c89838'));
    this.root.appendChild(btn('BUILD', '🔧', this.onVab, '#3a5a8c'));
    this.root.appendChild(btn('SETTINGS', '⚙️', this.onSettings, '#2a2a3a'));

    const help = document.createElement('button');
    help.textContent = 'HOW TO PLAY';
    help.style.cssText = 'margin-top:16px;background:transparent;color:rgba(255,255,255,0.3);border:none;font-size:11px;cursor:pointer;text-decoration:underline;';
    help.addEventListener('click', () => this.toggleHelp());
    this.root.appendChild(help);
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); this.helpOverlay?.remove(); }

  private toggleHelp(): void {
    if (this.helpOverlay) { this.helpOverlay.remove(); this.helpOverlay = null; return; }
    const o = document.createElement('div');
    o.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);color:#ccc;font:13px/1.6 sans-serif;';
    o.innerHTML = `<div style="max-width:500px;padding:24px;">
      <h2 style="color:#c89838;">HOW TO PLAY</h2>
      <p>1. BUILD — add capsule, tank, engine</p>
      <p>2. LAUNCH — press W for throttle, wait countdown</p>
      <p style="margin-top:12px;"><b>CONTROLS:</b> W/S throttle, ↑↓ pitch, ←→ yaw, Space stage, M map, C freecam, Esc pause</p>
      <button style="margin-top:20px;padding:10px 24px;background:#c89838;color:#000;border:none;border-radius:6px;cursor:pointer;font-size:14px;">CLOSE</button>
    </div>`;
    o.querySelector('button')!.addEventListener('click', () => { o.remove(); this.helpOverlay = null; });
    document.body.appendChild(o);
    this.helpOverlay = o;
  }
}
