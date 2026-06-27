import type { Settings } from '../config/settings';
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
      position: fixed; inset: 0; z-index: 250;
      background: rgba(10, 14, 26, 0.85);
      display: flex; align-items: center; justify-content: center;
    `;

    const card = document.createElement('div');
    card.className = 'btn';
    card.style.cssText = 'background: var(--space-panel); padding: 32px; min-width: 400px; border-radius: 12px;';

    const title = document.createElement('h2');
    title.className = 'text-display';
    title.textContent = 'SETTINGS';
    title.style.cssText = 'margin-top: 0; font-size: 24px;';
    card.appendChild(title);

    // Units toggle
    const unitsRow = this.makeRow('Units', ['metric', 'imperial', 'mixed'], current.units, (v) => { this.current.units = v as 'metric' | 'imperial' | 'mixed'; });
    card.appendChild(unitsRow);

    // Auto-save toggle
    const autoSaveRow = this.makeToggle('Auto-save', current.autoSave, (v) => { this.current.autoSave = v; });
    card.appendChild(autoSaveRow);

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn btn--primary';
    closeBtn.textContent = 'Save & Close';
    closeBtn.style.cssText = 'margin-top: 16px; width: 100%;';
    closeBtn.addEventListener('click', () => { saveSettings(this.current); this.onClose(); });
    card.appendChild(closeBtn);

    this.root.appendChild(card);
  }

  private makeRow(label: string, options: string[], current: string, onChange: (v: string) => void): HTMLDivElement {
    const row = document.createElement('div');
    row.style.cssText = 'margin: 12px 0;';
    const lbl = document.createElement('div');
    lbl.textContent = label;
    lbl.style.cssText = 'font-size: 13px; color: var(--stardust); margin-bottom: 6px;';
    row.appendChild(lbl);
    const group = document.createElement('div');
    for (const opt of options) {
      const b = document.createElement('button');
      b.className = 'btn';
      b.textContent = opt;
      b.style.cssText = 'margin-right: 6px;';
      if (opt === current) b.style.background = 'var(--plasma-deep)';
      b.addEventListener('click', () => { onChange(opt); saveSettings(this.current); /* refresh */ });
      group.appendChild(b);
    }
    row.appendChild(group);
    return row;
  }

  private makeToggle(label: string, current: boolean, onChange: (v: boolean) => void): HTMLDivElement {
    const row = document.createElement('div');
    row.style.cssText = 'margin: 12px 0; display: flex; justify-content: space-between; align-items: center;';
    const lbl = document.createElement('div');
    lbl.textContent = label;
    lbl.style.cssText = 'font-size: 14px;';
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
