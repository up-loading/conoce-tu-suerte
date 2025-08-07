import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',  // <-- Agrega esta línea para que las rutas sean relativas
  plugins: [react()],
})
