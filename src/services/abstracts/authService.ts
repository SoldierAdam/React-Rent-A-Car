import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import tokenService from './tokenService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Token decode eden fonksiyon
const decodeToken = (token: string) => {
	return jwtDecode(token);
};

// Token'ın süresi dolmuş mu diye kontrol eden fonksiyon
const isTokenExpired = (token: string) => {
	const decoded: any = decodeToken(token);
	const currentUnixTimestamp = Math.floor(Date.now() / 1000);
	return decoded.exp < currentUnixTimestamp;
};

// Yeni bir access token almak için refresh token ile istek gönderen fonksiyon
const refreshToken = async () => {
	try {
		console.log('refreshTokendanöncekontrol:', localStorage.getItem('userName'));
		const response = await axios.post(`http://localhost:8080/api/auth/refreshToken?userName=${localStorage.getItem("userName")}`, null, {
			headers: {
				'accept': '*/*'
			}
		});
		console.log('Token refreshed', response.data);
			tokenService.setToken(response.data);
			return response.data.accessToken;
		} catch (error) {
			toast.error('Lütfen tekrar giriş yapınız');
			tokenService.removeToken();
			tokenService.removeRefreshToken();
			localStorage.removeItem('userName');
			console.error('Error during token refresh', error);
			throw error;
		}
	};


	export { decodeToken, isTokenExpired, refreshToken };
