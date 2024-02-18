import { Brand } from "../../model";

export interface GetAllModelResponse {
	id: number;
	name: string;
	brand?: Brand;
}

