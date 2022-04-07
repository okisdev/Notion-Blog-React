import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BlogNavBar from '../components/BlogNavBar';
import BlogFooter from '../components/BlogFooter';
import BlogThemeSwither from '../components/BlogThemeSwitcher';

import siteConfig from '../config/site.config';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

const Error500 = () => {
    return (
        <div>
            <Head>
                <title>500 - {siteConfig.global.site.name}</title>
            </Head>

            <div id='notion-blog-500' className='min-h-screen flex flex-col dark:bg-[#23272d] font-Rubik'>
                <BlogNavBar></BlogNavBar>

                <div id='notion-blog-500-content' className='mx-auto flex flex-grow leading-10 dark:text-[#adbac7]'>
                    <div className='container mx-auto flex flex-col justify-center text-center'>
                        <h1 className='text-4xl font-bold'>500</h1>
                        <p>Internal Server Error.</p>
                    </div>
                </div>

                <BlogFooter></BlogFooter>

                <BlogThemeSwither></BlogThemeSwither>
            </div>
        </div>
    );
};

export default Error500;
