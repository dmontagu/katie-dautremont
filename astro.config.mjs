// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dmontagu.github.io',
  base: '/katie-dautremont',
  vite: {
    plugins: [tailwindcss()]
  }
});