import Head from 'next/head';

import BlogNavBar from '../../components/BlogNavBar';
import BlogFooter from '../../components/BlogFooter';

import { getNotionPosts } from '../../utils/getNotionPosts';

export const getStaticProps = async () => {
    const posts = (await getNotionPosts()).filter((posts) => posts.published);

    return {
        props: {
            posts,
        },
        revalidate: 60,
    };
};

const BlogTagsPage = () => {
    return (
        <div>
            <Head>
                <title>Tags - Harry Yep&apos;s Blog | Harrly</title>

                <meta charSet='UTF-8' />
                <meta name='author' content='Harry Yep' />
                <meta name='description' content="Harry Yep's Blog | Harrly" />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
                <meta name='description' content="Harry Yep's Personal Website | Harrly" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>

            <div id='notion-blog-post' className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-400 font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div className='container mx-auto px-6 sm:px-8'>
                    <div id='notion-blog-tags-body-content' className='my-6 md:my-36 leading-6'>
                        <div>
                            <h1 className='text-3xl text-center my-20 md:my-56'>Tags</h1>
                            <div className='item-center mx-auto px-6 sm:px-8'>This page is still in development.</div>
                        </div>
                    </div>
                </div>

                <BlogFooter></BlogFooter>
            </div>
        </div>
    );
};

export default BlogTagsPage;
