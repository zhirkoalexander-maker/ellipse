import { afterAll, expect, it, vi } from 'vitest';
const start = vi.hoisted(() => vi.fn());
vi.mock('../../src/core/Game', () => ({ Game: class { start = start; } }));

it('shows asynchronous startup errors', async () => {
  vi.resetModules();
  const error = new Error('Could not initialize the renderer');
  start.mockRejectedValue(error);
  const log = vi.spyOn(console, 'error').mockImplementation(() => {});
  await import('../../src/main');
  await vi.waitFor(() => {
    expect(document.querySelector('h1')?.textContent).toBe('Failed to start');
    expect(document.querySelector('pre')?.textContent).toContain(error.message);
  });
  expect(log).toHaveBeenCalledWith('Failed to start Challenger:', error);
});

afterAll(() => { vi.doUnmock('../../src/core/Game'); vi.resetModules(); });
