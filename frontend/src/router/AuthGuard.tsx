import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface AuthGuardProps {
    isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
    const { signIn } = useAuth()
    const token = localStorage.getItem('token')

    if ((!token && !signIn) && isPrivate) {
        return <Navigate to="/signin" replace />
    }

    if ((token && signIn) && !isPrivate) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}
