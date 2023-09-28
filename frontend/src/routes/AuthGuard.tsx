import { Outlet, useNavigate } from "react-router-dom";
import { getTokenFromStorage } from "../utils/tokenStorage";

interface IAuthGuard {
    isPrivate: boolean;
}

const AuthGuard = ({isPrivate} : IAuthGuard) => {
    const token = getTokenFromStorage()
    const navigate = useNavigate()
    
    if(!token && isPrivate) {
        navigate("/")
        return
    }

    if (token && !isPrivate) {
        navigate("/feed")
        return
    }
    
    return <Outlet />

}

export default AuthGuard