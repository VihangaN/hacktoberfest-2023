import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_theme.scss";`,
      },
    },
  },
  define: {
    "process.env": process.env,
    VITE_WEATHER_API_URL: process.env.VITE_WEATHER_API_URL,
    VITE_WEATHER_API_KEY: process.env.VITE_WEATHER_API_KEY,
  },
});
