import { getPostBySlug } from '@/lib/notion';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';

export async function PostHeader({ slug }: { slug: string }) {
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
