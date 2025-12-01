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
}

export const feedPosts: FeedPost[] = [
	// Agrarian Era - Based on Crèvecœur and Adams letters
	{
		id: "agrarian-1",
		author: "John Adams",
		authorRole: "Farmer & Statesman, Braintree",
		content: "I rise with the sun and work until it sets. Today we plowed the north field - hard, honest labor that makes a man strong. The soil here in Massachusetts is rocky, but with patience and toil, it yields. My hands are calloused, my back aches, but there is dignity in this work. We are not servants to any lord - we work for ourselves, our families, our community. This is what makes America different.",
		timestamp: "March 15, 1776",
		era: "agrarian",
		likes: 12,
		comments: 3,
		reactions: ["🌾", "👏"]
	},
	{
		id: "agrarian-2",
		author: "Abigail Adams",
		authorRole: "Household Manager & Farm Wife",
		content: "The work of a farm wife never ends. This morning I churned butter, baked bread, mended John's work clothes, and managed the household accounts. Our servant girl helps, but I must teach her everything - how to preserve vegetables for winter, how to make soap from ashes, how to spin wool into yarn. These skills keep our family fed and clothed. The men work the fields, but without our labor in the home, the farm would fail. We are partners in this enterprise.",
		timestamp: "April 2, 1776",
		era: "agrarian",
		likes: 8,
		comments: 2,
		reactions: ["💪", "🏠"]
	},
	{
		id: "agrarian-3",
		author: "James Crèvecœur",
		authorRole: "American Farmer & Writer",
		content: "From Crèvecœur's Letters: 'Here we have no princes, for whom we toil, starve, and bleed. We are the most perfect society now existing in the world. Here man is free as he ought to be; nor is this pleasing equality so transitory as many others are.' The farmer here works for himself. He owns his land, reaps his own harvest, and answers to no master. This is the American way - honest labor, honest reward.",
		timestamp: "May 20, 1782",
		era: "agrarian",
		likes: 15,
		comments: 5,
		reactions: ["🇺🇸", "🌾"]
	},
	{
		id: "agrarian-4",
		author: "Thomas, Farmhand",
		authorRole: "Seasonal Laborer",
		content: "Came to work the harvest season. The master provides a bed in the barn and meals with the family. Hard work from dawn to dusk - cutting wheat with a scythe, threshing, storing grain. My hands are blistered, my muscles ache, but I'll earn enough to get through winter. Some men work year-round, but I move from farm to farm with the seasons. It's a hard life, but it's honest.",
		timestamp: "August 10, 1780",
		era: "agrarian",
		likes: 6,
		comments: 1,
		reactions: ["🌾", "💪"]
	},
	{
		id: "agrarian-5",
		author: "Abigail Adams",
		authorRole: "Wife & Mother",
		content: "John writes from Philadelphia about independence, but here on the farm, independence means something different. It means we can feed ourselves, clothe ourselves, provide for our children without depending on anyone. The work is constant - planting, weeding, harvesting, preserving, spinning, sewing, cooking, cleaning. But this self-sufficiency is our freedom. No one tells us what to grow or how to live.",
		timestamp: "July 4, 1776",
		era: "agrarian",
		likes: 20,
		comments: 7,
		reactions: ["🇺🇸", "💪", "🏠"]
	},
	// Industrial Era - Based on The Jungle and 1906 House Report
	{
		id: "industrial-1",
		author: "Mary Harris 'Mother' Jones",
		authorRole: "Labor Organizer",
		content: "I've seen children working 12-hour shifts in the mills. I've seen men lose fingers, arms, their lives in the factories. The owners call us 'hands' - as if we're not human beings with families, dreams, dignity. We are not machines! We demand fair wages, safe conditions, and respect. The Haymarket affair showed us - when workers unite, we have power. Join the union!",
		timestamp: "May 1, 1886",
		era: "industrial",
		likes: 234,
		comments: 45,
		reactions: ["✊", "🔥"]
	},
	{
		id: "industrial-2",
		author: "Jurgis Rudkus",
		authorRole: "Stockyard Worker, Packingtown",
		content: "From The Jungle: The work is like a nightmare. We stand in blood up to our ankles, cutting meat hour after hour. The foreman watches every move - work too slow, you're fired. Work too fast and make a mistake, you're fired. The stench is unbearable, the cold numbing. But we need the wages - $1.50 a day to feed the family. There are always ten men waiting to take your place if you complain.",
		timestamp: "June 10, 1906",
		era: "industrial",
		likes: 89,
		comments: 12,
		reactions: ["😢", "💪"]
	},
	{
		id: "industrial-3",
		author: "Sarah O'Brien",
		authorRole: "Textile Mill Worker, Lowell",
		content: "The looms never stop. The noise is deafening - you can't hear yourself think. We work from 5 AM to 7 PM, six days a week. The company boarding house has strict rules: no men visitors, lights out at 10, church on Sunday. But I earn $1.25 a day - more than I could ever make on the farm. I'm saving to send money home. The work is hard, but here I have independence.",
		timestamp: "August 15, 1890",
		era: "industrial",
		likes: 67,
		comments: 8,
		reactions: ["🏭", "👷"]
	},
	{
		id: "industrial-4",
		author: "1906 House Report",
		authorRole: "Congressional Investigation",
		content: "From the 1906 U.S. House Report on Chicago Stockyards: Workers report standing in blood and offal up to their ankles. The speed of the disassembly line has increased dramatically - men must work faster or lose their jobs. Accidents are common: severed fingers, crushed hands, falls into rendering vats. Children as young as 14 work alongside adults. The packing companies deny all claims of unsanitary conditions.",
		timestamp: "December 15, 1906",
		era: "industrial",
		likes: 156,
		comments: 34,
		reactions: ["📋", "😡"]
	},
	{
		id: "industrial-5",
		author: "Ona Lukoszaite",
		authorRole: "Packinghouse Worker",
		content: "We came from Lithuania thinking America was the land of opportunity. Instead we found Packingtown - the stench, the filth, the exploitation. My husband Jurgis works the killing floor, I work trimming meat. We both come home exhausted, covered in blood. Our children play in the streets because we can't afford proper housing. But what can we do? We don't speak English well, we have no money to leave. This is our life now.",
		timestamp: "March 20, 1906",
		era: "industrial",
		likes: 78,
		comments: 15,
		reactions: ["😢", "💔"]
	},
	{
		id: "industrial-6",
		author: "Eugene Debs",
		authorRole: "Labor Leader",
		content: "The Pullman Strike showed the world that workers will not be crushed. When the company cut wages but kept rents high, we organized. When they fired union members, we struck. The government sent troops, but the spirit of labor solidarity cannot be broken. Every strike teaches us - we are stronger together. The age of industrial serfdom must end!",
		timestamp: "July 4, 1894",
		era: "industrial",
		likes: 312,
		comments: 67,
		reactions: ["✊", "🔥", "🇺🇸"]
	},
	// Automation Era - Based on oral histories and BLS reports
	{
		id: "automation-1",
		author: "Robert Johnson",
		authorRole: "Oil Refinery Technician, Texas",
		content: "From oral history interview: These new automated control systems are incredible! My father worked the oil fields in the 1920s - backbreaking manual labor, dangerous work. Now I sit in a control room monitoring screens. The machines do the heavy lifting, the dangerous work. I make $4,200 a year - more than my father ever dreamed. But I had to learn new skills. The old-timers who couldn't adapt... they're gone.",
		timestamp: "September 5, 1958",
		era: "automation",
		likes: 45,
		comments: 7,
		reactions: ["🤖", "👍"]
	},
	{
		id: "automation-2",
		author: "Margaret Chen",
		authorRole: "Assembly Line Supervisor, Detroit",
		content: "The Bureau of Labor Statistics says automation is creating as many jobs as it's eliminating. I see it firsthand. We installed robotic welders - replaced 20 manual welders. But now we need technicians to maintain them, programmers to optimize them, supervisors to manage the new workflow. I had to go back to school, learn about these machines. The workers who adapt thrive. Those who don't... it's hard.",
		timestamp: "March 12, 1965",
		era: "automation",
		likes: 78,
		comments: 15,
		reactions: ["⚙️", "💡"]
	},
	{
		id: "automation-3",
		author: "Frank Williams",
		authorRole: "Machine Operator, Boeing",
		content: "I used to operate a manual lathe - turning metal by hand, measuring with calipers. Now I program a computer-controlled machine. The pay jumped from $3,800 to $4,800 a year. The work is safer, cleaner. But I watch the older guys struggle. Some can't learn the new systems. They get transferred to maintenance, or they take early retirement. Progress is great, but what about the people left behind?",
		timestamp: "November 20, 1969",
		era: "automation",
		likes: 92,
		comments: 23,
		reactions: ["🤔", "💭"]
	},
	{
		id: "automation-4",
		author: "BLS Bulletin 1964",
		authorRole: "Bureau of Labor Statistics",
		content: "BLS Report: 'The Impact of Automation on Employment': Our study shows automation is not eliminating jobs wholesale - it's transforming them. Workers are moving from manual labor to machine operation, from operation to maintenance, from maintenance to programming. The key is retraining. Companies investing in worker education see higher productivity and lower turnover. The future belongs to adaptable workers.",
		timestamp: "January 15, 1964",
		era: "automation",
		likes: 34,
		comments: 8,
		reactions: ["📊", "💡"]
	},
	{
		id: "automation-5",
		author: "James Martinez",
		authorRole: "Former Farm Worker, Now Factory Worker",
		content: "Left the farm in '55, came to the city for factory work. Started on the assembly line - repetitive, mind-numbing. But then they automated my station. I thought I'd be fired. Instead, they trained me to maintain the machines. Now I'm a technician making twice what I did before. The machines didn't replace me - they gave me a better job. But I know I'm lucky. Not everyone gets that chance.",
		timestamp: "May 8, 1967",
		era: "automation",
		likes: 56,
		comments: 12,
		reactions: ["👍", "💪"]
	},
	// Digital Era - Based on Hidden Figures and women in tech studies
	{
		id: "digital-1",
		author: "Grace Hopper",
		authorRole: "Rear Admiral, Computer Scientist",
		content: "I've been programming since the 1940s - back when 'computers' were people, mostly women, doing calculations by hand. Now we have machines that can do millions of calculations per second. But programming isn't about the machine - it's about solving problems, thinking logically, breaking down complex tasks. Women excel at this work. We've been doing it all along, just with different tools. The future of computing belongs to those who can think, not just those who can lift heavy equipment.",
		timestamp: "January 15, 1975",
		era: "digital",
		likes: 156,
		comments: 34,
		reactions: ["💻", "👩‍💻", "🚀"]
	},
	{
		id: "digital-2",
		author: "Katherine Johnson",
		authorRole: "NASA Mathematician & Computer",
		content: "From Hidden Figures: They said women couldn't do this work. They said we weren't smart enough, that math was for men. But here we are - Dorothy Vaughan, Mary Jackson, and I - calculating trajectories for space missions. We were 'computers' before machines took that name. The electronic computers are powerful, but they need us to program them, to verify their calculations, to think through the problems. The real power is in the human mind.",
		timestamp: "July 20, 1969",
		era: "digital",
		likes: 289,
		comments: 67,
		reactions: ["🌙", "⭐", "👏"]
	},
	{
		id: "digital-3",
		author: "Dorothy Vaughan",
		authorRole: "NASA Supervisor & Programmer",
		content: "I started as a 'computer' - doing calculations by hand. When NASA got the IBM 7090, I taught myself FORTRAN. They were going to replace us with machines, but I showed them - we could program the machines. I became the first Black supervisor at NASA. Now I'm training other women to code. The machines don't replace us - they amplify our abilities. But you have to adapt, learn new skills, or you'll be left behind.",
		timestamp: "December 1, 1961",
		era: "digital",
		likes: 198,
		comments: 45,
		reactions: ["💪", "👏", "🚀"]
	},
	{
		id: "digital-4",
		author: "Susan, Former Telephone Operator",
		authorRole: "Now: Computer Programmer",
		content: "I was a telephone operator for 10 years - connecting calls, routing messages. When AT&T started automating, I thought I'd lose my job. Instead, they trained us to program the switching systems. Now I write code for telephone networks. The skills transferred - attention to detail, logical thinking, problem-solving. Many of my colleagues couldn't make the transition, but those of us who did found better-paying, more interesting work. Technology doesn't have to eliminate jobs - it can transform them.",
		timestamp: "March 20, 1980",
		era: "digital",
		likes: 87,
		comments: 18,
		reactions: ["📞", "💻", "💡"]
	},
	{
		id: "digital-5",
		author: "Bill Gates",
		authorRole: "Software Developer & Entrepreneur",
		content: "The personal computer revolution is here! We're putting computing power in everyone's hands - not just big corporations, but individuals, small businesses, students. Software is the key. If you can code, you can build anything. The opportunities are endless. But you have to learn. The jobs of the future won't be about physical labor - they'll be about knowledge, creativity, problem-solving. Code is the new literacy.",
		timestamp: "March 15, 1990",
		era: "digital",
		likes: 445,
		comments: 89,
		reactions: ["💻", "🔥", "💰"]
	},
	{
		id: "digital-6",
		author: "Dr. Anita Borg",
		authorRole: "Computer Scientist & Women's Advocate",
		content: "Women built the foundation of computing - we were the first programmers, the first 'computers,' the first software engineers. But as the field grew more prestigious and lucrative, men pushed us out. We need to reclaim our place. Computing needs diverse perspectives. The problems we're solving affect everyone - we need everyone at the table. Let's build a tech industry that reflects the world it serves.",
		timestamp: "June 12, 1992",
		era: "digital",
		likes: 234,
		comments: 56,
		reactions: ["👩‍💻", "💪", "🌍"]
	},
	// AI Era - Based on Autor and Wiener
	{
		id: "ai-1",
		author: "Dr. Sarah Chen",
		authorRole: "AI Researcher, Stanford",
		content: "Just trained a model that can write code better than I can. Feeling equal parts amazed and terrified. As H. David Autor asks: 'Why are there still so many jobs?' History shows automation creates new jobs even as it eliminates old ones. But this time feels different - AI is automating cognitive work, not just manual labor. We need to think carefully about what this means for the future of work.",
		timestamp: "March 10, 2024",
		era: "ai",
		likes: 1234,
		comments: 234,
		reactions: ["🤖", "😱", "💭"]
	},
	{
		id: "ai-2",
		author: "Marcus Rodriguez",
		authorRole: "Prompt Engineer",
		content: "My job didn't exist 2 years ago. Now I'm making $200k teaching AI how to communicate effectively. As Norbert Wiener wrote in 'The Human Use of Human Beings' - the question isn't whether machines will replace us, but how we'll use them. The future of work isn't about replacing humans - it's about humans and AI working together. The best prompt engineers are creative, empathetic, and curious - skills AI doesn't have.",
		timestamp: "February 14, 2025",
		era: "ai",
		likes: 892,
		comments: 156,
		reactions: ["💡", "🚀", "💰"]
	},
	{
		id: "ai-3",
		author: "Dr. Emily Watson",
		authorRole: "AI Ethics Researcher, MIT",
		content: "We're automating knowledge work now - lawyers, doctors, writers, coders. AI can do parts of all these jobs. But Autor's research shows something interesting: when technology automates routine tasks, it often increases demand for non-routine work - creative problem-solving, human interaction, judgment. We need to redefine work, not just replace it. The future is collaborative, not competitive.",
		timestamp: "January 8, 2025",
		era: "ai",
		likes: 567,
		comments: 98,
		reactions: ["🤔", "💭", "🌍"]
	},
	{
		id: "ai-4",
		author: "Alex Kim",
		authorRole: "ML Engineer",
		content: "Spent 3 hours debugging why GPT-4 gave me a wrong answer. Turns out my prompt was ambiguous. The AI is powerful, but it's not magic. Understanding how to work WITH these systems is the real skill. Prompt engineering is the new programming. But as Wiener warned - we must ensure these tools serve human purposes, not replace human judgment.",
		timestamp: "March 1, 2025",
		era: "ai",
		likes: 345,
		comments: 45,
		reactions: ["💻", "😅", "💡"]
	},
	{
		id: "ai-5",
		author: "Dr. H. David Autor",
		authorRole: "Labor Economist, MIT",
		content: "From 'Why Are There Still So Many Jobs?': The history of automation shows a paradox - as machines replace human labor, new jobs emerge. Why? Because automation increases productivity, lowers costs, creates new industries. But AI is different - it automates cognitive tasks, not just manual ones. The question isn't whether jobs will exist, but what skills they'll require. Adaptability, creativity, human connection - these remain uniquely human.",
		timestamp: "May 15, 2023",
		era: "ai",
		likes: 678,
		comments: 123,
		reactions: ["📊", "💭", "🎓"]
	},
	{
		id: "ai-6",
		author: "Jordan, Former Copywriter",
		authorRole: "Now: AI Content Strategist",
		content: "I thought AI would replace me. Instead, it amplified my work. I used to write 5 articles a week. Now I write 20 - AI helps with research, drafts, editing. I focus on strategy, creativity, human connection. My income doubled. But I had to learn new skills - prompt engineering, AI tooling, workflow optimization. The writers who adapted are thriving. Those who didn't... they're struggling. History repeats itself.",
		timestamp: "December 10, 2024",
		era: "ai",
		likes: 456,
		comments: 78,
		reactions: ["✍️", "💡", "💰"]
	},
	{
		id: "ai-7",
		author: "Dr. Norbert Wiener",
		authorRole: "Cybernetics Pioneer (quoted)",
		content: "From 'The Human Use of Human Beings' (1950): 'The machine... is the modern counterpart of the Golem of the Rabbi of Prague.' We create powerful tools, but we must ensure they serve human purposes. The danger isn't that machines will become too intelligent - it's that we'll become too dependent, losing our own capacity for judgment and creativity. Technology should amplify human abilities, not replace human values.",
		timestamp: "1950 (quoted 2024)",
		era: "ai",
		likes: 789,
		comments: 145,
		reactions: ["📚", "💭", "🎯"]
	}
];

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

export function getFeedPostsByEra(eraId: string): FeedPost[] {
	return feedPosts
		.filter(post => post.era === eraId)
		.sort((a, b) => {
			const dateA = parseFeedDate(a.timestamp);
			const dateB = parseFeedDate(b.timestamp);
			return dateA.getTime() - dateB.getTime();
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
		automation: {
			primary: "#1E90FF",
			secondary: "#87CEEB",
			accent: "#FFD700",
			bg: "#F0F8FF"
		},
		digital: {
			primary: "#00CED1",
			secondary: "#20B2AA",
			accent: "#FF1493",
			bg: "#E0FFFF"
		},
		ai: {
			primary: "#0a66c2",
			secondary: "#004182",
			accent: "#00D4FF",
			bg: "#F5F5F5"
		}
	};
	return themes[eraId] || themes.ai;
}

