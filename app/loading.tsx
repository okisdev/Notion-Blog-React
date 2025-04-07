import { WritingSectionSkeleton } from '@/components/home/loading';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomeLoading() {
  return (
    <div className='space-y-10'>
      <section>
        <Skeleton className='mb-2 h-5 w-16' />
        <Skeleton className='h-8 w-3/4' />
        <Skeleton className='mt-2 h-4 w-full' />
        <Skeleton className='h-4 w-2/3' />
      </section>

      <WritingSectionSkeleton />

      <section>
        <Skeleton className='mb-2 h-5 w-16' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-2/3' />
      </section>
    </div>
  );
}
