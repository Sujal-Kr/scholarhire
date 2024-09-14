'use client'
import React, { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { CiSearch } from 'react-icons/ci'
import { institutions } from '@/data/institution'
import InstitutionCard from '@/components/InstitutionCard/InstitutionCard'
import { Institution } from '@/types/institution.type'
import CollegeFilterCard from '@/components/CollegeFilterCard/CollegeFilterCard'


const Page = () => {

    const Category: string[] = ["College", "School", "Instituion", "Others"]
    const [category, setCategory] = useState<string>("All")
    const [active, setActive] = useState<boolean>(false)
    const [data, setData] = useState<Institution[]>(institutions)
    return (
        <div className='py-20 px-4 sm:px-10 md:px-20 min-h-dvh bg-slate-50'>
            <div>
                <p className='md:text-xl py-2 '>Top schoool and colleges for you</p>
            </div>
            <div className='relative flex gap-3 items-center'>

                <input
                    type="text"
                    className='border md:text-sm text-xs rounded-2xl py-3 pl-8  oultine w-full max-w-md'
                    placeholder='Search Colleges/Schools...'
                />
                <div className='absolute left-0 top-0 text-2xl flex items-center h-full px-2'>
                    <CiSearch />
                </div>

            </div>
            <div className='filter-cont my-3'>
                <div className='flex gap-1 text-sm justify-end items-center '>
                    <SlidersHorizontal strokeWidth={1} size={16} />
                    <p
                        className='cursor-pointer'
                        onClick={() => setActive((prev)=>!prev)}>
                        Filters
                    </p>
                </div>
                <div className={`${!active && "hidden"}`}>
                    <CollegeFilterCard/>
                </div>
            </div>
            <div className='py-4  border-b'></div>
            <div className='flex gap-3'>

                <div className='flex-1'>
                    <p className='text-xs text-slate-800 my-3'>{data?.length} Results found</p>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4'>
                        {
                            data?.map((item, index: number) => (
                                <div key={index}>
                                    <InstitutionCard item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page
