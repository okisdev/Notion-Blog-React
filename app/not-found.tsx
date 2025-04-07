import Link from 'next/link';

export const generateMetadata = async () => {
  return {
    title: '404',
    description: 'Page not found',
  };
};

export default async function NotFound() {
  return (
    <main className='flex min-h-screen flex-1 flex-col items-center justify-center gap-4 p-8'>
      <div className='space-y-2 text-center'>
        <h1 className='font-medium text-xl'>404</h1>
        <p className='text-muted-foreground'>Page not found</p>
      </div>
      <Link href='/' className='text-muted-foreground text-sm transition duration-300 hover:text-primary'>
        Go back to home
      </Link>
    </main>
  );
}
