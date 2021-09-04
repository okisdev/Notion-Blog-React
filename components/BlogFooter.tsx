const BlogFooter = () => {
    return (
        <div id='notion-blog-footer' className='leading-10 h-36 px-8'>
            <div className='text-center'>
                <p className='text-base'>Copyright © 2021 Harry Yep. All rights reserved.</p>
                <p>
                    Made by Harry Yep with <span className='text-red-600'>♥</span>
                </p>
                <p id='notion-blog-footer-built-with' className='text-sm md:px-52'>
                    Built with{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500' href='https://reactjs.org'>
                        React
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500' href='https://nextjs.org'>
                        Next.js
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500' href='https://tailwindcss.com'>
                        tailwindcss
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500' href='https://www.typescriptlang.org/'>
                        TypeScript
                    </a>
                </p>
            </div>
        </div>
    );
};

export default BlogFooter;
