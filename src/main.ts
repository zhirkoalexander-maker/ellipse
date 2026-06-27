import { Game } from './core/Game';
import '../styles/tokens.css';
import '../styles/typography.css';
import '../styles/components.css';

function showFatalError(err: unknown): void {
  const root = document.getElementById('app') ?? document.body;
  root.innerHTML = '';
  const card = document.createElement('div');
  card.style.cssText = `
    position: fixed; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(180deg, #0A0E1A 0%, #1A1F2E 100%);
    color: var(--starshine);
  `;
  const inner = document.createElement('div');
  inner.style.cssText = `
    background: var(--space-panel);
    border: 1px solid #3A4055;
    border-radius: 12px;
    padding: 32px;
    max-width: 560px;
  `;
  const title = document.createElement('h1');
  title.textContent = 'ELLIPSE failed to start';
  title.style.cssText = 'margin: 0 0 12px; font-size: 22px; color: #FF6B6B;';
  const msg = document.createElement('pre');
  msg.textContent = err instanceof Error ? `${err.message}\n\n${err.stack ?? ''}` : String(err);
  msg.style.cssText = `
    margin: 0;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
    white-space: pre-wrap;
    color: var(--stardust);
  `;
  inner.appendChild(title);
  inner.appendChild(msg);
  card.appendChild(inner);
  root.appendChild(card);
}

try {
  const game = new Game();
  game.start();
} catch (err) {
  console.error(err);
  showFatalError(err);
}
