import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { PostContent } from '@/components/post/content';
import { PostFooter } from '@/components/post/footer';
import { PostHeader } from '@/components/post/header';
import { PostSkeleton } from '@/components/post/loading';
import { RelatedPosts } from '@/components/post/related';
import { getPostBySlug } from '@/lib/notion';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

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
            <PostFooter />
          </Suspense>
        </Suspense>
      </Suspense>
    </div>
  );
}
