'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Footer from '@/components/footer';

import PostCards from '@/components/post-cards';
import { PostContextProvider } from '@/components/post-provider';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import React from 'react';

export default function Home() {
  return (
    <PostContextProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <main className='relative flex flex-col items-center justify-between p-12'>
          <div className='absolute inset-0  h-full -z-[10]  w-full bg-white dark:bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'></div>
          <Card>
            <CardHeader className='px-0 py-0'>
              <Header />
            </CardHeader>
            <CardContent className='px-12 pb-12'>
              <Hero />
              <PostCards />
            </CardContent>
            <CardFooter className='px-0 py-0'>
              <Footer />
            </CardFooter>
          </Card>
        </main>
      </React.Suspense>
    </PostContextProvider>
  );
}
