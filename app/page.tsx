import HomeBlogCard from '@/components/home/blog-card';
import GlobalHeader from '@/components/global/header';

import { getNotionPosts } from '@/utils/getNotionPosts';

const getPosts = async () => {
    const unSortedPosts = (await getNotionPosts()).filter((posts) => posts.published);

    return unSortedPosts.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
};

export default async function Home() {
    const posts = await getPosts();

    return (
        <main>
            <GlobalHeader />
            <div>{posts.map((post: any) => post.published && <HomeBlogCard key={post.id} post={post} />)}</div>
        </main>
    );
}
