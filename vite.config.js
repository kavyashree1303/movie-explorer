import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // ↓ For Netlify the base should be root
  base: '/',          // or simply delete this line
  plugins: [react()]
});
