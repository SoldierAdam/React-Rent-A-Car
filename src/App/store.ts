import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/user/userSlice"

export default configureStore({
	reducer: {
		user: userReducer,
	},
});
