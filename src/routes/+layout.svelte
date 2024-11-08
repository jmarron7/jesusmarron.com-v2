<script lang="ts">
	import { browser } from '$app/environment';
	import '../app.css';
	
	// const posthogApiKey = import.meta.env.VITE_POSTHOG_API_KEY;
	// const posthogApiHost = import.meta.env.VITE_POSTHOG_API_HOST;

	// export const load = async () => {
		
	// 	if (browser) {
	// 		posthog.init(
	// 		posthogApiKey,
	// 		{ 
	// 			api_host: posthogApiHost,
	// 			person_profiles: 'always',
	// 			capture_pageview: true,
	// 			capture_pageleave: true,
	// 			capture_performance: true,
	// 		}
	// 		)
	// 	}
	// 	return
	// };
	
	let { children } = $props();
</script>

{@render children()}
