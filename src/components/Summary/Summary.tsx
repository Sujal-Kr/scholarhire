import React, { useState, useEffect } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io'

const Summary = () => {
	const [active, setActive] = useState<boolean>(false)
	const [more, setMore] = useState<boolean>(false)
	const text = "Dedicated Full Stack MERN Developer with a strong track record in designing, developing, and maintaining web applications using MongoDB, Express.js, React, and Node.js. Successfully completed an internship where I honed my skills in real-world projects and collaborated with a team of professionals. Proficient in building dynamic, responsive, and user-friendly interfaces, and implementing robust backend solutions. Worked on several projects, showcasing my ability to solve complex problems and deliver high-quality software solutions. Adept at collaborating with cross-functional teams within agile environments, with a passion for continuous learning and staying updated with the latest industry trends and technologies.  "
	const [data, setData] = useState<string>(text)


	useEffect(() => {
		if (active) {
			document.documentElement.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = ''
		}
	}, [active])
	return (
		<div className='bg-white p-4 md:p-8 shadow rounded-md flex flex-col'>
			<div className='flex gap-3 items-center '>
				<h3 className='font-semibold'>Profile Summary</h3>
				<MdOutlineEdit onClick={() => setActive(true)} className='cursor-pointer' />
			</div>
			<p className='text-sm text-slate-500 my-3'>
			{more?data:data.substring(0,300)}
			<span className='font-bold  text-black 'onClick={()=>setMore(prev=>!prev)}>{more?"less":"...more"}</span></p>

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
					></textarea>
					<div className='flex justify-end gap-4 mt-4 text-xs'>
						<button className='py-3 px-8 hidden md:block' onClick={() => setActive(false)}>Cancel</button>
						<button className='w-full md:w-fit  py-3 px-8 text-white bg-black rounded'>Save</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Summary
