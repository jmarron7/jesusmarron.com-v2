<script lang="ts">
  import Card from "./Card.svelte";
  import { experienceData } from "$lib/data/experience";
</script>

<section id="experience" class="mb-16 scroll-mt-16 lg:scroll-mt-24" aria-label="Work Experience">
  <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-surface-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h3 class="text-md font-semibold uppercase tracking-widest lg:sr-only">[Experience]</h3>
  </div>
  
  <div class="mt-6">
    <ol class="group/list">
      {#each experienceData as experience}
        <li class="mb-12">
          <Card data={experience} />
        </li>
      {/each}
    </ol>
  </div>
</section>