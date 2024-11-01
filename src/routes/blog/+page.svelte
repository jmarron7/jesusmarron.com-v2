<script lang="ts">
  import type { BlogPost } from './+page';
  
  export let data: {
    posts: BlogPost[];
    tagFilter: string | null;
    allTags: string[];
  };
  
  let selectedTag: string | null = data.tagFilter;
  let displayedCount = 15;
  
  function loadMore() {
    displayedCount += 15;
  }
  
  function filterByTag(tag: string | null) {
    selectedTag = tag;
    const tagParam = tag ? `?tag=${tag.replace(/\s+/g, '-')}` : '';
    window.location.href = `/blog${tagParam}`;
  }
</script>

<section class="flex flex-col lg:py-24">
  <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-3">Blog</h1>
  
  <div class="flex flex-wrap mt-3 mb-6 gap-2">
    <button
    on:click={() => filterByTag(null)}
    class="px-3 py-1 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400"
    class:bg-blue-600={selectedTag === null}
    >
    All
  </button>
  {#each data.allTags as tag}
  <button
  on:click={() => filterByTag(tag)}
  class="px-3 py-1 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400"
  class:bg-blue-600={selectedTag === tag}
  >
  {tag}
</button>
{/each}
</div>

<!-- Display Blog Posts -->
{#each data.posts.slice(0, displayedCount) as post}
<article class="border-b border-gray-300 pb-4 mb-4">
  <div class="flex items-center space-x-2">
    <p class="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-surface-300 sm:col-span-2" aria-label="{post.date}">{post.date}</p>
    <a href={`/blog/${post.slug}`} class="font-semibold leading-tight hover:text-green-500 focus-visible:text-green-500 group/link text-base">
      {post.title}
    </a>
  </div>
  <div class="flex flex-wrap gap-2 mt-2">
    {#each post.tags as tag}
    <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
      {tag}
    </span>
    {/each}
  </div>
</article>
{/each}

<!-- Load More Button -->
{#if displayedCount < data.posts.length}
<div class="flex justify-center mt-8">
  <button on:click={loadMore} class="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-600">
    Load more
  </button>
</div>
{/if}

</section>
