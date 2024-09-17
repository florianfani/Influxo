import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Make sure the build output goes to the dist folder
    assetsDir: "assets", // Where to store assets (optional)
    rollupOptions: {
      input: "/src/main.tsx", // Entry point for your React app
    },
  },
  server: {
    port: 3000, // Ensure the dev server runs on port 3000 (default)
  },
});
