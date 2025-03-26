import react from '@vitejs/plugin-react';
import path from 'path';
import { packageDirectorySync } from 'pkg-dir';
import { defineConfig } from 'vite';

const packageRoot = packageDirectorySync() ?? '';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(packageRoot, './src'),
    },
  },
  build: {
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
