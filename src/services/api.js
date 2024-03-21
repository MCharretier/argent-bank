import axios from 'axios'
import { getToken } from './storage'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
})

export const setAuthorizationToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const login = async ({ email, password }) =>
    await instance.post('/login', {
        email,
        password
    })

const token = getToken()
if (token) {
    setAuthorizationToken(token)
}

export const getProfile = async () => await instance.post('/profile')

export const putProfile = async ({ firstName, lastName }) =>
    await instance.put('/profile', {
        firstName,
        lastName
    })
