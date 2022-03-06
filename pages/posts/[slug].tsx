import Head from 'next/head';

import { FC } from 'react';

import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer, Code, Equation } from 'react-notion-x';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Error404 from '../404';

import BlogNavBar from '../../components/BlogNavBar';
import BlogFooter from '../../components/BlogFooter';
import BlogBackHome from '../../components/BlogBackHome';
import BlogCopyright from '../../components/BlogCopyright';
import BlogThemeSwither from '../../components/BlogThemeSwitcher';

import { PostContent } from '../../utils/PostContent';
import { getNotionPosts } from '../../utils/getNotionPosts';

import siteConfig from '../../config/site.config';

const notionAPI = new NotionAPI();

export const getServerSideProps = async ({ params, locale }) => {
    const { slug } = params as { slug: string };

    const notionPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const notionPostIndex = notionPosts.findIndex((post) => post.slug === slug);
    const notionPostID = notionPosts[notionPostIndex]!.id;
    const notionPost = notionPosts[notionPostIndex];

    const recordMap = await notionAPI.getPage(notionPostID);

    return {
        props: {
            notionPost,
            recordMap,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
};

const BlogPost: FC<{ recordMap: ExtendedRecordMap; notionPost: PostContent }> = ({ recordMap, notionPost }: { recordMap: ExtendedRecordMap; notionPost: PostContent }) => {
    if (!recordMap) {
        return (
            <div>
                <Error404 />
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>
                    {notionPost.title} - {siteConfig.global.site.name}
                </title>

                <meta name='description' content={`${notionPost.description} - ${siteConfig.global.site.name}`} />
                <meta name='keywords' content={`${notionPost.tag}, ${siteConfig.global.author}, Blog, ${siteConfig.global.site.name}`} />

                <meta property='og:title' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta property='og:description' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta property='og:url' content={`${siteConfig.global.site.url}/posts/${notionPost.slug}`} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content={siteConfig.global.site.name} />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta name='twitter:description' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta name='twitter:url' content={`${siteConfig.global.site.url}/posts/${notionPost.slug}`} />
            </Head>

            <div id='notion-blog-post' className='min-h-screen flex flex-col dark:bg-[#23272d] font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div className='container mx-auto px-6 sm:px-8'>
                    <div id='notion-blog-post-body-content' className='my-6 md:my-20 leading-6'>
                        <article id='notion-blog-post-article'>
                            <NotionRenderer
                                recordMap={recordMap}
                                fullPage={true}
                                showTableOfContents={true}
                                components={{ code: Code, equation: Equation }}
                                className='dark:text-[#adbac7]'
                            ></NotionRenderer>
                        </article>

                        <BlogCopyright notionPost={notionPost}></BlogCopyright>

                        <BlogBackHome></BlogBackHome>
                    </div>
                </div>

                <BlogFooter></BlogFooter>

                <BlogThemeSwither></BlogThemeSwither>
            </div>
        </div>
    );
};

export default BlogPost;
