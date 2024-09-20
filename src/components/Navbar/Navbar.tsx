'use client'
import React, {useContext, useEffect, useState} from 'react'
import {PiLinkedinLogoThin} from 'react-icons/pi'
import {PiChatsThin} from 'react-icons/pi'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {UserContext} from '@/context/user.context'
import {getCookie} from 'cookies-next'
import axios from 'axios'
import Image from 'next/image'

const Navbar = () => {
	const pathname = usePathname()
	const [loggedIn, setLoggedIn] = useState<boolean>(false)
	const [logginDropdown, setLogginDropdown] = useState<boolean>(false)
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
	const {user, setUser} = useContext(UserContext)

	if (
		['/login', '/signup'].includes(pathname) ||
		/^\/verify\/.*/.test(pathname)
	) {
		return null
	}

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen)
	}

	const handleLogout = async () => {
		setDropdownOpen(false)
		localStorage.removeItem('user')
		setUser(null)
		try {
			await axios.get('/api/logout')
		} catch (err: any) {
			console.log('logout', err.message)
		}
	}

    useEffect(()=>{
        console.log(user,"[Navbar User]")
    },[user])

	return (
		<nav className='fixed bg-white z-10 top-0 left-0 w-full flex justify-between gap-4 items-center p-3'>
			<Link href='/' className='nav-logo flex items-center text-3xl'>
				<PiLinkedinLogoThin className='text-4xl' />
				<span className='text-xs hidden sm:block'>ScholarHire</span>
			</Link>
			<div className='right-cont flex items-center gap-5'>
				<div className='nav-list flex gap-3 text-slate-800'>
					<Link
						className='hover:font-semibold md:underline-offset-8'
						href='/jobs'>
						Jobs
					</Link>
					<Link
						className='hover:font-semibold md:underline-offset-8'
						href='/institution'>
						Institution
					</Link>
				</div>
				<div className='action-btn flex items-center gap-2'>
					{!user ? (
						<div>
							<div
								className='relative cursor-pointer border-2 px-8 md:py-3 py-2 font-semibold text-xs rounded-2xl bg-[#0d1b2a] text-white border-[#0d1b2a]'
								onClick={() =>
									setLogginDropdown(!logginDropdown)
								}>
								Sign Up
							</div>
							{logginDropdown && (
								<div className='bg-slate-700/10 absolute  px-4 py-2 rounded-md w-36 flex flex-col gap-2 right-3 mt-1 shadow-xl'>
									<Link
										href='/signup'
										className='px-1 border-b border-black hover:border-l hover:border-r hover:border-black transition-all '>
										University
									</Link>
									<Link
										href='/signup'
										className='px-1 border-b border-black hover:border-l hover:border-r hover:border-black transition-all '>
										Staff
									</Link>
								</div>
							)}
						</div>
					) : (
						<div className='relative' onClick={toggleDropdown}>
							<div className='h-8 w-8 rounded-full border	flex items-center justify-center text-slate-600 cursor-pointer '>
								<p className=''>
									{getCookie('token')
										? (
												<img
													src={
														user?.imageUrl ||
														'/profile.jpg'
													}
													alt='userImage'
													className='border-2 border-green-400 p-1 h-12 w-12 aspect-square rounded-full'
													loading='lazy'
												/>
										  ) || user?.name?.charAt(0)
										: 'UserName'}
								</p>
							</div>
							{dropdownOpen && (
								<div className='absolute right-0 mt-2 w-fit bg-white rounded-lg shadow-lg'>
									<ul className='p-2 '>
										<li className='px-2 border-b-2 py-4 text-sm'>
											<p>{user?.name || 'user'}</p>
											<p>{user?.email}</p>
										</li>
										<li className=' text-sm p-2 mt-2 rounded-xl flex item text-gray-700 hover:bg-gray-100 cursor-pointer'>
											<Link href={'/profile'}>
												Profile
											</Link>
										</li>
										<li className=' text-sm p-2 rounded-xl flex item text-gray-700 hover:bg-gray-100 cursor-pointer'>
											My Application
										</li>
										<li className=' text-sm p-2 rounded-xl flex item text-gray-700 hover:bg-gray-100 cursor-pointer'>
											My post
										</li>
										<li
											className=' text-sm p-2 rounded-xl mb-2 flex item hover:text-[#f31260] hover:bg-[#f31260]/20 cursor-pointer'
											onClick={handleLogout}>
											Logout
										</li>
									</ul>
								</div>
							)}
						</div>
					)}
					{user && (
						<Link href={'/message'}>
							<PiChatsThin className='text-2xl' />
						</Link>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
