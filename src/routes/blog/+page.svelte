<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import type { BlogPost } from "$lib/types/types";
  
  export let data: {
    posts: BlogPost[];
  };
  
  let displayedCount = 15;
  
  function loadMore(): void {
    displayedCount += 15;
  }
  
</script>

<svelte:head>
	<title>Jesus Marron — Blog</title>
  <meta name="title" content="Jesus Marron - Blog" />
	<meta name="description" content="A place where I can dump my learnings, thoughts, plans, and rants. Some technical. Some not. All me." />
</svelte:head>

<section class="flex flex-col lg:py-24" aria-label="Blog">
  <Navbar></Navbar>
  <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Blog</h1>
  
  <!-- Display Blog Posts -->
  {#each data.posts.slice(0, displayedCount) as post}
  <div class="border-b border-surface-400 pb-4 mb-4">
    <div class="flex items-center space-x-2">
      <time class="z-10 text-sm font-semibold uppercase tracking-wide text-surface-300 sm:col-span-2" aria-label="{post.date}">{post.date}</time>
      <a href={`/blog/${post.slug}`} class="font-semibold leading-tight pl-2 hover:text-green-500 focus-visible:text-green-500 group/link text-base" aria-label="{post.title}">
        {post.title}
      </a>
    </div>
  </div>
  {/each}
  
  <!-- Load More Button -->
  {#if displayedCount < data.posts.length}
  <div class="flex justify-center mt-8">
    <button on:click={loadMore} class="px-4 py-2 bg-none border border-surface-300 text-white rounded hover:text-green-400 hover:border-green-400">
      Load more
    </button>
  </div>
  {/if}
</section>
