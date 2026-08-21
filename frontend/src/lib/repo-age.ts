export const formatAge = (iso: string) => {
	const created = new Date(iso);
	const years = (Date.now() - created.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
	if (years >= 1) return `${Math.floor(years)} year${Math.floor(years) === 1 ? '' : 's'} old`;
	const months = Math.max(1, Math.floor(years * 12));
	return `${months} month${months === 1 ? '' : 's'} old`;
};
