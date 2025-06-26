import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './' // ✅ هذا السطر ضروري علشان يشتغل الموقع بعد النشر
})
