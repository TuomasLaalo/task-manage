import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Vitest (CI korjaus: jsdom)
  test: {
    globals: true,
    environment: "jsdom",
  },

  // Kehitysympäristö
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  // Build output
  build: {
    outDir: "dist",
    sourcemap: true,
  },
})
