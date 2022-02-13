import Head from 'next/head';

import { Toaster } from 'react-hot-toast';

import BlogNavBar from '../components/BlogNavBar';
import BlogHeader from '../components/BlogHeader';
import BlogCard from '../components/BlogCard';
import BlogFooter from '../components/BlogFooter';

import { PostContent } from '../utils/PostContent';
import { getNotionPosts } from '../utils/getNotionPosts';
import BlogThemeSwither from '../components/BlogThemeSwitcher';

export const getStaticProps = async () => {
    const unSortedPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const posts = unSortedPosts.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });

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
                <title>Notion Blog React Example</title>

                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />

                <meta name='author' content='Harry Yep' />
                <meta name='description' content='Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.' />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />

                <meta property='og:title' content='Notion Blog React Example' />
                <meta property='og:description' content='Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.' />
                <meta property='og:url' content='https://react-notion-blog.demo.harisfox.com/' />

                <meta property='og:image' content={`https://cdn.harrly.com/project/GitHub/Notion-Blog-React/img/Notion-Blog-React.Banner.png`} />
                <meta property='og:url' content={`https://react-notion-blog.demo.harisfox.com/`} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content='Notion Blog React Example' />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={`Notion Blog React Example`} />
                <meta name='twitter:description' content={`Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.`} />
                <meta name='twitter:image' content={`https://cdn.harrly.com/project/GitHub/Notion-Blog-React/img/Notion-Blog-React.Banner.png`} />
                <meta name='twitter:url' content={`https://react-notion-blog.demo.harisfox.com/`} />
            </Head>

            <div id='notion-blog-homepage' className='min-h-screen flex flex-col dark:bg-[#23272d] font-Rubik'>
                <Toaster />

                <BlogNavBar></BlogNavBar>

                <div className='container mx-auto px-4 sm:px-6 justify-center flex-grow max-w-3xl'>
                    <div id='notion-blog-content' className='my-16'>
                        <BlogHeader></BlogHeader>

                        <div id='notion-blog-body' className='flex flex-col mt-12'>
                            {posts.map((post) => post.published && <BlogCard key={post.id} post={post} />)}
                        </div>
                    </div>
                </div>

                <BlogFooter></BlogFooter>

                <BlogThemeSwither></BlogThemeSwither>
            </div>
        </div>
    );
};

export default BlogHomePage;
