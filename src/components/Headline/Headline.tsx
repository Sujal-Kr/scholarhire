import React, { useState,useEffect } from 'react';
import { MdOutlineEdit  } from 'react-icons/md';
import {IoMdArrowRoundBack} from 'react-icons/io'
const Headline = () => {
  const [active, setActive] = useState<boolean>(false)

	useEffect(() => {
    if (active) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [active])


  return (
    <div className='bg-white p-4 md:p-8 shadow rounded-md flex flex-col'>
      <div className='flex gap-3 items-center '>
        <h3 className='font-semibold'>Headline</h3>
        <MdOutlineEdit onClick={() => setActive(true)}  className='cursor-pointer' />
      </div>
      <p className='text-sm text-slate-500 my-3'>
        React Developer | Proficient in React JS, Java, Redux, and JavaScript
      </p>

      {/* Modal for editing */}
      <div
        className={`${
          active ? 'flex' : 'hidden'
        } fixed left-0 top-0 h-full w-full z-10 min-h-screen bg-slate-800/60 items-center justify-center`}
      >
        <div className='bg-white rounded-md p-4 md:p-8 w-full max-w-2xl h-full md:h-fit'>
          <div className='flex items-center gap-3'>
						<IoMdArrowRoundBack className='block md:hidden text-2xl' onClick={() => setActive(false)}/>
						<h3>Resume Headline</h3>
					</div>
          <p className='text-xs md:text-sm my-4 text-slate-500'>
            It is the first thing recruiters notice in your profile. Write a concise headline introducing yourself to employers. (Minimum 5 words)
          </p>
          <label htmlFor='headline' className='sr-only'>Resume Headline</label>
          <textarea
            id='headline'
            className='text-xs resize-none w-full outline-none border rounded p-2 min-h-32'
          ></textarea>
          <div className='flex justify-end gap-4 mt-4 text-xs'>
            <button className='py-3 px-8 hidden md:block' onClick={() => setActive(false)}>Cancel</button>
            <button className='w-full md:w-fit  py-3 px-8 text-white bg-black rounded'>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
