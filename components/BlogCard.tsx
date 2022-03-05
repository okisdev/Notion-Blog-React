import Link from 'next/link';

import toast from 'react-hot-toast';

import { IoMdPricetags, IoIosPaper } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { PostContent } from '../utils/PostContent';
import getNotionPostSlug from '../utils/getNotionPostSlug';

const BlogCard = ({ post }: { post: PostContent }) => {
    return (
        <div id='notion-blog-body-card' className='transition duration-500 ease-in-out p-3 my-5 border-2 rounded-lg bg-white dark:bg-gray-500 hover:shadow-2xl'>
            <div id='notion-blog-body-card-content'>
                <div id='notion-blog-body-card-title' className='flex items-center font-bold text-lg mb-2 space-x-3 dark:text-blue-200 transition duration-500 ease-in-out hover:text-blue-400'>
                    <IoIosPaper />
                    <div
                        onClick={() => {
                            toast(`Loading...`, {
                                icon: <AiOutlineLoading3Quarters className='animate-spin' />,
                                style: {
                                    borderRadius: '15px',
                                    background: '#2d3748',
                                    color: '#cadada',
                                },
                            });
                        }}
                    >
                        <Link href='/posts/[slug]' as={getNotionPostSlug(post.slug)} passHref>
                            {post.title}
                        </Link>
                    </div>
                </div>

                <div id='notion-blog-body-card-description'>
                    {post.description == '' ? <div id='notion-blog-body-card-description-none'></div> : <span className='text-sm'>{post.description}</span>}
                </div>

                <div id='notion-blog-body-card-intro' className='flex items-center space-x-6 md:space-x-8'>
                    <div id='notion-blog-body-card-date'>
                        <span className='flex flex-row space-x-1'>
                            <MdDateRange />
                            <span className='text-sm'>{new Date(post.date).toLocaleDateString()}</span>
                        </span>
                    </div>

                    <div id='notion-blog-body-card-author'>
                        {post.author.map((author) => (
                            <div key={author.id}>
                                <span className='flex flex-row space-x-1'>
                                    <BsPeople />
                                    <span className='text-sm'>{author.fullName}</span>
                                </span>
                            </div>
                        ))}
                    </div>

                    <div id='notion-blog-body-card-tags'>
                        <div className='flex flex-row items-center space-x-1'>
                            <IoMdPricetags />
                            <span className='flex flex-row space-x-1'>
                                {post.tag.map((tag) => (
                                    <div id='notion-blog-body-card-tags-item' key={post.id} className='rounded p-1 bg-gray-100 dark:bg-[#adbac7]'>
                                        <span className='text-sm'>{tag}</span>
                                    </div>
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
