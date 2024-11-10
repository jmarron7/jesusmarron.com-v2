<script lang="ts">
  import type { BlogPost }  from "$lib/types/types";
	import Pill from "../Pill.svelte";
  
  type Props = { post: BlogPost }
  let { post }: Props = $props();
  
</script>

<div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface-100/5 lg:group-hover:drop-shadow-lg"></div>
  <div class="z-10 sm:col-span-6">
    <h3 class="font-medium leading-snug">
      <div>
        <a class="inline-flex items-baseline font-semibold leading-tight hover:text-green-500 focus-visible:text-green-500 group/link text-base" href="/blog/{post.slug}" target="_self" rel="noreferrer noopener" aria-label="{post.title}">
          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span>
            {post.title}
          </span>
        </a>
      </div>
    </h3>
    <ul class="flex flex-wrap" aria-label="Technologies used">
      {#each post.tags as tag}
      <li class="mr-1.5 mt-2">
        <Pill text="#{tag}"></Pill>
      </li>
      {/each}
    </ul>
  </div>
</div>