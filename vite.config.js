import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Merge all build options here
    outDir: 'build', // Changes the output directory from "dist" to "build"
    chunkSizeWarningLimit: 6000, // Adjust chunk size warning limit
  },
});
