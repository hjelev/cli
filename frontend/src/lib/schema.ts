import { z } from 'zod';

// Plain module (no `astro:content` import) so it can be shared between the
// server-side content collection config and client-side form validation —
// `astro:content` itself is server-only and breaks the browser bundle.
export const CATEGORIES = [
	'File Management',
	'Shell History',
	'File Listing Utilities',
	'System Monitoring',
	'Productivity',
	'Development Tools',
	'Networking',
	'Text Editors & Note-taking',
	'Media & Entertainment',
	'Security',
	'DevOps & Cloud',
	'Data Processing',
	'Games & Fun',
	'Utilities/Other',
] as const;

export const INSTALL_METHODS = [
	'cargo',
	'brew',
	'apt',
	'dnf',
	'pacman',
	'npm',
	'pip',
	'go',
	'gem',
	'docker',
	'script',
	'snap',
	'binary',
	'winget'
	'other',
] as const;

const installMethodSchema = z.object({
	method: z.enum(INSTALL_METHODS),
	command: z.string().min(1),
});

// User-contributed feedback, appended to a tool's .md frontmatter by the
// Worker (see worker/src/index.ts). `user` is the commenter's verified GitHub
// login, `date` an ISO-8601 timestamp.
export const ratingSchema = z.object({
	user: z.string(),
	value: z.number().int().min(1).max(5),
	date: z.string(),
});

export const commentSchema = z.object({
	user: z.string(),
	body: z.string(),
	date: z.string(),
});

export const toolSchema = z.object({
	name: z.string(),
	category: z.enum(CATEGORIES),
	short_description: z.string(),
	description: z.string(),
	repository_url: z.url(),
	website: z.url().optional(),
	author: z.string(),
	license: z.string(),
	language: z.string(),
	installation: z.array(installMethodSchema).min(1),
	platforms: z.array(z.string()),
	tags: z.array(z.string()),
	media: z.url().optional(),
	logo: z.url().optional(),
	ratings: z.array(ratingSchema).optional().default([]),
	comments: z.array(commentSchema).optional().default([]),
});

// What the submission form produces: everything except the feedback fields,
// which only the Worker writes. Types are derived, never re-declared by hand.
export const toolFormSchema = toolSchema.omit({ ratings: true, comments: true });
export type ToolFormData = z.infer<typeof toolFormSchema>;
export type Rating = z.infer<typeof ratingSchema>;
