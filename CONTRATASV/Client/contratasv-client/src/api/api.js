import axios from 'axios';
import { getEnvVariables } from '../utils/helpers';

const { VITE_BASE_URL } = getEnvVariables()

console.log('VITE_BASE_URL ->', VITE_BASE_URL); // <-- LOG TEMPORAL

const API = axios.create({
    baseURL: VITE_BASE_URL
});

API.interceptors.request.use( config => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${token}`
        };
    }

    return config;
})

export default API;