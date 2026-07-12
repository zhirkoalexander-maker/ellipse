import { Game } from './core/Game';
import '../styles/tokens.css';
import '../styles/typography.css';
import '../styles/components.css';

function hideLoadingScreen(): void {
  const el = document.getElementById('loading-screen');
  if (el) el.classList.add('hidden');
  const label = document.getElementById('loading-label');
  if (label) (label as any).dataset.done = '1';
}

try {
  const game = new Game();
  hideLoadingScreen();
  game.start();
} catch (e) {
  console.error('Failed to start Ellipse:', e);
  hideLoadingScreen();
  document.body.innerHTML += `<div style="position:fixed;inset:0;z-index:950;color:white;padding:32px;font-family:monospace;background:#06080f;">
      <h1>Failed to start</h1>
      <pre>${String(e)}</pre>
    </div>`;
}
