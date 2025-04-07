import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import type { ComponentPropsWithoutRef } from 'react';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;
type TableProps = {
  data: {
    headers: Array<{ id: string; content: string }>;
    rows: Array<{ id: string; cells: Array<{ id: string; content: string }> }>;
  };
};
type CodeProps = ComponentPropsWithoutRef<'code'> & {
  className?: string;
};

export const components = {
  h1: (props: HeadingProps) => {
    const id =
      typeof props.children === 'string'
        ? props.children.toLowerCase().replace(/\s+/g, '-')
        : typeof props.children === 'object' && props.children !== null
          ? props.children
              .toString()
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
          : '';

    return (
      <h1 id={id} className='fade-in text-primary text-xl'>
        <a href={`#${id}`} className='no-underline hover:underline'>
          {props.children}
        </a>
      </h1>
    );
  },
  h2: (props: HeadingProps) => {
    const id = JSON.parse(JSON.stringify(props.children))?.props?.children?.toLowerCase().replace(/\s+/g, '-');

    return (
      <h2 id={id} className='text-lg text-primary'>
        <a href={`#${id}`} className='no-underline hover:underline'>
          {props.children}
        </a>
      </h2>
    );
  },
  h3: (props: HeadingProps) => {
    const id = JSON.parse(JSON.stringify(props.children))?.props?.children?.toLowerCase().replace(/\s+/g, '-');

    return (
      <h3 id={id} className='text-base text-primary'>
        <a href={`#${id}`} className='no-underline hover:underline'>
          {props.children}
        </a>
      </h3>
    );
  },
  h4: (props: HeadingProps) => {
    const id = JSON.parse(JSON.stringify(props.children))?.props?.children?.toLowerCase().replace(/\s+/g, '-');

    return (
      <h4 id={id} className='text-primary text-sm'>
        <a href={`#${id}`} className='no-underline hover:underline'>
          {props.children}
        </a>
      </h4>
    );
  },
  p: (props: ParagraphProps) => <p className='mb-4 text-primary' {...props} />,
  ol: (props: ListProps) => <ol className='mb-4 list-decimal space-y-2 pl-5 text-muted-foreground' {...props} />,
  ul: (props: ListProps) => <ul className='mb-4 list-disc space-y-2 pl-5 text-muted-foreground' {...props} />,
  li: (props: ListItemProps) => <li className='pl-1 text-muted-foreground' {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => <em className='font-medium text-primary' {...props} />,
  strong: (props: ComponentPropsWithoutRef<'strong'>) => <strong className='font-semibold text-primary' {...props} />,
  a: ({ href, children, className, ...props }: AnchorProps) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={cn('text-accent decoration-accent transition-colors hover:bg-accent hover:text-white', className)} {...props}>
          {children}
        </Link>
      );
    }

    if (href?.startsWith('#')) {
      return (
        <Link href={href} className={cn('text-accent decoration-accent transition-colors hover:bg-accent hover:text-white', className)} {...props}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <Link href={href} className={cn('text-accent decoration-accent transition-colors hover:bg-accent hover:text-white', className)} {...props}>
          {children}
        </Link>
      );
    }

    return null;
  },
  code: ({ children, className, ...props }: CodeProps) => {
    // Check if this is a code block (has className with language)
    const isCodeBlock = className?.includes('language-');

    if (isCodeBlock) {
      const language = className?.replace('language-', '') || '';
      const codeHTML = highlight(children as string);

      return (
        <div className='my-6 overflow-hidden rounded-lg border border-tertiary'>
          <div className='flex items-center justify-between bg-accent/10 px-4 py-2'>
            <span className='text-muted-foreground text-xs'>{language}</span>
          </div>
          <div className='overflow-x-auto p-4'>
            <code
              className='block font-mono text-primary text-sm'
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for syntax highlighting
              dangerouslySetInnerHTML={{ __html: codeHTML }}
              {...props}
            />
          </div>
        </div>
      );
    }

    // Inline code
    const codeHTML = highlight(children as string);
    return (
      <code
        className='rounded bg-accent/10 px-1.5 py-0.5 font-mono text-primary'
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for syntax highlighting
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => {
    if (!src) return null;

    return (
      <>
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img src={src} alt={alt || 'Image'} aria-label={alt || 'Image'} className='my-2 w-full overflow-hidden rounded-lg object-cover' {...props} />
        {alt && <span className='mt-2 text-center text-muted-foreground text-sm'>{alt}</span>}
      </>
    );
  },
  Table: ({ data }: TableProps) => (
    <div className='my-6 w-full overflow-x-auto'>
      <table className='w-full border-collapse text-left'>
        <thead className='border-tertiary border-b'>
          <tr>
            {data.headers.map((header) => (
              <th key={header.id} className='p-4 text-left font-semibold text-primary text-sm'>
                {header.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <tr key={row.id} className='border-tertiary border-b'>
              {row.cells.map((cell) => (
                <td key={cell.id} className='p-4 text-muted-foreground text-sm'>
                  {cell.content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props: BlockquoteProps) => <blockquote className='my-6 border-accent border-l-4 bg-accent/10 px-6 py-4 text-muted-foreground' {...props} />,
  hr: () => <hr className='my-8 border-tertiary border-t' />,
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre className='my-2 overflow-x-auto rounded-lg bg-accent/10 p-1 md:my-4 md:p-4' {...props}>
      {children}
    </pre>
  ),
};
