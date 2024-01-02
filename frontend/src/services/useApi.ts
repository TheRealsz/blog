import axios from 'axios';
import { getTokenFromStorage } from '../utils/tokenStorage';

const token = getTokenFromStorage()

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: 'Bearer ' + token
    }   
});

export default api;