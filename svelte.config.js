import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
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
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		prerender: {
			default: true,
		},
		alias: {
			$content: 'src/content'
		}
	},
	
	extensions: ['.svelte', '.md']
};

export default config;
