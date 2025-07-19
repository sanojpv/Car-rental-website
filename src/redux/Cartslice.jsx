import { createSlice } from "@reduxjs/toolkit";
export const cartslice=createSlice({
    name:'cart',
    initialState:{
        value:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            state.value=[...state.value,action.payload]
        },
        clearcart:(state)=>{
            state.value=[];
        }
    }
})

export const {addtocart,clearcart}=cartslice.actions
export default cartslice.reducer;