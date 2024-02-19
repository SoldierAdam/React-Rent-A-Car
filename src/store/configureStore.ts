import { Invoice } from './payment/paymentSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carReducer from "./car/carSlice";
import rentReducer from "./rentNow/rentSlice";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices/loadingSlice";
import forgetPasswordReducer from "./slices/forgetPasswordSlice"
import resetPasswordReducer from "./slices/resetPasswordSlice";
import {invoiceReducer} from "./payment/paymentSlice";


const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
	car: carReducer,
	rent: rentReducer,
	forgetPassword: forgetPasswordReducer,
	resetPassword: resetPasswordReducer,
	invoice: invoiceReducer,
});

export const store = configureStore({reducer: rootReducer});

