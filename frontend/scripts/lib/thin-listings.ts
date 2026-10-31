import { loadAllTools } from './load-tool.ts';
import { MIN_INDEXABLE_LISTINGS } from '../../src/lib/config.ts';
import { slugify } from '../../src/lib/slug.ts';

// Runs outside Astro's content layer (astro.config.mjs loads before it's
// initialized), so tool files are read directly instead of via
// `getCollection('tools')`. Mirrors the same slug-collision-aware grouping
// used by the categories/languages [...page].astro routes, so a listing's
// thin/indexable status here always matches its page.total there. Thin tags
// need no entry: their pages aren't generated at all (getIndexableTagSlugs).
export function getThinListingPaths(): string[] {
	const tools = loadAllTools().map(({ tool }) => tool);

	const thinPaths: string[] = [];

	const categoryCounts = new Map<string, number>();
	for (const tool of tools) {
		const slug = slugify(tool.category);
		categoryCounts.set(slug, (categoryCounts.get(slug) ?? 0) + 1);
	}
	for (const [slug, count] of categoryCounts) {
		if (count < MIN_INDEXABLE_LISTINGS) thinPaths.push(`/categories/${slug}/`);
	}

	const languageCounts = new Map<string, number>();
	for (const tool of tools) {
		const slug = slugify(tool.language);
		languageCounts.set(slug, (languageCounts.get(slug) ?? 0) + 1);
	}
	for (const [slug, count] of languageCounts) {
		if (count < MIN_INDEXABLE_LISTINGS) thinPaths.push(`/languages/${slug}/`);
	}

	return thinPaths;
}
