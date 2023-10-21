import React from 'react';
import { HeroBanner } from './hero-banner';
import { Button } from './ui/button';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { BLOGS_TO_FETCH } from '@/lib/type';
import { ArrowRightIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import Link from 'next/link';
type Props = {};

function Hero({}: Props) {
  return (
    <div className='h-screen '>
      <div className='flex flex-row justify-evenly w-full pt-28'>
        <section className='flex flex-col space-y-4 w-1/2 mt-14'>
          <div>
            <Link
              href='#'
              className='inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium'
            >
              🚀 <Separator className='mx-2 h-4' orientation='vertical' />{' '}
              <span className='sm:hidden'>
                Introduce blogs from big tech companies.
              </span>
              <span className='hidden sm:inline'>
                Introduce blogs from big tech companies.
              </span>
              <ArrowRightIcon className='ml-1 h-4 w-4' />
            </Link>
          </div>
          <h1 className='scroll-m-20  text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Exploring Tech with Industry Leaders
          </h1>
          <div className='mt-8'>
            <h2 className='leading-7 [&:not(:first-child)]:mt-6 max-w-[40rem]'>
              Compile from various technical blogs into one central hub, saving
              you time and ensuring you updated with the industry leading
              companies in the world !
            </h2>
            <div className='flex flex-row mt-16 space-x-4'>
              <Button className=''>Explore all</Button>
              <Button variant='outline'>Request company</Button>
            </div>
          </div>
        </section>

        <div className='flex flex-col space-y-12 w-1/2 relative'>
          <HeroBanner className='w-full max-w-[25rem] mx-auto' />
          <div className='w-full max-w-[25rem] mx-auto'>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/AAAMM_Big_Tech.svg/1596px-AAAMM_Big_Tech.svg.png?20220423182730'
              width={350}
              height={80}
              alt='FAANG logos'
              className='mx-auto dark:bg-white rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
