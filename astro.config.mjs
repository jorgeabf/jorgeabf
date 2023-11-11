import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import prefetch from "@astrojs/prefetch";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jorgearce.dev',
  integrations: [robotsTxt(), prefetch(), sitemap()]
});