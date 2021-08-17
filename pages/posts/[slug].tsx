import Head from 'next/head';

import { FC } from 'react';

import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer, Code, Equation } from 'react-notion-x';

import { PostContent } from '../../utils/PostContent';

import Error404 from '../404';

import BlogNavBar from '../../components/BlogNavBar';
import BlogFooter from '../../components/BlogFooter';

import { getNotionPosts } from '../../utils/getNotionPosts';

const notionAPI = new NotionAPI();

export const getServerSideProps = async ({ params: { slug } }: { params: { slug: string } }) => {
    const notionPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const notionPostIndex = notionPosts.findIndex((post) => post.slug === slug);
    const notionPostID = notionPosts[notionPostIndex]!.id;
    const notionPost = notionPosts[notionPostIndex];

    const recordMap = await notionAPI.getPage(notionPostID);

    return {
        props: {
            notionPost,
            recordMap,
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
                <title>{notionPost.title} - Harry Yep&apos;s Blog | Harrly</title>
            </Head>

            <div id='notion-blog-post' className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-400 font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div className='container mx-auto px-6 sm:px-8'>
                    <div id='notion-blog-post-body-content' className='my-6 md:my-20 leading-6'>
                        <article id='notion-blog-post-article'>
                            <NotionRenderer recordMap={recordMap} fullPage={true} showTableOfContents={true} components={{ code: Code, equation: Equation }}></NotionRenderer>
                        </article>
                    </div>
                </div>

                <BlogFooter></BlogFooter>
            </div>
        </div>
    );
};

export default BlogPost;
