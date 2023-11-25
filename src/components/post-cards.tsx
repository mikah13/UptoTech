'use client';
import React, { useState } from 'react';
import useDataFetcher, { usePosts } from './hooks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BLOGS_TO_FETCH, PostResponse } from '@/lib/type';

import ContentCard from './content-card';
import SkeletonCard from './skeleton-card';
import { ErrorBanner } from './error-banner';
import { Combobox } from './combobox';
import MobilePostCard from './mobile-post-card';
import { Button } from './ui/button';

type Props = {};

export const PostContent = ({ platform }: { platform: string }) => {
  const { data, loading, error } = useDataFetcher(platform);
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 text-left mt-0'
      key={platform}
    >
      {error && (
        <div className='col-span-3 mx-auto text-center my-6'>
          <ErrorBanner className='w-64 ' />{' '}
          <p className='pt-6 text-lg font-bold'>Data not found</p>
        </div>
      )}
      {!error && loading && (
        <>
          {new Array(12).fill('').map((e, i) => (
            <SkeletonCard key={i} />
          ))}
        </>
      )}
      {data &&
        data.posts.map((post, index) => (
          <ContentCard key={index} data={post} platform={platform} />
        ))}
    </div>
  );
};

const PostCards = (props: Props) => {
  const [platform, setPlatform] = useState<string>('google');

  return (
    <div className='w-full mx-auto'>
      <h2 className='scroll-m-20 mx-auto text-center border-b pb-6 text-4xl font-semibold tracking-tight first:mt-0'>
        Featured posts
      </h2>

      {/* <div className='hidden md:block'>
        <Tabs defaultValue='Google' className='w-full mt-6 text-center '>
          <TabsList className='mb-8 px-2 py-6  '>
            {Object.keys(BLOGS_TO_FETCH).map((platform) => (
              <TabsTrigger key={platform} value={platform}>
                <p> {platform}</p>
              </TabsTrigger>
            ))}
          </TabsList>

     

        </Tabs>
      </div> */}
      <div className='mx-auto text-center'>
        {Object.keys(BLOGS_TO_FETCH).map((p) => (
          <Button
            className='rounded-none'
            key={p}
            value={p}
            variant={
              p.toLowerCase() === platform.toLowerCase()
                ? 'default'
                : 'secondary'
            }
            onClick={() => setPlatform(p.toLowerCase())}
          >
            <p> {p}</p>
          </Button>
        ))}
            {Object.keys(BLOGS_TO_FETCH).map((platform, index) => (
            <PostContent key={index} platform={platform} />
          ))}
      </div>

      <div className='block md:hidden'>
        <MobilePostCard />
      </div>
    </div>
  );
};

export default PostCards;
