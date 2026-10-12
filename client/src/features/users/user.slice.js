import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'followUser',

    initialState : {
        loading : false,
        error : null,
        user : null
    },

    reducers : {
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

export const { setLoading, setError, setUser } = userSlice.actions
export default userSlice.reducer