import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Scholar Hire | Institution',
}

export default function InstitutionLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
