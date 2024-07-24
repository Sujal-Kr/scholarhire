'use client'
import React, { useState } from 'react'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
import { data } from '@/data/feed'
import FeedCard from '@/components/FeedCard/FeedCard'

const Page = () => {
  const [feed, setFeed] = useState(data)

  return (
    <div className="py-12 px-2 sm:px-4 flex gap-10 flex-col md:flex-row bg-noise">
      <div className="w-full md:w-80 sticky top-0 ">
        <ProfileCard />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {feed.map((item, index) => (
          <div key={index}>
            <FeedCard item={item} />
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Page
