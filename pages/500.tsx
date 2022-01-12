import Head from 'next/head';

import BlogNavBar from '../components/BlogNavBar';
import BlogFooter from '../components/BlogFooter';

const Error500 = () => {
    return (
        <div>
            <Head>
                <title>500 - Notion Blog React Example</title>
            </Head>

            <div id='notion-blog-500' className='min-h-screen flex flex-col bg-gray-100 dark:bg-gray-400 font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div id='notion-blog-500-content' className='mx-auto flex flex-grow leading-10'>
                    <div className='container mx-auto flex flex-col justify-center text-center'>
                        <h1 className='text-4xl font-bold'>500</h1>
                        <p>Internal Server Error.</p>
                    </div>
                </div>

                <BlogFooter></BlogFooter>
            </div>
        </div>
    );
};

export default Error500;
