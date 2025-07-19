import {configureStore} from '@reduxjs/toolkit'    
import themeReducer from './Themeslice'
import loginReducer from './Loginslice'
import cartReducer from './Cartslice'
export default configureStore({
 reducer:{
    theme:themeReducer,
    login:loginReducer,
    cart:cartReducer
 }
})