'use client'
import React, {useContext, useEffect, useState} from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {PiSuitcaseSimpleDuotone} from 'react-icons/pi'
import {MdLocalPhone} from 'react-icons/md'
import {CiMail, CiCalendar} from 'react-icons/ci'
import {MdOutlineEdit} from 'react-icons/md'
import {IoMdArrowRoundBack} from 'react-icons/io'
import axios from 'axios'
import {UserContext} from '@/context/user.context'
import {UserSchemaType} from '@/types/userSchema.types'
import {toast} from 'sonner'
import {useRouter} from 'next/navigation'
import {CheckCheck, CircleAlert} from 'lucide-react'
import {UpdateUserDetails} from '@/helper/UserDetailsUpdate'
import Image from 'next/image'
import { dateFormat } from '@/utils/dateFormater'
import Link from 'next/link'

const BasicDetails = ({info}: {info: Partial<UserSchemaType>}) => {
	const [active, setActive] = useState<boolean>(false)
	const [data, setData] = useState<Partial<UserSchemaType>>(info)
	const {profile, setProfile} = useContext(UserContext)
	const [formData, setFormData] = useState<Partial<UserSchemaType>>({
		name: '',
		address: '',
		phone: '',
		email: '',
		availability: undefined,
	})

    console.log(info,"[User Information]")

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

	const handleSave = (e: any) => {
		e.preventDefault()
		setProfile({...profile, user: {...profile.user, ...formData}})
		setActive(false)
		UpdateDetails()
	}

	const UpdateDetails = () => {
		try {
			const result = UpdateUserDetails(formData)
			toast.promise(result, {
				success: 'User Updated Successfull',
				loading: 'Updating User details please wait...!',
				error: err => err.message,
			})
		} catch (error: any) {
			toast.error(error.message)
		}
	}

	const handleEdit = () => {
		setFormData({...info})
		setActive(true)
	}
	const handleCancel = () => {
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
						{info?.name}
						<MdOutlineEdit
							className='text-slate-500  hover:text-lg cursor-pointer'
							onClick={handleEdit}
						/>
					</div>
					<p className='text-xs md:text-sm text-slate-500'>
						Profile Last Updated -{' '}
						<span className='text-slate-700'>
							{dateFormat(info?.updatedAt!)}
						</span>
					</p>
				</div>
				<div className='grid  pt-4 gap-4 text-slate-700'>
					<div className='md:hidden text-black font-semibold text-center'>
						Basic Information
					</div>
					<div className='grid md:grid-cols-2 gap-4 '>
						<div className='flex items-center text-sm gap-1'>
							<FaLocationDot />
							<span>
								{info?.address || 'Please add your location'}
							</span>
						</div>

						<div className='flex items-center text-sm gap-1'>
							<CiCalendar />
							<span>
								{info?.availability ||
									'Please add your availability'}
							</span>
						</div>

						<div className='flex items-center text-sm gap-1'>
							<MdLocalPhone />
							<span>+91 {info?.phone || '839334XXXX'}</span>
						</div>

						{info?.email && (
							<div className='flex items-center text-sm gap-1'>
								<CiMail />
								<span>{info?.email}</span>
								{info?.isVerified ? (
									<div className='group flex gap-2 relative'>
										<CheckCheck
											size={18}
											className='text-green-400'
										/>
										<span className='text-[10px] whitespace-nowrap font-semibold absolute left-5 -top-1 space-x-2 text-black bg-green-100 py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
											Your Email is Verifed
										</span>
									</div>
								) : (
									<div className='group flex gap-2 relative'>
										<CircleAlert
											size={18}
											className='text-red-500'
										/>
										<span className='text-[10px] whitespace-nowrap font-semibold absolute left-5 -top-1 space-x-2 text-black bg-red-400/20 py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
											<Link href={`/verify/${info?._id}`}>Please Click to Verify Your Email</Link>
										</span>
									</div>
								)}
							</div>
						)}
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
					<form className='flex flex-col gap-4' onSubmit={handleSave}>
						<input
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							placeholder='Name'
							className='text-xs w-full outline-none border rounded-xl p-3'
							required
						/>
						<input
							name='address'
							value={formData.address}
							onChange={handleInputChange}
							placeholder='Location'
							className='text-xs w-full outline-none border rounded-xl p-3'
							required
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

export default BasicDetails
