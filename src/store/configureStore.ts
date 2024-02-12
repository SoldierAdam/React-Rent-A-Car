import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loading/loadingSlice";
import userReducer from "./user/userSlice";
import carReducer from "./car/carSlice";
import rentReducer from "./rentNow/rentSlice";

const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
	car: carReducer,
	rent: rentReducer,
});

export const store = configureStore({reducer: rootReducer});