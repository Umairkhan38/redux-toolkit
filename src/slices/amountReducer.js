import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  amount: 0,
}

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 100
    },
    decrement: (state) => {
      state.amount -= 100
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = amountSlice.actions

export default amountSlice.reducer

