import { useTranslation } from 'next-i18next';

import siteConfig from '../config/site.config';

const BlogCopyright = ({ notionPost }) => {
    const publishDomain = typeof window !== 'undefined' ? window.location.origin : 'https://react-notion-blog.demo.harisfox.com';

    const { t } = useTranslation();

    return (
        <div id='notion-blog-copyright' className='container mx-auto px-6 sm:px-8 my-3'>
            <div className='mx-auto md:w-7/12 rounded border-2 p-3 space-y-3 dark:text-[#adbac7]'>
                <div id='notion-blog-copyright-header'>
                    <div id='notion-blog-copyright-title'>
                        <span className='font-bold'>{notionPost.title}</span>
                    </div>
                    <div id='notion-blog-copyright-url'>
                        <span>
                            <a
                                href={`${publishDomain}/posts/${notionPost.slug}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            >
                                {publishDomain}/posts/{notionPost.slug}
                            </a>
                        </span>
                    </div>
                </div>
                <div id='notion-blog-copyright-body' className='flex flew-row space-x-3'>
                    <div id='notion-blog-copyright-author' className='flex flex-col'>
                        <span>{t('Author')}</span>
                        {notionPost.author.map((author) => (
                            <div key={author.id}>
                                <span className='flex flex-col'>
                                    <span className='font-bold'>{author.fullName}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div id='notion-blog-copyright-date' className='flex flex-col'>
                        <span>{t('Date')}</span>
                        <span className='font-bold'>{notionPost.date}</span>
                    </div>
                    <div id='notion-blog-copyright-license' className='flex flex-col'>
                        <span>{t('License')}</span>
                        <span className='font-bold'>
                            <a
                                href={siteConfig.global.content.license.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            >
                                {siteConfig.global.content.license.name}
                            </a>
                        </span>
                    </div>
                </div>
                <div id='notion-blog-copyright-footer'>
                    <p id='notion-blog-copyright-reminder' className='text-sm'>
                        {t('* When reposting, sharing or citing this article, please abide by the license agreement and indicate the source of the article.')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCopyright;
