export type Car = {
	id: number;
	kilometer: number;
	plate: string;
	modelYear: number;
	dailyPrice: number;
	minFindeksRate: number;
	imagePath: string;
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

export type Customer = {
	identityNumber:number;
	firstName: string;
	lastName: string;
	

};