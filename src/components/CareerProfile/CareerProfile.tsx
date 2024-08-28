import React, {useContext, useEffect, useState} from 'react'
import {MdOutlineEdit, MdDelete} from 'react-icons/md'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {NotebookPen} from 'lucide-react'
import { CarrierProfileType } from '@/types/userProfile.types'
import { UserContext } from '@/context/user.context'

const CareerProfile = () => {
	const [active, setActive] = useState<boolean>(false)
	const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null)
    const { profile } = useContext(UserContext)

	const [profiles, setProfiles] = useState<Array<CarrierProfileType>>([])

	const [formData, setFormData] = useState({
		company: '',
		position: '',
		duration: 0 || null,
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target
		setFormData({...formData, [name]: value})
	}

	const handleSave = () => {
		if (currentEditIndex !== null) {
			const updatedProfiles = profiles.map((profile, index) =>
				index === currentEditIndex ? formData : profile,
			)
			// setProfiles(updatedProfiles)
		} else {
			// setProfiles([...profiles, formData])
		}
		setFormData({company: '', position: '', duration: null})
		setActive(false)
		setCurrentEditIndex(null)
	}

	const handleEdit = (index: number) => {
		// setFormData(profiles[index])
		setCurrentEditIndex(index)
		setActive(true)
	}

	const handleDelete = (index: number) => {
		const updatedProfiles = profiles.filter((_, i) => i !== index)
		setProfiles(updatedProfiles)
	}
	const handleCancel = () => {
		setFormData({company: '', position: '', duration: null})
		setActive(false)
		setCurrentEditIndex(null)
	}

    useEffect(()=>{
        console.log(profile?.userProfile?.carrierProfile)
        setProfiles(profile?.userProfile?.carrierProfile)
    },[profile])

	return (
		<div className='bg-white rounded-md shadow p-4 md:p-8 flex flex-col gap-3'>
			<div className='flex items-center gap-3'>
				<h3 className='font-semibold'>Career Profile</h3>
				<NotebookPen
					strokeWidth={1.5}
					size={16}
					onClick={() => setActive(true)}
					className='cursor-pointer'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				{profiles && profiles.map((profile, index) => (
					<div
						key={index}
						className='flex items-center justify-between'>
						<div className='text-sm md:text-base'>
							<p className='text-slate-700 font-semibold'>
								{profile.company}
							</p>
							<p className='text-slate-500'>{profile.position}</p>
							<p className='text-slate-400'>Duration : {profile.duration} years</p>
						</div>
						<div className='flex items-center gap-2'>
							<MdOutlineEdit
								onClick={() => handleEdit(index)}
								className='cursor-pointer'
							/>
							<MdDelete
								onClick={() => handleDelete(index)}
								className='cursor-pointer'
							/>
						</div>
					</div>
				))}
			</div>

			<div
				className={`${
					active ? 'flex' : 'hidden'
				} fixed left-0 top-0 h-full w-full z-10 min-h-screen bg-slate-800/60 items-center justify-center`}>
				<div className='bg-white rounded-md p-4 md:p-8 w-full max-w-2xl h-full md:h-fit'>
					<div className='flex items-center gap-3'>
						<IoMdArrowRoundBack
							className='block md:hidden text-2xl cursor-pointer'
							onClick={() => setActive(false)}
						/>
						<h3>
							{currentEditIndex !== null
								? 'Edit Career Profile'
								: 'Add Career Profile'}
						</h3>
					</div>
					<p className='text-xs md:text-sm my-4 text-slate-500'>
						{currentEditIndex !== null
							? 'Edit your career profile details below.'
							: 'Add new career profile details below.'}
					</p>
					<div className='flex flex-col gap-4'>
						<input
							name='company'
							value={formData.company}
							onChange={handleInputChange}
							placeholder='Company'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<input
							name='position'
							value={formData.position}
							onChange={handleInputChange}
							placeholder='Position'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<input
							name='years'
							value={formData.duration!}
							onChange={handleInputChange}
							placeholder='Years (e.g., 2015-2018)'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
					</div>
					<div className='flex justify-end gap-4 mt-4 text-xs'>
						<button
							className='py-3 px-8 hidden md:block'
							onClick={handleCancel}>
							Cancel
						</button>
						<button
							className='w-full md:w-fit py-3 px-8 text-white bg-black rounded'
							onClick={handleSave}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CareerProfile
