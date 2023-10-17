import siteConfig from '@/config/site.config';
import modeConfig from '@/config/mode.config';

const stringToJSX = () => {
    return {
        __html: siteConfig.global.content.header.description,
    };
};

const BlogHeader = () => {
    return (
        <div id='notion-blog-header' className='my-10 flex flex-row items-center justify-center space-x-2 dark:text-[#adbac7] md:space-x-8'>
            {modeConfig.home.header.avatar.shown && (
                <div id='notion-blog-header-avatar'>
                    <img src={siteConfig.global.content.header.image_url} id='Avatar' alt='avatar' className='w-20 rounded-full border-2 ring-2 ring-offset-4 md:w-28' />
                </div>
            )}
            <div id='notion-blog-header-content'>
                <div id='notion-blog-header-title' className='text-center text-2xl font-bold'>
                    <span>{siteConfig.global.site.name}</span>
                </div>
                <div id='notion-blog-header-description' className='pt-6'>
                    <div className='flex items-center justify-center space-x-2 text-center'>
                        <div dangerouslySetInnerHTML={stringToJSX()}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
