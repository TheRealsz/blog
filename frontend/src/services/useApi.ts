import axios from 'axios';
import { getTokenFromStorage } from '../utils/tokenStorage';


const api = () => {
    const token = getTokenFromStorage();
    console.log('token', token);
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            Authorization: 'Bearer ' + token
        }   
    });
}

export default api();