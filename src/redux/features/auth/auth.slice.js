import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './auth.actions'
import { getToken, removeToken } from '../../../services/storage'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        userToken: getToken(),
        error: null,
        success: false
    },
    reducers: {
        logout: (state) => {
            removeToken()
            state.loading = false
            state.userToken = null
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            // userLogin
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false
                state.userToken = action.payload
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
