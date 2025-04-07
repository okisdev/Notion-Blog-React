'use client';

import { subscribeToNewsletter } from '@/lib/actions';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const result = await subscribeToNewsletter(email);

      setStatus(result.success ? 'success' : 'error');
      setMessage(result.message);

      if (result.success) {
        setEmail('');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <div>
      <p className='mb-2 font-medium text-muted-foreground text-sm'>Newsletter</p>
      <p className='mb-3 text-muted-foreground text-sm'>Get exclusive content once a month.</p>

      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='flex-1 rounded-md border border-input bg-background px-3 py-1.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring'
            required
            disabled={status === 'loading'}
          />
          <button type='submit' className='rounded-md bg-primary px-4 py-1.5 text-primary-foreground text-sm transition-colors hover:bg-primary/90 disabled:opacity-50' disabled={status === 'loading'}>
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {message && <p className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
      </form>
    </div>
  );
}
