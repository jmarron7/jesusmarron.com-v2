<script lang="ts">
  import type { BlogPost } from "$lib/types/types";
  
  export let data: {
    posts: BlogPost[];
  };
  
  let displayedCount = 15;
  
  function loadMore() {
    displayedCount += 15;
  }
  
</script>

<section class="flex flex-col lg:py-24">
  <!-- Breadcrumb Nav -->
  <nav class="mb-3 inline-flex items-center leading-tight text-base">
    <span class="text-green-500">/</span>
    <a href="/" class="font-semibold mx-1 hover:text-green-500 hover:underline">Home</a>
    <span class="text-green-500">/</span>
    <a href="/blog" class="font-semibold mx-1 hover:text-green-500 hover:underline">Blog</a>
  </nav>

  <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Blog</h1>
  
  <!-- Display Blog Posts -->
  {#each data.posts.slice(0, displayedCount) as post}
  <div class="border-b border-surface-400 pb-4 mb-4">
    <div class="flex items-center space-x-2">
      <p class="z-10 text-sm font-semibold uppercase tracking-wide text-surface-300 sm:col-span-2" aria-label="{post.date}">{post.date}</p>
      <a href={`/blog/${post.slug}`} class="font-semibold leading-tight pl-2 hover:text-green-500 focus-visible:text-green-500 group/link text-base">
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
