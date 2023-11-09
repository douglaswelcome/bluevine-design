import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";


const SERVER_PORT = 3333;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = 'https://douglaswelcome.github.io';
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
const BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  integrations: [
  // Enable Preact to support Preact JSX components.
  vue(),
  mdx(), 
  tailwind()],
  server: { port: SERVER_PORT },
  site: BASE_URL,

});