// "Trending" = stars gained in the last 14 days (repo_stars_recent, written by
// scripts/sync-github-stats.ts). Shared by ToolCard, the tool page and the
// client-rendered search cards so all three label it the same way.
const compact = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 });

export const formatRecentStars = (count: number): string => `▲ ${compact.format(count)}`;

export const RECENT_STARS_TITLE = (count: number): string =>
	`+${count} star${count === 1 ? '' : 's'} in the last 2 weeks`;
