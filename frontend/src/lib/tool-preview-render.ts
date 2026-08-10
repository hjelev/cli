import { marked } from 'marked';
import { getAsciinemaId, getMediaKind } from './media';
import { slugify } from './slug';
import type { UploadableField } from './upload';

interface InstallEntry {
	method: string;
	command: string;
}

// Best-effort shape of a submit/edit form candidate — the raw, unvalidated
// output of readCandidate() in tool-form-client.ts. Fields may be empty
// strings/arrays if the contributor hasn't filled them in yet; the preview
// renders a placeholder for those rather than erroring, per the "always
// available" preview UX.
interface PreviewCandidate {
	name?: unknown;
	category?: unknown;
	short_description?: unknown;
	description?: unknown;
	repository_url?: unknown;
	website?: unknown;
	author?: unknown;
	license?: unknown;
	language?: unknown;
	installation?: unknown;
	platforms?: unknown;
	tags?: unknown;
	media?: unknown;
	logo?: unknown;
}

export interface ToolPreviewResult {
	fragment: DocumentFragment;
	// Object URLs created for uploaded files — caller must revoke these
	// (URL.revokeObjectURL) once the preview they belong to is replaced.
	objectUrls: string[];
}

function str(value: unknown): string {
	return typeof value === 'string' ? value.trim() : '';
}

function list(value: unknown): string[] {
	return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string' && v.trim() !== '') : [];
}

function installList(value: unknown): InstallEntry[] {
	if (!Array.isArray(value)) return [];
	return value.filter(
		(v): v is InstallEntry =>
			typeof v === 'object' && v !== null && typeof (v as InstallEntry).command === 'string' && (v as InstallEntry).command.trim() !== '',
	);
}

function el<K extends keyof HTMLElementTagNameMap>(
	tag: K,
	opts: { className?: string; text?: string; html?: string; attrs?: Record<string, string> } = {},
): HTMLElementTagNameMap[K] {
	const node = document.createElement(tag);
	if (opts.className) node.className = opts.className;
	if (opts.text !== undefined) node.textContent = opts.text;
	if (opts.html !== undefined) node.innerHTML = opts.html;
	if (opts.attrs) for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
	return node;
}

function placeholder(text = '—'): HTMLElement {
	return el('span', { className: 'preview-empty', text });
}

function buildHeader(candidate: PreviewCandidate, logoSrc: string | undefined): HTMLElement {
	const header = el('header', { className: 'man-header' });
	if (logoSrc) {
		const stack = el('div', { className: 'logo-stack' });
		stack.append(el('img', { attrs: { src: logoSrc, alt: 'logo', width: '48', height: '48' } }));
		header.append(stack);
	}
	const titleBlock = el('div');
	const name = str(candidate.name);
	titleBlock.append(el('h1', { text: name || 'Untitled tool' }));
	const tagline = el('p', { className: 'tagline' });
	const shortDesc = str(candidate.short_description);
	if (shortDesc) tagline.textContent = shortDesc;
	else tagline.append(placeholder('No short description yet.'));
	titleBlock.append(tagline);
	header.append(titleBlock);
	return header;
}

function buildMedia(mediaSrc: string | undefined, name: string): HTMLElement | null {
	if (!mediaSrc) return null;
	const asciinemaId = getAsciinemaId(mediaSrc);
	if (asciinemaId) {
		// asciinema's embed script only runs against real asciinema.org URLs; a
		// blob: URL (uploaded file) never reaches this branch since uploads are
		// images/video only (see upload.ts's ACCEPTED_MIME_TO_EXT).
		return el('script', { attrs: { id: `preview-asciicast-${asciinemaId}`, src: `https://asciinema.org/a/${asciinemaId}.js`, 'data-autoplay': 'false', async: 'true' } });
	}
	if (getMediaKind(mediaSrc) === 'video') {
		return el('video', { className: 'media', attrs: { src: mediaSrc, autoplay: 'true', loop: 'true', muted: 'true', playsinline: 'true', controls: 'true' } });
	}
	return el('img', { className: 'media', attrs: { src: mediaSrc, alt: `${name || 'tool'} demo` } });
}

function buildDescription(candidate: PreviewCandidate): HTMLElement {
	const section = el('section', { className: 'man-section' });
	section.append(el('h2', { text: 'DESCRIPTION' }));
	const description = str(candidate.description);
	if (description) {
		section.append(el('div', { className: 'description', html: marked.parse(description, { async: false }) }));
	} else {
		const div = el('div', { className: 'description' });
		div.append(placeholder('No description yet.'));
		section.append(div);
	}
	return section;
}

function buildInstallation(entries: InstallEntry[]): HTMLElement {
	const section = el('section', { className: 'man-section' });
	section.append(el('h2', { text: 'INSTALLATION' }));

	if (entries.length === 0) {
		const empty = el('p');
		empty.append(placeholder('No install method added yet.'));
		section.append(empty);
		return section;
	}

	const tabs = el('div', { className: 'install-tabs' });

	if (entries.length > 1) {
		const tabList = el('div', { className: 'tab-list', attrs: { role: 'tablist' } });
		entries.forEach((entry, i) => {
			const btn = el('button', {
				className: `tab-btn${i === 0 ? ' active' : ''}`,
				text: entry.method || '(method)',
				attrs: {
					type: 'button',
					role: 'tab',
					id: `preview-tab-${i}`,
					'aria-controls': `preview-panel-${i}`,
					'aria-selected': i === 0 ? 'true' : 'false',
				},
			});
			tabList.append(btn);
		});
		tabs.append(tabList);
	}

	const panels: HTMLElement[] = [];
	entries.forEach((entry, i) => {
		const panel = el('div', {
			className: 'tab-panel',
			attrs: { role: 'tabpanel', id: `preview-panel-${i}`, 'aria-labelledby': `preview-tab-${i}` },
		});
		if (i !== 0) panel.hidden = true;

		const pre = el('pre', { className: 'code' });
		pre.append(el('code', { text: `$ ${entry.command}` }));
		panel.append(pre);

		const copyBtn = el('button', { className: 'copy-btn', attrs: { type: 'button', 'aria-label': 'Copy command to clipboard' } });
		copyBtn.textContent = 'copy';
		copyBtn.addEventListener('click', () => {
			navigator.clipboard.writeText(entry.command).then(() => {
				copyBtn.classList.add('copied');
				setTimeout(() => copyBtn.classList.remove('copied'), 1500);
			});
		});
		panel.append(copyBtn);

		panels.push(panel);
		tabs.append(panel);
	});

	if (entries.length > 1) {
		const tabButtons = Array.from(tabs.querySelectorAll<HTMLButtonElement>('.tab-btn'));
		tabButtons.forEach((btn, i) => {
			btn.addEventListener('click', () => {
				tabButtons.forEach((b) => {
					b.classList.remove('active');
					b.setAttribute('aria-selected', 'false');
				});
				panels.forEach((p) => (p.hidden = true));
				btn.classList.add('active');
				btn.setAttribute('aria-selected', 'true');
				panels[i].hidden = false;
			});
		});
	}

	section.append(tabs);
	return section;
}

function detailRow(dl: HTMLElement, label: string, value: HTMLElement | string | undefined): void {
	dl.append(el('dt', { text: label }));
	const dd = el('dd');
	if (!value) dd.append(placeholder());
	else if (typeof value === 'string') dd.textContent = value;
	else dd.append(value);
	dl.append(dd);
}

function buildDetails(candidate: PreviewCandidate): HTMLElement {
	const section = el('section', { className: 'man-section' });
	section.append(el('h2', { text: 'DETAILS' }));
	const dl = el('dl');

	const repoUrl = str(candidate.repository_url);
	if (repoUrl) {
		const link = el('a', { text: repoUrl.replace(/^https?:\/\/(www\.)?(github\.com|codeberg\.org|gitlab\.com)\//, ''), attrs: { href: repoUrl, target: '_blank', rel: 'noopener' } });
		detailRow(dl, 'Repository', link);
	} else {
		detailRow(dl, 'Repository', undefined);
	}

	const website = str(candidate.website);
	if (website) {
		const link = el('a', { text: website.replace(/^https?:\/\//, ''), attrs: { href: website, target: '_blank', rel: 'noopener' } });
		detailRow(dl, 'Website', link);
	}

	detailRow(dl, 'Author', str(candidate.author) || undefined);
	detailRow(dl, 'License', str(candidate.license) || undefined);

	const category = str(candidate.category);
	if (category) {
		const link = el('a', { text: category, attrs: { href: `/categories/${slugify(category)}` } });
		detailRow(dl, 'Category', link);
	} else {
		detailRow(dl, 'Category', undefined);
	}

	const language = str(candidate.language);
	detailRow(dl, 'Language', language || undefined);

	const platforms = list(candidate.platforms);
	detailRow(dl, 'Platforms', platforms.length ? platforms.join(', ') : undefined);

	section.append(dl);
	return section;
}

function buildTags(tags: string[]): HTMLElement {
	const section = el('section', { className: 'man-section' });
	section.append(el('h2', { text: 'TAGS' }));
	const ul = el('ul', { className: 'tags' });
	if (tags.length === 0) {
		const li = el('li');
		li.append(placeholder('No tags yet.'));
		ul.append(li);
	} else {
		tags.forEach((tag) => ul.append(el('li', { text: tag })));
	}
	section.append(ul);
	return section;
}

export function renderToolPreview(candidate: PreviewCandidate, files: Partial<Record<UploadableField, File>>): ToolPreviewResult {
	const objectUrls: string[] = [];
	const resolveSrc = (field: UploadableField, urlValue: unknown): string | undefined => {
		const file = files[field];
		if (file) {
			const objectUrl = URL.createObjectURL(file);
			objectUrls.push(objectUrl);
			return objectUrl;
		}
		return str(urlValue) || undefined;
	};

	const logoSrc = resolveSrc('logo', candidate.logo);
	const mediaSrc = resolveSrc('media', candidate.media);
	const name = str(candidate.name);

	const fragment = document.createDocumentFragment();
	fragment.append(buildHeader(candidate, logoSrc));

	const media = buildMedia(mediaSrc, name);
	if (media) fragment.append(media);

	fragment.append(buildDescription(candidate));
	fragment.append(buildInstallation(installList(candidate.installation)));
	fragment.append(buildDetails(candidate));
	fragment.append(buildTags(list(candidate.tags)));

	return { fragment, objectUrls };
}
