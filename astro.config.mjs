// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to the live domain once it's connected (used for canonical/OG URLs)
  site: 'https://paulandkate.vercel.app',
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false }, // English at /, Thai at /th/
  },
});
