function BlogHeader() {
    return (
        <div id='notion-blog-header' className='flex flex-row justify-center items-center my-10 space-x-2 md:space-x-8'>
            <div id='notion-blog-header-avatar' className='rounded-full border-2 ring-2 ring-offset-4 w-20 md:w-28'>
                <img src='https://cdn.harrly.com/private/Avatar/Avatar@Memoji.center.png' id='Avatar' alt='avatar' />
            </div>
            <div id='notion-blog-header-content'>
                <div id='notion-blog-header-title' className='text-center text-2xl font-bold'>
                    <span>Harry Yep&apos;s Blog</span>
                </div>
                <div id='notion-blog-header-description' className='pt-6'>
                    {new Date().getHours() < 18 && new Date().getHours() > 6 ? (
                        <div className='text-center flex justify-center items-center space-x-2'>
                            <span>Have a nice day. :-)</span>
                        </div>
                    ) : (
                        <div className='text-center flex justify-center items-center space-x-2'>
                            <span>Enjoy your night. :)</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogHeader;
