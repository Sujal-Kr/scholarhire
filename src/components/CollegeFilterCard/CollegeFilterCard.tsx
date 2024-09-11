'use client'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const CollegeFilterCard = () => {
    const types = ["College", "University", "High School", "Others"]
    const [category, setCategory] = useState<string[]>([])
    const [location, setLocation] = useState<string[]>([])
    const [locationInput, setLocationInput] = useState<string>("")

    // Handle selection of institution type
    const handleType = (item: string) => {
        setCategory((prev) =>
            prev.includes(item)
                ? prev.filter(type => type !== item)
                : [...prev, item]
        );
    }

    // Handle location input submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (locationInput && !location.includes(locationInput)) {
            setLocation((prev) => [...prev, locationInput])
        }
        setLocationInput("") // Reset input field after submission
    }

    // Handle removing a location
    const handleRemoveLocation = (loc: string) => {
        setLocation((prev) => prev.filter((l) => l !== loc))
    }

    const handleClearFilters= () => {
        setLocationInput("")
        setLocation([])
        setCategory([])
    }

    return (
        <div className='filter-card bg-white sm:bg-transparent shadow px-3 py-8 mt-3 md:p-0 rounded sm:shadow-none '>
            {/* Institution Type Filter */}
            <div>
                <p className='text-sm mb-3 font-semibold'>Institution Type</p>
                <div className=' types flex gap-3 overflow-auto justify-start items-center'>
                    {types.map((item: string, index: number) => (
                        <div 
                            key={index}
                            className={`px-3 py-1 border text-xs rounded-xl cursor-pointer text-nowrap ${category.includes(item)
                                    ? "text-white bg-black"
                                    : "text-black bg-white"
                                }`}
                            onClick={() => handleType(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Location input */}
            <div className='mt-4'>
                <p className='text-sm mb-3 font-semibold'>Location</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
                        placeholder="Enter location"
                        className="border p-3 text-xs md:text-sm rounded-2xl w-full max-w-sm"
                    />
                </form>
                <div className='pt-3 flex gap-3 flex-wrap'>
                    {location.map((loc: string, index: number) => (
                        <div key={index} className='flex items-center text-nowrap bg-white text-xs gap-1 rounded-full px-3 py-1 border'>
                            <p>{loc}</p>
                            <RxCross2 
                                className='cursor-pointer '
                                onClick={() => handleRemoveLocation(loc)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button 
                className=' px-3 py-2 my-3 bg-black text-white rounded text-xs shadow'
                onClick={handleClearFilters}>
                Clear Filter
            </button>
        </div>
    )
}

export default CollegeFilterCard
