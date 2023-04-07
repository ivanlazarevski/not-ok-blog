import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: "hva1tkb9",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});