import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';

import { getNotionPosts } from '@/utils/getNotionPosts';

import modeConfig from '@/config/mode.config';

const notionAPI = new NotionAPI();

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = modeConfig.posts.collection.shown ? dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection)) : null;
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation));
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
    ssr: false,
});
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
    ssr: false,
});

const getPost = async (slug: string) => {
    const notionPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const notionPostIndex = notionPosts.findIndex((post) => post.slug === slug);
    const notionPostID = notionPosts[notionPostIndex]!.id;
    const notionPost = notionPosts[notionPostIndex];

    const recordMap = await notionAPI.getPage(notionPostID);

    return { recordMap, notionPost };
};

export default async function PhotoPostPage({ params }: { params: { slug: string } }) {
    const postSlug = params.slug;

    const { recordMap, notionPost } = await getPost(postSlug);

    return (
        <article id='notion-blog-post-article'>
            {/* <NotionRenderer
                recordMap={recordMap}
                fullPage={true}
                showTableOfContents={modeConfig.posts.toc.shown}
                components={{
                    Code,
                    Equation,
                    Collection,
                    Modal,
                    Pdf,
                    nextImage: Image,
                    nextLink: Link,
                }}
                className='dark:text-[#adbac7]'
            ></NotionRenderer> */}
        </article>
    );
}
