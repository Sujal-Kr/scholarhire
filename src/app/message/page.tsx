import React from 'react';
import { CiSearch } from "react-icons/ci";

const Page = () => {
  return (
    <div className='pt-20 bg-slate-50 h-screen'>
      <div className='flex gap-2 h-full pb-2'>
        <div className='w-full h-full border max-w-sm'>
          <div className='relative bg-white py-4'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <CiSearch className='text-xl text-slate-400' />
            </div>
            <input 
              type="text" 
              className='pl-10 pr-4 py-2 w-full outline-none '  
              placeholder='Search' 
            />
          </div>
        </div>
        <div className='flex-grow border bg-white'>
          <p>message</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
