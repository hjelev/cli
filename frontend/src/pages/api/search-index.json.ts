import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { sortByUpdated } from '../../lib/tools';
import { getReservedSlugs, filterDisplayTags } from '../../lib/tag-filter';
import { stripLeadingEmoji } from '../../lib/text';

// Compact search index for the home page's client-side search/filters. Fetched
// lazily on first interaction with the search box or filter selects, so plain
// browsing never downloads it. Already in recently-updated order. `search`
// mirrors ToolCard's `data-search`; `tags` is pre-filtered so client-rendered
// cards match the static ones (see ToolCard.astro).
export const GET: APIRoute = async () => {
	const allTools = sortByUpdated(await getCollection('tools'));
	const reservedSlugs = getReservedSlugs(allTools);
	const searchIndex = allTools.map((tool) => ({
		id: tool.id,
		name: tool.data.name,
		short: stripLeadingEmoji(tool.data.short_description),
		category: tool.data.category,
		language: tool.data.language,
		tags: filterDisplayTags(tool.data.tags, reservedSlugs),
		logo: tool.data.logo ?? null,
		stars: tool.data.repo_stars ?? null,
		created: tool.data.repo_created ?? null,
		verified: Boolean(tool.data.repo_badge),
		search: `${tool.data.name} ${tool.data.short_description} ${tool.data.tags.join(' ')}`.toLowerCase(),
	}));
	return new Response(JSON.stringify(searchIndex), {
		headers: { 'Content-Type': 'application/json' },
	});
};
