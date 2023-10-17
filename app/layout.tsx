import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import '@/styles/globals.css';

import { Toaster } from 'react-hot-toast';

import BlogNavBar from '@/components/BlogNavBar';
import BlogFooter from '@/components/BlogFooter';
import BlogThemeSwither from '@/components/BlogThemeSwitcher';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Notion Blog React',
    description: 'Blog built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en-GB'>
            <body className={rubik.className}>
                <Toaster />

                <BlogNavBar />

                {children}

                <BlogFooter />

                <BlogThemeSwither />
            </body>
        </html>
    );
}
