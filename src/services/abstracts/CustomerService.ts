import { AddCustomerRequest } from '../../models/customer/requests/addCustomerRequest';
import { UpdateCustomerRequest } from '../../models/customer/requests/updateCustomerRequest';
import { AddCustomerResponse } from '../../models/customer/responses/addCustomerResponse';
import { GetByIdCustomerResponse } from '../../models/customer/responses/getByIdCustomerResponse';
import { UpdateCustomerResponse } from '../../models/customer/responses/updateCustomerResponse';
import { GetAllCustomerResponse } from './../../models/customer/responses/getAllCustomerResponse';
import { BaseService } from "./baseService";

class CustomerService extends BaseService<
GetAllCustomerResponse,
GetByIdCustomerResponse,
AddCustomerRequest,
AddCustomerResponse,
UpdateCustomerRequest,
UpdateCustomerResponse
>{
    constructor(){
		super();
		this.apiUrl = "customers";
	}
}
export default new CustomerService();