import { afterAll, expect, it, vi } from 'vitest';
const start = vi.hoisted(() => vi.fn());
vi.mock('../../src/core/Game', () => ({ Game: class { start = start; } }));
it('attaches a rejection handler to asynchronous startup', async () => {
  const catchHandler = vi.fn();
  start.mockReturnValue({ catch: catchHandler });
  await import('../../src/main');
  expect(catchHandler).toHaveBeenCalledWith(expect.any(Function));
});

afterAll(() => { vi.doUnmock('../../src/core/Game'); vi.resetModules(); });
