import siteConfig from '@/config/site.config';
import modeConfig from '@/config/mode.config';

import BlogNavBar from '@/components/BlogNavBar';

const BlogHeader = () => {
    return (
        <div id='notion-blog-header' className='my-10 flex flex-row items-center justify-center space-x-2 text-white md:space-x-8'>
            {modeConfig.home.header.avatar.shown && (
                <div id='notion-blog-header-avatar'>
                    <img src={siteConfig.global.content.header.image_url} id='Avatar' alt='avatar' className='w-20 rounded-full border-2 ring-2 ring-offset-4 md:w-28' />
                </div>
            )}
            <div id='notion-blog-header-content'>
                <div id='notion-blog-header-title' className='text-center text-2xl font-bold'>
                    <span>Notion Blog React Example</span>
                </div>
            </div>
            <BlogNavBar />
        </div>
    );
};

export default BlogHeader;
