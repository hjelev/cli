import fs from 'node:fs';
import matter from 'gray-matter';
import type { z } from 'zod';
import { categorySchema, toolSchema } from '../../src/lib/schema.ts';

export type Tool = z.infer<typeof toolSchema>;
export type Category = z.infer<typeof categorySchema>;

function parseFrontmatter<T>(fullPath: string, schema: z.ZodType<T>): { data: T } | { issues: string[] } {
	const raw = fs.readFileSync(fullPath, 'utf8');
	const { data } = matter(raw);
	const result = schema.safeParse(data);
	if (!result.success) {
		return {
			issues: result.error.issues.map((issue) => `${issue.path.join('.') || '(root)'}: ${issue.message}`),
		};
	}
	return { data: result.data };
}

// Reads a tool .md file and validates its frontmatter against the schema.
// Returns the parsed tool, or the list of validation issues as printable
// strings.
export function parseToolFile(fullPath: string): { tool: Tool } | { issues: string[] } {
	const result = parseFrontmatter(fullPath, toolSchema);
	return 'issues' in result ? result : { tool: result.data };
}

// Same as parseToolFile, for a category description file.
export function parseCategoryFile(fullPath: string): { category: Category } | { issues: string[] } {
	const result = parseFrontmatter(fullPath, categorySchema);
	return 'issues' in result ? result : { category: result.data };
}
