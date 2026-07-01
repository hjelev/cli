import { z } from 'zod';

// Plain module (no `astro:content` import) so it can be shared between the
// server-side content collection config and client-side form validation —
// `astro:content` itself is server-only and breaks the browser bundle.
export const CATEGORIES = [
	'File Management',
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
	installation: z.string(),
	platforms: z.array(z.string()),
	tags: z.array(z.string()),
	media: z.url().optional(),
	logo: z.url().optional(),
});
