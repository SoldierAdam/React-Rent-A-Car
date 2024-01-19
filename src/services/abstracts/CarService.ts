import axios from "axios";

class CarService {
	static async getCars(){
		try {
			const response = await axios.get('http://localhost:8080/api/cars/getAll');
			return response.data;
		} catch (error) {
			console.log('Error occurred while fetching data', error);
		}
	}
}

export default CarService;