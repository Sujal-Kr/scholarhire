'use client'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

const Page = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

	const navigate=useRouter()
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Keep only the last digit entered
    setOtp(newOtp);

    // Move focus to the next input if the current one has a value
    if (value && index < otp.length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleClick = (index: number) => {
    if (inputRef.current[index]) {
      inputRef.current[index]?.select();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if all OTP fields are filled
    if (otp.includes("")) {
      alert("Please fill in all the OTP fields.");
      return;
    }

    // Proceed with OTP submission logic
    console.log("OTP submitted:", otp.join(""));
		navigate.push('/login')

  };

  return (
    <div className='h-full min-h-dvh flex justify-center items-center px-4 bg-pattern'>
      <div className='text-center bg-white p-12 shadow-xl rounded-2xl'>
        <h4 className='text-xl'>Check your mail</h4>
        <h6>We've sent the code to your mail</h6>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center gap-3 my-10'>
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"  
                onChange={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                value={value}
                inputMode="numeric"  
                className='p-2 border rounded-lg w-10 text-center'
              />
            ))}
          </div>
          <div className='flex justify-between text-xs md:text-base'>
            <button className='px-4 py-2 border rounded-xl' type='button'>
              Resend
            </button>
            <button className='px-4 py-2 border rounded-xl bg-black text-white' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
