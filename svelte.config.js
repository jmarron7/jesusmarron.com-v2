import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';
import { bundledLanguages } from 'shiki';

const theme = 'everforest-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: Object.values(bundledLanguages),
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
					return `{@html \`${html}\` }`;
				}
			},
		}), 
		vitePreprocess()
	],
	
	kit: {
		adapter: adapter(),
		alias: {
			$content: 'src/content'
		}
	},
	
	extensions: ['.svelte', '.md']
};

export default config;
