export type BlogPost = {
	title: string;
	date: string;
	tags: string[];
	slug: string;
};

export type MarkdownModule = {
  metadata: {
    title: string;
    date: string;
    slug: string;
    tags: string[];
  };
  default: any;
};

const allPosts = import.meta.glob('$content/posts/*.md');

export async function load({ url }) {
	const posts: BlogPost[] = await Promise.all(
		Object.entries(allPosts).map(async ([path, resolver]) => {
			const { metadata } = (await resolver() as MarkdownModule);
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			return {
				title: metadata.title,
				date: metadata.date,
				tags: metadata.tags || [],
				slug: metadata.slug,
			};
		})
	);

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const tagFilter = url.searchParams.get('tag') || null;
	const filteredPosts = tagFilter
		? posts.filter((article) => article.tags.includes(tagFilter.replace('-', ' ')))
		: posts;

	return {
		posts: filteredPosts,
		tagFilter,
		allTags: Array.from(new Set(posts.flatMap((article) => article.tags)))
	};
}