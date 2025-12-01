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
	// Market Revolution Era (1820-1880) - Based on Lowell Mill Girls, Frederick Douglass, Tocqueville
	{
		id: "market-revolution-1",
		author: "Sarah Bagley",
		authorRole: "Lowell Mill Girl",
		content: "I came to Lowell from a New Hampshire farm, thinking I'd work a few years, save money, then return home. But the work is harder than I imagined. We work 13 hours a day, the noise of the looms is deafening, and the air is thick with cotton dust. I cough constantly. The boarding house matron watches us like hawks - curfew at 10, church on Sunday, no men visitors. But I earn $3 a week - more than I could ever earn on the farm. I'm saving to help my family pay off debts. Some say this is 'respectable' work for women, but I wonder - is it respectable to work ourselves to death?",
		timestamp: "March 20, 1845",
		era: "market-revolution",
		likes: 34,
		comments: 8,
		reactions: []
	},
	{
		id: "market-revolution-2",
		author: "Frederick Douglass",
		authorRole: "Former Slave, Abolitionist",
		content: "From my Narrative: I worked as a caulker in Baltimore, a skilled trade. My master hired me out - he received my wages, I received nothing but the privilege of working. Free white caulkers resented slave labor - it drove down their wages. But my master preferred slaves - we couldn't quit, couldn't demand better pay, couldn't organize. The distinction between free and slave labor is not just about freedom - it's about who controls the fruits of labor. Free workers can organize, can strike, can demand better conditions. Slaves cannot. This is why slave labor is preferred - it's cheaper, more controllable, and the wages go to the owner, not the worker.",
		timestamp: "1845",
		era: "market-revolution",
		likes: 89,
		comments: 23,
		reactions: []
	},
	{
		id: "market-revolution-3",
		author: "Harriet Hanson Robinson",
		authorRole: "Former Lowell Mill Girl, Writer",
		content: "From Loom and Spindle: We organized! In 1834 and 1836, we went on strike - 'turnouts' we called them. We demanded shorter hours, better pay, an end to the speed-up. The company threatened us, fired the leaders, but we stood together. We were young women, far from home, but we had each other. The strikes failed - the company had too much power. But we learned that workers must organize. The factory system treats us as machines, but we are human beings with rights and dignity.",
		timestamp: "1836",
		era: "market-revolution",
		likes: 67,
		comments: 15,
		reactions: []
	},
	{
		id: "market-revolution-4",
		author: "Alexis de Tocqueville",
		authorRole: "French Observer (quoted)",
		content: "From Democracy in America (1835): 'In America, I saw that the manufacturing industry... creates an aristocracy... The master and the workman have here no similarity, and their differences increase every day. The one is in a constant state of dependence and servitude.' The factory system creates new forms of inequality - not the old aristocracy of birth, but a new aristocracy of capital. The worker is dependent on the employer, has no property, no security. This is the price of progress.",
		timestamp: "1835 (quoted)",
		era: "market-revolution",
		likes: 45,
		comments: 12,
		reactions: []
	},
	{
		id: "market-revolution-5",
		author: "William Heighton",
		authorRole: "Labor Organizer, Philadelphia",
		content: "From The Mechanics' Free Press: Artisans! The factory system is destroying our trade. Master craftsmen become factory owners, journeymen become wage workers, apprentices become factory hands. We lose our independence, our skill, our dignity. We must organize! Join the Mechanics' Union! We demand shorter hours, better wages, the right to organize. The factory owners have capital, but we have numbers. Together, we can resist the degradation of our craft.",
		timestamp: "1828",
		era: "market-revolution",
		likes: 78,
		comments: 19,
		reactions: []
	},
	{
		id: "market-revolution-6",
		author: "Mary Paul",
		authorRole: "Lowell Mill Girl",
		content: "Letter to my father: 'I am well and contented. I work in the mill, and though it is hard work, I am used to it. I earn $3.25 a week, and after paying for board, I have $1.25 left. I am saving to help pay off the farm mortgage. The boarding house is clean, the food is good, and I have made friends. But I miss home. The work is monotonous - the same motion, hour after hour, day after day. I wonder if this is what my life will be - a machine, not a person.'",
		timestamp: "November 20, 1845",
		era: "market-revolution",
		likes: 56,
		comments: 11,
		reactions: []
	},
	{
		id: "market-revolution-7",
		author: "Solomon Northup",
		authorRole: "Free Black Man, Enslaved (quoted)",
		content: "From Twelve Years a Slave: I was a free man, a skilled carpenter, earning good wages in New York. Then I was kidnapped, sold into slavery. In Louisiana, I worked as a slave carpenter - skilled work, but I received nothing. My master hired me out, kept all my wages. Free white carpenters resented me - slave labor drove down their wages. But I was property, not a person. I had no rights, no freedom, no pay. The distinction between free and slave labor is not just about freedom - it's about who owns your body, your time, your labor.",
		timestamp: "1853 (quoted)",
		era: "market-revolution",
		likes: 112,
		comments: 28,
		reactions: []
	},
	{
		id: "market-revolution-8",
		author: "Anonymous Free Black Worker",
		authorRole: "Dock Laborer, Philadelphia",
		content: "I'm free, but I'm not equal. White workers get $1.50 a day for dock work, I get $1.00. White workers get steady work, I get what's left over. The carpenters' union won't admit me - 'colored men need not apply.' The blacksmiths won't train me - 'we don't train colored apprentices.' So I'm stuck with the worst work, lowest pay. I'm free, but what does freedom mean when you can't get a fair wage, can't learn a trade, can't advance? I work harder than white workers, but I'm paid less, treated worse. This is what freedom means for colored men - the right to work for less.",
		timestamp: "1852",
		era: "market-revolution",
		likes: 67,
		comments: 18,
		reactions: []
	},
	{
		id: "market-revolution-9",
		author: "Irish Immigrant Worker",
		authorRole: "Canal Digger",
		content: "Tháinig muid ó Éirinn agus muid ag fáil bháis den ocras, ag smaoineamh gur tír na deiseanna Meiriceá. Ina áit sin fuair muid tochailt chanáil - obair chrua, 12 uair sa lá, $1 sa lá. Cónaímid i gcábáin, itheann muid bia bocht, faighimid bás ó ghalar. Tá an obair contúirteach - titim isteach, pléascanna, timpistí. Faigheann go leor againn bás. Ach cén rogha atá againn? Ní féidir linn dul ar ais go hÉirinn - níl aon rud ann ach ocras. Ní féidir linn obair níos fearr a fháil - ní fhostóidh oibrithe dúchais muid, deir siad go gcuireann muid tuarastail síos. Mar sin tochailimid canálacha, tógaimid iarnróid, déanaimid an obair nach ndéanann aon duine eile. Táimid saor, ach níl muid saor.",
		timestamp: "1840",
		era: "market-revolution",
		likes: 89,
		comments: 22,
		reactions: [],
		translation: "We came from Ireland starving, thinking America was the land of opportunity. Instead we found canal digging - backbreaking work, 12 hours a day, $1 a day. We live in shanties, eat poor food, die from disease. The work is dangerous - cave-ins, explosions, accidents. Many of us die. But what choice do we have? We can't go back to Ireland - there's nothing there but starvation. We can't get better work - native workers won't hire us, say we drive down wages. So we dig canals, build railroads, do the work no one else will do. We're free, but we're not free.",
		language: "ga"
	},
	{
		id: "market-revolution-10",
		author: "Former Artisan",
		authorRole: "Shoemaker Turned Factory Worker",
		content: "I was a master shoemaker - had my own shop, my own tools, my own customers. Made good shoes, earned good wages, had respect. Then factories started making shoes - cheaper, faster, not as good, but cheaper. My customers left, I couldn't compete. Lost my shop, lost my tools, lost everything. Now I work in a factory - same work, but I'm a wage worker, not a craftsman. I work for someone else, get paid by the hour, have no control. The factory owner makes the profit, I get a wage. I lost my independence, my skill, my dignity. This is progress?",
		timestamp: "1855",
		era: "market-revolution",
		likes: 112,
		comments: 34,
		reactions: []
	},
	{
		id: "market-revolution-11",
		author: "Child Worker",
		authorRole: "Mill Worker, Age 12",
		content: "I've been working in the mill since I was 10. My family needed the money - father lost his farm, we moved to the city. I work 12 hours a day, same as the adults, but I get paid less. The machines are dangerous - I've seen children lose fingers, get caught in machinery. The foreman yells at us, hits us if we're slow. I'm always tired, always hungry. I can't go to school - we need the money. I'll work here until I'm too old or too broken, then what? This is my life - work, sleep, work again. I'm 12 years old, but I feel 50.",
		timestamp: "1840",
		era: "market-revolution",
		likes: 45,
		comments: 12,
		reactions: []
	},
	{
		id: "market-revolution-12",
		author: "German Immigrant",
		authorRole: "Brewer, Milwaukee",
		content: "Wir kamen aus Deutschland mit Fähigkeiten - Brauen, Tischlerei, Landwirtschaft. In Deutschland war ich ein angesehener Brauer. Hier bin ich nur ein weiterer Einwanderer. Ich habe eine kleine Brauerei eröffnet, aber es ist schwer - Konkurrenz mit etablierten Brauern, Umgang mit Nativisten, die Deutsche hassen. Wir arbeiten hart, sparen Geld, versuchen etwas aufzubauen. Aber wir sehen uns Diskriminierung ausgesetzt - 'Ausländer' nehmen Jobs, drücken Löhne. Wir nehmen keine Jobs - wir schaffen sie. Wir drücken keine Löhne - wir bauen Unternehmen auf. Aber Nativisten sehen das nicht. Sie sehen Bedrohungen, keine Nachbarn.",
		timestamp: "1850",
		era: "market-revolution",
		likes: 34,
		comments: 8,
		reactions: [],
		translation: "We came from Germany with skills - brewing, carpentry, farming. In Germany, I was a respected brewer. Here, I'm just another immigrant. I opened a small brewery, but it's hard - competing with established brewers, dealing with nativists who hate Germans. We work hard, save money, try to build something. But we face discrimination - 'foreigners' taking jobs, driving down wages. We're not taking jobs - we're creating them. We're not driving down wages - we're building businesses. But nativists don't see that. They see threats, not neighbors.",
		language: "de"
	},
	{
		id: "market-revolution-14",
		author: "Chinese Railroad Worker",
		authorRole: "Railroad Construction, Sierra Nevada",
		content: "我们从中国来，以为美国是机会之地。但我们找到了铁路建设——危险的工作，每天12-14小时，每天1美元。我们住在帐篷营地里——拥挤、肮脏、疾病肆虐。食物质量很差——我们会营养不良。白人工人每天1.50美元，我们只有1.00美元。白人工人有更好的食物，更好的住房。我们得到最差的。事故不断——被岩石压碎，爆炸，坠落。如果我们受伤，我们被解雇。如果我们死了，他们雇佣另一个。中国工人被认为是可消耗的——比白人工人便宜，更绝望，更容易控制。你不会说英语？没关系，只要工作。你不能组织？好——我们不想要工会。我们被孤立，被歧视，被剥削。但这是工作，对于没有其他选择的移民来说，这比饿死要好。",
		timestamp: "1867",
		era: "market-revolution",
		likes: 78,
		comments: 19,
		reactions: [],
		translation: "We came from China, thinking America was the land of opportunity. But we found railroad construction - dangerous work, 12-14 hours a day, $1 a day. We live in tent camps - crowded, filthy, disease-ridden. Food is poor quality - we'll be malnourished. White workers get $1.50 per day, we get $1.00. White workers get better food, better housing. We get the worst. Accidents are constant - crushed by rocks, explosions, falls. If we're injured, we're fired. If we die, they hire another. Chinese workers are considered expendable - cheaper than white workers, more desperate, easier to control. You can't speak English? Doesn't matter, just work. You can't organize? Good - we don't want unions. We're isolated, discriminated against, exploited. But it's work, and for immigrants with no other options, it's better than starving.",
		language: "zh"
	},
	{
		id: "market-revolution-13",
		author: "Farm Wife",
		authorRole: "Homesteader, Frontier",
		content: "We moved west, thinking we'd have our own farm, our own land. But the work is endless. I rise before dawn, work until dark. Plant, weed, harvest, preserve, cook, clean, care for children, tend animals. My husband works the fields, but I work just as hard - the farm can't survive without my labor. But it's not recognized as 'work' - it's just what women do. We face crop failures, harsh winters, disease, isolation. Many families fail, lose everything, move on. We're free, but we're not free from work, from struggle, from hardship. This is the frontier - opportunity and exhaustion, hope and despair.",
		timestamp: "1860",
		era: "market-revolution",
		likes: 56,
		comments: 15,
		reactions: []
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "post-industrial",
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
		era: "digital",
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
		era: "digital",
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
		era: "digital",
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
		era: "digital",
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
		era: "digital",
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
		era: "digital",
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
		era: "digital",
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

export const historicalEvents: HistoricalEvent[] = [
	// Agrarian Era
	{
		id: "agrarian-1",
		title: "Declaration of Independence",
		date: "July 4, 1776",
		description: "The Continental Congress adopts the Declaration of Independence, establishing the United States as a new nation. This momentous event shapes the American identity and the concept of free labor versus servitude.",
		era: "agrarian"
	},
	{
		id: "agrarian-2",
		title: "American Revolutionary War",
		date: "1775-1783",
		description: "The war for independence disrupts agricultural production and trade. Many farmers serve as soldiers, while women and enslaved people maintain farms. The war establishes the foundation for American economic independence.",
		era: "agrarian"
	},
	{
		id: "agrarian-3",
		title: "Northwest Ordinance",
		date: "1787",
		description: "Establishes the process for admitting new states and prohibits slavery in the Northwest Territory. This sets precedents for westward expansion and the future of labor in new territories.",
		era: "agrarian"
	},
	{
		id: "agrarian-4",
		title: "Cotton Gin Invention",
		date: "1793",
		description: "Eli Whitney's cotton gin revolutionizes cotton processing, making it 50 times faster. This innovation increases demand for enslaved labor in the South while reducing the need for skilled workers in cotton processing, reshaping the agricultural labor market.",
		era: "agrarian"
	},
	{
		id: "agrarian-5",
		title: "Shays' Rebellion",
		date: "1786-1787",
		description: "Massachusetts farmers, burdened by debt and taxes, rebel against the state government. The uprising highlights the economic struggles of agricultural workers and the tension between debtors and creditors in the new nation.",
		era: "agrarian"
	},
	// Market Revolution Era (1820-1880)
	{
		id: "market-revolution-1",
		title: "Lowell Mill System Established",
		date: "1823",
		description: "The Boston Manufacturing Company establishes the Lowell mill system, creating the first large-scale factory in America. The system employs young women from New England farms, housing them in company boarding houses with strict moral codes. This marks the beginning of the factory system and the transformation of work from household production to wage labor.",
		era: "market-revolution"
	},
	{
		id: "market-revolution-2",
		title: "Lowell Mill Girls Strike",
		date: "1834",
		description: "Hundreds of Lowell mill workers stage the first major strike by women workers in American history. They protest wage cuts and increased work speed, organizing a 'turnout' that shuts down the mills. Though the strike fails, it demonstrates that women workers can organize and resist exploitation, setting precedents for future labor organizing.",
		era: "market-revolution"
	},
	{
		id: "market-revolution-3",
		title: "Panic of 1837",
		date: "1837",
		description: "A severe economic depression devastates workers across America. Artisans lose their workshops, wage workers lose their jobs, and unemployment soars. The panic accelerates the transition from independent artisan production to dependent wage labor, as workers desperate for income accept factory jobs at lower wages.",
		era: "market-revolution"
	},
	{
		id: "market-revolution-4",
		title: "Ten-Hour Movement",
		date: "1840s",
		description: "Workers organize to demand a ten-hour workday, challenging the standard 12-14 hour factory day. The movement spreads across New England, with workers petitioning state legislatures and organizing strikes. While largely unsuccessful, the movement establishes the principle that workers have the right to limit working hours and organize for better conditions.",
		era: "market-revolution"
	},
	{
		id: "market-revolution-5",
		title: "Irish Famine Migration",
		date: "1845-1855",
		description: "The Great Famine drives over a million Irish immigrants to America, many arriving destitute and desperate for work. They fill the lowest-paying jobs: domestic service, construction, factory work. Irish workers face discrimination and are used as cheap labor, driving down wages and creating tensions with native-born workers. Their presence transforms the American labor force.",
		era: "market-revolution"
	},
	{
		id: "market-revolution-6",
		title: "Fugitive Slave Act",
		date: "1850",
		description: "The Fugitive Slave Act requires all citizens to assist in capturing escaped slaves, even in free states. The law intensifies the conflict between free and slave labor, as free workers see slave labor as a threat to their wages and rights. The act makes clear that the distinction between free and slave labor is fundamental to American society.",
		era: "market-revolution"
	},
	{
		id: "market-revolution-7",
		title: "Civil War",
		date: "1861-1865",
		description: "The Civil War transforms American labor. In the North, the war accelerates industrialization as factories produce war materiel. Women enter factories in large numbers. In the South, the war disrupts the slave labor system. The war's end brings emancipation, fundamentally changing the labor system and setting the stage for new forms of exploitation and organizing.",
		era: "market-revolution"
	},
	{
		id: "market-revolution-8",
		title: "Transcontinental Railroad Completed",
		date: "May 10, 1869",
		description: "The completion of the transcontinental railroad marks the triumph of industrial capitalism. Built largely by Chinese and Irish immigrant labor under brutal conditions, the railroad transforms transportation and enables the growth of national markets. The project demonstrates the power of capital to organize massive labor forces and the expendability of immigrant workers.",
		era: "market-revolution"
	},
	// Industrial Era
	{
		id: "industrial-1",
		title: "Haymarket Affair",
		date: "May 4, 1886",
		description: "A labor demonstration in Chicago turns violent when a bomb is thrown at police. The incident leads to the execution of labor leaders and becomes a symbol of the struggle for workers' rights and the eight-hour workday.",
		era: "industrial"
	},
	{
		id: "industrial-2",
		title: "Homestead Strike",
		date: "July 6, 1892",
		description: "A violent labor dispute at Carnegie Steel's Homestead plant. Pinkerton detectives and strikers clash, resulting in deaths. The strike's failure demonstrates the power of corporations and the challenges facing organized labor.",
		era: "industrial"
	},
	{
		id: "industrial-3",
		title: "Pullman Strike",
		date: "May-July 1894",
		description: "A nationwide railroad strike led by the American Railway Union. President Cleveland sends federal troops to break the strike, marking a turning point in federal intervention in labor disputes and the power of unions.",
		era: "industrial"
	},
	{
		id: "industrial-4",
		title: "Publication of The Jungle",
		date: "1906",
		description: "Upton Sinclair's novel exposes the horrific conditions in Chicago's meatpacking industry. The public outcry leads to the Pure Food and Drug Act and Meat Inspection Act, though working conditions remain largely unchanged.",
		era: "industrial"
	},
	{
		id: "industrial-5",
		title: "Great Railroad Strike",
		date: "July 1877",
		description: "The first nationwide strike in U.S. history spreads across railroads after companies cut wages. Federal troops are called in to suppress the strike, resulting in over 100 deaths. This marks the beginning of large-scale labor organizing and federal intervention in labor disputes.",
		era: "industrial"
	},
	{
		id: "industrial-6",
		title: "Bessemer Process Revolutionizes Steel",
		date: "1850s-1860s",
		description: "The Bessemer process makes steel production faster and cheaper, fueling industrial expansion. This innovation creates thousands of new factory jobs while making older ironworking skills obsolete, forcing workers to adapt to new industrial methods.",
		era: "industrial"
	},
	{
		id: "industrial-7",
		title: "Triangle Shirtwaist Factory Fire",
		date: "March 25, 1911",
		description: "A fire at a New York garment factory kills 146 workers, mostly young immigrant women. Locked exit doors and inadequate fire escapes expose dangerous working conditions. The tragedy galvanizes the labor movement and leads to new workplace safety regulations.",
		era: "industrial"
	},
	{
		id: "industrial-8",
		title: "Ludlow Massacre",
		date: "April 20, 1914",
		description: "Colorado National Guard attacks a tent colony of striking coal miners and their families, killing 21 people including women and children. The massacre draws national attention to the violent suppression of labor organizing and the brutal conditions in mining.",
		era: "industrial"
	},
	// Digital Era (merged Post-Industrial and Digital)
	{
		id: "automation-1",
		title: "Post-War Economic Boom",
		date: "1950s",
		description: "The post-World War II economic expansion brings prosperity to many American workers. Manufacturing jobs are plentiful, but automation begins to replace manual labor in factories. The rise of the middle class coincides with increasing mechanization.",
		era: "digital"
	},
	{
		id: "automation-2",
		title: "Interstate Highway System",
		date: "1956",
		description: "The Federal-Aid Highway Act creates the interstate highway system, transforming transportation and logistics. This infrastructure enables the growth of suburban manufacturing and changes how goods and workers move across the country.",
		era: "digital"
	},
	{
		id: "automation-3",
		title: "Automation in Manufacturing",
		date: "1960s",
		description: "Automated machinery becomes widespread in factories. Workers must adapt to operating and maintaining machines rather than performing manual tasks. This shift creates new skilled jobs while eliminating many unskilled positions.",
		era: "digital"
	},
	{
		id: "automation-4",
		title: "United Auto Workers Strike",
		date: "1945-1946",
		description: "The UAW launches a massive strike against General Motors, demanding wage increases after wartime wage freezes. The 113-day strike results in a 17.5% wage increase and sets a pattern for post-war labor relations, establishing the power of industrial unions.",
		era: "digital"
	},
	{
		id: "automation-5",
		title: "Numerical Control Machines",
		date: "1952",
		description: "MIT develops the first numerically controlled machine tool, allowing machines to be programmed rather than manually operated. This innovation begins the transition from skilled machinists to machine operators and programmers, fundamentally changing manufacturing work.",
		era: "digital"
	},
	{
		id: "automation-6",
		title: "Steel Strike of 1959",
		date: "July-November 1959",
		description: "A 116-day strike by the United Steelworkers shuts down the American steel industry. The strike focuses on job security and work rules as automation threatens to eliminate positions. The settlement includes protections against automation-related layoffs.",
		era: "digital"
	},
	{
		id: "automation-7",
		title: "Robotic Assembly Lines",
		date: "1961",
		description: "General Motors installs the first industrial robot, the Unimate, at a New Jersey plant. This marks the beginning of robotic automation in manufacturing, creating new maintenance and programming jobs while reducing the need for assembly line workers.",
		era: "digital"
	},
	// Digital Computing Era
	{
		id: "digital-1",
		title: "Apollo 11 Moon Landing",
		date: "July 20, 1969",
		description: "The successful moon landing showcases the power of computing and software engineering. The mission relied on computers and programming, demonstrating that software could accomplish previously impossible tasks and creating new career paths.",
		era: "digital"
	},
	{
		id: "digital-2",
		title: "Personal Computer Revolution",
		date: "1970s-1980s",
		description: "The introduction of personal computers transforms work and creates new industries. Software development becomes a viable career path, though women who were early programmers face increasing exclusion as the field becomes more prestigious.",
		era: "digital"
	},
	{
		id: "digital-3",
		title: "Telephone Operators Transition",
		date: "1970s-1980s",
		description: "Automated switching systems eliminate most telephone operator jobs. Many women operators transition to programming and data entry roles, representing one of the largest workforce transitions in American history.",
		era: "digital"
	},
	{
		id: "digital-4",
		title: "AT&T Strike",
		date: "1983",
		description: "675,000 AT&T workers strike for 22 days over job security concerns as the company prepares for divestiture. The strike highlights worker anxiety about technological change and corporate restructuring in the telecommunications industry.",
		era: "digital"
	},
	{
		id: "digital-5",
		title: "Word Processor Revolution",
		date: "1970s",
		description: "Word processing machines replace typewriters in offices, eliminating many typist positions while creating new roles for word processor operators. This technology shift disproportionately affects women office workers and reshapes secretarial work.",
		era: "digital"
	},
	{
		id: "digital-6",
		title: "IBM PC Launch",
		date: "August 1981",
		description: "IBM introduces the personal computer, making computing accessible to businesses and individuals. This creates massive demand for software developers and technical support workers while reducing the need for traditional data processing clerks.",
		era: "digital"
	},
	{
		id: "digital-7",
		title: "Printers' Strike",
		date: "1983",
		description: "Newspaper printers strike against automation that threatens their jobs. The conflict represents a broader struggle as computer typesetting replaces traditional printing skills, forcing workers to adapt or face unemployment.",
		era: "digital"
	},
	// AI Era
	{
		id: "ai-1",
		title: "Rise of the Internet",
		date: "1990s-2000s",
		description: "The World Wide Web creates entirely new industries and transforms existing ones. E-commerce, digital services, and remote work become possible, fundamentally changing where and how people work.",
		era: "ai"
	},
	{
		id: "ai-2",
		title: "Financial Crisis",
		date: "2008",
		description: "The Great Recession leads to massive job losses and economic uncertainty. Many workers face long-term unemployment, while others pivot to new careers in technology and services. The crisis accelerates automation as companies seek efficiency.",
		era: "ai"
	},
	{
		id: "ai-3",
		title: "ChatGPT and AI Tools",
		date: "2022-2024",
		description: "The release of ChatGPT and similar AI tools sparks widespread discussion about automation in knowledge work. Writers, coders, and other professionals grapple with how AI will change their work, echoing concerns from previous automation waves.",
		era: "ai"
	},
	{
		id: "ai-4",
		title: "Writers Guild Strike",
		date: "2023",
		description: "Hollywood writers strike for 148 days, demanding protections against AI replacing their work. The strike results in restrictions on AI-generated scripts and establishes that AI cannot replace human writers, setting precedents for other creative industries.",
		era: "ai"
	},
	{
		id: "ai-5",
		title: "Amazon Warehouse Automation",
		date: "2010s-2020s",
		description: "Amazon introduces Kiva robots and automated fulfillment systems, reducing the need for human warehouse workers while creating new roles for robot maintenance technicians. This represents the largest-scale automation of logistics work in history.",
		era: "ai"
	},
	{
		id: "ai-6",
		title: "Uber/Lyft Driver Protests",
		date: "2019-2024",
		description: "Ride-share drivers organize strikes and protests demanding better pay, benefits, and job security. The gig economy model challenges traditional employment relationships, sparking debates about worker classification and the future of work.",
		era: "ai"
	},
	{
		id: "ai-7",
		title: "AI Code Generation Tools",
		date: "2021-2024",
		description: "GitHub Copilot and similar AI coding assistants become widespread, raising questions about the future of software development jobs. Some developers embrace the tools as productivity enhancers, while others fear displacement of entry-level programming work.",
		era: "ai"
	},
	{
		id: "ai-8",
		title: "Starbucks Unionization Wave",
		date: "2021-2024",
		description: "Hundreds of Starbucks locations unionize, representing one of the largest organizing drives in service sector history. Workers demand better wages, scheduling, and working conditions, challenging the company's anti-union stance and inspiring other service workers.",
		era: "ai"
	}
];

export function getHistoricalEventsByEra(eraId: string): HistoricalEvent[] {
	return historicalEvents
		.filter(event => event.era === eraId)
		.sort((a, b) => {
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

