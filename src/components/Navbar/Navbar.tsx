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
    <nav className='flex justify-between items-end p-2'>
      <div className="nav-logo flex items-end text-3xl">
        <PiLinkedinLogoThin className='text-4xl' />
        <span className='text-sm hidden sm:block'>ScholarHire</span>
      </div>
      <div className='right-cont flex items-end gap-5 w-full max-w-md'>
        <div className="relative w-full">
          <CiSearch className='absolute text-3xl right-2 top-1' />
          <input className='rounded-lg text-xs border-black border-2 outline-none px-3 py-2 sm:p-3 min-w-full' type="text" name="" id="" />
        </div>
        <div className="action-btn text-3xl">
          <Link href={'/message'}>
            <PiChatCenteredTextLight />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
