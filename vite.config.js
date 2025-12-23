import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components", //  Reusable UI components
      "@assets": "/src/assets", // Static assets (images, icons, etc.)
      "@services": "/src/services", //API calls and external services
      "@store": "/src/store", // Redux or Zustand store for state management
      "@styles": "/src/styles", //Global and component-level styles (e.g., SCSS)
    },
  },
  server: {
    host: true,
    port: 5014,
    watch: {
      usePolling: true
    },
    allowedHosts: ['www.ship-simple.com',"ship-simple.com"],
  },

});
