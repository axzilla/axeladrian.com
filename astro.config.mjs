import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import node from "@astrojs/node";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
