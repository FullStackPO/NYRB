import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../src/features/auth/auth.slice' 
import blogReducer from '../src/features/blog/blog.slice'

export const store = configureStore({
    reducer : {
        auth : authReducer,
        blog : blogReducer
    }
})