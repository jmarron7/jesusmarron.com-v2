<script lang="ts">
	import type { BlogPost } from "$lib/types/types";
	import About from "./sections/About.svelte";
	import Experience from "./sections/Experience.svelte";
	import Footer from "./Footer.svelte";
	import Projects from "./sections/Projects.svelte";
	import Blog from "./sections/Blog.svelte";
	import Separator from "./Separator.svelte";
	
	export let posts: BlogPost[];
</script>
<main class="pt-24 lg:w-1/2 lg:py-24">
	<About></About>
	<Separator></Separator>
	<Experience></Experience>
	<Separator></Separator>
	<Projects></Projects>
	<Separator></Separator>
	<Blog posts={posts}></Blog>
	<Separator></Separator>
	<Footer></Footer>
</main>