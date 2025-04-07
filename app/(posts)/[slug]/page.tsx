import { MarkdownRenderer } from '@/components/shared/markdown-renderer';
import { getAllPosts, getPostBySlug } from '@/lib/notion';
import { format } from 'date-fns';
import { Link } from 'next-view-transitions';
import { notFound } from 'next/navigation';

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

  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <header className='mb-10'>
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

      <article className='mb-10'>
        <MarkdownRenderer content={post.content || ''} className='prose prose-neutral dark:prose-invert max-w-none' />
      </article>

      <footer className='mb-3 border-tertiary border-t pt-6 md:mb-10'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-foreground text-sm hover:underline'>
            Back to home
          </Link>
        </div>
      </footer>

      {relatedPosts.length > 0 && (
        <section className='flex w-full items-center justify-between'>
          {relatedPosts.map((relatedPost, index) => (
            <Link key={relatedPost.id} href={`/${relatedPost.slug}`} className='group block'>
              <article>
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
              </article>
            </Link>
          ))}
        </section>
      )}
    </>
  );
}
