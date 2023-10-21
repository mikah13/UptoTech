import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { Skeleton } from './ui/skeleton';

type Props = {};

const SkeletonCard = (props: Props) => {
  return (
    <Card className='col-span-1'>
      <CardHeader className='flex flex-col items-center justify-between space-y-0 p-0'>
        <AspectRatio ratio={16 / 9}>
          <Skeleton className='w-full h-full ' />
        </AspectRatio>
      </CardHeader>
      <CardContent className='flex flex-col space-y-2 mt-4'>
        <Skeleton className='h-4 w-24' />

        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />

        <Skeleton className='h-4 mt-6 w-1/2' />
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
