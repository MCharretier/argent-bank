import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/auth.slice'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = configureStore(
    {
        reducer: {
            auth: authReducer
        }
    },
    composeWithDevTools()
)

export default store
