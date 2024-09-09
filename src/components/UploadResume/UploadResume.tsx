'use client'
import React, { useState } from 'react'
import { AiOutlineFileText, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

const UploadResume = ({resume}:{
  resume:string
}) => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  }

  const handleDelete = () => {
    setFile(null);
  }

  return (
    <div className='rounded-md shadow p-4 md:p-8 bg-white'>
      <h4 className='font-semibold mb-4'>Resume</h4>
      {file ? (
        <div className='flex items-center gap-4'>
          <AiOutlineFileText className='text-3xl text-blue-700' />
          <div className='flex-1'>
            <p className='text-sm text-slate-700'>{file.name}</p>
            <p className='text-xs text-slate-500'>Uploaded successfully</p>
          </div>
          <div className='flex gap-2'>
            <label htmlFor="resume" className='cursor-pointer text-blue-700'>
              <AiOutlineEdit className='text-xl' />
              <input type="file" id='resume' hidden onChange={handleFileChange} />
            </label>
            <button className='text-red-700' onClick={handleDelete}>
              <AiOutlineDelete className='text-xl' />
            </button>
          </div>
        </div>
      ) : (
        <div className='border-dashed border rounded-md border-slate-300 flex flex-col gap-2 items-center justify-center h-40 px-2'>
          <label htmlFor="resume" className='border-2 cursor-pointer border-blue-700 px-8 py-2 text-xs rounded text-blue-700'>
            <input type="file" id='resume' hidden onChange={handleFileChange} />
            Upload Resume
          </label>
          <p className='text-xs text-slate-500 text-center'>Supported Formats: doc, docx, rtf, pdf, up to 2 MB</p>
        </div>
      )}
    </div>
  )
}

export default UploadResume
