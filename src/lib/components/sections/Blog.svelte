<script lang="ts">
	import type { BlogPost } from "$lib/types/types";
	import BlogPostCard from "../cards/BlogPostCard.svelte";


export let posts: BlogPost[];

</script>
<section id="blog" class="mb-8 scroll-mt-16 lg:scroll-mt-24" aria-label="Recent Posts">
  <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-surface-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
    <h3 class="text-md font-semibold uppercase tracking-widest">[Recent Posts]</h3>
  </div>
  
  <div class="mt-6">
    <ol class="group/list">
      {#each posts as post}
        <li class="mb-12">
          <BlogPostCard post={post}></BlogPostCard>
        </li>
      {/each}
    </ol>
  </div>

  <div class="mt-12">
    <a href="/blog" target="_self" aria-label="View All Posts" class="inline-flex items-center leading-tight font-semibold group">
      <span class="whitespace-nowrap border-b-2 border-transparent pb-px transition group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:text-green-500 motion-reduce:transition-none">
        <span>
          View All Posts
        </span>
        <span class="group-hover:border-green-500 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none">>></span>
      </span>
    </a>
  </div>
</section>