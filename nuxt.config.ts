import { searchForWorkspaceRoot } from "vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    firebase: {
      gen: 2,
      nodeVersion: "18",
    },
  },
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
