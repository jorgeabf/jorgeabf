import { defineConfig } from "astro/config";

export default defineConfig({
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
});
