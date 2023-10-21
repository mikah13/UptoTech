import React from 'react';
import { usePosts } from './ui/hooks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BLOGS_TO_FETCH } from '@/lib/type';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { platform } from 'os';
import Icon from './icons';
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from './ui/button';

type Props = {};

const PostCards = (props: Props) => {
  const { posts } = usePosts();
  return (
    <div>
      <Tabs defaultValue='all' className='w-full'>
        <TabsList>
          <TabsTrigger value='all'>All</TabsTrigger>
          {Object.keys(BLOGS_TO_FETCH).map((platform) => (
            <TabsTrigger key={platform} value={platform}>
              {platform}
            </TabsTrigger>
          ))}
        </TabsList>

        {posts.map((post) => (
          <TabsContent
            className='grid grid-cols-3 gap-x-4 gap-y-8'
            key={post.platform}
            value={post.platform}
          >
            {post.posts.map((data) => {
              const { title, thumbnail, date, tags, link } = data;
              return (
                <Card
                  key={title}
                  className='col-span-1 drop-shadow-lg cursor-pointer hover:drop-shadow-2xl transition-150'
                >
                  <CardHeader className='flex flex-col items-center justify-between space-y-0 p-0'>
                    <AspectRatio ratio={16 / 9}>
                      <Image src={thumbnail} alt={title} fill />
                    </AspectRatio>

                    {/* <CardTitle className='text-md font-medium'> */}
                    {/* <Icon icon={post.platform} /> */}
                    {/* </CardTitle> */}
                    {/* <span className='text-sm'> {date}</span> */}
                    <div className='p-4 w-full'>
                      <div className='flex justify-start w-full'>
                        <Badge variant='outline'>{post.platform}</Badge>
                      </div>
                      <article className='prose mt-4 '>
                        <h3>{title}</h3>
                      </article>
                    </div>
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
            })}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PostCards;
