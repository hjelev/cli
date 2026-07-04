import { INSTALL_METHODS } from './schema';

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
		media: optional(String(formData.get('media') ?? '')),
		logo: optional(String(formData.get('logo') ?? '')),
	};
}
