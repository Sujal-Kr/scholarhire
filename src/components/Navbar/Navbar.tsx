"use client";
import React, { useState } from 'react';
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiChatCenteredTextLight } from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  if (["/login", "/signup"].includes(pathname)) return null;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    setLoggedIn(false);
  };

  return (
    <nav className='fixed bg-white z-10 top-0 left-0 w-full flex justify-between gap-4 items-center p-3'>
      <div className="nav-logo flex items-center text-3xl">
        <PiLinkedinLogoThin className='text-4xl' />
        <span className='text-xs hidden sm:block'>ScholarHire</span>
      </div>
      <div className='right-cont flex items-center gap-5'>
        <div className="action-btn flex items-center gap-2">
          {!loggedIn ? (
            <button 
              className='border-2 px-8 md:py-3 py-2 font-semibold text-xs rounded-2xl bg-[#0d1b2a] text-white border-[#0d1b2a]'
              onClick={()=>setLoggedIn(true)}
            >
              Sign Up
            </button>
          ) : (
            <div className='relative' onClick={toggleDropdown}>
              <div className='h-10 w-10 rounded-full border-2 border-black cursor-pointer'>
                {/* Profile picture can go here */}
              </div>
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg'>
                  <ul className='p-2'>
                    <li className=' text-sm p-2 rounded-xl flex item text-gray-700 hover:bg-gray-100 cursor-pointer'><Link href={'/profile'}>Profile</Link></li>
                    <li className=' text-sm p-2 rounded-xl flex item hover:text-[#f31260] hover:bg-[#f31260]/20 cursor-pointer' onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          )}
          {
            loggedIn && (
              <Link href={'/message'}>
                <PiChatCenteredTextLight className='text-4xl sm:text-5xl' />
              </Link>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
