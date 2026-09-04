import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
    name : 'blog',

    initialState : {
        blog : [],
        user : [],
        loading : false,
        error : null,
    },

    reducers : {
        setBlog : (state, action) => {
            state.blog = action.payload
        },
        setLoading : (state, action) => {
            state.loading = action.payload
        },
        setError : (state, action) => {
            state.error = action.payload
        },
        setUser : (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setBlog, setLoading, setError, setUser } = blogSlice.actions
export default blogSlice.reducer