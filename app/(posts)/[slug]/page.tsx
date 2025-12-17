import { PostContent } from '@/components/post/content';
import { PostHeader } from '@/components/post/header';
import { PostSkeleton } from '@/components/post/loading';
import { RelatedPosts } from '@/components/post/related';
import { config } from '@/config';
import { getPostBySlug } from '@/lib/notion';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className='space-y-6'>
      <Suspense
        fallback={<PostSkeleton sections={['header', 'content', 'related']} />}
      >
        <PostHeader slug={slug} />

        <Suspense fallback={<PostSkeleton sections={['content', 'related']} />}>
          <PostContent slug={slug} />

          <Suspense fallback={<PostSkeleton sections={['related']} />}>
            <div className='border-tertiary border-b' />
            <RelatedPosts slug={slug} />
            <div className='border-tertiary border-b' />
            {config.post.footer}
          </Suspense>
        </Suspense>
      </Suspense>
    </div>
  );
}
