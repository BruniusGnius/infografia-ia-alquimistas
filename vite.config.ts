import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/infografia-ia-alquimistas/', // 👈 ESTA ES LA CLAVE
  plugins: [react()],
})