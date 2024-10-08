"use client"
import { JobVacancy } from '@/types/feed';
import React from 'react';
import { GiMoneyStack } from "react-icons/gi";
import { RxCounterClockwiseClock } from 'react-icons/rx'
import {PiSuitcaseSimpleDuotone} from 'react-icons/pi'
import {FaLocationDot} from 'react-icons/fa6'
import { useRouter } from 'next/navigation';



const FeedCard = ({ item }: { item: JobVacancy }) => {
    const router=useRouter()
    return (
        <div className='shadow hover:shadow-lg hover:scale-[1.01] transition duration-280 bg-white p-4 w-full max-w-2xl rounded-sm flex flex-col gap-2' >
            <p className=''>{item.OrgName}</p>
            <div className='flex gap-2'>
                <p className='text-sm text-slate-400'>{item.VacancyFor}</p>
                <p className='border border-blue-300 text-xs  text-blue-300 px-1 h-fit'>immdiate</p>
            </div>
            <p className='text-xs flex items-center gap-2'>
                <FaLocationDot className='text-red-600'/>
                {item.Location}
            </p>
            <div className='text-xs flex gap-3'>
                {/* <p>{item.ExperienceLevel}</p> */}
                <p className='flex items-center gap-1'>
                    <PiSuitcaseSimpleDuotone/>
                    {item.Duration}
                </p>
                <p className='flex items-center gap-1 '>
                    <GiMoneyStack className='text-green-900' />
                    {item.Salary}
                </p>
            </div>
            <p className='text-xs'>Vacancy: {item.NumberOfPeople}</p>
            <div className='text-xs flex gap-4'>
                <div className='bg-slate-100 p-1 text-slate-500 flex gap-2 items-center'>
                    <RxCounterClockwiseClock />
                    {item.DateOfPosting}
                </div>
                <div className='bg-slate-100  p-1 text-red-600 flex gap-2 items-center'>
                    <RxCounterClockwiseClock />
                    {item.LastOfRegistration}
                </div>
            </div>
            {/* <div className='flex justify-end'>
                <button className='text-xs bg-black text-white px-8 py-2 '>Apply</button>
            </div> */}
            
        </div>
    );
}

export default FeedCard;
