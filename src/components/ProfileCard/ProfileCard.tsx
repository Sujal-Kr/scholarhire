import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import Link from 'next/link';

const ProfileCard = () => {
    return (
        <div className="bg-white">
            <div className="w-full   p-2 gap-2 mb-2 md:mb-0 shadow">
                <div className='flex flex-col items-center gap-2 mb-2 '>
                    <img src="/profile.jpg" className="h-16 aspect-square border-2 border-green-400 rounded-full p-1 text-xs" alt="Profile" />
                    <div className="  border-black">
                        <p>Sujal Kumar</p>
                    </div>
                </div>
                <p className='text-xs text-center  pb-4 border-b   '>React Developer | Proficient in React JS, Java, Redux, and JavaScript</p>
                <div className='flex justify-center gap-1  my-2 text-slate-500 items-center text-xs'>
                    <p className=''><Link href='/profile'>Edit Your Profile</Link></p>
                    <MdOutlineEdit/>
                </div>
            </div>

        </div>

    )
}

export default ProfileCard
