import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
  // Enable Preact to support Preact JSX components.
  vue(),
  mdx(), 
  tailwind()],
  site: 'https://douglaswelcome.github.io',
  base: '/',
  output: 'static',
  
});