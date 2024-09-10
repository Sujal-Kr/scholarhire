import React, { useState, useEffect, useContext } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io'
import { UserContext } from '@/context/user.context';
import { UpdateProfileDetails } from '@/helper/ProfileUpdate';
import { toast } from 'sonner';

const Summary = () => {
	const [active, setActive] = useState<boolean>(false)
	const [more, setMore] = useState<boolean>(false)
	const { profile,setProfile } = useContext(UserContext)
	const [data, setData] = useState<string>(profile?.summary)


	useEffect(() => {
		if (active) {
			document.documentElement.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = ''
		}
	}, [active])

	const handleCancel = ()=>{
		setData(profile?.summary)
		setActive(false)
	}
	const handleSave = ()=>{
		setActive(false)
		setProfile({...profile, summary:data})
        handleUpdatingDetails()
	}
    const handleUpdatingDetails =  () => {
		try {
			const result = UpdateProfileDetails({summary: data})
			toast.promise(result,{
                success:"Details Updated..!",
                loading:"Updating Details",
                error: (error)=>error.message
            })
		} catch (error: any) {
			toast.error(error.message)
		}
	}
	return (
		<div className='bg-white p-4 md:p-8 shadow rounded-md flex flex-col'>
			<div className='flex gap-3 items-center '>
				<h3 className='font-semibold'>Profile Summary</h3>
				<MdOutlineEdit onClick={() => setActive(true)} className='cursor-pointer' />
			</div>
			<p className='text-sm text-slate-500 my-3'>
			{more?profile?.summary:profile?.summary?.substring(0,300)}
			<span className={`font-bold  text-black cursor-pointer ${data?.length>300?" ":"hidden"} `}onClick={()=>setMore(prev=>!prev)}>{more?"less":"...more"}</span></p>

			{/* Modal for editing */}
			<div
				className={`${active ? 'flex' : 'hidden'
					} fixed left-0 top-0 h-full w-full z-10 min-h-screen bg-slate-800/60 items-center justify-center`}
			>
				<div className='bg-white rounded-md p-4 md:p-8 w-full max-w-2xl h-full md:h-fit'>
					<div className='flex items-center gap-3'>
						<IoMdArrowRoundBack className='block md:hidden text-2xl' onClick={() => setActive(false)} />
						<h3>Profile Summary</h3>
					</div>
					<p className='text-xs md:text-sm my-4 text-slate-500'>
						Give recruiters a brief overview of the highlights of your career, key achievements, and career goals to help recruiters know your profile better.
					</p>
					<label htmlFor='headline' className='sr-only'>Resume Headline</label>
					<textarea
						id='headline'
						className='text-xs resize-none w-full outline-none border rounded-xl overflow-y-scroll p-2 h-24'
						value={data}
						onChange={(e)=>setData(e.target.value)}
					></textarea>
					<div className='flex justify-end gap-4 mt-4 text-xs'>
						<button 
							className='py-3 px-8 hidden md:block' 
							onClick={handleCancel}>
							Cancel
						</button>
						<button 
							className='w-full md:w-fit  py-3 px-8 text-white bg-black rounded'
							onClick={handleSave}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Summary
