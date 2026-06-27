import { Renderer } from './core/Renderer';
import { SceneManager } from './core/SceneManager';
import '../styles/tokens.css';
import '../styles/typography.css';
import '../styles/components.css';

const renderer = new Renderer();
const sceneMgr = new SceneManager();
document.getElementById('app')!.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const fpsEl = document.createElement('div');
fpsEl.className = 'text-data';
fpsEl.style.cssText = 'position:fixed;top:8px;left:8px;color:var(--starshine);font-size:14px;z-index:100;';
document.body.appendChild(fpsEl);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  sceneMgr.camera.aspect = window.innerWidth / window.innerHeight;
  sceneMgr.camera.updateProjectionMatrix();
});

function loop(): void {
  sceneMgr.update();
  renderer.three.render(sceneMgr.scene, sceneMgr.camera);
  fpsEl.textContent = `${Math.round(sceneMgr.getFps())} FPS`;
  requestAnimationFrame(loop);
}
loop();
