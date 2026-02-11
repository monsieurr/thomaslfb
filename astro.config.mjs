// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://www.thomaslfb.eu', // your domain
  base: '/',                     // keep '/' unless you deploy in a subfolder
  integrations: [sitemap()]
});
