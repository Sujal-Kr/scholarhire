'use client'
import React, { useState } from 'react';
import { CircleUserRound } from 'lucide-react';
import { FcGallery } from "react-icons/fc";
import { TfiGallery } from "react-icons/tfi";

const Page = () => {
    const [file, setFile] = useState<File>();
    const [gallery, setGallery] = useState<File[]>([]);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files ? Array.from(e.target.files) : [];
        setGallery(files); // Store the files in state as an array
    };

    return (
        <div className='py-20 px-6 sm:px-10 md:px-20 '>
            <div>
                <h3 className='font-semibold pb-1'>Profile</h3>
                <p className='text-xs sm:text-sm text-slate-600'>
                    This information will be displayed publicly so be careful what you share.
                </p>
            </div>
            <form className='py-5 flex flex-col w-full gap-5 '>
                {/* Profile Picture Upload */}
                <div>
                    <label htmlFor="profile">
                        {file ? (
                            <>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Selected file preview"
                                    className='w-12 h-12 rounded-full object-cover'
                                />
                                <div className='text-xs'>{file?.name}</div> {/* Display file name */}
                            </>
                        ) : (
                            <CircleUserRound color='#d0d0dc' strokeWidth='1px' size="48px" />
                        )}
                        <input
                            type="file"
                            id='profile'
                            hidden
                            onChange={handleFile}
                        />
                    </label>
                </div>

                {/* Institution Name */}
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Name of Institution</label>
                    <input
                        type="text"
                        className='max-w-sm border p-2 text-xs rounded-lg'
                        placeholder='eg: Creane Memorial High School'
                    />
                </div>

                {/* About Section */}
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>About</label>
                    <textarea
                        className='max-w-xl h-20 sm:h-32 resize-none border p-2 text-xs rounded-lg'
                        placeholder='Please write something here...'
                        spellCheck={false}
                    />
                </div>

                {/* Location and Amenities */}
                <div className='grid md:grid-cols-3'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm'>Location</label>
                        <input
                            type="text"
                            className='max-w-sm border p-2 text-xs rounded-lg'
                            placeholder='eg: Wasseypur'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm'>Amenities (comma-separated)</label>
                        <input
                            type="text"
                            className='max-w-sm border p-2 text-xs rounded-lg'
                            placeholder='eg: Wifi, Gym'
                        />
                    </div>
                </div>

                {/* Teaching and Non-Teaching Staff */}
                <div className='grid md:grid-cols-3'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm'>Total Teaching Staff</label>
                        <input
                            type="number"
                            className='max-w-sm border p-2 text-xs rounded-lg'
                            placeholder='eg: 90'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm'>Total Non-Teaching Staff</label>
                        <input
                            type="number"
                            className='max-w-sm border p-2 text-xs rounded-lg'
                            placeholder='eg: 23'
                        />
                    </div>
                </div>

                {/* Gallery Upload */}
                <div className='max-w-lg flex flex-col justify-center gap-2'>
                    <p className='text-sm'>Other Photos</p>
                    {
                        gallery.length === 0 ? (
                            <label htmlFor="gallery" className="flex md:h-32 h-20 rounded-lg border border-dashed flex-col justify-center items-center cursor-pointer">
                                <TfiGallery className='text-4xl' />
                                <p className='text-xs text-slate-400'>Upload multiple images to your gallery...</p>
                                <input
                                    type="file"
                                    id="gallery"
                                    hidden
                                    multiple
                                    onChange={handleGalleryChange}
                                />
                            </label>
                        ) : (
                            <label htmlFor="gallery" className="flex flex-col  cursor-pointer">
                                <FcGallery className='text-4xl' />
                                <p className='text-sm'>{gallery.length} photos uploaded</p>
                                <p className='text-xs text-slate-400'>Click to re-upload photos</p>
                                <input
                                    type="file"
                                    id="gallery"
                                    hidden
                                    multiple
                                    onChange={handleGalleryChange}
                                />
                            </label>
                        )
                    }
                </div>

                {/* Buttons */}
                <div className='flex flex-col md:flex-row justify-end gap-3 border-t pt-4 '>
                    <button className='px-4 py-2 text-sm bg-slate-50 rounded'>Cancel</button>
                    <button type='submit' className='px-4 py-2 text-sm bg-black text-white rounded'>Save</button>
                </div>
            </form>
        </div>
    );
};

export default Page;
