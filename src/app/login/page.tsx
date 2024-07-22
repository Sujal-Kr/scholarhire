'use client'
import React,{useState} from 'react'
import { VscEye ,VscEyeClosed} from "react-icons/vsc";
import Link from 'next/link'
import  {LoginSchema} from '@/schema/LoginSchema'
import {z} from 'zod'
import { fromZodError } from 'zod-validation-error';



const Page = () => {
    const [error,setError]=useState<string>('')
    const [type,setType]=useState<string>('password')
    const handleSubmit= (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const data:z.infer<typeof LoginSchema>= { 
            email: formData.get('email') as string || '', 
            password: formData.get('password') as string || '', 
        };
        const result = LoginSchema.safeParse(data)
        if(!result.success){
            const {path,message}=fromZodError(result.error).details[0]
            setError(path+": "+message)
            setTimeout(() => setError(''),10000)
        }else{

        }
    }
    const handleToggle=():void=>{
        if(type==="password"){
            setType("text")
        }else{
            setType("password")
        }
    }
    
  return (
    <div className='min-h-screen grid place-items-center px-4 bg-pattern '>
        <div className="signup-cont bg-white  w-full max-w-sm sm:px-8 px-3  py-12 border-2 shadow-custom border-black">
            <h2 className='text-xl'>Welome to Scholar Hire</h2>
            <p className='text-sm'>Login and explore new opportunities.</p>
            <p className='text-xs text-center mt-3 text-red-600'>{error}</p>
            <form onSubmit={handleSubmit} className='my-6 flex flex-col gap-5'>
                <div className='border-b-2 border-black px-3 py-1  '>
                    <label className='text-xs' htmlFor="name">Email</label>
                    <input type="email" name='email' className= 'text-sm w-full rounded-md max-w-md   outline-none' />
                </div>
                <div className='border-b-2 border-black px-3 py-1  relative '>
                    <div className={`absolute right-0 bottom-1 text-2xl`} onClick={handleToggle}>
                    {
                        type==="password" ? <VscEye/> : <VscEyeClosed/>
                    }
                    </div>
                    <label className='text-xs' htmlFor="name">Password</label>
                    <input type="password" name='password' className= 'text-sm w-full rounded-md max-w-md   outline-none' />
                </div>
                <div className='flex justify-end'>
                    <button type='submit' className='border-2 px-8 text-white bg-black hover:bg-white hover:text-black border-black py-3 text-xs  w-full'>Login</button>
                </div>
            </form>
            <p className='text-xs text-center'>Are you a new user? <Link href={'/signup'} className='font-bold'>Cick here</Link></p>
        </div>
    </div>
  )
}

export default Page
