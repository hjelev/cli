import { z } from 'zod';

// Plain module (no `astro:content` import) so it can be shared between the
// server-side content collection config and client-side form validation —
// `astro:content` itself is server-only and breaks the browser bundle.
export const CATEGORIES = [
	'File Management',
	'Shell History',
	'Directory Listing',
	'System Monitoring',
	'Productivity',
	'Development Tools',
	'Networking',
	'Text Editors',
	'Media & Entertainment',
	'Security',
	'DevOps & Cloud',
	'Data Processing',
	'Games & Fun',
	'AI',
	'Git',
	'Utilities & Other',
] as const;

export const INSTALL_METHODS = [
	'cargo',
	'brew',
	'apt',
	'dnf',
	'rpm',
	'apk',
	'pacman',
	'aur',
	'npm',
	'pip',
	'uv',
	'pipx',
	'go',
	'gem',
	'nix',
	'docker',
	'script',
	'powershell',
	'eget',
	'snap',
	'binary',
	'port',
	'pkg',
	'pkgin',
	'scoop',
	'choco',
	'winget',
	'other',
] as const;

const installMethodSchema = z.object({
	method: z.enum(INSTALL_METHODS),
	command: z.string().min(1),
});

// User-contributed feedback, appended to a tool's .md frontmatter by the
// Worker (see worker/src/index.ts). `user` is the commenter's verified GitHub
// login, `date` an ISO-8601 timestamp.
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
	// ISO YYYY-MM-DD date the tool's content was last changed. Stamped on
	// submission; preserved (never bumped) by the comments Worker path.
	updated: z.string().optional(),
	comments: z.array(commentSchema).optional().default([]),
	// Repo-host-derived stats (GitHub or Codeberg), refreshed daily by
	// scripts/sync-github-stats.ts (see .github/workflows/sync-github-stats.yml).
	repo_stars: z.number().int().min(0).optional(),
	repo_updated: z.string().optional(), // ISO YYYY-MM-DD, repo's last push date
	repo_created: z.string().optional(), // ISO YYYY-MM-DD, repo creation date
	repo_release: z.string().optional(), // latest release tag name, e.g. "v1.2.3"
});

// What the submission form produces: everything except the feedback fields
// and repo-synced stats, which only the Worker / sync script write. Types
// are derived, never re-declared by hand.
export const toolFormSchema = toolSchema.omit({
	updated: true,
	comments: true,
	repo_stars: true,
	repo_updated: true,
	repo_created: true,
	repo_release: true,
});
export type ToolFormData = z.infer<typeof toolFormSchema>;

// Fields an edit must carry forward from the existing file rather than
// collect via the form — the form only ever produces `ToolFormData`.
export type PreservedToolFields = Pick<
	z.infer<typeof toolSchema>,
	'comments' | 'repo_stars' | 'repo_updated' | 'repo_created' | 'repo_release'
>;

// Per-category metadata, keyed by slugified category name (see content/categories/*.md).
// Deliberately minimal — a category page shows just one blurb, unlike a tool's many fields.
export const categorySchema = z.object({
	description: z.string().min(1),
});
export type CategoryFormData = z.infer<typeof categorySchema>;
