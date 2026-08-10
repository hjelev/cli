import type { CollectionEntry } from 'astro:content';
import { CATEGORIES } from './schema';
import { slugify } from './slug';

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
