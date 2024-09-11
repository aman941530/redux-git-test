import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0,isOpen:false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value ++;
    },
    decrement: (state) => {
      state.value --;
    },
    openModal: (state) => {
      state.isOpen =true;
    },
    closeModal: (state) => {
      state.isOpen =false;
    },
  },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });
export const counterActions = counterSlice.actions;

export  default store;
