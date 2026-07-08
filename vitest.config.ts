import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: false,
    include: ['tests/**/*.test.ts'],
    setupFiles: ['./tests/setup.ts'],
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
        maxForks: 1
      }
    },
    maxConcurrency: 1,
    fileParallelism: false,
    isolate: false
  }
});
