'use client'
import React, {useState, useEffect} from 'react'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
import {data} from '@/data/feed'
import FeedCard from '@/components/FeedCard/FeedCard'
import FilterCard from '@/components/FilterCard/FilterCard'
import FeedModal from '@/components/FeedModal/FeedModal'
import {JobVacancy} from '@/types/feed'

const Page = () => {
	const [feed, setFeed] = useState<JobVacancy[]>(data)
	const [curr, setCurr] = useState<JobVacancy | undefined>()
	const [active, setActive] = useState<boolean>(false)

	const handleModal = (item: JobVacancy): void => {
		setActive(true)
		setCurr(item)
	}
	useEffect(() => {
		if (active) {
			document.documentElement.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = ''
		}
	}, [active])

	return (
		<div className='min-h-screen md:pt-24 px-2 sm:px-4 flex items-center justify-center gap-10 flex-col md:flex-row bg-slate-50'>
			<div className='w-full md:w-80 md:sticky top-20 transition-all duration-500 self-start'>
				<ProfileCard />
			</div>
			<div className='w-full max-w-2xl flex flex-col gap-3'>
				{/* <h6 className='text-sm text-slate-600'>All Results</h6> */}
				{feed.map((item, index) => (
					<div key={item.OrgName} onClick={() => handleModal(item)}>
						<FeedCard item={item} />
					</div>
				))}
			</div>
			<div className='self-start'>
				{' '}
				<FilterCard />
			</div>
			<FeedModal curr={curr} active={active} setActive={setActive} />
		</div>
	)
}

export default Page
