import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface PasswordState{
    password: string;
}

const initialState: PasswordState = {
    password : "",
}

export const resetPasswordSlice = createSlice({
    name: "resetPassword",
    initialState: initialState,
    reducers: {
        resetPassword:(state:any, action:PayloadAction<string>)=> {
            state.password = action.payload;
        }
    }
});

export const {resetPassword} = resetPasswordSlice.actions;

export default  resetPasswordSlice.reducer;

export const selectPassword = (state: {resetPassword:PasswordState}) => state.resetPassword.password;