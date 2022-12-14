import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  displayCounter: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.displayCounter = !state.displayCounter;
    },
  },
});

const authState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: authState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});
