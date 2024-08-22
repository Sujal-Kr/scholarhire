'use client'
import {User} from '@/types/user' // Adjust the path as necessary
import React, {ReactNode, useState, useEffect} from 'react'

interface UserContextType {
	user: User | null
	setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = React.createContext<any>(null)

function UserProvider({children}: {children?: ReactNode}) {
	const [user, setUser] = useState<User | null>(null)

	const store = {
		user,
		setUser,
	}

	useEffect(() => {
		const data = localStorage.getItem('user')
		if (data) {
			setUser(JSON.parse(data) as User)
		} else {
			setUser(null)
		}
	}, [])

	return <UserContext.Provider value={store}>{children}</UserContext.Provider>
}

export default UserProvider
