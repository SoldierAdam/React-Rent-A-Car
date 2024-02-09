class TokenService {
	getToken(){
		return localStorage.getItem("accessToken");
	}
	setToken(token: string){
		localStorage.setItem("accessToken", token);
	}
	removeToken(){
		localStorage.removeItem("accessToken");
	}
	getRefreshToken(){
		return localStorage.getItem("refreshToken");
	}
	setRefreshToken(token: string){
		localStorage.setItem("refreshToken", token);
	}
	removeRefreshToken(){
		localStorage.removeItem("refreshToken");
	}

}

export default new TokenService();