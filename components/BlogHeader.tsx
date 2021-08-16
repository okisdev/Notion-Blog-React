function BlogHeader() {
    return (
        <div id='notion-blog-header' className='px-16'>
            <div className='flex shadow-lg rounded-full'>
                <img id='notion-blog-header-avatar' src='https://cdn.harrly.com/private/Avatar/Avatar@Memoji.center.png' alt='avatar' width='40%' height='40%' />
                <div id='notion-blog-header-title' className='mt-10 md:mt-28 md:ml-12 text-lg md:text-2xl font-bold dark:text-white'>
                    Harry Yep&apos;s Blog
                </div>
            </div>

            <div id='notion-blog-header-description' className='mt-4 pt-3 text-center dark:text-white'>
                Have a nice day! :)
            </div>
        </div>
    );
}

export default BlogHeader;
