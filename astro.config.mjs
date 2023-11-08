import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://jorgearce.dev",
  markdown: {
    drafts: true,
    syntaxHighlight: "prism", 
  },
  integrations: [robotsTxt()],
});
