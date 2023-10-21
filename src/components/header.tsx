import React from 'react';
import { ModeToggle } from './mode-toggler';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='px-12 py-4 flex flex-row justify-between border-b '>
      <div className='flex items-center font-semibold'>{'</>'} UptoTech</div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
