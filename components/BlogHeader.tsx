import siteConfig from '../config/site.config';
import modeConfig from '../config/mode.config';

const stringToJSX = () => {
    return {
        __html: siteConfig.global.content.header.description,
    };
};

const BlogHeader = () => {
    return (
        <div id='notion-blog-header' className='flex flex-row justify-center items-center my-10 space-x-2 md:space-x-8 dark:text-[#adbac7]'>
            {modeConfig.home.header.avatar.shown && (
                <div id='notion-blog-header-avatar'>
                    <img src={siteConfig.global.content.header.image_url} id='Avatar' alt='avatar' className='rounded-full border-2 ring-2 ring-offset-4 w-20 md:w-28' />
                </div>
            )}
            <div id='notion-blog-header-content'>
                <div id='notion-blog-header-title' className='text-center text-2xl font-bold'>
                    <span>{siteConfig.global.site.name}</span>
                </div>
                <div id='notion-blog-header-description' className='pt-6'>
                    <div className='text-center flex justify-center items-center space-x-2'>
                        <div dangerouslySetInnerHTML={stringToJSX()}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
