import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { toolSchema } from '../src/lib/schema.ts';

const repoRoot = path.resolve(import.meta.dirname, '..');
const baseSha = process.env.BASE_SHA;
const headSha = process.env.HEAD_SHA;

if (!baseSha || !headSha) {
	console.error('BASE_SHA and HEAD_SHA environment variables are required.');
	process.exit(1);
}

const diffOutput = execSync(`git diff --name-only --diff-filter=d ${baseSha} ${headSha} -- 'src/content/tools/*.md'`, {
	cwd: repoRoot,
	encoding: 'utf8',
});
const changedFiles = diffOutput
	.split('\n')
	.map((line) => line.trim())
	.filter(Boolean);

if (changedFiles.length === 0) {
	console.log('No tool submission files changed — nothing to validate.');
	process.exit(0);
}

async function checkUrl(url: string): Promise<boolean> {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 10_000);
	try {
		let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: controller.signal });
		if (res.status === 405 || res.status === 501) {
			res = await fetch(url, { method: 'GET', redirect: 'follow', signal: controller.signal });
		}
		return res.ok;
	} catch {
		return false;
	} finally {
		clearTimeout(timeout);
	}
}

let hasErrors = false;

for (const relativePath of changedFiles) {
	const fullPath = path.resolve(repoRoot, relativePath);
	const raw = fs.readFileSync(fullPath, 'utf8');
	const { data } = matter(raw);
	const result = toolSchema.safeParse(data);

	if (!result.success) {
		hasErrors = true;
		console.error(`\n❌ ${relativePath} — schema validation failed:`);
		for (const issue of result.error.issues) {
			console.error(`   - ${issue.path.join('.') || '(root)'}: ${issue.message}`);
		}
		continue;
	}
	console.log(`✅ ${relativePath}: schema valid`);

	const urlFields: Array<[string, string | undefined]> = [
		['repository_url', result.data.repository_url],
		['website', result.data.website],
		['media', result.data.media],
		['logo', result.data.logo],
	];

	for (const [field, url] of urlFields) {
		if (!url) continue;
		const reachable = await checkUrl(url);
		if (!reachable) {
			hasErrors = true;
			console.error(`❌ ${relativePath}: ${field} (${url}) is not reachable (did not return a successful response)`);
		} else {
			console.log(`✅ ${relativePath}: ${field} reachable`);
		}
	}
}

if (hasErrors) {
	console.error('\nValidation failed.');
	process.exit(1);
}

console.log('\nAll submissions valid.');
