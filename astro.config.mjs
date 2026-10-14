// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://javierfloresaudio.com',
  // base no se necesita: el dominio personalizado apunta a la raíz del sitio
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});