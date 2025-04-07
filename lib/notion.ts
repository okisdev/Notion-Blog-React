import { env } from '@/lib/env';
import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: env.NOTION_API_KEY,
});

export const BLOG_TABLE_ID = env.NOTION_DATABASE_ID;

export interface BlogPost {
  id: string;
  title: string;
  tag: string[];
  published: boolean;
  slug: string;
  date: string;
  description: string;
  content?: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: BLOG_TABLE_ID,
      filter: {
        property: 'published',
        checkbox: {
          equals: true,
        },
      },
    });

    return response.results.map((page: any) => {
      const properties = (page as any).properties;

      return {
        id: page.id,
        title: properties.title?.title[0]?.plain_text || 'Untitled',
        description: properties.description?.rich_text[0]?.plain_text || '',
        slug: properties.slug?.rich_text[0]?.plain_text || '',
        date: properties.date?.date?.start || '',
        tag: properties.tag?.multi_select?.map((tag: any) => tag.name) || [],
        published: properties.published?.checkbox || false,
      };
    });
  } catch (error) {
    console.error('Error fetching posts from Notion:', error);
    return [];
  }
}

// Function to fetch a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await notion.databases.query({
      database_id: BLOG_TABLE_ID,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0];
    // Type assertion for Notion page object
    const properties = (page as any).properties;

    // Fetch the page content
    const blocks = await notion.blocks.children.list({
      block_id: page.id,
    });

    // Convert blocks to markdown content
    const content = blocks.results
      .map((block: any) => {
        if (block.type === 'paragraph') {
          return block.paragraph.rich_text.map((text: any) => text.plain_text).join('');
        }

        if (block.type === 'heading_1') {
          return `# ${block.heading_1.rich_text.map((text: any) => text.plain_text).join('')}`;
        }

        if (block.type === 'heading_2') {
          return `## ${block.heading_2.rich_text.map((text: any) => text.plain_text).join('')}`;
        }

        if (block.type === 'heading_3') {
          return `### ${block.heading_3.rich_text.map((text: any) => text.plain_text).join('')}`;
        }

        if (block.type === 'bulleted_list_item') {
          return `- ${block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join('')}`;
        }

        if (block.type === 'numbered_list_item') {
          return `1. ${block.numbered_list_item.rich_text.map((text: any) => text.plain_text).join('')}`;
        }

        if (block.type === 'code') {
          return `\`\`\`${block.code.language}\n${block.code.rich_text.map((text: any) => text.plain_text).join('')}\n\`\`\``;
        }

        if (block.type === 'quote') {
          return `> ${block.quote.rich_text.map((text: any) => text.plain_text).join('')}`;
        }

        if (block.type === 'to_do') {
          return `- [${block.to_do.checked ? 'x' : ' '}] ${block.to_do.rich_text.map((text: any) => text.plain_text).join('')}`;
        }

        if (block.type === 'toggle') {
          return `<details>\n<summary>${block.toggle.rich_text.map((text: any) => text.plain_text).join('')}</summary>\n\n${block.toggle.children?.map((child: any) => child.paragraph.rich_text.map((text: any) => text.plain_text).join('')).join('\n') || ''}\n\n</details>`;
        }

        if (block.type === 'divider') {
          return '---';
        }

        if (block.type === 'image') {
          return `![${block.image.caption?.map((caption: any) => caption.plain_text).join('') || ''}](${block.image.file?.url || block.image.external?.url || ''})`;
        }

        if (block.type === 'callout') {
          return `> **${block.callout.color}**: ${block.callout.rich_text.map((text: any) => text.plain_text).join('')}`;
        }

        return '';
      })
      .join('\n\n');

    return {
      id: page.id,
      title: properties.title?.title[0]?.plain_text || 'Untitled',
      description: properties.description?.rich_text[0]?.plain_text || '',
      slug: properties.slug?.rich_text[0]?.plain_text || '',
      date: properties.date?.date?.start || '',
      content,
      tag: properties.tag?.multi_select?.map((tag: any) => tag.name) || [],
      published: properties.published?.checkbox || false,
    };
  } catch (error) {
    console.error(`Error fetching post with slug ${slug} from Notion:`, error);
    return null;
  }
}
