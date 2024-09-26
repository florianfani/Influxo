import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // or './' if deployed in a subdirectory
  build: {
    outDir: 'dist'
  }
});
