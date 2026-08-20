export class Toast {
  private stack: HTMLDivElement | null = null;

  private ensureStack(): HTMLDivElement {
    if (this.stack && document.body.contains(this.stack)) return this.stack;
    const stack = document.createElement('div');
    stack.className = 'toast-stack';
    document.body.appendChild(stack);
    this.stack = stack;
    return stack;
  }

  show(message: string, durationMs = 2500): void {
    const stack = this.ensureStack();
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    stack.appendChild(el);
    // Limit stack depth to avoid overflow
    while (stack.children.length > 4) {
      stack.firstChild?.remove();
    }
    setTimeout(() => {
      el.classList.add('toast-out');
      setTimeout(() => el.remove(), 220);
    }, durationMs);
  }
}

export const toast = new Toast();
