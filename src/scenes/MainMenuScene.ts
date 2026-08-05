export class MainMenuScene {
  private root: HTMLDivElement;
  private helpOverlay: HTMLDivElement | null = null;

  constructor(
    private onPlay: () => void,
    private onVab: () => void,
    private onSettings: () => void,
  ) {
    this.root = document.createElement('div');
    this.root.style.cssText = `
      position:fixed;inset:0;z-index:500;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:radial-gradient(ellipse at 50% 30%, #0d1020 0%, #050608 70%);
    `;

    const logo = document.createElement('div');
    logo.style.cssText = 'margin-bottom:48px;text-align:center;';
    logo.innerHTML = `
      <div style="font-size:56px;font-weight:200;color:#a0a8c0;letter-spacing:0.25em;">ELLIPSE</div>
      <div style="width:60px;height:1px;background:rgba(160,168,192,0.3);margin:16px auto;"></div>
      <div style="font-size:11px;color:rgba(160,168,192,0.4);letter-spacing:0.3em;">SPACE FLIGHT SIMULATOR</div>
    `;
    this.root.appendChild(logo);

    const menu = document.createElement('div');
    menu.style.cssText = 'display:flex;flex-direction:column;gap:2px;width:240px;';

    const item = (label: string, cb: () => void, accent = false) => {
      const b = document.createElement('button');
      b.textContent = label;
      b.style.cssText = `
        width:100%;padding:14px 24px;background:transparent;
        color:${accent ? '#c8b080' : 'rgba(200,200,220,0.6)'};
        border:1px solid ${accent ? 'rgba(200,176,128,0.2)' : 'rgba(255,255,255,0.05)'};
        font-size:13px;letter-spacing:0.08em;cursor:pointer;
        text-align:left;transition:all 0.2s;
      `;
      b.addEventListener('mouseenter', () => {
        b.style.background = accent ? 'rgba(200,176,128,0.08)' : 'rgba(255,255,255,0.04)';
        b.style.color = accent ? '#dcc898' : '#fff';
        b.style.borderColor = accent ? 'rgba(200,176,128,0.35)' : 'rgba(255,255,255,0.15)';
      });
      b.addEventListener('mouseleave', () => {
        b.style.background = 'transparent';
        b.style.color = accent ? '#c8b080' : 'rgba(200,200,220,0.6)';
        b.style.borderColor = accent ? 'rgba(200,176,128,0.2)' : 'rgba(255,255,255,0.05)';
      });
      b.addEventListener('click', cb);
      return b;
    };

    menu.appendChild(item('FLIGHT', this.onPlay, true));
    menu.appendChild(item('VEHICLE ASSEMBLY', this.onVab));
    menu.appendChild(item('SETTINGS', this.onSettings));
    this.root.appendChild(menu);

    const help = document.createElement('div');
    help.style.cssText = 'margin-top:40px;';
    const hb = document.createElement('button');
    hb.textContent = 'HOW TO PLAY';
    hb.style.cssText = 'background:transparent;color:rgba(255,255,255,0.2);border:none;font-size:10px;cursor:pointer;letter-spacing:0.1em;';
    hb.addEventListener('mouseenter', () => hb.style.color = 'rgba(255,255,255,0.5)');
    hb.addEventListener('mouseleave', () => hb.style.color = 'rgba(255,255,255,0.2)');
    hb.addEventListener('click', () => this.toggleHelp());
    help.appendChild(hb);
    this.root.appendChild(help);

    const ver = document.createElement('div');
    ver.style.cssText = 'position:absolute;bottom:16px;right:20px;font-size:9px;color:rgba(255,255,255,0.1);letter-spacing:0.1em;';
    ver.textContent = 'v2.4';
    this.root.appendChild(ver);
  }

  mount(parent = document.body) { parent.appendChild(this.root); }
  unmount() { this.root.remove(); this.helpOverlay?.remove(); }

  private toggleHelp() {
    if (this.helpOverlay) { this.helpOverlay.remove(); this.helpOverlay = null; return; }
    const o = document.createElement('div');
    o.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(5,6,8,0.95);';
    o.innerHTML = `<div style="max-width:480px;padding:32px;color:#a0a8c0;font:13px/1.8 sans-serif;">
      <div style="font-size:18px;color:#c8b080;margin-bottom:20px;">CONTROLS</div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">W / S</td><td>Throttle up / down</td></tr>
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">↑ ↓ ← →</td><td>Pitch / Yaw</td></tr>
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">Space</td><td>Stage</td></tr>
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">M / Tab</td><td>Map</td></tr>
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">C</td><td>Free camera</td></tr>
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">T</td><td>SAS</td></tr>
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">Q / E</td><td>Time warp</td></tr>
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">Esc</td><td>Pause</td></tr>
        <tr><td style="color:rgba(200,176,128,0.6);padding:3px 16px 3px 0;">Mouse</td><td>Orbit / zoom</td></tr>
      </table>
      <button style="margin-top:24px;padding:10px 32px;background:rgba(200,176,128,0.1);color:#c8b080;border:1px solid rgba(200,176,128,0.2);cursor:pointer;font-size:12px;">CLOSE</button>
    </div>`;
    o.querySelector('button')!.addEventListener('click', () => { o.remove(); this.helpOverlay = null; });
    document.body.appendChild(o);
    this.helpOverlay = o;
  }
}
