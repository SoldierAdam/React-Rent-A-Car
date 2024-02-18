
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface EmailState{
    email: string ;
}

const initialState: EmailState = {
    email : "",
}
export const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState: initialState,
  reducers: {
    forgetPassword: (state: any, action: PayloadAction<string>) => {
        state.email = action.payload;
    },
  },
});

export const {forgetPassword} = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;

export const selectEmail = (state: { forgetPassword: EmailState }) => state.forgetPassword.email;

