import {combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"

import loadingReducer  from "./loading/loadingSlice";




const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
});

export const store = configureStore({reducer: rootReducer});
