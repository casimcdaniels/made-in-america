// Type definitions for content collections

export interface Job {
	id: string;
	title: string;
	company: string;
	location: string;
	type: string;
	salary?: string;
	description: string;
	requirements: string[];
	postedDate: string;
	era: string;
	filters?: {
		gender?: 'male' | 'female' | 'any';
		race?: 'white' | 'black' | 'any';
		minAge?: number;
		maxAge?: number;
		education?: 'none' | 'elementary' | 'highschool' | 'college' | 'graduate';
		experience?: 'none' | 'some' | 'experienced';
		union?: boolean;
		maritalStatus?: 'single' | 'married' | 'any';
	};
}

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
	translation?: string;
	language?: string;
}

export interface HistoricalEvent {
	id: string;
	title: string;
	date: string;
	description: string;
	era: string;
}

