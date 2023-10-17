import Link from 'next/link';

import { BsGithub } from 'react-icons/bs';

const BlogFooter = () => {
    return (
        <div id='notion-blog-footer' className='text-white w-full'>
            <div className='flex items-center space-x-3'>
                <p className='inline-flex'>
                    Build with{' '}
                    <Link href='https://github.com/okisdev/Notion-Blog-React' passHref target='_blank' className='flex items-center space-x-1 mx-2 hover:underline'>
                        <BsGithub />
                        <span className='font-semibold text-neutral-300'>Notion-Blog-React</span>
                    </Link>{' '}
                    by Harry Yep
                </p>
            </div>
        </div>
    );
};

export default BlogFooter;
