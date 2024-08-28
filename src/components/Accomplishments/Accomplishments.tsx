import React, {useContext, useEffect, useState} from 'react'
import {MdOutlineEdit, MdDelete} from 'react-icons/md'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {NotebookPen} from 'lucide-react'
import { UserContext } from '@/context/user.context'
import { ProfessionalAccomplishmentType } from '@/types/userProfile.types'

const Accomplishments = () => {
	const [active, setActive] = useState<boolean>(false)
	const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(
		null,
	)
	const [accomplishments, setAccomplishments] = useState<Array<ProfessionalAccomplishmentType>>([])

    const { profile } = useContext(UserContext)


    useEffect(()=>{
        setAccomplishments(profile?.userProfile?.professionalAccomplishments)
    },[profile])

	/*
  [
    { title: 'Teacher of the Year', description: 'Recognized for outstanding contributions to student success.', date: '05/2023' },
    { title: 'National Board Certification', description: 'Achieved certification after a rigorous assessment.', date: '03/2022' },
  ]
     */

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		date: '',
	})

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const {name, value} = e.target
		setFormData({...formData, [name]: value})
	}

	const handleSave = () => {
		if (currentEditIndex !== null) {
			const updatedAccomplishments = accomplishments.map((acc, index) =>
				index === currentEditIndex ? formData : acc,
			)
			setAccomplishments([...accomplishments]) // update function needs for logic
		} else {
			// setAccomplishments([...accomplishments, formData])
		}
		setFormData({title: '', description: '', date: ''})
		setActive(false)
		setCurrentEditIndex(null)
	}

	const handleEdit = (index: number) => {
		// setFormData(accomplishments[index])
		setCurrentEditIndex(index)
		setActive(true)
	}

	const handleDelete = (index: number) => {
		const updatedAccomplishments = accomplishments.filter(
			(_, i) => i !== index,
		)
		setAccomplishments(updatedAccomplishments)
	}
	const handleCancel = () => {
		setFormData({title: '', description: '', date: ''})
		setActive(false)
		setCurrentEditIndex(null)
	}

	return (
		<div className='bg-white rounded-md shadow p-4 md:p-8 flex flex-col gap-3'>
			<div className='flex items-center gap-3'>
				<h3 className='font-semibold'>Professional Accomplishments</h3>
				<button onClick={() => setActive(true)} className=' '>
					<NotebookPen strokeWidth={1.5} size={16} />
				</button>
			</div>
			<div className='flex flex-col gap-2'>
				{accomplishments && accomplishments.map((accomplishment , index : number) => (
					<div
						key={index}
						className='flex items-center justify-between'>
						<div className='text-sm md:text-base'>
							<p className='text-slate-700 font-semibold'>
								{accomplishment.title}
							</p>
							<p className='text-slate-500'>
								{accomplishment.description}
							</p>
							<p className='text-slate-400'>
								{accomplishment.date.toLocaleString()}
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
								? 'Edit Accomplishment'
								: 'Add Accomplishment'}
						</h3>
					</div>
					<p className='text-xs md:text-sm my-4 text-slate-500'>
						{currentEditIndex !== null
							? 'Edit the details of your accomplishment below.'
							: 'Please provide the details of your new accomplishment.'}
					</p>
					<div className='flex flex-col gap-4'>
						<input
							name='title'
							value={formData.title}
							onChange={handleInputChange}
							placeholder='Title (e.g., Teacher of the Year)'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<textarea
							name='description'
							value={formData.description}
							onChange={handleInputChange}
							placeholder='Description of the accomplishment'
							className='text-xs w-full outline-none border rounded-xl p-3 resize-none'
						/>
						<input
							name='date'
							value={formData.date}
							onChange={handleInputChange}
							placeholder='Date (e.g., MM/YYYY)'
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

export default Accomplishments
