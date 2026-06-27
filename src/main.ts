import { Game } from './core/Game';
import '../styles/tokens.css';
import '../styles/typography.css';
import '../styles/components.css';

try {
  const game = new Game();
  game.start();
} catch (e) {
  console.error('Failed to start Ellipse:', e);
  document.body.innerHTML = `<div style="color:white;padding:32px;font-family:monospace;">
      <h1>Ellipse failed to start</h1>
      <pre>${String(e)}</pre>
    </div>`;
}
