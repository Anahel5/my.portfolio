import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my.portfolio/', // ← ADD THIS LINE
  server: {
    port: 3000,
    open: true
  }
})