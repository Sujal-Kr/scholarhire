'use client'
import { JobVacancy } from '@/types/feed'
import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const FeedModal = ({ curr, active, setActive }: {
  curr?: JobVacancy | undefined,
  active: boolean,
  setActive: (active: boolean) => void
}) => {
  return (
    <div className={`min-h-screen md:py-2  fixed top-0 left-0 w-full min-w-screen bg-neutral-100/60 z-20 ${active ? "flex" : "hidden"} justify-center items-end md:items-center transition-all duration-300`}>
      <div className='bg-white flex  flex-col gap-4 max-w-2xl w-full  rounded'>
        <div className='flex justify-between items-center bg-slate-100 py-2  px-4'>
          <div>
            <h2 >{"Applying for "+curr?.VacancyFor}</h2>
            <h4 className='text-sm'>{curr?.OrgName || "Organisation"}</h4>
          </div>
          <div className='self-start bg-white rounded-full p-1 '>
            <RxCross2  className='text-2xl  cursor-pointer' onClick={() => setActive(false)} />
          </div>
        </div>
        <div className=' px-4'>
          <p className='text-sm'>Key Responsilites</p>
          <div className='text-xs mt-2 '>
            {
                curr?.KeyResponsibilities.map((item,index)=>(
                    <li className='list-decimal' key={index}>
                        {item}
                    </li>
                ))
            }
          </div>
        </div>
        <div className=' px-4 flex items-center text-xs'>
            <p className=''>Location:</p>
            <p >{curr?.Location}</p>
        </div>
        <div className=' px-4'>
            <p className='text-sm'>Skills Required</p>
            <div className='text-xs my-1 flex flex-wrap gap-2 pt-2 '>
                {curr?.SkillsRequired.map((skill,index)=>(
                    <p className='bg-slate-50 text-slate-600 p-1 rounded-md'>{skill}</p>
                ))}
            </div>
        </div>
        
        <div className=' px-4'>
            <p className='text-sm'>Salary</p>
            <p className='text-xs'>{curr?.Salary}</p>
        </div>
        <div className='text-xs px-4'>
            <p>No of openings: {curr?.NumberOfOpenings}</p>
            <p>Candiates Applied: {curr?.NumberOfPeople}</p>
        </div>

        <div className=' flex justify-end py-2 px-4 border-t '>
            <button className='text-sm   bg-black  text-white py-2 px-8 '>Apply</button>
            <button className=''></button>
        </div>
      </div>
    </div>
  )
}

export default FeedModal