// A leading emoji ("📻 gtm(d) is…") knocks a description out of line with
// its neighbours in a list, so drop it (plus any variation selector/ZWJ tail).
const LEADING_EMOJI = /^(?:\p{Extended_Pictographic}[️‍]*)+\s*/u;

export const stripLeadingEmoji = (text: string) => text.replace(LEADING_EMOJI, '');

// Every emoji (and GitHub :shortcode: emoji), anywhere in the text — for
// titles and meta descriptions, where search engines show them as noise
// (or drop them and leave double spaces).
export const stripEmoji = (text: string) =>
	text
		.replace(/:[a-z0-9_+-]+:/g, '')
		.replace(/[\p{Extended_Pictographic}\p{Emoji_Modifier}\u{FE0F}\u{200D}]/gu, '')
		.replace(/\s+/g, ' ')
		.trim();
