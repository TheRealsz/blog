import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface AuthGuardProps {
    isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
    const navigate = useNavigate()
    const { signIn } = useAuth()
    const token = localStorage.getItem('token')

    if ((!token && !signIn) && isPrivate) {
        navigate('/signin')
        return 
    }

    if ((token && signIn) && !isPrivate) {
        navigate('/')
        return
    }

    return <Outlet />
}
