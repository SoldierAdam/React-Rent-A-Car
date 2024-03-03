import { local } from 'd3';
import axiosInstance from '../../core/utils/interceptors/axiosInterceptors';
import { AddCarRequest } from '../../models/cars/requests/addCarRequest';
import { UpdateCarRequest } from '../../models/cars/requests/updateCarRequest';
import { AddCarResponse } from '../../models/cars/responses/addCarResponse';
import { GetAllCarResponse } from '../../models/cars/responses/getAllCarResponse';
import { GetByIdCarResponse } from '../../models/cars/responses/getByIdCarResponse';
import { UpdateCarResponse } from '../../models/cars/responses/updateCarResponse';
import { BaseService } from './baseService';
import { setCar } from '../../store/car/carSlice';
import { toast } from 'react-toastify';


class CarService extends BaseService<
	GetAllCarResponse,
	GetByIdCarResponse,
	AddCarRequest,
	AddCarResponse,
	UpdateCarRequest,
	UpdateCarResponse
>{
	constructor(){
		super();
		this.apiUrl = "cars";
	}
	getByPlateOrName(plate: string): Promise<GetByIdCarResponse> {
		return axiosInstance.get<GetByIdCarResponse>(this.apiUrl + "/getByPlate?plate=" + plate)
		.then(response => {
			localStorage.removeItem('car');
			localStorage.setItem('car', JSON.stringify(response.data));
			toast.success("Car found");
			return response.data;
		})
	}

	deleteByPlate(plate: string): Promise<any> {
		return axiosInstance.delete(this.apiUrl + "/deleteByPlate?plate=" + plate)
		.then(response => {
			toast.success("Car deleted");
			return response.data;
		})
	}
}

export default new CarService();