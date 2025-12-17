import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    NOTION_API_KEY: z.string().min(1, 'NOTION_API_KEY is required'),
    NOTION_DATA_SOURCE_ID: z.string().min(1, 'NOTION_DATA_SOURCE_ID is required'),
    REDIS_URL: z.string().min(1, 'REDIS_URL is required'),
    REDIS_TOKEN: z.string().min(1, 'REDIS_TOKEN is required'),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().min(1, 'NEXT_PUBLIC_SITE_URL is required'),
    NEXT_PUBLIC_UMAMI_URL: z.string().min(1, 'NEXT_PUBLIC_UMAMI_URL is required').optional(),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().min(1, 'NEXT_PUBLIC_UMAMI_WEBSITE_ID is required').optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_DATA_SOURCE_ID: process.env.NOTION_DATA_SOURCE_ID,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_TOKEN: process.env.REDIS_TOKEN,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_UMAMI_URL: process.env.NEXT_PUBLIC_UMAMI_URL,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  },
});
