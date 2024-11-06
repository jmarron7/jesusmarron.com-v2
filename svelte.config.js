import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
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
		adapter: adapter(),
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
