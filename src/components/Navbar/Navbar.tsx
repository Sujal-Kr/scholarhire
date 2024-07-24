"use client";
import React from 'react';
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  if (["/login", "/signup"].includes(pathname)) return null;

  return (
    <nav className='flex justify-between gap-4 items-center p-2'>
      <div className="nav-logo flex items-center text-3xl">
        <PiLinkedinLogoThin className='text-4xl' />
        <span className='text-xs hidden  sm:block'>ScholarHire</span>
      </div>
      <div className='right-cont flex items-center gap-5 w-full max-w-md'>
        <div className="relative w-full ">
          <div className='absolute right-1  h-full w-fit flex items-center '>
            <CiSearch className='text-2xl sm:text-4xl' />
          </div>
          <input className=' text-xs border-black border-2 outline-none px-3 py-1 sm:p-3 min-w-full' type="text" name="" id="" />
        </div>
        <div className="action-btn ">
          <Link href={'/message'}>
            <PiChatCenteredTextLight className='text-4xl sm:text-5xl' />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
