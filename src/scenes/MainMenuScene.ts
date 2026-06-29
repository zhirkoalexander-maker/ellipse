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
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); }
}