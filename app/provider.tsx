'use client';

import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from 'next-themes';

export default function BodyProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      value={{ light: 'light', dark: 'dark' }}
      disableTransitionOnChange
    >
      {children}

      <ProgressBar
        height='2px'
        color='hsl(var(--foreground))'
        options={{ showSpinner: false }}
        shallowRouting
      />

      <Toaster richColors position='top-right' />

      <SpeedInsights />

      <Analytics />
    </ThemeProvider>
  );
}
