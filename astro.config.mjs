// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://dmontagu.github.io',
  base: isProduction ? '/katie-dautremont' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});