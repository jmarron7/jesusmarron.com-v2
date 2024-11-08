<script lang="ts">
	import posthog from 'posthog-js'
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	
	import '../app.css';
	
	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
	let { children } = $props();
</script>

{@render children()}
