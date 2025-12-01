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
}

export interface Era {
	id: string;
	name: string;
	years: string;
	description: string;
	context: string;
	primarySources: string[];
}

export const eras: Era[] = [
	{
		id: "agrarian",
		name: "Agrarian / Colonial Era",
		years: "1760–1820",
		description: "Pre-industrial farming in rural America",
		context: "Daily life centered on planting, harvesting, household labor, and local community responsibilities",
		primarySources: ["Crèvecœur's Letters from an American Farmer", "John & Abigail Adams letters"]
	},
	{
		id: "industrial",
		name: "Industrial Era",
		years: "1880–1910",
		description: "Rapid industrialization, urban factories, meatpacking, and labor unrest",
		context: "Labor movements: Haymarket Strike (1886), Homestead Strike (1892), Pullman Strike (1894)",
		primarySources: ["Upton Sinclair's The Jungle", "1906 U.S. House Report on Chicago Stockyards"]
	},
	{
		id: "automation",
		name: "Early Automation / Mid-20th Century",
		years: "1950–1970",
		description: "Rise of industrial machinery and automated equipment",
		context: "Workers adapting to machinery that replaces some manual labor",
		primarySources: ["Oral histories of Texas oil technicians", "Bureau of Labor Statistics bulletins on automation"]
	},
	{
		id: "digital",
		name: "Digital Computing / Early Tech Era",
		years: "1970–1995",
		description: "Women in computing, early software development, telephone operators transitioning to programmers",
		context: "Focus on social and workplace dynamics rather than physical labor",
		primarySources: ["Historical studies of women in tech", "Hidden Figures"]
	},
	{
		id: "ai",
		name: "AI / Modern Software Era",
		years: "2000–2025",
		description: "AI, agentic tools, automation in knowledge work",
		context: "Concerns about job displacement, evolving skills, and the meaning of work",
		primarySources: ["H. David Autor's 'Why Are There Still So Many Jobs?'", "Norbert Wiener's The Human Use of Human Beings"]
	}
];

export const jobs: Job[] = [
	// Agrarian Era
	{
		id: "agrarian-1",
		title: "Farmhand - Seasonal Harvest Worker",
		company: "Riverside Plantation",
		location: "Massachusetts Bay Colony",
		type: "Seasonal",
		salary: "Room & Board + Share of Harvest",
		description: "Seeking able-bodied workers for the upcoming harvest season. Work includes planting, tending crops, and gathering the harvest. Must be willing to work from dawn to dusk during peak seasons.",
		requirements: [
			"Physical strength and endurance",
			"Experience with hand tools",
			"Ability to work in all weather conditions",
			"Basic knowledge of crop cycles"
		],
		postedDate: "March 15, 1785",
		era: "agrarian"
	},
	{
		id: "agrarian-2",
		title: "Household Servant",
		company: "Adams Family Estate",
		location: "Braintree, Massachusetts",
		type: "Full-time",
		salary: "Room, Board, and Annual Stipend",
		description: "Respected family seeks reliable household servant. Duties include cooking, cleaning, mending, and assisting with daily household management. Must be of good character and willing to live on premises.",
		requirements: [
			"Experience in household management",
			"Ability to read and write preferred",
			"References required",
			"Commitment to long-term service"
		],
		postedDate: "January 8, 1776",
		era: "agrarian"
	},
	{
		id: "agrarian-3",
		title: "Blacksmith Apprentice",
		company: "Colonial Forge & Ironworks",
		location: "Philadelphia, Pennsylvania",
		type: "Apprenticeship",
		salary: "Training Provided, Small Stipend",
		description: "Master blacksmith seeking apprentice to learn the trade. Seven-year apprenticeship includes training in forging, tool making, and horseshoeing. Opportunity to establish own forge upon completion.",
		requirements: [
			"Age 14-18 preferred",
			"Physical strength",
			"Willingness to learn",
			"Parental consent required"
		],
		postedDate: "May 20, 1790",
		era: "agrarian"
	},
	// Industrial Era
	{
		id: "industrial-1",
		title: "Meatpacking Worker",
		company: "Chicago Stockyards",
		location: "Chicago, Illinois",
		type: "Full-time",
		salary: "$1.50 per day",
		description: "Fast-paced work in meat processing facility. Duties include cutting, packing, and preparing meat products. Long hours in challenging conditions. Piece-rate pay available for experienced workers.",
		requirements: [
			"Ability to work quickly",
			"Physical stamina",
			"No prior experience necessary",
			"Willingness to work 10-12 hour shifts"
		],
		postedDate: "June 3, 1906",
		era: "industrial"
	},
	{
		id: "industrial-2",
		title: "Factory Machine Operator",
		company: "Carnegie Steel Works",
		location: "Pittsburgh, Pennsylvania",
		type: "Full-time",
		salary: "$2.00 per day",
		description: "Operate industrial machinery in steel production facility. Dangerous work requiring attention to detail. Safety training provided. Union membership available.",
		requirements: [
			"Basic mechanical aptitude",
			"Ability to follow safety protocols",
			"Physical strength",
			"Willingness to work rotating shifts"
		],
		postedDate: "March 12, 1890",
		era: "industrial"
	},
	{
		id: "industrial-3",
		title: "Textile Mill Worker",
		company: "Lowell Mill Company",
		location: "Lowell, Massachusetts",
		type: "Full-time",
		salary: "$1.25 per day",
		description: "Operate looms and spinning machines in textile mill. Housing provided in company boarding houses. Preference given to young women. Strict work rules apply.",
		requirements: [
			"Age 15-30 preferred",
			"Good health",
			"Ability to work long hours",
			"Willingness to live in company housing"
		],
		postedDate: "April 7, 1885",
		era: "industrial"
	},
	// Early Automation Era
	{
		id: "automation-1",
		title: "Oil Refinery Technician",
		company: "Texas Oil & Refining Co.",
		location: "Houston, Texas",
		type: "Full-time",
		salary: "$4,200 per year",
		description: "Monitor and maintain automated refining equipment. Work with new industrial control systems. Training provided on automated machinery. Good benefits and job security.",
		requirements: [
			"High school diploma",
			"Mechanical aptitude",
			"Ability to read technical manuals",
			"Willingness to work with new technology"
		],
		postedDate: "August 15, 1955",
		era: "automation"
	},
	{
		id: "automation-2",
		title: "Assembly Line Supervisor",
		company: "General Motors",
		location: "Detroit, Michigan",
		type: "Full-time",
		salary: "$5,500 per year",
		description: "Supervise automated assembly line operations. Manage team of workers adapting to new machinery. Ensure quality control and production targets. Union position with excellent benefits.",
		requirements: [
			"5+ years manufacturing experience",
			"Leadership skills",
			"Understanding of automated systems",
			"High school diploma or equivalent"
		],
		postedDate: "February 22, 1962",
		era: "automation"
	},
	{
		id: "automation-3",
		title: "Machine Tool Operator",
		company: "Boeing Aircraft",
		location: "Seattle, Washington",
		type: "Full-time",
		salary: "$4,800 per year",
		description: "Operate computer-controlled machine tools for aircraft parts manufacturing. Training provided on new automated equipment. Clean, modern facility. Opportunity for advancement.",
		requirements: [
			"Mechanical skills",
			"Ability to read blueprints",
			"Attention to detail",
			"Willingness to learn new technology"
		],
		postedDate: "November 10, 1968",
		era: "automation"
	},
	// Digital Computing Era
	{
		id: "digital-1",
		title: "Computer Programmer",
		company: "IBM",
		location: "Armonk, New York",
		type: "Full-time",
		salary: "$12,000 per year",
		description: "Develop software applications using FORTRAN and COBOL. Work with mainframe computers. Collaborative team environment. Women encouraged to apply. Training provided.",
		requirements: [
			"Bachelor's degree in mathematics or related field",
			"Logical thinking skills",
			"Attention to detail",
			"Willingness to learn programming languages"
		],
		postedDate: "May 5, 1975",
		era: "digital"
	},
	{
		id: "digital-2",
		title: "Data Entry Operator",
		company: "AT&T",
		location: "New York, New York",
		type: "Full-time",
		salary: "$8,500 per year",
		description: "Enter data into computer systems. Transition from manual record-keeping to digital systems. Good typing skills essential. Opportunity to learn programming.",
		requirements: [
			"Typing speed 60+ WPM",
			"High school diploma",
			"Accuracy and attention to detail",
			"Previous telephone operator experience preferred"
		],
		postedDate: "September 18, 1980",
		era: "digital"
	},
	{
		id: "digital-3",
		title: "Software Engineer",
		company: "Microsoft Corporation",
		location: "Redmond, Washington",
		type: "Full-time",
		salary: "$35,000 per year",
		description: "Develop software for personal computers. Work with C and assembly language. Fast-paced startup environment. Stock options available. Help shape the future of computing.",
		requirements: [
			"Computer science degree or equivalent experience",
			"Proficiency in C programming",
			"Problem-solving skills",
			"Passion for technology"
		],
		postedDate: "March 12, 1990",
		era: "digital"
	},
	// AI Era
	{
		id: "ai-1",
		title: "Machine Learning Engineer",
		company: "Google",
		location: "Mountain View, California",
		type: "Full-time",
		salary: "$180,000 - $250,000",
		description: "Build and deploy machine learning models at scale. Work with TensorFlow and large datasets. Collaborate with cross-functional teams. Help develop next-generation AI systems.",
		requirements: [
			"Master's degree in CS, ML, or related field",
			"Experience with Python, TensorFlow/PyTorch",
			"Strong mathematical background",
			"Publications or open-source contributions preferred"
		],
		postedDate: "January 15, 2020",
		era: "ai"
	},
	{
		id: "ai-2",
		title: "AI Prompt Engineer",
		company: "OpenAI",
		location: "San Francisco, California",
		type: "Full-time",
		salary: "$150,000 - $200,000",
		description: "Design and optimize prompts for large language models. Test and improve AI system performance. Work at the cutting edge of AI development. Remote work available.",
		requirements: [
			"Experience with LLMs (GPT, Claude, etc.)",
			"Strong writing and communication skills",
			"Understanding of AI/ML fundamentals",
			"Portfolio of prompt engineering work"
		],
		postedDate: "March 8, 2024",
		era: "ai"
	},
	{
		id: "ai-3",
		title: "AI Ethics Researcher",
		company: "Stanford HAI",
		location: "Stanford, California",
		type: "Full-time",
		salary: "$120,000 - $160,000",
		description: "Research the societal impacts of AI systems. Study job displacement, bias, and ethical implications. Publish research papers. Help shape AI policy and regulation.",
		requirements: [
			"PhD in relevant field",
			"Research experience in AI ethics",
			"Strong publication record",
			"Interdisciplinary background preferred"
		],
		postedDate: "November 20, 2023",
		era: "ai"
	},
	{
		id: "ai-4",
		title: "AI Product Manager",
		company: "Anthropic",
		location: "San Francisco, California",
		type: "Full-time",
		salary: "$160,000 - $220,000",
		description: "Lead product development for AI-powered tools. Define product strategy and roadmap. Work with engineering and research teams. Shape the future of human-AI collaboration.",
		requirements: [
			"5+ years product management experience",
			"Technical background preferred",
			"Experience with AI/ML products",
			"Strong analytical and communication skills"
		],
		postedDate: "February 14, 2025",
		era: "ai"
	}
];

export function getJobsByEra(eraId: string): Job[] {
	return jobs.filter(job => job.era === eraId);
}

export function getEraById(eraId: string): Era | undefined {
	return eras.find(era => era.id === eraId);
}

