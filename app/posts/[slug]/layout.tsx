import BlogBackHome from '@/components/BlogBackHome';

export default function PostPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <BlogBackHome />
        </>
    );
}
