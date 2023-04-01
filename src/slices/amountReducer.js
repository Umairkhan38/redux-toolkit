import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  amount: 0,
}

export const fetchUserById = createAsyncThunk(
  'account/getUser',
  async (userId) => {
    const {data} = await axios.get(`http://localhost:5000/accounts/${userId}`) 

    return data.amount;
  }
)


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

  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.amount+=action.payload 
      state.pending=false;
    }).addCase(fetchUserById.pending, (state,action)=>{
            state.pending = true;
    })
    .addCase((fetchUserById.rejected,(state,action)=>{
      state.pending=false
    }))
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = amountSlice.actions

export default amountSlice.reducer

