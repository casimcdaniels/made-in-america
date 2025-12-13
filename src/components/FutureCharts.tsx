import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	ScatterChart,
	Scatter,
	Cell,
	PieChart,
	Pie,
	Line,
	LineChart,
	ComposedChart,
} from 'recharts';

interface AutomationData {
	category: string;
	risk: number;
	jobs: number;
	medianWage?: number;
	educationLevel?: number;
}

interface FutureChartsProps {
	automationData: AutomationData[];
}

// Muted color palette matching site theme
const BAR_COLORS = [
	'#8b4a4a', // Muted red-brown
	'#4a5568', // Dark blue-gray
	'#b85c5c', // Lighter red-brown
	'#6b7280', // Medium gray-blue
	'#8b7355', // Brown
	'#5a4a3a', // Dark brown
	'#8b4a4a', // Muted red-brown
	'#4a5568', // Dark blue-gray
	'#8b4a4a', // Muted red-brown
	'#4a5568', // Dark blue-gray
	'#8b4a4a', // Muted red-brown
];

// Color function for scatter plots based on risk level (muted theme)
const getRiskColor = (risk: number): string => {
	if (risk >= 70) return '#8b4a4a'; // High risk - muted red-brown
	if (risk >= 50) return '#b85c5c'; // Medium-high risk - lighter red-brown
	if (risk >= 30) return '#6b7280'; // Medium risk - gray-blue
	return '#4a5568'; // Low risk - dark blue-gray
};

// Calculate linear regression for trend line (with risk on Y-axis)
function calculateTrendLine(data: Array<{ risk: number; wage?: number; education?: number }>, xKey: 'wage' | 'education'): Array<{ [key: string]: number }> {
	const n = data.length;
	const sumX = data.reduce((sum, d) => sum + (d[xKey] || 0), 0);
	const sumY = data.reduce((sum, d) => sum + d.risk, 0);
	const sumXY = data.reduce((sum, d) => sum + (d[xKey] || 0) * d.risk, 0);
	const sumXX = data.reduce((sum, d) => sum + (d[xKey] || 0) * (d[xKey] || 0), 0);
	
	const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
	const intercept = (sumY - slope * sumX) / n;
	
	const minX = Math.min(...data.map(d => d[xKey] || 0));
	const maxX = Math.max(...data.map(d => d[xKey] || 0));
	
	const result: Array<{ [key: string]: number }> = [
		{ [xKey]: minX, trend: slope * minX + intercept },
		{ [xKey]: maxX, trend: slope * maxX + intercept },
	];
	return result;
}

export default function FutureCharts({ automationData }: FutureChartsProps) {
	// Prepare data for bar chart (sorted by risk)
	const barChartData = [...automationData]
		.sort((a, b) => b.risk - a.risk)
		.map((item) => ({
			name: item.category,
			risk: Math.round(item.risk * 100),
			jobs: item.jobs / 1000000, // Convert to millions
		}));

	// Prepare data for scatter plot (risk vs wages)
	// Using estimated median wages based on typical ranges for these categories
	const scatterWageData = automationData.map((item) => {
		const risk = item.risk * 100;
		return {
			x: risk,
			y: item.medianWage || estimateMedianWage(item.category),
			risk: risk,
			wage: item.medianWage || estimateMedianWage(item.category),
			category: item.category,
		};
	});

	// Prepare data for scatter plot (risk vs education)
	const scatterEducationData = automationData.map((item) => {
		const risk = item.risk * 100;
		return {
			x: risk,
			y: item.educationLevel || estimateEducationLevel(item.category),
			risk: risk,
			education: item.educationLevel || estimateEducationLevel(item.category),
			category: item.category,
		};
	});

	// Calculate trend lines (with risk on Y-axis, wage/education on X-axis)
	const wageTrendLine = calculateTrendLine(scatterWageData, 'wage');
	const educationTrendLine = calculateTrendLine(scatterEducationData, 'education');

	// Prepare pie chart data (jobs at risk vs safe)
	const totalJobs = automationData.reduce((sum, item) => sum + item.jobs, 0);
	const jobsAtRisk = automationData.reduce(
		(sum, item) => sum + item.jobs * item.risk,
		0
	);
	const jobsSafe = totalJobs - jobsAtRisk;

	const pieData = [
		{ name: 'Jobs at Risk', value: Math.round(jobsAtRisk / 1000000), fill: '#8b4a4a' },
		{ name: 'Jobs Safe', value: Math.round(jobsSafe / 1000000), fill: '#4a5568' },
	];

	return (
		<div className="future-charts">
			<div className="chart-wrapper">
				<h3>Automation Risk by Occupation Category</h3>
				<ResponsiveContainer width="100%" height={400}>
					<BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
						<CartesianGrid strokeDasharray="3 3" stroke="#d4c4a8" />
						<XAxis
							dataKey="name"
							angle={-45}
							textAnchor="end"
							height={100}
							tick={{ fill: '#2c2416', fontSize: 12 }}
						/>
						<YAxis
							label={{ value: 'Risk (%)', angle: -90, position: 'insideLeft', fill: '#2c2416' }}
							tick={{ fill: '#2c2416' }}
						/>
						<Tooltip
							contentStyle={{
								backgroundColor: '#fefcf8',
								border: '2px solid #8b7355',
								borderRadius: '4px',
								color: '#2c2416',
							}}
							formatter={(value: number) => [`${value}%`, 'Automation Risk']}
						/>
						<Bar dataKey="risk" fill="#8b4a4a" radius={[4, 4, 0, 0]}>
							{barChartData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={BAR_COLORS[index % BAR_COLORS.length]} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>

			<div className="chart-wrapper">
				<h3>Correlation: Automation Risk vs. Median Wages</h3>
				<p className="chart-description">
					Lower-wage jobs show higher automation risk, highlighting the economic vulnerability of workers in routine occupations.
				</p>
				<ResponsiveContainer width="100%" height={400}>
					<ComposedChart margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
						<CartesianGrid strokeDasharray="3 3" stroke="#d4c4a8" />
						<XAxis
							type="number"
							dataKey="wage"
							name="Median Wage"
							unit="$"
							domain={[0, 'dataMax + 10000']}
							label={{ value: 'Median Annual Wage ($)', position: 'bottom', offset: 10, fill: '#2c2416', style: { textAnchor: 'middle' } }}
							tick={{ fill: '#2c2416' }}
							tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
						/>
						<YAxis
							type="number"
							dataKey="risk"
							name="Automation Risk"
							unit="%"
							domain={[0, 100]}
							label={{ value: 'Automation Risk (%)', angle: -90, position: 'left', offset: 10, fill: '#2c2416', style: { textAnchor: 'middle' } }}
							tick={{ fill: '#2c2416' }}
						/>
						<Tooltip
							cursor={{ strokeDasharray: '3 3' }}
							contentStyle={{
								backgroundColor: '#fefcf8',
								border: '2px solid #8b7355',
								borderRadius: '4px',
								color: '#2c2416',
							}}
							formatter={(value: any, name: string, props: any) => {
								if (name === 'wage') {
									return [`$${Number(value).toLocaleString()}`, 'Median Wage'];
								}
								if (name === 'risk') {
									return [`${Number(value).toFixed(1)}%`, 'Automation Risk'];
								}
								return null;
							}}
							labelFormatter={(label, payload) => {
								if (payload && payload[0] && payload[0].payload) {
									return payload[0].payload.category || label;
								}
								return label;
							}}
						/>
						<Scatter 
							name="Jobs" 
							data={scatterWageData} 
							fill="#8b4a4a" 
							shape={(props: any) => {
								const { cx, cy, payload } = props;
								return (
									<g>
										<circle cx={cx} cy={cy} r={6} fill="#8b4a4a" stroke="#fefcf8" strokeWidth={2} />
										<text 
											x={cx} 
											y={cy - 10} 
											textAnchor="middle" 
											fill="#2c2416" 
											fontSize="10" 
											fontFamily="'Newsreader', serif"
											fontWeight="500"
										>
											{payload.category}
										</text>
									</g>
								);
							}}
						/>
						<Line 
							type="linear" 
							dataKey="trend" 
							data={wageTrendLine} 
							stroke="#4a5568" 
							strokeWidth={2} 
							strokeDasharray="5 5"
							dot={false}
							legendType="none"
							connectNulls={false}
							yAxisId={0}
							xAxisId={0}
						/>
					</ComposedChart>
				</ResponsiveContainer>
			</div>

			<div className="chart-wrapper">
				<h3>Correlation: Automation Risk vs. Educational Attainment</h3>
				<p className="chart-description">
					Jobs requiring higher education levels are less susceptible to automation, emphasizing the importance of skills development.
				</p>
				<ResponsiveContainer width="100%" height={400}>
					<ComposedChart margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
						<CartesianGrid strokeDasharray="3 3" stroke="#d4c4a8" />
						<XAxis
							type="number"
							dataKey="education"
							name="Education Level"
							unit="%"
							domain={[0, 100]}
							label={{ value: '% with Bachelor\'s Degree or Higher', position: 'bottom', offset: 10, fill: '#2c2416', style: { textAnchor: 'middle' } }}
							tick={{ fill: '#2c2416' }}
						/>
						<YAxis
							type="number"
							dataKey="risk"
							name="Automation Risk"
							unit="%"
							domain={[0, 100]}
							label={{ value: 'Automation Risk (%)', angle: -90, position: 'left', offset: 10, fill: '#2c2416', style: { textAnchor: 'middle' } }}
							tick={{ fill: '#2c2416' }}
						/>
						<Tooltip
							cursor={{ strokeDasharray: '3 3' }}
							contentStyle={{
								backgroundColor: '#fefcf8',
								border: '2px solid #8b7355',
								borderRadius: '4px',
								color: '#2c2416',
							}}
							formatter={(value: any, name: string, props: any) => {
								if (name === 'education') {
									return [`${Number(value).toFixed(1)}%`, 'Education Level'];
								}
								if (name === 'risk') {
									return [`${Number(value).toFixed(1)}%`, 'Automation Risk'];
								}
								return null;
							}}
							labelFormatter={(label, payload) => {
								if (payload && payload[0] && payload[0].payload) {
									return payload[0].payload.category || label;
								}
								return label;
							}}
						/>
						<Scatter 
							name="Jobs" 
							data={scatterEducationData} 
							fill="#8b4a4a" 
							shape={(props: any) => {
								const { cx, cy, payload } = props;
								return (
									<g>
										<circle cx={cx} cy={cy} r={6} fill="#8b4a4a" stroke="#fefcf8" strokeWidth={2} />
										<text 
											x={cx} 
											y={cy - 10} 
											textAnchor="middle" 
											fill="#2c2416" 
											fontSize="10" 
											fontFamily="'Newsreader', serif"
											fontWeight="500"
										>
											{payload.category}
										</text>
									</g>
								);
							}}
						/>
						<Line 
							type="linear" 
							dataKey="trend" 
							data={educationTrendLine} 
							stroke="#4a5568" 
							strokeWidth={2} 
							strokeDasharray="5 5"
							dot={false}
							legendType="none"
							connectNulls={false}
							yAxisId={0}
							xAxisId={0}
						/>
					</ComposedChart>
				</ResponsiveContainer>
			</div>

			<div className="chart-wrapper">
				<h3>Distribution of Jobs: At Risk vs. Safe</h3>
				<p className="chart-description">
					Nearly half of all jobs analyzed are at high risk of automation within the next decade or two.
				</p>
				<ResponsiveContainer width="100%" height={400}>
					<PieChart>
						<Pie
							data={pieData}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={({ name, value, percent }) => `${name}: ${value}M (${(percent * 100).toFixed(1)}%)`}
							outerRadius={120}
							fill="#8884d8"
							dataKey="value"
						>
							{pieData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.fill} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: '#fefcf8',
								border: '2px solid #8b7355',
								borderRadius: '4px',
								color: '#2c2416',
							}}
							formatter={(value: number) => [`${value}M jobs`, '']}
						/>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

// Helper functions to estimate data points based on typical industry patterns
function estimateMedianWage(category: string): number {
	const wageMap: Record<string, number> = {
		'Transportation & Logistics': 35000,
		'Office & Administrative': 38000,
		'Production & Manufacturing': 42000,
		'Sales & Service': 32000,
		'Food Service': 25000,
		'Construction': 45000,
		'Healthcare Support': 30000,
		'Education & Training': 55000,
		'Management': 75000,
		'Creative & Arts': 50000,
		'Engineering & Tech': 85000,
	};
	return wageMap[category] || 40000;
}

function estimateEducationLevel(category: string): number {
	const educationMap: Record<string, number> = {
		'Transportation & Logistics': 15,
		'Office & Administrative': 25,
		'Production & Manufacturing': 20,
		'Sales & Service': 30,
		'Food Service': 10,
		'Construction': 12,
		'Healthcare Support': 20,
		'Education & Training': 70,
		'Management': 60,
		'Creative & Arts': 55,
		'Engineering & Tech': 80,
	};
	return educationMap[category] || 30;
}

