import React from 'react';
import { HeroBanner } from './hero-banner';
import { Button } from './ui/button';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';

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
        <RadioGroup defaultValue='card' className='grid grid-cols-3 gap-4'>
          <div>
            <RadioGroupItem value='card' id='card' className='peer sr-only' />
            <Label
              htmlFor='card'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='mb-3 h-6 w-6'
              >
                <rect width='20' height='14' x='2' y='5' rx='2' />
                <path d='M2 10h20' />
              </svg>
              Card
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value='paypal'
              id='paypal'
              className='peer sr-only'
            />
            <Label
              htmlFor='paypal'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
            >
              <Icons.paypal className='mb-3 h-6 w-6' />
              Paypal
            </Label>
          </div>
          <div>
            <RadioGroupItem value='apple' id='apple' className='peer sr-only' />
            <Label
              htmlFor='apple'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
            >
              <Icons.apple className='mb-3 h-6 w-6' />
              Apple
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default Hero;
