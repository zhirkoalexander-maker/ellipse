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
    this.root.appendChild(this.playerCounter.element);
    const content = document.createElement('div');
    content.className = 'main-menu__content';
    this.root.appendChild(content);

    const logo = document.createElement('div');
    logo.className = 'menu-logo';
    logo.innerHTML = `
      <h1 class="text-display">Challenger</h1>
      <p>Build a rocket. Bring it home.</p>
    `;
    content.appendChild(logo);
    const flights = document.createElement('nav');
    flights.className = 'main-menu__flights';
    flights.setAttribute('aria-label', 'Play');
    content.appendChild(flights);
    const links = document.createElement('nav');
    links.className = 'main-menu__links';
    links.setAttribute('aria-label', 'Game information');
    content.appendChild(links);

    const btn = (label: string, variant: string, cb: () => void): HTMLButtonElement => {
      const b = document.createElement('button');
      b.className = `btn btn--${variant} menu-btn`;
      b.textContent = label;
      b.addEventListener('click', cb);
      return b;
    };
    flights.appendChild(btn('Flight', 'primary', this.onPlay));
    const continueButton = btn('Continue', 'secondary', () => this.onContinue?.());
    continueButton.disabled = !this.onContinue;
    continueButton.title = this.onContinue ? 'Open your last flight or build' : 'No saved flight yet. Choose Flight to start.';
    flights.appendChild(continueButton);
    flights.appendChild(btn('Vehicle assembly', 'secondary', this.onVab));
    links.appendChild(btn('Missions', 'ghost', () => this.toggleMissions()));
    links.appendChild(btn('Settings', 'ghost', this.onSettings));
    links.appendChild(btn('Guide', 'ghost', () => this.toggleHelp()));
    const version = document.createElement('div');
    version.textContent = `v${appVersion}`;
    version.className = 'main-menu__version';
    content.appendChild(version);

  }

  private toggleMissions(): void {
    if (this.missionsOverlay) { this.missionsOverlay.remove(); this.missionsOverlay = null; return; }
    if (!this.missions) return;
    const overlay = document.createElement('div');
    overlay.className = 'guide-overlay menu-overlay';
    const card = document.createElement('div');
    card.className = 'guide-card menu-dialog';
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
      row.className = `mission-row${done ? ' mission-row--done' : ''}`;
      row.innerHTML = `
        <div>
          <div class="mission-name">${done ? '✓ ' : ''}${m.name}</div>
          <div class="mission-description">${m.description}</div>
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
    overlay.className = 'guide-overlay menu-overlay';
    const card = document.createElement('div');
    card.className = 'guide-card menu-dialog';
    card.classList.add('flight-guide');
    card.innerHTML = `<h2>Guide</h2>
      <p class="guide-note">Keyboard: switch to English for W, A, S and D.</p>
      <h3>First flight</h3>
      <p><b>Flight</b> gives you a ready-made rocket. Press <b>Launch</b> or Space to lift off.</p>
      <p>↑ and ↓ change throttle. W/S and A/D steer. Drag to move the camera; scroll or pinch to zoom.</p>
      <button class="btn btn--secondary" id="guide-tour" style="padding:10px 16px">Show me</button>
      <details><summary>Build a rocket</summary>
        <p>Open <b>Vehicle assembly</b>. Start with an S engine, two 5 t tanks and an S capsule. Add them in that order, then choose <b>Take to pad</b>.</p>
        <p>For side engines, select a tank and choose <b>Side pair</b>. Add engines and side decouplers so you can drop them later.</p>
        <p>Space releases the side decouplers first, then the lowest main stage. Both capsules have a parachute built in.</p>
      </details>
      <details><summary>Fly to the Moon</summary>
        <p>Open <b>Map</b>, select <b>Moon</b>, then <b>Autopilot to destination</b>. Autopilot uses your engines and fuel to fly there and land.</p>
        <p>Steering or changing throttle takes back control. Leave <b>Manual warp</b> off to let autopilot adjust time warp.</p>
        <p>To come home, select <b>Earth</b> and start autopilot again. Save some fuel for the return.</p>
      </details>
      <details><summary>Land</summary>
        <p><b>Above surface</b> shows the distance to the ground. Use <b>Landing view</b> to look down.</p>
        <p>Keep the engine pointing down and fire it to slow down. Brake early. <b>L</b> turns on landing assist.</p>
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
