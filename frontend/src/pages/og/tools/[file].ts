import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { renderOgImage } from '../../../lib/og-image';
import { slugify } from '../../../lib/slug';

// One share card per tool at /og/tools/<id>.png, referenced from the tool
// page's og:image / twitter:image. The param carries the extension (rather
// than an [id].png route) because trailingSlash: 'always' breaks the latter.
export const getStaticPaths = (async () => {
	const tools = await getCollection('tools');
	return tools.map((tool) => ({ params: { file: `${tool.id}.png` }, props: { tool } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ tool: CollectionEntry<'tools'> }> = async ({ props }) => {
	const { tool } = props;
	const { data } = tool;
	const compact = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 });
	const recent = data.repo_stars_recent ? ` (+${compact.format(data.repo_stars_recent)} in 2 wks)` : '';
	const stars = data.repo_stars !== undefined ? `${compact.format(data.repo_stars)} stars${recent} · ` : '';
	const png = await renderOgImage({
		command: `man ${tool.id}`,
		title: data.name,
		subtitle: data.short_description,
		tags: data.tags,
		path: `~/cli.masoko.net/${slugify(data.category)}/${tool.id}`,
		meta: `${stars}${data.language}`,
	});
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
