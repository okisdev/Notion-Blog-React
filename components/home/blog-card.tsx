'use client';

import Link from 'next/link';

// import { useTranslations } from 'next-intl';

import getNotionPostSlug from '@/utils/getNotionPostSlug';

import { PostContent } from '@/types/post';

import modeConfig from '@/config/mode.config';

const HomeBlogCard = ({ post }: { post: PostContent }) => {
    // const t = useTranslations('');

    return (
        <div className='my-5 space-y-1 p-3'>
            <Link href='/posts/[slug]' as={getNotionPostSlug(post.slug)} passHref className='flex items-center text-lg font-bold'>
                {post.title}
            </Link>
            <div>{post.description && <span className='text-sm text-zinc-400'>{post.description}</span>}</div>
            <div className='flex items-center space-x-2'>
                <span className='text-sm'>{new Date(post.date).toLocaleDateString(modeConfig.home.card.date.locale, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <span>•</span>
                {post.tag.map((tag: any) => (
                    <Link href={`?tag=${tag}`} key={post.id} className='rounded-xl text-sm hover:underline'>
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeBlogCard;
