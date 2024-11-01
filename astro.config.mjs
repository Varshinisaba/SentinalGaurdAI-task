import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: '/SentinalGaurdAI-task/' // replace with the actual GitHub repo name
});
