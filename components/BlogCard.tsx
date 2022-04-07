import Link from 'next/link';

import toast from 'react-hot-toast';
import { useTranslation } from 'next-i18next';

import { IoMdPricetags, IoIosPaper } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { PostContent } from '../utils/PostContent';
import getNotionPostSlug from '../utils/getNotionPostSlug';

import modeConfig from '../config/mode.config';

const BlogCard = ({ post }: { post: PostContent }) => {
    const { t } = useTranslation();

    return (
        <div id='notion-blog-body-card' className='transition duration-500 ease-in-out p-3 my-5 border-2 rounded-lg bg-white dark:bg-gray-500 hover:shadow-2xl'>
            <div id='notion-blog-body-card-content'>
                <div id='notion-blog-body-card-title' className='flex items-center font-bold text-lg mb-2 space-x-3 dark:text-blue-200 transition duration-500 ease-in-out hover:text-blue-400'>
                    <IoIosPaper />
                    <div
                        onClick={() => {
                            toast(t('Loading...'), {
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

                <div id='notion-blog-body-card-description' className='my-1'>
                    {post.description == '' ? <div id='notion-blog-body-card-description-none'></div> : <span className='text-sm dark:text-gray-300'>{post.description}</span>}
                </div>

                {modeConfig.home.card.mode === 0 ? (
                    <div id='notion-blog-body-card-intro' className='flex items-center space-x-6 md:space-x-8'>
                        <div id='notion-blog-body-card-date'>
                            <span className='flex flex-row space-x-1'>
                                <MdDateRange />
                                <span className='text-sm dark:text-gray-300'>
                                    {new Date(post.date).toLocaleDateString(modeConfig.home.card.date.locale, { year: 'numeric', month: 'short', day: 'numeric' })}
                                </span>
                            </span>
                        </div>

                        <div id='notion-blog-body-card-author'>
                            {post.author.map((author) => (
                                <div key={author.id}>
                                    <span className='flex flex-row space-x-1'>
                                        <BsPeople />
                                        <span className='text-sm dark:text-gray-300'>{author.fullName}</span>
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div id='notion-blog-body-card-tags'>
                            <div className='flex flex-row items-center space-x-1'>
                                <IoMdPricetags />
                                <span className='flex flex-row space-x-1'>
                                    {post.tag.map((tag) => (
                                        <div id='notion-blog-body-card-tags-item' key={post.id} className='bg-blue-200 dark:bg-[#728796] px-2 rounded-xl'>
                                            <span className='text-sm dark:text-gray-300'>{tag}</span>
                                        </div>
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id='notion-blog-body-card-intro'>
                        <div className='flex items-center space-x-3'>
                            <span className='text-sm dark:text-gray-300'>
                                {new Date(post.date).toLocaleDateString(modeConfig.home.card.date.locale, { year: 'numeric', month: 'short', day: 'numeric' })}
                            </span>
                            <div>•</div>
                            {post.author.map((author: any) => (
                                <span className='text-sm dark:text-gray-300' key={author.id}>
                                    {author.fullName}
                                </span>
                            ))}
                            <div>•</div>
                            {post.tag.map((tag: any) => (
                                <div id='notion-blog-body-card-tags-item' key={post.id} className='bg-blue-200 dark:bg-[#728796] px-2 rounded-xl'>
                                    <span className='text-sm dark:text-gray-300'>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogCard;
