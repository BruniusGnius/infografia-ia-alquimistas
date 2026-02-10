import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Definimos la base exacta según tu URL canónica: https://alquimistas.gnius.club/futuro-laboral-ia/
  // Esto asegura que el archivo CSS se genere con la ruta correcta para que Clarity lo encuentre.
  base: '/futuro-laboral-ia/',
  build: {
    // Limpia la carpeta dist antes de construir para evitar ver archivos viejos/cacheados
    emptyOutDir: true,
    // Asegura que los assets se guarden ordenadamente
    assetsDir: 'assets',
  }
})