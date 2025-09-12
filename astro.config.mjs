// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://fatimaria7.github.io",
  base: "/portfolio-main/",
  integrations: [react(), tailwind()],
  build: {
    assets: "_astro",
  },
  trailingSlash: "always",
});
