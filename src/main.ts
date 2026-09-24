import { Game } from './core/Game';
import '../styles/tokens.css';
import '../styles/typography.css';
import '../styles/components.css';
import '../styles/animations.css';

function hideLoadingScreen(): void {
  const el = document.getElementById('loading-screen');
  if (el) el.classList.add('hidden');
  const label = document.getElementById('loading-label');
  if (label) (label as any).dataset.done = '1';
}

function showStartupError(error: unknown): void {
  console.error('Failed to start Ellipse:', error);
  hideLoadingScreen();
  const panel = document.createElement('div');
  panel.style.cssText = 'position:fixed;inset:0;z-index:10000;color:white;padding:32px;font-family:monospace;background:#06080f;';
  const title = document.createElement('h1');
  title.textContent = 'Failed to start';
  const detail = document.createElement('pre');
  detail.textContent = String(error);
  panel.append(title, detail);
  document.body.appendChild(panel);
}

try {
  const game = new Game();
  void game.start().catch(showStartupError);
} catch (error) {
  showStartupError(error);
}
