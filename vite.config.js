import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Portu buraya sabitliyoruz
    host: true, // İstersen yerel ağdaki telefondan da siteye bakabilirsin
    strictPort: true, // Eğer 3000 doluysa hata verir (böylece başka porta kaçmaz)
  }
})