'use client'

import { ProfileType } from '@/model/profile.model'
import {UserSchemaType} from '@/types/userSchema.types'

import React, {ReactNode, useState, useEffect} from 'react'

interface UserContextType {
	user: Partial<UserSchemaType | null>
	setUser: React.Dispatch<
		React.SetStateAction<Partial<UserSchemaType | null>>
	>
}

export const UserContext = React.createContext<any>(null)

function UserProvider({children}: {children?: ReactNode}) {
	const [user, setUser] = useState<Partial<UserSchemaType> | null>(null)
	const [profile, setProfile] = useState<ProfileType>()
	
	const fetchProfile = async () => {
		const res = await fetch('/api/profile')
		const data = await res.json()
		setProfile(data)
		return data;
	}

	const store = {
		user,
		profile,
		setUser,
		setProfile,
		fetchProfile
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
