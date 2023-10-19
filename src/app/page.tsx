'use client';

import PostCards from '@/components/post-cards';
import { PostContextProvider } from '@/components/post-provider';

export default function Home() {
  return (
    <PostContextProvider>
      <main className='flex  h-screen max-h-screen flex-col items-center justify-between p-6'>
        <PostCards />
      </main>
    </PostContextProvider>
  );
}
