import { AxiosResponse } from "axios";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";

export class BaseService<
  GetAllType,
  GetByIdType,
  AddRequestType,
  AddResponseType,
  UpdateRequestType,
  UpdateResponseType,
  > {
	public apiUrl: string;

	constructor() {
		this.apiUrl = "";
	}

	getAll(): Promise<AxiosResponse<GetAllType, any>> {
		return axiosInstance.get<GetAllType>(this.apiUrl + "/getAll")
		.then(response => {
			console.log('Request successful' + this.apiUrl, response);
			return response;
		})
		.catch(error => {
			// Handle error here
			console.error('Request failed', error);
			throw error;
		});
	}

	getById(id: number): Promise<AxiosResponse<GetByIdType, any>> {
		return axiosInstance.get<GetByIdType>(this.apiUrl + "/" + id);
	}

	add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
		return axiosInstance.post<AddResponseType>(this.apiUrl + '/add', request)
			.then(response => {
				if (response.status === 201	)
				{
					console.log('Request successful', response);
					alert("Request successful")
					return response;
				}
				else
				{
					console.error('Model already saved', response);
					alert("Model already saved")
					throw response;
				}
			})
			.catch(error => {
				console.error('Error', error);
				throw error;
			});
	}

	update(request: UpdateRequestType): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axiosInstance.put<UpdateResponseType>(this.apiUrl + '/update', request)
		.then(response => {
			if (response.status === 201	)
			{
				console.log('Request successful', response);
				alert("Request successful")
				return response;
			}
			else
			{
				console.error('Already saved', response);
				alert("Already saved")
				throw response;
			}
		})
		.catch(error => {
			console.error('Error', error);
			throw error;
		});
	}
	
	delete(id: number){
		return axiosInstance.delete(this.apiUrl + "/" + id)
		.then(response => {
			// Handle successful response here
			console.log('Request successful', response);
			alert("Request successful")
			return response;
		})
	}
}