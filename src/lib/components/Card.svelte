<script lang="ts">
  import type { Experience, Project }  from "$lib/types/types";
  
  export let data: Experience | Project;
  
  const isExperience = (data: Experience | Project): data is Experience => {
    return (data as Experience).role !== undefined;
  };
  
  const isProject = (data: Experience | Project): data is Project => {
    return (data as Project).title !== undefined;
  };
  
</script>
<div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface-100/5 lg:group-hover:drop-shadow-lg"></div>
  {#if isExperience(data)}
  <header class="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-surface-300 sm:col-span-2" aria-label="{data.startDate} to {data.endDate}">
    {data.startDate} — {data.endDate}
  </header>
  {:else if isProject(data)}
  <div class="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-surface-300 sm:col-span-2">
    <img src={"images/" + data.imagePath} alt={"Preview image of " + data.title} loading="lazy" width="200" height="48" decoding="async" class="rounded border-2 border-green-800/90 transition group-hover:border-green-500 sm:order-1 sm:col-span-2" />
  </div>
  {/if}
  <div class="z-10 sm:col-span-6">
    <h3 class="font-medium leading-snug">
      <div>
        {#if isExperience(data)}
        <a class="inline-flex items-baseline font-semibold leading-tight hover:text-green-500 focus-visible:text-green-500 group/link text-base" href="{data.companyUrl}" target="_blank" rel="noreferrer noopener" aria-label="{data.role} at {data.company} (opens in a new tab)">
          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span>{data.role} ·
            <span class="inline-block">
              {data.company}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 mb-0.75 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
            </span>
          </span>
        </a>
        {:else if isProject(data)}
        <span class="font-semibold leading-tight group-hover:text-green-500 focus-visible:text-green-500 group/link text-base" aria-label="{data.title}">
          {data.title}
        </span>
        {/if}
      </div>
    </h3>
    <p class="mt-2 text-surface-200 leading-normal">
      {data.description}
    </p>
    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
      {#each data.tech as tech}
      <li class="mr-1.5 mt-2">
        <div class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-sm font-medium leading-5 text-green-300 ">
          {tech}
        </div>
      </li>
      {/each}
    </ul>
  </div>
</div>