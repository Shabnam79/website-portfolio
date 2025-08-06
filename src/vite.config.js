import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/website-portfolio/', // 👈 this is critical
  plugins: [react()],
});

