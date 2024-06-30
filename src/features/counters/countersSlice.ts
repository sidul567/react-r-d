import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        value: 0,
    },
    {
        id: 2,
        value: 0,
    }
]

export const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action)=>{
            const counterIndex = state.findIndex((counter)=>counter.id === action.payload);
            state[counterIndex].value++;
        },
        decrement: (state, action)=>{
            const counterIndex = state.findIndex((counter)=>counter.id === action.payload);
            state[counterIndex].value--;
        }
    }
})

export const {increment, decrement} = countersSlice.actions;
export default countersSlice.reducer;