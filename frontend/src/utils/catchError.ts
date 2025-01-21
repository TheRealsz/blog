import { AxiosError } from "axios";
import { removeTokenFromStorage } from "./tokenStorage";
import toast from "react-hot-toast";

export const catchError = (e: any, defaultErrorMessage: string) => {
    console.error(e)
    const error = e as AxiosError
    if (error.response) {
        const serverError = error.response.data as AxiosError;
        const message = serverError.message;
        if (error.response.status === 401) {
            removeTokenFromStorage()
            if (window.location.pathname === "/signin") return
            setTimeout(() => {
                window.location.href = "/signin"
            }, 1000)
        }
        return toast.error(message || defaultErrorMessage)
    }
}