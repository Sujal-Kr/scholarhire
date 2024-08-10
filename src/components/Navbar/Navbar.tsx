"use client";
import React, { useContext, useState } from 'react';
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiChatCenteredTextLight } from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserContext } from '@/context/user.context';

const Navbar = () => {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const {user,setUser} = useContext(UserContext);

  if (["/login", "/signup"].includes(pathname) || /^\/verify\/.*/.test(pathname)) {
    return null;
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    setUser(null);
    // setLoggedIn(false);
  };

  return (
    <nav className='fixed bg-white z-10 top-0 left-0 w-full flex justify-between gap-4 items-center p-3'>
      <div className="nav-logo flex items-center text-3xl">
        <PiLinkedinLogoThin className='text-4xl' />
        <span className='text-xs hidden sm:block'>ScholarHire</span>
      </div>
      <div className='right-cont flex items-center gap-5'>
        <div className="action-btn flex items-center gap-2">
          {!user ? (
            <button 
              className='border-2 px-8 md:py-3 py-2 font-semibold text-xs rounded-2xl bg-[#0d1b2a] text-white border-[#0d1b2a]'
              // onClick={()=>setLoggedIn(true)}
            >
              <Link href={'/signup'}>Sign Up</Link>
            </button>
          ) : (
            <div className='relative' onClick={toggleDropdown}>
              <div className='h-10 w-10 rounded-full border-2 border-black cursor-pointer'>
                {/* Profile picture can go here */}
              </div>
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg'>
                  <ul className='p-2 '>
                    <li className='px-2 border-b-2 py-4 text-sm'>
                      <p>Sujal kumar</p>
                      <p>sujal@gmail.com</p>
                    </li>
                    <li className=' text-sm p-2 mt-2 rounded-xl flex item text-gray-700 hover:bg-gray-100 cursor-pointer'><Link href={'/profile'}>Profile</Link></li>
                    <li className=' text-sm p-2 rounded-xl flex item text-gray-700 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>My Application</li>
                    <li className=' text-sm p-2 rounded-xl flex item text-gray-700 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>My post</li>
                    <li className=' text-sm p-2 rounded-xl mb-2 flex item hover:text-[#f31260] hover:bg-[#f31260]/20 cursor-pointer' onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          )}
          {
            user && (
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
