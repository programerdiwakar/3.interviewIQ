import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    headers: {
      // Relax COOP/COEP so Firebase popup can close properly
      'Cross-Origin-Opener-Policy': 'unsafe-none',
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
    },
    cors: {
      origin: "http://localhost:5173", // your frontend origin
      credentials: true,               // allow cookies
    }
  }
})