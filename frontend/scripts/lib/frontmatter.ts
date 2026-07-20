export const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

function readFrontmatterLines(raw: string): { lines: string[]; match: RegExpMatchArray } {
	const match = raw.match(FRONTMATTER_PATTERN);
	if (!match) throw new Error('file has no frontmatter block');
	return { lines: match[1].split('\n'), match };
}

function writeFrontmatterLines(raw: string, match: RegExpMatchArray, lines: string[]): string {
	const newFrontmatter = `---\n${lines.join('\n')}\n---\n`;
	return raw.slice(0, match.index) + newFrontmatter + raw.slice(match.index! + match[0].length);
}

// Rewrites a set of frontmatter fields in-place, leaving every other line
// byte-for-byte untouched — a full YAML parse+dump round-trip (e.g. via
// gray-matter/js-yaml) would re-quote unrelated fields and produce noisy
// diffs on every run. Strips any existing lines matching `stripPattern`,
// then inserts `newLines` before the first line matching `anchorPattern`
// (appends at the end if no anchor is found).
export function spliceFrontmatterFields(raw: string, newLines: string[], stripPattern: RegExp, anchorPattern: RegExp): string {
	const { lines, match } = readFrontmatterLines(raw);

	const kept = lines.filter((line) => !stripPattern.test(line));
	const anchor = kept.findIndex((line) => anchorPattern.test(line));
	if (anchor === -1) {
		kept.push(...newLines);
	} else {
		kept.splice(anchor, 0, ...newLines);
	}

	return writeFrontmatterLines(raw, match, kept);
}

// Replaces a single list-valued frontmatter field in-place, preserving
// whichever style (flow `field: [a, b]` or block `field:\n  - a`) the file
// already used.
export function replaceFrontmatterListField(raw: string, field: string, values: string[]): string {
	const { lines, match } = readFrontmatterLines(raw);

	const fieldPattern = new RegExp(`^${field}:`);
	const fieldIndex = lines.findIndex((line) => fieldPattern.test(line));
	if (fieldIndex === -1) throw new Error(`no ${field} field found`);

	const isFlow = new RegExp(`^${field}:\\s*\\[`).test(lines[fieldIndex]);
	let endIndex = fieldIndex;
	if (!isFlow) {
		while (endIndex + 1 < lines.length && /^\s+-\s/.test(lines[endIndex + 1])) {
			endIndex += 1;
		}
	}

	const replacement = isFlow ? [`${field}: [${values.join(', ')}]`] : [`${field}:`, ...values.map((value) => `  - ${value}`)];
	lines.splice(fieldIndex, endIndex - fieldIndex + 1, ...replacement);

	return writeFrontmatterLines(raw, match, lines);
}
