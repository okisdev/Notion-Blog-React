import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';

import '@/styles/globals.css';

import { Toaster } from 'react-hot-toast';

import GlobalFooter from '@/components/global/footer';

const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Notion Blog React',
    description: 'Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en-GB'>
            <body className={`${merriweather.className} bg-black min-h-screen text-zinc-200`}>
                <Toaster />

                {children}

                <GlobalFooter />
            </body>
        </html>
    );
}
