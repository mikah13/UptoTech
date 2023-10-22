import { Post } from '@/lib/type';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

import { AspectRatio } from './ui/aspect-ratio';
import { Badge } from './ui/badge';
import { platform } from 'os';
import { Button } from './ui/button';
import Link from 'next/link';
type Props = {};

const ContentCard = ({ data, platform }: { data: Post; platform: string }) => {
  const { title, thumbnail, date, tags, link } = data;
  return (
    <Card
      key={title}
      className='col-span-1 group drop-shadow-lg  cursor-pointer shadow-lg shadow-zinc-500/50 hover:drop-shadow-2xl dark:hover:drop-shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 border-2 transition-150'
    >
      <CardHeader className='flex flex-col items-center justify-between space-y-0 p-0'>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='rounded-md rounded-b-none'
          />
        </AspectRatio>
        <Link href={link}>
          <div className='p-4 w-full'>
            <div className='flex justify-start w-full'>
              <Badge variant='outline'>{platform}</Badge>
            </div>
            <article className='text-xl mt-4 '>
              <h3>{title}</h3>
            </article>
          </div>
        </Link>
      </CardHeader>
      <CardContent className='flex flex-col p-4 pt-12'>
        <div className='absolute bottom-4 flex flex-row space-x-3'>
          {tags?.map((tag, i) => (
            <Button className='px-2 py-0' key={i} variant='outline'>
              {tag}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
