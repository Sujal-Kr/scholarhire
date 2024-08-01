"use client"
import React,{useRef} from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import Link from 'next/link'
import BasicDetails from '@/components/BasicDetails/BasicDetails'
const page = () => {
  
  return (
    <div className='pt-20'>
      <div className="basic-info px-4 md:px-20  ">
        <BasicDetails/>
      </div>
    </div>
  )
}

export default page
