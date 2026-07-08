import fs from 'node:fs';
import path from 'node:path';
import { parseToolFile } from './load-tool.ts';
import { MIN_INDEXABLE_LISTINGS } from '../../src/lib/config.ts';
import { slugify } from '../../src/lib/slug.ts';

const TOOLS_DIR = path.resolve(import.meta.dirname, '../../src/content/tools');

// Runs outside Astro's content layer (astro.config.mjs loads before it's
// initialized), so tool files are read directly instead of via
// `getCollection('tools')`. Mirrors the same slug-collision-aware grouping
// used by the tags/categories/languages [...page].astro routes, so a
// listing's thin/indexable status here always matches its page.total there.
export function getThinListingPaths(): string[] {
	const tools = fs
		.readdirSync(TOOLS_DIR)
		.filter((file) => file.endsWith('.md'))
		.map((file) => parseToolFile(path.join(TOOLS_DIR, file)))
		.flatMap((result) => ('tool' in result ? [result.tool] : []));

	const thinPaths: string[] = [];

	const tagCounts = new Map<string, number>();
	for (const tool of tools) {
		const slugs = new Set(tool.tags.map(slugify));
		for (const slug of slugs) tagCounts.set(slug, (tagCounts.get(slug) ?? 0) + 1);
	}
	for (const [slug, count] of tagCounts) {
		if (count < MIN_INDEXABLE_LISTINGS) thinPaths.push(`/tags/${slug}/`);
	}

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
