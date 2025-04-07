import { PostContent } from '@/components/post/content';
import { PostHeader } from '@/components/post/header';
import { ContentSkeleton, HeaderSkeleton, RelatedPostsSkeleton } from '@/components/post/loading';
import { RelatedPosts } from '@/components/post/related';
import { config } from '@/config';
import { getPostBySlug } from '@/lib/notion';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Get just the post ID for related posts
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className='space-y-6'>
      <Suspense fallback={<HeaderSkeleton />}>
        <PostHeader slug={slug} />
      </Suspense>

      <Suspense fallback={<ContentSkeleton />}>
        <PostContent slug={slug} />
      </Suspense>

      <div className='border-tertiary border-b' />

      <Suspense fallback={<RelatedPostsSkeleton />}>
        <RelatedPosts currentPostId={post.id} />
      </Suspense>

      <div className='border-tertiary border-b' />

      {config.post.footer}
    </div>
  );
}
