import { createSlice } from "@reduxjs/toolkit";


export interface Invoice {
    cardNameSurname:  string;
    cardNumber: string;
    expireDate: string;
    cvv: string;
    totalPrice: string;
    username: string;
   
};

const initialState: Invoice = {
    cardNameSurname: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
    totalPrice: "",
    username: "",
   
  
}
const invoiceSlice = createSlice({
    name : "invoice",
    initialState: initialState,
    reducers: {
        setInvoice: (state,action) => action.payload,
    },
});
export const {setInvoice} = invoiceSlice.actions;
export const invoiceReducer = invoiceSlice.reducer;
