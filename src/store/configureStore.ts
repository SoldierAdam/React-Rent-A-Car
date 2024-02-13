import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carReducer from "./car/carSlice";
import rentReducer from "./rentNow/rentSlice";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices/loadingSlice";


const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
	car: carReducer,
	rent: rentReducer,
});

export const store = configureStore({reducer: rootReducer});