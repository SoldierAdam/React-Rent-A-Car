
import axios from "axios";

export interface LoginResponse{
	success : boolean;
	message : string;
}

class UserService {
	static async loginUser(email: string, password: string): Promise<LoginResponse>{
		try {
			const response = await axios.post("http://localhost:8080/api/users/login", {email, password});
			return response.data;
		} catch (error) {
			console.log('Error during login', error);
			throw error;
		}
	}
}

export default UserService;