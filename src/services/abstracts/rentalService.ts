import { AddRentalRequest } from '../../models/rentals/requests/addRentalRequest';
import { UpdateRentalRequest } from '../../models/rentals/requests/updateRentalRequest';
import { AddRentalResponse } from '../../models/rentals/responses/addRentalResponse';
import { GetAllRentalResponse } from '../../models/rentals/responses/getAllRentalResponse';
import { GetByIdRentalResponse } from '../../models/rentals/responses/getByIdRentalResponse';
import { UpdateRentalResponse } from '../../models/rentals/responses/updateRentalResponse';
import { BaseService } from './baseService';


class RentalService extends BaseService<
	GetAllRentalResponse,
	GetByIdRentalResponse,
	AddRentalRequest,
	AddRentalResponse,
	UpdateRentalRequest,
	UpdateRentalResponse
>{
	constructor(){
		super();
		this.apiUrl = "rentals";
	}

}

export default new RentalService();