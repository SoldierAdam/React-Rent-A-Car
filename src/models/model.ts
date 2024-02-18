export type Car = {
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
};

export type Model = {
	id: number;
	name: string;
	brand: Brand;
};

export type Brand = {
	id: number;
	name: string;
	logoPath: string;
};

export type Color = {
	id: number;
	name: string;
};