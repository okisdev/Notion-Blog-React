import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import { BiArrowBack } from 'react-icons/bi';

const BlogBackHome = () => {
    const { t } = useTranslation('common');

    return (
        <div id='notion-blog-back-home' className='container mx-auto px-6 sm:px-8 my-3'>
            <div className='mx-auto md:w-7/12 rounded border-2 p-3 space-y-3 dark:text-[#adbac7]'>
                <div className='flex'>
                    <div className='flex flex-row items-center space-x-2 transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'>
                        <BiArrowBack />
                        <Link href='/' passHref>
                            <a>{t('Back Home')}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBackHome;
