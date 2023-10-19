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

type Props = {};

const PostCards = (props: Props) => {
  const { posts } = usePosts();
  return (
    <div>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='all'>All</TabsTrigger>
          {Object.keys(BLOGS_TO_FETCH).map((platform) => (
            <TabsTrigger key={platform} value={platform}>
              {platform}
            </TabsTrigger>
          ))}
        </TabsList>

        {posts.map((post) => (
          <TabsContent key={post.platform} value={post.platform}>
            {post.posts.map((data) => {
              const { title, thumbnail, date, tags, link } = data;
              return 
            })}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PostCards;
