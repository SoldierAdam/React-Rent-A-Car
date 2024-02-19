import { createSlice } from "@reduxjs/toolkit";

export interface RentCustomerInfo {
	firstName: string;
	lastName: string;
	identityNumber: string;
	birthDate: string;
	phoneNumber: string;
	email: string;
	address: string;
	city: string;
	zipCode: string;
}

const initialState: RentCustomerInfo = {
	firstName: "",
	lastName: "",
	identityNumber: "",
	birthDate: "",
	phoneNumber: "",
	email: "",
	address: "",
	city: "",
	zipCode: "",
};

const rentInfoSlice = createSlice({
	name: "rentInfo",
	initialState: initialState,
	reducers: {
		setCustomerInfo: (state, action) => action.payload,
	},
});

export const { setCustomerInfo } = rentInfoSlice.actions;
export default rentInfoSlice.reducer;