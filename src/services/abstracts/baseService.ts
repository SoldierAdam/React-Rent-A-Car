import { AxiosResponse } from "axios";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";
import { toast } from "react-toastify";

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
					toast.success("Added successful")
					return response;
				}
				else
				{
					console.error('Model already saved', response);
					toast.error("Already saved")
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
			if (response.status === 200	)
				return response;
			else
			{
				toast.error("Already saved")
				return null;
			}
		})
		.catch(error => {
			console.error('Error', error);
			toast.error("Error")
			return null;
		});
	}
	
	delete(id: number){
		return axiosInstance.delete(this.apiUrl + "/" + id)
		.then(response => {
			if (response.status === 200	)
			{
				console.log('Request successful', response);
				toast.success("Request successful")
				return response;
			}
			else
			{
				console.error('Already saved', response);
				toast.error("Already saved")
				return response;
			}
		})
	}
}