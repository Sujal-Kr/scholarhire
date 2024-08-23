'use client'

import {UserSchemaType} from '@/types/userSchema.types'

import React, {ReactNode, useState, useEffect} from 'react'

interface UserContextType {
	user: Partial<UserSchemaType | null>
	setUser: React.Dispatch<
		React.SetStateAction<Partial<UserSchemaType | null>>
	>
}

export const UserContext = React.createContext<UserContextType | null>(null)

function UserProvider({children}: {children?: ReactNode}) {
	const [user, setUser] = useState<Partial<UserSchemaType> | null>(null)

	const store = {
		user,
		setUser,
	}

	useEffect(() => {
		const data = localStorage.getItem('user')
		if (data) {
			setUser(JSON.parse(data))
		} else {
			setUser(null)
		}
	}, [])

	return <UserContext.Provider value={store}>{children}</UserContext.Provider>
}

export default UserProvider
