import fs from 'node:fs';
import matter from 'gray-matter';
import type { z } from 'zod';
import { toolSchema } from '../../src/lib/schema.ts';

export type Tool = z.infer<typeof toolSchema>;

// Reads a tool .md file and validates its frontmatter against the schema.
// Returns the parsed tool, or the list of validation issues as printable
// strings.
export function parseToolFile(fullPath: string): { tool: Tool } | { issues: string[] } {
	const raw = fs.readFileSync(fullPath, 'utf8');
	const { data } = matter(raw);
	const result = toolSchema.safeParse(data);
	if (!result.success) {
		return {
			issues: result.error.issues.map((issue) => `${issue.path.join('.') || '(root)'}: ${issue.message}`),
		};
	}
	return { tool: result.data };
}
