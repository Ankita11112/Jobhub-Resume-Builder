// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     // Merge all build options here
//     outDir: 'build', // Changes the output directory from "dist" to "build"
//     chunkSizeWarningLimit: 6000, // Adjust chunk size warning limit
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Changes the output directory from "dist" to "build"
    chunkSizeWarningLimit: 6000, // Adjust chunk size warning limit
  },
  server: {
    open: true, // Automatically opens the browser during dev
  },
  base: "/", // Ensure proper handling of routes; update if deploying to a subdirectory
});
