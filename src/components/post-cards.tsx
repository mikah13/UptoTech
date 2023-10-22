import React from 'react';
import { usePosts } from './ui/hooks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BLOGS_TO_FETCH, PostResponse } from '@/lib/type';
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
import { capitalizeFirstChar } from '@/lib/utils';
import ContentCard from './content-card';
import SkeletonCard from './skeleton-card';

type Props = {};

const PostContent = ({ post }: { post: PostResponse }) => {
  return (
    <TabsContent
      className='grid grid-cols-3 gap-x-4 gap-y-8 text-left'
      key={post.platform}
      value={post.platform}
    >
      {post.posts.map((data, index) => (
        <ContentCard key={index} data={data} platform={post.platform} />
      ))}
    </TabsContent>
  );
};

const PostCards = (props: Props) => {
  const { posts, isLoading } = usePosts();
  return (
    <div className='w-full mx-auto'>
      <h2 className='scroll-m-20 mx-auto text-center border-b pb-6 text-4xl font-semibold tracking-tight first:mt-0'>
        Featured posts
      </h2>
      <Tabs defaultValue='Google' className='w-full mt-6 text-center'>
        <TabsList>
          {Object.keys(BLOGS_TO_FETCH).map((platform) => (
            <TabsTrigger key={platform} value={platform}>
              {platform}
            </TabsTrigger>
          ))}
        </TabsList>

        {isLoading && (
          <div className='grid grid-cols-3 gap-x-4 gap-y-8 text-left mt-2'>
            {new Array(12).fill('').map((e, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}
        {!isLoading &&
          posts.map((post, index) => <PostContent key={index} post={post} />)}
      </Tabs>
    </div>
  );
};

export default PostCards;
