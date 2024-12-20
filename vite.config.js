import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import reactRefresh from "@vitejs/plugin-react";
// import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 6000, 
  },
});