import {configureStore} from '@reduxjs/toolkit'    
import themeReducer from './Themeslice'
import loginReducer from './Loginslice'
export default configureStore({
 reducer:{
    theme:themeReducer,
    login:loginReducer
 }
})