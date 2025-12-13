<script lang="ts">
	import { onMount } from 'svelte';
	import { Sparkles, ArrowRight } from 'lucide-svelte';

	interface Props {
		base: string;
	}

	let { base }: Props = $props();
	let isVisible = $state(false);

	onMount(() => {
		// Only show on non-index and non-quiz pages
		if (typeof window !== 'undefined') {
			const path = window.location.pathname;
			const basePath = base === '/' ? '' : base;
			const isIndexPage = path === basePath || path === `${basePath}index.html` || path === `${basePath}index`;
			const isQuizPage = path === `${basePath}quiz` || path === `${basePath}quiz/` || path === `${basePath}quiz.html`;
			
			if (!isIndexPage && !isQuizPage) {
				isVisible = true;
			}
		}
	});
</script>

{#if isVisible}
	<div class="quiz-banner">
		<div class="banner-content">
			<div class="banner-icon">
				<Sparkles size={24} />
			</div>
			<div class="banner-text">
				<strong>Find Your Historical Job Match!</strong>
				<span>Take our interactive quiz to discover which job from American history matches your interests and skills.</span>
			</div>
			<a href={`${base}quiz`} class="banner-button">
				Take Quiz
				<ArrowRight size={18} />
			</a>
		</div>
	</div>
{/if}

<style>
	.quiz-banner {
		background: #fefcf8;
		border-bottom: 2px solid #8b7355;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
		position: relative;
		z-index: 99;
		animation: slideDown 0.4s ease-out;
		background-image: 
			url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='aged' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='30' cy='30' r='0.5' fill='%238b7355' opacity='0.08'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='60' height='60' fill='url(%23aged)'/%3E%3C/svg%3E");
	}

	@keyframes slideDown {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.banner-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.banner-icon {
		flex-shrink: 0;
		color: #8b4a4a;
		display: flex;
		align-items: center;
		animation: sparkle 2s ease-in-out infinite;
	}

	@keyframes sparkle {
		0%, 100% {
			transform: scale(1) rotate(0deg);
			opacity: 1;
		}
		50% {
			transform: scale(1.1) rotate(5deg);
			opacity: 0.9;
		}
	}

	.banner-text {
		flex: 1;
		color: #2c2416;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-family: 'Newsreader', 'Times New Roman', serif;
		min-width: 200px;
	}

	.banner-text strong {
		font-size: 1.1rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #4a5568;
		font-family: 'Old Standard TT', 'Times New Roman', serif;
	}

	.banner-text span {
		font-size: 0.9rem;
		color: #5a4a3a;
		line-height: 1.4;
	}

	.banner-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: #8b4a4a;
		color: #fff;
		border: 1px solid #8b4a4a;
		border-radius: 0;
		font-weight: 700;
		font-size: 0.9rem;
		text-decoration: none;
		transition: all 0.2s ease;
		font-family: 'Newsreader', 'Times New Roman', serif;
		white-space: nowrap;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.banner-button:hover {
		background: #b85c5c;
		border-color: #b85c5c;
	}

	@media (max-width: 768px) {
		.banner-content {
			padding: 1rem;
			gap: 0.75rem;
		}

		.banner-text {
			flex: 1 1 100%;
			min-width: 0;
		}

		.banner-text strong {
			font-size: 1rem;
		}

		.banner-text span {
			font-size: 0.85rem;
		}

		.banner-button {
			flex: 1;
			justify-content: center;
			padding: 0.65rem 1.25rem;
			font-size: 0.95rem;
		}
	}
</style>

