// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getThinListingPaths } from './scripts/lib/thin-listings.ts';

// Tag/category/language pages with too few listings are marked noindex (see
// BaseLayout.astro) — keep the sitemap consistent by excluding the same URLs.
const thinPaths = getThinListingPaths();

// https://astro.build/config
export default defineConfig({
	site: 'https://cli.masoko.net',
	integrations: [
		sitemap({
			filter: (page) =>
				// exclude the OAuth landing page — no SEO value
				!page.includes('/auth/') && !thinPaths.some((thinPath) => page.includes(thinPath)),
		}),
	],
});
