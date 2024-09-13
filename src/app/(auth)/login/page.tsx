'use client'
import React, { useContext, useEffect, useState } from 'react'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Link from 'next/link'
import { LoginSchema } from '@/schema/LoginSchema'
import { z } from 'zod'
import { fromZodError } from 'zod-validation-error';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { UserContext } from '@/context/user.context';


const Page = () => {
    const { setUser } = useContext(UserContext)
    const router = useRouter()
    const [mounted, setMounted] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [type, setType] = useState<string>('password')

    useEffect(() => {
        setMounted(true)
    })

    if (!mounted) {
        return null
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data: z.infer<typeof LoginSchema> = {
            email: formData.get('email') as string || '',
            password: formData.get('password') as string || '',
        };
        const result = LoginSchema.safeParse(data)
        if (!result.success) {
            const { message } = fromZodError(result.error).details[0]
            setError(message)
            setTimeout(() => setError(''), 10000)
        } else {
            try {
                const response = axios.post('/api/login', data)
                const result = await response;
                console.log(result.data)
                toast.promise(response,{
                    success: (res) => `${res.data.user.name.split(" ")[0]}, Welcome to Schoolarhire.`,
                    loading: "Please Wait While we Check Your Details..",
                    error: (err)=> err.message
                    
                })
                if (result.status === 200) {
                    router.push('/profile')
                    setUser(result.data.user)
                    localStorage.setItem('user', JSON.stringify(result.data.user))
                }
            } catch (err: any) {
                toast.error("Wrong Credentials ")
            }
        }
    }
    const handleToggle = (): void => {
        if (type === "password") {
            setType("text")
        } else {
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
                        <input type="email" name='email' className='text-sm w-full rounded-md max-w-md   outline-none' />
                    </div>
                    <div className='border-b-2 border-black px-3 py-1  relative '>
                        <div className={`absolute right-0 bottom-1 text-2xl`} onClick={handleToggle}>
                            {
                                type === "password" ? <VscEye /> : <VscEyeClosed />
                            }
                        </div>
                        <label className='text-xs' htmlFor="name">Password</label>
                        <input type={type} name='password' className='text-sm w-full rounded-md max-w-md   outline-none' />
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
