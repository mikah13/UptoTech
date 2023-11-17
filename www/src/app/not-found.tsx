import { ErrorBanner } from '@/components/error-banner';
import Footer from '@/components/footer';
import Header from '@/components/header';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import React from 'react';

type Props = {};

const Error = (props: Props) => {
  return (
    <main className='relative flex flex-col items-center justify-between p-2 lg:p-12'>
      <div className='absolute inset-0  h-full -z-[10]  w-full bg-white dark:bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'></div>
      <Card className='w-full'>
        <CardHeader className='px-0 py-0'>
          <Header />
        </CardHeader>
        <CardContent className='px-6 lg:px-12 pb-12'></CardContent>
        <CardFooter className='px-0 py-0'>
          <Footer />
        </CardFooter>
      </Card>
    </main>
  );
};

export default Error;
