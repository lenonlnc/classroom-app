'use client'

import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/navigation'

import { recoverUserData, logInRequest } from '@/services/auth'
import { api } from '@/services/api'

export const AuthContext = createContext({})
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const router = useRouter()

    const isAuthenticated = !!user

    useEffect(() => {
        const { token } = parseCookies()

        if (token) {
            recoverUserData().then((response) => setUser(response.user))
        }
    }, [])

    async function logIn(data) {
        try {
            const { token, user } = await logInRequest(data)

            setCookie(undefined, 'token', token, {
                maxAge: 60 * 60 * 1 //1 hora
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            setUser(user)
            router.push('/classes')
        } catch (error) {
            console.log(error)
        }

        if (!token) {
            router.push('/')

            console.log(`Authentication error. ERR: UNAUTHENTICATED`)
        }
    }
    return <AuthContext.Provider value={{ user, isAuthenticated, logIn }}>{children}</AuthContext.Provider>
}
