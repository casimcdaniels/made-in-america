import { defineCollection, z } from 'astro:content';

const jobsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string(),
		title: z.string(),
		company: z.string(),
		location: z.string(),
		type: z.string(),
		salary: z.string().optional(),
		postedDate: z.string(),
		era: z.string(),
		requirements: z.array(z.string()),
		filters: z.object({
			gender: z.enum(['male', 'female', 'any']).optional(),
			race: z.enum(['white', 'black', 'any']).optional(),
			minAge: z.number().optional(),
			maxAge: z.number().optional(),
			education: z.enum(['none', 'elementary', 'highschool', 'college', 'graduate']).optional(),
			experience: z.enum(['none', 'some', 'experienced']).optional(),
			union: z.boolean().optional(),
			maritalStatus: z.enum(['single', 'married', 'any']).optional(),
		}).optional(),
	}),
});

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string(),
		author: z.string(),
		authorRole: z.string(),
		avatar: z.string().optional(),
		timestamp: z.string(),
		era: z.string(),
		likes: z.number(),
		comments: z.number(),
		reactions: z.array(z.string()).optional(),
		translation: z.string().optional(),
		language: z.string().optional(),
	}),
});

const eventsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		id: z.string(),
		title: z.string(),
		date: z.string(),
		era: z.string(),
	}),
});

export const collections = {
	jobs: jobsCollection,
	posts: postsCollection,
	events: eventsCollection,
};

