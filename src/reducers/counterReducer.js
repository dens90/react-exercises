import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    count: 0
}

export const counterState = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => state + action.payload,
        decrement: (state, action) => state - action.payload,
        reset: (state, action) => 0
    }
})

export const {increment} = counterState.actions
export const {decrement} = counterState.actions
export const {reset} = counterState.actions
export const stateCounter = (state) => state.counter
export default counterState.reducer