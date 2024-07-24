import React from 'react'
import {CiFilter} from 'react-icons/ci'
const FilterCard = () => {
    const handleFilters=()=>{

    }
  return (
    <div className='shadow p-2 my-6 bg-white text-xs'>
      <div className='flex items-center gap-1 justify-center pb-2  border-b'>
        <CiFilter className='text-xl text-sky-500  '/>
        <span>Filters</span>
      </div>
      <form onSubmit={handleFilters} className='flex flex-col gap-4 mt-8'>
        <div className=''>
            <p >Profile</p>
            <input type="text" placeholder='eg: Math Teacher' className='outline-none w-full border-b p-2  border-black' />
        </div>
        <div className=''>
            <p>Location</p>
            <input type="text" placeholder='eg: Mumbai' className='outline-none w-full border-b p-2  border-black' />
        </div>
        <div className='flex  gap-3 '>
            <div className=' flex  items-center gap-2'>
                <input type="radio" name='time' />
                <label htmlFor='part'>Part Time</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="radio" name='time' />
                <label htmlFor='part'>Full Time</label>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <p>Average Salary</p>
            <input type="range" className='w-full  custom-range' />
        </div>
        <div className='flex flex-col  relative '>
            <p className='absolute bottom-2 right-6 '>Years</p>
            <p>Experience</p>
            <input type="number" className='border-b outline-none p-2  border-black' placeholder='eg: 3' />
        </div>

        <div className='my-6'>
            <button type='submit' className='px-2 py-3 bg-black   text-white w-full'>Apply Filters</button>
        </div>
      </form>
      <div className='border-t p-1'>
        <p className='text-center '>Apply the filter to get the best result</p>
      </div>
    </div>
  )
}

export default FilterCard
