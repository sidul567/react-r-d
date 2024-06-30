import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: 1,
}

export const cachingState = createSlice({
    name: "cachings",
    initialState,
    reducers: {
        setId: (state, action)=>{
            state.id = action.payload;
        }
    }
})

export const {setId} = cachingState.actions;
export default cachingState.reducer; 