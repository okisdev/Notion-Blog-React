import Link from 'next/link';

import { IoMdPricetags, IoIosPaper } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';

import { PostContent } from '../utils/PostContent';

import getNotionPostSlug from '../utils/getNotionPostSlug';

const BlogCard = ({ post }: { post: PostContent }) => {
    return (
        <div id='notion-blog-body-card' className='transition duration-500 ease-in-out p-3 my-5 border-2 rounded-lg bg-white dark:bg-gray-500 hover:shadow-2xl'>
            <div id='notion-blog-body-card-content'>
                <div id='notion-blog-body-card-title' className='flex items-center font-bold text-xl mb-2 md:mb-3 space-x-3 dark:text-blue-100 transition duration-500 ease-in-out hover:text-blue-400'>
                    <IoIosPaper />
                    <Link href='/posts/[slug]' as={getNotionPostSlug(post.slug)} passHref>
                        {post.title}
                    </Link>
                    <svg className='invisible animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                </div>

                <div id='notion-blog-body-card-description' className='mb-1 md:mb-2'>
                    {post.description}
                </div>

                <div id='notion-blog-body-card-intro' className='flex items-center space-x-6 md:space-x-8'>
                    <div id='notion-blog-body-card-date' className='flex items-center'>
                        <span className='flex flex-col'>
                            <MdDateRange className='mb-1' />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                        </span>
                    </div>

                    <div id='notion-blog-body-card-author' className='flex items-center'>
                        {post.author.map((author) => (
                            <div key={author.id}>
                                <span className='flex flex-col'>
                                    <BsPeople className='mb-1' />
                                    <span>{author.fullName}</span>
                                </span>
                            </div>
                        ))}
                    </div>

                    <div id='notion-blog-body-card-tags' className='flex items-center'>
                        <span className='flex flex-col'>
                            <IoMdPricetags className='mb-1' />
                            <span className='flex flex-row'>
                                {post.tag.map((tag) => (
                                    <div
                                        id='notion-blog-body-card-tags-item'
                                        className='rounded ms:border-2 px-2 py-1 mb-1 mx-1 text-sm text-indigo-500 dark:text-indigo-500 bg-blue-100 dark:bg-blue-100'
                                        key={post.id}
                                    >
                                        <span>{tag}</span>
                                    </div>
                                ))}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
