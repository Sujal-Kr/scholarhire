'use client'
import React, { useState } from 'react'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
import { data } from '@/data/feed'
import FeedCard from '@/components/FeedCard/FeedCard'
import FilterCard from '@/components/FilterCard/FilterCard'

const Page = () => {
  const [feed, setFeed] = useState(data)

  return (
    <div className="min-h-screen pt-20 md:pt-32 px-2 sm:px-4 flex gap-10 flex-col md:flex-row bg-slate-50">
      <div className="w-full md:w-80 md:sticky top-32 self-start">
        <ProfileCard />
        <FilterCard />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h6 className='text-sm text-slate-600'>All Results</h6>
        {feed.map((item, index) => (
          <div key={index} >
            <FeedCard item={item} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Page
