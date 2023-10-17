'use client';

import Link from 'next/link';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { RiRssFill } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';
import { AiOutlineSafety } from 'react-icons/ai';
import { BsTranslate } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import siteConfig from '@/config/site.config';
import modeConfig from '@/config/mode.config';

import { NavListItemProps } from '@/types/global';

const NavList: NavListItemProps[] = [
    {
        name: 'Home',
        href: '/',
        icon: BiHome,
        position: 'left',
    },
    {
        name: 'RSS',
        href: '/atom.xml',
        icon: RiRssFill,
        position: 'right',
    },
    {
        name: 'GitHub',
        href: siteConfig.global.author.github,
        icon: FiGithub,
        position: 'right',
    },
    {
        name: 'Email',
        href: 'mailto:' + siteConfig.global.author.email,
        icon: HiOutlineMail,
        position: 'right',
    },
    {
        name: 'Privacy Policy',
        href: siteConfig.global.author.privacy_policy,
        icon: AiOutlineSafety,
        position: 'right',
    },
];

const BlogNavBar = () => {
    return (
        <div id='notion-blog-navbar' className='text-white bg-black'>
            <div className='bg-white dark:bg-gray-500'>
                <div className='flex justify-center py-3'>
                    <nav className='flex space-x-3'>
                        {NavList.map((item: NavListItemProps, index: number) => {
                            return (
                                <Link href={item.href} key={index} passHref legacyBehavior>
                                    <a title={item.name}>
                                        <item.icon className='h-6 w-6' />
                                    </a>
                                </Link>
                            );
                        })}
                        {modeConfig.global.navbar.language.shown && (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <BsTranslate className='h-6 w-6' aria-hidden='true' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {siteConfig.global.site.language.map((item, index) => {
                                        return <DropdownMenuItem key={index}>{item.name}</DropdownMenuItem>;
                                    })}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default BlogNavBar;
