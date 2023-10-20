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
                  className=' col-span-1 drop-shadow-lg cursor-pointer hover:drop-shadow-2xl transition-150'
                >
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    
                    <CardTitle className='text-sm font-medium'>
                      <Icon icon={post.platform} />
                    </CardTitle>
                    <span className='text-sm'> {date}</span>
                  </CardHeader>
                  <CardContent>
                    <p>{title}</p>
                  </CardContent>
                  <CardFooter>
                    <p>{tags?.map((e) => e)}</p>
                  </CardFooter>
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
