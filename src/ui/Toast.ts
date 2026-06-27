export class Toast {
    show(message: string, durationMs = 2500): void {
      const el = document.createElement('div');
      el.textContent = message;
      el.style.cssText = `
        position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
        background: rgba(37, 43, 61, 0.95);
        border: 1px solid #3A4055;
        border-radius: 8px;
        padding: 10px 20px;
        color: var(--starshine);
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        z-index: 300;
        opacity: 0;
        transition: opacity 200ms ease-out;
      `;
      document.body.appendChild(el);
      requestAnimationFrame(() => { el.style.opacity = '1'; });
      setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 200);
      }, durationMs);
    }
  }

  export const toast = new Toast();
