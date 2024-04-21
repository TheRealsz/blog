import axios, { AxiosInstance } from 'axios';
import { getTokenFromStorage } from '../utils/tokenStorage';


const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
    const token = getTokenFromStorage()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

export default api