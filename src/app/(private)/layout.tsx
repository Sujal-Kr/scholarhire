// 'use client'

// import React, { ReactNode, useEffect, useContext, useState } from 'react'
// import { useRouter, redirect } from 'next/navigation'
// import { UserContext } from '@/context/user.context'

// const Layout = ({ children }: { children: ReactNode }) => {
//     const router = useRouter()
//     const { user } = useContext(UserContext)
    
//     useEffect(() => {
        
//         if (!user&&localStorage.getItem('user')) {
//             redirect('/login') 
//         }
//     }, [user, router])

//     return (
//         <div>
//             {user && children} 
//         </div>
//     )
// }

// export default Layout
