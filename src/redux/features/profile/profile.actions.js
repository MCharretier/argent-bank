import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfile, putProfile } from '../../../services/api'

export const userGetProfile = createAsyncThunk(
    'profile/getProfile',
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

export const userPutProfile = createAsyncThunk(
    'profile/putProfile',
    async ({ firstName, lastName }, { rejectWithValue }) => {
        try {
            const { data } = await putProfile({ firstName, lastName })
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
