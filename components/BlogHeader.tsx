function BlogHeader() {
    return (
        <div id='notion-blog-header' className='flex flex-row justify-center items-center my-10 space-x-2 md:space-x-8 dark:text-[#adbac7]'>
            <div id='notion-blog-header-avatar'>
                <img src='https://cdn.harrly.com/global/assets/icon/android-chrome-192x192.png' id='Avatar' alt='avatar' className='rounded-full border-2 ring-2 ring-offset-4 w-20 md:w-28' />
            </div>
            <div id='notion-blog-header-content'>
                <div id='notion-blog-header-title' className='text-center text-2xl font-bold'>
                    <span>Notion Blog React Example</span>
                </div>
                <div id='notion-blog-header-description' className='pt-6'>
                    <div className='text-center flex justify-center items-center space-x-2'>
                        <span>
                            Blog built with{' '}
                            <a href='https://notion.so/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                                Notion
                            </a>
                            ,{' '}
                            <a href='https://reactjs.org/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                                React
                            </a>
                            ,{' '}
                            <a href='https://nextjs.org/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                                Next.js
                            </a>
                            ,{' '}
                            <a href='https://tailwindcss.com/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                                tailwindcss
                            </a>
                            ,{' '}
                            <a
                                href='https://www.typescriptlang.org/'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                TypeScript
                            </a>
                            ,{' '}
                            <a
                                href='https://github.com/splitbee/notion-api-worker'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Notion-Api-Worker
                            </a>{' '}
                            and more. (Find more on{' '}
                            <a
                                href='https://github.com/Harry-Yep/Notion-Blog-React'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                GitHub
                            </a>
                            )
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogHeader;
