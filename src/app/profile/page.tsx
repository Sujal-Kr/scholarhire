"use client"
import React,{useRef} from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import Link from 'next/link'
import BasicDetails from '@/components/BasicDetails/BasicDetails'
import UploadResume from '@/components/UploadResume/UploadResume'
import Headline from '@/components/Headline/Headline'
import SkillCard from '@/components/SkillCard/SkillCard'
import Summary from '@/components/Summary/Summary'
import Education from '@/components/Education/Education'

const page = () => {
  const links:string[]=["Resume","Headline","Skills","Summary","Education","Accomplishments","Career Profile"]
  return (
    <div className='pt-20'>
      <div className="basic-info px-4 md:px-20  ">
        <BasicDetails/>
      </div>
      <div className='px-4 md:px-20 py-10 flex gap-10 '>
        <div className='hidden md:block shadow-md p-4 w-full max-w-60 rounded-md h-fit sticky top-24'>
          <h3 className='text-lg font-semibold'>Quick Links</h3>
          <div className=' flex flex-col text-sm gap-5 my-3 '>
            {
              links.map((item,index)=>(
                <li className='list-none' key={index}>{item}</li>
              ))
            }
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
					<div>
						<UploadResume/>
					</div>
					<div>
						<Headline/>
					</div>
          <div>
            <SkillCard/>
          </div>
          <div>
            <Summary/>
          </div>
          <div>
            <Education/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
