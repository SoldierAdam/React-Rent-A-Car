import { createSlice } from '@reduxjs/toolkit'

const selectedCarSlice = createSlice({
  name: 'selectedCar',
  initialState: null,
  reducers: {
    selectCar: (state, action) => action.payload,
  }
})

export const { selectCar } = selectedCarSlice.actions

export default selectedCarSlice.reducer