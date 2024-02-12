import { createSlice } from "@reduxjs/toolkit";

interface RentCustomerInfo {
	firstName: string;
	lastName: string;
	tcNumber: string;
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
	tcNumber: "",
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
		setCustomerInfo: (state, action) => {
			return action.payload;
		},
	},
});

export const { setCustomerInfo } = rentInfoSlice.actions;
export default rentInfoSlice.reducer;