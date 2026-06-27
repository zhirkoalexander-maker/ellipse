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
      position: fixed; inset: 0; z-index: 200;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: linear-gradient(180deg, #0A0E1A 0%, #1A1F2E 100%);
      font-family: 'Inter', sans-serif;
      color: var(--starshine);
    `;

    const title = document.createElement('h1');
    title.className = 'text-display';
    title.textContent = 'ELLIPSE';
    title.style.cssText = 'font-size: 64px; margin: 0 0 32px; color: var(--starshine); letter-spacing: 0.1em;';
    this.root.appendChild(title);

    const btn = (label: string, primary: boolean, cb: () => void): HTMLButtonElement => {
      const b = document.createElement('button');
      b.className = primary ? 'btn btn--primary' : 'btn';
      b.textContent = label;
      b.style.cssText = 'margin: 8px; min-width: 240px;';
      b.addEventListener('click', cb);
      return b;
    };
    this.root.appendChild(btn('PLAY', true, this.onPlay));
    this.root.appendChild(btn('VAB (Build)', false, this.onVab));
    this.root.appendChild(btn('Settings', false, this.onSettings));
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); }
}
