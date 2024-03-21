import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/auth.slice'
import profileReducer from '../features/profile/profile.slice'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            profile: profileReducer
        }
    },
    composeWithDevTools()
)

export default store
