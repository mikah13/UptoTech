import React from 'react';
import { usePosts } from './ui/hooks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Props = {};

const PostCards = (props: Props) => {
  const { posts } = usePosts();
  return (
    <div>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='all'>All</TabsTrigger>
          {posts.map((post) => (
            <TabsTrigger key={post.platform} value={post.platform}>
              {post.platform}
            </TabsTrigger>
          ))}
        </TabsList>

        {posts.map((post) => (
          <TabsContent key={post.platform} value={post.platform}>
            {post.platform}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PostCards;
