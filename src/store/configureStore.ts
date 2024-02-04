import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loading/loadingSlice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
});

export const store = configureStore({reducer: rootReducer});