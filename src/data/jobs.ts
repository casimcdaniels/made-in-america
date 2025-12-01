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
		id: "post-industrial",
		name: "Post-Industrial Era",
		years: "1950–1995",
		description: "Rise of industrial machinery, automated equipment, and early computing. Workers adapting to machinery and transitioning to software development",
		context: "Workers adapting to machinery that replaces manual labor, and the emergence of computing and software development",
		primarySources: ["Oral histories of Texas oil technicians", "Bureau of Labor Statistics bulletins on automation", "Historical studies of women in tech", "Hidden Figures"]
	},
	{
		id: "digital",
		name: "Digital Era",
		years: "2000–2025",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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

