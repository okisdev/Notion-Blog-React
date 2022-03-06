import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BlogNavBar from '../../components/BlogNavBar';
import BlogFooter from '../../components/BlogFooter';
import BlogThemeSwither from '../../components/BlogThemeSwitcher';

import { getNotionPosts } from '../../utils/getNotionPosts';

import siteConfig from '../../config/site.config';

export const getStaticProps = async ({ locale }) => {
    const posts = (await getNotionPosts()).filter((posts) => posts.published);

    return {
        props: {
            posts,
            ...(await serverSideTranslations(locale, ['common', 'footer'])),
        },
        revalidate: 60,
    };
};

const BlogTagsPage = () => {
    return (
        <div>
            <Head>
                <title>Tags - {siteConfig.global.site.name}</title>

                <meta charSet='UTF-8' />
                <meta name='author' content={siteConfig.global.author} />
                <meta name='description' content={siteConfig.global.site.name} />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
                <meta httpEquiv='x-dns-prefetch-control' content='on' />
                <meta name='description' content={siteConfig.global.site.name} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>

            <div id='notion-blog-tags' className='min-h-screen flex flex-col dark:bg-[#23272d] font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div className='container mx-auto px-6 sm:px-8 dark:text-[#adbac7]'>
                    <div id='notion-blog-tags-body-content' className='my-6 md:my-36 leading-6'>
                        <div>
                            <h1 className='text-3xl text-center my-20 md:my-56'>Tags</h1>
                            <div className='flex justify-center'>This page is still in development.</div>
                        </div>
                    </div>
                </div>

                <BlogFooter></BlogFooter>

                <BlogThemeSwither></BlogThemeSwither>
            </div>
        </div>
    );
};

export default BlogTagsPage;
