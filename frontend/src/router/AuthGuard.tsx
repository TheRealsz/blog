import { Outlet, useNavigate } from 'react-router-dom'
import { getTokenFromStorage } from '@/utils/tokenStorage'
import { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'

interface AuthGuardProps {
    isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
    const navigate = useNavigate()
    const { signIn } = useAuth()

    useEffect(() => {
        const token = getTokenFromStorage()
        if (isPrivate && !token) {
            return navigate('/signin', { replace: true })
        }
        if (!isPrivate && token) {
            return navigate('/', { replace: true })
        }
    }, [isPrivate, signIn, navigate])

    return <Outlet />
}
