import axios from 'axios';
import { getEnvVariables } from '../utils/helpers';

const { VITE_BASE_URL } = getEnvVariables()

const API = axios.create({
	baseURL: VITE_BASE_URL
});

API.interceptors.request.use( config => {
	
	config.headers = {
		...config.headers,
		'Authorization': localStorage.getItem('token')
	}
	
	return config;
})

export default API;