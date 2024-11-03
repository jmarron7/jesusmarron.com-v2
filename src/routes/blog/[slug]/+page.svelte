<script lang="ts">
	export let data;

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
	<!-- Breadcrumb Nav -->
	<nav class="mb-3 inline-flex items-center leading-tight text-base">
		<span class="text-green-500">/</span>
		<a href="/" class="font-semibold mx-1 hover:text-green-500 hover:underline">Home</a>
		<span class="text-green-500">/</span>
		<a href="/blog" class="font-semibold mx-1 hover:text-green-500 hover:underline">Blog</a>
	</nav>
	
	<article>
		<section class="mb-4 border-b border-green-500">
			<h1 class="text-4xl font-bold">{data.metadata.title}</h1>
			<div class="mb-3 inline-flex items-center leading-tight text-sm font-semibold text-surface-300">
				<time datetime={data.metadata.date}>{formattedDate}</time>
				<span class="mx-2">·</span>
				<p>Jesus Marron</p>
			</div>
		</section>
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
		<svelte:component this={data.content} />
	</article>
</div>