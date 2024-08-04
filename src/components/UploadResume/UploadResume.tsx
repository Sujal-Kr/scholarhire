'use client'
import React, { useState } from 'react'

const UploadResume = () => {
  const [file,setFile]=useState<File|null>(null)

  return (
    <div className='rounded-md shadow p-4 md:p-8'>
      <h4 className='font-semibold mb-2'>Resume</h4>
      <div className='border-dashed border rounded-md border-slate-300 flex flex-col gap-2 items-center justify-center h-40 px-2'>
      <label htmlFor="resume" className='border-2 cursor-pointer border-blue-700 px-8 py-2 text-xs rounded text-blue-700'>
        <input type="file" id='resume' hidden  />
        Upload Resume
      </label>
        <p className='text-xs text-slate-500 text-center'>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
      </div>
    </div>
  )
}

export default UploadResume
