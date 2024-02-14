import axios, { AxiosError } from "axios";

export interface LoginResponse {
	success: boolean;
	message: string;
}
export interface SignUpResponse {
	success: boolean;
	message: string;
}

class UserService {
	static async loginUser(userName: string, password: string): Promise<{ token: string }> {
		try {
		  const response = await axios.post("http://localhost:8080/api/auth/login", {
			userName, password
		  });
		  console.log('Başarılı Yanıt:', response.data);
		  // Token veya başka bir değeri döndürün
		  return response.data; // Örneğin, JWT token
		} catch (error) {
			const axiosError = error as AxiosError;
		  console.error('Hata:', axiosError.response ? axiosError.response.data : axiosError);
		  throw axiosError; // Hata durumunda hata fırlat
		}
	  }
  
	static async signUp(email: string, password: string, username: string): Promise<SignUpResponse> {
	  try {
		axios.defaults.headers.post["Access-Control-Allow-Origin"]="*";
		const response = await axios.post("http://localhost:8080/api/auth/signUp", {
		  email, password, username
		});
		return response.data;
	  } catch (error) {
		const axiosError = error as AxiosError;
		console.error('Error during signUp', axiosError.response?.data || axiosError.message);
		throw axiosError;
	  }
	}
  }
  
  export default UserService;