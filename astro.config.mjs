import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://jorgearce.vercel.app",
  outDir: "./dist",
  markdown: {
    drafts: true,
    syntaxHighlight: "prism", //shiki, false
  },
  server: { port: 1234, host: true },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  experimental: {
    integrations: true,
  },
  integrations: [robotsTxt()],
});
