import React from 'react'
import { IconType } from 'react-icons'
import { Institution } from '@/types/institution.type'
import { institutions } from '@/data/institution'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiGraduationCapLight, PiStudentLight } from "react-icons/pi";
import { MdSettingsAccessibility } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";

const Page = ({ params }: {
	params: {
		id: number
	}
}) => {
	const data = institutions[params.id - 1]
	const stats = [PiStudentLight, PiGraduationCapLight, MdSettingsAccessibility, FaRegBuilding]

	return (
		<div className='py-20 flex flex-col  px-6 sm:px-10 md:px-20 bg-slate-100'>
			<header className='border-b pb-2 text-xs sm:text-sm'>
				<p className='flex gap-1 items-center'>
					<Link className='text-slate-600' href="/institution">Institution</Link>
					<IoIosArrowForward />
					{data?.name}
				</p>
			</header>
			<section className='flex-1 grid md:grid-cols-2'>
				<div className=' flex flex-col gap-3 py-10'>
					<h3 className='text-xl sm:text-2xl font-bold '>Welcome to {data?.name}</h3>
					<p className='text-sm sm:text-base font-mono text-slate-600'>{data?.description},Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quas possimus sapiente voluptate similique! Velit libero aliquam illo! Repellat, reprehenderit. Illo explicabo cumque perferendis quae ipsum, odio vel neque cupiditate?</p>
					<div className='flex gap-3'>
						<p className='text-xs md:text-sm px-4 py-1 bg-gray-50 text-slate-800  rounded-full flex gap-1 items-center justify-center'><FaLocationDot />{data?.location}</p>
						<p className='text-xs md:text-sm px-4 py-1 bg-gray-50 text-slate-800  rounded-full flex gap-1 items-center justify-center'><PiGraduationCapLight />{data?.type}</p>
					</div>
				</div>
				<div className=''>
					<img src={data?.image} className=' object-cover gap-3' alt="" />
				</div>
			</section>
			<section className='py-10'>
				<h3 className='text-2xl font-semibold'>Key Statistics</h3>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
					{
						stats.map((Item: IconType, index) => (
							<div key={index} className='border-2 bg-white rounded-lg p-3 flex flex-col gap-7'>
								<div className='flex justify-between items-center text-sm'>
									Total Students
									<Item />
								</div>
								<div className=''>
									<p className='text-2xl'>1234</p>
									<p className='text-xs'>Enrolled for current academic year</p>
								</div>


							</div>
						))
					}
				</div>
			</section>
			<section className='py-10'>
				<h3 className='text-2xl font-semibold'>Job Opportunities</h3>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
				<div  className='border-2 bg-white rounded-lg p-3 flex flex-col gap-7'>
								<div className='flex justify-between items-center text-sm'>
									Total Students
									{/* <Item /> */}
								</div>
								<div className=''>
									<p className='text-2xl'>1234</p>
									<p className='text-xs'>Enrolled for current academic year</p>
								</div>


							</div>
				</div>
			</section>
		</div>

	)
}

export default Page
