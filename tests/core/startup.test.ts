import { afterEach, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.doUnmock('../../src/core/Game');
  vi.resetModules();
});

it('starts the game on each page load without waiting for input', async () => {
  const start = vi.fn().mockResolvedValue(undefined);
  const create = vi.fn();
  vi.doMock('../../src/core/Game', () => ({ Game: class {
    constructor() { create(); }
    start = start;
  } }));

  for (let visit = 0; visit < 2; visit++) {
    vi.resetModules();
    document.body.innerHTML = '<div id="app"></div>';
    await import('../../src/main');
    await vi.waitFor(() => expect(start).toHaveBeenCalledTimes(visit + 1));
    expect(create).toHaveBeenCalledTimes(visit + 1);
    expect(document.querySelector('[role="dialog"]')).toBeNull();
  }
});
