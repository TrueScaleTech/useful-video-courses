import { defineConfig } from 'astro/config';

// Published on GitHub Pages under the organisation account.
export default defineConfig({
  site: 'https://truescaletech.github.io',
  base: '/useful-video-courses',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
