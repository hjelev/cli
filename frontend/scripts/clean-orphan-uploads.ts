import fs from 'node:fs';
import path from 'node:path';

// Finds files under public/uploads/ that no source file references any more —
// left behind when an edit swaps an uploaded logo/media for a remote URL, a
// re-upload changes the extension (logo.png -> logo.gif), or a listing is
// removed. The edit flow never deletes old uploads (see commitUpload in
// src/lib/github-submit.ts), so this is the cleanup pass.
//
//   npx tsx scripts/clean-orphan-uploads.ts           # list orphans, exit 1 if any
//   npx tsx scripts/clean-orphan-uploads.ts --delete  # remove them (+ empty dirs)
//
// "Referenced" is a plain substring match for `/uploads/<slug>/<file>` across
// every text file in src/ (frontmatter, pages, components, lib), so it works
// regardless of YAML style (folded `>-` values keep the URL on one line) and
// also covers any upload hard-coded outside a listing.

const frontendRoot = path.resolve(import.meta.dirname, '..');
const uploadsDir = path.join(frontendRoot, 'public/uploads');
const srcDir = path.join(frontendRoot, 'src');
const TEXT_EXT = new Set(['.md', '.mdx', '.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.yml', '.yaml']);

const shouldDelete = process.argv.includes('--delete');

function walk(dir: string): string[] {
	if (!fs.existsSync(dir)) return [];
	return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const full = path.join(dir, entry.name);
		return entry.isDirectory() ? walk(full) : [full];
	});
}

const corpus = walk(srcDir)
	.filter((file) => TEXT_EXT.has(path.extname(file)))
	.map((file) => fs.readFileSync(file, 'utf8'))
	.join('\n');

const uploads = walk(uploadsDir).filter((file) => !path.basename(file).startsWith('.'));
const orphans = uploads.filter((file) => {
	const urlPath = `/uploads/${path.relative(uploadsDir, file).split(path.sep).join('/')}`;
	return !corpus.includes(urlPath);
});

if (orphans.length === 0) {
	console.log(`No orphaned uploads (${uploads.length} files checked).`);
	process.exit(0);
}

console.log(`${orphans.length} orphaned upload(s) of ${uploads.length}:`);
for (const file of orphans) console.log(`  ${path.relative(frontendRoot, file)}`);

if (!shouldDelete) {
	console.log('\nRe-run with --delete to remove them.');
	process.exit(1);
}

for (const file of orphans) fs.rmSync(file);
// Drop slug folders left empty (e.g. every upload for a removed listing).
for (const dir of new Set(orphans.map((file) => path.dirname(file)))) {
	if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}
console.log('Deleted.');
