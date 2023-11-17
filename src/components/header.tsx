import React from 'react';
import { ModeToggle } from './mode-toggler';
import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='px-6 lg:px-12 py-4 flex flex-row justify-between border-b '>
      <div className='flex items-center font-semibold'>
        <Link href='/'>{'</>'} UptoTech</Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
