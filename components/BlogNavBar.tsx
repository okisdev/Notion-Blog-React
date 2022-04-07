import { Fragment } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Menu, Transition } from '@headlessui/react';

import { RiRssFill } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';
import { AiOutlineSafety } from 'react-icons/ai';
import { BsTranslate } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import siteConfig from '../config/site.config';
import modeConfig from '../config/mode.config';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

const BlogNavBar = () => {
    const { asPath } = useRouter();

    return (
        <div id='notion-blog-navbar' className='sticky top-0 z-50'>
            <div className='bg-white dark:bg-gray-500'>
                <div className='flex justify-center py-3'>
                    <nav className='flex'>
                        <div id='notion-blog-navbar-start' className='flex items-start mr-20 md:mr-80'>
                            <div className='mx-3'>
                                <Link href='/' passHref>
                                    <a title='Homepage'>
                                        <BiHome className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div id='notion-blog-navbar-end' className='flex items-end'>
                            {modeConfig.global.navbar.atom.shown && (
                                <div className='mx-3'>
                                    <Link href='/atom.xml' passHref>
                                        <a title='RSS'>
                                            <RiRssFill className='h-6 w-6' />
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {modeConfig.global.navbar.github.shown && (
                                <div className='mx-3'>
                                    <Link href={siteConfig.global.author.github} passHref>
                                        <a title='GitHub'>
                                            <FiGithub className='h-6 w-6' />
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {modeConfig.global.navbar.email.shown && (
                                <div className='mx-3'>
                                    <Link href={'mailto:' + siteConfig.global.author.email} passHref>
                                        <a title='email'>
                                            <HiOutlineMail className='h-6 w-6' />
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {modeConfig.global.navbar.privacy_policy.shown && (
                                <div className='mx-3'>
                                    <Link href={siteConfig.global.author.privacy_policy} passHref>
                                        <a title='Privacy Policy'>
                                            <AiOutlineSafety className='h-6 w-6' />
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {modeConfig.global.navbar.language.shown && (
                                <Menu as='div' className='mx-3 ml-3 relative'>
                                    <div>
                                        <Menu.Button className='flex text-sm rounded-full'>
                                            <span className='sr-only'>Open language menu</span>
                                            <BsTranslate className='h-6 w-6' aria-hidden='true' />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-100'
                                        enterFrom='transform opacity-0 scale-95'
                                        enterTo='transform opacity-100 scale-100'
                                        leave='transition ease-in duration-75'
                                        leaveFrom='transform opacity-100 scale-100'
                                        leaveTo='transform opacity-0 scale-95'
                                    >
                                        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                            {siteConfig.global.site.language.map((item, index) => {
                                                return (
                                                    <Menu.Item key={index}>
                                                        {({ active }) => (
                                                            <Link href={item.code} as={asPath} locale={item.code}>
                                                                <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>{item.name}</a>
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                );
                                            })}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default BlogNavBar;
