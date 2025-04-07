import {} from '@/components/post/loading';
import { getAllPosts } from '@/lib/notion';
import { format } from 'date-fns';
import { Link } from 'next-view-transitions';

export async function RelatedPosts({ currentPostId }: { currentPostId: string }) {
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
