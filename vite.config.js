import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // Specifies the output directory
    chunkSizeWarningLimit: 6000, // Sets the warning limit for chunk sizes
  },
  plugins: [react()],
});
