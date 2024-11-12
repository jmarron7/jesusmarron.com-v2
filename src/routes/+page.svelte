<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Main from "$lib/components/Main.svelte";
	import type { BlogPost } from "$lib/types/types";

	export let data: {
    posts: BlogPost[];
  };

</script>

<svelte:head>
	<title>Jesus Marron — Software Engineer</title>
  <meta name="title" content="Jesus Marron - Software Engineer" />
	<meta name="description" content="Software Engineer experienced in Fullstack Web Development and Platform Engineering based in Memphis, TN." />
</svelte:head>

<div class="lg:flex lg:justify-between lg:gap-4">
	<Header></Header>
	<Main posts={data.posts}></Main>
</div>