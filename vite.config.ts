import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Esto asegura que las rutas funcionen en GitHub Pages
  // Si tu repo se llama "infografia-ia", cambia esto a '/infografia-ia/'
  base: './', 
})