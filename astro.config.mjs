import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import node from "@astrojs/node";
import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
