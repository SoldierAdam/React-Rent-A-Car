import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import tokenService from '../../services/abstracts/tokenService';
import * as jwtDecode from 'jwt-decode';
import { local } from 'd3-selection';

interface UserState {
	userName: string | null;
	isAuthenticated: boolean;
}

const initialState: UserState = {
  userName: localStorage.getItem('userName') || null,
  isAuthenticated: tokenService.getToken ? true : false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state: any, action: PayloadAction<string>) => {
			state.userName = action.payload;
			state.isAuthenticated = true;
		},
		logout: (state : any) =>
		{
			state.userName = null;
			state.isAuthenticated = false;
		},
	},
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;