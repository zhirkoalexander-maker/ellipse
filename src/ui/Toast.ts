export class Toast {
  show(message: string, durationMs = 2500): void {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    el.style.cssText = `
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `;
    document.body.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 200);
    }, durationMs);
  }
}

export const toast = new Toast();
