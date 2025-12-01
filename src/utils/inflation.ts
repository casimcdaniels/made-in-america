/**
 * Calculate 2025 inflation-adjusted value based on historical year
 * Uses approximate CPI multipliers for different eras
 */
export function calculateInflationAdjusted(amount: number, year: number): number {
	// CPI multipliers to convert to 2025 dollars
	// Based on US Bureau of Labor Statistics CPI data (CPI base year varies, adjusted to 2025)
	// CPI 2025 estimated at ~310 (using 2024 CPI of ~308 and estimated 0.6% inflation)
	const multipliers: Record<number, number> = {
		// Agrarian Era (1760-1820) - estimated based on historical price data
		1770: 32.0,
		1780: 29.5,
		1790: 27.0,
		1800: 24.5,
		1810: 22.0,
		1820: 19.5,
		// Industrial Era (1880-1910) - CPI data available
		1880: 30.0,
		1890: 33.5,
		1900: 37.0,
		1906: 35.0,
		1910: 30.5,
		// Early Automation (1950-1970) - CPI data available
		1950: 13.0,
		1958: 11.5,
		1960: 10.5,
		1964: 9.5,
		1965: 9.2,
		1967: 8.8,
		1969: 8.2,
		1970: 8.0,
		// Digital Computing (1970-1995) - CPI data available
		1975: 6.8,
		1980: 4.2,
		1983: 3.5,
		1985: 3.1,
		1990: 2.5,
		1995: 2.2,
		// AI Era (2000-2025) - CPI data available
		2000: 1.8,
		2005: 1.6,
		2010: 1.4,
		2015: 1.3,
		2020: 1.15,
		2024: 1.01,
		2025: 1.0,
	};

	// Find exact match first
	if (multipliers[year]) {
		return Math.round(amount * multipliers[year] * 100) / 100;
	}

	// Interpolate for years between known points
	const sortedYears = Object.keys(multipliers).map(Number).sort((a, b) => a - b);
	let lowerYear: number | null = null;
	let upperYear: number | null = null;
	
	// Find the years to interpolate between
	for (let i = 0; i < sortedYears.length; i++) {
		if (sortedYears[i] <= year && (i === sortedYears.length - 1 || sortedYears[i + 1] > year)) {
			lowerYear = sortedYears[i];
			upperYear = i < sortedYears.length - 1 ? sortedYears[i + 1] : sortedYears[i];
			break;
		}
	}
	
	// If year is before first known year, use first multiplier
	if (lowerYear === null) {
		lowerYear = sortedYears[0];
		upperYear = sortedYears[0];
	}
	
	// If year is after last known year, use last multiplier
	if (year > sortedYears[sortedYears.length - 1]) {
		lowerYear = sortedYears[sortedYears.length - 1];
		upperYear = sortedYears[sortedYears.length - 1];
	}

	let multiplier: number;
	if (lowerYear === upperYear) {
		multiplier = multipliers[lowerYear] || 1.0;
	} else {
		const lowerMult = multipliers[lowerYear];
		const upperMult = multipliers[upperYear];
		const ratio = (year - lowerYear) / (upperYear - lowerYear);
		multiplier = lowerMult + (upperMult - lowerMult) * ratio;
	}

	return Math.round(amount * multiplier * 100) / 100;
}

/**
 * Parse salary string to extract dollar amount
 * Returns null if no dollar amount found
 */
export function parseSalaryAmount(salary: string): { amount: number; period: string } | null {
	// Match patterns like "$1.50 per day", "$2.00/day", "$100 per week", "$0.50-$1.00 per day", etc.
	// For ranges, use the higher amount
	const dollarMatches = salary.match(/\$(\d+(?:\.\d+)?)/g);
	if (!dollarMatches || dollarMatches.length === 0) return null;

	// Extract all dollar amounts and use the highest one (for ranges)
	const amounts = dollarMatches.map(m => parseFloat(m.replace('$', '')));
	const amount = Math.max(...amounts);
	
	// Determine period
	let period = 'per period';
	if (salary.toLowerCase().includes('per day') || salary.toLowerCase().includes('/day')) {
		period = 'per day';
	} else if (salary.toLowerCase().includes('per week') || salary.toLowerCase().includes('/week')) {
		period = 'per week';
	} else if (salary.toLowerCase().includes('per month') || salary.toLowerCase().includes('/month')) {
		period = 'per month';
	} else if (salary.toLowerCase().includes('per year') || salary.toLowerCase().includes('/year') || salary.toLowerCase().includes('annual')) {
		period = 'per year';
	} else if (salary.toLowerCase().includes('hour') || salary.toLowerCase().includes('/hr')) {
		period = 'per hour';
	}

	return { amount, period };
}

/**
 * Extract year from date string
 */
export function extractYear(dateString: string): number {
	// Try to extract 4-digit year
	const yearMatch = dateString.match(/\b(17|18|19|20)\d{2}\b/);
	if (yearMatch) {
		return parseInt(yearMatch[0]);
	}
	
	// Fallback: try to parse as date
	const parsed = new Date(dateString);
	if (!isNaN(parsed.getTime())) {
		return parsed.getFullYear();
	}
	
	// Default fallback
	return 2000;
}

/**
 * Format inflation-adjusted salary for display
 */
export function formatInflationAdjusted(amount: number, period: string): string {
	if (amount >= 1000000) {
		return `$${(amount / 1000000).toFixed(1)}M ${period}`;
	} else if (amount >= 1000) {
		return `$${(amount / 1000).toFixed(1)}K ${period}`;
	} else {
		return `$${amount.toFixed(2)} ${period}`;
	}
}

