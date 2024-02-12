import axios from 'axios';
import tokenService from '../../../services/abstracts/tokenService';
import { store } from '../../../store/configureStore'
import { decreaseRequestCount, increaseRequestCount } from '../../../store/slices/loadingSlice';
import { isTokenExpired, refreshToken } from '../../../services/abstracts/authService';

const axiosInstance =  axios.create({
	baseURL: "http://localhost:8080/api",
});

// axiosInstance.interceptors.request.use(config => {
// 	//  let token = tokenService.getToken();
// 	// if (token) config.headers.Authorization = `Bearer ${token}`;

// 	return config;
// });


// Interceptor
axiosInstance.interceptors.request.use(
	async (config) => {
	// console.log('Request sent', config);
	//   console.log('Request Interceptor!!!!!!!');
	store.dispatch(increaseRequestCount());
	  let accessToken = tokenService.getToken();
	  if (accessToken && isTokenExpired(accessToken)) {
		// Token süresi dolmuş, yenileme işlemi başlat
		console.log('Token süresi dolmuş, yenileme işlemi başlat');
		const refreshTokenStr = tokenService.getRefreshToken();
		if (refreshTokenStr) {
		  await refreshToken();
		  // Yeni access token ile config'i güncelle
		  accessToken = localStorage.getItem('accessToken');
		  console.log('Yeni access token alındı:', accessToken);
		  if (config.headers && accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
		  }
		}
	  } else if (config.headers && accessToken) {
		// Token süresi dolmamış, mevcut access token ile devam et
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	  }
	  return config;
	},
	(error) => {
	  return Promise.reject(error);
	}
  );

axiosInstance.interceptors.response.use(
	response => {
		store.dispatch(decreaseRequestCount());
		return response;
	},
	error => {
		store.dispatch(decreaseRequestCount());
	},
);

export default axiosInstance;

