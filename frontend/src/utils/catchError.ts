import { AxiosError } from "axios";

export const catchError = (e: any) => {
    const error = e as AxiosError
    if (error.response) {
        const serverError = error.response.data as AxiosError;
        const message = serverError.message;
        return message;
    }
}