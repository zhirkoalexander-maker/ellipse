import { readPlayerCount } from '../core/PlayerCount';

export class PlayerCounter {
  readonly element = document.createElement('div');
  private timer?: ReturnType<typeof setInterval>;
  private disposed = false;
  constructor() {
    this.element.className = 'player-counter';
    this.element.textContent = 'Players —';
    this.element.title = 'Browsers that have opened the game since counting began. Clearing site data counts as a new player.';
    this.element.style.cssText = 'position:fixed;top:16px;right:16px;color:#afbfcc;font:12px system-ui;padding:6px 10px;background:#101922;border:1px solid #344454;border-radius:6px;';
    // Local development and automated unit tests must not inflate the public total.
    if (location.hostname === 'zhirkoalexander-maker.github.io' && location.pathname.startsWith('/ellipse/')) {
      void this.refresh();
      this.timer = setInterval(()=>{if(!document.hidden)void this.refresh();},60000);
    }
  }
  private async refresh(): Promise<void> {
    const count = await readPlayerCount();
    if (this.disposed) return;
    if (count !== null) this.element.textContent = `Players ${count.toLocaleString('en')}`;
  }
  dispose(): void { this.disposed=true;clearInterval(this.timer);this.element.remove(); }
}
