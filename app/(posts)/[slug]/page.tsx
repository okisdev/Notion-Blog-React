import { ContentSkeleton, HeaderSkeleton, RelatedPostsSkeleton } from '@/components/post/loading';
import { MarkdownRenderer } from '@/components/shared/markdown-renderer';
import { config } from '@/config';
import { getAllPosts, getPostBySlug } from '@/lib/notion';
import { format } from 'date-fns';
import { Link } from 'next-view-transitions';
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

// Post header component with its own data fetching
async function PostHeader({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <header>
      <h1 className='mb-2 font-medium text-3xl text-foreground'>{post.title}</h1>
      <div className='flex items-center gap-4 text-muted-foreground text-sm'>
        <time dateTime={post.date}>{post.date ? format(new Date(post.date), 'MMMM d, yyyy') : ''}</time>
        {post.tag && post.tag.length > 0 && (
          <div className='flex gap-1.5'>
            {post.tag.map((tag) => (
              <span key={tag} className='rounded-md bg-secondary px-2 py-0.5 text-secondary-foreground text-xs'>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// Post content component with its own data fetching
async function PostContent({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article>
      <MarkdownRenderer content={post.content || ''} className='prose prose-neutral dark:prose-invert max-w-none' />
    </article>
  );
}

// Related posts component with its own data fetching
async function RelatedPosts({ currentPostId }: { currentPostId: string }) {
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.id !== currentPostId).slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <section className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between'>
      {relatedPosts.map((relatedPost, index) => (
        <Link key={relatedPost.id} href={`/${relatedPost.slug}`} className='group block'>
          <p className='mb-1 text-muted-foreground text-sm'>{index === 0 ? 'Previous' : 'Next'}</p>
          <h3 className='font-medium text-base text-foreground transition-colors group-hover:text-muted-foreground'>{relatedPost.title}</h3>
          <div className='mt-1.5 flex items-center gap-2'>
            <p className='text-muted-foreground text-xs'>{relatedPost.date ? format(new Date(relatedPost.date), 'MMM d, yyyy') : ''}</p>
            {relatedPost.tag && relatedPost.tag.length > 0 && (
              <div className='flex gap-1'>
                {relatedPost.tag.slice(0, 1).map((tag) => (
                  <span key={tag} className='rounded-sm bg-secondary px-1.5 py-0.5 text-secondary-foreground text-xs'>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </section>
  );
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
