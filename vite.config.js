// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/jeeping-vardane/', // ⚠️ имя твоего репозитория!
  plugins: [react()],
});
