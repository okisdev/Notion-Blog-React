import BlogCard from '@/components/BlogCard';
import BlogHeader from '@/components/BlogHeader';

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
        <main className='container mx-auto max-w-3xl flex-grow justify-center px-4 sm:px-6'>
            <div id='notion-blog-content' className='my-16'>
                <BlogHeader />

                <div id='notion-blog-body' className='mt-12 flex flex-col'>
                    {posts.map((post: any) => post.published && <BlogCard key={post.id} post={post} />)}
                </div>
            </div>
        </main>
    );
}
