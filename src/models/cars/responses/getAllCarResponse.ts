import { Color, Model } from "../../model";


export interface GetAllCarResponse {
		id: number;
		kilometer: number;
		plate: string;
		modelYear: number;
		dailyPrice: number;
		depositPrice: number;
		minFindeksRate: number;
		transmissionType: string;
		fuelType: string;
		airbag: boolean;
		drivingLicenseAge: number;
		minCustomerAge: number;
		seatCapacity: number;
		imagePath: string;
		location:string;
		model: Model;
		color: Color;
}