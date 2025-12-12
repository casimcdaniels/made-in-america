export interface FeedPost {
	id: string;
	author: string;
	authorRole: string;
	avatar?: string;
	content: string;
	timestamp: string;
	era: string;
	likes: number;
	comments: number;
	reactions?: string[];
	translation?: string; // English translation for non-English posts
	language?: string; // Language code (e.g., 'ga' for Irish, 'de' for German, 'zh' for Chinese)
	source?: string; // Citation for the quote/source material
	sourceTitle?: string; // Title of the source document/book
	images?: Array<{
		url: string;
		alt: string;
		citation: string;
	}>;
}

function parseFeedDate(dateString: string): Date {
	// Handle formats like "March 15, 1776", "May 1, 1886", etc.
	// Also handle special formats like "1950 (quoted 2024)" - use the first year
	const cleaned = dateString.replace(/\(.*\)/g, '').trim();
	const parts = cleaned.split(' ');
	
	if (parts.length >= 3) {
		const [month, day, year] = parts;
		const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
			'July', 'August', 'September', 'October', 'November', 'December'];
		const monthIndex = monthNames.findIndex(m => m.toLowerCase().startsWith(month.toLowerCase()));
		const dayNum = parseInt(day.replace(',', ''));
		const yearNum = parseInt(year);
		
		if (monthIndex >= 0 && !isNaN(dayNum) && !isNaN(yearNum)) {
			return new Date(yearNum, monthIndex, dayNum);
		}
	}
	
	// Fallback: try to extract year from string
	const yearMatch = cleaned.match(/\d{4}/);
	if (yearMatch) {
		return new Date(parseInt(yearMatch[0]), 0, 1);
	}
	
	// Last resort: return epoch date
	return new Date(0);
}

export async function getFeedPostsByEra(eraId: string): Promise<FeedPost[]> {
	const { getCollection } = await import('astro:content');
	const postEntries = await (getCollection as any)('posts');
	const postsFromCollection = postEntries
		.filter((post: any) => post.data.era === eraId)
		.map((entry: any) => ({
			id: entry.data.id,
			author: entry.data.author,
			authorRole: entry.data.authorRole,
			avatar: entry.data.avatar,
			content: entry.body.trim(),
			timestamp: entry.data.timestamp,
			era: entry.data.era,
			likes: entry.data.likes,
			comments: entry.data.comments,
			reactions: entry.data.reactions,
			translation: entry.data.translation,
			language: entry.data.language,
			source: entry.data.source,
			sourceTitle: entry.data.sourceTitle,
			images: entry.data.images,
		}));
	
	return postsFromCollection.sort((a: FeedPost, b: FeedPost) => {
			const dateA = parseFeedDate(a.timestamp);
			const dateB = parseFeedDate(b.timestamp);
			return dateB.getTime() - dateA.getTime(); // Most recent first
		});
}

export interface HistoricalEvent {
	id: string;
	title: string;
	date: string;
	description: string;
	era: string;
}

export async function getHistoricalEventsByEra(eraId: string): Promise<HistoricalEvent[]> {
	const { getCollection } = await import('astro:content');
	const eventEntries = await (getCollection as any)('events');
	const eventsFromCollection = eventEntries
		.filter((event: any) => event.data.era === eraId)
		.map((entry: any) => ({
			id: entry.data.id,
			title: entry.data.title,
			date: entry.data.date,
			description: entry.body.trim(),
			era: entry.data.era,
		}));
	
	return eventsFromCollection.sort((a: HistoricalEvent, b: HistoricalEvent) => {
			const dateA = parseFeedDate(a.date);
			const dateB = parseFeedDate(b.date);
			return dateB.getTime() - dateA.getTime(); // Most recent first
		});
}

export function getEraTheme(eraId: string) {
	const themes: Record<string, { primary: string; secondary: string; accent: string; bg: string }> = {
		agrarian: {
			primary: "#8B4513",
			secondary: "#D2691E",
			accent: "#228B22",
			bg: "#F5F5DC"
		},
		industrial: {
			primary: "#2F4F4F",
			secondary: "#708090",
			accent: "#DC143C",
			bg: "#F5F5F5"
		},
		"post-industrial": {
			primary: "#00CED1",
			secondary: "#20B2AA",
			accent: "#FF1493",
			bg: "#E0FFFF"
		},
		digital: {
			primary: "#0a66c2",
			secondary: "#004182",
			accent: "#00D4FF",
			bg: "#F5F5F5"
		}
	};
	return themes[eraId] || themes.digital;
}

