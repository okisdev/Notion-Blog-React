import { Skeleton } from '@/components/ui/skeleton';

export function WritingSectionSkeleton() {
  // Using static IDs for skeleton items
  const skeletonIds = ['skeleton-1', 'skeleton-2', 'skeleton-3'];

  return (
    <section className='mb-10'>
      <Skeleton className='mb-2 h-5 w-16' />
      <div className='space-y-6'>
        {skeletonIds.map((id) => (
          <div key={id} className='block'>
            <Skeleton className='mb-1 h-6 w-3/4' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-2/3' />
            <div className='mt-1.5 flex items-center gap-2'>
              <Skeleton className='h-3 w-20' />
              <div className='flex gap-1'>
                <Skeleton className='h-3 w-16 rounded-sm' />
                <Skeleton className='h-3 w-16 rounded-sm' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
