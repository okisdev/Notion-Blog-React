import { BiArrowBack } from 'react-icons/bi';

const BlogBackHome = () => {
    return (
        <div id='notion-blog-back-home' className='container mx-auto max-w-screen-lg dark:text-[#adbac7]'>
            <div className='flex flex-row items-center space-x-2'>
                <BiArrowBack />
                <a href='/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'>
                    Back Home
                </a>
            </div>
        </div>
    );
};

export default BlogBackHome;
