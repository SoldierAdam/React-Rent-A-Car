import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import userReducer from "./slices/userSlice";
import selectedCar from "./slices/carSlice";

const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
	car: selectedCar
});

export const store = configureStore({reducer: rootReducer});