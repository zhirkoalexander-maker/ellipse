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
      background: rgba(6,8,20,0.95);
      border: none; border-radius: 0;
    `;

    const logo = document.createElement('div');
    logo.className = 'menu-logo';
    logo.style.cssText = 'margin-bottom: var(--space-8); text-align: center;';
    logo.innerHTML = `
      <svg viewBox="0 0 120 40" fill="none" style="width:100px;height:36px;display:block;margin:0 auto var(--space-2);">
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="52" ry="16" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="1.2" opacity="0.4"/>
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="36" ry="10" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.8" opacity="0.25"/>
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="18" ry="5" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.6" opacity="0.15"/>
        <circle cx="60" cy="20" r="2.5" fill="var(--accent-gold)"/>
        <line x1="10" y1="20" x2="110" y2="20" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
        <line x1="60" y1="4" x2="60" y2="36" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
      </svg>
      <div class="text-display" style="font-size:52px;letter-spacing:0.1em;color:var(--accent-gold);">ELLIPSE</div>
      <div class="text-caption" style="margin-top:var(--space-2);letter-spacing:0.08em;">Rocket simulator</div>
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
    continueButton.title = this.onContinue ? 'Resume your last flight or saved build' : 'No saved flight yet — start with FLIGHT';
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
    card.style.cssText = 'max-width:520px;max-height:80vh;overflow-y:auto;padding:28px;font-family:system-ui,sans-serif;color:#ddd;background:#0c1020;border:1px solid rgba(200,152,56,0.2);border-radius:8px;';
    const completed = new Set(this.missions.getCompleted());
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px;">
        <div style="color:#c89838;font-size:18px;letter-spacing:0.05em;">Missions</div>
        <div style="color:#c89838;font-size:12px;">${completed.size} / ${MISSIONS.length} completed</div>
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
    card.innerHTML = `<h2>Quick guide</h2>
      <p>Switch your keyboard to English before playing so the letter keys work correctly.</p>
      <button class="btn btn--primary" id="guide-tour" style="padding:10px 16px">Watch the tour</button>
      <ol class="quick-guide">
      <li><b>Start</b><span>Flight → Launch. Space works too.</span></li>
      <li><b>Build</b><span>Vehicle assembly → engine → two tanks → capsule → Take to pad.</span></li>
      <li><b>Fly</b><span>↑ / ↓ throttle. W/S and A/D steer.</span></li>
      <li><b>Go to the Moon</b><span>Map → Moon → Autopilot to destination.</span></li>
      <li><b>Land</b><span>Watch Above surface. Press L for landing assist. Keep fuel for braking.</span></li>
      <li><b>Return</b><span>Keep fuel. Map → Earth → Autopilot to destination.</span></li>
      </ol>
      <details><summary>Keyboard controls</summary><table>
      <tr><td>↑ / ↓</td><td>Throttle</td></tr><tr><td>W / S · A / D</td><td>Steer</td></tr><tr><td>J / K</td><td>Roll</td></tr>
      <tr><td>Space</td><td>Launch or separate a stage</td></tr><tr><td>L · T</td><td>Landing assist · stability mode</td></tr>
      <tr><td>P · G</td><td>Parachute · landing gear</td></tr><tr><td>M / Tab</td><td>Open map</td></tr><tr><td>Q / E or [ / ]</td><td>Time warp</td></tr>
      <tr><td>C · F</td><td>Free camera · reset view</td></tr><tr><td>Esc</td><td>Close map or pause</td></tr></table></details>
      <p>Drag to look around. Scroll or pinch to zoom.</p>
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
