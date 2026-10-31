import { getCollection, type CollectionEntry } from 'astro:content';
import { filterDisplayTags } from './tag-filter';
import { slugify } from './slug';

// Newest `updated` first; missing dates sort last; name as a stable tiebreak.
// `updated` is an ISO YYYY-MM-DD string, so localeCompare orders it chronologically.
export function sortByUpdated(tools: CollectionEntry<'tools'>[]): CollectionEntry<'tools'>[] {
	return [...tools].sort((a, b) => {
		const cmp = (b.data.updated ?? '').localeCompare(a.data.updated ?? '');
		return cmp !== 0 ? cmp : a.data.name.localeCompare(b.data.name);
	});
}

// Category/tag/language listings rank tools whose README carries our badge
// first (the reward for linking back), then fall back to newest-first. The home
// page, feeds and the JSON API stay purely chronological via sortByUpdated.
export function sortForListing(tools: CollectionEntry<'tools'>[]): CollectionEntry<'tools'>[] {
	return sortByUpdated(tools).sort((a, b) => Number(Boolean(b.data.repo_badge)) - Number(Boolean(a.data.repo_badge)));
}

export async function getSortedTools(): Promise<CollectionEntry<'tools'>[]> {
	return sortByUpdated(await getCollection('tools'));
}

// Most relevant tools for the "related tools" section of a tool page: ranked
// by shared (non-redundant) tags, with a same-category bonus, then stars and
// name as tiebreaks. Deterministic, so every build links the same pages —
// stable internal links help crawlers find and keep indexing listings.
export function getRelatedTools(
	tool: CollectionEntry<'tools'>,
	allTools: CollectionEntry<'tools'>[],
	reservedSlugs: Set<string>,
	count = 6,
): CollectionEntry<'tools'>[] {
	const tagSlugs = (t: CollectionEntry<'tools'>) => new Set(filterDisplayTags(t.data.tags, reservedSlugs).map(slugify));
	const ownTags = tagSlugs(tool);
	const score = (t: CollectionEntry<'tools'>) => {
		let shared = 0;
		for (const slug of tagSlugs(t)) if (ownTags.has(slug)) shared++;
		return shared + (t.data.category === tool.data.category ? 2 : 0);
	};
	return allTools
		.filter((t) => t.id !== tool.id)
		.map((t) => ({ t, score: score(t) }))
		.filter(({ score }) => score > 0)
		.sort(
			(a, b) =>
				b.score - a.score ||
				(b.t.data.repo_stars ?? 0) - (a.t.data.repo_stars ?? 0) ||
				a.t.data.name.localeCompare(b.t.data.name),
		)
		.slice(0, count)
		.map(({ t }) => t);
}
