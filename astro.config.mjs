// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// @ts-ignore
import honoAstro from "hono-astro-adapter"
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",

  adapter: honoAstro(),
});
