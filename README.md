# Made in America

A LinkedIn/Indeed-style job board showcasing work opportunities across five distinct eras of American history. This educational project explores how work, wages, and workplace conditions have evolved from colonial times to the modern AI era.

**Made in America** - Where every job tells a story of American work.

## Features

- **Five Historical Eras**: Browse job listings from different periods of American work history
- **Modern UI**: Clean, professional interface inspired by LinkedIn and Indeed
- **Era-Specific Context**: Each era includes historical context and primary sources
- **Detailed Job Listings**: Full job descriptions, requirements, and era-appropriate details

## Historical Eras

1. **Agrarian / Colonial Era (1760–1820)**
   - Pre-industrial farming in rural America
   - Primary sources: Crèvecœur's Letters from an American Farmer, John & Abigail Adams letters

2. **Industrial Era (1880–1910)**
   - Rapid industrialization, urban factories, meatpacking, and labor unrest
   - Primary sources: Upton Sinclair's The Jungle, 1906 U.S. House Report on Chicago Stockyards

3. **Early Automation / Mid-20th Century (1950–1970)**
   - Rise of industrial machinery and automated equipment
   - Primary sources: Oral histories of Texas oil technicians, Bureau of Labor Statistics bulletins

4. **Digital Computing / Early Tech Era (1970–1995)**
   - Women in computing, early software development
   - Primary sources: Historical studies of women in tech, Hidden Figures

5. **AI / Modern Software Era (2000–2025)**
   - AI, agentic tools, automation in knowledge work
   - Primary sources: H. David Autor's "Why Are There Still So Many Jobs?", Norbert Wiener's The Human Use of Human Beings

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

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/ # Reusable components
│   │   ├── JobCard.astro
│   │   └── JobDetail.astro
│   ├── data/       # Job and era data
│   │   └── jobs.ts
│   ├── layouts/    # Page layouts
│   │   └── Layout.astro
│   ├── pages/      # Route pages
│   │   ├── index.astro
│   │   └── [era]/
│   │       ├── index.astro
│   │       └── [jobId].astro
│   └── styles/     # Global styles
│       └── global.css
└── package.json
```

## Routes

- `/` - Homepage with era selection
- `/[era]` - Job listings for a specific era (e.g., `/agrarian`, `/industrial`)
- `/[era]/[jobId]` - Individual job detail page

## Technologies

- [Astro](https://astro.build) - Web framework
- TypeScript - Type safety
- CSS - Styling

## License

Educational project for exploring American work history.
