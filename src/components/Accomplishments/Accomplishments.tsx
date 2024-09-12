import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineEdit, MdDelete } from 'react-icons/md'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { NotebookPen } from 'lucide-react'
import { UserContext } from '@/context/user.context'
import { ProfessionalAccomplishmentType } from '@/types/userProfile.types'
import { UpdateProfileDetails } from '@/helper/ProfileUpdate'
import { toast } from 'sonner'

const Accomplishments = ({ accomplishments }: {
	accomplishments: Array<ProfessionalAccomplishmentType>
}) => {
	const [active, setActive] = useState<boolean>(false)
	const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(
		null,
	)
	const [data, setData] = useState<Array<ProfessionalAccomplishmentType>>(accomplishments)

	const { profile, setProfile } = useContext(UserContext)

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		endDate: '',
	})

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSave = (e:React.FormEvent) => {
		e.preventDefault()
		if (currentEditIndex !== null) {
			const updatedAccomplishments = data.map((acc, index) =>
				index === currentEditIndex ? formData : acc,
			)
			setData(updatedAccomplishments) 
            UpdateProfile(updatedAccomplishments)
			setProfile({...profile,professionalAccomplishments: updatedAccomplishments})
		} else {
			const arr=[...data, formData]
			setData(arr)
            UpdateProfile(arr)
			setProfile({...profile,professionalAccomplishments:arr})
		}
		setFormData({ title: '', description: '', endDate: '' })
		setActive(false)
		setCurrentEditIndex(null)
	}

    const UpdateProfile = (data: ProfessionalAccomplishmentType[]) => {
        try {
            const result = UpdateProfileDetails({professionalAccomplishments:data});
            toast.promise(result, {
                success: "Profile Updated Successfully",
                loading: "Updating Profile details...",
                error: (err) => err.message
            });
        } catch (error: any) {
            toast.error(error.message);
        }
    };

	const handleEdit = (index: number) => {
		setFormData(data[index])
		setCurrentEditIndex(index)
		setActive(true)
	}

	const handleDelete = (index: number) => {
		const updatedAccomplishments = data.filter(
			(_, i) => i !== index,
		)
		setData(updatedAccomplishments)
        UpdateProfile(updatedAccomplishments)
		setProfile({...profile,professionalAccomplishments: updatedAccomplishments})
	}
	const handleCancel = () => {
		setFormData({ title: '', description: '', endDate: '' })
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
				{accomplishments?.map((_, index: number) => (
					<div
						key={index}
						className='flex items-center justify-between'>
						<div className='text-xs md:text-base'>
							<p className='text-slate-700 font-semibold'>
								{_.title}
							</p>
							<p className='text-slate-500'>
								{_.description}
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
				))}
			</div>

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
								? 'Edit Accomplishment'
								: 'Add Accomplishment'}
						</h3>
					</div>
					<p className='text-xs md:text-sm my-4 text-slate-500'>
						{currentEditIndex !== null
							? 'Edit the details of your accomplishment below.'
							: 'Please provide the details of your new accomplishment.'}
					</p>
					<form  className='flex flex-col gap-4'onSubmit={handleSave}>
						<input
							name='title'
							value={formData.title}
							onChange={handleInputChange}
							placeholder='Title (e.g., Teacher of the Year)'
							className='text-xs w-full outline-none border rounded-xl p-3'
							required
						/>
						<textarea
							name='description'
							value={formData.description}
							onChange={handleInputChange}
							placeholder='Description of the accomplishment'
							className='text-xs w-full outline-none border rounded-xl p-3 resize-none'
							required
						/>
						<input
							name='endDate'
							value={formData.endDate}
							onChange={handleInputChange}
							placeholder='Date (e.g., MM/YYYY)'
							className='text-xs w-full outline-none border rounded-xl p-3'
							required
						/>
						<div className='flex justify-end gap-4 mt-4 text-xs'>
							<button
								type='button'
								className='py-3 px-8 hidden md:block'
								onClick={handleCancel}>
								Cancel
							</button>
							<button
								type='submit'
								className='w-full md:w-fit py-3 px-8 text-white bg-black rounded'>
								Save
							</button>
						</div>
					</form>
					
				</div>
			</div>
		</div>
	)
}

export default Accomplishments
