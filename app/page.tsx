import NewsletterForm from '@/components/shared/newsletter-form';
import { config } from '@/config';
import { getAllPosts } from '@/lib/notion';
import { format } from 'date-fns';
import { Link } from 'next-view-transitions';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className='mx-auto min-h-screen max-w-2xl px-4 py-10'>
      <header className='mb-10'>
        <h1 className='mb-1 font-medium text-2xl text-foreground'>{config.site.name}</h1>
        <p className='text-muted-foreground text-sm'>{config.site.description}</p>
      </header>

      <section className='mb-10'>
        <p className='mb-2 font-medium text-muted-foreground text-sm'>Writing</p>
        <div className='space-y-6'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post.id} href={`/${post.slug}`} className='group block'>
                <article>
                  <h3 className='mb-1 font-medium text-foreground transition-colors group-hover:text-muted-foreground'>{post.title}</h3>
                  <p className='line-clamp-2 text-muted-foreground text-sm'>{post.description}</p>
                  <div className='mt-1.5 flex items-center gap-2'>
                    <p className='text-muted-foreground text-xs'>{post.date ? format(new Date(post.date), 'MMM d, yyyy') : ''}</p>
                    {post.tag && post.tag.length > 0 && (
                      <div className='flex gap-1'>
                        {post.tag.slice(0, 2).map((tag) => (
                          <span key={tag} className='rounded-sm bg-secondary px-1.5 py-0.5 text-secondary-foreground text-xs'>
                            {tag}
                          </span>
                        ))}
                        {post.tag.length > 2 && <span className='text-muted-foreground text-xs'>+{post.tag.length - 2}</span>}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <p className='text-muted-foreground'>No posts found.</p>
          )}
        </div>
      </section>

      <section className='mb-10'>
        <NewsletterForm />
      </section>

      {config.home.extraSection}
    </div>
  );
}
