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
    this.root.className = 'panel';
    this.root.appendChild(this.playerCounter.element);
    this.root.style.cssText = `
      position: fixed; inset: 0; z-index: 500;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: rgba(16,19,22,0.97);
      border: none; border-radius: 0;
    `;

    const logo = document.createElement('div');
    logo.className = 'menu-logo';
    logo.style.cssText = 'margin-bottom: var(--space-8); text-align: center;';
    logo.innerHTML = `
      <div class="text-display" style="font-size:clamp(28px, 7vw, 44px);letter-spacing:0;color:var(--text-primary);">CHALLENGER</div>
      <div class="text-caption" style="margin-top:var(--space-2);letter-spacing:0;">Rocket simulator</div>
    `;
    this.root.appendChild(logo);

    const btn = (label: string, variant: string, cb: () => void): HTMLButtonElement => {
      const b = document.createElement('button');
      b.className = `btn btn--${variant} menu-btn`;
      b.textContent = label;
      b.style.cssText = 'margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;';
      b.addEventListener('click', cb);
      return b;
    };
    this.root.appendChild(btn('Flight', 'primary', this.onPlay));
    const continueButton = btn('Continue', 'secondary', () => this.onContinue?.());
    continueButton.disabled = !this.onContinue;
    continueButton.title = this.onContinue ? 'Open your last flight or build' : 'No saved flight yet. Choose Flight to start.';
    if (!this.onContinue) { continueButton.style.opacity = '0.45'; continueButton.style.cursor = 'default'; }
    this.root.appendChild(continueButton);
    this.root.appendChild(btn('Vehicle assembly', 'secondary', this.onVab));
    this.root.appendChild(btn('Missions', 'ghost', () => this.toggleMissions()));
    this.root.appendChild(btn('Settings', 'ghost', this.onSettings));
    this.root.appendChild(btn('Guide', 'ghost', () => this.toggleHelp()));
    const version = document.createElement('div');
    version.textContent = `v${appVersion}`;
    version.style.cssText = 'margin-top:18px;font:11px system-ui;color:#788495;';
    this.root.appendChild(version);

  }

  private toggleMissions(): void {
    if (this.missionsOverlay) { this.missionsOverlay.remove(); this.missionsOverlay = null; return; }
    if (!this.missions) return;
    const overlay = document.createElement('div');
    overlay.className = 'guide-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(6,8,20,0.9);';
    const card = document.createElement('div');
    card.className = 'guide-card';
    card.style.cssText = 'max-width:520px;max-height:80vh;overflow-y:auto;padding:28px;font-family:system-ui,sans-serif;color:#ddd;background:#191e23;border:1px solid rgba(200,152,56,0.2);border-radius:8px;';
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
      row.style.cssText = `display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:4px;background:${done ? 'rgba(124,255,178,0.06)' : 'rgba(255,255,255,0.02)'};border-left:3px solid ${done ? '#7CFFB2' : '#3A4055'};`;
      row.innerHTML = `
        <div>
          <div style="font-size:13px;color:${done ? '#7CFFB2' : '#ddd'};font-weight:600;">${done ? '☑' : '☐'} ${m.name}</div>
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
    overlay.style.cssText = 'position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);';
    const card = document.createElement('div');
    card.className = 'guide-card';
    card.style.cssText = 'width:min(560px,calc(100vw - 24px));box-sizing:border-box;max-height:90dvh;overflow:auto;padding:24px;font:14px/1.6 system-ui;color:#ddd;';
    card.classList.add('flight-guide');
    card.innerHTML = `<h2>Guide</h2>
      <p class="guide-note">Use an English keyboard layout for the letter keys.</p>
      <h3>First flight</h3>
      <p>Choose <b>Flight</b> in the menu, then press <b>Launch</b> or Space. The engines start after the countdown.</p>
      <p>↑ and ↓ change throttle. W/S and A/D steer. Drag to move the camera; scroll or pinch to zoom.</p>
      <button class="btn btn--secondary" id="guide-tour" style="padding:10px 16px">Show me</button>
      <details><summary>Build a rocket</summary>
        <p>Open <b>Vehicle assembly</b>. Start with an S engine, two 5 t tanks and an S capsule. Add them in that order, then choose <b>Take to pad</b>.</p>
        <p>For side engines, select <b>Side pair</b> and the tank they attach to. Add an engine pair and decouplers. Either can go on first. If there is no tank yet, choose one from the parts list.</p>
        <p>Space releases the side decouplers first, then the lowest main stage. Both capsules have a parachute built in.</p>
      </details>
      <details><summary>Fly to the Moon</summary>
        <p>Open <b>Map</b>, select <b>Moon</b>, then <b>Autopilot to destination</b>. Autopilot uses your engines and fuel to fly there and land.</p>
        <p>Steering or changing throttle takes back control. Leave <b>Manual warp</b> off to let autopilot adjust time warp.</p>
        <p>For the return trip, select <b>Earth</b> in the map and start autopilot again. You will need fuel left for the journey.</p>
      </details>
      <details><summary>Land</summary>
        <p><b>Above surface</b> shows the distance to the ground. Use <b>Landing view</b> to look down.</p>
        <p>Point the engine toward the ground and use throttle to slow your descent. Start braking before you get close. Press <b>L</b> if you want landing assist to handle it.</p>
        <p><b>P</b> opens the parachute. It needs an atmosphere, so use your engine to land on the Moon.</p>
      </details>
      <details><summary>Keyboard controls</summary><table>
      <tr><td>↑ / ↓</td><td>Throttle</td></tr><tr><td>W / S · A / D</td><td>Steer</td></tr><tr><td>J / K</td><td>Roll</td></tr>
      <tr><td>Space</td><td>Launch or separate a stage</td></tr><tr><td>L · T</td><td>Landing assist · stability mode</td></tr>
      <tr><td>P · G</td><td>Parachute · landing gear</td></tr><tr><td>M / Tab</td><td>Open map</td></tr><tr><td>Q / E or [ / ]</td><td>Time warp</td></tr>
      <tr><td>C · F</td><td>Free camera · reset view</td></tr><tr><td>Esc</td><td>Close map or pause</td></tr></table></details>
      <p class="guide-note">Continue opens your last flight or build. Saves stay in this browser.</p>
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
