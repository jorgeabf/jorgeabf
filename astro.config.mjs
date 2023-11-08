import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: 'https://jorgearce.dev',
  integrations: [robotsTxt(), prefetch()]
});