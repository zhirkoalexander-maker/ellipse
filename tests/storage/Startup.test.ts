import { afterAll, expect, it, vi } from 'vitest';
const start = vi.hoisted(() => vi.fn());
vi.mock('../../src/core/Game', () => ({ Game: class { start = start; } }));
it('handles asynchronous startup errors', async () => {
  vi.resetModules();
  const error = new Error('Could not start');
  start.mockRejectedValue(error);
  const log = vi.spyOn(console, 'error').mockImplementation(() => {});
  await import('../../src/main');
  await vi.waitFor(() => expect(log).toHaveBeenCalledWith('Failed to start Challenger:', error));
});

afterAll(() => { vi.doUnmock('../../src/core/Game'); vi.resetModules(); });
