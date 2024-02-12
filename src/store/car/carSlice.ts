import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Car } from "../../models/model";import CarCard from "../../components/CarCard/CarCard";


const initialState: Car = {
	id: 0,
	kilometer: 0,
	plate: "",
	modelYear: 0,
	dailyPrice: 0,
	minFindeksRate: 0,
	imagePath: "",
	model: {
		id: 0,
		name: "",
		brand: {
			id: 0,
			name: "",
			logoPath: "",
		},
	},
	color: {
		id: 0,
		name: "",
	},
};

const carSlice = createSlice({
	name: 'car',
	initialState: JSON.parse(localStorage.getItem('car')),
	reducers: {
		setCar: (state: Car, action: PayloadAction<Car>) => {
			return action.payload;
		},
	},
});

export const { setCar } = carSlice.actions;
export default carSlice.reducer;