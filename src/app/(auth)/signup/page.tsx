'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { SignUpSchema } from '@/schema/SignUpSchema';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import axios from 'axios';

type Signup = z.infer<typeof SignUpSchema>;

const Page = () => {
    const [error, setError] = useState<string>('');
    const [type, setType] = useState<string>('password');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data: Signup = {
            name: formData.get('name') as string || '', 
            email: formData.get('email') as string || '', 
            password: formData.get('password') as string || '', 
        };
        
        const result = SignUpSchema.safeParse(data);
        if (!result.success) {
            const { message } = fromZodError(result.error).details[0];
            setError(message);
            setTimeout(() => setError(''), 10000);
        } else {
          
            try {
                const res = await axios.post('/api/signup', data)// Assuming you're sending data to the API
                
                if (res.data.success) { // Accessing success in res.data
                    console.log(res.data.messsage)
                } else {
                    setError(res.data.message || "Signup failed");
                }
            } catch (err) {
                console.error(err);
                setError("An error occurred during signup");
            }
        }
    };

    const handleToggle = (): void => {
        setType(type === "password" ? "text" : "password");
    };
     
    return (
        <div className={`min-h-screen grid place-items-center px-4 bg-pattern`}>
            <div className="bg-white signup-cont w-full max-w-sm sm:px-8 px-3 py-12 border-2 shadow-custom border-black">
                <h2 className='text-lg'>Welcome to Scholar Hire</h2>
                <p className='text-sm'>Register with us</p>
                <p className='text-xs text-center mt-3 text-red-600'>{error || ""}</p>
                <form  onSubmit={handleSubmit} className='my-6 flex flex-col gap-5'>
                    <div className='border-b-2 border-black px-3 py-1'>
                        <label className='text-xs' htmlFor="name">Full Name</label>
                        <input type="text" name='name' className='text-sm w-full rounded-md max-w-md outline-none' />
                    </div>
                    <div className='border-b-2 border-black px-3 py-1'>
                        <label className='text-xs' htmlFor="name">Email</label>
                        <input type="email" name='email' className='text-sm w-full rounded-md max-w-md outline-none' />
                    </div>
                    <div className='border-b-2 border-black px-3 py-1 relative'>
                        <div className={`absolute right-0 bottom-1 text-2xl`} onClick={handleToggle}>
                            {type === "password" ? <VscEye /> : <VscEyeClosed />}
                        </div>
                        <label className='text-xs' htmlFor="name">Password</label>
                        <input type={type} name='password' className='text-sm w-full rounded-md max-w-md outline-none' />
                    </div>
                    <div className='flex justify-end'>
                        <button type='submit' className='border-2 px-8 text-white bg-black hover:bg-white hover:text-black border-black py-3 text-sm w-full'>Sign Up</button>
                    </div>
                </form>
                <p className='text-xs text-center'>Are you a registered user? <Link href={'/login'} className='font-bold'>Click here</Link></p>
            </div>
        </div>
    );
}

export default Page;
