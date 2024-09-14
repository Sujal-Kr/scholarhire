'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const path=usePathname()
    if (
		['/login', '/signup'].includes(path) ||
		/^\/verify\/.*/.test(path)
	) {
		return null
	}
    return (

        <footer className="flex flex-col gap-2 justify-center sm:flex-row sm:justify-between py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">© 2023 Scholarhire. All rights reserved.</p>
            <nav className="justify-center  flex gap-4 ">
                <Link className="text-xs hover:underline underline-offset-4" href="/">
                    Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="/">
                    Privacy
                </Link>
            </nav>
        </footer>

    )
}

export default Footer
