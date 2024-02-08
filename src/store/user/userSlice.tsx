import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import tokenService from '../../services/abstracts/tokenService';
import * as jwtDecode from 'jwt-decode';

interface UserState {
	userName: string | null;
	isAuthenticated: boolean;
}

const token = tokenService.getToken(); // Token servisinizden token'ı alın

let decodedToken = null;
if (token) {
  decodedToken = token.split('.')[1];
  console.log(decodedToken);
}
const initialState: UserState = {
  // userName alanını token'dan çıkartın veya token yoksa varsayılan bir değer atayın
  userName: decodedToken?.username || 'Misafir',
  isAuthenticated: !!token, // Token varsa kullanıcı doğrulanmış kabul edilir
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