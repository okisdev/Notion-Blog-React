import { Suspense } from 'react';
import { ExtraSection } from '@/components/home/extra-section';
import { WritingSectionSkeleton } from '@/components/home/loading';
import { WritingSection } from '@/components/home/writing';
import NewsletterForm from '@/components/shared/newsletter-form';

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-2xl px-4 py-10'>
      <header className='mb-10'>
        <h1 className='mb-1 font-medium text-2xl text-foreground'>
          Notion Blog React
        </h1>
        <p className='text-muted-foreground text-sm'>
          A Notion Blog powered by Next.js
        </p>
      </header>

      <Suspense fallback={<WritingSectionSkeleton />}>
        <WritingSection />
      </Suspense>

      <section className='mb-10'>
        <NewsletterForm />
      </section>

      <ExtraSection />
    </div>
  );
}
