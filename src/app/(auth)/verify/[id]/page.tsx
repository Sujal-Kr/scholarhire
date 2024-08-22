'use client'
import axios from 'axios'
import {useRouter} from 'next/navigation'
import React, {
	ChangeEvent,
	KeyboardEvent,
	useEffect,
	useRef,
	useState,
} from 'react'

const Page = ({params}: {params: {id: string}}) => {
	const [otp, setOtp] = useState<string[]>(new Array(4).fill(''))
	const inputRef = useRef<(HTMLInputElement | null)[]>([])
	const navigate = useRouter()

	useEffect(() => {
		// Focus the first input on mount
		if (inputRef.current[0]) {
			inputRef.current[0].focus()
		}
	}, [])

	const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const newOtp = [...otp]
		newOtp[index] = value.substring(value.length - 1)
		setOtp(newOtp)

		if (value && index < otp.length - 1 && inputRef.current[index + 1]) {
			inputRef.current[index + 1]?.focus()
		}
	}

	const handleClick = (index: number) => {
		inputRef.current[index]?.select()
	}

	const handleKeyDown = (
		index: number,
		e: KeyboardEvent<HTMLInputElement>,
	) => {
		if (e.key === 'Backspace' && index > 0 && !otp[index]) {
			inputRef.current[index - 1]?.focus()
		}
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (otp.includes('')) {
			alert('Please fill in all the OTP fields.')
			return
		}

		console.log(params.id, 'params')
		const response = await axios.post(`/api/verify/${params.id}`, {
			otp: parseInt(otp.join('')),
		})
		console.log(response, 'while sending otp')
		// navigate.push('/login')
	}

	const handleResendClick = async() => {
		const response = await axios.post(`/api/resend/${params.id}`)
		
	}

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
								type='text'
								onChange={e => handleChange(index, e)}
								onClick={() => handleClick(index)}
								onKeyDown={e => handleKeyDown(index, e)}
								value={value}
								inputMode='numeric'
								className='p-2 border rounded-lg w-10 text-center'
								ref={el => {
									inputRef.current[index] = el
								}} // Ensure ref assignment here
							/>
						))}
					</div>
					<div className='flex justify-between text-xs md:text-base'>
						<button
							className='px-4 py-2 border rounded-xl'
							onClick={handleResendClick}
							type='button'>
							Resend
						</button>
						<button
							className='px-4 py-2 border rounded-xl bg-black text-white'
							type='submit'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Page
