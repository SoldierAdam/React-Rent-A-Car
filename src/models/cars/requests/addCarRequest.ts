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
}