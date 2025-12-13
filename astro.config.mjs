// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	// Update this to match your GitHub username/organization
	site: 'https://casimcdaniels.github.io',
	// Update this to match your repository name, or use '/' for root deployment
	base: '/made-in-america/',
	output: 'static',
	integrations: [react(), svelte()],
});
