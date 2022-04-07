import PoweredByVercel from 'powered-by-vercel';

import siteConfig from '../config/site.config';
import modeConfig from '../config/mode.config';

const BlogFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div id='notion-blog-footer' className='leading-relaxed h-auto text-sm dark:text-[#adbac7]'>
            <div className='text-center'>
                <a href={siteConfig.global.content.license.url} className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                    {siteConfig.global.content.license.name}
                </a>
                <p>
                    Copyright &#169; {currentYear} {siteConfig.global.author.name}. All rights reserved.
                </p>
                <p>
                    Made by Harry Yep with <span className='text-red-600'>♥</span>
                </p>
                <p id='notion-blog-footer-built-with' className='text-sm md:px-52'>
                    Built with{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://reactjs.org'>
                        React
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://nextjs.org'>
                        Next.js
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://tailwindcss.com'>
                        tailwindcss
                    </a>{' '}
                    &{' '}
                    <a className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://www.typescriptlang.org/'>
                        TypeScript
                    </a>
                </p>
                {modeConfig.global.footer.poweredByVercel.shown && (
                    <PoweredByVercel
                        className='flex items-center justify-center my-1'
                        svgProps={{
                            width: 150,
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default BlogFooter;
