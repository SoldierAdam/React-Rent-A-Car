import axios from 'axios';
import tokenService from '../../../services/abstracts/tokenService';
import { store } from '../../../store/configureStore'
import { decreaseRequestCount, increaseRequestCount } from '../../../store/slices/loadingSlice';
import { isTokenExpired, refreshToken } from '../../../services/abstracts/authService';

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080/api",
});


axiosInstance.interceptors.request.use(async (config) => {
	// store.dispatch(increaseRequestCount());
	const publicPaths = ['/auth/login', '/auth/register', '/auth/refresh-token', '/cars/getAll'];
	if (!publicPaths.includes(config.url)) {
		const accessToken = tokenService.getToken();
		if (accessToken && isTokenExpired(accessToken)) {
			await refreshToken();
			config.headers['Authorization'] = `Bearer ${tokenService.getToken()}`;
		} else if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
		}
	}
	return config;
}, (error) => {
	return Promise.reject(error);
});



axiosInstance.interceptors.response.use(
	response => {
		// store.dispatch(decreaseRequestCount());
		return response;
	},
	error => {
		// store.dispatch(decreaseRequestCount());
	},
);

export default axiosInstance;

