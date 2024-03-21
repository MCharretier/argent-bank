import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfile, login, setAuthorizationToken } from '../../../services/api'
import { setToken } from '../../../services/storage'

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password, remember_me }, { rejectWithValue }) => {
        try {
            const { data } = await login({ email, password })
            setToken(data.body.token, remember_me)
            setAuthorizationToken(data.body.token)
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

export const userProfile = createAsyncThunk(
    'auth/profile',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getProfile()
            return data.body
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
