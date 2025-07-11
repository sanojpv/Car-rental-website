import { createSlice } from "@reduxjs/toolkit";


export const loginslice=createSlice({
    name:'login',
    initialState:{
        value:JSON.parse(localStorage.getItem("logins")) || false
    },
    reducers:{
        isLogin:(state,action)=>{
            state.value = action.payload
            localStorage.setItem('logins',JSON.stringify(action.payload))
    }
}
})


export const {isLogin}=loginslice.actions;
export default loginslice.reducer;
