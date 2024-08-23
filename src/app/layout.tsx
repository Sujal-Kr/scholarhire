import type {Metadata} from 'next'
import {Roboto_Mono} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import UserProvider from '@/context/user.context'
import  {Toaster} from 'sonner'

const roboto = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Scholar Hire',
	description: 'Hire teachers with ease',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<UserProvider>
					<Toaster richColors={true} position='top-right' closeButton={true} />
					<Navbar />
					{children}
				</UserProvider>
			</body>
		</html>
	)
}
