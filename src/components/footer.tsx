'use client';
import React from 'react';
import Link from 'next/link';
import {
  InstagramLogo,
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  GlobeSimple,
} from '@phosphor-icons/react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='px-6 lg:px-12 py-4 flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between border-t w-full'>
      <div className='flex items-center font-semibold'>
        <Link href='/' className='hover:text-blue-500'>
          {'</>'} UptoTech
        </Link>
      </div>
      <div className='flex items-center'>
        &copy;{new Date().getFullYear()} Mike Hoang
      </div>
      <div className='flex flex-row space-x-2'>
        <Link
          href='https://twitter.com/FollowMikah13'
          className='hover:bg-blue-200 dark:hover:bg-slate-700 rounded-lg p-2 '
        >
          <TwitterLogo size={32} weight='fill' color='#00acee' />
        </Link>

        <Link
          href='https://github.com/mikah13/UptoTech'
          className='hover:bg-blue-200 dark:hover:bg-slate-700 rounded-lg p-2 '
        >
          <GithubLogo
            className='dark:text-gray-300 text-[#171515]'
            size={32}
            weight='fill'
          />
        </Link>
        <Link
          href='http://mike-hoang-dev.vercel.app/'
          className='hover:bg-blue-200 dark:hover:bg-slate-700 rounded-lg p-2 '
        >
          <GlobeSimple size={32} color='#5155bd' weight='fill' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/mike-hoang-2907/'
          className='hover:bg-blue-200 dark:hover:bg-slate-700 rounded-lg p-2 '
        >
          <LinkedinLogo size={32} color='#0072b1' weight='fill' />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
