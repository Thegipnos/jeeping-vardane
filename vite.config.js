import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // отключает инлайнинг больших файлов
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // добавляет хеш к файлам
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
