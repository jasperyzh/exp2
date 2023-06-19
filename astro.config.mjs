import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://staging.fishermen-analytics.com/",
  base: '/exp/',
  experimental: {
    assets: true,
  },
  integrations: [tailwind()],
});
