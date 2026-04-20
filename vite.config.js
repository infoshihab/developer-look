import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true,          // allows 0.0.0.0
    port: 5173,
    allowedHosts: 'all'  // ✅ allow all hosts
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
