import { env } from '@/lib/env';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: env.REDIS_URL,
  token: env.REDIS_TOKEN,
});

const NEWSLETTER_SUBSCRIBERS_KEY = 'newsletter:subscribers';

export async function addNewsletterSubscriber(email: string): Promise<boolean> {
  try {
    const exists = await redis.sismember(NEWSLETTER_SUBSCRIBERS_KEY, email);

    if (exists) {
      return false;
    }

    await redis.sadd(NEWSLETTER_SUBSCRIBERS_KEY, email);
    return true;
  } catch (error) {
    console.error('Error adding newsletter subscriber:', error);
    throw error;
  }
}

export async function isNewsletterSubscriber(email: string): Promise<boolean> {
  try {
    const result = await redis.sismember(NEWSLETTER_SUBSCRIBERS_KEY, email);
    return result === 1;
  } catch (error) {
    console.error('Error checking newsletter subscriber:', error);
    throw error;
  }
}
