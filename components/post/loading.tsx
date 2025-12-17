import { Skeleton } from '@/components/ui/skeleton';

export function HeaderSkeleton() {
  return (
    <header>
      <Skeleton className='mb-2 h-9 w-3/4' />
      <div className='flex items-center gap-4'>
        <Skeleton className='h-5 w-32' />
        <div className='flex gap-1.5'>
          <Skeleton className='h-5 w-16 rounded-md' />
          <Skeleton className='h-5 w-16 rounded-md' />
        </div>
      </div>
    </header>
  );
}

export function ContentSkeleton() {
  return (
    <article className='space-y-4'>
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-3/4' />
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-5/6' />
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-2/3' />
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-4/5' />
      <Skeleton className='h-4 w-full' />
    </article>
  );
}

export function RelatedSkeleton() {
  return (
    <section className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between'>
      <div className='block'>
        <Skeleton className='mb-1 h-4 w-16' />
        <Skeleton className='h-5 w-48' />
        <div className='mt-1.5 flex items-center gap-2'>
          <Skeleton className='h-3 w-20' />
          <Skeleton className='h-3 w-16 rounded-sm' />
        </div>
      </div>
      <div className='block'>
        <Skeleton className='mb-1 h-4 w-16' />
        <Skeleton className='h-5 w-48' />
        <div className='mt-1.5 flex items-center gap-2'>
          <Skeleton className='h-3 w-20' />
          <Skeleton className='h-3 w-16 rounded-sm' />
        </div>
      </div>
    </section>
  );
}

/**
 * Progressive skeleton for streaming.
 * Shows remaining sections that haven't loaded yet.
 */
export function PostSkeleton({
  sections,
}: {
  sections: ('header' | 'content' | 'related')[];
}) {
  return (
    <>
      {sections.includes('header') && <HeaderSkeleton />}
      {sections.includes('content') && <ContentSkeleton />}
      {sections.includes('related') && (
        <>
          <div className='border-tertiary border-b' />
          <RelatedSkeleton />
          <div className='border-tertiary border-b' />
        </>
      )}
    </>
  );
}

/**
 * Full page skeleton for loading.tsx
 */
export function PostLoadingSkeleton() {
  return (
    <div className='space-y-6'>
      <PostSkeleton sections={['header', 'content', 'related']} />
    </div>
  );
}
