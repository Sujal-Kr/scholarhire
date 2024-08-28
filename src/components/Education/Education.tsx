import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineEdit, MdDelete } from 'react-icons/md'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { NotebookPen } from 'lucide-react'
import { UserContext } from '@/context/user.context'
import { EducationType } from '@/types/userProfile.types'
const Education = ({ education }: {
	education: Array<EducationType>,
}) => {
	const [active, setActive] = useState<boolean>(false)
	const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null)
	const { profile, setProfile } = useContext(UserContext)
	const [educations, setEducations] = useState<Array<EducationType>>(education)


	const [formData, setFormData] = useState({ institute: '', degree: '', endDate: '' })

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSave = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault() 
		if (currentEditIndex !== null) {
			const updatedEducations = educations.map((edu: EducationType, index: number) => (
				index === currentEditIndex ? formData : edu
			))
			setEducations(updatedEducations)
			setProfile({...profile,education:updatedEducations})
		} else {
			const temp=[...educations, formData]
			setEducations(temp)
			setProfile({...profile,education:temp})
		}
		
		setActive(false)
		setCurrentEditIndex(null)
		// database save call
	}


	const handleEdit = (index: number) => {
		setFormData(profile?.education[index])
		setCurrentEditIndex(index)
		setActive(true)
	}

	const handleDelete = (index: number) => {
		const updatedEducations = educations.filter((_, i) => i !== index)
		setEducations(updatedEducations)
		setProfile({...profile,education:updatedEducations})
		setCurrentEditIndex(null)
	}

	const handleCancel = () => {
		setFormData({ institute: '', degree: '', endDate: '' })
		setActive(false)
		setCurrentEditIndex(null)
	}
	

	return (
		<div className='bg-white rounded-md shadow p-4 md:p-8 flex flex-col gap-3'>
			<div className='flex items-center gap-3'>
				<h3 className='font-semibold'>Education</h3>
				<NotebookPen
					strokeWidth={1.5}
					size={16}
					onClick={() => setActive(true)}
					className='cursor-pointer'
				/>
			</div>
			<div className='flex flex-col gap-3'>
				{profile?.education.map(
					(_: EducationType, index: number) => (
						<div
							key={index}
							className={`flex items-center justify-between md:border-none py-2 ${index != educations.length - 1
									? 'border-b  '
									: ''
								}`}>
							<div className='text-sm md:text-base'>
								<p className='text-slate-700 font-semibold'>
									{_.institute}
								</p>
								<p className='text-slate-500'>
									{_.degree}
								</p>
								<p className='text-slate-400'>
									{_.endDate.toLocaleString()}
								</p>
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
					),
				)}
			</div>
			{/* modal */}
			<div
				className={`${active ? 'flex' : 'hidden'
					} fixed left-0 top-0 h-full w-full z-10 min-h-screen bg-slate-800/60 items-center justify-center`}>
				<div className='bg-white rounded-md p-4 md:p-8 w-full max-w-2xl h-full md:h-fit'>
					<div className='flex items-center gap-3'>
						<IoMdArrowRoundBack
							className='block md:hidden text-2xl cursor-pointer'
							onClick={() => setActive(false)}
						/>
						<h3>
							{currentEditIndex !== null
								? 'Edit Education'
								: 'Add Education'}
						</h3>
					</div>
					<p className='text-xs md:text-sm my-4 text-slate-500'>
						{currentEditIndex !== null
							? 'Edit your education details below.'
							: 'Details like course, university, and more, help recruiters identify your educational background'}
					</p>
					<form className='flex flex-col gap-4 ' onSubmit={handleSave}>
						<input
							name='institute'
							value={formData.institute}
							onChange={handleInputChange}
							placeholder='institute'
							className='text-xs w-full outline-none border rounded-xl p-3'
							required={true}
						/>
						<input
							name='degree'
							value={formData.degree}
							onChange={handleInputChange}
							placeholder='Degree'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<input
							name='endDate'
							value={formData.endDate}
							onChange={handleInputChange}
							placeholder='endDate'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<div className='flex justify-end gap-4 mt-4 text-xs'>
						<button
							className='py-3 px-8 hidden md:block'
							onClick={handleCancel}>
							Cancel
						</button>
						<button
							type='submit'
							className='w-full md:w-fit py-3 px-8 text-white bg-black rounded '
							// onClick={handleSave}
							>
							Save
						</button>
					</div>
					</form>
					
				</div>
			</div>
		</div>
	)
}

export default Education
