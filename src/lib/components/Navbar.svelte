<script lang="ts">
	import { page } from "$app/stores";

  let currentPage = $derived($page.url.pathname);
</script>

<nav class="mb-3 inline-flex items-center leading-tight text-base">
  <span class="{currentPage === '/' ? 'text-green-500' : ''}">/</span>
  <a href="/" class="font-semibold mx-1 hover:text-green-500 hover:underline {currentPage === '/' ? 'text-green-500' : ''}">Home</a>
  <!-- <span class="{currentPage === '/projects' ? 'text-green-500' : ''}">/</span>
  <a href="/projects" class="font-semibold mx-1 hover:text-green-500 hover:underline {currentPage === '/projects' ? 'text-green-500' : ''}">Projects</a> -->
  <!-- <span class="{currentPage.startsWith('/blog') ? 'text-green-500' : ''}">/</span>
  <a href="/blog" class="font-semibold mx-1 hover:text-green-500 hover:underline {currentPage.startsWith('/blog') ? 'text-green-500' : ''}">Blog</a> -->
</nav>