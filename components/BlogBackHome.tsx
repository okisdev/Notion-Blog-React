import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import { BiArrowBack } from 'react-icons/bi';

const BlogBackHome = () => {
    const { t } = useTranslation('common');

    return (
        <div id='notion-blog-back-home' className='container mx-auto my-3 px-6 sm:px-8'>
            <div className='mx-auto space-y-3 rounded border-2 p-3 dark:text-[#adbac7] md:w-7/12'>
                <div className='flex'>
                    <div className='flex flex-row items-center space-x-2 underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600'>
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
