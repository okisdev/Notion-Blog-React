import { NotionAPI } from 'notion-client';

import { getNotionPosts } from '@/utils/getNotionPosts';
import { NotionPage } from '@/components/notion-page';

const notionAPI = new NotionAPI();

const getPost = async (slug: string) => {
    const notionPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const notionPostIndex = notionPosts.findIndex((post) => post.slug === slug);
    const notionPostID = notionPosts[notionPostIndex]!.id;

    const recordMap = await notionAPI.getPage(notionPostID);

    return { recordMap };
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const postSlug = params.slug;

    const { recordMap } = await getPost(postSlug);

    return (
        <article>
            <NotionPage recordMap={recordMap} />
        </article>
    );
}
