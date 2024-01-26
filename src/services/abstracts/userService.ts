
import axios from "axios";

export interface LoginResponse{
	success : boolean;
	message : string;
}
export interface SignUpResponse{
	success : boolean;
	message : string;
}

class UserService {
	static async loginUser(email: string, password: string): Promise<LoginResponse>{
		try {
			const response = await axios.post("http://localhost:8080/api/users/login", {email, password});
			return response.data.data;
		} catch (error) {
			console.log('Error during login', error);
			throw error;
		}
	}
	static async signUp(email: string, password: string,role: string[]):Promise<SignUpResponse> {
		try {
			const response = await axios.post("http://localhost:8080/api/users/signUp", {email, password,role});
			return response.data;
		} catch (error) {
			console.log('Error during signUp', error);
			throw error;
		}
	}
}

export default UserService;