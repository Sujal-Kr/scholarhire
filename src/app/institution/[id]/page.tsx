'use client'
import React, { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { Institution } from '@/types/institution.type'
import { institutions } from '@/data/institution'
import Link from 'next/link'
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiGraduationCapLight, PiStudentLight } from "react-icons/pi";
import { MdSettingsAccessibility } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { FiUserCheck } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'sonner'
import Loading from '@/components/Loading/loading'


const Page = ({ params }: { params: { id: string } }) => {

    const [data, setData] = useState<Institution>()

    useEffect(()=>{
        fetchDetails()
    },[])

    const fetchDetails = async() => {
        try {
            const response = axios.get(`/api/institution/${params.id}`)
            toast.promise(response, {
                // success:(data)=>{
                //     setData(data.data.data)
                //     return "Details Fetched Succesfully"
                // },
                // loading:"Fetching This Institution Details",
                error: (error)=> error.message
            })
        } catch (error:any) {
            toast.error(error.message)
        }
    }
	const keyStats = [
		{ label: "Total Students", icon: PiStudentLight, value: 1234, description: "Enrolled for current academic year" },
		{ label: "Graduation Rate", icon: PiGraduationCapLight, value: "85%", description: "Success rate" },
		{ label: "Non Teaching Staff", icon: MdSettingsAccessibility, value: "45", description: "Supporting our operations" },
		{ label: "Facilities", icon: FaRegBuilding, value: "25+", description: "Facilities available" }
	]

	const jobStats = [
		{ title: "Job Posts", icon: PiSuitcaseSimpleDuotone, value: 12, desc: "Total Post for the position" },
		{ title: "Hires from Platform", icon: FiUserCheck, value: 42, desc: "Successful hires" },
		{ title: "Hiring Success Rate", icon: IoCheckmarkDone, value: "90%", desc: "Satisfaction with platform hires" }
	]

	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const images = [
		{ src: '/profile.jpg', alt: "Campus Building" },
		{ src: "/placeholder.svg?height=600&width=800", alt: "Library Interior" },
		{ src: "/placeholder.svg?height=600&width=800", alt: "Science Lab" },
		{ src: "/placeholder.svg?height=600&width=800", alt: "Sports Field" },
		{ src: "/placeholder.svg?height=600&width=800", alt: "Classroom" },
		{ src: "/placeholder.svg?height=600&width=800", alt: "Cafeteria" },
	]

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
	}

    if(!data){
        return <Loading />
    }
	return (
		<div className='py-20 flex flex-col px-6 sm:px-10 md:px-20 bg-slate-100'>
			<header className='border-b pb-2 text-xs sm:text-sm'>
				<p className='flex gap-1 items-center'>
					<Link className='text-slate-600' href="/institution">Institution</Link>
					<IoIosArrowForward />
					{data?.name}
				</p>
			</header>
			<section className='flex-1 grid md:grid-cols-2'>
				<div className=' flex flex-col gap-3 py-10'>
					<h3 className='text-xl sm:text-2xl font-bold'>Welcome to {data?.name}</h3>
					<p className='text-sm sm:text-base font-mono text-slate-600'>{data?.description},Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit exercitationem fugit? Totam quos impedit dolorem iste eligendi veniam obcaecati libero, quas aliquid, culpa sapiente quis aliquam eum similique sunt.</p>
					<div className='flex gap-3'>
						<p className='text-xs md:text-sm px-4 py-1 bg-gray-50 text-slate-800 rounded-full flex gap-1 items-center justify-center'><FaLocationDot />{data?.location}</p>
						<p className='text-xs md:text-sm px-4 py-1 bg-gray-50 text-slate-800 rounded-full flex gap-1 items-center justify-center'><PiGraduationCapLight />{data?.type}</p>
					</div>
				</div>
				<div className=''>
					<img src={images[0].src || "somevalue"} className='object-cover gap-3' alt="" />
				</div>
			</section>
			<section className='py-10'>
				<h3 className='text-2xl font-semibold'>Key Statistics</h3>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
					{
						keyStats.map((stat, index) => (
							<div key={index} className='border-2 bg-white rounded-lg p-3 flex flex-col gap-7'>
								<div className='flex justify-between items-center text-sm'>
									{stat.label}
									<stat.icon className='text-xl' />
								</div>
								<div>
									<p className='text-2xl'>{stat.value}</p>
									<p className='text-xs'>{stat.description}</p>
								</div>
							</div>
						))
					}
				</div>
			</section>
			<section className='py-10'>
				<h3 className='text-2xl font-semibold'>Job Opportunities</h3>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
					{
						jobStats.map((job, index) => (
							<div key={index} className='border-2 bg-white rounded-lg p-3 flex flex-col gap-7'>
								<div className='flex justify-between items-center text-sm'>
									{job.title}
									<job.icon className='text-xl' />
								</div>
								<div>
									<p className='text-2xl'>{job.value}</p>
									<p className='text-xs'>{job.desc}</p>
								</div>
							</div>
						))
					}
				</div>
			</section>
			<section className='py-10'>
				<h3 className='text-2xl font-semibold'>Gallery</h3>
				<div className='relative my-10'>
					<Image
						src={images[currentIndex].src}
						alt={images[currentIndex].alt}
						width={800}
						height={600}
						className="w-full h-[400px] object-cover rounded-lg shadow-xl"
					/>
					<button onClick={handlePrev} className='absolute p-2 rounded text-slate-700 bg-slate-50 left-2 top-1/2 z-10 transform -translate-y-1/2'><IoIosArrowBack/></button>
					<button onClick={handleNext} className='absolute p-2 rounded text-slate-700 bg-slate-50 right-2 top-1/2 z-10 transform -translate-y-1/2'><IoIosArrowForward/></button>
				</div>
			</section>
		</div>
	)
}

export default Page
