import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		mdsvex({
			extensions: ['.md'],
		}), 
		vitePreprocess()
	],
	
	kit: {
		adapter: adapter()
	},
	
	extensions: ['.svelte', '.md']
};

export default config;
