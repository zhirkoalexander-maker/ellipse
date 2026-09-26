import { Lifetime } from '../core/Lifetime';
import { version as appVersion } from '../../package.json';
import { MISSIONS } from '../core/MissionData';
import type { Missions } from '../core/Missions';

export class MainMenuScene {
  private root: HTMLDivElement;
  private life=new Lifetime();
  private unsubscribeScore?:()=>void;
  private helpOverlay: HTMLDivElement | null = null;
  private onPlay: () => void;
  private onVab: () => void;
  private onSettings: () => void;
  private onContinue: (() => void) | null;
  private missionsOverlay: HTMLDivElement | null = null;
  private scoreEl!: HTMLDivElement;
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

    // Score badge (top-right)
    if (this.missions) {
      const score = document.createElement('div');
      score.style.cssText = 'position:fixed;top:16px;right:16px;z-index:500;color:var(--accent-gold);font:600 12px/1 monospace;letter-spacing:0.1em;background:rgba(8,10,24,0.6);border:1px solid rgba(200,152,56,0.2);border-radius:12px;padding:6px 12px;pointer-events:none;';
      score.textContent = `★ ${this.missions.totalScore}`;
      this.root.appendChild(score);
      this.scoreEl = score;
      this.unsubscribeScore=this.missions.onScore((s) => { if (this.scoreEl) this.scoreEl.textContent = `★ ${s}`; });
    } else {
      this.scoreEl = document.createElement('div');
    }
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
    let totalReward = 0, earnedReward = 0;
    for (const m of MISSIONS) totalReward += m.reward;
    for (const m of MISSIONS) if (completed.has(m.id)) earnedReward += m.reward;
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px;">
        <div style="color:#c89838;font-size:18px;letter-spacing:0.05em;">Missions</div>
        <div style="color:#c89838;font-size:12px;">${earnedReward} / ${totalReward} pts</div>
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
        <div style="color:${done ? '#7CFFB2' : '#c89838'};font-size:12px;font-weight:600;white-space:nowrap;">+${m.reward}</div>`;
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
    card.innerHTML = `<h2>Getting started</h2>
      <p><b>Flight</b> puts a ready-made rocket on the pad. Press <b>Launch</b> or <b>Space</b> and wait for the countdown.</p>
      <p>To build your own, open <b>Vehicle assembly</b>. Add an engine, fuel tanks, then a capsule. Use the arrows in the stack list to move parts. Put a decoupler between stages. <b>Take to pad</b> starts the flight.</p>
      <h3>Going somewhere</h3>
      <p>Open <b>Map</b> to see your blue flight path. <b>Planets</b> shows all destinations. <b>Autopilot to destination</b> handles the launch, transfer and landing using your fuel. Steering or changing throttle takes back control.</p>
      <p>For a manual flight, open <b>Adjust course</b>. Choose a change, check the yellow path and press <b>Apply correction</b>. The preview covers the current planet's gravity; it is not a guaranteed landing route.</p>
      <h3>Coming down</h3>
      <p>Watch <b>Above surface</b> and the estimated time to the ground. <b>Landing view</b> points the camera down. Keep fuel for braking. <b>L</b> turns on landing assist. Parachutes need an atmosphere. An upright touchdown can survive up to <b>90 m/s</b>, but sideways motion or a bad angle can still wreck the rocket.</p>
      <details><summary>Keyboard controls</summary><table>
      <tr><td>↑ / ↓</td><td>Throttle</td></tr><tr><td>W / S · A / D</td><td>Steer</td></tr><tr><td>J / K</td><td>Roll</td></tr>
      <tr><td>Space</td><td>Launch or separate a stage</td></tr><tr><td>L · T</td><td>Landing assist · stability mode</td></tr>
      <tr><td>P · G</td><td>Parachute · landing gear</td></tr><tr><td>M / Tab</td><td>Open map</td></tr><tr><td>Q / E or [ / ]</td><td>Time warp</td></tr>
      <tr><td>C · F</td><td>Free camera · reset view</td></tr><tr><td>Esc</td><td>Close map or pause</td></tr></table></details>
      <p>Drag to orbit the camera; scroll or pinch to zoom. High warp needs engines off and at least <b>17.5 km</b> altitude. Save data stays in this browser.</p>
      <button class="btn btn--primary" style="margin-top:12px;width:100%;padding:12px" id="help-close">Close</button>`;
    const closeBtn = card.querySelector('#help-close') as HTMLButtonElement;
    closeBtn.addEventListener('click', () => { overlay.remove(); this.helpOverlay = null; });
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    this.helpOverlay = overlay;
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); this.helpOverlay?.remove(); this.missionsOverlay?.remove(); this.unsubscribeScore?.(); this.life.dispose(); }
}
