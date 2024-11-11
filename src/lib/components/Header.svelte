<script>
	import { page } from "$app/stores";
	import Navbar from "./Navbar.svelte";

  let currentSection = $derived($page.url.hash);
</script>
<header class="grid-background relative lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
	<Navbar></Navbar>
  <div>
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
      Jesus Marron
    </h1>
    <h2 class="mt-3 text-lg font-medium tracking-tight">
      Software Engineer
    </h2>
    <p class="mt-4 max-w-xs leading-normal text-surface-200">
      I like building products that people will enjoy using. Heavily interested in all things performance, distributed systems, and developer tooling.
    </p>
    <nav class="nav hidden mt-16 w-max lg:block" aria-label="Jump links to in-page sections">
      <p class="text-xs font-bold tracking-widest uppercase text-surface-300">Jump to:</p>
      <ul>
        <li>
          <a class="group flex items-center py-3" href="#about">
            <span class="nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-surface-200 group-focus-visible:w-16 group-focus-visible:bg-surface-200 motion-reduce:transition-none {currentSection === '#about' ? 'w-16 bg-surface-200' : 'w-8 bg-surface-300'}"></span>
            <span class="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-white group-focus-visible:text-white {currentSection === '#about' ? 'text-white' : 'text-surface-300'}">About</span>
          </a>
        </li>
        <li>
          <a class="group flex items-center py-3" href="#experience">
            <span class="nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-surface-200 group-focus-visible:w-16 group-focus-visible:bg-surface-200 motion-reduce:transition-none {currentSection === '#experience' ? 'w-16 bg-surface-200' : 'w-8 bg-surface-300'}"></span>
            <span class="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-white group-focus-visible:text-white {currentSection === '#experience' ? 'text-white' : 'text-surface-300'}">Experience</span>
          </a>
        </li>
        <li>
          <div class="group flex items-center py-3 cursor-not-allowed">
            <span class="nav-indicator mr-4 h-px w-8 bg-surface-400 transition-all group-focus-visible:w-16 group-focus-visible:bg-surface-200 motion-reduce:transition-none"></span>
            <span class="nav-text text-xs font-bold uppercase tracking-widest text-surface-400 group-focus-visible:text-white">Projects (coming soon)</span>
          </div>
        </li>
        <li>
          <a class="group flex items-center py-3" href="#blog">
            <span class="nav-indicator mr-4 h-px  transition-all group-hover:w-16 group-hover:bg-surface-200 group-focus-visible:w-16 group-focus-visible:bg-surface-200 motion-reduce:transition-none {currentSection === '#blog' ? 'w-16 bg-surface-200' : 'w-8 bg-surface-300'}"></span>
            <span class="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-white group-focus-visible:text-white {currentSection === '#blog' ? 'text-white' : 'text-surface-300'}">Blog</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <ul class="ml-1 mt-8 flex items-center" aria-label="Connect with me links">
    <li class="mr-5 text-xs shrink-0">
      <a class="block hover:text-surface-200" href="https://github.com/jmarron7" target="_blank" rel="norefferer noopener" aria-label="Github (opens in a new tab)" title="Github">
        <span class="sr-only">GitHub</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
    </li>
    <li class="mr-5 text-xs shrink-0">
      <a class="block hover:text-surface-200" href="https://www.linkedin.com/in/jesusmarron/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
        <span class="sr-only">LinkedIn</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      </a>
    </li>
    <li class="mr-5 text-xs shrink-0">
      <a class="block hover:text-surface-200" href="mailto:hello@jesusmarron.com" aria-label="Email" title="Email">
        <span class="sr-only">Email</span> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="h-6 w-6" aria-hidden="true"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
        </svg>
      </a>
    </li>
  </ul>  
</header>