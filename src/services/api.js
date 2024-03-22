import axios from 'axios'
import StorageService from './storage'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
})

const setAuthorizationToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const login = async ({ email, password }) =>
    await instance.post('/login', {
        email,
        password
    })

const token = StorageService.getToken()
if (token) {
    setAuthorizationToken(token)
}

const getProfile = async () => await instance.post('/profile')

const putProfile = async ({ firstName, lastName }) =>
    await instance.put('/profile', {
        firstName,
        lastName
    })

const ApiService = {
    setAuthorizationToken,
    login,
    getProfile,
    putProfile
}

export default ApiService
