# Made in America

A historical job board exploring work opportunities across American history, from colonial times to the modern digital era. This educational project showcases how work, wages, workplace conditions, and worker struggles have evolved throughout American history, presented in a vintage newspaper aesthetic.

**Made in America** - Where every job tells a story of American work.

## Features

- **Five Historical Eras**: Browse job listings from different periods of American work history
- **Vintage Newspaper Aesthetic**: Designed to look like an old American newspaper with period-appropriate typography and styling
- **Interactive Community Feed**: Read posts from historical figures, workers, and immigrants sharing their experiences
- **Historical Events Timeline**: View key events relevant to each era, including labor strikes, technological innovations, and social movements
- **Job Filtering**: Filter jobs by gender, race, age, education, experience, union membership, and marital status
- **Detailed Job Listings**: Comprehensive job descriptions with historically accurate requirements, daily duties, and discriminatory language where appropriate
- **Inflation-Adjusted Salaries**: Hover over historical salaries to see their 2025 equivalent value
- **Multilingual Posts**: Immigrant posts in their native languages (Irish, German, Chinese) with translation buttons
- **Era-Specific Context**: Each era includes historical context, primary sources, and descriptions of worker struggles

## Historical Eras

1. **Agrarian / Colonial Era (1600s–1820)**
   - Pre-industrial farming in rural America
   - Daily life centered on planting, harvesting, household labor, and local community responsibilities
   - Primary sources: Crèvecœur's Letters from an American Farmer, John & Abigail Adams letters

2. **Market Revolution Era (1820–1880)**
   - Transition from artisan to factory work, rise of wage labor, and expansion of slavery
   - The Market Revolution transforms the American economy, shifting from subsistence farming to commercial agriculture and early industrialization
   - Primary sources: Lowell Mill Girls letters, Frederick Douglass narratives, Alexis de Tocqueville's Democracy in America, Early labor organizing documents

3. **Industrial Era (1880–1970)**
   - Building on the First Industrial Revolution's foundation, the Second Industrial Revolution (1880-1914) brings steel, electricity, and mass production
   - Labor movements: Haymarket Strike (1886), Homestead Strike (1892), Pullman Strike (1894)
   - The mature industrial era (1914-1970) sees automation, assembly lines, and early computing transform manufacturing
   - Primary sources: Upton Sinclair's The Jungle, 1906 U.S. House Report on Chicago Stockyards, Oral histories of Texas oil technicians, Bureau of Labor Statistics bulletins on automation

4. **Post-Industrial Era (1970–2000)**
   - Transition to service economy, rise of computing, and early digital technologies
   - Workers transitioning from manufacturing to service and technology sectors
   - The rise of personal computing and software development transforms work
   - Primary sources: Historical studies of women in tech, Hidden Figures, Bureau of Labor Statistics on service sector growth

5. **Digital Era (2000–present)**
   - The rise of cloud computing, social media platforms, and mobile technology transforms how people work and connect
   - Gig economy platforms create new forms of precarious employment
   - AI and machine learning automate knowledge work, while social media creates new job categories
   - Remote work becomes mainstream, enabled by cloud infrastructure
   - Primary sources: H. David Autor's "Why Are There Still So Many Jobs?", Norbert Wiener's The Human Use of Human Beings, Studies on gig economy and platform work

## Key Features Explained

### Job Listings
Each job listing includes:
- Historically accurate descriptions with "brutally honest" details about working conditions
- Discriminatory language where historically appropriate (e.g., "White men only", "Colored women only", "No slaves allowed")
- Detailed daily duties and requirements
- Salary information with inflation-adjusted tooltips
- Filterable attributes (gender, race, age, education, experience, union, marital status)

### Community Feed
- Posts from historical figures, workers, and immigrants
- Chronologically sorted (most recent first)
- Immigrant posts in native languages (Irish/Gaelic, German, Chinese) with English translation buttons
- Includes testimonials from enslaved people, women, and accounts of labor strikes and riots

### Historical Events
- Key events relevant to each era
- Includes labor strikes, technological innovations, social movements, and desegregation milestones
- Chronologically sorted (most recent first)

### Job Filtering
Filter jobs by:
- Gender (male, female, any)
- Race (white, black, any)
- Age range (min/max)
- Education level
- Experience level
- Union membership
- Marital status

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to view the application.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup

1. Push your code to a GitHub repository
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to the `main` branch

### Configuration

The site is configured to deploy to `https://[username].github.io/made-in-america`. 

If you want to deploy to a custom domain or change the base path:
- Update `base` in `astro.config.mjs` (use `/` for root deployment)
- Update `site` in `astro.config.mjs` with your custom domain

### Manual Deployment

You can also manually trigger deployment from the Actions tab in your GitHub repository.

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/ # Reusable components
│   │   ├── JobCard.astro
│   │   ├── JobDetail.astro
│   │   ├── JobFeed.astro
│   │   ├── JobFilter.astro
│   │   ├── Feed.astro
│   │   ├── FeedPost.astro
│   │   └── Events.astro
│   ├── data/       # Job, era, feed, and event data
│   │   ├── jobs.ts
│   │   └── feed.ts
│   ├── layouts/    # Page layouts
│   │   └── Layout.astro
│   ├── pages/      # Route pages
│   │   ├── index.astro
│   │   └── [era]/
│   │       ├── index.astro
│   │       └── [jobId].astro
│   └── utils/      # Utility functions
│       └── inflation.ts
└── package.json
```

## Routes

- `/` - Homepage with era overview and statistics
- `/[era]` - Job listings and community feed for a specific era
  - Available eras: `/agrarian`, `/market-revolution`, `/industrial`, `/post-industrial`, `/digital`
- `/[era]/[jobId]` - Individual job detail page

## Technologies

- [Astro](https://astro.build) - Web framework for static site generation
- TypeScript - Type safety
- CSS - Vintage newspaper styling with custom fonts (Newsreader, Old Standard TT)
- [flag-icons](https://flagicons.lipis.dev/) - US flag icon

## Design Philosophy

This project aims to be historically accurate and "brutally honest" about working conditions, discrimination, and worker struggles throughout American history. Job listings include historically appropriate discriminatory language, detailed descriptions of harsh working conditions, and realistic portrayals of worker experiences. The vintage newspaper aesthetic reflects the historical periods while maintaining readability and modern web standards.

## Educational Purpose

This is an educational project designed to explore American work history through the lens of job listings and worker experiences. It includes sensitive topics such as slavery, segregation, child labor, and discrimination as they were historically present in the American workplace.

## License

Educational project for exploring American work history.
