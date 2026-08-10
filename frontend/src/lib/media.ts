const ASCIINEMA_RE = /asciinema\.org\/a\/([\w-]+)/i;
const VIDEO_EXT_RE = /\.(webm|mp4)(\?.*)?$/i;

export type MediaKind = 'asciinema' | 'video' | 'image';

export function getAsciinemaId(url: string): string | undefined {
	return url.match(ASCIINEMA_RE)?.[1];
}

export function getMediaKind(url: string): MediaKind {
	if (ASCIINEMA_RE.test(url)) return 'asciinema';
	if (VIDEO_EXT_RE.test(url)) return 'video';
	return 'image';
}
