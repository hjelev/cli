import type { CollectionEntry } from 'astro:content';
import { CATEGORIES } from './schema';
import { slugify } from './slug';
import { MIN_INDEXABLE_LISTINGS } from './config';

// Standard Levenshtein edit distance (DP table).
function levenshtein(a: string, b: string): number {
	const rows = a.length + 1;
	const cols = b.length + 1;
	const dp: number[][] = Array.from({ length: rows }, (_, i) => [i, ...Array(cols - 1).fill(0)]);
	for (let j = 0; j < cols; j++) dp[0][j] = j;
	for (let i = 1; i < rows; i++) {
		for (let j = 1; j < cols; j++) {
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;
			dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
		}
	}
	return dp[rows - 1][cols - 1];
}

// Guarded fuzzy match: skips strings too short to fuzz safely (e.g. "AI" vs
// "UI" would otherwise collide at distance 1), and scales the allowed
// distance with length so short-ish words still require a close match.
function isFuzzyMatch(a: string, b: string): boolean {
	if (a === b) return true;
	const minLen = Math.min(a.length, b.length);
	if (minLen < 4) return false;
	const threshold = minLen <= 6 ? 1 : 2;
	return levenshtein(a, b) <= threshold;
}

// Every category and every distinct language in use, slugified — the set a
// tag is checked against to decide if it's a redundant label.
export function getReservedSlugs(tools: CollectionEntry<'tools'>[]): Set<string> {
	const slugs = new Set<string>();
	for (const category of CATEGORIES) slugs.add(slugify(category));
	for (const tool of tools) slugs.add(slugify(tool.data.language));
	return slugs;
}

export function isRedundantTag(tag: string, reservedSlugs: Set<string>): boolean {
	const tagSlug = slugify(tag);
	if (reservedSlugs.has(tagSlug)) return true;
	for (const reserved of reservedSlugs) {
		if (isFuzzyMatch(tagSlug, reserved)) return true;
	}
	return false;
}

export function filterDisplayTags(tags: string[], reservedSlugs: Set<string>): string[] {
	return tags.filter((tag) => !isRedundantTag(tag, reservedSlugs));
}

export interface TagGroup {
	// Distinct tags sharing the slug, in first-seen order (e.g. ["C++", "C#"]).
	labels: string[];
	toolIds: Set<string>;
}

// Distinct tags can share a slug (e.g. "C++" and "C#" → "c"), so group by
// slug. Tags redundant with a category/language are skipped entirely.
export function groupTagsBySlug(
	tools: CollectionEntry<'tools'>[],
	reservedSlugs: Set<string>,
): Map<string, TagGroup> {
	const groups = new Map<string, TagGroup>();
	for (const tool of tools) {
		for (const tag of tool.data.tags) {
			if (isRedundantTag(tag, reservedSlugs)) continue;
			const slug = slugify(tag);
			const group = groups.get(slug) ?? { labels: [], toolIds: new Set<string>() };
			if (!group.labels.includes(tag)) group.labels.push(tag);
			group.toolIds.add(tool.id);
			groups.set(slug, group);
		}
	}
	return groups;
}

// Slugs of tags with enough listings to get a page. Thinner tags get no page
// at all (rather than a noindex one) and are shown as plain text, so crawlers
// don't spend their budget on hundreds of near-empty pages.
export function getIndexableTagSlugs(
	tools: CollectionEntry<'tools'>[],
	reservedSlugs: Set<string>,
): Set<string> {
	const slugs = new Set<string>();
	for (const [slug, group] of groupTagsBySlug(tools, reservedSlugs)) {
		if (group.toolIds.size >= MIN_INDEXABLE_LISTINGS) slugs.add(slug);
	}
	return slugs;
}
