import { createSlice } from '@reduxjs/toolkit'
import { userGetProfile, userPutProfile } from './profile.actions'
import { logout } from '../auth/auth.slice'

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        loading: false,
        userInfo: null,
        error: null,
        success: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // userGetProfile
            .addCase(userGetProfile.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userGetProfile.fulfilled, (state, action) => {
                state.loading = false
                state.userInfo = action.payload
            })
            .addCase(userGetProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // userPutProfile
            .addCase(userPutProfile.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userPutProfile.fulfilled, (state, action) => {
                state.loading = false
                state.userInfo = action.payload
            })
            .addCase(userPutProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // logout
            .addCase(logout, (state) => {
                state.userInfo = null
            })
    }
})

export default profileSlice.reducer
