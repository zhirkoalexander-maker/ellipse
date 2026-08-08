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
      background:radial-gradient(ellipse at 60% 40%, #0a0e18 0%, #04060a 70%);
      display:flex;
    `;

    for (let i=0;i<60;i++) {
      const s = document.createElement('div');
      s.style.cssText = `position:absolute;width:${1+Math.random()}px;height:${1+Math.random()}px;background:rgba(180,200,220,${0.1+Math.random()*0.3});border-radius:50%;left:${10+Math.random()*80}%;top:${Math.random()*100}%;animation:drift${2+Math.random()*4}s ease-in-out infinite alternate`;
      this.root.appendChild(s);
    }

    const left = document.createElement('div');
    left.style.cssText = 'position:relative;z-index:1;width:50%;display:flex;align-items:center;padding-left:12%;';

    const logoBlock = document.createElement('div');
    const line1 = document.createElement('div');
    line1.textContent = 'EL';
    line1.style.cssText = 'font:100 96px/0.8 system-ui;color:rgba(200,210,225,0.08);letter-spacing:0.2em;';
    const line2 = document.createElement('div');
    line2.textContent = 'LIP';
    line2.style.cssText = 'font:100 96px/0.8 system-ui;color:rgba(200,210,225,0.06);letter-spacing:0.2em;margin-top:4px;';
    const line3 = document.createElement('div');
    line3.textContent = 'SE';
    line3.style.cssText = 'font:100 96px/0.8 system-ui;color:rgba(200,210,225,0.04);letter-spacing:0.2em;margin-top:4px;';
    logoBlock.appendChild(line1);
    logoBlock.appendChild(line2);
    logoBlock.appendChild(line3);
    left.appendChild(logoBlock);

    const right = document.createElement('div');
    right.style.cssText = 'position:relative;z-index:1;width:50%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-right:12%;';

    const sub = document.createElement('div');
    sub.textContent = 'SPACE FLIGHT SIMULATOR';
    sub.style.cssText = 'font:400 9px/1 system-ui;color:rgba(200,210,225,0.15);letter-spacing:0.3em;margin-bottom:40px;';
    right.appendChild(sub);

    const menuItems = [
      { label: 'FLIGHT', action: this.onPlay },
      { label: 'ASSEMBLY', action: this.onVab },
      { label: 'SETTINGS', action: this.onSettings },
    ];

    for (const item of menuItems) {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:20px;margin:3px 0;cursor:pointer;padding:10px 0;';

      const num = document.createElement('div');
      num.textContent = `0${menuItems.indexOf(item)+1}`;
      num.style.cssText = 'font:400 10px/1 system-ui;color:rgba(200,210,225,0.1);width:20px;transition:all 0.4s;';

      const label = document.createElement('div');
      label.textContent = item.label;
      label.style.cssText = 'font:200 28px/1 system-ui;color:rgba(200,210,225,0.3);letter-spacing:0.15em;transition:all 0.4s;';

      const line = document.createElement('div');
      line.style.cssText = 'height:1px;width:0;background:rgba(200,210,225,0.15);transition:width 0.4s;flex:1;';

      row.appendChild(num);
      row.appendChild(label);
      row.appendChild(line);

      row.addEventListener('mouseenter', () => {
        label.style.color = 'rgba(220,230,240,0.9)';
        label.style.letterSpacing = '0.25em';
        num.style.color = 'rgba(200,210,225,0.5)';
        line.style.width = '80px';
      });
      row.addEventListener('mouseleave', () => {
        label.style.color = 'rgba(200,210,225,0.3)';
        label.style.letterSpacing = '0.15em';
        num.style.color = 'rgba(200,210,225,0.1)';
        line.style.width = '0';
      });
      row.addEventListener('click', item.action);
      right.appendChild(row);
    }

    const help = document.createElement('div');
    help.textContent = 'controls';
    help.style.cssText = 'margin-top:48px;font:400 8px/1 system-ui;color:rgba(200,210,225,0.08);letter-spacing:0.2em;cursor:pointer;transition:color 0.4s;';
    help.addEventListener('mouseenter', () => help.style.color = 'rgba(200,210,225,0.3)');
    help.addEventListener('mouseleave', () => help.style.color = 'rgba(200,210,225,0.08)');
    help.addEventListener('click', () => this.showHelp());
    right.appendChild(help);

    this.root.appendChild(left);
    this.root.appendChild(right);

    const s = document.createElement('style');
    s.textContent = '@keyframes drift{0%{transform:translateY(0)}100%{transform:translateY(-8px)}}';
    this.root.appendChild(s);
  }

  mount(p = document.body) { p.appendChild(this.root); }
  unmount() { this.root.remove(); this.helpOverlay?.remove(); }

  private showHelp() {
    if (this.helpOverlay) { this.helpOverlay.remove(); this.helpOverlay = null; return; }
    const o = document.createElement('div');
    o.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(4,6,10,0.97);';
    o.innerHTML = `<div style="max-width:400px;padding:48px;color:rgba(200,210,225,0.5);font:12px/2 system-ui;">
      <div style="font:200 28px/1 system-ui;color:rgba(200,210,225,0.7);margin-bottom:28px;">CONTROLS</div>
      <table style="width:100%;"><tr><td style="color:rgba(200,210,225,0.25);padding:2px 24px 2px 0;">W / S</td><td>Throttle</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">↑↓←→</td><td>Pitch / Yaw</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">Space</td><td>Stage</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">M</td><td>Map</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">T</td><td>SAS</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">Q/E</td><td>Warp</td></tr></table>
      <div style="margin-top:32px;font:400 10px system-ui;color:rgba(200,210,225,0.15);cursor:pointer;" id="hc">close</div></div>`;
    o.querySelector('#hc')!.addEventListener('click', () => { o.remove(); this.helpOverlay = null; });
    document.body.appendChild(o);
    this.helpOverlay = o;
  }
}
