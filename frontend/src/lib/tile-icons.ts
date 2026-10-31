// Tile illustrations for collections and categories, drawn on a 64x64 grid
// in the same flat, rounded style as the site logo. Neutral surfaces use
// theme variables so a tile follows light/dark mode, while the accents are
// fixed hues picked to read on both backgrounds. Rendered by TileIcon.astro.

import type { SimpleIcon } from 'simple-icons';
import { siDocker, siGnubash, siObsidian, siPostman, siSpotify, siThunderbird, siTmux, siVim, siWireshark } from 'simple-icons';

const RUST = '#f74c00';
const AMBER = '#e0a83a';
const GREEN = '#3fb96b';
const TEAL = '#25b0a5';
const BLUE = '#4c8dff';
const PURPLE = '#a371f7';
const PINK = '#e9559b';

export const TILE_FRAME = `<rect x="1" y="1" width="62" height="62" rx="12" fill="var(--bg-deep)" stroke="var(--border)" stroke-width="2" />`;

// Shown for a slug without its own drawing, so a new collection or category
// still gets a tile.
export const FALLBACK_ICON = `<path d="M10 20a4 4 0 0 1 4-4h10l4 5h22a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z" fill="${AMBER}" />`;

// Keyed by guide slug (see lib/guides.ts).
export const COLLECTION_ICONS: Record<string, string> = {
	// terminal window: traffic lights, prompt and cursor
	'modern-unix': `
		<rect x="8" y="12" width="48" height="40" rx="6" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<line x1="8" y1="25" x2="56" y2="25" stroke="var(--border)" stroke-width="2" />
		<circle cx="15" cy="18.5" r="2.4" fill="${RUST}" />
		<circle cx="22" cy="18.5" r="2.4" fill="${AMBER}" />
		<circle cx="29" cy="18.5" r="2.4" fill="${GREEN}" />
		<polyline points="15 32 21 37 15 42" fill="none" stroke="${GREEN}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="25" y="39" width="16" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="44" y="35" width="6" height="10" rx="1.5" fill="${RUST}" />`,
	// commit graph: a feature branch leaving main and merging back
	'tui-git-clients': `
		<path d="M20 13 C36 13 44 20 44 32 C44 44 36 51 20 51" fill="none" stroke="${PURPLE}" stroke-width="4" stroke-linecap="round" />
		<line x1="20" y1="12" x2="20" y2="52" stroke="${BLUE}" stroke-width="4" stroke-linecap="round" />
		<circle cx="20" cy="32" r="4.5" fill="${BLUE}" stroke="var(--bg-deep)" stroke-width="2" />
		<circle cx="20" cy="51" r="5" fill="${GREEN}" stroke="var(--bg-deep)" stroke-width="2" />
		<circle cx="44" cy="32" r="6" fill="${PURPLE}" stroke="var(--bg-deep)" stroke-width="2" />
		<circle cx="20" cy="13" r="5.5" fill="${RUST}" stroke="var(--bg-deep)" stroke-width="2" />`,
	// a large and a small sparkle
	'ai-coding-agents': `
		<path d="M27 13 C28.6 26 31.5 30.5 46 34 C31.5 37.5 28.6 42 27 55 C25.4 42 22.5 37.5 8 34 C22.5 30.5 25.4 26 27 13Z" fill="${PURPLE}" />
		<path d="M46 8 C46.7 13 47.8 14.6 53.5 15.5 C47.8 16.4 46.7 18 46 23 C45.3 18 44.2 16.4 38.5 15.5 C44.2 14.6 45.3 13 46 8Z" fill="${AMBER}" />
		<circle cx="49" cy="46" r="3.5" fill="${TEAL}" />`,
	// blue heptagon with a ship's wheel
	'kubernetes-tuis': `
		<polygon points="32 12 47.6 19.5 51.5 36.5 40.7 50 23.3 50 12.5 36.5 16.4 19.5" fill="${BLUE}" stroke="${BLUE}" stroke-width="4" stroke-linejoin="round" />
		<circle cx="32" cy="32" r="8" fill="none" stroke="#fff" stroke-width="2.5" />
		<path d="M32 32V19M32 32L42.2 23.9M32 32L44.7 34.9M32 32L37.6 43.7M32 32L26.4 43.7M32 32L19.3 34.9M32 32L21.8 23.9" stroke="#fff" stroke-width="2.5" stroke-linecap="round" />
		<circle cx="32" cy="32" r="3" fill="#fff" />`,
	// a note over an equalizer
	'terminal-music-players': `
		<rect x="10" y="40" width="7" height="14" rx="2" fill="${GREEN}" />
		<rect x="19" y="30" width="7" height="24" rx="2" fill="${TEAL}" />
		<rect x="28" y="36" width="7" height="18" rx="2" fill="${BLUE}" />
		<rect x="37" y="26" width="7" height="28" rx="2" fill="${PURPLE}" />
		<rect x="46" y="44" width="7" height="10" rx="2" fill="${PINK}" />
		<line x1="18.5" y1="22" x2="18.5" y2="8" stroke="${PINK}" stroke-width="3" stroke-linecap="round" />
		<path d="M18.5 8 C24 9.5 26.5 12.5 26 17" fill="none" stroke="${PINK}" stroke-width="3" stroke-linecap="round" />
		<ellipse cx="14.5" cy="22.5" rx="5" ry="4" fill="${PINK}" />`,
	// curly braces around a table
	'json-csv-data-tools': `
		<path d="M16 12h-2a3 3 0 0 0-3 3v11l-4 6 4 6v11a3 3 0 0 0 3 3h2" fill="none" stroke="${AMBER}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M48 12h2a3 3 0 0 1 3 3v11l4 6-4 6v11a3 3 0 0 1-3 3h-2" fill="none" stroke="${AMBER}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="20" y="17" width="24" height="6" rx="1.5" fill="${BLUE}" />
		<rect x="20" y="27" width="10" height="5" rx="1.5" fill="var(--fg-dim)" />
		<rect x="34" y="27" width="10" height="5" rx="1.5" fill="var(--fg-dim)" />
		<rect x="20" y="36" width="10" height="5" rx="1.5" fill="var(--fg-dim)" />
		<rect x="34" y="36" width="10" height="5" rx="1.5" fill="${GREEN}" />
		<rect x="20" y="45" width="10" height="5" rx="1.5" fill="var(--fg-dim)" />
		<rect x="34" y="45" width="10" height="5" rx="1.5" fill="var(--fg-dim)" />`,
	// traffic chart with a spike
	'network-monitoring': `
		<rect x="8" y="12" width="48" height="40" rx="6" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<line x1="12" y1="25" x2="52" y2="25" stroke="var(--border)" stroke-width="1.5" />
		<line x1="12" y1="38" x2="52" y2="38" stroke="var(--border)" stroke-width="1.5" />
		<path d="M12 40 L19 40 L25 22 L31 44 L36 30 L41 36 L52 36 L52 48 L12 48Z" fill="${TEAL}" fill-opacity="0.3" />
		<polyline points="12 40 19 40 25 22 31 44 36 30 41 36 52 36" fill="none" stroke="${GREEN}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
		<circle cx="25" cy="22" r="3.5" fill="${RUST}" />`,
	// server rack and a key
	'ssh-tools': `
		<rect x="8" y="12" width="36" height="15" rx="3" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<rect x="8" y="31" width="36" height="15" rx="3" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<circle cx="15" cy="19.5" r="2.2" fill="${GREEN}" />
		<circle cx="15" cy="38.5" r="2.2" fill="${GREEN}" />
		<rect x="21" y="18" width="16" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="21" y="37" width="10" height="3" rx="1.5" fill="var(--fg-dim)" />
		<circle cx="40" cy="42" r="6.5" fill="var(--bg-deep)" stroke="${AMBER}" stroke-width="4" />
		<path d="M44.6 46.6L54 56M49.5 51.5L46.5 54.5M52.5 54.5L50 57" stroke="${AMBER}" stroke-width="4" stroke-linecap="round" />`,
	// a page with a heading and the Markdown mark
	'markdown-tools': `
		<path d="M17 8h21l10 10v36a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" fill="var(--panel)" stroke="var(--border)" stroke-width="2" stroke-linejoin="round" />
		<path d="M38 8v10h10" fill="none" stroke="var(--border)" stroke-width="2" stroke-linejoin="round" />
		<rect x="20" y="14" width="13" height="4" rx="2" fill="${RUST}" />
		<rect x="20" y="23" width="22" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="20" y="29" width="17" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="10" y="37" width="30" height="17" rx="3" fill="${PURPLE}" />
		<polyline points="15 50 15 42 19 46 23 42 23 50" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M32 42v8M28.5 46.5L32 50l3.5-3.5" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />`,
	// a sun peeking out from behind a cloud, with sparkles
	'terminal-eye-candy': `
		<circle cx="24" cy="24" r="9" fill="${AMBER}" />
		<path d="M24 9v4M24 35v4M9 24h4M11.4 11.4l2.8 2.8M33.8 14.2l2.8-2.8M11.4 36.6l2.8-2.8" stroke="${AMBER}" stroke-width="3" stroke-linecap="round" />
		<path d="M22 50a8 8 0 0 1 1-15.9A11 11 0 0 1 44 33a8.5 8.5 0 0 1 2 17z" fill="var(--panel)" stroke="var(--border)" stroke-width="2" stroke-linejoin="round" />
		<path d="M50 8 C50.6 12 51.6 13.2 55.5 14 C51.6 14.8 50.6 16 50 20 C49.4 16 48.4 14.8 44.5 14 C48.4 13.2 49.4 12 50 8Z" fill="${PINK}" />
		<circle cx="54" cy="27" r="2.5" fill="${PURPLE}" />`,
	// a penguin
	'linux-desktop-tuis': `
		<ellipse cx="32" cy="36" rx="15" ry="18" fill="#24292f" stroke="var(--fg-dim)" stroke-width="3" />
		<circle cx="32" cy="20" r="11" fill="#24292f" stroke="var(--fg-dim)" stroke-width="3" />
		<ellipse cx="32" cy="36" rx="15" ry="18" fill="#24292f" />
		<circle cx="32" cy="20" r="11" fill="#24292f" />
		<ellipse cx="32" cy="40" rx="10" ry="13" fill="#fff" />
		<circle cx="28" cy="18" r="2.6" fill="#fff" />
		<circle cx="36" cy="18" r="2.6" fill="#fff" />
		<circle cx="28.5" cy="18.5" r="1.2" fill="#24292f" />
		<circle cx="35.5" cy="18.5" r="1.2" fill="#24292f" />
		<path d="M27.5 23.5h9L32 28z" fill="${AMBER}" stroke="${AMBER}" stroke-width="1.5" stroke-linejoin="round" />
		<ellipse cx="24" cy="54" rx="6" ry="3" fill="${AMBER}" />
		<ellipse cx="40" cy="54" rx="6" ry="3" fill="${AMBER}" />`,
	// a house with a server rack inside
	'self-hosting-homelab': `
		<path d="M8 30L32 10l24 20" fill="none" stroke="${RUST}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 26v26a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V26" fill="var(--panel)" stroke="var(--border)" stroke-width="2" stroke-linejoin="round" />
		<rect x="21" y="30" width="22" height="7" rx="2" fill="var(--bg-deep)" stroke="var(--border)" stroke-width="1.5" />
		<rect x="21" y="40" width="22" height="7" rx="2" fill="var(--bg-deep)" stroke="var(--border)" stroke-width="1.5" />
		<circle cx="25.5" cy="33.5" r="1.8" fill="${GREEN}" />
		<circle cx="25.5" cy="43.5" r="1.8" fill="${GREEN}" />
		<rect x="30" y="32.5" width="9" height="2" rx="1" fill="var(--fg-dim)" />
		<rect x="30" y="42.5" width="6" height="2" rx="1" fill="var(--fg-dim)" />`,
	// a calendar page with a checked day
	'personal-organizers': `
		<rect x="10" y="14" width="44" height="40" rx="5" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<path d="M10 19a5 5 0 0 1 5-5h34a5 5 0 0 1 5 5v7H10z" fill="${RUST}" />
		<line x1="21" y1="9" x2="21" y2="18" stroke="var(--fg-dim)" stroke-width="3.5" stroke-linecap="round" />
		<line x1="43" y1="9" x2="43" y2="18" stroke="var(--fg-dim)" stroke-width="3.5" stroke-linecap="round" />
		<rect x="16" y="31" width="7" height="6" rx="1.5" fill="var(--fg-dim)" />
		<rect x="28.5" y="31" width="7" height="6" rx="1.5" fill="var(--fg-dim)" />
		<rect x="41" y="31" width="7" height="6" rx="1.5" fill="var(--fg-dim)" />
		<rect x="16" y="42" width="7" height="6" rx="1.5" fill="var(--fg-dim)" />
		<rect x="28" y="41" width="8" height="8" rx="2" fill="${GREEN}" />
		<polyline points="30 45 31.8 47 34.5 43" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`,
	// a pull request: two branches, an arrow and a merge target
	'github-gitlab-cli': `
		<line x1="18" y1="18" x2="18" y2="46" stroke="${BLUE}" stroke-width="4" stroke-linecap="round" />
		<circle cx="18" cy="15" r="5.5" fill="var(--bg-deep)" stroke="${BLUE}" stroke-width="3.5" />
		<circle cx="18" cy="49" r="5.5" fill="var(--bg-deep)" stroke="${BLUE}" stroke-width="3.5" />
		<path d="M46 43V24a6 6 0 0 0-6-6H29" fill="none" stroke="${PURPLE}" stroke-width="4" stroke-linecap="round" />
		<polyline points="34 12 28 18 34 24" fill="none" stroke="${PURPLE}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
		<circle cx="46" cy="49" r="5.5" fill="var(--bg-deep)" stroke="${GREEN}" stroke-width="3.5" />`,
};

// Keyed by slugified category name (see CATEGORIES in lib/schema.ts).
export const CATEGORY_ICONS: Record<string, string> = {
	// folder with a page sticking out
	'file-management': `
		<path d="M8 18a4 4 0 0 1 4-4h11l4 5h21a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z" fill="#b9831f" />
		<rect x="16" y="17" width="32" height="22" rx="2" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<rect x="20" y="22" width="14" height="3" rx="1.5" fill="var(--fg-dim)" />
		<path d="M8 29a3 3 0 0 1 3-3h42a3 3 0 0 1 3 3l-2 18a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z" fill="${AMBER}" />`,
	// an ls listing: colored entry markers and names
	'directory-listing': `
		<rect x="11" y="12" width="8" height="8" rx="2" fill="${BLUE}" />
		<rect x="23" y="13.5" width="28" height="5" rx="2.5" fill="var(--fg)" />
		<rect x="11" y="23" width="8" height="8" rx="2" fill="${BLUE}" />
		<rect x="23" y="24.5" width="20" height="5" rx="2.5" fill="var(--fg-dim)" />
		<rect x="11" y="34" width="8" height="8" rx="2" fill="${GREEN}" />
		<rect x="23" y="35.5" width="30" height="5" rx="2.5" fill="var(--fg-dim)" />
		<rect x="11" y="45" width="8" height="8" rx="2" fill="${RUST}" />
		<rect x="23" y="46.5" width="16" height="5" rx="2.5" fill="var(--fg-dim)" />`,
	// donut chart of used space
	'disk-usage': `
		<circle cx="32" cy="32" r="17" fill="none" stroke="var(--border)" stroke-width="10" />
		<g transform="rotate(-90 32 32)" fill="none" stroke-width="10">
			<circle cx="32" cy="32" r="17" pathLength="100" stroke="${RUST}" stroke-dasharray="38 62" />
			<circle cx="32" cy="32" r="17" pathLength="100" stroke="${AMBER}" stroke-dasharray="24 76" stroke-dashoffset="-40" />
			<circle cx="32" cy="32" r="17" pathLength="100" stroke="${BLUE}" stroke-dasharray="18 82" stroke-dashoffset="-66" />
		</g>`,
	// split terminal panes, tmux style
	'shell-terminal': `
		<rect x="8" y="10" width="48" height="44" rx="6" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<line x1="32" y1="10" x2="32" y2="54" stroke="var(--border)" stroke-width="2" />
		<line x1="32" y1="32" x2="56" y2="32" stroke="var(--border)" stroke-width="2" />
		<polyline points="13 17 17.5 21 13 25" fill="none" stroke="${GREEN}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="20" y="19" width="6" height="4" rx="1" fill="${RUST}" />
		<rect x="13" y="30" width="14" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="13" y="36" width="10" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="13" y="42" width="12" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="37" y="17" width="14" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="37" y="23" width="9" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="37" y="39" width="12" height="3" rx="1.5" fill="${BLUE}" />
		<rect x="37" y="45" width="8" height="3" rx="1.5" fill="${BLUE}" />`,
	// magnifier over a highlighted match
	'search': `
		<line x1="38" y1="38" x2="52" y2="52" stroke="${BLUE}" stroke-width="7" stroke-linecap="round" />
		<circle cx="27" cy="27" r="15" fill="var(--panel)" stroke="${BLUE}" stroke-width="5" />
		<rect x="18" y="20" width="14" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="17" y="25.5" width="20" height="6" rx="2" fill="${AMBER}" />
		<rect x="18" y="34" width="10" height="3" rx="1.5" fill="var(--fg-dim)" />`,
	// gauge with a load bar underneath
	'system-monitoring': `
		<path d="M13 38 A19 19 0 0 1 22.5 21.5" fill="none" stroke="${GREEN}" stroke-width="6" />
		<path d="M22.5 21.5 A19 19 0 0 1 41.5 21.5" fill="none" stroke="${AMBER}" stroke-width="6" />
		<path d="M41.5 21.5 A19 19 0 0 1 51 38" fill="none" stroke="${RUST}" stroke-width="6" />
		<line x1="32" y1="38" x2="41.6" y2="26.5" stroke="var(--fg)" stroke-width="3.5" stroke-linecap="round" />
		<circle cx="32" cy="38" r="4" fill="var(--fg)" />
		<rect x="13" y="47" width="38" height="5" rx="2.5" fill="var(--border)" />
		<rect x="13" y="47" width="24" height="5" rx="2.5" fill="${GREEN}" />`,
	// checklist
	'productivity': `
		<rect x="11" y="12" width="11" height="11" rx="3" fill="${GREEN}" />
		<polyline points="13.8 17.5 16 19.7 19.5 15.2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="27" y="15.5" width="24" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="11" y="27" width="11" height="11" rx="3" fill="${GREEN}" />
		<polyline points="13.8 32.5 16 34.7 19.5 30.2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="27" y="30.5" width="18" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="12" y="43" width="9" height="9" rx="2.5" fill="none" stroke="${AMBER}" stroke-width="2.5" />
		<rect x="27" y="45.5" width="22" height="4" rx="2" fill="var(--fg)" />`,
	// spiral notebook and a pencil
	'notes-documents': `
		<rect x="15" y="9" width="32" height="46" rx="3" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<rect x="11" y="15" width="8" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="11" y="25" width="8" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="11" y="35" width="8" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="11" y="45" width="8" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="23" y="15" width="14" height="4" rx="2" fill="${RUST}" />
		<rect x="23" y="24" width="18" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="23" y="30" width="14" height="3" rx="1.5" fill="var(--fg-dim)" />
		<g transform="rotate(-45 45 43)">
			<rect x="35" y="39.5" width="18" height="7" rx="1" fill="${AMBER}" />
			<rect x="52" y="39.5" width="5" height="7" rx="1.5" fill="${PINK}" />
			<polygon points="35 39.5 35 46.5 29.5 43" fill="var(--fg-dim)" />
		</g>`,
	// </> brackets
	'development-tools': `
		<polyline points="21 19 9 32 21 45" fill="none" stroke="${BLUE}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
		<polyline points="43 19 55 32 43 45" fill="none" stroke="${PURPLE}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
		<line x1="36.5" y1="14" x2="27.5" y2="50" stroke="${AMBER}" stroke-width="5.5" stroke-linecap="round" />`,
	// request out, response back
	'http-api-clients': `
		<circle cx="12" cy="22" r="4.5" fill="${AMBER}" />
		<line x1="19" y1="22" x2="48" y2="22" stroke="${GREEN}" stroke-width="5" stroke-linecap="round" />
		<polyline points="41 15 49 22 41 29" fill="none" stroke="${GREEN}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
		<circle cx="52" cy="42" r="4.5" fill="${PURPLE}" />
		<line x1="45" y1="42" x2="16" y2="42" stroke="${BLUE}" stroke-width="5" stroke-linecap="round" />
		<polyline points="23 35 15 42 23 49" fill="none" stroke="${BLUE}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />`,
	// tilted square with a branch, after the git mark
	'git': `
		<rect x="16" y="16" width="32" height="32" rx="6" transform="rotate(45 32 32)" fill="${RUST}" />
		<line x1="27" y1="23" x2="27" y2="41" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
		<line x1="27" y1="26" x2="39" y2="33" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
		<circle cx="27" cy="23" r="3.5" fill="#fff" />
		<circle cx="27" cy="41" r="3.5" fill="#fff" />
		<circle cx="39" cy="33" r="3.5" fill="#fff" />`,
	// hub-and-spoke topology
	'networking': `
		<path d="M32 32L14 16M32 32L50 16M32 32L14 48M32 32L50 48" stroke="var(--fg-dim)" stroke-width="3" stroke-linecap="round" />
		<circle cx="14" cy="16" r="6" fill="${GREEN}" />
		<circle cx="50" cy="16" r="6" fill="${AMBER}" />
		<circle cx="14" cy="48" r="6" fill="${PURPLE}" />
		<circle cx="50" cy="48" r="6" fill="${TEAL}" />
		<circle cx="32" cy="32" r="8.5" fill="${BLUE}" stroke="var(--bg-deep)" stroke-width="2.5" />`,
	// envelope and a chat bubble
	'email-messaging': `
		<rect x="7" y="13" width="40" height="29" rx="4" fill="${BLUE}" />
		<polyline points="10 17 27 30 44 17" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M38 33h16a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-7l-5 4.5V51h-4a4 4 0 0 1-4-4V37a4 4 0 0 1 4-4z" fill="${GREEN}" stroke="var(--bg-deep)" stroke-width="2.5" stroke-linejoin="round" />
		<circle cx="40" cy="42" r="1.8" fill="#fff" />
		<circle cx="46" cy="42" r="1.8" fill="#fff" />
		<circle cx="52" cy="42" r="1.8" fill="#fff" />`,
	// editor buffer: gutter, highlighted code, cursor and a mode line
	'text-editors': `
		<rect x="8" y="10" width="48" height="44" rx="6" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<line x1="18" y1="10" x2="18" y2="46" stroke="var(--border)" stroke-width="2" />
		<line x1="8" y1="46" x2="56" y2="46" stroke="var(--border)" stroke-width="2" />
		<rect x="11" y="16" width="4" height="3" rx="1" fill="var(--fg-dim)" />
		<rect x="11" y="24" width="4" height="3" rx="1" fill="var(--fg-dim)" />
		<rect x="11" y="32" width="4" height="3" rx="1" fill="var(--fg-dim)" />
		<rect x="11" y="40" width="4" height="3" rx="1" fill="var(--fg-dim)" />
		<rect x="22" y="16" width="10" height="3" rx="1.5" fill="${PURPLE}" />
		<rect x="35" y="16" width="14" height="3" rx="1.5" fill="${BLUE}" />
		<rect x="26" y="24" width="20" height="3" rx="1.5" fill="${AMBER}" />
		<rect x="26" y="32" width="12" height="3" rx="1.5" fill="${GREEN}" />
		<rect x="22" y="40" width="8" height="3" rx="1.5" fill="${PURPLE}" />
		<rect x="33" y="38" width="3" height="7" rx="1" fill="${RUST}" />
		<rect x="12" y="48.5" width="12" height="3" rx="1.5" fill="${AMBER}" />`,
	// headphones around an equalizer
	'music-audio': `
		<path d="M14 38v-5a18 18 0 0 1 36 0v5" fill="none" stroke="${PINK}" stroke-width="5" stroke-linecap="round" />
		<rect x="9" y="34" width="11" height="18" rx="4.5" fill="${PINK}" />
		<rect x="44" y="34" width="11" height="18" rx="4.5" fill="${PINK}" />
		<rect x="25" y="40" width="3.5" height="10" rx="1.75" fill="${TEAL}" />
		<rect x="30.25" y="34" width="3.5" height="16" rx="1.75" fill="${BLUE}" />
		<rect x="35.5" y="42" width="3.5" height="8" rx="1.75" fill="${PURPLE}" />`,
	// video player with a scrubber
	'media-entertainment': `
		<rect x="8" y="11" width="48" height="33" rx="5" fill="${PURPLE}" />
		<path d="M27.5 20.5v14a1 1 0 0 0 1.5.85l11.5-7a1 1 0 0 0 0-1.7l-11.5-7a1 1 0 0 0-1.5.85z" fill="#fff" />
		<rect x="8" y="50" width="48" height="4" rx="2" fill="var(--border)" />
		<rect x="8" y="50" width="28" height="4" rx="2" fill="${RUST}" />
		<circle cx="36" cy="52" r="4" fill="var(--fg)" />`,
	// shield with a check
	'security': `
		<path d="M32 8l20 7v15c0 13-9 21-20 26-11-5-20-13-20-26V15z" fill="${GREEN}" stroke="${GREEN}" stroke-width="2" stroke-linejoin="round" />
		<polyline points="23 32 29.5 38.5 42 26" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />`,
	// cloud feeding three containers
	'devops-cloud': `
		<path d="M19 40h27a8.5 8.5 0 0 0 1-16.95A14 14 0 0 0 20.5 21 9.5 9.5 0 0 0 19 40z" fill="${BLUE}" />
		<path d="M18 40v5M32 40v5M46 40v5" stroke="var(--fg-dim)" stroke-width="2.5" stroke-linecap="round" />
		<rect x="12" y="45" width="12" height="9" rx="2" fill="${AMBER}" />
		<rect x="26" y="45" width="12" height="9" rx="2" fill="${GREEN}" />
		<rect x="40" y="45" width="12" height="9" rx="2" fill="${RUST}" />`,
	// database cylinder
	'data-processing': `
		<path d="M15 16v32c0 3.3 7.6 6 17 6s17-2.7 17-6V16z" fill="${TEAL}" />
		<path d="M15 27c0 3.3 7.6 6 17 6s17-2.7 17-6M15 38c0 3.3 7.6 6 17 6s17-2.7 17-6" fill="none" stroke="var(--bg-deep)" stroke-width="2.5" />
		<ellipse cx="32" cy="16" rx="17" ry="6" fill="${TEAL}" />
		<ellipse cx="32" cy="16" rx="17" ry="6" fill="#fff" fill-opacity="0.35" />
		<circle cx="42" cy="30" r="1.8" fill="#fff" />
		<circle cx="42" cy="41" r="1.8" fill="#fff" />`,
	// log lines with timestamps and levels, the error row highlighted
	'logs': `
		<rect x="8" y="10" width="48" height="44" rx="6" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<rect x="11" y="38" width="42" height="10" rx="2" fill="${RUST}" fill-opacity="0.18" />
		<rect x="13" y="17" width="8" height="3" rx="1.5" fill="var(--fg-dim)" fill-opacity="0.6" />
		<rect x="24" y="16.5" width="6" height="4" rx="1.5" fill="${GREEN}" />
		<rect x="33" y="17" width="18" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="13" y="25" width="8" height="3" rx="1.5" fill="var(--fg-dim)" fill-opacity="0.6" />
		<rect x="24" y="24.5" width="6" height="4" rx="1.5" fill="${GREEN}" />
		<rect x="33" y="25" width="13" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="13" y="33" width="8" height="3" rx="1.5" fill="var(--fg-dim)" fill-opacity="0.6" />
		<rect x="24" y="32.5" width="6" height="4" rx="1.5" fill="${AMBER}" />
		<rect x="33" y="33" width="16" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="13" y="41.5" width="8" height="3" rx="1.5" fill="var(--fg-dim)" fill-opacity="0.6" />
		<rect x="24" y="41" width="6" height="4" rx="1.5" fill="${RUST}" />
		<rect x="33" y="41.5" width="11" height="3" rx="1.5" fill="var(--fg)" />`,
	// gamepad
	'games-fun': `
		<path d="M20 19h24a12 12 0 0 1 11.6 9l3 12a7 7 0 0 1-12 6.2l-5-6.2H22.4l-5 6.2a7 7 0 0 1-12-6.2l3-12A12 12 0 0 1 20 19z" fill="${PURPLE}" />
		<rect x="17" y="25" width="4" height="12" rx="1" fill="#fff" />
		<rect x="13" y="29" width="12" height="4" rx="1" fill="#fff" />
		<circle cx="44" cy="26.5" r="2.8" fill="${AMBER}" />
		<circle cx="49.5" cy="31.5" r="2.8" fill="${GREEN}" />
		<circle cx="38.5" cy="31.5" r="2.8" fill="${TEAL}" />
		<circle cx="44" cy="36.5" r="2.8" fill="${RUST}" />`,
	// friendly robot head
	'ai': `
		<line x1="32" y1="20" x2="32" y2="13" stroke="var(--fg-dim)" stroke-width="3" stroke-linecap="round" />
		<circle cx="32" cy="11" r="3.5" fill="${AMBER}" />
		<rect x="8" y="30" width="6" height="12" rx="2.5" fill="${BLUE}" />
		<rect x="50" y="30" width="6" height="12" rx="2.5" fill="${BLUE}" />
		<rect x="13" y="20" width="38" height="31" rx="9" fill="${PURPLE}" />
		<rect x="20" y="29" width="8" height="9" rx="3" fill="#fff" />
		<rect x="36" y="29" width="8" height="9" rx="3" fill="#fff" />
		<rect x="25" y="42" width="14" height="3.5" rx="1.75" fill="#fff" fill-opacity="0.85" />`,
	// toolbox
	'utilities-other': `
		<path d="M24 24v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6" fill="none" stroke="var(--fg-dim)" stroke-width="4" stroke-linecap="round" />
		<rect x="8" y="24" width="48" height="28" rx="4" fill="${RUST}" />
		<line x1="8" y1="34" x2="56" y2="34" stroke="var(--bg-deep)" stroke-width="2.5" />
		<rect x="28" y="30" width="8" height="8" rx="1.5" fill="${AMBER}" />`,
};

// Alternatives whose original app has a logo show that logo (from simple-icons,
// like the language tiles); the rest get a drawing of what the classic command
// does. Both keyed by alternative slug (see ALTERNATIVES in lib/guides.ts).
export const ALTERNATIVE_BRANDS: Record<string, SimpleIcon> = {
	'ctrl-r': siGnubash,
	'vim': siVim,
	'tmux': siTmux,
	'postman': siPostman,
	'docker-desktop': siDocker,
	'spotify': siSpotify,
	'obsidian': siObsidian,
	'wireshark': siWireshark,
	'thunderbird': siThunderbird,
};

export const ALTERNATIVE_ICONS: Record<string, string> = {
	// an icon view: folders and files in a grid
	'ls': `
		<path d="M12 14a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z" fill="${AMBER}" />
		<rect x="14" y="31" width="16" height="3" rx="1.5" fill="var(--fg-dim)" />
		<path d="M36 12a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H38a2 2 0 0 1-2-2z" fill="${BLUE}" />
		<rect x="36" y="31" width="16" height="3" rx="1.5" fill="var(--fg-dim)" />
		<path d="M14 36a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z" fill="${GREEN}" />
		<rect x="14" y="55" width="16" height="3" rx="1.5" fill="var(--fg-dim)" />
		<path d="M34 38a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2z" fill="${PURPLE}" />
		<rect x="36" y="55" width="16" height="3" rx="1.5" fill="var(--fg-dim)" />`,
	// highlighted matches and a lightning bolt for speed
	'grep': `
		<rect x="10" y="14" width="26" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="10" y="23" width="10" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="22" y="22" width="14" height="6" rx="2" fill="${AMBER}" />
		<rect x="10" y="33" width="24" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="10" y="42" width="6" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="18" y="41" width="14" height="6" rx="2" fill="${AMBER}" />
		<rect x="34" y="42" width="6" height="4" rx="2" fill="var(--fg-dim)" />
		<rect x="10" y="51" width="18" height="4" rx="2" fill="var(--fg-dim)" fill-opacity="0.6" />
		<path d="M50 10L40 32h8l-4 22 12-28h-8z" fill="${RUST}" stroke="var(--bg-deep)" stroke-width="2" stroke-linejoin="round" />`,
	// htop-style CPU meters over a load graph
	'top': `
		<rect x="10" y="11" width="44" height="5" rx="2.5" fill="var(--border)" />
		<rect x="10" y="11" width="34" height="5" rx="2.5" fill="${GREEN}" />
		<rect x="10" y="20" width="44" height="5" rx="2.5" fill="var(--border)" />
		<rect x="10" y="20" width="22" height="5" rx="2.5" fill="${AMBER}" />
		<rect x="10" y="29" width="44" height="5" rx="2.5" fill="var(--border)" />
		<rect x="10" y="29" width="40" height="5" rx="2.5" fill="${RUST}" />
		<path d="M10 52L17 46L23 49L30 40L36 44L43 36L49 41L54 38V54H10z" fill="${BLUE}" fill-opacity="0.25" />
		<polyline points="10 52 17 46 23 49 30 40 36 44 43 36 49 41 54 38" fill="none" stroke="${BLUE}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`,
	// a treemap of directory sizes
	'du': `
		<rect x="9" y="9" width="26" height="46" rx="3" fill="${RUST}" />
		<rect x="13" y="13" width="12" height="3" rx="1.5" fill="#fff" fill-opacity="0.85" />
		<rect x="37" y="9" width="18" height="22" rx="3" fill="${AMBER}" />
		<rect x="37" y="33" width="18" height="12" rx="3" fill="${BLUE}" />
		<rect x="37" y="47" width="8" height="8" rx="2" fill="${GREEN}" />
		<rect x="47" y="47" width="8" height="8" rx="2" fill="${PURPLE}" />`,
	// a dotted jump from one folder straight to another
	'cd': `
		<path d="M8 40a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z" fill="var(--fg-dim)" />
		<path d="M36 40a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H38a2 2 0 0 1-2-2z" fill="${AMBER}" />
		<path d="M18 33C20 9 44 9 46 28" fill="none" stroke="${GREEN}" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1 7" />
		<polyline points="41 26 46 32 51 26" fill="none" stroke="${GREEN}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />`,
	// side-by-side panes with removed and added lines
	'diff': `
		<rect x="8" y="10" width="22" height="44" rx="4" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<rect x="34" y="10" width="22" height="44" rx="4" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<rect x="12" y="15" width="14" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="11" y="21" width="16" height="7" rx="2" fill="${RUST}" fill-opacity="0.25" />
		<rect x="13" y="23" width="11" height="3" rx="1.5" fill="${RUST}" />
		<rect x="12" y="31" width="10" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="11" y="37" width="16" height="7" rx="2" fill="${RUST}" fill-opacity="0.25" />
		<rect x="13" y="39" width="8" height="3" rx="1.5" fill="${RUST}" />
		<rect x="12" y="47" width="12" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="38" y="15" width="14" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="37" y="21" width="16" height="7" rx="2" fill="${GREEN}" fill-opacity="0.25" />
		<rect x="39" y="23" width="12" height="3" rx="1.5" fill="${GREEN}" />
		<rect x="38" y="31" width="10" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="37" y="37" width="16" height="7" rx="2" fill="${GREEN}" fill-opacity="0.25" />
		<rect x="39" y="39" width="10" height="3" rx="1.5" fill="${GREEN}" />
		<rect x="38" y="47" width="12" height="3" rx="1.5" fill="var(--fg-dim)" />`,
	// signal rings travelling from one host to another
	'ping': `
		<path d="M14 38A12 12 0 0 1 26 50" fill="none" stroke="${GREEN}" stroke-width="4" stroke-linecap="round" />
		<path d="M14 28A22 22 0 0 1 36 50" fill="none" stroke="${TEAL}" stroke-width="4" stroke-linecap="round" stroke-opacity="0.8" />
		<path d="M14 18A32 32 0 0 1 46 50" fill="none" stroke="${BLUE}" stroke-width="4" stroke-linecap="round" stroke-opacity="0.6" />
		<circle cx="14" cy="50" r="5" fill="${GREEN}" />
		<circle cx="50" cy="14" r="5" fill="${RUST}" />`,
	// a plain buffer with the ^X shortcut bar
	'nano': `
		<rect x="8" y="10" width="48" height="44" rx="6" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<path d="M8 16a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v2H8z" fill="var(--fg-dim)" />
		<rect x="13" y="23" width="26" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="13" y="29" width="18" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="13" y="35" width="22" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="37" y="33" width="3" height="7" rx="1" fill="${RUST}" />
		<rect x="12" y="43" width="9" height="7" rx="1.5" fill="var(--fg)" />
		<polyline points="14.5 48 16.5 45.5 18.5 48" fill="none" stroke="var(--bg-deep)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="23" y="45.5" width="8" height="2.5" rx="1.25" fill="var(--fg-dim)" />
		<rect x="34" y="43" width="9" height="7" rx="1.5" fill="var(--fg)" />
		<polyline points="36.5 48 38.5 45.5 40.5 48" fill="none" stroke="var(--bg-deep)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="45" y="45.5" width="7" height="2.5" rx="1.25" fill="var(--fg-dim)" />`,
	// a spreadsheet with a formula bar and a selected cell
	'excel': `
		<rect x="8" y="10" width="48" height="44" rx="5" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<path d="M8 15a5 5 0 0 1 5-5h38a5 5 0 0 1 5 5v5H8z" fill="${GREEN}" />
		<rect x="12" y="13.5" width="7" height="3" rx="1.5" fill="#fff" />
		<rect x="22" y="13.5" width="22" height="3" rx="1.5" fill="#fff" fill-opacity="0.6" />
		<path d="M20 20v34M32 20v34M44 20v34M8 28.5h48M8 37h48M8 45.5h48" stroke="var(--border)" stroke-width="1.5" />
		<rect x="23" y="31.5" width="6" height="2.5" rx="1.25" fill="var(--fg-dim)" />
		<rect x="35" y="31.5" width="6" height="2.5" rx="1.25" fill="var(--fg-dim)" />
		<rect x="23" y="40" width="6" height="2.5" rx="1.25" fill="var(--fg-dim)" />
		<rect x="32" y="37" width="12" height="8.5" fill="${GREEN}" fill-opacity="0.15" stroke="${GREEN}" stroke-width="2.5" />
		<rect x="42.5" y="44" width="3.5" height="3.5" fill="${GREEN}" />`,
	// a logo, system info lines and the color palette row
	'neofetch': `
		<rect x="9" y="12" width="20" height="20" rx="5" fill="${BLUE}" />
		<polyline points="13.5 18 17.5 22 13.5 26" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="19" y="24.5" width="6" height="2.5" rx="1" fill="#fff" />
		<rect x="33" y="12" width="8" height="3" rx="1.5" fill="${BLUE}" />
		<rect x="43" y="12" width="11" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="33" y="18" width="6" height="3" rx="1.5" fill="${BLUE}" />
		<rect x="41" y="18" width="13" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="33" y="24" width="9" height="3" rx="1.5" fill="${BLUE}" />
		<rect x="44" y="24" width="8" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="33" y="30" width="7" height="3" rx="1.5" fill="${BLUE}" />
		<rect x="42" y="30" width="10" height="3" rx="1.5" fill="var(--fg-dim)" />
		<rect x="9" y="41" width="5.6" height="10" rx="1.5" fill="${RUST}" />
		<rect x="15.6" y="41" width="5.6" height="10" rx="1.5" fill="${AMBER}" />
		<rect x="22.2" y="41" width="5.6" height="10" rx="1.5" fill="${GREEN}" />
		<rect x="28.8" y="41" width="5.6" height="10" rx="1.5" fill="${TEAL}" />
		<rect x="35.4" y="41" width="5.6" height="10" rx="1.5" fill="${BLUE}" />
		<rect x="42" y="41" width="5.6" height="10" rx="1.5" fill="${PURPLE}" />
		<rect x="48.6" y="41" width="5.6" height="10" rx="1.5" fill="${PINK}" />`,
	// an IDE: activity bar, file tree, code, terminal and status bar
	'vscode': `
		<rect x="8" y="10" width="48" height="44" rx="6" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<path d="M16 10v38M28 10v38M28 40h28" stroke="var(--border)" stroke-width="2" />
		<rect x="10" y="15" width="4" height="4" rx="1" fill="${BLUE}" />
		<rect x="10" y="23" width="4" height="4" rx="1" fill="var(--fg-dim)" />
		<rect x="10" y="31" width="4" height="4" rx="1" fill="var(--fg-dim)" />
		<rect x="19" y="15" width="7" height="2.5" rx="1.25" fill="${AMBER}" />
		<rect x="21" y="20" width="5" height="2.5" rx="1.25" fill="var(--fg-dim)" />
		<rect x="21" y="25" width="5" height="2.5" rx="1.25" fill="var(--fg-dim)" />
		<rect x="19" y="30" width="7" height="2.5" rx="1.25" fill="${AMBER}" />
		<rect x="31" y="15" width="12" height="2.5" rx="1.25" fill="${PURPLE}" />
		<rect x="34" y="21" width="16" height="2.5" rx="1.25" fill="${BLUE}" />
		<rect x="34" y="27" width="10" height="2.5" rx="1.25" fill="${AMBER}" />
		<rect x="31" y="33" width="6" height="2.5" rx="1.25" fill="${PURPLE}" />
		<polyline points="31 42.5 33.5 44.5 31 46.5" fill="none" stroke="${GREEN}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="36" y="43.5" width="8" height="2" rx="1" fill="var(--fg-dim)" />
		<path d="M8 48h48a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6z" fill="${BLUE}" />`,
	// a log with a fresh line arriving and a follow arrow
	'tail': `
		<rect x="8" y="10" width="34" height="44" rx="5" fill="var(--panel)" stroke="var(--border)" stroke-width="2" />
		<path d="M12 16h6M12 22h6M12 28h6M12 34h6M12 40h6M12 47h6" stroke="var(--fg-dim)" stroke-opacity="0.6" stroke-width="2.5" stroke-linecap="round" />
		<path d="M22 16h14M22 22h10M22 28h13M22 34h8M22 40h12" stroke="var(--fg-dim)" stroke-width="2.5" stroke-linecap="round" />
		<rect x="10.5" y="44" width="29" height="6" rx="2" fill="${GREEN}" fill-opacity="0.2" />
		<line x1="22" y1="47" x2="34" y2="47" stroke="${GREEN}" stroke-width="2.5" stroke-linecap="round" />
		<line x1="50" y1="13" x2="50" y2="43" stroke="${AMBER}" stroke-width="4" stroke-linecap="round" />
		<polyline points="44 38 50 44 56 38" fill="none" stroke="${AMBER}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
		<rect x="44" y="49" width="12" height="4" rx="2" fill="${AMBER}" />`,
};
