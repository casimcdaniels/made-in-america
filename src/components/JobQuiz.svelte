<script lang="ts">
	import type { Job } from '../data/types';
	import { 
		Sprout, Palette, Settings, Users, Home, ClipboardList,
		Dumbbell, PenTool, Puzzle, Laptop, Hammer, Briefcase, 
		GraduationCap, Theater, BookOpen, TreePine, Building2, 
		Zap, Lightbulb, TrendingUp, Handshake, Rocket, Clock, 
		RefreshCw, Leaf, MapPin, PartyPopper, Check, ArrowRight, ArrowLeft, User
	} from 'lucide-svelte';

	interface Props {
		jobs: Job[];
		base: string;
	}

	let { jobs, base }: Props = $props();

	interface Answer {
		questionId: string;
		value: string | number | string[];
	}

	let currentQuestionIndex = $state(0);
	let answers = $state<Answer[]>([]);
	let matchedJob: Job | null = $state(null);
	let showResults = $state(false);

	const questions = [
		{
			id: 'race',
			text: 'What is your race or ethnicity?',
			type: 'choice',
			options: [
				{ value: 'white', label: 'White / European American', iconComponent: User },
				{ value: 'black', label: 'African American / Black', iconComponent: User },
				{ value: 'any', label: 'Other / Prefer not to say', iconComponent: User }
			]
		},
		{
			id: 'age',
			text: 'What is your age?',
			type: 'choice',
			options: [
				{ value: 'child', label: 'Child (under 18)', iconComponent: Sprout },
				{ value: 'adult', label: 'Adult (18-64)', iconComponent: User },
				{ value: 'elderly', label: 'Elderly (65+)', iconComponent: TreePine }
			]
		},
		{
			id: 'work_style',
			text: 'What kind of work environment do you prefer?',
			type: 'choice',
			options: [
				{ value: 'outdoor', label: 'Outdoor work with nature', iconComponent: Sprout },
				{ value: 'creative', label: 'Creative and artistic', iconComponent: Palette },
				{ value: 'technical', label: 'Technical and precise', iconComponent: Settings },
				{ value: 'social', label: 'Working with people', iconComponent: Users },
				{ value: 'independent', label: 'Independent and flexible', iconComponent: Home },
				{ value: 'structured', label: 'Structured and organized', iconComponent: ClipboardList }
			]
		},
		{
			id: 'skills',
			text: 'What are your strongest skills?',
			type: 'multiple',
			options: [
				{ value: 'physical', label: 'Physical strength and endurance', iconComponent: Dumbbell },
				{ value: 'communication', label: 'Communication and writing', iconComponent: PenTool },
				{ value: 'problem_solving', label: 'Problem solving', iconComponent: Puzzle },
				{ value: 'technology', label: 'Technology and computers', iconComponent: Laptop },
				{ value: 'craftsmanship', label: 'Craftsmanship and detail work', iconComponent: Hammer },
				{ value: 'management', label: 'Management and leadership', iconComponent: Briefcase },
				{ value: 'teaching', label: 'Teaching and mentoring', iconComponent: GraduationCap },
				{ value: 'artistic', label: 'Artistic and creative', iconComponent: Theater }
			]
		},
		{
			id: 'education',
			text: 'What level of education do you have?',
			type: 'choice',
			options: [
				{ value: 'none', label: 'No formal education', iconComponent: BookOpen },
				{ value: 'elementary', label: 'Elementary school', iconComponent: BookOpen },
				{ value: 'highschool', label: 'High school', iconComponent: BookOpen },
				{ value: 'college', label: 'College degree', iconComponent: GraduationCap },
				{ value: 'graduate', label: 'Graduate degree', iconComponent: GraduationCap }
			]
		},
		{
			id: 'experience',
			text: 'How much work experience do you have?',
			type: 'choice',
			options: [
				{ value: 'none', label: 'No experience (just starting out)', iconComponent: Sprout },
				{ value: 'some', label: 'Some experience (1-3 years)', iconComponent: Leaf },
				{ value: 'experienced', label: 'Experienced (3+ years)', iconComponent: TreePine }
			]
		},
		{
			id: 'values',
			text: 'What matters most to you in a job?',
			type: 'multiple',
			options: [
				{ value: 'stability', label: 'Job security and stability', iconComponent: Building2 },
				{ value: 'freedom', label: 'Freedom and flexibility', iconComponent: Zap },
				{ value: 'impact', label: 'Making an impact', iconComponent: Lightbulb },
				{ value: 'learning', label: 'Learning and growth', iconComponent: TrendingUp },
				{ value: 'community', label: 'Community and connection', iconComponent: Handshake },
				{ value: 'innovation', label: 'Innovation and new ideas', iconComponent: Rocket }
			]
		},
		{
			id: 'work_hours',
			text: 'What work schedule fits you best?',
			type: 'choice',
			options: [
				{ value: 'regular', label: 'Regular 9-to-5 hours', iconComponent: Clock },
				{ value: 'flexible', label: 'Flexible schedule', iconComponent: RefreshCw },
				{ value: 'seasonal', label: 'Seasonal work', iconComponent: Leaf },
				{ value: 'long_hours', label: 'Long hours, high intensity', iconComponent: Clock }
			]
		}
	];

	let progress = $derived((currentQuestionIndex / questions.length) * 100);

	function handleAnswer(value: string | number | string[]) {
		const question = questions[currentQuestionIndex];
		const existingAnswerIndex = answers.findIndex(a => a.questionId === question.id);
		
		const answer: Answer = {
			questionId: question.id,
			value
		};

		if (existingAnswerIndex >= 0) {
			answers[existingAnswerIndex] = answer;
		} else {
			answers = [...answers, answer];
		}
	}

	function nextQuestion() {
		if (currentQuestionIndex < questions.length - 1) {
			currentQuestionIndex++;
		} else {
			findMatch();
		}
	}

	function previousQuestion() {
		if (currentQuestionIndex > 0) {
			currentQuestionIndex--;
		}
	}

	// Helper function to get answer value
	function getAnswer(questionId: string): string | undefined {
		return answers.find(a => a.questionId === questionId)?.value as string | undefined;
	}

	// Build historical context message
	function getHistoricalContext(): string[] {
		const contexts: string[] = [];
		const raceAnswer = getAnswer('race');
		const ageAnswer = getAnswer('age');
		const educationAnswer = getAnswer('education');
		const eraAnswer = matchedJob?.era;

		if (raceAnswer === 'black') {
			contexts.push('African Americans faced severe employment restrictions. In earlier eras, many were enslaved with no choice in work. After emancipation, Black workers were excluded from skilled trades and unions, limited to manual labor and domestic service.');
		}
		if (ageAnswer === 'child') {
			contexts.push('Child labor was common, especially before the 20th century. Children as young as 5-6 worked 10-14 hour days in fields, factories, and mines for little or no pay.');
		}
		if (ageAnswer === 'elderly') {
			contexts.push('Older workers often faced age discrimination and limited opportunities, especially in physically demanding jobs.');
		}
		if (educationAnswer === 'none') {
			contexts.push('Without formal education, opportunities were limited to manual labor, farming, and unskilled work, especially in earlier eras.');
		}
		if (eraAnswer && ['agrarian', 'market-revolution'].includes(eraAnswer)) {
			contexts.push('In these earlier eras, work was often physically demanding, with long hours, low pay, and few protections. Apprenticeships and indentured servitude were common paths to skilled trades.');
		}

		return contexts;
	}

	function findMatch() {
		// Scoring algorithm: match jobs based on answers
		const answerMap = Object.fromEntries(answers.map(a => [a.questionId, a.value]));
		const race = answerMap.race as string;
		const ageCategory = answerMap.age as string;

		// Map age categories to numeric ranges for matching
		const ageRanges: Record<string, { min: number; max: number }> = {
			child: { min: 5, max: 17 },
			adult: { min: 18, max: 64 },
			elderly: { min: 65, max: 100 }
		};

		// Filter jobs by race first - this is historically accurate and critical
		let eligibleJobs = jobs;
		if (race && race !== 'any') {
			eligibleJobs = jobs.filter(job => {
				// If job has a race filter, it must match
				if (job.filters?.race) {
					return job.filters.race === race || job.filters.race === 'any';
				}
				// If no race filter, only include for white users (historically accurate)
				// Black users were excluded from most jobs without explicit filters
				return race === 'white';
			});
		}

		// Filter jobs by age - critical for historical accuracy
		if (ageCategory && ageRanges[ageCategory]) {
			const userAgeRange = ageRanges[ageCategory];
			eligibleJobs = eligibleJobs.filter(job => {
				// If job has age filters, check if user's age range overlaps
				if (job.filters?.minAge !== undefined || job.filters?.maxAge !== undefined) {
					const jobMinAge = job.filters.minAge ?? 0;
					const jobMaxAge = job.filters.maxAge ?? 100;
					// Check if age ranges overlap
					return userAgeRange.min <= jobMaxAge && userAgeRange.max >= jobMinAge;
				}
				// If no age filter, allow it (some jobs don't specify age)
				return true;
			});
		}

		// If no eligible jobs found (shouldn't happen, but safety check)
		if (eligibleJobs.length === 0) {
			eligibleJobs = jobs;
		}

		const scores = eligibleJobs.map(job => {
			let score = 0;

			// Age matching is critical - heavily weight it
			if (ageCategory && ageRanges[ageCategory]) {
				const userAgeRange = ageRanges[ageCategory];
				if (job.filters?.minAge !== undefined || job.filters?.maxAge !== undefined) {
					const jobMinAge = job.filters.minAge ?? 0;
					const jobMaxAge = job.filters.maxAge ?? 100;
					// Check if user's age range fits within job's age range
					if (userAgeRange.min >= jobMinAge && userAgeRange.max <= jobMaxAge) {
						score += 40; // Perfect age match
					} else if (userAgeRange.min <= jobMaxAge && userAgeRange.max >= jobMinAge) {
						score += 20; // Partial overlap
					} else {
						score -= 100; // No overlap - exclude
					}
				} else {
					// No age filter - allow but with lower score
					score += 10;
				}
			}

			// Race matching is critical - heavily weight it
			if (race && job.filters?.race) {
				if (job.filters.race === race) {
					score += 50; // Very high weight for race match
				} else if (job.filters.race === 'any') {
					score += 25; // Medium weight for jobs open to all
				}
			} else if (race === 'white' && !job.filters?.race) {
				// White users can access jobs without race filters
				score += 30;
			} else if (race === 'black' && !job.filters?.race) {
				// Black users historically excluded from jobs without race filters
				score -= 100; // Heavy penalty
			}

			// Match work style preferences
			const workStyle = answerMap.work_style as string;
			if (workStyle) {
				if (workStyle === 'outdoor' && (job.title.toLowerCase().includes('farm') || job.title.toLowerCase().includes('field') || job.title.toLowerCase().includes('slave'))) score += 10;
				if (workStyle === 'technical' && (job.title.toLowerCase().includes('engineer') || job.title.toLowerCase().includes('developer') || job.title.toLowerCase().includes('operator'))) score += 10;
				if (workStyle === 'creative' && (job.title.toLowerCase().includes('design') || job.title.toLowerCase().includes('writer') || job.title.toLowerCase().includes('artist'))) score += 10;
				if (workStyle === 'social' && (job.title.toLowerCase().includes('manager') || job.title.toLowerCase().includes('teacher') || job.title.toLowerCase().includes('service'))) score += 10;
			}

			// Match skills
			const skills = answerMap.skills as string[] || [];
			job.requirements.forEach(req => {
				const reqLower = req.toLowerCase();
				if (skills.includes('physical') && (reqLower.includes('strength') || reqLower.includes('endurance') || reqLower.includes('physical'))) score += 5;
				if (skills.includes('communication') && (reqLower.includes('communication') || reqLower.includes('writing') || reqLower.includes('speak'))) score += 5;
				if (skills.includes('technology') && (reqLower.includes('computer') || reqLower.includes('software') || reqLower.includes('programming') || reqLower.includes('digital'))) score += 5;
				if (skills.includes('craftsmanship') && (reqLower.includes('skill') || reqLower.includes('craft') || reqLower.includes('experience'))) score += 5;
			});

			// Match education level
			const education = answerMap.education as string;
			if (education && job.filters?.education) {
				const eduLevels = ['none', 'elementary', 'highschool', 'college', 'graduate'];
				const userLevel = eduLevels.indexOf(education);
				const jobLevel = eduLevels.indexOf(job.filters.education);
				if (userLevel >= jobLevel) score += 8;
			}

			// Match experience level
			const experience = answerMap.experience as string;
			if (experience && job.filters?.experience) {
				if (experience === job.filters.experience) score += 8;
				else if (experience === 'experienced' && job.filters.experience === 'some') score += 5;
			}

			// Match era preferences (based on values)
			const values = answerMap.values as string[] || [];
			if (values.includes('innovation') && (job.era === 'digital' || job.era === 'post-industrial')) score += 7;
			if (values.includes('stability') && (job.era === 'industrial' || job.era === 'post-industrial')) score += 7;
			if (values.includes('freedom') && (job.era === 'agrarian' || job.era === 'digital')) score += 7;

			// For Black users in earlier eras, prioritize slavery-related jobs
			if (race === 'black' && (job.era === 'agrarian' || job.era === 'market-revolution')) {
				if (job.title.toLowerCase().includes('slave') || job.title.toLowerCase().includes('field')) {
					score += 20;
				}
			}

			// For children, prioritize child labor jobs (historically accurate)
			if (ageCategory === 'child' && (job.era === 'agrarian' || job.era === 'market-revolution' || job.era === 'industrial')) {
				if (job.filters?.minAge && job.filters.minAge < 18) {
					score += 15; // Boost child-appropriate jobs
				}
			}

			// Bonus for jobs that match multiple criteria
			if (score > 20) score += 5;

			return { job, score };
		});

		// Sort by score and pick the top match
		scores.sort((a, b) => b.score - a.score);
		matchedJob = scores[0]?.job || eligibleJobs[Math.floor(Math.random() * eligibleJobs.length)];
		showResults = true;
	}

	function restart() {
		currentQuestionIndex = 0;
		answers = [];
		matchedJob = null;
		showResults = false;
	}

	$effect(() => {
		// Auto-scroll to top when question changes
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});
</script>

<div class="quiz-wrapper">
	{#if !showResults}
		<div class="progress-container">
			<div class="progress-bar">
				<div class="progress-fill" style="width: {progress}%"></div>
			</div>
			<p class="progress-text">Question {currentQuestionIndex + 1} of {questions.length}</p>
		</div>

		<div class="question-container">
			<div class="question-header">
				<h2 class="question-text">{questions[currentQuestionIndex].text}</h2>
			</div>

			<div class="options-container">
				{#if questions[currentQuestionIndex].type === 'choice'}
					{#each questions[currentQuestionIndex].options as option}
						{@const IconComponent = option.iconComponent}
						<button
							class="option-button"
							class:selected={answers.find(a => a.questionId === questions[currentQuestionIndex].id)?.value === option.value}
							onclick={() => {
								handleAnswer(option.value);
								setTimeout(nextQuestion, 300);
							}}
						>
							<span class="option-icon">
								<svelte:component this={IconComponent} size={28} />
							</span>
							<span class="option-label">{option.label}</span>
						</button>
					{/each}
				{:else if questions[currentQuestionIndex].type === 'multiple'}
					{#each questions[currentQuestionIndex].options as option}
						{@const IconComponent = option.iconComponent}
						{@const questionId = questions[currentQuestionIndex].id}
						{@const answerEntry = answers.find(a => a.questionId === questionId)}
						{@const currentAnswer = Array.isArray(answerEntry?.value) ? answerEntry.value : []}
						{@const isSelected = currentAnswer.includes(option.value)}
						<button
							class="option-button checkbox-option"
							class:selected={isSelected}
							onclick={() => {
								const newValue = isSelected
									? currentAnswer.filter(v => v !== option.value)
									: [...currentAnswer, option.value];
								handleAnswer(newValue);
							}}
						>
							<span class="checkbox-icon">
								{#if isSelected}
									<Check size={16} />
								{/if}
							</span>
							<span class="option-icon">
								<svelte:component this={IconComponent} size={28} />
							</span>
							<span class="option-label">{option.label}</span>
						</button>
					{/each}
					{@const multiAnswer = answers.find(a => a.questionId === questions[currentQuestionIndex].id)?.value}
					{#if Array.isArray(multiAnswer) && multiAnswer.length > 0}
						<button class="continue-button" onclick={nextQuestion}>
							Continue <ArrowRight size={18} />
						</button>
					{/if}
				{/if}
			</div>

			<div class="navigation-buttons">
				{#if currentQuestionIndex > 0}
					<button class="nav-button prev" onclick={previousQuestion}>
						<ArrowLeft size={18} /> Previous
					</button>
				{/if}
			</div>
		</div>
	{:else}
		<div class="results-container">
			<div class="results-header">
				<div class="celebration">
					<PartyPopper size={64} />
				</div>
				<h2>Your Historical Job Match!</h2>
				{#if (() => {
					const contextMessages = getHistoricalContext();
					return contextMessages.length > 0;
				})()}
					{@const contextMessages = getHistoricalContext()}
					<div class="historical-context">
						<p class="context-warning">
							<strong>Historical Context:</strong>
							{#each contextMessages as message, i}
								{#if i > 0}
									{' '}
								{/if}
								{message}
							{/each}
							{' '}The job shown reflects these historical realities.
						</p>
					</div>
				{/if}
				<p class="results-subtitle">Based on your answers, here's the job that matches you best:</p>
			</div>

			{#if matchedJob}
				<div class="job-result-card">
					<div class="job-header">
						<div class="job-title-section">
							<h3 class="job-title">{matchedJob.title}</h3>
							<p class="job-company">{matchedJob.company}</p>
							<p class="job-location">
								<MapPin size={16} /> {matchedJob.location}
							</p>
						</div>
						<div class="job-meta">
							<span class="job-type">{matchedJob.type}</span>
							{#if matchedJob.salary}
								<span class="job-salary">{matchedJob.salary}</span>
							{/if}
						</div>
					</div>

					<div class="job-description">
						<p>{matchedJob.description}</p>
					</div>

					<div class="job-requirements">
						<h4>Requirements:</h4>
						<ul>
							{#each matchedJob.requirements as req}
								<li>{req}</li>
							{/each}
						</ul>
					</div>

					<div class="job-actions">
						<a href={`${base}${matchedJob.era}/${matchedJob.id}`} class="view-job-button">
							View Full Job Details <ArrowRight size={18} />
						</a>
						<button class="restart-button" onclick={restart}>
							Take Quiz Again
						</button>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.quiz-wrapper {
		background: #fefcf8;
		border-radius: 16px;
		padding: 2.5rem;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		border: 2px solid #e8ddd4;
	}

	.progress-container {
		margin-bottom: 2rem;
	}

	.progress-bar {
		width: 100%;
		height: 8px;
		background: #e8ddd4;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 0.5rem;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, #8b4a4a, #b85c5c);
		border-radius: 4px;
		transition: width 0.3s ease;
	}

	.progress-text {
		text-align: center;
		color: #5a4a3a;
		font-size: 0.9rem;
		margin: 0;
	}

	.question-container {
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.question-header {
		margin-bottom: 2rem;
		text-align: center;
	}

	.question-text {
		font-family: 'Cinzel', serif;
		font-size: 1.8rem;
		color: #8b4a4a;
		margin: 0;
		line-height: 1.4;
	}

	.options-container {
		display: grid;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.option-button {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.25rem 1.5rem;
		background: #fff;
		border: 2px solid #e8ddd4;
		border-radius: 12px;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: 1.1rem;
		color: #2c2416;
		text-align: left;
		font-family: inherit;
	}

	.option-button:hover {
		border-color: #8b4a4a;
		background: #fef8f0;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(139, 74, 74, 0.15);
	}

	.option-button.selected {
		background: #8b4a4a;
		color: #fff;
		border-color: #8b4a4a;
		box-shadow: 0 4px 16px rgba(139, 74, 74, 0.3);
	}

	.option-button.selected .option-icon {
		color: #fff;
	}

	.option-icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: inherit;
	}

	.option-label {
		flex: 1;
		font-weight: 500;
	}

	.checkbox-option {
		position: relative;
	}

	.checkbox-icon {
		width: 24px;
		height: 24px;
		border: 2px solid #8b4a4a;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		background: #fff;
		color: #fff;
	}

	.checkbox-option.selected .checkbox-icon {
		background: #8b4a4a;
		color: #fff;
	}

	.continue-button {
		margin-top: 1rem;
		padding: 1rem 2rem;
		background: #8b4a4a;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		font-family: inherit;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-left: auto;
		margin-right: auto;
	}

	.continue-button:hover {
		background: #b85c5c;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(139, 74, 74, 0.3);
	}

	.navigation-buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}

	.nav-button {
		padding: 0.75rem 1.5rem;
		background: #f5f1e8;
		border: 2px solid #8b7355;
		border-radius: 8px;
		cursor: pointer;
		font-size: 1rem;
		color: #5a4a3a;
		transition: all 0.2s ease;
		font-family: inherit;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.nav-button:hover {
		background: #e8ddd4;
		border-color: #8b4a4a;
	}

	.results-container {
		animation: fadeIn 0.5s ease;
		text-align: center;
	}

	.results-header {
		margin-bottom: 2.5rem;
	}

	.celebration {
		margin-bottom: 1rem;
		animation: bounce 1s ease;
		display: flex;
		justify-content: center;
		color: #8b4a4a;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-20px); }
	}

	.results-header h2 {
		font-family: 'Cinzel', serif;
		font-size: 2.5rem;
		color: #8b4a4a;
		margin: 0 0 1rem 0;
	}

	.results-subtitle {
		font-size: 1.2rem;
		color: #5a4a3a;
		margin: 0;
	}

	.historical-context {
		margin: 1.5rem auto;
		padding: 1.5rem;
		background: #f5f1e8;
		border-left: 4px solid #8b4a4a;
		border-top: 1px solid #8b7355;
		border-bottom: 1px solid #8b7355;
		border-right: 1px solid #8b7355;
		max-width: 800px;
	}

	.context-warning {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.7;
		color: #2c2416;
		font-family: 'Newsreader', 'Times New Roman', serif;
	}

	.context-warning strong {
		color: #8b4a4a;
		font-weight: 700;
	}

	.job-result-card {
		background: #fff;
		border: 3px solid #8b4a4a;
		border-radius: 16px;
		padding: 2.5rem;
		text-align: left;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
		margin-top: 2rem;
	}

	.job-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 2px solid #e8ddd4;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.job-title-section {
		flex: 1;
	}

	.job-title {
		font-family: 'Cinzel', serif;
		font-size: 2rem;
		color: #8b4a4a;
		margin: 0 0 0.5rem 0;
	}

	.job-company {
		font-size: 1.3rem;
		color: #5a4a3a;
		margin: 0 0 0.5rem 0;
		font-weight: 600;
	}

	.job-location {
		color: #8b7355;
		margin: 0;
		font-size: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.job-meta {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-end;
	}

	.job-type {
		background: #8b4a4a;
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.job-salary {
		color: #5a4a3a;
		font-weight: 600;
		font-size: 1rem;
	}

	.job-description {
		margin-bottom: 1.5rem;
		line-height: 1.8;
		color: #2c2416;
	}

	.job-requirements {
		margin-bottom: 2rem;
	}

	.job-requirements h4 {
		font-family: 'Cinzel', serif;
		color: #8b4a4a;
		margin: 0 0 1rem 0;
		font-size: 1.3rem;
	}

	.job-requirements ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.job-requirements li {
		padding: 0.75rem 0;
		padding-left: 2rem;
		position: relative;
		color: #2c2416;
		line-height: 1.6;
	}

	.job-requirements li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: #8b4a4a;
		font-weight: bold;
	}

	.job-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
		padding-top: 1.5rem;
		border-top: 2px solid #e8ddd4;
	}

	.view-job-button,
	.restart-button {
		padding: 1rem 2rem;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: inherit;
		border: none;
	}

	.view-job-button {
		background: #8b4a4a;
		color: #fff;
	}

	.view-job-button:hover {
		background: #b85c5c;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(139, 74, 74, 0.3);
	}

	.restart-button {
		background: #f5f1e8;
		color: #5a4a3a;
		border: 2px solid #8b7355;
	}

	.restart-button:hover {
		background: #e8ddd4;
		border-color: #8b4a4a;
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.quiz-wrapper {
			padding: 1.5rem;
		}

		.question-text {
			font-size: 1.4rem;
		}

		.option-button {
			padding: 1rem;
			font-size: 1rem;
		}

		.job-header {
			flex-direction: column;
		}

		.job-meta {
			align-items: flex-start;
		}

		.job-title {
			font-size: 1.5rem;
		}
	}
</style>

