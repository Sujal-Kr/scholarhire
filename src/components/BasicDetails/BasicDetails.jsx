import React from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {PiSuitcaseSimpleDuotone} from 'react-icons/pi'
import {MdLocalPhone} from 'react-icons/md'
import {CiMail,CiCalendar} from 'react-icons/ci'
import {MdOutlineEdit} from 'react-icons/md'
const BasicDetails = () => {
    return (
			<div className='bg-white rounded-md shadow-md p-4 md:p-16 flex md:items-center  gap-4 md:gap-10 flex-col md:flex-row'>
					<div className='flex justify-center md:justify-start'>
						<img src="/profile.jpg" alt=""  className='border-2  border-green-400 p-1 h-32 rounded-full'/>
					</div>
					<div className='basic-details flex flex-col flex-1'>
						<div className='pb-4 border-b text-center md:text-left'>
							<div className='text-lg font-semibold flex items-center justify-center md:justify-start gap-1'>Jhonny Sins <MdOutlineEdit/></div>
							<p className='text-xs md:text-sm text-slate-500'> Profile Last Updated - <span className='text-slate-700'>21,july 24</span></p>
						</div>
						<div className='grid grid-cols-1  md:grid-cols-2 pt-4 gap-4 text-slate-500'>
							<div className='md:hidden text-black text-semibold text-center'>Basic Information</div>
							<div className='flex flex-col gap-4'>
								<div className='flex items-center text-sm gap-1'>
									<FaLocationDot/>
									<span>Dallas, New York</span>
								</div>
								
								<div className='flex items-center text-sm gap-1'>
									<PiSuitcaseSimpleDuotone/>
									<span>Fresher</span>
								</div>
								<div className='flex items-center text-sm gap-1'>
									<CiCalendar/>
									<span>Add availability to join</span>
								</div>
							</div>

							<div className='flex flex-col gap-4 '>
								<div className='flex items-center text-sm gap-1'>
									<MdLocalPhone/>
									+91 839839493
								</div>	
								<div className='flex items-center text-sm gap-1'>
									<CiMail />
									<span>jhondoe@gmail.com</span>
								</div>
							</div>
						</div>
					</div>
			</div>
    )
}

export default BasicDetails
