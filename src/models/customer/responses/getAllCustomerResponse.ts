type Customer = {
	firstName: string;
	lastName: string;
	identityNumber: string;
	birthDate: string;
	city: string;
	address: string;
	email: string;
	drivingLicenseDate: string;
	postalCode: string;
	phoneNumber: string;
	username: string;
}

export interface GetAllCustomerResponse {
	data: Customer[];
}