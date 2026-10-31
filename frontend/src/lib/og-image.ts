import fs from 'node:fs';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { truncate } from './seo';
import { stripEmoji } from './text';

// Build-time renderer for per-page 1200×630 share cards. Mirrors the look of
// public/og-image.png (terminal window, title bar, vim-style statusline) so a
// tool's card reads as part of the same site.

const WIDTH = 1200;
const HEIGHT = 630;

// Dark palette from global.css :root.
const C = {
	bgDeep: '#0f1013',
	bg: '#14151a',
	panel: '#1c1e24',
	border: '#2c3038',
	fg: '#e8e5dd',
	fgDim: '#8b9098',
	rust: '#f74c00',
	green: '#6fcf87',
	amber: '#e0a83a',
	ink: '#14151a',
};

// satori needs TTF/OTF/WOFF (not WOFF2); @fontsource ships .woff alongside.
const require = createRequire(import.meta.url);
const font = (weight: 400 | 700) =>
	fs.readFileSync(require.resolve(`@fontsource/jetbrains-mono/files/jetbrains-mono-latin-${weight}-normal.woff`));
const FONTS = [
	{ name: 'JetBrains Mono', data: font(400), weight: 400 as const, style: 'normal' as const },
	{ name: 'JetBrains Mono', data: font(700), weight: 700 as const, style: 'normal' as const },
];

type Node = { type: string; props: Record<string, unknown> };
type Child = Node | string | false | null | undefined;

// Minimal hyperscript so this file needs no JSX setup.
function h(type: string, style: Record<string, unknown>, ...children: Child[]): Node {
	const kids = children.filter((child): child is Node | string => Boolean(child));
	return { type, props: { style, children: kids.length === 1 ? kids[0] : kids } };
}

// Same geometry as components/Logo.astro.
function logo(size: number): Node {
	const rect = (x: number, y: number, w: number, hgt: number, fill: string) =>
		({ type: 'rect', props: { x, y, width: w, height: hgt, rx: 3, fill } }) as Node;
	return {
		type: 'svg',
		props: {
			width: size,
			height: size,
			viewBox: '0 0 128 128',
			children: [
				{ type: 'rect', props: { width: 128, height: 128, rx: 20, fill: C.bgDeep } },
				{ type: 'rect', props: { x: 2, y: 2, width: 124, height: 124, rx: 18, fill: 'none', stroke: C.border, 'stroke-width': 4 } },
				rect(26, 19, 11, 11, C.green),
				rect(43, 19, 40, 11, C.fg),
				rect(26, 43, 60, 11, C.fgDim),
				rect(26, 67, 38, 11, C.fgDim),
				rect(26, 91, 16, 18, C.rust),
			],
		},
	};
}

export interface OgCard {
	command: string;
	title: string;
	subtitle: string;
	tags: string[];
	path: string;
	meta: string;
}

// The embedded font only covers Latin; drop emoji so they don't render as tofu.
export async function renderOgImage(card: OgCard): Promise<Buffer> {
	const title = truncate(stripEmoji(card.title), 40);
	const titleSize = title.length > 26 ? 64 : title.length > 14 ? 84 : 104;
	const tags = card.tags.slice(0, 5).map((tag) => `#${tag.toLowerCase().replace(/\s+/g, '-')}`).join(' ');

	const tree = h(
		'div',
		{ width: WIDTH, height: HEIGHT, display: 'flex', padding: 48, background: C.bgDeep, fontFamily: 'JetBrains Mono' },
		h(
			'div',
			{ display: 'flex', flexDirection: 'column', width: WIDTH - 96, height: HEIGHT - 96, background: C.bg, border: `2px solid ${C.border}`, borderRadius: 4, overflow: 'hidden' },
			// title bar
			h(
				'div',
				{ display: 'flex', flexShrink: 0, padding: '20px 28px', background: C.panel, borderBottom: `2px solid ${C.border}`, fontSize: 26 },
				h('span', { color: C.green }, 'visitor@cli.masoko.net'),
				h('span', { color: C.fgDim }, `:~$ ${truncate(card.command, 40)}`),
			),
			// body
			h(
				'div',
				{ display: 'flex', flex: 1, minHeight: 0, alignItems: 'center', padding: '0 56px' },
				h(
					'div',
					{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, paddingRight: 40 },
					h('div', { fontSize: titleSize, fontWeight: 700, color: C.fg, lineHeight: 1.1 }, title),
					h('div', { marginTop: 24, fontSize: 30, color: C.fgDim, lineHeight: 1.35 }, truncate(stripEmoji(card.subtitle), 110)),
					tags && h('div', { marginTop: 24, fontSize: 28, color: C.green }, truncate(tags, 44)),
				),
				h('div', { display: 'flex', flexShrink: 0 }, logo(200)),
			),
			// statusline
			h(
				'div',
				{ display: 'flex', flexShrink: 0, alignItems: 'center', height: 48, borderTop: `2px solid ${C.border}`, fontSize: 22 },
				h('div', { display: 'flex', alignItems: 'center', height: '100%', padding: '0 24px', background: C.amber, color: C.ink, fontWeight: 700 }, 'NORMAL'),
				h('div', { display: 'flex', flex: 1, padding: '0 24px', color: C.green }, truncate(card.path, 50)),
				h('div', { display: 'flex', padding: '0 24px', color: C.fgDim }, card.meta),
			),
		),
	);

	const svg = await satori(tree as Parameters<typeof satori>[0], { width: WIDTH, height: HEIGHT, fonts: FONTS });
	return new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();
}
