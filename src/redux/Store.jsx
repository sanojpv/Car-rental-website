import {configureStore} from '@reduxjs/toolkit'    
import themeReducer from './Themeslice'

export default configureStore({
 reducer:{
    theme:themeReducer
 }
})