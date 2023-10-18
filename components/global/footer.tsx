import Link from 'next/link';

import { BsGithub } from 'react-icons/bs';

const GlobalFooter = () => {
    return (
        <div className='fixed bottom-0 flex items-center justify-start bg-black px-3 py-4'>
            <p className='inline-flex text-sm'>
                <span>Build with</span>{' '}
                <Link href='https://github.com/okisdev/Notion-Blog-React' passHref target='_blank' className='mx-2 flex items-center space-x-1 font-semibold hover:underline'>
                    <BsGithub />
                    <span className='font-semibold text-neutral-300'>Notion-Blog-React</span>
                </Link>{' '}
                <span>by Harry Yep</span>
            </p>
        </div>
    );
};

export default GlobalFooter;
