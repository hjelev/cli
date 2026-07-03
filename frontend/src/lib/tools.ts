import { getCollection, type CollectionEntry } from 'astro:content';

// Newest `updated` first; missing dates sort last; name as a stable tiebreak.
// `updated` is an ISO YYYY-MM-DD string, so localeCompare orders it chronologically.
export function sortByUpdated(tools: CollectionEntry<'tools'>[]): CollectionEntry<'tools'>[] {
	return [...tools].sort((a, b) => {
		const cmp = (b.data.updated ?? '').localeCompare(a.data.updated ?? '');
		return cmp !== 0 ? cmp : a.data.name.localeCompare(b.data.name);
	});
}

export async function getSortedTools(): Promise<CollectionEntry<'tools'>[]> {
	return sortByUpdated(await getCollection('tools'));
}
