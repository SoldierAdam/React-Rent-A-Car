import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	userName: string | null;
	isAuthenticated: boolean;
}

const initialState: UserState = {
	userName: null,
	isAuthenticated: false,
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