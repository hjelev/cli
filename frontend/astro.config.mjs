// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cli.masoko.net',
	integrations: [
		sitemap({
			// exclude the OAuth landing page — no SEO value
			filter: (page) => !page.includes('/auth/'),
		}),
	],
});
