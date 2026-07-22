import type { Settings, Units, Difficulty } from '../config/settings';
import { DEFAULT_SETTINGS } from '../config/settings';

const KEY = 'ellipse_settings';

export function loadSettings(): Settings {
  const raw = localStorage.getItem(KEY);
  if (!raw) return { ...DEFAULT_SETTINGS };
  try { return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) }; } catch { return { ...DEFAULT_SETTINGS }; }
}

export function saveSettings(s: Settings): void {
  localStorage.setItem(KEY, JSON.stringify(s));
}

export class SettingsPanel {
  private root: HTMLDivElement;
  private onClose: () => void;
  private current: Settings;

  constructor(current: Settings, onClose: () => void) {
    this.current = current;
    this.onClose = onClose;

    this.root = document.createElement('div');
    this.root.style.cssText = `
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;

    const card = document.createElement('div');
    card.className = 'panel panel--elevated';
    card.style.cssText = 'padding: var(--space-6); min-width: 400px;';

    const title = document.createElement('h2');
    title.className = 'text-display-sm';
    title.textContent = 'Settings';
    title.style.cssText = 'margin: 0 0 var(--space-5);';
    card.appendChild(title);

    const unitsRow = this.makeRow('Units', ['metric', 'imperial'], current.units as Units, (v) => { this.current.units = v as Units; });
    card.appendChild(unitsRow);

    const diffRow = this.makeRow('Difficulty', ['easy', 'normal', 'hard', 'realistic'], current.difficulty, (v) => { this.current.difficulty = v as Difficulty; });
    card.appendChild(diffRow);

    const autoSaveRow = this.makeToggle('Auto-save', current.autoSave, (v) => { this.current.autoSave = v; });
    card.appendChild(autoSaveRow);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn btn--primary';
    closeBtn.textContent = 'Save & Close';
    closeBtn.style.cssText = 'margin-top: var(--space-4); width: 100%; padding: 12px;';
    closeBtn.addEventListener('click', () => { saveSettings(this.current); this.onClose(); });
    card.appendChild(closeBtn);

    this.root.appendChild(card);
  }

  private makeRow(label: string, options: string[], current: string, onChange: (v: string) => void): HTMLDivElement {
    const row = document.createElement('div');
    row.style.cssText = 'margin: var(--space-3) 0;';
    const lbl = document.createElement('div');
    lbl.className = 'text-caption';
    lbl.textContent = label;
    lbl.style.cssText = 'margin-bottom: var(--space-2);';
    row.appendChild(lbl);
    const group = document.createElement('div');
    group.style.cssText = 'display:flex;gap:var(--space-2);';
    for (const opt of options) {
      const b = document.createElement('button');
      b.className = `btn${opt === current ? ' btn--secondary' : ''}`;
      b.textContent = opt;
      if (opt === current) b.style.borderColor = 'var(--accent-blue)';
      b.addEventListener('click', () => { onChange(opt); saveSettings(this.current); });
      group.appendChild(b);
    }
    row.appendChild(group);
    return row;
  }

  private makeToggle(label: string, current: boolean, onChange: (v: boolean) => void): HTMLDivElement {
    const row = document.createElement('div');
    row.style.cssText = 'margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;';
    const lbl = document.createElement('span');
    lbl.className = 'text-body';
    lbl.textContent = label;
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.checked = current;
    toggle.addEventListener('change', () => onChange(toggle.checked));
    row.appendChild(lbl);
    row.appendChild(toggle);
    return row;
  }

  mount(parent: HTMLElement = document.body): void { parent.appendChild(this.root); }
  unmount(): void { this.root.remove(); }
}