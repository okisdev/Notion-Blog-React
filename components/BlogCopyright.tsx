import { useEffect, useState } from 'react';

// import { useTranslations } from 'next-intl';

import siteConfig from '@/config/site.config';

const BlogCopyright = ({ notionPost }: { notionPost: any }) => {
    const [publishDomain, setPublishDomain] = useState('https://react-notion-blog.demo.harisfox.com');

    useEffect(() => setPublishDomain(window.location.origin), []);

    // const t = useTranslations('');

    return (
        <div id='notion-blog-copyright' className='container mx-auto my-3 px-6 sm:px-8'>
            <div className='mx-auto space-y-3 rounded border-2 p-3 dark:text-[#adbac7] md:w-7/12'>
                <div id='notion-blog-copyright-header'>
                    <div id='notion-blog-copyright-title'>
                        <p className='font-bold'>{notionPost.title}</p>
                    </div>
                    <div id='notion-blog-copyright-url'>
                        <a
                            href={`${publishDomain}/posts/${notionPost.slug}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600'
                        >
                            {publishDomain + '/posts/' + notionPost.slug}
                        </a>
                    </div>
                </div>
                <div id='notion-blog-copyright-body' className='flew-row flex space-x-3'>
                    <div id='notion-blog-copyright-author' className='flex flex-col'>
                        <p>{'Author'}</p>
                        {notionPost.author.map((author: any) => (
                            <div key={author.id}>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>{author.fullName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id='notion-blog-copyright-date' className='flex flex-col'>
                        <p>{'Date'}</p>
                        <div className='font-bold'>{notionPost.date}</div>
                    </div>
                    <div id='notion-blog-copyright-license' className='flex flex-col'>
                        <p>{'License'}</p>
                        <div className='font-bold'>
                            <a
                                href={siteConfig.global.content.license.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            >
                                {siteConfig.global.content.license.name}
                            </a>
                        </div>
                    </div>
                </div>
                <div id='notion-blog-copyright-footer'>
                    <p id='notion-blog-copyright-reminder' className='text-sm'>
                        {'* When reposting, sharing or citing this article, please abide by the license agreement and indicate the source of the article.'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCopyright;
