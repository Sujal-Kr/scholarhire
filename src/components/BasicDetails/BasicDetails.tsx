import React, {useContext, useEffect, useState} from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {PiSuitcaseSimpleDuotone} from 'react-icons/pi'
import {MdLocalPhone} from 'react-icons/md'
import {CiMail, CiCalendar} from 'react-icons/ci'
import {MdOutlineEdit} from 'react-icons/md'
import {IoMdArrowRoundBack} from 'react-icons/io'
import axios from 'axios'
import {UserContext} from '@/context/user.context'

const BasicDetails = () => {
	const [active, setActive] = useState<boolean>(false)
	const {user} = useContext(UserContext)
	const [formData, setFormData] = useState({
		name: 'John Doe',
		location: 'Dallas, New York',
		experience: 'Fresher',
		phone: '+91 839839493',
		email: 'jhondoe@gmail.com',
		availability: 'Add availability to join',
	})
	const fetchDetails = async () => {
		const res = await axios.get('/api/profile')
	}

	useEffect(() => {
		if (active) {
			document.documentElement.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = ''
		}
	}, [active])

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const {name, value} = e.target
		setFormData({...formData, [name]: value})
	}

	const handleSave = () => {
		setActive(false)
	}

	return (
		<div className='bg-white rounded-md shadow p-4 md:p-16 flex md:items-center gap-4 md:gap-10 flex-col md:flex-row'>
			<div className='flex justify-center md:justify-start'>
				<img
					src='/profile.jpg'
					alt='Profile'
					className='border-2 object-cover border-green-400 p-1 h-32 rounded-full'
					loading='lazy'
				/>
			</div>
			<div className='basic-details flex flex-col flex-1'>
				<div className='pb-4 border-b text-center md:text-left'>
					<div className='text-lg font-semibold flex items-center justify-center md:justify-start gap-4'>
						{formData.name}
						<MdOutlineEdit
							className='text-slate-500  hover:text-lg cursor-pointer'
							onClick={() => setActive(true)}
						/>
					</div>
					<p className='text-xs md:text-sm text-slate-500'>
						Profile Last Updated -{' '}
						<span className='text-slate-700'>21 July, 24</span>
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 text-slate-700'>
					<div className='md:hidden text-black font-semibold text-center'>
						Basic Information
					</div>
					<div className='flex flex-col gap-4 '>
						<div className='flex items-center text-sm gap-1'>
							<FaLocationDot />
							<span>{formData.location}</span>
						</div>
						<div className='flex items-center text-sm gap-1'>
							<PiSuitcaseSimpleDuotone />
							<span>{formData.experience}</span>
						</div>
						<div className='flex items-center text-sm gap-1'>
							<CiCalendar />
							<span>{formData.availability}</span>
						</div>
					</div>
					<div className='flex flex-col gap-4 '>
						<div className='flex items-center text-sm gap-1'>
							<MdLocalPhone />
							<span>{formData.phone}</span>
						</div>
						<div className='flex items-center text-sm gap-1'>
							<CiMail />
							<span>{formData.email}</span>
						</div>
					</div>
				</div>
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
						<h3>Edit Profile</h3>
					</div>
					<p className='text-xs md:text-sm my-4 text-slate-500'>
						Update your basic profile details below.
					</p>
					<div className='flex flex-col gap-4'>
						<input
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							placeholder='Name'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<input
							name='location'
							value={formData.location}
							onChange={handleInputChange}
							placeholder='Location'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<input
							name='experience'
							value={formData.experience}
							onChange={handleInputChange}
							placeholder='Experience'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<input
							name='availability'
							value={formData.availability}
							onChange={handleInputChange}
							placeholder='Availability'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<input
							name='phone'
							value={formData.phone}
							onChange={handleInputChange}
							placeholder='Phone'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
						<input
							name='email'
							value={formData.email}
							onChange={handleInputChange}
							placeholder='Email'
							className='text-xs w-full outline-none border rounded-xl p-3'
						/>
					</div>
					<div className='flex justify-end gap-4 mt-4 text-xs'>
						<button
							className='py-3 px-8 hidden md:block'
							onClick={() => setActive(false)}>
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

export default BasicDetails
