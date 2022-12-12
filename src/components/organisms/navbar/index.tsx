import React from 'react';
import { MenuItems } from '../../molecules';

const Navbar = () => {
  return (
    <div className="flex flex-row items-center w-full px-10 py-10">
      <div className="font-bold text-3xl">Logo</div>
      <MenuItems />
      <div className="">
        <button className="bg-orange-500 py-3 px-8 text-lg font-bold rounded-sm">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
