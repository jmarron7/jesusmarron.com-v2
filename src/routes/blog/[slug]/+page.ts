import { error } from "@sveltejs/kit";
import type { MarkdownModule } from "../+page";

const posts = import.meta.glob('$content/posts/*.md');

export async function load({ params }) {
	const { slug } = params;

	// Find the post with the matching slug
	for (const resolver of Object.values(posts)) {
		const post = (await resolver() as MarkdownModule);
		if (post.metadata.slug === slug) {
			return {
				content: post.default,
				metadata: post.metadata
			};
		}
	}

	throw error(404, 'Post not found');
}