import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carReducer from "./car/carSlice";
import rentReducer from "./rentNow/rentSlice";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices/loadingSlice";
import forgetPasswordReducer from "./slices/forgetPasswordSlice"
import resetPasswordReducer from "./slices/resetPasswordSlice";


const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
	car: carReducer,
	rent: rentReducer,
	forgetPassword: forgetPasswordReducer,
	resetPassword: resetPasswordReducer,
});

export const store = configureStore({reducer: rootReducer});

