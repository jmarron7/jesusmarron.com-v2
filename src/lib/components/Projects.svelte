<script lang="ts">
  import Card from "./Card.svelte";
  import { projects } from "$lib/data/projects";
</script>
<section id="projects" class="mb-16 scroll-mt-16 lg:scroll-mt-24" aria-label="Showcased Projects">
  <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-surface-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h3 class="text-md font-semibold uppercase tracking-widest lg:sr-only">[Projects]</h3>
  </div>
  
  <div class="mt-6">
    <ol class="group/list">
      {#each projects as project}
      <li class="mb-12">
        <Card data={project} />
      </li>
      {/each}
    </ol>
  </div>
  
  <div class="mt-12">
    <a href="/projects" target="_self" aria-label="View More Projects" class="inline-flex items-center leading-tight font-semibold group">
      <span class="whitespace-nowrap border-b-2 border-transparent pb-px transition group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:text-green-500 motion-reduce:transition-none">
        <span class="">
          View More Projects
        </span>
        <span class="group-hover:border-green-500 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none">>></span>
        
      </span>
    </a>
  </div>
</section>