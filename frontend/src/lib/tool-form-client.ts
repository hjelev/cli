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

// Wires the "+ add" button and a delegated remove-row click handler (so it
// works for both server-rendered and JS-created rows), then ensures at least
// one row exists.
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
