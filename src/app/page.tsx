'use client';

import Hero from '@/components/hero';
import PostCards from '@/components/post-cards';
import { PostContextProvider } from '@/components/post-provider';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <PostContextProvider>
      <main className='relative flex flex-col items-center justify-between p-12'>
        <div className='absolute inset-0  h-full -z-[10]  w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'></div>
        <Card className='px-12'>
          <Hero />
          <PostCards />
        </Card>
      </main>
    </PostContextProvider>
  );
}
