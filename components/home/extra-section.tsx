export function ExtraSection() {
  return (
    <section>
      <p className='mb-2 font-medium text-muted-foreground text-sm'>More</p>
      <p className='text-muted-foreground text-sm'>
        Follow Harry Yep on{' '}
        <a
          className='text-foreground transition-colors hover:text-muted-foreground'
          href='https://twitter.com/okisdev'
        >
          Twitter
        </a>{' '}
        and{' '}
        <a
          className='text-foreground transition-colors hover:text-muted-foreground'
          href='https://github.com/okisdev'
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}

