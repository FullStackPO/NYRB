import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
    name : 'blog',

    initialState : {
        blog : [],
        loading : false,
        error : null
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
        }
    }
})

export const { setBlog, setLoading, setError } = blogSlice.actions
export default blogSlice.reducer