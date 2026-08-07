export class MainMenuScene {
  private root: HTMLDivElement;
  private helpOverlay: HTMLDivElement | null = null;
  private stars: HTMLDivElement[] = [];

  constructor(
    private onPlay: () => void,
    private onVab: () => void,
    private onSettings: () => void,
  ) {
    this.root = document.createElement('div');
    this.root.style.cssText = 'position:fixed;inset:0;z-index:500;background:#04060a;overflow:hidden;';

    for (let i = 0; i < 80; i++) {
      const s = document.createElement('div');
      const size = Math.random() * 1.5 + 0.5;
      s.style.cssText = `position:absolute;width:${size}px;height:${size}px;background:#fff;border-radius:50%;left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${Math.random()*0.4+0.1};`;
      s.style.animation = `starPulse ${2+Math.random()*3}s ease-in-out ${Math.random()*3}s infinite alternate`;
      this.root.appendChild(s);
      this.stars.push(s);
    }

    const content = document.createElement('div');
    content.style.cssText = 'position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;';

    const titleGroup = document.createElement('div');
    titleGroup.style.cssText = 'text-align:center;margin-bottom:60px;';

    const title = document.createElement('div');
    title.textContent = 'ELLIPSE';
    title.style.cssText = `
      font:200 64px/1 system-ui,-apple-system,sans-serif;
      color:#8090a8;letter-spacing:0.3em;
      text-shadow:0 0 80px rgba(128,144,168,0.08);
      animation:titleFade 4s ease-in-out infinite alternate;
    `;
    titleGroup.appendChild(title);

    const line = document.createElement('div');
    line.style.cssText = 'width:40px;height:1px;background:rgba(128,144,168,0.2);margin:20px auto;';
    titleGroup.appendChild(line);

    const subtitle = document.createElement('div');
    subtitle.textContent = 'SPACE FLIGHT SIMULATOR';
    subtitle.style.cssText = 'font:400 10px/1 system-ui,-apple-system,sans-serif;color:rgba(128,144,168,0.3);letter-spacing:0.35em;';
    titleGroup.appendChild(subtitle);
    content.appendChild(titleGroup);

    const items = [
      { label: 'FLIGHT', action: this.onPlay, primary: true },
      { label: 'VEHICLE ASSEMBLY', action: this.onVab, primary: false },
      { label: 'SETTINGS', action: this.onSettings, primary: false },
    ];

    const menu = document.createElement('div');
    menu.style.cssText = 'display:flex;flex-direction:column;gap:1px;width:260px;';

    for (const item of items) {
      const btn = document.createElement('button');
      btn.textContent = item.label;
      btn.style.cssText = `
        width:100%;padding:16px 24px;background:transparent;text-align:left;
        color:${item.primary?'#a0b0c8':'rgba(160,176,200,0.5)'};
        border:1px solid ${item.primary?'rgba(160,176,200,0.12)':'rgba(160,176,200,0.04)'};
        font:400 13px/1 system-ui,-apple-system,sans-serif;letter-spacing:0.1em;
        cursor:pointer;transition:all 0.3s ease;
      `;
      btn.addEventListener('mouseenter', () => {
        btn.style.background = 'rgba(160,176,200,0.04)';
        btn.style.color = '#c0d0e0';
        btn.style.borderColor = 'rgba(160,176,200,0.2)';
        btn.style.paddingLeft = '32px';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.background = 'transparent';
        btn.style.color = item.primary?'#a0b0c8':'rgba(160,176,200,0.5)';
        btn.style.borderColor = item.primary?'rgba(160,176,200,0.12)':'rgba(160,176,200,0.04)';
        btn.style.paddingLeft = '24px';
      });
      btn.addEventListener('click', item.action);
      menu.appendChild(btn);
    }
    content.appendChild(menu);

    const help = document.createElement('button');
    help.textContent = 'CONTROLS';
    help.style.cssText = `
      margin-top:48px;background:transparent;color:rgba(160,176,200,0.15);
      border:none;font:400 9px/1 system-ui,-apple-system,sans-serif;
      letter-spacing:0.15em;cursor:pointer;transition:color 0.3s;
    `;
    help.addEventListener('mouseenter', () => help.style.color = 'rgba(160,176,200,0.4)');
    help.addEventListener('mouseleave', () => help.style.color = 'rgba(160,176,200,0.15)');
    help.addEventListener('click', () => this.showHelp());
    content.appendChild(help);

    this.root.appendChild(content);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes starPulse { 0%{opacity:0.1} 100%{opacity:0.5} }
      @keyframes titleFade { 0%{text-shadow:0 0 80px rgba(128,144,168,0.04)} 100%{text-shadow:0 0 80px rgba(128,144,168,0.12)} }
    `;
    this.root.appendChild(style);
  }

  mount(p = document.body) { p.appendChild(this.root); }
  unmount() { this.root.remove(); this.helpOverlay?.remove(); }

  private showHelp() {
    if (this.helpOverlay) { this.helpOverlay.remove(); this.helpOverlay = null; return; }
    const o = document.createElement('div');
    o.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(4,6,10,0.97);';
    o.innerHTML = `<div style="max-width:420px;padding:40px;font:13px/2 system-ui,-apple-system,sans-serif;color:#8090a8;">
      <div style="font:200 24px/1 system-ui,-apple-system,sans-serif;color:#a0b0c0;margin-bottom:24px;letter-spacing:0.1em;">CONTROLS</div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="color:rgba(160,176,200,0.4);padding:2px 20px 2px 0;font-size:11px;">W / S</td><td style="font-size:11px;">Throttle</td></tr>
        <tr><td style="color:rgba(160,176,200,0.4);padding:2px 20px 2px 0;font-size:11px;">&uarr;&darr;&larr;&rarr;</td><td style="font-size:11px;">Pitch / Yaw</td></tr>
        <tr><td style="color:rgba(160,176,200,0.4);padding:2px 20px 2px 0;font-size:11px;">Space</td><td style="font-size:11px;">Stage</td></tr>
        <tr><td style="color:rgba(160,176,200,0.4);padding:2px 20px 2px 0;font-size:11px;">M</td><td style="font-size:11px;">Map</td></tr>
        <tr><td style="color:rgba(160,176,200,0.4);padding:2px 20px 2px 0;font-size:11px;">C</td><td style="font-size:11px;">Free camera</td></tr>
        <tr><td style="color:rgba(160,176,200,0.4);padding:2px 20px 2px 0;font-size:11px;">T</td><td style="font-size:11px;">SAS</td></tr>
        <tr><td style="color:rgba(160,176,200,0.4);padding:2px 20px 2px 0;font-size:11px;">Q / E</td><td style="font-size:11px;">Time warp</td></tr>
        <tr><td style="color:rgba(160,176,200,0.4);padding:2px 20px 2px 0;font-size:11px;">Mouse</td><td style="font-size:11px;">Orbit / zoom</td></tr>
      </table>
      <button style="margin-top:32px;padding:12px 36px;background:rgba(160,176,200,0.06);color:#a0b0c8;border:1px solid rgba(160,176,200,0.12);font:400 12px system-ui;cursor:pointer;letter-spacing:0.1em;">CLOSE</button>
    </div>`;
    o.querySelector('button')!.addEventListener('click', () => { o.remove(); this.helpOverlay = null; });
    document.body.appendChild(o);
    this.helpOverlay = o;
  }
}
