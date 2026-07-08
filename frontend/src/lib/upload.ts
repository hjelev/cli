import { SITE_ORIGIN } from './config';

export type UploadableField = 'logo' | 'media';

// GitHub's Contents API PUT endpoint hard-caps a single file's *decoded*
// content at 1 MB. Cap well under that (raw file bytes, pre-base64) to leave
// headroom for base64's ~4/3 wire-size inflation rather than landing right on
// GitHub's boundary.
export const MAX_UPLOAD_BYTES = 900_000;

export const ACCEPTED_MIME_TO_EXT: Record<string, string> = {
	'image/png': 'png',
	'image/jpeg': 'jpg',
	'image/gif': 'gif',
	'image/webp': 'webp',
	'image/svg+xml': 'svg',
	'video/mp4': 'mp4',
	'video/webm': 'webm',
};

export const ACCEPT_ATTR = Object.keys(ACCEPTED_MIME_TO_EXT).join(',');

const EXT_FALLBACK_RE = /\.(png|jpe?g|gif|webp|svg|mp4|webm)$/i;

// Prefers the browser-reported MIME type; falls back to the filename
// extension for the rare case a browser/OS doesn't set `file.type` (e.g. some
// drag-and-drop sources for .svg). Returns null if neither matches.
export function extensionForFile(file: File): string | null {
	if (file.type && ACCEPTED_MIME_TO_EXT[file.type]) return ACCEPTED_MIME_TO_EXT[file.type];
	const match = file.name.match(EXT_FALLBACK_RE);
	return match ? match[1].toLowerCase().replace('jpeg', 'jpg') : null;
}

// Returns an error message, or null if the file is acceptable.
export function validateUploadFile(file: File): string | null {
	if (file.size > MAX_UPLOAD_BYTES) {
		return `${file.name} is too large (max ${Math.floor(MAX_UPLOAD_BYTES / 1000)} KB).`;
	}
	if (!extensionForFile(file)) {
		return `${file.name} isn't a supported file type (png, jpg, gif, webp, svg, mp4, webm).`;
	}
	return null;
}

export function buildUploadUrl(slug: string, field: UploadableField, ext: string): string {
	return `${SITE_ORIGIN}/uploads/${slug}/${field}.${ext}`;
}

// Binary-safe File -> base64, distinct from github-submit.ts's toBase64Utf8
// (which goes through TextEncoder/TextDecoder and would corrupt non-UTF8
// bytes). Byte-by-byte loop mirrors toBase64Utf8's approach rather than a
// spread (String.fromCharCode(...bytes)), which risks a stack overflow on
// larger arrays.
export async function fileToBase64(file: File): Promise<string> {
	const bytes = new Uint8Array(await file.arrayBuffer());
	let binary = '';
	bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
	return btoa(binary);
}
