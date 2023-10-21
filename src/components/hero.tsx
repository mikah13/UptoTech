import React from 'react';
import { HeroBanner } from './hero-banner';
import { Button } from './ui/button';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { BLOGS_TO_FETCH } from '@/lib/type';

type Props = {};

function Hero({}: Props) {
  return (
    <div className='flex flex-row justify-evenly w-full'>
      <section className='flex flex-col space-y-4 w-1/2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Learn tech from the top tech
        </h1>
        <div className=''>
          <h2 className='leading-7 [&:not(:first-child)]:mt-6 max-w-[40rem]'>
            Compile from various technical blogs into one central hub, saving
            you time and ensuring you updated with the latest industry trends in
            the world !
          </h2>
          <div className='flex flex-row mt-16 space-x-4'>
            <Button className=''>Explore all</Button>
            <Button variant='outline'>Request company</Button>
          </div>
        </div>
      </section>

      <div className='w-1/2'>
        <HeroBanner className='w-full max-w-[25rem] mx-auto' />
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/AAAMM_Big_Tech.svg/1596px-AAAMM_Big_Tech.svg.png?20220423182730'
          fill
        />
      </div>
    </div>
  );
}

export default Hero;
