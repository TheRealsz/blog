import { Outlet, useNavigate } from "react-router-dom";
import { getTokenFromStorage } from "../utils/tokenStorage";
import { useEffect } from "react"

interface IAuthGuard {
    isPrivate: boolean;
}

const AuthGuard = ({isPrivate} : IAuthGuard) => {
    const token = getTokenFromStorage()
    const navigate = useNavigate()
    
    useEffect(() => {
        
        if(!token && isPrivate) {
            navigate("/")
            return
        }
    
        if (token && !isPrivate) {
            navigate("/feed")
            return
        }
    }, [token])
    
    return <Outlet />

}

export default AuthGuard