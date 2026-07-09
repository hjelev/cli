import fs from 'node:fs';
import path from 'node:path';
import { CATEGORIES } from '../src/lib/schema.ts';
import { parseToolFile } from './lib/load-tool.ts';

const frontendRoot = path.resolve(import.meta.dirname, '..');
const repoRoot = path.resolve(frontendRoot, '..');
const toolsDir = path.join(frontendRoot, 'src/content/tools');
const readmePath = path.join(repoRoot, 'README.md');

const START_MARKER = '<!-- TOOLS:START -->';
const END_MARKER = '<!-- TOOLS:END -->';

const files = fs.readdirSync(toolsDir).filter((file) => file.endsWith('.md'));

const tools = files.map((file) => {
	const parsed = parseToolFile(path.join(toolsDir, file));

	if ('issues' in parsed) {
		console.error(`❌ ${file} — schema validation failed:`);
		for (const issue of parsed.issues) {
			console.error(`   - ${issue}`);
		}
		process.exit(1);
	}

	return parsed.tool;
});

const byCategory = new Map<(typeof CATEGORIES)[number], typeof tools>();
for (const category of CATEGORIES) {
	const inCategory = tools
		.filter((tool) => tool.category === category)
		.sort((a, b) => a.name.localeCompare(b.name));
	if (inCategory.length > 0) {
		byCategory.set(category, inCategory);
	}
}

const DESCRIPTION_MAX_LENGTH = 100;

// Table cells must be single-line, and wildly long descriptions make some
// tables render far wider than others — collapse embedded newlines/whitespace
// and cap the length so table columns stay reasonably consistent in size.
function formatDescription(description: string): string {
	const collapsed = description.replace(/\s+/g, ' ').trim();
	if (collapsed.length <= DESCRIPTION_MAX_LENGTH) {
		return collapsed;
	}
	const truncated = collapsed.slice(0, DESCRIPTION_MAX_LENGTH);
	const lastSpace = truncated.lastIndexOf(' ');
	return `${truncated.slice(0, lastSpace > 0 ? lastSpace : DESCRIPTION_MAX_LENGTH)}…`;
}

const sections: string[] = [];
for (const [category, categoryTools] of byCategory) {
	const rows = categoryTools.map((tool) => {
		const nameLink = tool.website ?? tool.repository_url;
		const links = [`[Repo](${tool.repository_url})`];
		if (tool.website) {
			links.push(`[Website](${tool.website})`);
		}
		return `| [${tool.name}](${nameLink}) | ${formatDescription(tool.short_description)} | ${tool.language} | ${links.join(', ')} |`;
	});

	sections.push(
		[
			`### ${category}`,
			'',
			'| Name | Description | Language | Links |',
			'|------|-------------|----------|-------|',
			...rows,
		].join('\n'),
	);
}

const generated = sections.join('\n\n');

const currentReadme = fs.readFileSync(readmePath, 'utf8');
const markerPattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`);
const replacement = `${START_MARKER}\n\n${generated}\n\n${END_MARKER}`;

if (!markerPattern.test(currentReadme)) {
	console.error(`README.md is missing ${START_MARKER} / ${END_MARKER} markers.`);
	process.exit(1);
}

const updatedReadme = currentReadme.replace(markerPattern, replacement);

if (updatedReadme === currentReadme) {
	console.log('README.md is already up to date.');
} else {
	fs.writeFileSync(readmePath, updatedReadme);
	console.log('README.md updated.');
}
