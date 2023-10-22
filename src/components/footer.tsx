'use client';
import React from 'react';
import Link from 'next/link';
import {
  InstagramLogo,
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='px-12 py-4 flex flex-row justify-between border-t w-full'>
      <div className='flex items-center font-semibold'>
        <Link href='/'>{'</>'} UptoTech</Link>
      </div>
      <div className='flex items-center'>
        &copy;{new Date().getFullYear()} Mike Hoang
      </div>
      <div className='flex flex-row space-x-2'>
        <Link href='#'>
          <TwitterLogo size={32} weight='fill' color='#00acee' />
        </Link>

        <Link href='https://github.com/mikah13/UptoTech'>
          <GithubLogo
            className='dark:text-gray-100 text-[#171515]'
            size={32}
            weight='fill'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/mike-hoang-2907/'>
          <LinkedinLogo size={32} color='#0072b1' weight='fill' />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
