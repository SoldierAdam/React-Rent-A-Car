import {combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"
<<<<<<< HEAD
import loadingReducer  from "./loading/loadingSlice";
=======
import  loadingReducer  from "./loading/loadingSlice";
>>>>>>> 3a418b3b61e2cb683445a09408c89ffc901abb2f

const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
});

export const store = configureStore({reducer: rootReducer});
