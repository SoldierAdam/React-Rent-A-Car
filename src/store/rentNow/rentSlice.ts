import { GetByIdCustomerResponse } from './../../models/customer/responses/getByIdCustomerResponse';
import { GetAllCustomerResponse } from './../../models/customer/responses/getAllCustomerResponse';
import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from '../configureStore';


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