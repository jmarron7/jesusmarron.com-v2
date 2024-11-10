<script lang="ts">
	import { page } from "$app/stores";

  let isHomeRoute;
  $: isHomeRoute = $page.url.pathname === '/';
</script>

<nav class="mb-3 inline-flex items-center leading-tight text-base lg:{isHomeRoute ? 'hidden' : 'flex'}">
  <span class="text-green-500">/</span>
  <a href="/" class="font-semibold mx-1 hover:text-green-500 hover:underline">Home</a>
  <span class="text-green-500">/</span>
  <a href="/blog" class="font-semibold mx-1 hover:text-green-500 hover:underline">Blog</a>
</nav>