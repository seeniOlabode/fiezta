import { searchForWorkspaceRoot } from "vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd()), "/Users/macbookpro/"],
      },
      hmr: {
        protocol: "wss",
      },
    },
  },
  css: ["~/styles/styles.css"],
  postcss: {
    plugins: {
      "postcss-nested": {},
    },
  },
});
