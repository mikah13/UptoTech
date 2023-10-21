import React from 'react'
import { Card, CardHeader } from './ui/card'
import { AspectRatio } from './ui/aspect-ratio';

type Props = {}

const SkeletonCard = (props: Props) => {
  return (
    <Card className='col-span-1 '>
      <CardHeader className='flex flex-col items-center justify-between space-y-0 p-0'>
        <AspectRatio ratio={16 / 9}>
     
        </AspectRatio>
      </CardHeader>
    </Card>
  );
}

export default SkeletonCard