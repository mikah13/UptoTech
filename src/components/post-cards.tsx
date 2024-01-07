'use client';
import React, { useState } from 'react';
import useDataFetcher, { usePosts } from './hooks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentCard from './content-card';
import SkeletonCard from './skeleton-card';
import { ErrorBanner } from './error-banner';
import { Combobox } from './combobox';
import { BLOGS_TO_FETCH } from '@/blogs.config';

type Props = {};

export const PostContent = ({ platform }: { platform: string }) => {
  const { data, loading, error } = useDataFetcher(platform);
  return (
    <TabsContent
      className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 text-left mt-0'
      key={platform}
      value={platform}
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
    </TabsContent>
  );
};

const PostCards = (props: Props) => {
  const [platform, setPlatform] = useState<string>('Google');

  return (
    <div className='w-full mx-auto'>
      <h2 className='scroll-m-20 mx-auto text-center border-b pb-6 text-4xl font-semibold tracking-tight first:mt-0'>
        Featured posts
      </h2>

      <Tabs
        value={platform}
        className='w-full mt-6 text-center '
        onValueChange={(e) => setPlatform(e)}
      >
        <TabsList className='mb-8 px-2 py-6  hidden md:flex'>
          {Object.keys(BLOGS_TO_FETCH).map((platform) => (
            <TabsTrigger key={platform} value={platform}>
              <p> {platform}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className='mb-6 block md:hidden'>
          <Combobox
            defaultOption={platform}
            options={Object.keys(BLOGS_TO_FETCH).map((p) => {
              return { label: p, value: p };
            })}
            switchTab={(p) => {
              console.log({ p, platform });
              setPlatform(p);
            }}
          />
        </div>
        {Object.keys(BLOGS_TO_FETCH).map((platform, index) => (
          <PostContent key={index} platform={platform} />
        ))}
      </Tabs>
    </div>
  );
};

export default PostCards;
