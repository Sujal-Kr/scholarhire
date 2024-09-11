import { Institution } from '@/types/institution.type'
import React from 'react'
import { Search, MapPin, GraduationCap, Users, Star, User } from 'lucide-react'
import { PiGraduationCapLight, PiUsersLight } from 'react-icons/pi'
import { IoLocationOutline } from 'react-icons/io5'
import { IoIosStarOutline } from 'react-icons/io'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Link from 'next/link'


const InstitutionCard = ({ item }: {
    item: Institution
}) => {
    return (
        <div className='rounded shadow p-3 bg-white'>
            <div>
                <p>{item.name}</p>
                <div className='flex items-center text-xs text-yellow-500'>
                    <IoIosStarOutline />
                    {item.rating}
                    <span className='text-slate-300'>|140 reviews</span>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-6  gap-1 text-slate-700'>
                <div
                    className='flex items-center gap-1 text-sm '>
                    <PiGraduationCapLight />
                    {item.type}
                </div>

                <div
                    className='flex items-center gap-1 text-sm'>
                    <IoLocationOutline />
                    {item.location}
                </div>

                <div
                    className='flex items-center gap-1 text-sm'>
                    <PiUsersLight />
                    {item.students}
                </div>
            </div>
            <Link
                className='text-xs text-slate-300 hover:text-slate-700 flex justify-end items-center gap-1'
                href={`/institution/${item?.id||1}`}>
                Explore
                <MdKeyboardDoubleArrowRight />
            </Link>

        </div>
    )
}

export default InstitutionCard
