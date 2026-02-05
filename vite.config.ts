import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/infografia-ia-alquimistas/', // 👈 NOMBRE DEL REPO
})
