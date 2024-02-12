import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loading/loadingSlice";
import userReducer from "./user/userSlice";
import carReducer from "./car/carSlice";

const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
	car: carReducer,
});

export const store = configureStore({reducer: rootReducer});