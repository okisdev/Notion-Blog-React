import Link from 'next/link';

import { RiRssFill } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BiHome } from 'react-icons/bi';
import { AiOutlineSafety } from 'react-icons/ai';
import { CgHomeAlt } from 'react-icons/cg';
import { FaTags } from 'react-icons/fa';

const BlogNavBar = () => {
    return (
        <div id='notion-blog-navbar' className='bg-white dark:bg-gray-500'>
            <div className='container mx-auto justify-center md:mr-6'>
                <nav className='flex my-3'>
                    <div id='notion-blog-navbar-start' className='flex items-start mr-20 md:mr-80'>
                        <div className='mx-3'>
                            <Link href='/'>
                                <a>
                                    <BiHome className='h-6 w-6' />
                                </a>
                            </Link>
                        </div>
                        <div className='mx-3'>
                            <Link href='/'>
                                <a>
                                    <FaTags className='h-6 w-6' />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div id='notion-blog-navbar-end' className='flex items-end'>
                        <div className='mx-3'>
                            <Link href='https://www.harrly.com'>
                                <a>
                                    <CgHomeAlt className='h-6 w-6' />
                                </a>
                            </Link>
                        </div>
                        <div className='mx-3'>
                            <Link href='https://blog.harrly.com/atom.xml'>
                                <a>
                                    <RiRssFill className='h-6 w-6' />
                                </a>
                            </Link>
                        </div>
                        <div className='mx-3'>
                            <Link href='https://github.com/Harry-Yep'>
                                <a>
                                    <FiGithub className='h-6 w-6' />
                                </a>
                            </Link>
                        </div>
                        <div className='mx-3'>
                            <Link href='mailto:hi@harrly.com'>
                                <a>
                                    <HiOutlineMail className='h-6 w-6' />
                                </a>
                            </Link>
                        </div>
                        <div className='mx-3'>
                            <Link href='https://www.harrly.com/privacy-policy'>
                                <a>
                                    <AiOutlineSafety className='h-6 w-6' />
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default BlogNavBar;
