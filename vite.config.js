import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to a subdirectory, uncomment and modify the next line:
  // base: '/your-subdirectory/',
})
