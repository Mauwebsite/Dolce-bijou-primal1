import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  // base: "https://Mauwebsite.github.io/Dolce-bijou-frontend.git"
  base: "/Dolce-bijou-frontend/"
})
