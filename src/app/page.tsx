'use client';

import Hero from '@/components/hero';
import PostCards from '@/components/post-cards';
import { PostContextProvider } from '@/components/post-provider';

export default function Home() {
  return (
    <PostContextProvider>
      <main className='flex flex-col items-center justify-between p-12'>
        <Hero />
        <PostCards />
      </main>
    </PostContextProvider>
  );
}
