import { MarkdownRenderer } from '@/components/shared/markdown-renderer';
import { getPostBySlug } from '@/lib/notion';
import { notFound } from 'next/navigation';

export async function PostContent({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article>
      <MarkdownRenderer content={post.content || ''} className='prose prose-neutral dark:prose-invert max-w-none' />
    </article>
  );
}
