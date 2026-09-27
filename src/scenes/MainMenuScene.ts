import './MainMenu.css';
import { PlayerCounter } from '../ui/PlayerCounter';
import { Tutorial, shouldShowTutorial } from '../ui/Tutorial';
import { Lifetime } from '../core/Lifetime';
import { version as appVersion } from '../../package.json';
import { MISSIONS } from '../core/MissionData';
import type { Missions } from '../core/Missions';

export class MainMenuScene {
  private root: HTMLDivElement;
  private playerCounter = new PlayerCounter();
  private tutorial: Tutorial | null = null;
  private life=new Lifetime();
  private helpOverlay: HTMLDivElement | null = null;
  private onPlay: () => void;
  private onVab: () => void;
  private onSettings: () => void;
  private onContinue: (() => void) | null;
  private missionsOverlay: HTMLDivElement | null = null;
  private missions: Missions | null;

  constructor(onPlay: () => void, onVab: () => void, onSettings: () => void, onContinue?: () => void, missions?: Missions) {
    this.onPlay = onPlay;
    this.onVab = onVab;
    this.onSettings = onSettings;
    this.onContinue = onContinue ?? null;
    this.missions = missions ?? null;
    this.life.listen(window,'keydown',e=>{if(e.key==='Escape'){this.helpOverlay?.remove();this.helpOverlay=null;this.missionsOverlay?.remove();this.missionsOverlay=null;}});

    this.root = document.createElement('div');
    this.root.className = 'main-menu';
    this.root.style.backgroundImage = `url("${import.meta.env.BASE_URL}menu-launch.webp")`;
    this.root.appendChild(this.playerCounter.element);
    const content = document.createElement('div');
    content.className = 'menu-content';
    const logo = document.createElement('div');
    logo.className = 'menu-logo';
    logo.innerHTML = '<h1>Challenger</h1>';
    content.appendChild(logo);
    this.root.appendChild(content);

    const btn = (label: string, variant: string, cb: () => void): HTMLButtonElement => {
      const b = document.createElement('button');
      b.className = `btn btn--${variant} menu-btn`;
      b.textContent = label;

      b.addEventListener('click', cb);
      return b;
    };
    content.appendChild(btn('Flight', 'primary', this.onPlay));
    const continueButton = btn('Continue', 'secondary', () => this.onContinue?.());
    continueButton.disabled = !this.onContinue;
    continueButton.title = this.onContinue ? 'Resume your last flight or build' : 'No saved flight';
    if (!this.onContinue) { continueButton.style.opacity = '0.45'; continueButton.style.cursor = 'default'; }
    content.appendChild(continueButton);
    content.appendChild(btn('Vehicle assembly', 'secondary', this.onVab));
    content.appendChild(btn('Missions', 'ghost', () => this.toggleMissions()));
    content.appendChild(btn('Settings', 'ghost', this.onSettings));
    content.appendChild(btn('Guide', 'ghost', () => this.toggleHelp()));
    const version = document.createElement('div');
    version.textContent = `v${appVersion}`;
    version.className = 'menu-version';
    content.appendChild(version);

  }

  private toggleMissions(): void {
    if (this.missionsOverlay) { this.missionsOverlay.remove(); this.missionsOverlay = null; return; }
    if (!this.missions) return;
    const overlay = document.createElement('div');
    overlay.className = 'guide-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(12,15,17,0.94);';
    const card = document.createElement('div');
    card.className = 'guide-card game-dialog';
    card.style.cssText = 'width:min(520px,calc(100vw - 24px));max-height:85dvh;overflow-y:auto;padding:24px;';
    const completed = new Set(this.missions.getCompleted());
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px;">
        <div style="color:#eceee9;font-size:18px;">Missions</div>
        <div style="color:#aeb8c1;font-size:12px;">${completed.size} / ${MISSIONS.length} completed</div>
      </div>`;
    const list = document.createElement('div');
    list.style.cssText = 'display:flex;flex-direction:column;gap:6px;';
    for (const m of MISSIONS) {
      const done = completed.has(m.id);
      const row = document.createElement('div');
      row.style.cssText = `display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:4px;background:${done ? 'rgba(162,186,164,0.06)' : 'rgba(255,255,255,0.02)'};border-left:3px solid ${done ? '#a2baa4' : '#3A4055'};`;
      row.innerHTML = `
        <div>
          <div style="font-size:13px;color:${done ? '#a2baa4' : '#ddd'};font-weight:600;">${done ? '✓' : '—'} ${m.name}</div>
          <div style="font-size:11px;color:#889;margin-top:2px;">${m.description}</div>
        </div>
`;
      list.appendChild(row);
    }
    card.appendChild(list);
    const close = document.createElement('button');
    close.className = 'btn btn--primary';
    close.style.cssText = 'margin-top:18px;width:100%;padding:10px;font-size:12px;';
    close.textContent = 'Close';
    close.addEventListener('click', () => { overlay.remove(); this.missionsOverlay = null; });
    card.appendChild(close);
    overlay.appendChild(card);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) { overlay.remove(); this.missionsOverlay = null; } });
    document.body.appendChild(overlay);
    this.missionsOverlay = overlay;
  }

  private toggleHelp(): void {
    if (this.helpOverlay) { this.helpOverlay.remove(); this.helpOverlay = null; return; }
    const overlay = document.createElement('div');
    overlay.className = 'guide-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(12,15,17,0.94);';
    const card = document.createElement('div');
    card.className = 'guide-card game-dialog';
    card.style.cssText = 'width:min(560px,calc(100vw - 24px));box-sizing:border-box;max-height:90dvh;overflow:auto;padding:24px;font:14px/1.6 system-ui;color:#ddd;';
    card.classList.add('flight-guide');
    card.innerHTML = `<h2>Guide</h2>
      <h3>Your first launch</h3>
      <ol><li>Choose <b>Flight</b> for a ready-made rocket.</li><li>Press <b>Launch</b> or Space. Wait for the countdown.</li><li>Use ↑ / ↓ for power and W/S or A/D to steer.</li></ol>
      <button class="btn btn--secondary" id="guide-tour">Watch the walkthrough</button>
      <details><summary>Build a rocket</summary>
        <p>In <b>Vehicle assembly</b>, add these from bottom to top:</p>
        <ol><li>An S engine</li><li>Two S tanks, 5 t each</li><li>An S capsule</li></ol>
        <p>Choose <b>Take to pad</b> when it is ready.</p>
        <p>For boosters, choose <b>Side pair</b>, pick a tank, then add engines and decouplers. Space releases the side pair before the main stages.</p>
        <p>Heavy rockets get extra thrust, but lift off more slowly.</p>
      </details>
      <details><summary>Go to the Moon and back</summary>
        <ol><li>Open <b>Map</b> and select <b>Moon</b>.</li><li>Press <b>Autopilot to destination</b>.</li><li>Let it fly and land. Steering or changing power takes control back.</li></ol>
        <p>Leave <b>Manual warp</b> off for automatic time warp.</p>
        <p>To come home, select <b>Earth</b> and start autopilot again. You need fuel for both trips.</p>
      </details>
      <details><summary>Land</summary>
        <p>Watch <b>Above surface</b>, not altitude. It measures the gap to the ground.</p>
        <p>Keep the engine pointing down. Add power early to slow down, or press <b>L</b> for landing assist.</p>
        <p><b>P</b> opens the capsule’s parachute. It works on Earth, not on the Moon.</p>
      </details>
      <details><summary>Controls</summary><table>
      <tr><td>↑ / ↓</td><td>Power</td></tr><tr><td>W / S · A / D</td><td>Steer</td></tr><tr><td>J / K</td><td>Roll</td></tr>
      <tr><td>Space</td><td>Launch / separate stage</td></tr><tr><td>L · T</td><td>Landing assist / stability</td></tr>
      <tr><td>P · G</td><td>Parachute / landing gear</td></tr><tr><td>M / Tab</td><td>Map</td></tr><tr><td>Q / E or [ / ]</td><td>Time warp</td></tr>
      <tr><td>Drag</td><td>Move camera</td></tr><tr><td>Scroll / Z / X</td><td>Zoom</td></tr><tr><td>C · F</td><td>Free camera / reset view</td></tr><tr><td>Esc</td><td>Close map / pause</td></tr></table></details>
      <p class="guide-note">Use an English keyboard layout. Progress is saved in this browser.</p>
      <button class="btn btn--primary" style="margin-top:12px;width:100%;padding:12px" id="help-close">Close</button>`;
    card.querySelector('#guide-tour')!.addEventListener('click',()=>{overlay.remove();this.helpOverlay=null;this.showTutorial('Guide');});
    const closeBtn = card.querySelector('#help-close') as HTMLButtonElement;
    closeBtn.addEventListener('click', () => { overlay.remove(); this.helpOverlay = null; });
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    this.helpOverlay = overlay;
  }

  private showTutorial(returnLabel='Flight'): void { this.tutorial?.dispose(); this.tutorial=new Tutorial(()=>{this.tutorial=null;[...this.root.querySelectorAll<HTMLButtonElement>('.menu-btn')].find(button=>button.textContent===returnLabel)?.focus();}); }
  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); if(shouldShowTutorial())this.showTutorial(); }
  unmount(): void { this.playerCounter.dispose(); this.tutorial?.dispose();this.tutorial=null;this.root.remove(); this.helpOverlay?.remove(); this.missionsOverlay?.remove(); this.life.dispose(); }
}
