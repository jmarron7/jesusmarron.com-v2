import type { BlogPost, MarkdownModule } from "$lib/types/types";

const allPosts = import.meta.glob('$content/posts/*.md');

export async function load() {
	const posts: BlogPost[] = await Promise.all(
		Object.entries(allPosts).map(async ([_, resolver]) => {
			const { metadata } = (await resolver() as MarkdownModule);

			return {
				title: metadata.title,
				date: metadata.date,
				slug: metadata.slug,
				tldr: metadata.tldr,
				tags: metadata.tags || [],
			};
		})
	);

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts: posts,
	};
}