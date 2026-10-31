import type { CollectionEntry } from 'astro:content';
import { SITE_ORIGIN } from './config';
import { stripEmoji } from './text';
import { TOOL_SEO } from './seo-overrides';

export const SITE_NAME = 'The Terminal Index';

type Tool = CollectionEntry<'tools'>;

// Cuts at a word boundary and adds an ellipsis when `text` exceeds `max`.
export function truncate(text: string, max: number): string {
	if (text.length <= max) return text;
	const cut = text.slice(0, max - 1);
	const space = cut.lastIndexOf(' ');
	return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,.;:–—-]+$/, '')}…`;
}

// "<base> — The Terminal Index", with "— Page N" on paginated pages so every
// URL in a paginated set has a distinct title.
export function pageTitle(base: string, currentPage = 1): string {
	return currentPage > 1 ? `${base} — Page ${currentPage} — ${SITE_NAME}` : `${base} — ${SITE_NAME}`;
}

// Max <title> length worth writing: Google shows roughly 60–70 chars. The
// " | The Terminal Index" suffix is only kept when the whole title fits —
// Google already shows the site name above each result.
const TITLE_MAX = 70;

// Words a cut tagline shouldn't end on ("…lines of code and" → "…lines of code").
const DANGLING = /\s+(?:a|an|and|as|at|by|for|from|in|into|of|on|or|the|to|via|with|your)$/i;

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

// "cliamp - Terminal music player" / "glow: Render…" → the part after the
// name, without emoji. Sentences that merely start with the name ("cloc
// counts…") are left alone — they read fine in a meta description.
function stripNamePrefix(name: string, text: string): string {
	const clean = stripEmoji(text);
	const stripped = clean.replace(new RegExp(`^${escapeRegExp(name)}\\s*[-–—:]\\s+`, 'i'), '');
	return stripped === clean ? clean : capitalize(stripped);
}

// The tagline as it should read after "<name> — " in a title: no emoji, no
// trailing period, and no repeat of the name ("jjui is a TUI for…" → "A TUI
// for…", "cloc counts lines…" → "Counts lines…").
export function cleanTagline(name: string, shortDescription: string): string {
	const named = new RegExp(`^${escapeRegExp(name)}(?:\\s+is\\s+|\\s+(?=[a-z]+s\\b))`, 'i');
	const tagline = stripNamePrefix(name, shortDescription).replace(/\.$/, '');
	return capitalize(tagline.replace(named, ''));
}

// Shortens a tagline to `max` chars: the longest prefix ending at a clause
// boundary (" - ", " (", ", ", ". "…) if it keeps most of the room — a whole
// clause needs no ellipsis — else a cut at a word boundary plus "…".
function fitTagline(tagline: string, max: number): string {
	if (tagline.length <= max) return tagline;
	const clauseEnds = [...tagline.matchAll(/\s[-–—]\s|[.;:!?,]\s|\s\(/g)].map((m) => m.index);
	const clauseEnd = clauseEnds.filter((end) => end >= Math.max(15, max * 0.5) && end <= max).pop();
	if (clauseEnd !== undefined) return tagline.slice(0, clauseEnd).replace(/[\s,.;:–—-]+$/, '');
	let cut = tagline.slice(0, tagline.lastIndexOf(' ', max - 1)) || tagline.slice(0, max - 1);
	while (DANGLING.test(cut)) cut = cut.replace(DANGLING, '');
	return `${cut.replace(/[\s,.;:–—-]+$/, '')}…`;
}

// Tool pages lead with name + tagline (what people search for). A
// hand-written tagline from TOOL_SEO wins over the generated one.
export function toolTitle(tool: Tool): string {
	const { name, short_description } = tool.data;
	const tagline = TOOL_SEO[tool.id]?.tagline ?? cleanTagline(name, short_description);
	const branded = `${name} — ${tagline} | ${SITE_NAME}`;
	if (branded.length <= TITLE_MAX) return branded;
	return `${name} — ${fitTagline(tagline, Math.max(20, TITLE_MAX - name.length - 3))}`;
}

// Appends " Page N of M." to a listing description on pages after the first.
export function pagedDescription(description: string, currentPage: number, lastPage: number): string {
	return currentPage > 1 ? `${description} Page ${currentPage} of ${lastPage}.` : description;
}

// "a, b, c and more" — a few names to make listing descriptions specific.
export function sampleNames(tools: Tool[], count = 3): string {
	const names = tools.slice(0, count).map((tool) => tool.data.name);
	return tools.length > count ? `${names.join(', ')} and more` : names.join(', ');
}

export const toolUrl = (tool: Tool) => `${SITE_ORIGIN}/tools/${tool.id}/`;

export function itemListLd(tools: Tool[], offset = 0): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: tools.map((tool, i) => ({
			'@type': 'ListItem',
			position: offset + i + 1,
			url: toolUrl(tool),
			name: tool.data.name,
		})),
	};
}

export function websiteLd(description: string): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: SITE_NAME,
		url: `${SITE_ORIGIN}/`,
		description,
		potentialAction: {
			'@type': 'SearchAction',
			target: { '@type': 'EntryPoint', urlTemplate: `${SITE_ORIGIN}/?q={search_term_string}` },
			'query-input': 'required name=search_term_string',
		},
	};
}

export function softwareLd(tool: Tool): Record<string, unknown> {
	const { data } = tool;
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: data.name,
		description: data.short_description,
		url: toolUrl(tool),
		image: `${SITE_ORIGIN}/og/tools/${tool.id}.png`,
		applicationCategory: 'DeveloperApplication',
		applicationSubCategory: data.category,
		operatingSystem: data.platforms.join(', '),
		programmingLanguage: data.language,
		keywords: data.tags.join(', '),
		author: { '@type': 'Person', name: data.author },
		...(data.license !== 'Other' && { license: data.license }),
		...(data.repo_release && { softwareVersion: data.repo_release }),
		...(data.repo_created && { dateCreated: data.repo_created }),
		...(data.updated && { dateModified: data.updated }),
		...(data.website && { sameAs: data.website }),
		downloadUrl: data.repository_url,
		isAccessibleForFree: true,
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
	};
}

// Package managers people search with ("brew cloc", "scoop install mpv"),
// most common first. Their exact commands go in the meta description.
const INSTALL_METHOD_PRIORITY = ['brew', 'winget', 'scoop', 'cargo', 'apt', 'go', 'npm', 'pip', 'pacman', 'choco', 'nix', 'dnf'];

// "brew install cloc or winget install cloc" — up to two short, single-line
// commands from different package managers; undefined when none qualify.
function installCommands(tool: Tool): string | undefined {
	const commands = INSTALL_METHOD_PRIORITY.flatMap((method) => {
		const entry = tool.data.installation.find((e) => e.method === method);
		const command = entry?.command.trim();
		return command && command.length <= 40 && !command.includes('\n') ? [command] : [];
	});
	return commands.length > 0 ? commands.slice(0, 2).join(' or ') : undefined;
}

// Meta description for a tool page: the tagline plus the facts people search
// and filter on — exact install commands, platforms, language — capped near
// the ~160-char SERP limit. Facts are dropped from the end, and the tagline
// shortened, until it fits, so a long tagline never crowds them all out.
export function toolDescription(tool: Tool): string {
	const override = TOOL_SEO[tool.id]?.description;
	if (override) return override;
	const { data } = tool;
	const tagline = stripNamePrefix(data.name, data.short_description).replace(/([^.!?])$/, '$1.');
	const commands = installCommands(tool);
	const methods = [...new Set(data.installation.map((entry) => entry.method))].slice(0, 4).join(', ');
	const facts = [
		commands ? `Install: ${commands}.` : `Install via ${methods}.`,
		data.platforms.length > 0 && `Runs on ${data.platforms.join(', ')}.`,
		`${data.language} ${data.category.toLowerCase()} tool.`,
	].filter((fact): fact is string => Boolean(fact));
	const MAX = 160;
	const MIN_TAGLINE = 70;
	while (facts.length > 1 && facts.join(' ').length > MAX - MIN_TAGLINE - 1) facts.pop();
	const tail = facts.join(' ');
	return `${truncate(tagline, Math.max(MIN_TAGLINE, MAX - tail.length - 1))} ${tail}`;
}
