import Link from 'next/link';

// import { useTranslations } from 'next-intl';

import { BiArrowBack } from 'react-icons/bi';

const PostBackHomeButton = () => {
    // const t = useTranslations('');

    return (
        <div className='container mx-auto my-3 px-6 sm:px-8'>
            <div className='mx-auto space-y-3 rounded border-2 p-3 dark:text-[#adbac7] md:w-7/12'>
                <div className='flex'>
                    <div className='flex flex-row items-center space-x-2 underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600'>
                        <BiArrowBack />
                        <Link href='/' passHref>
                            {'Back Home'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostBackHomeButton;
