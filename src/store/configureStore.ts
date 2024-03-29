import { Invoice } from './payment/paymentSlice';
import { combineReducers, configureStore,ThunkAction,Action } from "@reduxjs/toolkit";
import carReducer from "./car/carSlice";
import rentReducer from "./rentNow/rentSlice";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices/loadingSlice";
import forgetPasswordReducer from "./slices/forgetPasswordSlice"
import resetPasswordReducer from "./slices/resetPasswordSlice";
import {invoiceReducer} from "./payment/paymentSlice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

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

