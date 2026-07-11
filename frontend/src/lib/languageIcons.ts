import {
	siC,
	siCplusplus,
	siGo,
	siHaskell,
	siJavascript,
	siPerl,
	siPython,
	siRust,
	siTypescript,
} from 'simple-icons';

export interface LanguageIconData {
	path: string;
	hex: string;
}

// Keyed by exact language name (lowercased), not slugify(): "C" and "C++" both
// slugify to "c" (see lib/slug.ts), but they're distinct languages with distinct icons.
const ICONS_BY_NAME: Record<string, LanguageIconData> = {
	c: siC,
	'c++': siCplusplus,
	go: siGo,
	haskell: siHaskell,
	javascript: siJavascript,
	perl: siPerl,
	python: siPython,
	rust: siRust,
	typescript: siTypescript,
};

export function getLanguageIcon(language: string): LanguageIconData | null {
	return ICONS_BY_NAME[language.trim().toLowerCase()] ?? null;
}

// languages/index.astro and languages/[language]/[...page].astro join
// same-slug languages (e.g. "C" + "C++") into one label with " / ".
export function splitLanguageLabel(label: string): string[] {
	return label.split(' / ');
}
