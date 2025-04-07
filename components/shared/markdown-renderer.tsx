import { MDXRemote } from 'next-mdx-remote/rsc';
import { components } from './markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  if (!content) {
    return <p>No content available.</p>;
  }

  return (
    <div className={className}>
      <MDXRemote source={content} components={components} />
    </div>
  );
}
