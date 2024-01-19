import axios from "axios";

class UserService {
	static async addUser(){
		try {
			const response = await axios.get("http://localhost:8080/api/users/add");
			return response.data;
		} catch (error) {
			console.log('Error occurred while fetching data', error);
		}
	}
}

export default UserService;