'use client'

import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import BasicDetails from '@/components/BasicDetails/BasicDetails'
import UploadResume from '@/components/UploadResume/UploadResume'
import Headline from '@/components/Headline/Headline'
import SkillCard from '@/components/SkillCard/SkillCard'
import Summary from '@/components/Summary/Summary'
import Education from '@/components/Education/Education'
import CareerProfile from '@/components/CareerProfile/CareerProfile'
import Accomplishments from '@/components/Accomplishments/Accomplishments'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/user.context'
import { toast } from 'sonner'

const Profile = () => {
	const router = useRouter()

	const { profile, setProfile, fetchProfile } = useContext(UserContext)
	const links: string[] = [
		'Resume',
		'Headline',
		'Skills',
		'Summary',
		'Education',
		'Accomplishments',
		'Career Profile',
	]
	// const [data, setData] = useState()

	useEffect(() => {
		try{
			fetchProfile()
		}catch(err:any){
			console.log(err.message)
		}
	  }, [])

	return (
		<div className='pt-20 bg-[#f8f9fa]'>
			<div className='basic-info px-4 md:px-20'>
				<BasicDetails info={profile?.user}/>
			</div>
			<div className='px-4 md:px-20 py-10 flex gap-10'>
				<div className='hidden md:block shadow-md p-4 bg-white w-full max-w-60 rounded-md h-fit sticky top-24'>
					<h3 className='text-lg font-semibold'>Quick Links</h3>
					<div className='flex flex-col text-sm gap-3 my-3'>
						{links.map((item, index) => (
							<li
								className='transition-all duration-500 text-sm list-none hover:bg-slate-100 p-2 hover:font-semibold rounded-2xl'
								key={index}>
								{item}
							</li>
						))}
					</div>
				</div>
				<div className='flex-1 flex flex-col gap-4'>
					{
					
					profile&&<div className='flex-1 flex flex-col gap-4'>
						{/* <UploadResume resume={profile?.resume} />  */}
						<Headline headline={profile?.headline} /> 
						<SkillCard skills={profile?.skills} /> 
						<Summary  /> 
						<Education education={profile?.education} /> 
						<Accomplishments accomplishments={profile?.professionalAccomplishments} /> 
						<CareerProfile careers={profile?.careerProfile} /> 
					</div>
					}	
				</div>
			</div>
		</div>
	)
}

export default Profile
