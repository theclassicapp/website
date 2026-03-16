import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theclassicapp.github.io',
  base: '/website',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: [
      'ar', 'de', 'en', 'es', 'fr', 'he', 'hi', 'id', 'it', 'ja',
      'ko', 'nl', 'pl', 'pt-BR', 'ru', 'th', 'tr', 'vi', 'zh-CN', 'zh-TW',
    ],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
