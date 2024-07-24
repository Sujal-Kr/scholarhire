import { JobVacancy } from '@/types/feed';
import React from 'react';
import { GiMoneyStack } from "react-icons/gi";
import { RxCounterClockwiseClock } from 'react-icons/rx'

const FeedCard = ({ item }: { item: JobVacancy }) => {
    return (
        <div className='shadow  bg-white p-4 w-full max-w-2xl rounded-sm flex flex-col gap-2'>
            <p className=''>{item.OrgName}</p>
            <div className='flex gap-2'>
                <p className='text-sm text-slate-400'>{item.VacancyFor}</p>
                <p className='border border-blue-300 text-xs  text-blue-300 px-1 '>immdiate</p>
            </div>
            <div className='text-xs flex gap-3'>
                <p>{item.ExperienceLevel}</p>
                <p>{item.Duration}</p>
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
                <div className='bg-slate-100  p-1 text-slate-500 flex gap-2 items-center'>
                    <RxCounterClockwiseClock />
                    {item.LastOfRegistration}
                </div>
            </div>
            <div className='flex justify-end'>
                <button className='text-xs bg-black text-white px-8 py-2'>Apply</button>
            </div>
        </div>
    );
}

export default FeedCard;
