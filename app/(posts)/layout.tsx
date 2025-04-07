'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const paths = pathname.split('/').filter(Boolean);

  return (
    <div className='mx-auto min-h-screen max-w-2xl px-4 py-10'>
      <Breadcrumb className='mb-8'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='/' className='text-muted-foreground transition-colors hover:text-foreground'>
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {paths.map((path, index) => {
            const pathParts = path.split('-');

            const pathName = pathParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');

            return (
              <Fragment key={path}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={`/${path}`} className={cn('text-muted-foreground transition-colors hover:text-foreground', index === paths.length - 1 && 'text-foreground')}>
                      {pathName}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index !== paths.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      {children}
    </div>
  );
}
