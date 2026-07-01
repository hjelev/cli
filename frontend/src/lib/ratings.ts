// Aggregation helpers for user-contributed ratings. Ratings live in each
// tool's .md frontmatter (see schema.ts `ratingSchema`); the average is
// computed at build time and shown on cards and the detail page.

export interface Rating {
	user: string;
	value: number;
	date: string;
}

export function ratingSummary(ratings: Rating[] = []): { count: number; average: number } {
	const count = ratings.length;
	const average = count ? ratings.reduce((sum, r) => sum + r.value, 0) / count : 0;
	return { count, average };
}

// Renders a 0–5 average as five filled/empty stars.
export function stars(average: number): string {
	const filled = Math.max(0, Math.min(5, Math.round(average)));
	return '★'.repeat(filled) + '☆'.repeat(5 - filled);
}
