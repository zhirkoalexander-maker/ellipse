export class MainMenuScene {
  private root: HTMLDivElement;
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
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); }
}
