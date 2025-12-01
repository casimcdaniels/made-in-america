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
		years: "1600s–1820",
		description: "Pre-industrial farming in rural America",
		context: "Daily life centered on planting, harvesting, household labor, and local community responsibilities",
		primarySources: ["Crèvecœur's Letters from an American Farmer", "John & Abigail Adams letters"]
	},
	{
		id: "market-revolution",
		name: "Market Revolution Era",
		years: "1820–1880",
		description: "Transition from artisan to factory work, rise of wage labor, and early industrialization",
		context: "The Market Revolution transforms work: artisans become wage workers, factories replace workshops, and the distinction between free and slave labor intensifies",
		primarySources: ["Lowell Mill Girls letters and writings", "Frederick Douglass's narratives on labor", "Alexis de Tocqueville's Democracy in America", "Early labor newspapers and organizing documents"]
	},
	{
		id: "industrial",
		name: "Industrial Era",
		years: "1880–1970",
		description: "Rapid industrialization, urban factories, meatpacking, labor unrest, and the rise of automation",
		context: "Building on the First Industrial Revolution's foundation, the Second Industrial Revolution (1880-1914) brings steel, electricity, and mass production. Labor movements emerge: Haymarket Strike (1886), Homestead Strike (1892), Pullman Strike (1894). The mature industrial era (1914-1970) sees automation, assembly lines, and early computing transform manufacturing, while unions gain power and workers adapt to new technologies.",
		primarySources: ["Upton Sinclair's The Jungle", "1906 U.S. House Report on Chicago Stockyards", "Oral histories of Texas oil technicians", "Bureau of Labor Statistics bulletins on automation"]
	},
	{
		id: "post-industrial",
		name: "Post-Industrial Era",
		years: "1970–2000",
		description: "Transition to service economy, rise of computing, and early digital technologies",
		context: "Workers transitioning from manufacturing to service and technology sectors. The rise of personal computing and software development transforms work",
		primarySources: ["Historical studies of women in tech", "Hidden Figures", "Bureau of Labor Statistics on service sector growth"]
	},
	{
		id: "digital",
		name: "Digital Era",
		years: "2000–present",
		description: "Robotics, AI, and automation replacing human work",
		context: "Robotics, AI, and automation replacing human work across industries",
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
		description: "Seeking able-bodied FREE MEN for the upcoming harvest season. Free labor preferred over slaves for seasonal work - slaves are too valuable to risk in dangerous harvest work, and free men work harder when they share in the profits. Daily duties: Rise before dawn (4 AM). Cut wheat with scythe for 10-12 hours. Your back will ache, your hands will blister and bleed. Carry 80-pound sacks of grain to the barn. Work in blazing sun, rain, or cold. No breaks except to eat. Sleep in barn loft with other workers. At harvest end, receive small share of crop - if harvest is poor, you get nothing. Must provide proof of free status.",
		requirements: [
			"Free white men only - slaves not suitable for this work",
			"Physical strength - must lift 80+ pounds repeatedly",
			"Experience with scythe and hand tools",
			"Ability to work 12+ hour days in all weather",
			"Proof of free status required",
			"Must work entire harvest season (3-4 months)",
			"Acceptance of dangerous conditions - accidents common"
		],
		postedDate: "March 15, 1785",
		era: "agrarian",
		filters: {
			gender: 'male',
			race: 'white',
			minAge: 16,
			maxAge: 50,
			education: 'none',
			experience: 'some',
			maritalStatus: 'any'
		}
	},
	{
		id: "agrarian-2",
		title: "Household Servant - Female Only",
		company: "Adams Family Estate",
		location: "Braintree, Massachusetts",
		type: "Full-time",
		salary: "Room, Board, and Annual Stipend of £8",
		description: "Respected family seeks reliable FEMALE household servant. Free white women preferred - slaves are property and cannot be trusted with household management, and free women work better when paid. Daily duties: Rise at 5 AM. Light fires, prepare breakfast for family. Wash dishes, scrub floors on hands and knees. Launder all clothing by hand - boiling water, scrubbing, hanging to dry. Cook three meals daily over open fire. Mend clothing, spin wool, churn butter. Tend to children, empty chamber pots. Work until 9 PM. One half-day off per week for church. Must be white, Protestant, of good character. No Catholics, Jews, or persons of color. Must live on premises, follow all household rules without question.",
		requirements: [
			"Women only - no men",
			"White, Protestant background required - no Catholics or Jews",
			"Experience in all household tasks",
			"Ability to read and write preferred",
			"References from previous employer required",
			"Commitment to long-term service (minimum 3 years)",
			"Must be unmarried and without children",
			"Must work 16-hour days, 6.5 days per week"
		],
		postedDate: "January 8, 1776",
		era: "agrarian",
		filters: {
			gender: 'female',
			race: 'white',
			minAge: 16,
			maxAge: 35,
			education: 'elementary',
			experience: 'some',
			maritalStatus: 'single'
		}
	},
	{
		id: "agrarian-3",
		title: "Blacksmith Apprentice - Boys Only",
		company: "Colonial Forge & Ironworks",
		location: "Philadelphia, Pennsylvania",
		type: "Apprenticeship",
		salary: "Training Provided, Room & Board, Small Stipend",
		description: "Master blacksmith seeking MALE apprentice to learn the trade. Free white boys only - slaves cannot be apprenticed to skilled trades, and this requires education and freedom to practice independently. Seven-year indenture contract. Daily duties: Rise at 5 AM. Stoke forge fire, heat iron to white-hot. Swing 8-pound hammer for hours - your arms will shake with exhaustion. Master will beat you if work is poor. Learn to shape horseshoes, tools, hardware. Sweep shop, clean tools, run errands. Eat with master's family, sleep in attic. First 2 years: only observe and do menial tasks. Years 3-5: assist with simple work. Years 6-7: learn advanced techniques. Upon completion, receive tools and freedom to practice. No girls or women - this is men's work requiring physical strength.",
		requirements: [
			"Boys only - age 12-16",
			"Must be free white male - slaves cannot be apprenticed",
			"Physical strength required - must swing heavy hammers",
			"Parental consent and indenture papers required",
			"Must commit to full seven-year term - cannot leave",
			"Must accept master's authority and discipline",
			"No girls or women accepted"
		],
		postedDate: "May 20, 1790",
		era: "agrarian",
		filters: {
			gender: 'male',
			race: 'white',
			minAge: 12,
			maxAge: 16,
			education: 'elementary',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	{
		id: "agrarian-4",
		title: "Indentured Servant - 7 Year Term",
		company: "Tobacco Plantation",
		location: "Virginia Colony",
		type: "Indenture",
		salary: "Room, Board, Freedom After Term",
		description: "Seeking indentured servants for tobacco cultivation. Indentured servants preferred over slaves initially - cheaper to purchase, and if they die, no great loss. But slaves are now preferred for lifetime labor. This is for those desperate enough to sign away 7 years. Passage to America provided if you survive the voyage (many don't). Daily duties: Rise before dawn. Work tobacco fields from sunup to sundown. Plant seedlings by hand, bent over all day. Your back will break. Weed fields in blazing heat, no shade. Harvest leaves, hang to dry in barns so hot you can barely breathe. Process tobacco - your hands will be stained black, your lungs filled with dust. Overseer watches constantly - slow down and you're whipped. Food is cornmeal and salt pork - barely enough to survive. Sleep in crowded, filthy barracks. Many die before completing term. If you survive 7 years, receive 'freedom dues' - usually just old clothes, maybe a small plot of poor land. Must be able-bodied, age 16-25.",
		requirements: [
			"Age 16-25",
			"Able-bodied men and women",
			"Must sign indenture contract - cannot break it",
			"Willingness to work 14+ hour days, 6 days per week",
			"Acceptance of master's authority - whipping is legal",
			"Commitment to full seven-year term - running away is a crime",
			"Must survive dangerous ocean voyage"
		],
		postedDate: "April 10, 1770",
		era: "agrarian",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 16,
			maxAge: 25,
			education: 'none',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	{
		id: "agrarian-5",
		title: "Slaves Wanted - Field Hands",
		company: "Cotton Plantation",
		location: "South Carolina",
		type: "Purchase",
		salary: "Room, Board, Clothing (Property of Owner)",
		description: "Seeking NEGRO SLAVES for cotton cultivation. Slaves preferred over free labor - they work for life, can't quit, and their children are also property. We want strong, healthy slaves, preferably young. Daily duties: Rise before dawn (4 AM). Work cotton fields from sunup to sundown, 6 days per week. Pick cotton by hand - your fingers will bleed from sharp bolls. Work in blazing sun, no breaks. Overseer watches constantly - slow down and you're whipped. Work until dark, then tend your own garden plot (if allowed) to supplement meager rations. Food is cornmeal, salt pork, molasses - barely enough to survive. Sleep in crowded slave quarters - one room for entire family. Your children can be sold away at any time. You are property - not a person, but chattel. Can be bought, sold, whipped, or killed at master's will. No rights, no freedom, no hope. This is not a job - it is bondage. We prefer slaves over free labor because you cannot leave, cannot demand better conditions, and your labor is free for life.",
		requirements: [
			"Negro slaves only - must be enslaved",
			"Strong, healthy, preferably age 18-30",
			"Must be able to work 14+ hour days, 6 days per week",
			"Acceptance that you are property, not a person",
			"Your children will also be slaves",
			"Can be sold, whipped, or killed at owner's discretion",
			"No rights, no freedom, no pay",
			"Slaves preferred - free labor can quit, slaves cannot"
		],
		postedDate: "June 15, 1800",
		era: "agrarian",
		filters: {
			gender: 'any',
			race: 'black',
			minAge: 18,
			maxAge: 30,
			education: 'none',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	// Market Revolution Era (1820-1880)
	{
		id: "market-revolution-1",
		title: "Textile Mill Worker - Women Preferred",
		company: "Lowell Manufacturing Company",
		location: "Lowell, Massachusetts",
		type: "Full-time",
		salary: "$3-5 per week (Room & Board Deducted)",
		description: "Seeking YOUNG WOMEN for textile mill work. This is 'respectable' work for women - better than domestic service, but still women's work. We prefer young, single women from New England farms. They're more docile, more reliable than men. Daily duties: Work 12-14 hour shifts, 6 days per week. Operate power looms - the noise is deafening, you'll go half-deaf. Stand all day, your feet will swell. Watch threads constantly - one break and the whole machine stops. You'll be fined for mistakes. The air is filled with cotton dust - you'll cough constantly, your lungs will be damaged. Work in hot, humid conditions - windows stay closed to maintain humidity. Company boarding house has strict rules: curfew at 10 PM, church on Sunday mandatory, no men visitors, no alcohol. Your wages are docked for room and board - you'll save little. But it's better than farm work, and you have independence. Many women work a few years, save what they can, then return home to marry. We prefer women because they're cheaper, more compliant, and we can control their lives through the boarding house system. Men are too independent, too likely to organize.",
		requirements: [
			"Women only - men need not apply",
			"Age 15-30, preferably 18-25",
			"Single women preferred - married women expected to stay home",
			"Must be from 'respectable' New England families",
			"Willingness to live in company boarding house",
			"Acceptance of strict moral codes and curfews",
			"Physical stamina - must stand 12-14 hours",
			"No prior experience necessary - we'll train you",
			"Must attend church on Sundays",
			"Willingness to work 6 days per week"
		],
		postedDate: "March 15, 1840",
		era: "market-revolution",
		filters: {
			gender: 'female',
			race: 'white',
			minAge: 15,
			maxAge: 30,
			education: 'elementary',
			experience: 'none',
			maritalStatus: 'single'
		}
	},
	{
		id: "market-revolution-2",
		title: "Journeyman Shoemaker - Apprenticeship Required",
		company: "Artisan Workshop",
		location: "Boston, Massachusetts",
		type: "Skilled Trade",
		salary: "$8-12 per week (Piece Rate)",
		description: "Seeking experienced journeyman shoemaker. The trade is changing - factories are replacing workshops, but skilled craftsmen still needed for quality work. This is MEN'S WORK - requires strength and skill. Daily duties: Cut leather by hand - your hands will be calloused and stained. Stitch soles to uppers - precise work, your back will ache from bending. Fit shoes to customers - measure feet, make lasts. Work 10-12 hour days, 6 days per week. The master owns the shop, you're a journeyman - better than an apprentice, but still dependent. You get paid by the piece - work fast or starve. Competition from factory-made shoes is driving down prices - you must work harder for less. Many shoemakers are organizing - joining unions, striking for better wages. But the master doesn't like that. If you join a union, you'll be blacklisted. Free white men only - this is skilled work requiring education and freedom. Slaves cannot be apprenticed to skilled trades. You must have completed apprenticeship - 7 years of training. The old ways are dying - factories will replace us all, but for now, skilled craftsmen are still needed.",
		requirements: [
			"Men only - this is men's work",
			"Free white men only - slaves cannot be apprenticed",
			"Completed apprenticeship required - 7 years training",
			"Age 21-40, experienced journeymen",
			"Physical strength and manual dexterity",
			"Ability to work 10-12 hour days, 6 days per week",
			"Willingness to work piece-rate - pay depends on speed",
			"No union membership - union members will be blacklisted",
			"Must provide own tools",
			"Acceptance that factories may replace this work"
		],
		postedDate: "August 20, 1850",
		era: "market-revolution",
		filters: {
			gender: 'male',
			race: 'white',
			minAge: 21,
			maxAge: 40,
			education: 'elementary',
			experience: 'experienced',
			maritalStatus: 'any'
		}
	},
	{
		id: "market-revolution-3",
		title: "Slave - Skilled Craftsman",
		company: "Urban Workshop",
		location: "Richmond, Virginia",
		type: "Enslaved Labor",
		salary: "Room, Board, Clothing (Owner Keeps Wages)",
		description: "Seeking skilled NEGRO SLAVE for hire-out work. This slave will be hired to work in a workshop, but wages go to owner, not slave. Skilled slaves are valuable - they earn more for the owner. But they're also dangerous - skilled slaves have more freedom, more contact with free workers, more opportunity to run away. Daily duties: Work as skilled craftsman - carpentry, blacksmithing, or similar. Work 10-12 hour days, 6 days per week. Your owner receives your wages - you get nothing but room and board. You may be allowed to keep small portion if you work extra, but that's at owner's discretion. You have more freedom than field hands - can move around city, interact with free workers. But you're still property. Your owner can sell you at any time, separate you from family. If you run away, you'll be hunted, whipped, maybe killed. Skilled slaves are in high demand - owners can hire them out for good wages. But you're still a slave - not free, not paid, not human in the eyes of the law. Free workers don't like competing with slave labor - it drives down wages. But owners prefer slaves - they're cheaper, can't quit, and wages go to owner.",
		requirements: [
			"Negro slaves only - must be enslaved",
			"Skilled craftsman - carpentry, blacksmithing, or similar",
			"Age 20-35, strong and healthy",
			"Must be 'trustworthy' - less likely to run away",
			"Owner must be willing to hire out",
			"Acceptance that wages go to owner, not slave",
			"Must work 10-12 hour days, 6 days per week",
			"Can be sold, separated from family at any time",
			"No rights, no freedom, no pay",
			"Slave labor preferred - cheaper than free workers"
		],
		postedDate: "May 10, 1855",
		era: "market-revolution",
		filters: {
			gender: 'male',
			race: 'black',
			minAge: 20,
			maxAge: 35,
			education: 'none',
			experience: 'experienced',
			maritalStatus: 'any'
		}
	},
	{
		id: "market-revolution-4",
		title: "Domestic Servant - Irish Women Preferred",
		company: "Private Household",
		location: "New York City, New York",
		type: "Live-in Service",
		salary: "$2-4 per month (Room & Board Included)",
		description: "Seeking domestic servant for wealthy household. Irish women preferred - they're cheap, desperate, and speak English (unlike Germans). This is WOMEN'S WORK - cleaning, cooking, childcare. Daily duties: Rise at 5 AM. Light fires, prepare breakfast. Clean entire house - scrubbing floors on hands and knees, your back will break. Wash clothes by hand - your hands will be raw and cracked. Cook meals - three meals a day for family and guests. Care for children - you're a nanny, teacher, and servant. Work until 9 PM, sometimes later. Sleep in attic or basement - cramped, cold, no privacy. You're on call 24 hours - family needs something? You do it. No days off - work 7 days per week. Your employer controls your life - where you go, who you see, what you wear. Irish women are preferred because they're Catholic (less threatening than Protestant servants), cheap, and desperate enough to accept terrible conditions. Many Irish women come alone, send money home to starving families in Ireland. You'll be treated as inferior - 'Bridget' is a slur for Irish servants. But it's work, and it's better than starving. Free labor - you can quit, but then you're homeless, jobless, with no references.",
		requirements: [
			"Women only - this is women's work",
			"Irish women preferred - cheap and desperate",
			"Age 16-35, preferably 18-25",
			"Single women - no husbands or children",
			"Must be willing to live in employer's home",
			"Willingness to work 7 days per week, 16+ hour days",
			"Acceptance of employer's control over your life",
			"No prior experience necessary",
			"Must be 'respectable' - good moral character",
			"Willingness to send wages home to family"
		],
		postedDate: "September 5, 1850",
		era: "market-revolution",
		filters: {
			gender: 'female',
			race: 'white',
			minAge: 16,
			maxAge: 35,
			education: 'none',
			experience: 'none',
			maritalStatus: 'single'
		}
	},
	{
		id: "market-revolution-5",
		title: "Railroad Worker - Track Layer",
		company: "Railroad Construction",
		location: "Westward Expansion",
		type: "Manual Labor",
		salary: "$1.00-$1.50 per day (Dangerous Work)",
		description: "Seeking strong men for railroad construction. This is BRUTAL work - building the railroads that will transform America. Irish and Chinese immigrants preferred - they work cheap, work hard, and can't complain. Daily duties: Rise before dawn. Carry 100-pound rails on your shoulders - your back will be destroyed. Lay track in all weather - rain, snow, blazing sun. Swing sledgehammers to drive spikes - your arms will shake with exhaustion. Work 12-14 hour days, 6-7 days per week. Live in tent camps - filthy, crowded, disease-ridden. Food is poor quality - you'll be malnourished. Accidents are constant - crushed by rails, run over by trains, explosions from blasting. Many workers die. No safety regulations - if you're injured, you're fired. If you die, they hire another. Irish workers are preferred for track laying - they're strong, desperate, and work for less than native-born workers. Chinese workers are preferred for blasting and tunneling - they're considered expendable. This is free labor, but it's worse than slavery in many ways - at least slaves are valuable property, you're disposable. But it's work, and for immigrants with no other options, it's better than starving.",
		requirements: [
			"Men only - this is men's work requiring strength",
			"Irish or Chinese immigrants preferred - work cheap",
			"Age 18-45, strong and healthy",
			"Physical strength - must carry 100-pound rails",
			"Willingness to work 12-14 hour days, 6-7 days per week",
			"Acceptance of dangerous work - accidents are your fault",
			"Must be willing to live in tent camps",
			"No prior experience necessary",
			"Willingness to work in all weather conditions",
			"Immigrants preferred - native workers demand higher wages"
		],
		postedDate: "June 20, 1865",
		era: "market-revolution",
		filters: {
			gender: 'male',
			race: 'any',
			minAge: 18,
			maxAge: 45,
			education: 'none',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	{
		id: "market-revolution-6",
		title: "Seamstress - Piece Work",
		company: "Garment Workshop",
		location: "New York City, New York",
		type: "Piece Work",
		salary: "$0.50-$1.00 per day (Piece Rate)",
		description: "Seeking seamstresses for garment finishing. This is WOMEN'S WORK - sewing, finishing, piece work. You work from home or in a crowded workshop. Daily duties: Work 12-14 hour days, 6-7 days per week. Sew seams by hand - your fingers will bleed, your eyes will strain. Finish garments - hemming, buttonholes, trimming. Work piece-rate - the faster you work, the more you earn, but the rate is set so low you must work constantly to survive. Work in dim light - your eyesight will be destroyed by age 30. Your back will ache from hunching over. You'll work until you drop, then start again the next day. Many women work at home, trying to care for children while sewing. Others work in workshops - crowded, stuffy, no ventilation. The work is seasonal - busy before holidays, slow in summer. When there's no work, you starve. This is one of the few jobs available to women, but it pays starvation wages. You compete with other desperate women, driving down the piece rate. No benefits, no security, no future. Just work until you can't work anymore.",
		requirements: [
			"Women only - this is women's work",
			"Age 16-50, preferably 18-35",
			"Ability to sew by hand - precise stitching required",
			"Willingness to work 12-14 hour days, 6-7 days per week",
			"Must work piece-rate - pay depends on speed",
			"Acceptance of low wages - competition drives down rates",
			"Must provide own thread and needles",
			"Willingness to work in crowded, poorly lit conditions",
			"No prior experience necessary - we'll teach you",
			"Must work constantly to earn enough to survive"
		],
		postedDate: "October 12, 1850",
		era: "market-revolution",
		filters: {
			gender: 'female',
			race: 'any',
			minAge: 16,
			maxAge: 50,
			education: 'none',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	{
		id: "market-revolution-7",
		title: "School Teacher - Women Only",
		company: "Common School",
		location: "Rural New England",
		type: "Teaching",
		salary: "$4-8 per month (Room & Board with Family)",
		description: "Seeking schoolteacher for one-room schoolhouse. This is one of the FEW PROFESSIONAL ROLES for women - teaching is considered 'women's work' because it's nurturing, like motherhood. But pay is low, conditions are poor. Daily duties: Teach all grades in one room - ages 5-16, 30-50 students. Teach reading, writing, arithmetic, basic geography. Maintain discipline - many students are older, stronger than you. Clean the schoolhouse - you're janitor too. Board with local families - rotate monthly, never have a home. Work 6 days per week, sometimes 7. Your pay is docked for room and board - you'll save little. Many teachers are young, single women - they work a few years, then marry and quit (expected to). Married women are discouraged from teaching - husbands should support them. You must be 'respectable' - good moral character, proper behavior. The community watches you constantly. But it's better than factory work or domestic service - you have some respect, some independence. Free white women only - this is one of the few opportunities for education and professional work.",
		requirements: [
			"Women only - teaching is women's work",
			"Free white women only - colored women need not apply",
			"Age 18-30, preferably 20-25",
			"Single women preferred - married women expected to quit",
			"Basic education required - must be able to read and write",
			"Good moral character - must be 'respectable'",
			"Willingness to board with local families",
			"Ability to manage 30-50 students of all ages",
			"Must teach all subjects - reading, writing, arithmetic",
			"Acceptance of low pay - teaching is not lucrative"
		],
		postedDate: "August 1, 1855",
		era: "market-revolution",
		filters: {
			gender: 'female',
			race: 'white',
			minAge: 18,
			maxAge: 30,
			education: 'elementary',
			experience: 'none',
			maritalStatus: 'single'
		}
	},
	{
		id: "market-revolution-8",
		title: "Free Black Laborer - Dock Work",
		company: "Port Authority",
		location: "Philadelphia, Pennsylvania",
		type: "Manual Labor",
		salary: "$1.00-$1.50 per day (Irregular Work)",
		description: "Seeking laborers for dock work. Free colored men welcome - this is hard, dangerous work that white men avoid. But you'll be paid less, treated worse. Daily duties: Load and unload ships - carry heavy cargo on your back, your spine will be destroyed. Work in all weather - rain, snow, blazing sun. Work 10-12 hour days when work is available. But work is irregular - ships come and go, you may work one day, starve the next. You compete with other free colored men, Irish immigrants - all desperate for work. White workers get better jobs, better pay. You get the worst work, lowest pay. No security, no benefits, no future. If you're injured, you're fired. If you complain, you're fired. Free colored men are excluded from skilled trades - carpenters' unions won't admit you, blacksmiths won't train you. This is one of the few jobs available. You're free, but you're not equal. White workers resent you - they say you drive down wages. But you have no choice - this is work, or starve.",
		requirements: [
			"Men only - this is men's work requiring strength",
			"Free colored men - slaves need not apply",
			"Age 18-45, strong and healthy",
			"Physical strength - must carry heavy cargo",
			"Willingness to work irregular hours - work when ships arrive",
			"Acceptance of low pay - free colored men paid less than white workers",
			"Willingness to work in all weather conditions",
			"No prior experience necessary",
			"Must compete with other desperate workers",
			"Acceptance that skilled trades are closed to you"
		],
		postedDate: "July 15, 1850",
		era: "market-revolution",
		filters: {
			gender: 'male',
			race: 'black',
			minAge: 18,
			maxAge: 45,
			education: 'none',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	{
		id: "market-revolution-9",
		title: "Chinese Railroad Worker",
		company: "Central Pacific Railroad",
		location: "Sierra Nevada, California",
		type: "Construction",
		salary: "$1.00 per day (Less than White Workers)",
		description: "Seeking Chinese workers for railroad construction through mountains. Chinese workers preferred for dangerous work - blasting, tunneling, working in extreme conditions. We pay you less than white workers, work you harder, treat you worse. Daily duties: Blast through mountains - many workers die in explosions. Tunnel through rock - cave-ins are common, you'll be buried alive. Work 12-14 hour days, 6-7 days per week. Live in tent camps - crowded, filthy, disease-ridden. Food is poor quality - you'll be malnourished. White workers get $1.50 per day, you get $1.00. White workers get better food, better housing. You get the worst of everything. Accidents are constant - crushed by rocks, explosions, falls. If you're injured, you're fired. If you die, we hire another. Chinese workers are considered expendable - cheaper than white workers, more desperate, easier to control. You can't speak English? Doesn't matter, just work. You can't organize? Good - we don't want unions. You're isolated, discriminated against, exploited. But it's work, and for immigrants with no other options, it's better than starving.",
		requirements: [
			"Men only - this is men's work",
			"Chinese immigrants preferred - work cheap, work hard",
			"Age 18-40, strong and healthy",
			"Willingness to work in extreme danger - blasting, tunneling",
			"Acceptance of lower pay than white workers",
			"Willingness to work 12-14 hour days, 6-7 days per week",
			"Must live in tent camps - crowded, filthy conditions",
			"No prior experience necessary",
			"Willingness to work in all weather, all conditions",
			"Acceptance that you're considered expendable"
		],
		postedDate: "May 10, 1867",
		era: "market-revolution",
		filters: {
			gender: 'male',
			race: 'any',
			minAge: 18,
			maxAge: 40,
			education: 'none',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	{
		id: "market-revolution-10",
		title: "Clerk - Store Assistant",
		company: "Dry Goods Store",
		location: "Boston, Massachusetts",
		type: "Clerical",
		salary: "$6-10 per week",
		description: "Seeking clerk for dry goods store. This is MEN'S WORK - requires education, literacy, dealing with customers. Young men preferred - they're cheaper, more compliant. Daily duties: Work 10-12 hour days, 6 days per week. Assist customers - measure fabric, weigh goods, calculate prices. Keep accounts - record sales, balance books. Stock shelves - lift heavy boxes, your back will ache. Sweep floors, clean windows - you're janitor too. The owner watches constantly - make a mistake, you're fired. You must be polite, respectful, never complain. Many clerks are young men hoping to learn the business, become shopkeepers themselves. But most never do - they stay clerks, working for others their whole lives. This requires education - must be able to read, write, do arithmetic. Free white men only - this is skilled work requiring education that slaves and free colored men are denied. You have some respect, some security, but pay is low, advancement is rare.",
		requirements: [
			"Men only - this is men's work",
			"Free white men only - requires education",
			"Age 16-30, preferably 18-25",
			"Basic education required - must read, write, do arithmetic",
			"Polite, respectful demeanor - must deal with customers",
			"Willingness to work 10-12 hour days, 6 days per week",
			"Physical ability - must lift heavy boxes, stock shelves",
			"No prior experience necessary - we'll train you",
			"Must be trustworthy - handling money and accounts",
			"Acceptance that advancement is rare - most stay clerks"
		],
		postedDate: "March 5, 1850",
		era: "market-revolution",
		filters: {
			gender: 'male',
			race: 'white',
			minAge: 16,
			maxAge: 30,
			education: 'elementary',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	{
		id: "market-revolution-11",
		title: "Coal Miner - Men Only",
		company: "Coal Mine",
		location: "Pennsylvania",
		type: "Mining",
		salary: "$1.50-$2.00 per day (Dangerous Work)",
		description: "Seeking miners for coal extraction. This is BRUTAL, DANGEROUS work - men die daily. Irish and Welsh immigrants preferred - they work cheap, work hard, can't complain. Daily duties: Descend into mine before dawn - dark, cramped, suffocating. Dig coal with pickaxe - your arms will shake with exhaustion. Load coal into carts - your back will break. Work in darkness, breathing coal dust - your lungs will be destroyed. Cave-ins are constant - you'll be buried alive. Explosions from gas - you'll be burned, crushed, killed. Work 10-12 hour days, 6 days per week. Many miners die before age 40 - black lung, accidents, explosions. If you're injured, you're fired. If you die, they hire another. No safety regulations - accidents are your fault. Irish workers are preferred - they're desperate, work for less, less likely to organize. This is free labor, but it's worse than slavery in many ways - at least slaves are valuable property, you're disposable. But it's work, and for immigrants with no other options, it's better than starving.",
		requirements: [
			"Men only - this is men's work",
			"Irish or Welsh immigrants preferred - work cheap",
			"Age 18-45, strong and healthy",
			"Physical strength - must dig coal, load carts",
			"Willingness to work in extreme danger - cave-ins, explosions",
			"Acceptance of dangerous work - many workers die",
			"Willingness to work 10-12 hour days, 6 days per week",
			"Must work in darkness, breathing coal dust",
			"No prior experience necessary",
			"Acceptance that you're considered expendable"
		],
		postedDate: "September 20, 1855",
		era: "market-revolution",
		filters: {
			gender: 'male',
			race: 'white',
			minAge: 18,
			maxAge: 45,
			education: 'none',
			experience: 'none',
			maritalStatus: 'any'
		}
	},
	// Industrial Era
	{
		id: "industrial-1",
		title: "Meatpacking Worker - Men Only",
		company: "Chicago Stockyards",
		location: "Chicago, Illinois",
		type: "Full-time",
		salary: "$1.50 per day (10-12 hour shifts)",
		description: "Fast-paced work in meat processing facility. Free labor only - slaves were freed, but conditions are worse than slavery. Stand in blood and offal up to your ankles. The stench will make you vomit - you'll never get used to it. Daily duties: Arrive at 5 AM. Kill hogs - slit throats, watch them bleed out screaming. Stand on killing floor slick with blood. Cut carcasses with razor-sharp knives - one slip and you lose a finger (happens weekly). Work in freezing cold (40 degrees) to prevent spoilage - your hands go numb. Lift 200-pound sides of beef onto hooks. Work at breakneck speed - foreman watches every move. Slow down? Fired. Make mistake? Fired. Complain? Fired. Ten men waiting to take your place. Lunch break: 15 minutes, eat standing up. Work until 7 PM. Go home stinking of blood and death. Your clothes will never be clean. Your hands will be permanently stained. Many workers lose fingers, hands, even lives. No women or children - too dangerous. Immigrants welcome - you don't speak English? Doesn't matter, just work faster. Piece-rate pay available if you work fast enough to earn it. No union members - we'll blacklist you.",
		requirements: [
			"Men only - no women or children",
			"Ability to work at extreme speed under constant pressure",
			"Physical stamina - must stand 12 hours in freezing cold",
			"No prior experience necessary - we'll train you",
			"Willingness to work 10-12 hour shifts, 6 days per week",
			"Must work in 40-degree freezing conditions",
			"Acceptance of dangerous work - accidents are your fault",
			"No union membership - union members will be fired"
		],
		postedDate: "June 3, 1906",
		era: "industrial",
		filters: {
			gender: 'male',
			race: 'any',
			minAge: 18,
			maxAge: 50,
			education: 'none',
			experience: 'none',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "industrial-2",
		title: "Factory Machine Operator - White Men Preferred",
		company: "Carnegie Steel Works",
		location: "Pittsburgh, Pennsylvania",
		type: "Full-time",
		salary: "$2.00 per day",
		description: "Operate industrial machinery in steel production facility. Free white labor preferred - colored men are considered unreliable, and we want workers who can be promoted to foreman. Extremely dangerous work. Daily duties: Arrive at 6 AM. Work 12-hour shifts in inferno heat (120+ degrees near furnaces). Operate rolling mills - one mistake and molten steel splashes on you. Burns are constant - your skin will be covered in scars. Lift 100-pound steel bars with tongs. The noise is deafening - you'll go partially deaf within months. Breathe in metal dust and smoke - your lungs will be black. No safety equipment - goggles, gloves, masks cost money. If you lose a finger, hand, or arm? That's your problem. If you die? Your family gets nothing. Work until 6 PM. Go home exhausted, covered in soot and burns. Many men die - crushed by machinery, burned by molten steel, suffocated by fumes. White men preferred for skilled positions, but we'll take immigrants for dangerous work. Colored men need not apply - they're only good for unskilled labor. Union members will be blacklisted and fired immediately.",
		requirements: [
			"White men preferred - colored men need not apply",
			"Basic mechanical aptitude",
			"Physical strength - must lift 100+ pounds",
			"Willingness to work 12-hour shifts in extreme heat",
			"Acceptance of dangerous conditions - no safety equipment",
			"Must work in 120+ degree heat",
			"No union membership - union members fired immediately",
			"Must accept risk of death or dismemberment"
		],
		postedDate: "March 12, 1890",
		era: "industrial",
		filters: {
			gender: 'male',
			race: 'white',
			minAge: 18,
			maxAge: 45,
			education: 'elementary',
			experience: 'some',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "industrial-3",
		title: "Textile Mill Worker - Young Women Only",
		company: "Lowell Mill Company",
		location: "Lowell, Massachusetts",
		type: "Full-time",
		salary: "$1.25 per day",
		description: "Operate looms and spinning machines in textile mill. Free young women preferred - cheaper than men, more docile, and small fingers work better with machinery. Women only - no men. Daily duties: Rise at 4:30 AM. Eat breakfast in boarding house (monitored by matron). Walk to mill in dark. Work from 5 AM to 7 PM - 14 hours. Stand all day operating looms. The noise is deafening - you cannot hear yourself think. Cotton dust fills your lungs - you'll cough constantly, many develop 'brown lung' disease. Watch threads constantly - one breaks, you must fix it immediately or be fined. Your fingers will bleed from handling rough thread. Overseer watches constantly - slow down and you're docked pay. Lunch break: 30 minutes, eat at your machine. Work until 7 PM. Walk home exhausted. Dinner in boarding house at 8 PM. Lights out at 10 PM - no reading, no talking. Church required Sunday morning, then rest. No men visitors ever. No leaving boarding house after dark. Must be young (15-30), single, without children, of good moral character. If you marry, you're fired. If you get pregnant, you're fired. If you complain, you're fired. Sign contract agreeing to all rules or don't apply.",
		requirements: [
			"Women only - age 15-30, no men",
			"Must be single and without children",
			"Good health and moral character - will be investigated",
			"Ability to work 14-hour days, 6 days per week",
			"Must live in company boarding house - no exceptions",
			"Must agree to all company rules - no men visitors, curfew, church",
			"Must sign contract - breaking rules means immediate dismissal",
			"Small fingers preferred for thread work"
		],
		postedDate: "April 7, 1885",
		era: "industrial",
		filters: {
			gender: 'female',
			race: 'white',
			minAge: 15,
			maxAge: 30,
			education: 'elementary',
			experience: 'none',
			union: false,
			maritalStatus: 'single'
		}
	},
	{
		id: "industrial-4",
		title: "Coal Breaker - Boys Wanted",
		company: "Anthracite Coal Company",
		location: "Pennsylvania",
		type: "Full-time",
		salary: "$0.50-$1.00 per day",
		description: "Boys needed to separate slate from coal. Child labor preferred - small hands work better, and we pay them less than men. Work in coal breakers - dark, dusty, dangerous. Daily duties: Arrive at 6 AM (your parents wake you). Work in breaker building - dark, windowless, filled with coal dust. Sit on wooden bench for 10 hours. Pick through moving coal on conveyor belt. Separate slate from coal with your bare hands - coal is sharp, your fingers will bleed. Breathe coal dust all day - your lungs will be black by age 12. Many boys develop 'black lung' disease. The noise is constant - machinery never stops. If you slow down, foreman beats you. Lunch: 15 minutes, eat the food you brought (usually just bread). Work until 6 PM. Walk home covered in black dust, exhausted. Your back aches from sitting hunched over all day. Your eyes strain in the dim light - many boys go blind. Accidents are common - boys lose fingers, hands, even lives when caught in machinery. Boys as young as 8 accepted - the younger, the better (smaller hands, cheaper pay). No girls - this is boys' work. Your family needs the money - 50 cents a day helps put food on the table.",
		requirements: [
			"Boys only - age 8-14 preferred, no girls",
			"Small hands an advantage - easier to pick coal",
			"Ability to work in dark, dusty, windowless conditions",
			"Willingness to work 10-hour shifts, 6 days per week",
			"Must sit hunched over for entire shift",
			"Parental consent required for minors",
			"Acceptance of dangerous conditions - accidents common"
		],
		postedDate: "January 15, 1895",
		era: "industrial",
		filters: {
			gender: 'male',
			race: 'any',
			minAge: 8,
			maxAge: 14,
			education: 'none',
			experience: 'none',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "industrial-5",
		title: "Newsboy - Children Wanted",
		company: "New York Herald",
		location: "New York, New York",
		type: "Full-time",
		salary: "Commission Only - Must Buy Papers First",
		description: "Sell newspapers on street corners. Child labor preferred - children work for less, are more persistent, and don't complain. Boys and girls accepted, age 8-14. Daily duties: Wake at 4 AM. Go to newspaper office. Must BUY papers upfront - 50 cents for 100 papers. If you don't have money, you can't work. Carry heavy stack of papers (30+ pounds) to your corner. Stand on street corner from 5 AM to 8 AM shouting 'Extra! Extra! Read all about it!' Then go to school (if you go). After school, back to corner from 3 PM to 7 PM. Work in rain, snow, freezing cold, blazing heat. If papers don't sell, you lose your money. Many days you make nothing - or lose money. Older newsboys will beat you up and steal your spot if you're weak. Police will chase you if you're on wrong corner. Work until dark, then home to sleep. Repeat every day, 365 days a year. No days off - if you don't work, you don't eat. Many children sleep on streets, have no home. Must work regardless of weather, illness, or exhaustion. No guaranteed wage - you might earn 10 cents a day, or lose 50 cents. This is not a job - it's survival.",
		requirements: [
			"Children age 8-14 - boys and girls accepted",
			"Must have 50 cents to purchase initial papers",
			"Willingness to work in all weather - rain, snow, heat, cold",
			"Early morning (4 AM) and evening (until 7 PM) availability",
			"Must work 365 days per year - no days off",
			"No guaranteed wage - may lose money",
			"Must be able to carry 30+ pound stack of papers",
			"Acceptance of dangerous street conditions"
		],
		postedDate: "March 20, 1900",
		era: "industrial",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 8,
			maxAge: 14,
			education: 'none',
			experience: 'none',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "industrial-6",
		title: "Domestic Servant - Colored Women",
		company: "Private Residence",
		location: "Atlanta, Georgia",
		type: "Full-time",
		salary: "$3-5 per week",
		description: "Colored woman needed for household work. Colored women preferred for domestic work - white women won't do this work, and colored women are considered 'naturally suited' to servitude. Daily duties: Rise at 4 AM. Light fires in all fireplaces. Prepare breakfast for white family - you eat scraps in kitchen. Wash all dishes by hand. Scrub floors on hands and knees - your knees will be raw. Launder all clothing by hand - boiling water, scrubbing on washboard, hanging heavy wet clothes. Iron everything - hot, exhausting work. Cook lunch, then dinner. Clean up after every meal. Tend to white children - feed them, bathe them, watch them. Empty chamber pots - the smell will make you gag. Work until 9 PM. Sleep in small room in attic or basement - cold in winter, hot in summer. One half-day off per week (Sunday afternoon) - if you're lucky. Must be respectful and obedient - any 'sass' and you're fired. No days off for illness - work or lose your job. Must live on premises - you have no life outside this house. $3-5 per week - barely enough to survive, but better than field work. References required. No men, no white women - this is colored women's work.",
		requirements: [
			"Colored women only - no men, no white women",
			"Experience in all household tasks",
			"Must live on premises - no exceptions",
			"Willingness to work 16-hour days, 6.5 days per week",
			"Must be respectful and obedient at all times",
			"References from previous white employer required",
			"Must accept low pay and harsh conditions",
			"No days off except half-day Sunday"
		],
		postedDate: "August 10, 1905",
		era: "industrial",
		filters: {
			gender: 'female',
			race: 'black',
			minAge: 18,
			maxAge: 50,
			education: 'none',
			experience: 'some',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "industrial-7",
		title: "Porter - Colored Men Only",
		company: "Pullman Company",
		location: "Chicago, Illinois",
		type: "Full-time",
		salary: "$1.25 per day (Plus Tips)",
		description: "Colored men only - white men need not apply. This is colored men's work - serving white passengers on trains. Jim Crow laws require segregation - colored men serve colored passengers, but mostly you serve white passengers who treat you like a servant. Daily duties: Arrive at station before dawn. Load luggage onto train - heavy bags, your back will ache. Serve white passengers - carry their bags, shine their shoes, make their beds. You must be polite, respectful, never look white passengers in the eye. Call them 'sir' and 'ma'am' - never use their first names. Work 12-14 hour days, sleep in cramped quarters. White passengers will insult you, call you names, treat you like less than human. But you must smile, be polite, never complain. If a white passenger complains about you, you're fired immediately. Tips are your main income - $1.25 base pay is nothing. But white passengers often don't tip colored porters, or tip very little. You compete with other colored porters for tips - be too friendly, you're fired. Be not friendly enough, you get no tips. This is the only work available to colored men on trains - you can't be conductor, engineer, or any skilled position. Those jobs are white only. You're a servant, not a worker. But it's work, and for colored men with families to feed, it's better than nothing.",
		requirements: [
			"Colored men only - white men need not apply",
			"Age 18-45, strong and healthy",
			"Must be polite and respectful at all times",
			"Willingness to work 12-14 hour days",
			"Must accept segregation - colored men serve white passengers",
			"Must never complain or show disrespect",
			"Physical strength - must carry heavy luggage",
			"Must work for tips - base pay is minimal",
			"Acceptance that skilled positions are white only"
		],
		postedDate: "June 15, 1900",
		era: "industrial",
		filters: {
			gender: 'male',
			race: 'black',
			minAge: 18,
			maxAge: 45,
			education: 'none',
			experience: 'none',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "industrial-8",
		title: "Janitor - Colored Men Only",
		company: "Office Building",
		location: "Birmingham, Alabama",
		type: "Full-time",
		salary: "$8-10 per week",
		description: "Colored men only - this is colored men's work. White men won't do this work, and colored men are considered suited for manual labor. Jim Crow laws require segregation - you work in colored-only areas, use colored-only facilities. Daily duties: Arrive at 5 AM, before white workers arrive. Clean all offices - sweep, mop, empty trash. Clean bathrooms - white bathrooms and colored bathrooms are separate. You can only use colored bathrooms, colored water fountains. Scrub floors on hands and knees - your knees will be raw. Empty wastebaskets, clean windows, polish floors. Work until 7 PM, after white workers leave. You must be invisible - white workers shouldn't see you, shouldn't interact with you. If a white worker complains about you, you're fired. You work in the basement, the back rooms, the colored-only areas. Never use the front entrance - that's for white people. Never ride the elevator with white people - wait for the next one. You're not a person, you're a cleaning machine. $8-10 per week - barely enough to survive, but it's work. Colored men only - white men don't do this work.",
		requirements: [
			"Colored men only - white men need not apply",
			"Age 18-50, able-bodied",
			"Must work early morning and evening hours",
			"Willingness to work in segregated conditions",
			"Must use colored-only facilities",
			"Must be invisible - no interaction with white workers",
			"Physical ability - must scrub floors, lift heavy trash",
			"Acceptance of low pay and harsh conditions",
			"Must never complain or show disrespect"
		],
		postedDate: "September 5, 1910",
		era: "industrial",
		filters: {
			gender: 'male',
			race: 'black',
			minAge: 18,
			maxAge: 50,
			education: 'none',
			experience: 'none',
			union: false,
			maritalStatus: 'any'
		}
	},
	// Early Automation Era
	{
		id: "automation-1",
		title: "Oil Refinery Technician - Men Only",
		company: "Texas Oil & Refining Co.",
		location: "Houston, Texas",
		type: "Full-time",
		salary: "$4,200 per year",
		description: "Monitor and maintain automated refining equipment. Free white male labor preferred - this is skilled technical work requiring education and responsibility. Colored men are not considered for technical positions. Daily duties: Work rotating shifts - days, nights, weekends. Monitor control panels - watch gauges, dials, readouts for 8 hours. One mistake and entire refinery could explode. Walk through facility checking equipment - hot, loud, dangerous. Breathe chemical fumes - your lungs will suffer. Maintain automated systems - fix when they break. Work in extreme heat near furnaces. Respond to alarms at any time - if something goes wrong, you're responsible. Night shifts disrupt your sleep - you'll be exhausted constantly. Training provided but you must learn quickly - if you can't handle it, you're fired. Men only - this is not suitable work for women (too technical, too dangerous). White men preferred for supervisory positions. Must be 21 or older - need maturity for this responsibility.",
		requirements: [
			"Men only - no women, this is men's work",
			"High school diploma required",
			"Mechanical aptitude and technical skills",
			"White men preferred - colored men not considered for technical roles",
			"Ability to read technical manuals and schematics",
			"Willingness to work rotating shifts including nights and weekends",
			"Must be 21 or older - need maturity",
			"Must accept responsibility for dangerous equipment"
		],
		postedDate: "August 15, 1955",
		era: "industrial",
		filters: {
			gender: 'male',
			race: 'white',
			minAge: 21,
			maxAge: 50,
			education: 'highschool',
			experience: 'some',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "automation-2",
		title: "Assembly Line Supervisor - White Men Only",
		company: "General Motors",
		location: "Detroit, Michigan",
		type: "Full-time",
		salary: "$5,500 per year",
		description: "Supervise automated assembly line operations. Free white male labor only - colored men are not considered for supervisory roles, and women are not suited for management. Daily duties: Arrive at 6 AM. Monitor automated assembly line - watch for breakdowns, quality issues. Manage team of 20-30 workers - mostly white men, some colored men in unskilled positions. Push workers to meet production quotas - if line slows, it's your fault. Deal with union grievances - but don't give in, company doesn't want to. Work 10-hour shifts, sometimes 12 if production is behind. Walk line constantly - your feet will ache. Deal with worker complaints - ignore most, fire troublemakers. Report to plant manager daily - if production drops, you're in trouble. Colored workers get worst jobs, worst shifts - that's just how it is. Women workers? They're in separate areas, doing 'women's work.' Must enforce company rules strictly - no exceptions. White men only - colored men can work the line but not supervise. Union position but don't be too friendly with union - company watches. Must have military service - shows you can lead and follow orders.",
		requirements: [
			"White men only - no colored men or women",
			"5+ years manufacturing experience",
			"Leadership skills and ability to enforce discipline",
			"Understanding of automated systems",
			"High school diploma or equivalent",
			"Military service preferred - shows leadership",
			"Must be able to work 10-12 hour shifts",
			"No colored men or women - supervisory positions white only"
		],
		postedDate: "February 22, 1962",
		era: "industrial",
		filters: {
			gender: 'male',
			race: 'white',
			minAge: 25,
			maxAge: 50,
			education: 'highschool',
			experience: 'experienced',
			union: true,
			maritalStatus: 'any'
		}
	},
	{
		id: "automation-3",
		title: "Machine Tool Operator",
		company: "Boeing Aircraft",
		location: "Seattle, Washington",
		type: "Full-time",
		salary: "$4,800 per year",
		description: "Operate computer-controlled machine tools for aircraft parts manufacturing. Free labor only - this is defense work, requires loyalty and security clearance. Daily duties: Arrive at 7 AM. Program computer-controlled lathes and mills - one mistake and expensive part is ruined. Load raw materials into machines. Monitor cutting operations - watch for tool wear, adjust speeds. Measure finished parts with precision instruments - tolerance is 0.001 inches. Work in clean facility but breathe cutting fluid mist all day - your lungs will suffer. Stand for 8 hours - your back and feet will ache. Work with dangerous machinery - lose focus and you lose a finger. Quality is everything - one bad part could cause plane crash. Must pass security clearance - FBI will investigate you, your family, your friends. Must sign loyalty oath - no communists, no subversives, no questioning authority. Men preferred for technical work, but will consider women for simpler operations (but pay them less). Must be reliable - defense contracts depend on it.",
		requirements: [
			"Men preferred for technical work, women considered for simpler tasks",
			"Mechanical skills and attention to detail",
			"Ability to read blueprints and technical drawings",
			"Precision work - tolerance 0.001 inches",
			"Security clearance required - FBI background check",
			"Must pass loyalty oath - no communists or subversives",
			"Must be reliable - defense work requires perfection",
			"No known communist or subversive affiliations"
		],
		postedDate: "November 10, 1968",
		era: "industrial",
		filters: {
			gender: 'any',
			race: 'white',
			minAge: 18,
			maxAge: 50,
			education: 'highschool',
			experience: 'some',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "automation-4",
		title: "Secretary - Women Only",
		company: "Corporate Office",
		location: "New York, New York",
		type: "Full-time",
		salary: "$3,200 per year",
		description: "Secretarial position for professional office. Women only - this is 'women's work,' suitable for female temperament. Men are too valuable for clerical work. Daily duties: Arrive at 8 AM sharp - late and you're fired. Type letters, memos, reports all day - your fingers will ache. Take dictation from male bosses - write in shorthand, then type it up. Answer phones - be pleasant, never complain. Make coffee for all male employees - this is expected. File documents - endless filing, your back will hurt. Run errands - pick up dry cleaning, buy lunch, whatever boss needs. Work until 5 PM - but if boss needs you, stay until 7 or 8 PM. No overtime pay - it's expected. Bosses will make passes at you - smile and deflect, or lose your job. Must be attractive, well-groomed, wear dresses and heels. Must be single - if you marry, you're fired (husband should support you). If you get pregnant, you're fired. Must be 18-30 - after 30, you're 'too old.' This is dead-end work - no advancement, no raises, just typing until you're replaced by a younger woman.",
		requirements: [
			"Women only - no men, this is women's work",
			"Must be single - will be terminated immediately if married",
			"Typing speed 60+ WPM required",
			"Shorthand and dictation skills essential",
			"Attractive appearance required - must wear dresses, heels, makeup",
			"High school diploma",
			"Must be 18-30 years old - no older women",
			"Must work unpaid overtime when needed",
			"Must accept low pay with no advancement opportunities"
		],
		postedDate: "June 5, 1960",
		era: "post-industrial",
		filters: {
			gender: 'female',
			race: 'white',
			minAge: 18,
			maxAge: 30,
			education: 'highschool',
			experience: 'some',
			union: false,
			maritalStatus: 'single'
		}
	},
	{
		id: "automation-5",
		title: "Nurse - Women Only, White Preferred",
		company: "City Hospital",
		location: "Chicago, Illinois",
		type: "Full-time",
		salary: "$3,800 per year",
		description: "Nursing position in hospital. Free female labor - this is 'women's work,' suited to female nature (caring, nurturing). Men are doctors, women are nurses - that's the natural order. White women preferred for white patients - colored women may work colored wards only (segregation is required). Daily duties: Work 12-hour shifts, sometimes 16 if short-staffed. Change bedpans - the smell will make you gag. Bathe patients, change dressings, empty drainage bags. Lift patients - your back will be destroyed by age 40. Deal with doctors' orders - never question, just obey. Work nights, weekends, holidays - no exceptions. Watch patients die - you'll see death daily. Deal with families - comfort them, but don't get emotional. White patients get better care, better rooms - colored patients are in basement, get less attention. Must be unmarried - if you marry, you're expected to resign (husband should support you). If you get pregnant, you're fired immediately. Age 21-35 only - after 35, you're 'too old' for this work. Colored nurses work colored wards only - that's hospital policy, not our choice.",
		requirements: [
			"Women only - nursing is women's work, no men",
			"White women preferred for white patient wards",
			"Nursing degree or certificate required",
			"Must be unmarried or willing to resign immediately if married",
			"Age 21-35 only - no older women",
			"Willingness to work 12-16 hour shifts, nights, weekends, holidays",
			"Colored women may apply for colored patient wards only",
			"Must accept low pay and harsh working conditions"
		],
		postedDate: "March 15, 1958",
		era: "industrial",
		filters: {
			gender: 'female',
			race: 'white',
			minAge: 21,
			maxAge: 35,
			education: 'college',
			experience: 'some',
			union: false,
			maritalStatus: 'single'
		}
	},
	// Digital Computing Era
	{
		id: "digital-1",
		title: "Computer Programmer - Men Preferred",
		company: "IBM",
		location: "Armonk, New York",
		type: "Full-time",
		salary: "$12,000 per year",
		description: "Develop software applications using FORTRAN and COBOL. Free labor - this is skilled technical work requiring education. Men preferred for programming - women's minds aren't suited for logic and technical thinking. Women can do data entry, but not real programming. Daily duties: Arrive at 8 AM. Write code on punch cards - one mistake means retyping entire card deck. Debug programs by reading through thousands of lines of code - your eyes will strain. Test programs on mainframe - wait hours for results, then fix errors. Work with massive machines that fill entire rooms. Write documentation - tedious but required. Attend meetings with male managers - if you're a woman, they'll ignore your input. Work 50+ hour weeks - programming requires long hours. Deal with system crashes - lose hours of work, start over. Men get interesting projects, women get data entry - that's just how it is. Training provided but men advance faster - they're 'naturally better' at this work. Must be willing to work unpaid overtime - 'passion for computing' means working for free.",
		requirements: [
			"Men preferred for programming - women for data entry only",
			"Bachelor's degree in mathematics, engineering, or related field",
			"Logical thinking skills - men are better at this",
			"Attention to detail and ability to debug complex code",
			"Willingness to work 50+ hour weeks, unpaid overtime",
			"Women may apply but will be assigned data processing, not programming",
			"Must accept that men advance faster in technical roles"
		],
		postedDate: "May 5, 1975",
		era: "post-industrial",
		filters: {
			gender: 'male',
			race: 'any',
			minAge: 22,
			maxAge: 40,
			education: 'college',
			experience: 'some',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "digital-2",
		title: "Data Entry Operator - Women Only",
		company: "AT&T",
		location: "New York, New York",
		type: "Full-time",
		salary: "$8,500 per year",
		description: "Enter data into computer systems. This is clerical work suitable for women. Transition from manual record-keeping to digital systems. Good typing skills essential. No advancement to programming positions - this is dead-end work. Must be able to work repetitive tasks without complaint.",
		requirements: [
			"Women only - this is women's work",
			"Typing speed 60+ WPM",
			"High school diploma",
			"Accuracy and attention to detail",
			"Previous telephone operator or clerical experience",
			"Must be willing to work repetitive tasks",
			"No men - this position is for women only"
		],
		postedDate: "September 18, 1980",
		era: "post-industrial",
		filters: {
			gender: 'female',
			race: 'any',
			minAge: 18,
			maxAge: 40,
			education: 'highschool',
			experience: 'some',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "digital-3",
		title: "Software Engineer - Recent College Grads",
		company: "Microsoft Corporation",
		location: "Redmond, Washington",
		type: "Full-time",
		salary: "$35,000 per year",
		description: "Develop software for personal computers. Work with C and assembly language. Fast-paced startup environment. Looking for young, energetic programmers. Stock options available. Must be willing to work 60+ hour weeks. Age 22-30 preferred. Help shape the future of computing.",
		requirements: [
			"Computer science degree from top university",
			"Proficiency in C programming",
			"Problem-solving skills",
			"Age 22-30 preferred",
			"Must be willing to work 60+ hour weeks",
			"Recent college graduates preferred",
			"Passion for technology"
		],
		postedDate: "March 12, 1990",
		era: "post-industrial",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 22,
			maxAge: 30,
			education: 'college',
			experience: 'none',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "digital-4",
		title: "Computer Operator - Men Only",
		company: "Data Processing Center",
		location: "Chicago, Illinois",
		type: "Full-time",
		salary: "$10,500 per year",
		description: "Operate mainframe computer systems. Free male labor only - this requires physical strength and technical knowledge. Women are not strong enough, not technical enough. Daily duties: Work night shifts (11 PM to 7 AM) - your sleep schedule will be destroyed. Monitor mainframe systems - watch for errors, system failures. Load tape drives - carry 20-pound tape reels, mount them on drives. Change printer paper - 2000-page boxes, your back will ache. Respond to system crashes at 3 AM - fix immediately or lose data. Work alone in dark, cold computer room - isolated, lonely. Deal with angry users when systems go down - it's always your fault. Maintain equipment - clean tape heads, replace parts. Work weekends, holidays - systems never stop. Must be able to lift 50+ pounds - tape reels, paper boxes, equipment. No women - they're not strong enough, not technical enough. This is men's work requiring physical and mental strength.",
		requirements: [
			"Men only - no women, equipment too heavy",
			"High school diploma required",
			"Physical strength - must lift 50+ pounds repeatedly",
			"Willingness to work night shifts (11 PM - 7 AM)",
			"Ability to work alone for 8-hour shifts",
			"Basic mechanical aptitude for equipment maintenance",
			"Must be 21 or older - need maturity for responsibility",
			"Must accept disrupted sleep schedule and isolation"
		],
		postedDate: "January 20, 1985",
		era: "post-industrial",
		filters: {
			gender: 'male',
			race: 'any',
			minAge: 21,
			maxAge: 45,
			education: 'highschool',
			experience: 'some',
			union: false,
			maritalStatus: 'any'
		}
	},
	// AI Era
	{
		id: "ai-1",
		title: "Machine Learning Engineer",
		company: "Google",
		location: "Mountain View, California",
		type: "Full-time",
		salary: "$180,000 - $250,000",
		description: "Build and deploy machine learning models at scale. Free labor only - this requires elite education that excludes most people. Must have degree from top-tier university (Stanford, MIT, Carnegie Mellon preferred) - if you went to state school, don't bother. Daily duties: Arrive at 9 AM (or work from home). Write Python code for hours - your eyes will strain staring at screens. Train models on massive datasets - wait hours for training to complete, then realize your model is garbage, start over. Debug neural networks - spend days trying to figure out why accuracy dropped 2%. Attend meetings about 'AI ethics' - then ignore ethics to ship faster. Work with massive compute clusters - one mistake costs company thousands in compute costs. Deal with imposter syndrome constantly - everyone seems smarter than you. Work 50+ hour weeks - 'passion' means working weekends. On-call for production models - get paged at 2 AM when model breaks. Must pass 6-hour technical interviews - solve algorithms on whiteboard, explain ML theory, code live. If you don't have PhD from top school, you're competing with 1000 applicants for one position. Must relocate to Bay Area - $250k sounds like a lot but rent is $4000/month for 1-bedroom.",
		requirements: [
			"Master's or PhD from top-tier university (Stanford, MIT, CMU) - state schools not competitive",
			"Experience with Python, TensorFlow/PyTorch - must be expert level",
			"Strong mathematical background - linear algebra, calculus, statistics",
			"Publications in top ML conferences or significant open-source contributions",
			"Must pass 6-hour rigorous technical interviews - 90% fail rate",
			"Willingness to work 50+ hour weeks, on-call, weekends",
			"Must relocate to Bay Area - no remote option",
			"Must accept that most applicants are rejected"
		],
		postedDate: "January 15, 2020",
		era: "digital",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 25,
			maxAge: 45,
			education: 'graduate',
			experience: 'experienced',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "ai-2",
		title: "AI Prompt Engineer - Contract, No Benefits",
		company: "OpenAI",
		location: "San Francisco, California",
		type: "Contract",
		salary: "$80-120/hour (1099, no benefits)",
		description: "Design and optimize prompts for large language models. Test and improve AI system performance. Contract position - no health insurance, no paid time off, no job security. Must have 2+ years experience with LLMs. Remote work available but must be available during Pacific Time business hours.",
		requirements: [
			"2+ years experience with LLMs (GPT, Claude, etc.)",
			"Strong writing and communication skills",
			"Understanding of AI/ML fundamentals",
			"Portfolio of prompt engineering work",
			"Must be available as independent contractor",
			"No benefits, no job security",
			"Must work as 1099 contractor"
		],
		postedDate: "March 8, 2024",
		era: "digital",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 22,
			maxAge: 50,
			education: 'college',
			experience: 'some',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "ai-3",
		title: "AI Ethics Researcher - PhD Required",
		company: "Stanford HAI",
		location: "Stanford, California",
		type: "Full-time",
		salary: "$120,000 - $160,000",
		description: "Research the societal impacts of AI systems. Study job displacement, bias, and ethical implications. Must have PhD from prestigious institution. Publish research papers. Help shape AI policy and regulation. Must have strong publication record in top-tier journals.",
		requirements: [
			"PhD from top-tier institution required",
			"Research experience in AI ethics",
			"Strong publication record in top journals",
			"Interdisciplinary background preferred",
			"Must have academic references",
			"Postdoc experience preferred",
			"No candidates without PhD will be considered"
		],
		postedDate: "November 20, 2023",
		era: "digital",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 28,
			maxAge: 50,
			education: 'graduate',
			experience: 'experienced',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "ai-4",
		title: "AI Product Manager - Startup Experience Required",
		company: "Anthropic",
		location: "San Francisco, California",
		type: "Full-time",
		salary: "$160,000 - $220,000",
		description: "Lead product development for AI-powered tools. Define product strategy and roadmap. Must have startup experience and technical background. Work with engineering and research teams. Must be willing to work 60+ hour weeks. Stock options available. Age 25-40 preferred.",
		requirements: [
			"5+ years product management experience",
			"Startup experience required",
			"Technical background preferred (CS degree or equivalent)",
			"Experience with AI/ML products",
			"Age 25-40 preferred",
			"Must be willing to work 60+ hour weeks",
			"Strong analytical and communication skills"
		],
		postedDate: "February 14, 2025",
		era: "digital",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 25,
			maxAge: 40,
			education: 'college',
			experience: 'experienced',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "ai-5",
		title: "Content Moderator - Remote, Low Pay",
		company: "AI Training Corp",
		location: "Remote",
		type: "Full-time",
		salary: "$15-18 per hour",
		description: "Review and label content for AI training. Free labor - this is 'unskilled' work that anyone can do, so we pay minimum wage. Will be exposed to worst content on internet. Daily duties: Log in at 8 AM from your home (no office, you're isolated). Review 500+ images/videos per day. See child abuse, extreme violence, hate speech, sexual assault - the worst humanity has to offer. Label each piece of content - 'violence,' 'hate speech,' 'explicit.' Your job is to train AI by showing it what's bad - but you see it all. Take 15-minute break every 2 hours - but you can't unsee what you've seen. Work 8-hour shifts - by hour 4, you're numb, dissociating. Many moderators develop PTSD, depression, anxiety - company provides 'wellness resources' (a phone number to call). No benefits for first 6 months - if you quit before then, you get nothing. Must sign NDA - can't talk about what you see, can't get therapy covered. High turnover - most people quit within 3 months. But you need the money, so you keep going. $15-18 per hour to destroy your mental health - this is the human cost of AI training.",
		requirements: [
			"Must be 18 or older",
			"High school diploma - no education required, anyone can do this",
			"Ability to work with extremely disturbing content - violence, abuse, hate",
			"Must pass psychological screening - but they'll hire anyone",
			"Must sign NDA and liability waiver - can't sue for psychological damage",
			"Willingness to work 8-hour shifts reviewing 500+ disturbing images/videos daily",
			"No benefits for first 6 months - high turnover expected",
			"Must work from home - isolated, no support",
			"Acceptance that this work will damage your mental health"
		],
		postedDate: "March 1, 2024",
		era: "digital",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 18,
			maxAge: 50,
			education: 'highschool',
			experience: 'none',
			union: false,
			maritalStatus: 'any'
		}
	},
	{
		id: "ai-6",
		title: "Gig Worker - AI Training Data Collector",
		company: "Crowdsourcing Platform",
		location: "Remote",
		type: "Gig",
		salary: "$0.05-0.10 per task (no minimum wage)",
		description: "Complete micro-tasks to train AI systems. Free labor - this is 'flexible work' that requires no skills, so we pay pennies. You're not an employee - you're an 'independent contractor' so we don't have to pay minimum wage or benefits. Daily duties: Log onto platform. See hundreds of micro-tasks available. Label images - 'is this a cat or dog?' Click, click, click. Transcribe audio - listen to garbled recordings, type what you hear. Categorize data - 'is this spam or not spam?' Repeat 1000 times. Each task pays 5-10 cents. Work 8 hours to complete 200 tasks - earn $10-20. That's $2.50 per hour - less than minimum wage, but legal because you're a 'contractor.' Must meet daily quota of 200 tasks or you're 'deactivated' (fired). Work from home but you're isolated - no coworkers, no support. Platform takes 20% cut - you get 80% of the 5 cents. Many workers in developing countries do this - they're competing with you, driving prices down. No benefits, no job security, no rights. If you complain, you're banned. This is the 'gig economy' - freedom to work for poverty wages. Most workers earn $2-5 per hour - but you need the money, so you keep clicking.",
		requirements: [
			"Must be 18 or older",
			"Reliable internet connection - you pay for it",
			"Ability to work repetitive tasks for hours without breaking",
			"Must meet daily quota of 200+ tasks or be deactivated",
			"No guaranteed minimum wage - piece-rate only",
			"No benefits, no job security, no rights",
			"Must work as independent contractor - no employee protections",
			"Must accept that you'll earn less than minimum wage",
			"Competition with workers worldwide drives pay down"
		],
		postedDate: "January 10, 2024",
		era: "digital",
		filters: {
			gender: 'any',
			race: 'any',
			minAge: 18,
			maxAge: 70,
			education: 'none',
			experience: 'none',
			union: false,
			maritalStatus: 'any'
		}
	}
];

export function getJobsByEra(eraId: string): Job[] {
	const eraJobs = jobs.filter(job => job.era === eraId);
	// Sort chronologically by postedDate - most recent first
	return eraJobs.sort((a, b) => {
		// Parse dates - handle various formats
		const dateA = parseDate(a.postedDate);
		const dateB = parseDate(b.postedDate);
		return dateB.getTime() - dateA.getTime(); // Most recent first
	});
}

function parseDate(dateStr: string): Date {
	// Handle formats like "March 15, 1785", "January 15, 2020", etc.
	const months: Record<string, number> = {
		'january': 0, 'jan': 0,
		'february': 1, 'feb': 1,
		'march': 2, 'mar': 2,
		'april': 3, 'apr': 3,
		'may': 4,
		'june': 5, 'jun': 5,
		'july': 6, 'jul': 6,
		'august': 7, 'aug': 7,
		'september': 8, 'sep': 8, 'sept': 8,
		'october': 9, 'oct': 9,
		'november': 10, 'nov': 10,
		'december': 11, 'dec': 11
	};
	
	// Clean the date string
	const cleaned = dateStr.trim().toLowerCase().replace(/,/g, '');
	const parts = cleaned.split(/\s+/);
	
	if (parts.length >= 3) {
		const monthName = parts[0];
		const day = parseInt(parts[1]) || 1;
		const year = parseInt(parts[2]) || 1800;
		const month = months[monthName] ?? 0;
		
		// Create date with year, month, day
		return new Date(year, month, day);
	}
	
	// Try to parse as ISO date or other formats
	const parsed = Date.parse(dateStr);
	if (!isNaN(parsed)) {
		return new Date(parsed);
	}
	
	// Fallback: return a date based on era if we can't parse
	// This shouldn't happen with our data, but just in case
	console.warn(`Could not parse date: ${dateStr}`);
	return new Date(1800, 0, 1);
}

export function getEraById(eraId: string): Era | undefined {
	return eras.find(era => era.id === eraId);
}

