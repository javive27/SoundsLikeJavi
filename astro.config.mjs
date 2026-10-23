// astro.config.mjs
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://javierfloresaudio.com',

  // base no se necesita: el dominio personalizado apunta a la raíz del sitio
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});