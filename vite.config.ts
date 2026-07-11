import { defineConfig } from 'vite';
export default defineConfig({
  base: '/ellipse/',
  server: { port: 3000, open: true },
  build: { target: 'es2022', sourcemap: true }
});
