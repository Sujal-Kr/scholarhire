import React, { useState } from 'react';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Education = () => {
  const [active, setActive] = useState<boolean>(false);
  const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);
  const [educations, setEducations] = useState<Array<{ school: string, degree: string, year: string }>>([
    { school: 'XYZ High School', degree: 'High School Diploma', year: '2015' },
    { school: 'ABC University', degree: 'BSc Computer Science', year: '2019' },
    { school: 'DEF University', degree: 'MSc Computer Science', year: '2022' }
  ]);

  const [formData, setFormData] = useState({ school: '', degree: '', year: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (currentEditIndex !== null) {
      const updatedEducations = educations.map((edu, index) => (
        index === currentEditIndex ? formData : edu
      ));
      setEducations(updatedEducations);
    } else {
      setEducations([...educations, formData]);
    }
    setFormData({ school: '', degree: '', year: '' });
    setActive(false);
    setCurrentEditIndex(null);
  };

  const handleEdit = (index: number) => {
    setFormData(educations[index]);
    setCurrentEditIndex(index);
    setActive(true);
  };

  const handleDelete = (index: number) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
  };

  return (
    <div className='bg-white rounded-md shadow p-4 md:p-8 flex flex-col gap-3'>
      <div className='flex items-center gap-3'>
        <h3 className='font-semibold'>Education</h3>
        <MdOutlineEdit onClick={() => setActive(true)} className='cursor-pointer' />
      </div>
      <div className='flex flex-col gap-3'>
        {educations.map((education, index) => (
          <div key={index} className={`flex items-center justify-between md:border-none py-2 ${index!=educations.length-1?"border-b  ":""}`}>
            <div className='text-sm md:text-base'>
              <p className='text-slate-700 font-semibold'>{education.school}</p>
              <p className='text-slate-500'>{education.degree}</p>
              <p className='text-slate-400'>{education.year}</p>
            </div>
            
            <div className='flex items-center gap-2'>
              <MdOutlineEdit onClick={() => handleEdit(index)} className='cursor-pointer' />
              <MdDelete onClick={() => handleDelete(index)} className='cursor-pointer' />
            </div>
            
          </div>
        ))}
      </div>

      <div
        className={`${active ? 'flex' : 'hidden'} fixed left-0 top-0 h-full w-full z-10 min-h-screen bg-slate-800/60 items-center justify-center`}
      >
        <div className='bg-white rounded-md p-4 md:p-8 w-full max-w-2xl h-full md:h-fit'>
          <div className='flex items-center gap-3'>
            <IoMdArrowRoundBack className='block md:hidden text-2xl cursor-pointer' onClick={() => setActive(false)} />
            <h3>{currentEditIndex !== null ? 'Edit Education' : 'Add Education'}</h3>
          </div>
          <p className='text-xs md:text-sm my-4 text-slate-500'>
            {currentEditIndex !== null ? 'Edit your education details below.' : 'Details like course, university, and more, help recruiters identify your educational background'}
          </p>
          <div className='flex flex-col gap-4 '>
            <input
              name='school'
              value={formData.school}
              onChange={handleInputChange}
              placeholder='School'
              className='text-xs w-full outline-none border rounded p-3'
            />
            <input
              name='degree'
              value={formData.degree}
              onChange={handleInputChange}
              placeholder='Degree'
              className='text-xs w-full outline-none border rounded p-3'
            />
            <input
              name='year'
              value={formData.year}
              onChange={handleInputChange}
              placeholder='Year'
              className='text-xs w-full outline-none border rounded p-3'
            />
          </div>
          <div className='flex justify-end gap-4 mt-4 text-xs'>
            <button className='py-3 px-8 hidden md:block' onClick={() => setActive(false)}>Cancel</button>
            <button className='w-full md:w-fit py-3 px-8 text-white bg-black rounded' onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
