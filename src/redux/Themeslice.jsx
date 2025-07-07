import { createSlice } from "@reduxjs/toolkit";
export const themeslice=createSlice({
    name:'theme',
    initialState:{
        value:"light"
    },
    reducers:{
        darkmode:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {darkmode}=themeslice.actions
export default themeslice.reducer