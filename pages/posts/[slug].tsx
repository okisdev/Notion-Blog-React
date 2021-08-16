import Head from 'next/head';

import { NotionRenderer, BlockMapType } from 'react-notion';

import Error404 from '../404';

import BlogNavBar from '../../components/BlogNavBar';
import BlogFooter from '../../components/BlogFooter';

import { getNotionPosts } from '../../utils/getNotionPosts';

const NOTION_API = process.env.NOTION_API;

export async function getServerSideProps(context) {
    const notionPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const notionPostIndex = notionPosts.findIndex((post) => post.slug === context.params.slug);
    const notionPostID = notionPosts[notionPostIndex].id;

    const data: BlockMapType = await fetch(`https://${NOTION_API}/v1/page/${notionPostID}`).then((response) => response.json());

    return {
        props: {
            blockMap: data,
        },
    };
}

const BlogPost = ({ blockMap }) => {
    if (!blockMap || Object.keys(blockMap).length === 0) {
        return (
            <div>
                <Error404 />
            </div>
        );
    }

    const notionPostTitle = blockMap[Object.keys(blockMap)[0]]?.value.properties.title[0][0];

    return (
        <div>
            <Head>
                <title>{notionPostTitle} - Harry Yep&apos;s Blog | Harrly</title>
            </Head>

            <div id='notion-blog-post' className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-400 font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div className='container mx-auto px-6 sm:px-8'>
                    <div id='notion-blog-post-body-content' className='my-6 md:my-36 leading-6'>
                        <article>
                            <NotionRenderer blockMap={blockMap} fullPage hideHeader></NotionRenderer>
                        </article>
                    </div>
                </div>

                <BlogFooter></BlogFooter>
            </div>
        </div>
    );
};

export default BlogPost;
