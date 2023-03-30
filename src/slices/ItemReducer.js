import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: 0,
}


export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    add: (state) => {
      state.item += 1
    },
    remove: (state) => {
    state.item -= 1
    },
    removeAll: (state) => {
      state.item = 0
    },
  }
    
})

// Action creators are generated for each case reducer function
export const { add, remove, removeAll } = itemSlice.actions

export default itemSlice.reducer
