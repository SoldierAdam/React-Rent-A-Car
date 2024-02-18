import { AddBrandRequest } from "../../models/brands/requests/addBrandRequest";
import { UpdateBrandRequest } from "../../models/brands/requests/updateBrandRequest";
import { AddBrandResponse } from "../../models/brands/responses/addBrandResponse";
import { GetAllBrandResponse } from "../../models/brands/responses/getAllBrandResponse";
import { GetByIdBrandResponse } from "../../models/brands/responses/getByIdBrandResponse";
import { UpdateBrandResponse } from "../../models/brands/responses/updateBrandResponse";
import { BaseService } from "./baseService";

class BrandService extends BaseService<
GetAllBrandResponse,
GetByIdBrandResponse,
AddBrandRequest,
AddBrandResponse,
UpdateBrandRequest,
UpdateBrandResponse
>{
    constructor(){
		super();
		this.apiUrl = "brands";
	}
}

export default new BrandService();
