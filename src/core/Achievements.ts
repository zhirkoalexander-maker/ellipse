const STORAGE_KEY = 'ellipse_achievements';

export class Achievements {
  private unlocked: Set<string> = new Set();
  private callbacks: Array<(id: string) => void> = [];

  constructor() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { JSON.parse(raw).forEach((id: string) => this.unlocked.add(id)); } catch {}
    }
  }

  unlock(id: string): void {
    if (this.unlocked.has(id)) return;
    this.unlocked.add(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.unlocked]));
    this.callbacks.forEach((cb) => cb(id));
  }

  isUnlocked(id: string): boolean { return this.unlocked.has(id); }
  list(): string[] { return [...this.unlocked]; }
  onUnlock(cb: (id: string) => void): void { this.callbacks.push(cb); }
}
