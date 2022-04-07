import Head from 'next/head';

import { Toaster } from 'react-hot-toast';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BlogNavBar from '../components/BlogNavBar';
import BlogHeader from '../components/BlogHeader';
import BlogCard from '../components/BlogCard';
import BlogFooter from '../components/BlogFooter';

import { PostContent } from '../utils/PostContent';
import { getNotionPosts } from '../utils/getNotionPosts';
import BlogThemeSwither from '../components/BlogThemeSwitcher';

import siteConfig from '../config/site.config';

export const getStaticProps = async ({ locale }) => {
    const unSortedPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const posts = unSortedPosts.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    return {
        props: {
            posts,
            ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 60,
    };
};

const BlogHomePage = ({ posts }: { posts: PostContent[] }) => {
    return (
        <div>
            <Head>
                <title>{siteConfig.global.site.name}</title>

                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />

                <meta name='author' content={siteConfig.global.author.name} />
                <meta name='description' content={siteConfig.global.site.description} />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />

                <meta property='og:title' content={siteConfig.global.site.name} />
                <meta property='og:description' content={siteConfig.global.site.description} />
                <meta property='og:url' content={siteConfig.global.site.url} />

                <meta property='og:image' content={siteConfig.global.site.banner_img} />
                <meta property='og:url' content={siteConfig.global.site.url} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content={siteConfig.global.site.name} />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={siteConfig.global.site.name} />
                <meta name='twitter:description' content={siteConfig.global.site.description} />
                <meta name='twitter:image' content={siteConfig.global.site.banner_img} />
                <meta name='twitter:url' content={siteConfig.global.site.url} />
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
