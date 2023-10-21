import React from 'react';
import { HeroBanner } from './hero-banner';
import { Button } from './ui/button';
import Image from 'next/image';

type Props = {};

function Hero({}: Props) {
  return (
    <div className='flex flex-col w-full'>
      <section className='flex flex-col space-y-4 w-full'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Learn tech from the top tech
        </h1>
        <div className='flex flex-row justify-between'>
          <h2 className='leading-7 [&:not(:first-child)]:mt-6 max-w-[40rem]'>
            Compile from various technical blogs into one central hub, saving
            you time and ensuring you updated with the latest industry trends in
            the world !
          </h2>
          <Button>Learn more</Button>
        </div>

        <Image
          src='https://images.unsplash.com/photo-1484557052118-f32bd25b45b5'
          fill
        />
      </section>
      {/* <div className='w-full'>
        <HeroBanner className='w-64' />
      </div> */}
    </div>
  );
}

export default Hero;
