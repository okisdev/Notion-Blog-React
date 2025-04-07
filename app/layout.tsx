import BodyProvider from '@/app/provider';
import { cn } from '@/lib/utils';
import { font } from '@/styles/font';
import { ReactScan } from '@/utils/react-scan';
import '@/styles/globals.css';
import { env } from '@/lib/env';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Notion Blog React',
    template: '%s | Notion Blog React',
  },
  description: 'A Notion Blog powered by Next.js',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <head>
          <meta name='theme-color' media='(prefers-color-scheme: light)' content='white' />
          <meta name='theme-color' media='(prefers-color-scheme: dark)' content='black' />
          {env.NEXT_PUBLIC_UMAMI_URL && <Script defer src={env.NEXT_PUBLIC_UMAMI_URL} data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} />}
        </head>

        <ReactScan />

        <body className={cn(font.geistSans.className, 'antialiased')}>
          <BodyProvider>{children}</BodyProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
