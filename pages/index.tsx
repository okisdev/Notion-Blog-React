import Head from 'next/head';

import BlogNavBar from '../components/BlogNavBar';
import BlogHeader from '../components/BlogHeader';
import BlogCard from '../components/BlogCard';
import BlogFooter from '../components/BlogFooter';

import { PostContent } from '../utils/PostContent';
import { getNotionPosts } from '../utils/getNotionPosts';

export const getStaticProps = async () => {
    const posts = (await getNotionPosts()).filter((posts) => posts.published);

    return {
        props: {
            posts,
        },
        revalidate: 60,
    };
};

const BlogHomePage = ({ posts }: { posts: PostContent[] }) => {
    return (
        <div>
            <Head>
                <title>Harry Yep&apos;s Blog</title>

                <meta charSet='UTF-8' />
                <meta name='author' content='Harry Yep' />
                <meta name='description' content="Harry Yep's Blog | Harrly" />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
                <meta name='description' content="Harry Yep's Personal Website | Harrly" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />

                <meta content="Harry Yep's Blog | Harrly" property='og:title' />
                <meta content="Harry Yep's Blog | Harrly" property='og:site_name' />
                <meta content='https://blog.harrly.com/' property='og:url' />
            </Head>

            <div id='notion-blog-homepage' className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-400 font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div className='container mx-auto px-4 sm:px-6 justify-center flex-grow max-w-3xl'>
                    <div id='notion-blog-content' className='my-16'>
                        <BlogHeader></BlogHeader>

                        <div id='notion-blog-body' className='mt-12 leading-loose flex flex-col'>
                            {posts.map((post) => post.published && <BlogCard key={post.id} post={post} />)}
                        </div>
                    </div>
                </div>

                <BlogFooter></BlogFooter>
            </div>
        </div>
    );
};

export default BlogHomePage;
