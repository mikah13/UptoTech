import React, { useState } from 'react';
import { Combobox } from './combobox';
import { BLOGS_TO_FETCH } from '@/lib/type';
import { PostContent } from './post-cards';
import { ErrorBanner } from './error-banner';
import SkeletonCard from './skeleton-card';
import ContentCard from './content-card';
import useDataFetcher from './hooks';

type Props = {};

const MobilePostCard = (props: Props) => {
  const [platform, setPlatform] = useState<string>('google');
  const { data, loading, error } = useDataFetcher(platform);
  console.log({ platform, data, error });
  return (
    <div>
      {' '}
      <Combobox
        defaultOption={platform}
        options={Object.keys(BLOGS_TO_FETCH).map((p) => {
          return { label: p, value: p };
        })}
        switchTab={(p) => {
          setPlatform(p);
        }}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 text-left mt-0'>
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
    </div>
  );
};

export default MobilePostCard;
