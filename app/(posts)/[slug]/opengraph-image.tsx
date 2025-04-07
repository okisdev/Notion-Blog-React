import { env } from '@/lib/env';
import { getPostBySlug } from '@/lib/notion';
import { format } from 'date-fns';
import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '60px 80px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Header with logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg height={40} viewBox='0 0 75 65' fill='black' style={{ marginRight: '20px' }}>
          <path d='M37.59.25l36.95 64H.64l36.95-64z' />
        </svg>
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Notion Blog React
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '30px',
            lineHeight: 1.2,
            maxWidth: '1000px',
          }}
        >
          {post.title}
        </h1>

        {/* Metadata */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            color: '#666',
          }}
        >
          {post.date && <div style={{ marginRight: '20px' }}>{format(new Date(post.date), 'MMMM d, yyyy')}</div>}

          {post.tag && post.tag.length > 0 && (
            <div style={{ display: 'flex', gap: '10px' }}>
              {post.tag.map((tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: '#f0f0f0',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '18px',
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description if available */}
        {post.description && (
          <div
            style={{
              fontSize: '28px',
              color: '#444',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            {post.description}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '40px',
          fontSize: '20px',
          color: '#666',
        }}
      >
        <div>{env.NEXT_PUBLIC_SITE_URL}</div>
        <div>Read more →</div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
