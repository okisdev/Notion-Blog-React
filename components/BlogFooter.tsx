const BlogFooter = () => {
    return (
        <div id='notion-blog-footer' className='leading-10 h-36 px-8'>
            <div className='text-center'>
                <p className='text-base'>Copyright © 2021 Harry Yep. All rights reserved.</p>
                <p>
                    Made by Harry Yep with <span className='text-red-600'>♥</span>
                </p>
                <p id='notion-blog-footer-built-with' className='text-sm text-gray-400 dark:text-white md:px-52'>
                    Built with <a href='https://reactjs.org'>React</a> & <a href='https://nextjs.org'>Next.js</a> & <a href='https://tailwindcss.com'>tailwindcss</a> &{' '}
                    <a href='https://www.typescriptlang.org/'>TypeScript</a>
                </p>
            </div>
        </div>
    );
};

export default BlogFooter;
