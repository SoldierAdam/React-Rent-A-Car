import { GetAllModelResponse } from "../../models/models/responses/getAllModelResponse";
import { GetByIdModelResponse } from "../../models/models/responses/getByIdModelResponse";
import { AddModelRequest } from "../../models/models/requests/addModelRequest";
import { AddModelResponse } from "../../models/models/responses/addModelResponse";
import { UpdateModelRequest } from "../../models/models/requests/updateModelRequest";
import { UpdateModelResponse } from "../../models/models/responses/updateModelResponse";
import { BaseService } from "./baseService";
import axiosInstance from '../../core/utils/interceptors/axiosInterceptors';


class ModelService extends BaseService<
	GetAllModelResponse,
	GetByIdModelResponse,
	AddModelRequest,
	AddModelResponse,
	UpdateModelRequest,
	UpdateModelResponse
>{
	constructor(){
		super();
		this.apiUrl = "models";
	}

	getByPlateOrName(name: string): Promise<GetByIdModelResponse> {
		return axiosInstance.get<GetByIdModelResponse>(this.apiUrl + "/getByName?name=" + name)
		.then(response => {
			if (response.status === 200) {
				localStorage.removeItem('model');
				localStorage.setItem('model', JSON.stringify(response.data));
				alert("Model found successfully");
				return response.data;
			}
			else {
				alert("Car not found");
				throw response;
			}
		})
	}
}

export default new ModelService();
