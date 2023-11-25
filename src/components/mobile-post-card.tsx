import React, { useState } from 'react';
import { Combobox } from './combobox';
import { BLOGS_TO_FETCH } from '@/lib/type';
import { PostContent } from './post-cards';
import { ErrorBanner } from './error-banner';
import SkeletonCard from './skeleton-card';
import ContentCard from './content-card';
import useDataFetcher from './hooks';

type Props = {
  switchTab: (e: string) => void;
  platform: string;
};

const MobilePostCard = ({ platform, switchTab }: Props) => {
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
        {/* <ContentCard key={index} data={post} platform={platform} /> */}
      </div>
    </div>
  );
};

export default MobilePostCard;
