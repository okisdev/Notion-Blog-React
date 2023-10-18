'use client';

import Link from 'next/link';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { RiRssFill } from 'react-icons/ri';
import { BsTranslate } from 'react-icons/bs';

import siteConfig from '@/config/site.config';
import modeConfig from '@/config/mode.config';

import { NavListItemProps } from '@/types/global';

const navList: NavListItemProps[] = [
    {
        name: 'RSS',
        href: '/atom.xml',
        icon: RiRssFill,
    },
    // {
    //     name: 'GitHub',
    //     href: siteConfig.global.author.github,
    //     icon: FiGithub,
    // },
    // {
    //     name: 'Email',
    //     href: 'mailto:' + siteConfig.global.author.email,
    //     icon: HiOutlineMail,
    // },
    // {
    //     name: 'Privacy Policy',
    //     href: siteConfig.global.author.privacy_policy,
    //     icon: AiOutlineSafety,
    // },
];

const GlobalHeader = () => {
    return (
        <div className='flex items-center justify-between px-3 py-4'>
            <div>
                <Link href='/' className='text-center text-lg font-bold'>
                    Notion Blog React Example
                </Link>
            </div>
            <nav className='flex justify-center space-x-3'>
                {navList.map((item: NavListItemProps) => {
                    return (
                        <Link href={item.href} key={item.name} passHref title={item.name}>
                            <item.icon className='h-6 w-6' aria-hidden='true' />
                        </Link>
                    );
                })}
                {modeConfig.global.navbar.language.shown && (
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <BsTranslate className='h-6 w-6' aria-hidden='true' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {siteConfig.global.site.language.map((item) => {
                                return <DropdownMenuItem key={item.code}>{item.name}</DropdownMenuItem>;
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </nav>
        </div>
    );
};

export default GlobalHeader;
