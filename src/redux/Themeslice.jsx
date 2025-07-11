import { createSlice } from "@reduxjs/toolkit";
export const themeslice=createSlice({
    name:'theme',
    initialState:{
        value:JSON.parse(localStorage.getItem('current_theme')) || "light"
    },
    reducers:{
        darkmode:(state,action)=>{
            state.value = action.payload
            localStorage.setItem('current_theme',JSON.stringify(action.payload))
        }
    }
})

export const {darkmode}=themeslice.actions
export default themeslice.reducer