import React, { useState,useContext } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { UserSchemaType } from '@/types/userSchema.types'
import { UserContext } from '@/context/user.context'
const SkillCard = ({skills}:{
	skills:string[]
}) => {
	const {profile,setProfile}=useContext(UserContext)
	const [active, setActive] = useState<boolean>(false)
	const [data, setData] = useState<string[]>(skills)
	const [skill,setSkill] = useState<string>("")


	const handleDeleteSkills = (skill: string): void => {
		const arr = data.filter(item => item != skill)
		setData(arr)
	}
	const handleSave=()=>{
		setProfile({...profile,skills:data})
		setActive(false)
	}
	const handleCancel=()=>{
		setData([...skills])
		setActive(false)
	}
	const handleAddSkill=()=>{
		if(skill.trim()){
			const arr=[...data]
			arr.push(skill)
			setData(arr)
		}
		setSkill('')
	}
	return (
		<div className='bg-white rounded-md  shadow p-4 md:p-8 flex flex-col gap-3'>
			<div className='flex items-center gap-3'>
				<h3 className='font-semibold'>Key Skills </h3>
				<MdOutlineEdit onClick={() => setActive(true)} className='' />
			</div>
			<div className='flex gap-2 md:gap-5 w-full flex-wrap'>
				{
					skills?.map((skill, index:number) => (
						<li className='list-none w-fit md:px-3 py-1 text-slate-500 md:border border-slate-800 rounded-full text-xs' key={index}>
							{skill} {index!=skills.length-1? <span className='md:hidden'>,</span>:null}
						</li>
					))
				}
			</div>

			<div
				className={`${active ? 'flex' : 'hidden'
					} fixed left-0 top-0 h-full w-full z-10 min-h-screen bg-slate-800/60 items-center justify-center`}
			>
				<div className='bg-white rounded-md p-4 md:p-8 w-full max-w-2xl h-full md:h-fit'>
					<div className='flex items-center gap-3'>
						<IoMdArrowRoundBack className='block md:hidden text-2xl' onClick={() => setActive(false)} />
						<h3>Key Skills</h3>
					</div>
					<p className='text-xs md:text-sm my-4 text-slate-500'>
						Add skills that best define your expertise, for e.g, Direct Marketing, Oracle, Java, etc. (Minimum 1)  </p>
					<div  className='flex '>
						<input
							id='skill'
							className='text-xs  w-full outline-none border rounded-l px-3 py-3  '
							value={skill}
							onChange={(e)=>setSkill(e.target.value)}>
						</input>
						<button 
							type='submit' 
							className='md:px-8 px-4 rounded-r py-2 border border-black bg-black text-white '
							onClick={handleAddSkill}>
							Add
						</button>
					</div>
					<div className='flex gap-2 md:gap-5 w-full flex-wrap my-4 '>
						{
							data?.map((skill, index) => (

								<div key={index} className='flex items-center gap-1 md:gap-3 border rounded-full px-3 py-1 cursor-pointer'>
									<li className='list-none   text-slate-500    md:text-sm text-xs' >{skill}</li>
									<RxCross2 onClick={() => handleDeleteSkills(skill)} />
								</div>
							))
						}
					</div>
					<div className='flex justify-end gap-4 mt-4 text-xs'>
						<button 
							className='py-3 px-8 hidden md:block' 
							onClick={handleCancel}>
							Cancel
						</button>
						<button 
							className='w-full md:w-fit  py-3 px-8 text-white bg-black rounded'
							onClick={handleSave}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SkillCard
