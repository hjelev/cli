import type { RepoAutofillData, RepoHost } from './github-repo';
import { parseRepoUrl } from './github-repo';
import { INSTALL_METHODS } from './schema';
import { validateUploadFile, type UploadableField } from './upload';

const UPLOADABLE_FIELDS: readonly UploadableField[] = ['media', 'logo'];

// Shared client-side behavior for ToolForm.astro, used by both submit.astro
// (blank rows, JS-created) and tools/[id]/edit.astro (rows server-rendered
// from the tool's current data). Rows added via the "+ add" button and rows
// rendered server-side must be indistinguishable to the delegated remove-row
// listener wired up by initInstallationRows.

export function createInstallationRow(): HTMLElement {
	const row = document.createElement('div');
	row.className = 'install-row';

	const select = document.createElement('select');
	select.name = 'installation_method';
	select.required = true;
	select.innerHTML =
		'<option value="" disabled selected>method</option>' +
		INSTALL_METHODS.map((m) => `<option value="${m}">${m}</option>`).join('');

	const input = document.createElement('input');
	input.name = 'installation_command';
	input.required = true;
	input.placeholder = 'cargo install your-tool';

	const removeBtn = document.createElement('button');
	removeBtn.type = 'button';
	removeBtn.className = 'remove-row-btn';
	removeBtn.textContent = '−';
	removeBtn.setAttribute('aria-label', 'Remove install method');

	row.append(select, input, removeBtn);
	return row;
}

// Clears the container back to a single blank row without touching event
// listeners — callers must invoke initInstallationRows exactly once at page
// load; re-invoking it (e.g. after a successful submit) would stack a
// duplicate delegated listener on the container/add-button.
export function resetInstallationRows(container: HTMLElement): void {
	container.replaceChildren(createInstallationRow());
	updateRemoveButtons(container);
}

export function updateRemoveButtons(container: HTMLElement): void {
	const rows = container.querySelectorAll('.install-row');
	rows.forEach((row) => {
		(row.querySelector('.remove-row-btn') as HTMLButtonElement).disabled = rows.length <= 1;
	});
}

// Best-effort mapping from a typed install command to its install method,
// checked in order against the start of the (trimmed) command. Methods with
// no recognizable CLI invocation (binary, other) are left for the user.
const INSTALL_METHOD_PATTERNS: ReadonlyArray<[RegExp, (typeof INSTALL_METHODS)[number]]> = [
	[/^cargo\b/i, 'cargo'],
	[/^brew\b/i, 'brew'],
	[/^(sudo\s+)?apt(-get)?\b/i, 'apt'],
	[/^(sudo\s+)?dnf\b/i, 'dnf'],
	[/^(sudo\s+)?rpm\b/i, 'rpm'],
	[/^(sudo\s+)?apk\b/i, 'apk'],
	[/^(sudo\s+)?pacman\b/i, 'pacman'],
	[/^(yay|paru)\b/i, 'aur'],
	[/^npm\b/i, 'npm'],
	[/^(pip3?|python3?\s+-m\s+pip)\b/i, 'pip'],
	[/^uv\b/i, 'uv'],
	[/^pipx\b/i, 'pipx'],
	[/^go\s+(install|get)\b/i, 'go'],
	[/^gem\b/i, 'gem'],
	[/^nix(-env|\s+profile\s+install|\s+shell)?\b/i, 'nix'],
	[/^docker\b/i, 'docker'],
	[/^(curl|wget)\b.*\|\s*(sudo\s+)?(sh|bash|zsh)\b/i, 'script'],
	[/^(irm|iwr|invoke-restmethod|invoke-webrequest)\b.*\|\s*(iex|invoke-expression)\b/i, 'powershell'],
	[/^eget\b/i, 'eget'],
	[/^(sudo\s+)?snap\b/i, 'snap'],
	[/^(sudo\s+)?port\b/i, 'port'],
	[/^pkgin\b/i, 'pkgin'],
	[/^(sudo\s+)?pkg\b/i, 'pkg'],
	[/^scoop\b/i, 'scoop'],
	[/^choco(latey)?\b/i, 'choco'],
	[/^winget\b/i, 'winget'],
];

export function detectInstallMethod(command: string): (typeof INSTALL_METHODS)[number] | undefined {
	const trimmed = command.trim();
	if (!trimmed) return undefined;
	return INSTALL_METHOD_PATTERNS.find(([pattern]) => pattern.test(trimmed))?.[1];
}

// Wires the "+ add" button and a delegated remove-row click handler (so it
// works for both server-rendered and JS-created rows), then ensures at least
// one row exists. Also auto-selects each row's method from its command text
// as the user types, unless that row's method was already chosen (either
// server-rendered with a value, e.g. on the edit page, or picked manually via
// the dropdown) — a manual choice always wins over detection.
export function initInstallationRows(container: HTMLElement, addBtn: HTMLButtonElement): void {
	container.addEventListener('click', (event) => {
		const removeBtn = (event.target as HTMLElement).closest('.remove-row-btn');
		if (!removeBtn) return;
		removeBtn.closest('.install-row')?.remove();
		updateRemoveButtons(container);
	});

	addBtn.addEventListener('click', () => {
		container.appendChild(createInstallationRow());
		updateRemoveButtons(container);
	});

	container.addEventListener('change', (event) => {
		const select = event.target as HTMLElement;
		if (select instanceof HTMLSelectElement && select.name === 'installation_method') {
			select.dataset.userSet = 'true';
		}
	});

	container.addEventListener('input', (event) => {
		const input = event.target as HTMLElement;
		if (!(input instanceof HTMLInputElement) || input.name !== 'installation_command') return;
		const select = input.closest('.install-row')?.querySelector<HTMLSelectElement>('select[name="installation_method"]');
		if (!select || select.dataset.userSet === 'true') return;
		const detected = detectInstallMethod(input.value);
		if (detected) select.value = detected;
	});

	container.querySelectorAll<HTMLSelectElement>('select[name="installation_method"]').forEach((select) => {
		if (select.value) select.dataset.userSet = 'true';
	});

	if (container.querySelectorAll('.install-row').length === 0) {
		container.appendChild(createInstallationRow());
	}
	updateRemoveButtons(container);
}

export function splitList(value: string): string[] {
	return value
		.split(',')
		.map((item) => item.trim())
		.filter(Boolean);
}

export function optional(value: string): string | undefined {
	return value.trim() ? value.trim() : undefined;
}

export function getFieldSource(form: HTMLFormElement, field: UploadableField): 'url' | 'upload' {
	const checked = form.querySelector<HTMLInputElement>(`input[name="${field}_source"]:checked`);
	return checked?.value === 'upload' ? 'upload' : 'url';
}

// Pulls the selected File for each logo/media field currently toggled to
// "upload" — a field left in upload mode with nothing chosen simply
// contributes no file (readCandidate already sends `undefined` for its URL
// in that case, same as leaving it blank today).
export function extractUploadFiles(form: HTMLFormElement): Partial<Record<UploadableField, File>> {
	const result: Partial<Record<UploadableField, File>> = {};
	for (const field of UPLOADABLE_FIELDS) {
		if (getFieldSource(form, field) !== 'upload') continue;
		const input = form.elements.namedItem(`${field}_file`) as HTMLInputElement | null;
		const file = input?.files?.[0];
		if (file) result[field] = file;
	}
	return result;
}

// Wires the URL/Upload radio toggle for both media and logo: shows/hides the
// matching panel and validates a selected file immediately (clearing it and
// showing an error if it fails), so a bad file can never reach
// extractUploadFiles. Scoped per field via each radio's containing `.field`,
// since both fields share identical [data-source-panel] markup.
export function initUploadToggles(form: HTMLFormElement): void {
	const resetCallbacks: Array<() => void> = [];

	for (const field of UPLOADABLE_FIELDS) {
		const radios = form.querySelectorAll<HTMLInputElement>(`input[name="${field}_source"]`);
		if (radios.length === 0) continue;
		const container = radios[0].closest('.field');
		if (!container) continue;

		const urlPanel = container.querySelector<HTMLElement>('[data-source-panel="url"]');
		const uploadPanel = container.querySelector<HTMLElement>('[data-source-panel="upload"]');
		const fileInput = container.querySelector<HTMLInputElement>(`input[name="${field}_file"]`);
		const fileName = container.querySelector<HTMLElement>('[data-file-name]');
		const fileError = container.querySelector<HTMLElement>('[data-file-error]');

		const applyVisibility = () => {
			const source = getFieldSource(form, field);
			urlPanel?.toggleAttribute('hidden', source !== 'url');
			uploadPanel?.toggleAttribute('hidden', source !== 'upload');
		};

		radios.forEach((radio) => radio.addEventListener('change', applyVisibility));
		applyVisibility();

		fileInput?.addEventListener('change', () => {
			const file = fileInput.files?.[0];
			if (fileError) fileError.textContent = '';
			if (fileName) fileName.textContent = '';
			if (!file) return;

			const error = validateUploadFile(file);
			if (error) {
				fileInput.value = '';
				if (fileError) fileError.textContent = error;
				return;
			}
			if (fileName) fileName.textContent = file.name;
		});

		// `form.reset()` reverts the radios' checked state (native `checked`
		// attribute wins) without firing `change`, so panel visibility and any
		// stale filename/error text would otherwise be left stuck on a reset.
		resetCallbacks.push(() => {
			applyVisibility();
			if (fileName) fileName.textContent = '';
			if (fileError) fileError.textContent = '';
		});
	}

	form.addEventListener('reset', () => {
		// Native reset hasn't applied yet synchronously within the same tick in
		// every browser; deferring one microtask ensures radios have already
		// reverted to their default `checked` state before we re-read them.
		queueMicrotask(() => resetCallbacks.forEach((callback) => callback()));
	});
}

// Raw, unvalidated candidate built from the form — caller runs it through
// `toolFormSchema.safeParse`.
export function readCandidate(form: HTMLFormElement): Record<string, unknown> {
	const formData = new FormData(form);
	const installMethods = formData.getAll('installation_method').map(String);
	const installCommands = formData.getAll('installation_command').map(String);
	const installation = installMethods
		.map((method, i) => ({ method, command: (installCommands[i] ?? '').trim() }))
		.filter((entry) => entry.command);

	return {
		name: String(formData.get('name') ?? '').trim(),
		category: String(formData.get('category') ?? ''),
		short_description: String(formData.get('short_description') ?? '').trim(),
		description: String(formData.get('description') ?? '').trim(),
		repository_url: String(formData.get('repository_url') ?? '').trim(),
		website: optional(String(formData.get('website') ?? '')),
		author: String(formData.get('author') ?? '').trim(),
		license: String(formData.get('license') ?? '').trim(),
		language: String(formData.get('language') ?? '').trim(),
		installation,
		platforms: splitList(String(formData.get('platforms') ?? '')),
		tags: splitList(String(formData.get('tags') ?? '')),
		media: getFieldSource(form, 'media') === 'upload' ? undefined : optional(String(formData.get('media') ?? '')),
		logo: getFieldSource(form, 'logo') === 'upload' ? undefined : optional(String(formData.get('logo') ?? '')),
	};
}

function setFieldValue(form: HTMLFormElement, name: string, value: string | undefined): void {
	if (!value) return;
	const el = form.elements.namedItem(name);
	if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) el.value = value;
}

// Wires the "Autofill from repo" button: parses the repository URL field,
// fetches repo metadata (caller supplies `fetchInfo`, typically
// fetchRepoAutofill bound to the current auth token), and overwrites the
// fields the repo host can supply. `category`, `installation`, and
// `platforms` have no reliable repo-host source and are left for the user to
// fill in.
export function initAutofill(
	form: HTMLFormElement,
	fetchInfo: (host: RepoHost, owner: string, repo: string) => Promise<RepoAutofillData>,
): void {
	const btn = form.querySelector<HTMLButtonElement>('#autofill-btn');
	const status = form.querySelector<HTMLElement>('#autofill-status');
	const urlInput = form.elements.namedItem('repository_url');
	if (!btn || !(urlInput instanceof HTMLInputElement)) return;

	btn.addEventListener('click', async () => {
		const parsed = parseRepoUrl(urlInput.value);
		if (!parsed) {
			if (status) status.textContent = 'Enter a valid GitHub or Codeberg repository URL first.';
			return;
		}

		btn.disabled = true;
		if (status) status.textContent = 'Fetching repo info…';

		try {
			const data = await fetchInfo(parsed.host, parsed.owner, parsed.repo);
			setFieldValue(form, 'name', data.name);
			setFieldValue(form, 'short_description', data.short_description);
			setFieldValue(form, 'description', data.description);
			setFieldValue(form, 'website', data.website);
			setFieldValue(form, 'author', data.author);
			setFieldValue(form, 'license', data.license);
			setFieldValue(form, 'language', data.language);
			if (data.tags.length) setFieldValue(form, 'tags', data.tags.join(', '));
			if (status) status.textContent = 'Auto-filled from repository. Review before submitting.';
		} catch (error) {
			if (status) status.textContent = error instanceof Error ? error.message : 'Could not fetch repository info.';
		} finally {
			btn.disabled = false;
		}
	});
}
