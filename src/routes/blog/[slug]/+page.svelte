<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
import { onMount } from 'svelte';
	
	
	export let data;

	// Grab links from .md files and adds attributes to open links in new tabs
	onMount(() => {
        document.querySelectorAll('.prose a').forEach(link => {
            const anchor = link as HTMLAnchorElement;
            if (anchor.hostname !== window.location.hostname) {
                anchor.setAttribute('target', '_blank');
                anchor.setAttribute('rel', 'noopener noreferrer');
            }
        });
    });
	
	function formatDate(dateString: string): string {
		const [year, month, day] = dateString.split('-').map(Number);
		const date = new Date(year, month - 1, day);
		
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
	
	const formattedDate = formatDate(data.metadata.date);
</script>

<div class="flex flex-col lg:py-24">
	 <Navbar></Navbar>
	 
	<article>
		<section class="mb-4 border-b border-green-500" aria-label="Metadata for blog post {data.metadata.title}">
			<div class="mb-2 inline-flex items-center leading-tight text-sm font-semibold text-surface-300">
				<time datetime={data.metadata.date}>{formattedDate}</time>
				<span class="mx-2">·</span>
				<p>Jesus Marron</p>
			</div>
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{data.metadata.title}</h1>
			<ul class="flex items-center" aria-label="tags">
				{#each data.metadata.tags as tag}
				<li class="mt-2 mb-3 mr-2 leading-tight text-sm font-semibold text-surface-400">#{tag}</li>
				{/each}
			</ul>
			
		</section>
		<!-- TLDR Section -->
		{#if data.metadata.tldr}
		<section class="mb-4 border-b border-green-500">
			<p class="mb-4 text-surface-200">
				<span class="text-white font-semibold">
					TLDR:
				</span> 
				{data.metadata.tldr}
			</p>
		</section>
		{/if}
		<!-- Markdown Content -->
		<section class="prose">
			<svelte:component this={data.content} />
		</section>
	</article>
</div>