'use server';

import { addNewsletterSubscriber } from '@/lib/redis';

/**
 * Server action to add a new newsletter subscriber
 * @param email The email address to add
 * @returns true if added successfully, false if already exists
 */
export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    if (!email || !email.includes('@')) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    const isNewSubscriber = await addNewsletterSubscriber(email);

    if (isNewSubscriber) {
      return { success: true, message: 'Successfully subscribed to newsletter' };
    }

    return { success: true, message: 'Email already subscribed' };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, message: 'Failed to subscribe. Please try again.' };
  }
}
