import { AxiosError } from "axios";
import { removeTokenFromStorage } from "./tokenStorage";

export const catchError = (e: any) => {
    const error = e as AxiosError
    if (error.response) {
        const serverError = error.response.data as AxiosError;
        const message = serverError.message;
        if (error.response.status === 401) {
            removeTokenFromStorage()
        }
        return message;
    }
}