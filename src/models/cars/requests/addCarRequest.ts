import { Model, Color } from "../../model";

export interface AddCarRequest {
	id: number;
	kilometer: number;
	plate: string;
	modelYear: number;
	dailyPrice: number;
	minFindeksRate: number;
	transmissionType: string;
	fuelType: string;
	airbag: boolean;
	drivingLicenseAge: number;
	minCustomerAge: number;
	seatCapacity: number;
	imagePath: string;
	location: string;
	depositPrice: number;
	model: Model;
	color: Color;
}