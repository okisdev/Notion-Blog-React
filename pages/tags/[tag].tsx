import Head from 'next/head';
import Link from 'next/link';

import { NotionRenderer, BlockMapType } from 'react-notion';

import BlogNavBar from '../../components/BlogNavBar';
import BlogFooter from '../../components/BlogFooter';

const BlogTag = () => {
    return (
        <div>
            <Head>
                <title>Harry Yep&apos;s Blog</title>
            </Head>

            <div id='notion-blog-tag' className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-400 font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div className='container mx-auto px-4 sm:px-6 justify-center flex-grow max-w-3xl'>
                    <div id='notion-blog-tag-body-content' className='my-64 leading-6'>
                        This page is still in development.
                    </div>
                </div>

                <BlogFooter></BlogFooter>
            </div>
        </div>
    );
};

export default BlogTag;
