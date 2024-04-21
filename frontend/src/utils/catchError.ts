import { AxiosError } from "axios";
import { removeTokenFromStorage } from "./tokenStorage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const catchError = (e: any, defaultErrorMessage: string) => {
    const error = e as AxiosError
    if (error.response) {
        const serverError = error.response.data as AxiosError;
        const message = serverError.message;
        if (error.response.status === 401) {
            removeTokenFromStorage()
            setTimeout(() => {
                const navigate = useNavigate()
                navigate('/signin')
            }, 1000)
        }
        return toast.error(message || defaultErrorMessage, {
            style: {
                background: '#333',
                color: '#fff',
            },
        })
    }
}