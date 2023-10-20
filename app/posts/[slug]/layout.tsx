import PostBackHomeButton from '@/components/post/back-home-button';
import GlobalHeader from '@/components/global/header';

export default function PostPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <GlobalHeader />
            <>{children}</>
            <PostBackHomeButton />
        </main>
    );
}
