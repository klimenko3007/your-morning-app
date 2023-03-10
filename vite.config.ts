import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import legacy from '@vitejs/plugin-legacy';
import { fileURLToPath } from 'url';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy(),
    VitePWA({ registerType: 'autoUpdate' }),
    { ...react(), enforce: 'pre' },
  ],
  server: {
    port: 4000,
    strictPort: true,
  },
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('..', import.meta.url)),
    },
  },
});
