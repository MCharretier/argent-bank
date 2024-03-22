import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiService from '../../../services/api'
import StorageService from '../../../services/storage'

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password, remember_me }, { rejectWithValue }) => {
        try {
            const { data } = await ApiService.login({ email, password })
            StorageService.setToken(data.body.token, remember_me)
            ApiService.setAuthorizationToken(data.body.token)
            return data.body.token
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
