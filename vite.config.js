import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Setting 'base' to '/' is correct for a custom domain (apex domain) like anahel.dev.
  base: '/',
  plugins: [react()],
})