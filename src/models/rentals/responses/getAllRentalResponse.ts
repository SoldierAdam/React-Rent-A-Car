type Rental = {
	id: number;
	startDate: Date;
	endDate: Date;
	returnDate: Date;
	startKilometer: number;
	endKilometer: number;
	carId: number;
	username: string;
}

export interface GetAllRentalResponse {
	data: Rental[];
};