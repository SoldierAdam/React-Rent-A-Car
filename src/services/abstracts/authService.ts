import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import tokenService from './tokenService';
import { useNavigate } from 'react-router-dom';

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
	const refreshToken = tokenService.getRefreshToken();
	if (!refreshToken) {
	  throw new Error('No refresh token found');
	}
	try {
		const response = await axios.post('http://localhost:8080/api/auth/refreshToken', {}, {
			headers: {
			  'accept': '*/*',
			  'refreshToken': refreshToken
			}
		  });
		  console.log('Token refreshed', response.data);
	  tokenService.setToken(response.data);
	  return response.data.accessToken;
	} catch (error) {
		console.log("Refresh Tokenın süresi bitti", isTokenExpired(tokenService.getToken()));
		tokenService.removeToken();
		tokenService.removeRefreshToken();
		localStorage.removeItem('userName');
	  	console.error('Error during token refresh', error);
		throw error;
	}
};


export { decodeToken, isTokenExpired, refreshToken };
