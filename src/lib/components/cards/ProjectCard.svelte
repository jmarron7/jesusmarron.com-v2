<script lang="ts">
  import type { Project } from "$lib/types/types";
  import Pill from "../Pill.svelte";
  
  type Props = { project: Project }
  let { project }: Props = $props();
  
</script>
<div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface-100/5 lg:group-hover:drop-shadow-lg"></div>
  <div class="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-surface-300 sm:col-span-2">
    <img 
    src={`images/${project.imagePath}`} 
    alt={"Preview image of " + project.title} 
    loading="lazy" 
    width="200" 
    height="48" 
    decoding="async" 
    class="rounded border-2 border-green-800/90 transition group-hover:border-green-500 sm:order-1 sm:col-span-2" 
    onerror={(event: Event) => {
      const target = event.currentTarget as HTMLImageElement;
      target.src = 'images/no-image.png';
    }}/>
  </div>
  <div class="z-10 sm:col-span-6">
    <h3 class="font-medium leading-snug">
      <div>
        <span class="font-semibold leading-tight group-hover:text-green-500 focus-visible:text-green-500 group/link text-base" aria-label="{project.title}">
          {project.title}
        </span>
      </div>
    </h3>
    <p class="mt-2 text-surface-200 leading-normal">
      {project.description}
    </p>
    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
      {#each project.tech as tech}
      <li class="mr-1.5 mt-2">
        <Pill text={tech}></Pill>
      </li>
      {/each}
    </ul>
  </div>
</div>